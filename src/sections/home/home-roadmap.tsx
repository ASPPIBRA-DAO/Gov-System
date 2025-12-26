import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const ROADMAP_PHASES = [
  {
    phase: 'Fase 01',
    title: 'Fundação & Compliance',
    time: 'Q3 - Q4 2025',
    description: 'Estabelecimento da estrutura jurídica da DAO, governança institucional e registro oficial (CAR) dos primeiros produtores rurais em Paraty.',
    status: 'completed',
    icon: 'solar:Document-bold-duotone',
  },
  {
    phase: 'Fase 02',
    title: 'Tokenização RWA (MVP)',
    time: 'Q1 - Q2 2026',
    description: 'Lançamento do Identity Provider (IdP) soberano e primeira tokenização de ativos reais focada na produção de café agroecológico.',
    status: 'in_progress',
    icon: 'solar:cup-first-bold-duotone',
  },
  {
    phase: 'Fase 03',
    title: 'Escala & Binance Listing',
    time: 'Q3 - Q4 2026',
    description: 'Expansão do ecossistema de crédito agrícola via IA e submissão do processo de listagem do token de governança em exchanges globais.',
    status: 'next',
    icon: 'solar:chart-2-bold-duotone',
  },
  {
    phase: 'Fase 04',
    title: 'Ecossistema Global Agro',
    time: '2027+',
    description: 'Plena integração de ativos RWA internacionais e rede global de agroecologia sustentada pela infraestrutura ASPPIBRA-DAO.',
    status: 'next',
    icon: 'solar:globus-bold-duotone',
  },
];

// ----------------------------------------------------------------------

export function HomeRoadmap({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const renderDescription = () => (
    <SectionTitle
      caption="Our Journey"
      title="Roadmap de"
      txtGradient="Transformação"
      description="Nossa jornada é guiada pela transparência e pelo compromisso de levar o produtor rural para o centro da nova economia digital."
      sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}
    />
  );

  const renderLines = () => (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <FloatLine vertical sx={{ left: '50%', ml: -0.125 }} />
      <Stack
        spacing={20}
        alignItems="center"
        sx={{
          top: 200,
          left: '50%',
          zIndex: 2,
          bottom: 100,
          position: 'absolute',
          transform: 'translateX(-50%)',
        }}
      >
        <FloatDotIcon />
        <FloatDotIcon sx={{ width: 14, height: 14 }} />
        <FloatDotIcon sx={{ width: 14, height: 14 }} />
        <FloatDotIcon />
      </Stack>
    </Box>
  );

  return (
    <Box
      sx={[
        { 
          position: 'relative',
          overflow: 'hidden', // Previne o vazamento dos elementos da timeline
        }, 
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container>
          {renderDescription()}

          <Grid container spacing={5} justifyContent="center" sx={{ position: 'relative', zIndex: 10 }}>
            {ROADMAP_PHASES.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <Grid key={item.title} size={{ xs: 12 }}>
                  <m.div variants={isEven ? varFade('inLeft') : varFade('inRight')}>
                    <Stack
                      direction={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }}
                      alignItems="center"
                      justifyContent="center"
                      spacing={5}
                    >
                      {/* Card de Conteúdo */}
                      <Box sx={{ width: { xs: 1, md: 0.45 } }}>
                        <Card
                          sx={{
                            p: 4,
                            bgcolor: 'background.paper',
                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                            boxShadow: theme.customShadows.z16,
                            textAlign: isEven ? 'right' : 'left',
                            ...(theme.palette.mode === 'dark' && {
                                bgcolor: alpha(theme.palette.background.paper, 0.8),
                            })
                          }}
                        >
                          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800 }}>
                            {item.phase} • {item.time}
                          </Typography>
                          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>{item.title}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                            {item.description}
                          </Typography>
                        </Card>
                      </Box>

                      {/* Ícone Centralizado na Linha */}
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          zIndex: 11,
                          display: 'flex',
                          borderRadius: '50%',
                          alignItems: 'center',
                          position: 'relative',
                          justifyContent: 'center',
                          bgcolor: item.status === 'completed' ? 'primary.main' : 'background.paper',
                          border: `solid 4px ${alpha(theme.palette.primary.main, 0.2)}`,
                          color: item.status === 'completed' ? 'common.white' : 'primary.main',
                          boxShadow: (t) => t.customShadows.primary,
                        }}
                      >
                        <Iconify icon={item.icon as any} width={32} />
                      </Box>

                      {/* Espaçador para simular a Timeline em Desktop */}
                      <Box sx={{ width: { xs: 0, md: 0.45 }, display: { xs: 'none', md: 'block' } }} />
                    </Stack>
                  </m.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}
