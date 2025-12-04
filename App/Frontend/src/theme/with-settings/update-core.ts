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

  // Safe palette
  const lightPalette = (theme.colorSchemes?.light?.palette ??
    {}) as ColorSystem['palette'];

  const primaryColorPalette = createPaletteChannel(primaryColorPresets[primaryColor]);

  const updateColorScheme = (schemeName: ThemeColorScheme) => {
    const scheme = theme.colorSchemes?.[schemeName] || {};

    const palette: ColorSystem['palette'] =
      typeof scheme.palette === 'object' && scheme.palette !== null
        ? scheme.palette
        : ({} as ColorSystem['palette']);

    const customShadows =
      typeof scheme.customShadows === 'object' && scheme.customShadows !== null
        ? scheme.customShadows
        : {};

    // Create NEW palette object without spreads
    const newPalette: ColorSystem['palette'] = {
      ...palette,
    };

    if (!isDefaultPrimaryColor) {
      newPalette.primary = primaryColorPalette;
    }

    if (schemeName === 'light') {
      const bg = lightPalette.background || {};
      newPalette.background = { ...bg };

      if (!isDefaultContrast) {
        newPalette.background.default = lightPalette.grey?.[200];
        newPalette.background.defaultChannel = hexToRgbChannel(
          lightPalette.grey?.[200]
        );
      }
    }

    const newCustomShadows = { ...customShadows };

    if (!isDefaultPrimaryColor) {
      newCustomShadows.primary = createShadowColor(primaryColorPalette.mainChannel);
    }

    // Return FULLY SAFE object
    return {
      ...scheme,
      palette: newPalette,
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
