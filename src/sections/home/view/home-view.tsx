import Box from '@mui/material/Box'; // Adicionado Box para os IDs
import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeFAQs } from '../home-faqs';
import { HomeHero } from '../home-hero';
import { HomeTeam } from '../home-team';
import { HomeRoadmap } from '../home-roadmap';
import { HomeFinalCTA } from '../home-final-cta';
import { HomeCommunity } from '../home-community';
import { HomeEcosystem } from '../home-ecosystem';
import { HomeLatestNews } from '../home-latest-news';
import { HomeIntegrations } from '../home-integrations';

// ----------------------------------------------------------------------

// Estilo comum para as seções com âncora
const sectionStyles = {
  // Garante que o scroll pare antes do conteúdo para não cobrir com o Header
  scrollMarginTop: (theme: any) => ({
    xs: theme.spacing(10), // Ajuste conforme a altura do seu header mobile
    md: theme.spacing(15), // Ajuste conforme a altura do seu header desktop
  }),
};

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />

      <BackToTopButton />

      <HomeHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        
        <Box id="home-ecosystem" sx={sectionStyles}>
          <HomeEcosystem />
        </Box>

        <HomeIntegrations />

        <Box id="home-community" sx={sectionStyles}>
          <HomeCommunity />
        </Box>

        <Box id="home-team" sx={sectionStyles}>
          <HomeTeam />
        </Box>

        <HomeLatestNews />

        <Box id="home-roadmap" sx={sectionStyles}>
          <HomeRoadmap />
        </Box>

        <Box id="home-faqs" sx={sectionStyles}>
          <HomeFAQs />
        </Box>

        <HomeFinalCTA />
        
      </Stack>
    </>
  );
}