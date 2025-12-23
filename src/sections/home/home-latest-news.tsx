import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const NEWS_DATA = [
  {
    title: 'Rumo à Binance: Avanços na Listagem Institucional',
    category: 'Cripto',
    date: '20 Dez 2025',
    description: 'Concluímos a submissão dos frameworks de compliance jurídico exigidos para a listagem global.',
    cover: _mock.image.cover(1),
  },
  {
    title: 'Expansão Agroecológica em Paraty',
    category: 'Agro',
    date: '15 Dez 2025',
    description: 'Novas cooperativas de café orgânico integram o ecossistema de inventário digital da ASPPIBRA.',
    cover: _mock.image.cover(2),
  },
  {
    title: 'Nova Camada de Segurança no IdP',
    category: 'Tecnologia',
    date: '10 Dez 2025',
    description: 'Implementação de MFA avançado e assinaturas multi-sig para transações de ativos reais.',
    cover: _mock.image.cover(3),
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

export function HomeLatestNews({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const renderDescription = () => (
    <SectionTitle
      caption="Updates"
      title="Fique por dentro das"
      txtGradient="últimas notícias"
      description="Acompanhe a evolução da ASPPIBRA-DAO, desde as colheitas em Paraty até os avanços tecnológicos na blockchain global."
      sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 5 }}
    />
  );

  return (
    <Box
      sx={[
        { 
          position: 'relative',
        }, 
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            
            {/* Lado Esquerdo: Título e Call to Action */}
            <Grid size={{ xs: 12, md: 4 }}>
              {renderDescription()}
              <m.div variants={varFade('inUp')}>
                <Button
                  color="inherit"
                  variant="outlined"
                  size="large"
                  endIcon={<Iconify icon={"solar:alt-arrow-right-outline" as any} />}
                  sx={{ borderRadius: 1.2, height: 52, display: { xs: 'none', md: 'inline-flex' } }}
                >
                  Ver todas as notícias
                </Button>
              </m.div>
            </Grid>

            {/* Lado Direito: Grid de Notícias */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={3}>
                {NEWS_DATA.map((post, index) => (
                  <Grid key={post.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <m.div variants={varFade('inUp')} transition={{ delay: index * 0.1 }}>
                      <Card
                        sx={{
                          transition: theme.transitions.create('all'),
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: theme.customShadows.z24,
                          },
                        }}
                      >
                        <Box sx={{ position: 'relative', pt: '60%' }}>
                          <Box
                            component="img"
                            alt={post.title}
                            src={post.cover}
                            sx={{ top: 0, width: 1, height: 1, position: 'absolute', objectFit: 'cover' }}
                          />
                        </Box>

                        <Stack spacing={2} sx={{ p: 3 }}>
                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800 }}>
                              {post.category}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                              {post.date}
                            </Typography>
                          </Stack>

                          <Link color="inherit" variant="subtitle1" sx={{ fontWeight: 700, height: 48, overflow: 'hidden' }}>
                            {post.title}
                          </Link>

                          <Typography variant="body2" sx={{ color: 'text.secondary', height: 40, overflow: 'hidden' }}>
                            {post.description}
                          </Typography>
                        </Stack>
                      </Card>
                    </m.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}