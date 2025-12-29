import type { BoxProps } from '@mui/material/Box';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';
import { fDate } from 'src/utils/format-time';

import { useGetPosts } from 'src/actions/blog';
import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { SplashScreen } from 'src/components/loading-screen';

import { SectionTitle } from './components/section-title';
import { FloatDotIcon, FloatLine } from './components/svg-elements';

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
  const { t } = useTranslate();
  const { posts, postsLoading } = useGetPosts();

  // Lógica de Fallback aprimorada
  const hasPosts = posts.length > 0;
  const displayPosts = hasPosts
    ? posts.slice(0, 3)
    : Array.from({ length: 3 }).map((_, index) => ({
        id: `fallback-${index}`,
        title: t('home.latest_news.fallback.title'),
        description: t('home.latest_news.fallback.description'),
        coverUrl: _mock.image.cover(index + 4),
        createdAt: new Date(),
        category: t('home.latest_news.fallback.category'),
      }));

  if (postsLoading) {
    return (
      <Box sx={{ py: 20 }}>
        <SplashScreen />
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          position: 'relative',
          bgcolor: 'background.default', // Garante consistência com o tema
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            
            {/* Lado Esquerdo: Descrição e CTA Principal */}
            <Grid size={{ xs: 12, md: 4 }}>
              <SectionTitle
                caption={t('home.latest_news.caption')}
                title={t('home.latest_news.title')}
                txtGradient={t('home.latest_news.txt_gradient')}
                description={t('home.latest_news.description')}
                sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 5 }}
              />

              <m.div variants={varFade('inUp')}>
                <Button
                  component={RouterLink}
                  href={paths.post.root}
                  color="inherit"
                  variant="outlined"
                  size="large"
                  endIcon={<Iconify icon="solar:double-alt-arrow-right-bold-duotone" />}
                  sx={{
                    borderRadius: 1.2,
                    height: 52,
                    px: 3,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  {t('home.latest_news.view_all')}
                </Button>
              </m.div>
            </Grid>

            {/* Lado Direito: Cards de Notícias */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={3}>
                {displayPosts.map((post, index) => (
                  <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <m.div variants={varFade('inUp')} transition={{ delay: index * 0.1 }}>
                      <Card
                        component={RouterLink}
                        href={hasPosts ? paths.post.details(post.title) : paths.comingSoon}
                        sx={{
                          height: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          borderRadius: 2,
                          bgcolor: 'background.paper',
                          border: `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
                          transition: theme.transitions.create(['transform', 'box-shadow', 'background-color']),
                          '&:hover': {
                            transform: 'translateY(-12px)',
                            boxShadow: theme.customShadows.z24,
                            '& .card-image': { transform: 'scale(1.15)' }, // Efeito de Zoom
                          },
                        }}
                      >
                        {/* Imagem com Overlay e Zoom */}
                        <Box sx={{ position: 'relative', pt: '66%', overflow: 'hidden' }}>
                          <Box
                            component="img"
                            className="card-image"
                            alt={post.title}
                            src={post.coverUrl}
                            sx={{
                              top: 0,
                              width: 1,
                              height: 1,
                              position: 'absolute',
                              objectFit: 'cover',
                              transition: theme.transitions.create('transform', {
                                duration: theme.transitions.duration.complex,
                              }),
                            }}
                          />
                        </Box>

                        {/* Conteúdo do Card */}
                        <Stack spacing={2} sx={{ p: 3, flexGrow: 1 }}>
                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800 }}>
                              {post.category}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                              {fDate(post.createdAt)}
                            </Typography>
                          </Stack>

                          <Link
                            color="inherit"
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              lineHeight: 1.4,
                              height: 44, // Mantém títulos alinhados
                              overflow: 'hidden',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
                            {post.title}
                          </Link>

                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              height: 40,
                              overflow: 'hidden',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
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