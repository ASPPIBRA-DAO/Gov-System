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
import AvatarGroup from '@mui/material/AvatarGroup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

const mdKey: Breakpoint = 'md';
const lgKey: Breakpoint = 'lg';

const PLATFORMS = [
  { name: 'Cloudflare Edge', icon: 'logos:cloudflare' },
  { name: 'Ethereum', icon: 'logos:ethereum' },
  { name: 'IPFS', icon: 'simple-icons:ipfs' },
  { name: 'SQLite (D1)', icon: 'logos:sqlite' },
  { name: 'React 19', icon: 'logos:react' },
  { name: 'Framer Motion', icon: 'logos:framer' },
];

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
      <Typography
        variant="overline"
        sx={{ 
          color: 'primary.main', 
          fontWeight: 'bold', 
          letterSpacing: 3, 
          mb: 2, 
          display: 'block',
          textTransform: 'uppercase'
        }}
      >
        Liderando a Próxima Fronteira Digital
      </Typography>
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
            fontSize: { xs: '2.2rem', md: '4.8rem' },
            lineHeight: { xs: 1.2, md: 1.1 },
            fontFamily: theme.typography.fontSecondaryFamily,
          }),
        ]}
      >
        Transformando Negócios em <br />
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
          Ativos Digitais
        </Box>
      </Box>
    </m.div>
  );

  const renderText = () => (
    <m.div {...motionProps}>
      <Typography
        sx={{
          mx: 'auto',
          maxWidth: 800,
          color: 'text.secondary',
          fontSize: { xs: 17, md: 22 },
          lineHeight: 1.6,
          mt: 3,
        }}
      >
        A Ponte Definitiva Entre o <strong>Mundo Real</strong> e o <strong>Mundo Digital</strong>. 
        Um ecossistema que conecta segurança jurídica, blockchain e IA para transformar ativos em valores exponenciais.
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
          href={paths.dashboard.root}
          color="primary"
          size="large"
          variant="contained"
          startIcon={<Iconify width={24} icon={"solar:bolt-bold" as any} />}
          sx={{ 
            height: 60, 
            px: 4, 
            fontSize: 18, 
            borderRadius: 1.5,
            boxShadow: (theme) => theme.customShadows.primary 
          }}
        >
          Iniciar Governança
        </Button>
      </m.div>

      <m.div {...motionProps}>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          startIcon={<Iconify width={24} icon={"solar:wallet-2-bold-duotone" as any} />}
          sx={{ 
            height: 60, 
            px: 4, 
            fontSize: 18, 
            borderRadius: 1.5,
            backdropFilter: 'blur(8px)',
            borderColor: 'text.primary'
          }}
        >
          Conectar Carteira
        </Button>
      </m.div>
    </Stack>
  );

  const renderTechMarquee = () => (
    <Stack spacing={4} sx={{ mt: 12, textAlign: 'center', width: 1 }}>
      <Typography variant="overline" sx={{ opacity: 0.5, letterSpacing: 2 }}>
        Infraestrutura de Classe Mundial
      </Typography>
      
      <Box
        sx={{
          overflow: 'hidden',
          display: 'flex',
          userSelect: 'none',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <m.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}
        >
          {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((platform, index) => (
            <Stack 
              key={index} 
              direction="row" 
              alignItems="center" 
              spacing={1.5} 
              sx={{ 
                opacity: 0.6, 
                filter: 'grayscale(1)', 
                transition: 'all 0.3s',
                '&:hover': { filter: 'grayscale(0)', opacity: 1, transform: 'scale(1.1)' } 
              }}
            >
               <Iconify icon={platform.icon as any} width={34} />
               <Typography variant="subtitle2" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                 {platform.name}
               </Typography>
            </Stack>
          ))}
        </m.div>
      </Box>
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
               <Iconify icon={"eva:file-text-outline" as any} width={20} /> Ver Whitepaper Técnico
             </Link>
          </m.div>

          {renderTechMarquee()}
        </Container>
      </Box>

      <HeroBackground />
    </Box>
  );
}

// ----------------------------------------------------------------------

function useTransformY(value: MotionValue<number>, distance: number) {
  const physics: SpringOptions = { mass: 0.1, damping: 20, stiffness: 300, restDelta: 0.001 };
  return useSpring(useTransform(value, [0, 1], [0, distance]), physics);
}

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