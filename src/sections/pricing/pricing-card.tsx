import type { Theme } from '@mui/material/styles';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type PlanKey = 'free' | 'basic' | 'starter' | 'premium';

type Props = CardProps & {
  plan: {
    key: PlanKey;
    title: string;
    price: string;
    token: string;
    features: string[];
  };
};

export function PricingCard({ plan, sx, ...other }: Props) {
  const { key, title, price, token, features = [] } = plan;

  const isFree = key === 'free';
  const isStarter = key === 'starter';
  const isPremium = key === 'premium';

  const planColors: Record<PlanKey, string> = {
    free: 'grey.500',
    basic: 'info.main',
    starter: 'warning.main',
    premium: 'error.main',
  };

  const renderBadge = () => {
    if (isStarter) {
      return <Label color="warning">Elegível: Conselho Fiscal</Label>;
    }
    if (isPremium) {
      return <Label color="error">Elegível: Diretoria Executiva</Label>;
    }
    return null;
  };

  const renderTitle = () => (
    <Stack spacing={1}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', color: planColors[key] }}>
        {key === 'free' && 'Observador'}
        {key === 'basic' && 'Membro Institucional'}
        {key === 'starter' && 'Steward Administrativo'}
        {key === 'premium' && 'Conselheiro Executivo'}
      </Typography>
    </Stack>
  );

  const renderPrice = () => (
    <Stack spacing={1.5} alignItems="flex-start">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography variant="h4">US$</Typography>
        <Typography variant="h2">{price}</Typography>
      </Box>

      <Stack sx={{ color: 'primary.main', typography: 'h6' }}>
        <Typography component="span">Conversão:</Typography>
        <Typography component="span">{token} CAD Tokens</Typography>
      </Stack>
    </Stack>
  );

  const renderList = () => (
    <Stack spacing={2}>
      {features.map((item) => (
        <Box
          key={item}
          sx={{
            gap: 1,
            display: 'flex',
            typography: 'body2',
            alignItems: 'center',
          }}
        >
          <Iconify icon="eva:checkmark-fill" width={16} />
          {item}
        </Box>
      ))}
    </Stack>
  );

  const renderButton = () => {
    const ctaText = {
      free: 'Acessar Plataforma',
      basic: 'Adquirir Governança',
      starter: 'Assumir Cargo Steward',
      premium: 'Assumir Liderança Executiva',
    };

    return (
      <Button
        fullWidth
        size="large"
        variant="contained"
        color={isStarter ? 'warning' : 'inherit'}
        disabled={isFree}
      >
        {ctaText[key]}
      </Button>
    );
  };

  return (
    <Box
      sx={[
        (theme: Theme) => ({
          p: 5,
          gap: 5,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
          borderRadius: 2,
          borderTop: '4px solid',
          borderColor: planColors[key],
          boxShadow: theme.vars.customShadows.card,
          ...((isStarter || isPremium) && {
            [theme.breakpoints.up('md')]: {
              boxShadow: `-24px 24px 48px 0px ${
                theme.palette.mode === 'light'
                  ? 'rgba(145, 158, 171, 0.16)'
                  : 'rgba(0, 0, 0, 0.16)'
              }`,
            },
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box sx={{ minHeight: 40 }}>{renderBadge()}</Box>
      {renderTitle()}
      {renderPrice()}
      <Divider sx={{ borderStyle: 'dashed' }} />
      {renderList()}
      {renderButton()}
    </Box>
  );
}
