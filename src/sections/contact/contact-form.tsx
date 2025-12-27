import type { BoxProps } from '@mui/material/Box';

import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function ContactForm({ sx, ...other }: BoxProps) {
  const { t } = useTranslation();

  return (
    <Box sx={sx} {...other}>
      <Typography variant="h3">
        {t('contact.form.title')} <br />
        {t('contact.form.subtitle')}
      </Typography>
      <Box
        sx={{
          my: 5,
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField fullWidth label={t('contact.form.fields.name')} />
        <TextField fullWidth label={t('contact.form.fields.email')} />
        <TextField fullWidth label={t('contact.form.fields.subject')} />
        <TextField fullWidth label={t('contact.form.fields.message')} multiline rows={4} />
      </Box>

      <Button size="large" variant="contained">
        {t('contact.form.fields.submit')}
      </Button>
    </Box>
  );
}
