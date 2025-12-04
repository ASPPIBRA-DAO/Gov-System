import type { ColorSystem } from '@mui/material/styles';
import type { SettingsState } from 'src/components/settings';
import type { ThemeOptions, ThemeColorScheme } from '../types';

import { setFont, hexToRgbChannel, createPaletteChannel } from 'minimal-shared/utils';

import { primaryColorPresets } from './color-presets';
import { createShadowColor } from '../core/custom-shadows';

// ----------------------------------------------------------------------

/**
 * Updates the core theme with the provided settings state.
 * @param theme - The base theme options to update.
 * @param settingsState - The settings state containing direction, fontFamily, contrast, and primaryColor.
 * @returns Updated theme options with applied settings.
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

  const lightPalette = theme.colorSchemes?.light?.palette as ColorSystem['palette'] | undefined;

  const primaryColorPalette = createPaletteChannel(primaryColorPresets[primaryColor]);

  const updateColorScheme = (schemeName: ThemeColorScheme) => {
    const currentScheme = theme.colorSchemes?.[schemeName];

    const paletteBase = currentScheme?.palette ?? {};
    const customShadowsBase = currentScheme?.customShadows ?? {};

    const updatedPalette = {
      ...paletteBase,

      // Apply primary-color overrides
      ...(!isDefaultPrimaryColor && {
        primary: primaryColorPalette,
      }),

      // LIGHT MODE BACKGROUND MODIFICATIONS
      ...(schemeName === 'light' && lightPalette && {
        background: {
          ...(lightPalette.background ?? {}),

          // Contrast override (safe guards added)
          ...(!isDefaultContrast &&
            lightPalette.grey && {
              default: lightPalette.grey[200],
              defaultChannel: hexToRgbChannel(lightPalette.grey[200]),
            }),
        },
      }),
    };

    const updatedCustomShadows = {
      ...customShadowsBase,

      ...(!isDefaultPrimaryColor && {
        primary: createShadowColor(primaryColorPalette.mainChannel),
      }),
    };

    return {
      ...currentScheme,
      palette: updatedPalette,
      customShadows: updatedCustomShadows,
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
