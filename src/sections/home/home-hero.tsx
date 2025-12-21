import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';
import type { MotionProps, MotionValue, SpringOptions } from 'framer-motion';

import { useRef, useState } from 'react';
import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

const mdKey: Breakpoint = 'md';

const motionProps: MotionProps = {
  variants: varFade('inUp', { distance: 24 }),
};

export function HomeHero({ sx, ...other }: BoxProps) {
  const scrollProgress = useScrollPercent();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up(mdKey));

  const opacity: MotionValue<number> = useTransform(
    scrollProgress.scrollY,
    [0, 400],
    [1, 0]
  );

  const renderHeading = () => (
    <m.div {...motionProps}>            
      {/* Headline (H1) Aprovada [cite: 1, 19] */}
      <Box
        component="h1"
        sx={[
          (theme) => ({
            my: 0,
            mx: 'auto',
            maxWidth: 960,
            textAlign: 'center',
            display: 'inline-block',
            typography: 'h1',
            fontWeight: 900,
            fontSize: { xs: '2.2rem', md: '4.2rem' }, // Ajustado para fluidez de leitura
            lineHeight: { xs: 1.2, md: 1.1 },
            fontFamily: theme.typography.fontSecondaryFamily,
          }),
        ]}
      >
        Governança Global Descentralizada sobre <br />
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
          Ativos do Mundo Real
        </Box>
      </Box>
    </m.div>
  );

  const renderText = () => (
    <m.div {...motionProps}>
      {/* Sub-headline com narrativa RWA e ASPPIBRA-DAO [cite: 1, 20-22, 205] */}
      <Typography
        sx={{
          mx: 'auto',
          maxWidth: 900, // Levemente maior para acomodar o texto detalhado
          color: 'text.secondary',
          fontSize: { xs: 17, md: 20 },
          lineHeight: 1.6,
          mt: 3,
        }}
      >
        A ponte definitiva entre o <strong>Mundo Real</strong> e o <strong>Mundo Digital</strong>. 
        A ASPPIBRA-DAO integra segurança jurídica, blockchain e IA para transformar propriedades físicas em ativos de valor exponencial administrados de forma descentralizada com total conformidade legal.
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
      {/* Botão Primário: Saiba Mais [cite: 2, 37] */}
      <m.div {...motionProps}>
        <Button
          component={RouterLink}
          href={paths.dashboard.root} // Link para visão detalhada da DAO
          color="primary"
          size="large"
          variant="contained"
          startIcon={<Iconify width={24} icon={"solar:info-circle-bold-duotone" as any} />}
          sx={{ 
            height: 60, 
            px: 4, 
            fontSize: 18, 
            borderRadius: 1.5,
            boxShadow: (theme) => theme.customShadows.primary 
          }}
        >
          Saiba Mais
        </Button>
      </m.div>

      {/* Botão Secundário: Gatilho de Exclusividade (CAD) [cite: 11, 291] */}
      <m.div {...motionProps}>
        <Button
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
          Garanta sua CAD
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
          overflow: 'hidden',
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
        <Container component={MotionContainer} sx={{ py: 15, textAlign: 'center' }}>
          {renderHeading()}
          {renderText()}
          {renderButtons()}
          
          <m.div {...motionProps} style={{ marginTop: '48px' }}>
             <Link 
               color="inherit" 
               variant="body2" 
               href="#" 
               sx={{ opacity: 0.6, display: 'inline-flex', alignItems: 'center', gap: 1, textDecoration: 'underline' }}
             >
               <Iconify icon={"eva:file-text-outline" as any} width={20} /> Whitepaper
             </Link>
          </m.div>

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