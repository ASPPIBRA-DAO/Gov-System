
import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeFAQs } from '../home-faqs';
import { HomeHero } from '../home-hero';
import { HomeTeam } from '../home-team';
import { HomeRoadmap } from '../home-roadmap';
import { HomeFinalCTA } from '../home-final-cta';
import { HomeEcosystem } from '../home-ecosystem';
import { HomeCommunity } from '../home-community';
import { HomeLatestNews } from '../home-latest-news';
import { HomeIntegrations } from '../home-integrations';
import { SectionWrapper } from '../components/section-wrapper';

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
        
        <SectionWrapper id="home-ecosystem">
          <HomeEcosystem />
        </SectionWrapper>

        <SectionWrapper filled>
          <HomeIntegrations />
        </SectionWrapper>

        <SectionWrapper id="home-community">
          <HomeCommunity />
        </SectionWrapper>

        <SectionWrapper id="home-team" filled>
          <HomeTeam />
        </SectionWrapper>

        <SectionWrapper>
          <HomeLatestNews />
        </SectionWrapper>

        <SectionWrapper id="home-roadmap" filled>
          <HomeRoadmap />
        </SectionWrapper>

        <SectionWrapper id="home-faqs">
          <HomeFAQs />
        </SectionWrapper>

        <HomeFinalCTA />
        
      </Stack>
    </>
  );
}
