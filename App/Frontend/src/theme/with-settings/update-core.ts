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

  const lightPalette =
    (theme.colorSchemes?.light?.palette as ColorSystem['palette']) || undefined;

  const primaryColorPalette = createPaletteChannel(primaryColorPresets[primaryColor]);

  const updateColorScheme = (schemeName: ThemeColorScheme) => {
    const currentScheme = theme.colorSchemes?.[schemeName];

    // BASE SAFE OBJECTS
    const paletteBase = (currentScheme?.palette as object) ?? {};
    const customShadowsBase = (currentScheme?.customShadows as object) ?? {};

    // -------------------
    // PRIMARY COLOR OVERRIDES (safe)
    // -------------------
    const primaryOverrides: Record<string, any> = {};
    if (!isDefaultPrimaryColor) {
      primaryOverrides.primary = primaryColorPalette;
    }

    // -------------------
    // BACKGROUND OVERRIDES FOR LIGHT MODE (safe)
    // -------------------
    const backgroundOverrides: Record<string, any> = {};

    if (schemeName === 'light' && lightPalette) {
      const bg = { ...(lightPalette.background ?? {}) };

      if (!isDefaultContrast && lightPalette.grey) {
        bg.default = lightPalette.grey[200];
        bg.defaultChannel = hexToRgbChannel(lightPalette.grey[200]);
      }

      backgroundOverrides.background = bg;
    }

    // -------------------
    // CUSTOM SHADOWS OVERRIDES
    // -------------------
    const customShadowOverrides: Record<string, any> = {};
    if (!isDefaultPrimaryColor) {
      customShadowOverrides.primary = createShadowColor(primaryColorPalette.mainChannel);
    }

    return {
      ...currentScheme,
      palette: {
        ...paletteBase,
        ...primaryOverrides,
        ...(Object.keys(backgroundOverrides).length > 0 ? backgroundOverrides : {}),
      },
      customShadows: {
        ...customShadowsBase,
        ...(Object.keys(customShadowOverrides).length > 0 ? customShadowOverrides : {}),
      },
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
