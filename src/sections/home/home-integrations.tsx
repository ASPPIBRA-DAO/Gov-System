import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { CONFIG } from 'src/global-config';

import { varScale, MotionViewport } from 'src/components/animate';

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
        '& span': { position: 'static', opacity: 0.12 },
      }}
    >
      <FloatDotIcon />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <Box sx={{ flexGrow: 1 }} />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <FloatDotIcon />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeIntegrations({ sx, ...other }: BoxProps) {
  const renderDescription = () => (
    <SectionTitle
      caption="Infrastructure"
      title="Conectividade Global &"
      txtGradient="Infraestrutura de Ponta"
      description={
        <>
          <Box component="span" sx={{ mb: 2, display: 'block', lineHeight: 1.7 }}>
            Nossa infraestrutura combina as camadas mais seguras da Web3 com o desempenho da 
            computação de borda (Edge Computing). Garantimos que a gestão de ativos RWA e a sua 
            Credencial CAD estejam sempre disponíveis e auditáveis.
          </Box>

          <Box
            component="span"
            sx={{ 
              fontWeight: 600, 
              color: 'text.secondary', 
              typography: 'caption',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            * Criptografia de nível governamental e imutabilidade on-chain garantida.
          </Box>
        </>
      }
      sx={{ textAlign: { xs: 'center', md: 'left' } }}
    />
  );

  const renderImage = () => (
    <Box
      component={m.img}
      variants={{ ...varScale('in'), initial: { scale: 0.8, opacity: 0 } }}
      alt="ASPPIBRA Infrastructure"
      src={`${CONFIG.assetsDir}/assets/illustrations/illustration-integration.webp`}
      sx={{ width: 720, objectFit: 'cover', aspectRatio: '1/1' }}
    />
  );

  return (
    <Box
      sx={[
        { 
          position: 'relative' 
        }, 
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>{renderDescription()}</Grid>

            <Grid sx={{ textAlign: { xs: 'center', md: 'right' } }} size={{ xs: 12, md: 6, lg: 7 }}>
              {renderImage()}
            </Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}