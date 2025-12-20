import type { BoxProps } from '@mui/material/Box';

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

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const ECOSYSTEM_ITEMS = [
  {
    title: 'RWA & Tokenização',
    description: 'Transformação de propriedades físicas e ativos reais em ativos digitais líquidos e fracionados.',
    icon: 'solar:globus-bold-duotone',
    color: 'primary',
  },
  {
    title: 'Agroecologia',
    description: 'Conectando a produção rural sustentável de Paraty ao crédito e financiamento Web3.',
    icon: 'solar:leaf-bold-duotone',
    color: 'success',
  },
  {
    title: 'Legal-Tech',
    description: 'Segurança jurídica e compliance integrados para garantir a validade de ativos digitais.',
    icon: 'solar:shield-check-bold-duotone',
    color: 'info',
  },
  {
    title: 'Governança DAO',
    description: 'Gestão transparente e descentralizada para proprietários através da ASPPIBRA-DAO.',
    icon: 'solar:users-group-rounded-bold-duotone',
    color: 'warning',
  },
];

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

  const renderDescription = () => (
    <SectionTitle
      caption="Ecosystem"
      title="A Ponte entre o"
      txtGradient="Mundo Real e Digital"
      description={
        <Box component="span" sx={{ display: 'block' }}>
          Somos um ecossistema que conecta segurança jurídica, blockchain e IA para transformar 
          propriedades e projetos reais em ativos digitais de alto valor.
        </Box>
      }
      sx={{ textAlign: { xs: 'center', md: 'left' } }}
    />
  );

  const renderGrid = () => (
    <Grid container spacing={3}>
      {ECOSYSTEM_ITEMS.map((item) => (
        <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
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
                },
              }}
            >
              <Iconify 
                icon={item.icon as any} 
                width={44} 
                sx={{ color: `${item.color}.main` }} 
              />
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
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
      component="section"
      sx={[
        { 
          pt: { xs: 10, md: 20 }, 
          pb: { xs: 10, md: 15 },
          position: 'relative',
        }, 
        ...(Array.isArray(sx) ? sx : [sx])
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
                  color="inherit"
                  size="large"
                  variant="outlined"
                  // SINTAXE CORRIGIDA: as any dentro das chaves
                  endIcon={<Iconify icon={"solar:alt-arrow-right-outline" as any} />}
                  sx={{ mt: 5, px: 3, height: 52, borderRadius: 1.2 }}
                >
                  Explorar a plataforma
                </Button>
              </m.div>
            </Grid>

            {/* Lado Direito: Grid de Cards */}
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>
              {renderGrid()}
            </Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}