import type { ColorSystem } from '@mui/material/styles';
import type { SettingsState } from 'src/components/settings';
import type { ThemeOptions, ThemeColorScheme } from '../types';

import { setFont, hexToRgbChannel, createPaletteChannel } from 'minimal-shared/utils';
import { primaryColorPresets } from './color-presets';
import { createShadowColor } from '../core/custom-shadows';

// ----------------------------------------------------------------------

export function applySettingsToTheme(
  theme: ThemeOptions,
  settingsState?: SettingsState
): ThemeOptions {
  const {
    direction,
    fontFamily,
    contrast = 'default',
    primaryColor = 'default',
  } = settingsState ?? {};

  const isDefaultContrast = contrast === 'default';
  const isDefaultPrimaryColor = primaryColor === 'default';

  const lightPalette = (theme.colorSchemes?.light?.palette ?? {}) as Partial<ColorSystem['palette']>;
  const primaryColorPalette = createPaletteChannel(primaryColorPresets[primaryColor]);

  const safeObject = (value: unknown): Record<string, any> =>
    value && typeof value === 'object' ? (value as Record<string, any>) : {};

  const updateColorScheme = (schemeName: ThemeColorScheme) => {
    const scheme = safeObject(theme.colorSchemes?.[schemeName]);

    const basePalette = safeObject(scheme.palette) as Partial<ColorSystem['palette']>;
    const baseCustomShadows = safeObject(scheme.customShadows);

    const newPalette: Partial<ColorSystem['palette']> = { ...basePalette };

    // PRIMARY COLOR
    if (!isDefaultPrimaryColor) {
      newPalette.primary = primaryColorPalette as unknown as ColorSystem['palette']['primary'];
    }

    // ---------------------------------------------
    // LIGHT BACKGROUND FIX (Cloudflare-safe version)
    // ---------------------------------------------
    if (schemeName === 'light') {
      const existingBg = safeObject(lightPalette.background);
      const existingGrey = safeObject(lightPalette.grey);

      const fallbackDefault = existingBg[200] ?? existingBg.default ?? '#ffffff';
      const fallbackPaper = existingBg.paper ?? '#ffffff';
      const fallbackNeutral = existingBg.neutral ?? existingGrey[50] ?? '#f7f7f7';

      const backgroundObj = {
        default: fallbackDefault,
        paper: fallbackPaper,
        neutral: fallbackNeutral,
        neutralChannel: hexToRgbChannel(fallbackNeutral),
        ...safeObject(existingBg),
      };

      if (!isDefaultContrast) {
        const contrastDefault = existingGrey[200] ?? backgroundObj.default;
        backgroundObj.default = contrastDefault;
        // O TS não reconhece defaultChannel no tipo oficial de background
        (backgroundObj as any).defaultChannel = hexToRgbChannel(contrastDefault);
      }

      newPalette.background = backgroundObj as ColorSystem['palette']['background'];
    }

    // CUSTOM SHADOWS
    const newCustomShadows = {
      ...baseCustomShadows,
      ...( !isDefaultPrimaryColor && {
        primary: createShadowColor((primaryColorPalette as any).mainChannel),
      }),
    };

    return {
      ...scheme,
      palette: newPalette as ColorSystem['palette'],
      customShadows: newCustomShadows,
    };
  };

  return {
    ...theme,
    direction,
    colorSchemes: {
      light: updateColorScheme('light'),
      dark: updateColorScheme('dark'),
    },
    typography: {
      ...theme.typography,
      fontFamily: setFont(fontFamily),
    },
  };
}
