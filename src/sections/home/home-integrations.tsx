import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { useTranslate } from 'src/locales';

import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';
import { IntegrationsDiagram } from './components/integrations-diagram';

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
  const { t } = useTranslate();

  const renderDescription = () => (
    <SectionTitle
      caption={t('infrastructure.caption')}
      title={t('infrastructure.title')}
      txtGradient={t('infrastructure.title_highlight')}
      description={
        <>
          <Box component="span" sx={{ mb: 2, display: 'block', lineHeight: 1.7 }}>
            {t('infrastructure.description')}
          </Box>

          <Box
            component="span"
            sx={{
              fontWeight: 600,
              color: 'text.secondary',
              typography: 'caption',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {t('infrastructure.footnote')}
          </Box>
        </>
      }
      sx={{ textAlign: { xs: 'center', md: 'left' } }}
    />
  );

  const renderImage = () => <IntegrationsDiagram />;

  return (
    <Box
      sx={[
        {
          position: 'relative',
          overflow: 'hidden',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              {renderDescription()}
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 7 }} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              {renderImage()}
            </Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}
