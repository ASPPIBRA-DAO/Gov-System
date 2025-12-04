import type { ColorSystem } from '@mui/material/styles';
import type { SettingsState } from 'src/components/settings';
import type { ThemeOptions, ThemeColorScheme } from '../types';

import { setFont, hexToRgbChannel, createPaletteChannel } from 'minimal-shared/utils';
import { primaryColorPresets } from './color-presets';
import { createShadowColor } from '../core/custom-shadows';

// ----------------------------------------------------------------------
/**
 * Apply runtime settings (direction, font, contrast, colors)
 * to the existing theme options.
 */
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

  // Work with partial palette shape (options-like)
  const lightPalette = (theme.colorSchemes?.light?.palette ?? {}) as Partial<
    ColorSystem['palette']
  >;

  const primaryColorPalette = createPaletteChannel(primaryColorPresets[primaryColor]);

  const updateColorScheme = (schemeName: ThemeColorScheme) => {
    const scheme = theme.colorSchemes?.[schemeName] ?? {};

    const basePalette = (scheme.palette && typeof scheme.palette === 'object'
      ? (scheme.palette as Partial<ColorSystem['palette']>)
      : {}) as Partial<ColorSystem['palette']>;

    const baseCustomShadows =
      scheme.customShadows && typeof scheme.customShadows === 'object'
        ? (scheme.customShadows as Record<string, any>)
        : {};

    // Start with a shallow copy of base palette (partial/options-like)
    const newPalette: Partial<ColorSystem['palette']> = { ...basePalette };

    // Primary overrides
    if (!isDefaultPrimaryColor) {
      newPalette.primary = primaryColorPalette as unknown as ColorSystem['palette']['primary'];
    }

    // LIGHT MODE: construct a background object that satisfies MUI's required fields
    if (schemeName === 'light') {
      // Extract known values from existing lightPalette
      const existingBg = (lightPalette.background as Record<string, any>) || {};
      const existingGrey = (lightPalette.grey || {}) as Record<string, string | undefined>;

      // Compute sensible fallbacks:
      const fallbackDefault = existingGrey[200] ?? existingBg.default ?? '#ffffff';
      const fallbackPaper = existingBg.paper ?? '#ffffff';
      const fallbackNeutral = existingBg.neutral ?? existingGrey[50] ?? '#f7f7f7';

      // Create a background object that includes the required properties
      const backgroundObj: Record<string, any> = {
        // required by TypeBackground (ensure presence)
        default: fallbackDefault,
        paper: fallbackPaper,
        neutral: fallbackNeutral,
        // channel form required by PaletteBackgroundChannel
        neutralChannel: hexToRgbChannel(fallbackNeutral),
        // keep any existing keys (e.g., variants) but values from existingBg win
        ...existingBg,
      };

      // If contrast override requested, set/override default and defaultChannel
      if (!isDefaultContrast) {
        const contrastDefault = existingGrey[200] ?? backgroundObj.default;
        backgroundObj.default = contrastDefault;
        backgroundObj.defaultChannel = contrastDefault
          ? hexToRgbChannel(contrastDefault)
          : backgroundObj.defaultChannel;
      }

      newPalette.background = backgroundObj as unknown as ColorSystem['palette']['background'];
    }

    // CUSTOM SHADOWS
    const newCustomShadows: Record<string, any> = { ...baseCustomShadows };
    if (!isDefaultPrimaryColor) {
      newCustomShadows.primary = createShadowColor(
        (primaryColorPalette as any).mainChannel
      );
    }

    // Return scheme with partial palette (but background now contains required fields)
    return {
      ...scheme,
      palette: newPalette as ColorSystem['palette'],
      customShadows: newCustomShadows as any,
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
