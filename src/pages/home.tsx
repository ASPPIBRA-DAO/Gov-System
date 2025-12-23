import { Helmet } from 'react-helmet-async';
import { useBoolean } from 'minimal-shared/hooks';

import { HomeView } from 'src/sections/home/view';
import HomeCountdownDialog from 'src/sections/home/home-countdown-dialog';

// ----------------------------------------------------------------------

// Metadados Estratégicos para ASPPIBRA - Foco em Governança, RWA e Agro
const metadata = {
  title: 'ASPPIBRA | Sovereign Identity & Institutional Governance',
  description:
    'Sovereign Identity Provider (IdP) and Governance platform for DAO, Agro-cooperatives, and Real World Assets (RWA). Secure, transparent, and globally scalable infrastructure.',
  keywords: 'Governance, DAO, Web3, RWA, Identity Provider, Agro, Blockchain, Compliance, ASPPIBRA',
  author: 'ASPPIBRA Labs',
  ogImage: 'https://asppibra.com/android-chrome-512x512.png',
};

export default function Page() {
  const dialog = useBoolean(true); // Abre automaticamente ao carregar

  return (
    <>
      <Helmet>
        {/* SEO Primário */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asppibra.com/" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />

        {/* Twitter / X */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://asppibra.com/" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.ogImage} />

        {/* Canonical Link */}
        <link rel="canonical" href="https://asppibra.com/" />
      </Helmet>

      <HomeView />

      <HomeCountdownDialog 
        open={dialog.value} 
        onClose={dialog.onFalse} 
        targetDate={new Date('2026-01-01T00:00:00')} 
      />
    </>
  );
}
