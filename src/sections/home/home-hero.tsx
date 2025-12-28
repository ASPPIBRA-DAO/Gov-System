import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';
import type { MotionProps, MotionValue } from 'framer-motion';

import { useRef, useState } from 'react';
import { m, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useTranslate } from 'src/locales'; // Importação do Hook de tradução

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

const mdKey: Breakpoint = 'md';

const motionProps: MotionProps = {
  variants: varFade('inUp', { distance: 24 }),
};

export function HomeHero({ sx, ...other }: BoxProps) {
  const { t } = useTranslate(); // Inicialização da tradução
  const scrollProgress = useScrollPercent();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up(mdKey));

  const opacity: MotionValue<number> = useTransform(
    scrollProgress.scrollY,
    [0, 400],
    [1, 0]
  );

  const renderHeading = () => (
    <m.div {...motionProps}>
      <Box
        component="h1"
        sx={(theme) => ({
          my: 0,
          mx: 'auto',
          maxWidth: 960,
          textAlign: 'center',
          display: 'inline-block',
          typography: 'h1',
          fontWeight: 900,
          fontSize: { xs: '2.2rem', md: '4.2rem' },
          lineHeight: { xs: 1.2, md: 1.1 },
          fontFamily: theme.typography.fontSecondaryFamily,
        })}
      >
        {t('hero.title')} <br />
        <Box
          component={m.span}
          animate={{ backgroundPosition: '200% center' }}
          transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
          sx={(theme) => ({
            ...theme.mixins.textGradient(
              `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.info.main} 50%, ${theme.vars.palette.primary.main} 100%`
            ),
            backgroundSize: '200%',
          })}
        >
          {t('hero.title_highlight')}
        </Box>
      </Box>
    </m.div>
  );

  const renderText = () => (
    <m.div {...motionProps}>
      <Typography
        sx={{
          mx: 'auto',
          maxWidth: 900,
          color: 'text.secondary',
          fontSize: { xs: 17, md: 20 },
          lineHeight: 1.6,
          mt: 3,
          '& strong': { color: 'text.primary', fontWeight: 700 }
        }}
      >
        {/* Usamos o texto traduzido aprovado para evitar riscos jurídicos */}
        {t('hero.description')}
      </Typography>
    </m.div>
  );

  const renderButtons = () => (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      spacing={2}
      sx={{ mt: 6 }}
    >
      <m.div {...motionProps}>
        <Button
          component={RouterLink}
          href="/docs/whitepaper.pdf"
          color="primary"
          size="large"
          variant="contained"
          startIcon={<Iconify width={24} icon="solar:file-bold-duotone" />}
          sx={{
            height: 60,
            px: 4,
            fontSize: 18,
            borderRadius: 1.5,
            boxShadow: (theme) => theme.customShadows.primary
          }}
        >
          {t('hero.buttons.whitepaper')}
        </Button>
      </m.div>

      <m.div {...motionProps}>
        <Button
          component={RouterLink}
          href={paths.pricing}
          color="inherit"
          size="large"
          variant="outlined"
          startIcon={<Iconify width={24} icon={"solar:shield-user-bold-duotone" as any} />}
          sx={{
            height: 60,
            px: 4,
            fontSize: 18,
            borderRadius: 1.5,
            backdropFilter: 'blur(8px)',
            borderColor: 'text.primary'
          }}
        >
          {t('hero.buttons.access')}
        </Button>
      </m.div>
    </Stack>
  );

  return (
    <Box
      ref={scrollProgress.elementRef}
      component="section"
      sx={[
        (theme) => ({
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden', // Proteção contra scroll horizontal das animações
          background: `radial-gradient(circle at 50% -10%, ${theme.vars.palette.primary.lighter} 0%, transparent 60%)`,
          [theme.breakpoints.up(mdKey)]: {
            mt: 'calc(var(--layout-header-desktop-height) * -1)',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box component={m.div} style={{ opacity }} sx={{ width: 1, position: 'relative', zIndex: 10 }}>
        <Container component={MotionContainer} sx={{ textAlign: 'center' }}>
          {renderHeading()}
          {renderText()}
          {renderButtons()}
        </Container>
      </Box>

      <HeroBackground />
    </Box>
  );
}

// ----------------------------------------------------------------------

function useScrollPercent() {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;
    if (elementRef.current) heroHeight = elementRef.current.offsetHeight;
    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);
    setPercent(scrollPercent >= 100 ? 100 : Math.floor(scrollPercent));
  });

  return { elementRef, percent, scrollY };
}
