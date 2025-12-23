import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

interface SectionWrapperProps extends BoxProps {
  filled?: boolean;
}

export function SectionWrapper({ filled, sx, ...other }: SectionWrapperProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
        },
        filled && {
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}
