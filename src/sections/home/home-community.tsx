import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import { alpha, useTheme } from '@mui/material/styles';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const METRICS = [
  { label: 'Produtores em Paraty', value: '+500', icon: 'solar:users-group-rounded-bold-duotone' },
  { label: 'Hectares Protegidos', value: '+10k', icon: 'solar:map-arrow-square-bold-duotone' },
  { label: 'Ativos Geridos', value: 'R$ 42M', icon: 'solar:wad-of-money-bold-duotone' },
];

const SOCIAL_CHANNELS = [
  { name: 'Discord', icon: 'bi:discord', color: '#5865F2' },
  { name: 'Telegram', icon: 'logos:telegram', color: '#0088cc' },
  { name: 'Instagram', icon: 'skill-icons:instagram', color: '#E4405F' },
];

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        right: 80,
        zIndex: 2,
        bottom: 64,
        position: 'absolute',
        transform: 'translateX(50%)',
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

    <FloatLine vertical sx={{ top: 0, right: 80, display: { xs: 'none', md: 'block' } }} />
  </>
);

export function HomeCommunity({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const renderDescription = () => (
    <SectionTitle
      caption="Community"
      title="Unidos pela terra,"
      txtGradient="ASPPIBRA-DAO"
      description="Nossa comunidade conecta o produtor rural de Paraty à economia digital global. Juntos, garantimos segurança jurídica, protegemos o território e escalamos ativos agroecológicos."
      sx={{ textAlign: { xs: 'center', md: 'left' } }}
    />
  );

  const renderStats = () => (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      {METRICS.map((stat) => (
        <Grid key={stat.label} size={{ xs: 6, sm: 4 }}>
          <m.div variants={varFade('inUp')}>
            <Stack spacing={0.5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main' }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold', textTransform: 'uppercase' }}>
                {stat.label}
              </Typography>
            </Stack>
          </m.div>
        </Grid>
      ))}
    </Grid>
  );

  const renderSocialHub = () => (
    <m.div variants={varFade('inRight')}>
      <Box
        sx={{
          p: 5,
          borderRadius: 3,
          position: 'relative',
          bgcolor: 'background.neutral',
          border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
          boxShadow: theme.customShadows.z24,
          overflow: 'hidden',
        }}
      >
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h4">Ecossistema Global</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              De Paraty para o mundo. Nossa governança descentralizada permite que investidores e produtores colaborem em um ambiente 100% transparente e auditável.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <AvatarGroup max={4} sx={{ [`& .MuiAvatar-root`]: { width: 40, height: 40 } }}>
              {[...Array(5)].map((_, index) => (
                <Avatar key={index} alt={_mock.fullName(index)} src={_mock.image.avatar(index + 10)} />
              ))}
            </AvatarGroup>
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              +500 membros ativos
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            {SOCIAL_CHANNELS.map((channel) => (
              <Button
                key={channel.name}
                variant="soft"
                color="inherit"
                startIcon={<Iconify icon={channel.icon as any} width={20} />}
                sx={{ borderRadius: 1, bgcolor: alpha(channel.color, 0.08), color: channel.color }}
              >
                {channel.name}
              </Button>
            ))}
          </Stack>
        </Stack>

        {/* Elemento Decorativo: Mapa Mundi de Fundo Sutil */}
        <Iconify
          icon={"solar:earth-bold-duotone" as any}
          sx={{
            position: 'absolute',
            bottom: -40,
            right: -40,
            width: 240,
            height: 240,
            opacity: 0.03,
            color: theme.palette.primary.main,
          }}
        />
      </Box>
    </m.div>
  );

  return (
    <Box
      component="section"
      sx={[
        { 
          pt: { xs: 10, md: 15 }, 
          pb: { xs: 10, md: 20 },
          position: 'relative',
          bgcolor: 'background.default',
          overflow: 'hidden'
        }, 
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Grid container spacing={{ xs: 8, md: 10 }} alignItems="center">
            {/* Esquerda: Conteúdo e Métricas */}
            <Grid size={{ xs: 12, md: 6 }}>
              {renderDescription()}
              {renderStats()}
              
              <m.div variants={varFade('inUp')}>
                <Stack direction="row" spacing={2} sx={{ mt: 5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ height: 52, px: 4, borderRadius: 1.2 }}
                  >
                    Filiar-se agora
                  </Button>
                  <Link
                    href="#"
                    color="inherit"
                    variant="subtitle2"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, opacity: 0.7 }}
                  >
                    Ver governança on-chain <Iconify icon={"solar:external-link-outline" as any} width={18} />
                  </Link>
                </Stack>
              </m.div>
            </Grid>

            {/* Direita: Social Hub Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              {renderSocialHub()}
            </Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}