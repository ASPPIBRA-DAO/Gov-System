import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export function FaqsForm({ sx, ...other }: BoxProps) {
  const { t } = useTranslate();

  return (
    <Box sx={sx} {...other}>
      <Typography variant="h4">{t('faq.form.title', { ns: 'common' })}</Typography>

      <Box
        sx={{
          my: 5,
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField fullWidth label={t('faq.form.fields.name', { ns: 'common' })} />
        <TextField fullWidth label={t('faq.form.fields.email', { ns: 'common' })} />
        <TextField fullWidth label={t('faq.form.fields.subject', { ns: 'common' })} />
        <TextField
          fullWidth
          multiline
          rows={4}
          label={t('faq.form.fields.message', { ns: 'common' })}
        />
      </Box>

      <Button size="large" variant="contained">
        {t('faq.form.fields.submit', { ns: 'common' })}
      </Button>
    </Box>
  );
}
