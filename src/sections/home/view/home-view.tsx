
import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeCommunity } from '../home-community';
import { HomeEcosystem } from '../home-ecosystem';
import { HomeFAQs } from '../home-faqs';
import { HomeFinalCTA } from '../home-final-cta';
import { HomeHero } from '../home-hero';
import { HomeIntegrations } from '../home-integrations';
import { HomeLatestNews } from '../home-latest-news';
import { HomeRoadmap } from '../home-roadmap';
import { HomeTeam } from '../home-team';

// ----------------------------------------------------------------------

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
        <HomeEcosystem />
        <HomeIntegrations />
        <HomeCommunity />
        <HomeTeam />
        <HomeLatestNews />
        <HomeRoadmap />
        <HomeFAQs />
        <HomeFinalCTA />
      </Stack>
    </>
  );
}
