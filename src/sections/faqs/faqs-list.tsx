import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export function FaqsList({ sx, ...other }: BoxProps) {
  const { t } = useTranslate();

  const faqs = Object.values(t('faq.items', { returnObjects: true, ns: 'common' })) as {
    question: string;
    answer: string;
  }[];

  return (
    <Box sx={sx} {...other}>
      {faqs.map((item, index) => (
        <Accordion key={index} disableGutters>
          <AccordionSummary
            id={`faqs-panel${index}-header`}
            aria-controls={`faqs-panel${index}-content`}
          >
            <Typography component="span" variant="subtitle1">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: 'text.secondary' }}>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
      <Divider />
    </Box>
  );
}
