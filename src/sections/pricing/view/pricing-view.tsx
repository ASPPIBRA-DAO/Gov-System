import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PricingCard } from '../pricing-card';

// ----------------------------------------------------------------------

export function PricingView() {
  const { t } = useTranslation();

  const plans = Object.entries(t('pricing_page.plans', { returnObjects: true })).map(([key, value]) => ({
    key,
    ...value,
  }));

  return (
    <Container sx={{ pt: { xs: 3, md: 5 }, pb: 10 }}>
      <Typography variant="h2" align="center" sx={{ mb: 2 }}>
        {t('pricing_page.title')}{' '}
        <Typography component="span" color="primary.main">
          {t('pricing_page.title_highlight')}
        </Typography>
      </Typography>

      <Typography align="center" sx={{ color: 'text.secondary', mb: { xs: 5, md: 8 } }}>
        {t('pricing_page.description')}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {plans.map((plan) => (
          <PricingCard key={plan.key} plan={plan} />
        ))}
      </Box>

      <Typography variant="caption" align="center" sx={{ color: 'text.secondary', display: 'block', mt: 5 }}>
        {t('pricing_page.footer_note')}
      </Typography>
    </Container>
  );
}
