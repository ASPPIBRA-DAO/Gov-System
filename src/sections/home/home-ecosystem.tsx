import type { BoxProps } from '@mui/material/Box';

import { useMemo } from 'react'; // Adicionado para performance
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        zIndex: 2,
        bottom: 64,
        position: 'absolute',
        transform: 'translateX(-50%)',
        display: { xs: 'none', md: 'flex' },
        '& span': { position: 'static', opacity: 0.12 },
      }}
    >
      <FloatDotIcon />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <Box sx={{ flexGrow: 1 }} />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <FloatDotIcon />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80, display: { xs: 'none', md: 'block' } }} />
  </>
);

export function HomeEcosystem({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const { t } = useTranslate();

  // Otimizado com useMemo para performance e consistência com i18n
  const ECOSYSTEM_ITEMS = useMemo(() => [
    {
      id: 'reurb',
      title: t('ecosystem.items.reurb.title'),
      description: t('ecosystem.items.reurb.description'),
      icon: 'solar:square-academic-cap-bold-duotone',
      color: 'primary',
    },
    {
      id: 'agro',
      title: t('ecosystem.items.agro.title'),
      description: t('ecosystem.items.agro.description'),
      icon: 'solar:rocket-bold-duotone',
      color: 'success',
    },
    {
      id: 'defi',
      title: t('ecosystem.items.defi.title'),
      description: t('ecosystem.items.defi.description'),
      icon: 'solar:chart-2-bold-duotone',
      color: 'info',
    },
    {
      id: 'governance',
      title: t('ecosystem.items.governance.title'),
      description: t('ecosystem.items.governance.description'),
      icon: 'solar:token-bold-duotone',
      color: 'warning',
    },
  ], [t]);

  const renderDescription = () => (
    <SectionTitle
      caption={t('ecosystem.caption')}
      title={t('ecosystem.title')}
      txtGradient={t('ecosystem.title_highlight')}
      description={
        <Box component="span" sx={{ display: 'block', lineHeight: 1.8 }}>
          {t('ecosystem.description')}
        </Box>
      }
      sx={{ textAlign: { xs: 'center', md: 'left' } }}
    />
  );

  const renderGrid = () => (
    <Grid container spacing={3}>
      {ECOSYSTEM_ITEMS.map((item) => (
        <Grid key={item.id} size={{ xs: 12, sm: 6 }}>
          <m.div variants={varFade('inUp')}>
            <Stack
              spacing={2.5}
              sx={{
                p: 3.5,
                borderRadius: 2,
                bgcolor: 'background.neutral',
                border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                transition: theme.transitions.create(['all']),
                '&:hover': {
                  bgcolor: 'background.paper',
                  boxShadow: theme.customShadows.z24,
                  transform: 'translateY(-4px)',
                  '& .icon-container': {
                    bgcolor: alpha(theme.palette[item.color as 'primary'].main, 0.15),
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <Box
                className="icon-container"
                sx={{
                  width: 64,
                  height: 64,
                  display: 'flex',
                  borderRadius: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: theme.transitions.create(['all']),
                  bgcolor: alpha(theme.palette[item.color as 'primary'].main, 0.1),
                }}
              >
                <Iconify
                  icon={item.icon as any}
                  width={36}
                  sx={{ color: `${item.color}.main` }}
                />
              </Box>

              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {item.description}
                </Typography>
              </Stack>
            </Stack>
          </m.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      id="home-ecosystem"
      component="section"
      sx={[
        {
          position: 'relative',
          overflow: 'hidden', // Segurança contra vazamento lateral de elementos flutuantes
          py: { xs: 10, md: 15 }, // Respiro visual para tom institucional
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            {/* Lado Esquerdo: Texto e Título */}
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              {renderDescription()}

              <m.div variants={varFade('inUp')}>
                <Button
                  component={RouterLink}
                  href={paths.dashboard.root}
                  color="primary"
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon={'solar:alt-arrow-right-outline' as any} />}
                  sx={{
                    mt: 5,
                    px: 4,
                    height: 56,
                    borderRadius: 1.2,
                    boxShadow: theme.customShadows.primary,
                  }}
                >
                  {t('ecosystem.cta')}
                </Button>
              </m.div>
            </Grid>

            {/* Lado Direito: Grid de Cards */}
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>{renderGrid()}</Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}
