import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// ✅ MUI v7: O Grid padrão agora usa a sintaxe 'size'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, keyframes } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const pulse = keyframes`
  0% {
    box-shadow: 0 0 8px #00ff7f;
  }
  50% {
    box-shadow: 0 0 16px #00ff7f;
  }
  100% {
    box-shadow: 0 0 8px #00ff7f;
  }
`;

const LINKS = [
  {
    headline: 'ECOSSISTEMA',
    children: [
      { name: 'Governança', href: '#' },
      { name: 'Tokenomics', href: '#' },
      { name: 'Ativos (RWA)', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
  },
  {
    headline: 'RECURSOS',
    children: [
      { name: 'Whitepaper', href: '#' },
      { name: 'Documentação', href: '#' },
      { name: 'Auditorias', href: '#' },
      { name: 'Termos de Uso', href: '#' },
    ],
  },
];

const CUSTOM_SOCIALS = [
  { value: 'twitter', icon: 'ri:twitter-x-fill' },
  { value: 'linkedin', icon: 'ri:linkedin-fill' },
  { value: 'instagram', icon: 'ri:instagram-fill' },
  { value: 'github', icon: 'ri:github-fill' },
  { value: 'telegram', icon: 'ri:telegram-fill' },
] as const;

// ----------------------------------------------------------------------

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#000000', // Fundo preto sólido conforme design
  color: '#FFFFFF',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(3),
}));

export type FooterProps = React.ComponentProps<typeof FooterRoot>;

export function Footer({
  sx,
  layoutQuery = 'md',
  ...other
}: FooterProps & { layoutQuery?: Breakpoint }) {
  return (
    <FooterRoot sx={sx} {...other}>
      <Container>
        <Grid container spacing={5} sx={{ mb: 8 }}>
          
          {/* COLUNA 1: IDENTIDADE */}
          <Grid size={{ xs: 12, [layoutQuery]: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, letterSpacing: 0.5 }}>
              <Box component="span" sx={{ color: 'common.white' }}>
                ASPPIBRA-
              </Box>
              <Box component="span" sx={{ color: 'grey.600' }}>
                DAO
              </Box>
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#00ff7f',
                  animation: `${pulse} 2s infinite`,
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: '#00ff7f', fontWeight: 'bold', letterSpacing: 1, fontSize: '0.7rem' }}
              >
                SYSTEM ONLINE
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: 'grey.500', maxWidth: 360, mb: 4, lineHeight: 1.6 }}>
              Redefinindo ativos reais no mundo digital. Governança descentralizada, transparência e
              inovação através de tecnologia Web3 e Inteligência Artificial.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              {CUSTOM_SOCIALS.map((social) => (
                <IconButton 
                  key={social.value} 
                  sx={{ 
                    color: 'grey.500', 
                    '&:hover': { color: 'common.white', bgcolor: 'rgba(255,255,255,0.08)' } 
                  }}
                >
                  <Iconify icon={social.icon as any} width={20} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* COLUNA 2: LINKS */}
          <Grid size={{ xs: 12, [layoutQuery]: 4 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 4,
              }}
            >
              {LINKS.map((list) => (
                <Box key={list.headline} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <Typography variant="subtitle2" sx={{ color: 'grey.400', fontWeight: 'bold', letterSpacing: 1, fontSize: '0.75rem' }}>
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                      underline="none"
                      sx={{ 
                        color: 'grey.500', 
                        transition: 'color 0.2s',
                        '&:hover': { color: 'common.white' } 
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* COLUNA 3: CONTRATO */}
          <Grid size={{ xs: 12, [layoutQuery]: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography variant="subtitle2" sx={{ color: 'grey.400', fontWeight: 'bold', mb: 2, letterSpacing: 0.5, fontSize: '0.75rem' }}>
                  TOKEN CONTRACT (ERC-20)
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  value="0x71C...8976F"
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" sx={{ color: 'grey.500' }}>
                          <Iconify icon="solar:copy-bold" width={20} />
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {
                      height: 48,
                      color: 'grey.300',
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                      '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.2) !important' },
                      '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 0.3) !important' },
                    },
                  }}
                />
              </Box>

              <Box>
                <Typography variant="body2" sx={{ color: 'grey.600', mb: 0.5, fontSize: '0.8rem' }}>
                  Precisa de suporte?
                </Typography>
                <Link
                  href="mailto:help@asppibra.dao"
                  variant="body1"
                  underline="none"
                  sx={{ color: 'grey.300', '&:hover': { color: 'common.white' } }}
                >
                  help@asppibra.dao
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 3 }} />

        {/* BOTTOM BAR */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.700', fontSize: '0.8rem' }}>
            © 2025 ASPPIBRA-DAO. Todos os direitos reservados.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" variant="body2" underline="none" sx={{ color: 'grey.700', fontSize: '0.8rem', '&:hover': { color: 'grey.500' } }}>
              Privacidade
            </Link>
            <Link href="#" variant="body2" underline="none" sx={{ color: 'grey.700', fontSize: '0.8rem', '&:hover': { color: 'grey.500' } }}>
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </FooterRoot>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: FooterProps) {
  return (
    <FooterRoot
      sx={[
        {
          py: 5,
          textAlign: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Logo />
        <Box sx={{ mt: 1, typography: 'caption' }}>
          © All rights reserved.
          <br /> made by
          <Link href="https://minimals.cc/"> minimals.cc </Link>
        </Box>
      </Container>
    </FooterRoot>
  );
}
