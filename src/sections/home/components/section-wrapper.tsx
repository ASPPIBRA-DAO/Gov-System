
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';

interface Props extends BoxProps {
  children: React.ReactNode;
  filled?: boolean; // Alterna a cor para o efeito "zebra"
}

export function SectionWrapper({ children, id, filled, sx, ...other }: Props) {
  return (
    <Box
      component="section" // Semântica crucial para SEO e IA (GEO/AIO)
      id={id}
      sx={{
        py: { xs: 10, md: 15 }, // Corrige o erro de "Padding Ausente"
        bgcolor: filled ? 'background.neutral' : 'background.default',
        display: 'flex',
        alignItems: 'center',
        scrollMarginTop: (theme) => ({
          xs: theme.spacing(10),
          md: theme.spacing(15),
        }),
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
}
