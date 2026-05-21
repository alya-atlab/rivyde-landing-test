import { Box, Container, Stack, Typography } from '@mui/material';
import orbit from '../assets/orbit.png';
import { fadeUp, floatSoft } from '../animations';
import { palette } from '../theme';

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: palette.background,
        minHeight: { xs: 'auto', md: 560, lg: 644 },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, sm: 9, md: 11.5 },
      }}
    >
      <Box
        component="img"
        src={orbit}
        alt=""
        aria-hidden="true"
        sx={{
          position: 'absolute',
          width: { xs: 128, sm: 150, md: 'clamp(150px, 16vw, 238px)' },
          height: 'auto',
          opacity: { xs: 0.28, md: 0.8 },
          left: { xs: -64, sm: -48, md: 12 },
          top: 0,
          animation: `${floatSoft} 5.5s ease-in-out infinite`,
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />
      <Container maxWidth="lg">
        <Stack
          alignItems="center"
          sx={{
            gap: { xs: 2.25, sm: 3, md: 4.25 },
            textAlign: 'center',
            animation: `${fadeUp} 850ms cubic-bezier(0.16, 1, 0.3, 1) both`,
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
            },
          }}
        >
          <Typography sx={{ color: palette.cyan, fontSize: 'clamp(21px, 2.5vw, 28px)', fontWeight: 800, lineHeight: 1.2 }}>
            About us
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', textAlign: 'center', fontSize: 'clamp(25px, 3.1vw, 36px)', lineHeight: 1.2 }}>
            A small team with a big focus
          </Typography>
          <Typography sx={{ maxWidth: 980, color: palette.muted, fontSize: 'clamp(14px, 1.35vw, 18px)', lineHeight: 1.75 }}>
            Rivyde is a software studio focused on building modern web applications,
            digital products, and real-world software solutions
          </Typography>
          <Typography sx={{ maxWidth: 980, color: palette.muted, fontSize: 'clamp(14px, 1.35vw, 18px)', lineHeight: 1.75 }}>
            Alongside client work, we are also building our first SaaS product and
            experimenting with new ideas through our internal lab
          </Typography>
        </Stack>
      </Container>
      <Box
        component="img"
        src={orbit}
        alt=""
        aria-hidden="true"
        sx={{
          position: 'absolute',
          width: { xs: 128, sm: 150, md: 'clamp(150px, 16vw, 238px)' },
          height: 'auto',
          opacity: { xs: 0.28, md: 0.8 },
          right: { xs: -64, sm: -44, md: 16 },
          bottom: -6,
          animation: `${floatSoft} 5.5s ease-in-out 1s infinite`,
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />
    </Box>
  );
}
