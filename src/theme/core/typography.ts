
import type { Breakpoint, TypographyVariantsOptions } from '@mui/material/styles';

import { pxToRem, setFont } from 'minimal-shared/utils';

import { createTheme } from '@mui/material/styles';

import { themeConfig } from '../theme-config';

// ----------------------------------------------------------------------

// 1. EXTENSÃO DE TIPOS (Module Augmentation)
// Isso resolve os erros de "Property does not exist on type TypographyVariants"
declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
    fontWeightExtraBold: React.CSSProperties['fontWeight'];
    fontSecondaryFamily: React.CSSProperties['fontFamily'];
  }
  interface TypographyVariantsOptions {
    fontWeightSemiBold?: React.CSSProperties['fontWeight'];
    fontWeightExtraBold?: React.CSSProperties['fontWeight'];
    fontSecondaryFamily?: React.CSSProperties['fontFamily'];
  }
}

// ----------------------------------------------------------------------

function responsiveFontSizes(sizes: Partial<Record<Breakpoint, number>>) {
  const { breakpoints: { keys, up } } = createTheme();

  return keys.reduce((styles, breakpoint) => {
    const size = sizes[breakpoint];
    if (size !== undefined && size >= 0) {
      styles[up(breakpoint)] = { fontSize: pxToRem(size) };
    }
    return styles;
  }, {} as any);
}

const primaryFont = setFont(themeConfig.fontFamily.primary);
const secondaryFont = setFont(themeConfig.fontFamily.secondary);

const baseTypography = {
  fontFamily: primaryFont,
  fontSecondaryFamily: secondaryFont,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
};

export const typography: TypographyVariantsOptions = {
  ...baseTypography,
  h1: {
    fontFamily: secondaryFont,
    fontWeight: baseTypography.fontWeightExtraBold,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontFamily: secondaryFont,
    fontWeight: baseTypography.fontWeightExtraBold,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: secondaryFont,
    fontWeight: baseTypography.fontWeightBold,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: baseTypography.fontWeightBold,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ md: 24 }),
  },
  h5: {
    fontWeight: baseTypography.fontWeightBold,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19 }),
  },
  h6: {
    fontWeight: baseTypography.fontWeightSemiBold,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18 }),
  },
  body1: {
    lineHeight: 1.8,
    fontSize: pxToRem(16),
    textAlign: 'justify',
    textJustify: 'inter-word',
    hyphens: 'auto',
  },
  body2: {
    lineHeight: 1.7,
    fontSize: pxToRem(14),
    textAlign: 'justify',
    textJustify: 'inter-word',
    hyphens: 'auto',
  },
  subtitle1: {
    fontWeight: baseTypography.fontWeightSemiBold,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: baseTypography.fontWeightSemiBold,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: baseTypography.fontWeightBold,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: baseTypography.fontWeightBold,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  },
};
