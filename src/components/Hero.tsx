import { Box, Button, Container, Stack, Typography } from '@mui/material';
import heroArrow from '../assets/hero-arrow.png';
import { fadeUp, floatSoft } from '../animations';
import { palette } from '../theme';

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: { lg: 'calc(100vh - 100px)' },
        bgcolor: palette.background,
        overflow: 'hidden',
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: { xs: 'block', md: 'grid' },
          gridTemplateColumns: { md: 'minmax(0, 1fr)', lg: 'minmax(0, 0.9fr) minmax(520px, 1.1fr)' },
          minHeight: { xs: 'auto', lg: 'calc(100vh - 100px)' },
          alignItems: 'center',
          gap: { xs: 2.5, sm: 4, md: 5.5 },
          pt: { xs: 2, sm: 4, lg: 0 },
          pl: {
            xs: 2.5,
            sm: 4,
            lg: 'max(32px, calc((100vw - 1536px) / 2 + 32px))',
          },
          pr: { xs: 2.5, sm: 4, md: 0 },
          m: 0,
        }}
      >
        <Stack
          spacing={{ xs: 3, md: 5 }}
          sx={{
            width: { xs: '100%', lg: '46vw' },
            maxWidth: { lg: 760 },
            py: { xs: 5, sm: 6, md: 8 },
            zIndex: 2,
            textAlign: { xs: 'center', lg: 'left' },
            animation: `${fadeUp} 900ms cubic-bezier(0.16, 1, 0.3, 1) both`,
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
            },
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 'clamp(25px, 7.4vw, 34px)', sm: 'clamp(30px, 5.8vw, 40px)', md: 'clamp(30px, 3.35vw, 42px)' },
                lineHeight: { xs: 1.22, md: 1.34 },
              }}
            >
              We build modern
              <br />
              Software <Box component="span" sx={{ color: palette.cyan }}>Solutions</Box>
              <br />
              that help business grow
            </Typography>
            <Typography
              sx={{
                mt: { xs: 3.25, md: 5.25 },
                color: palette.muted,
                fontSize: { xs: 14, sm: 15, md: 'clamp(15px, 1.35vw, 18px)' },
                lineHeight: 1.45,
              }}
            >
              From custom websites to SaaS products,
              <br />
              we turn ideas into real digital products
            </Typography>
          </Box>
          <Stack
            direction="row"
            sx={{
              gap: { xs: 2.25, md: 'clamp(18px, 4vw, 48px)' },
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', lg: 'flex-start' },
              pl: { xs: 0, lg: 'clamp(0px, 7vw, 104px)' },
            }}
          >
            <Button
              href="#contact"
              variant="contained"
              sx={{
                bgcolor: '#91a0af',
                color: 'white',
                fontSize: 13,
                boxShadow: 'none',
                transition: 'transform 220ms ease, background-color 220ms ease, box-shadow 220ms ease',
                '&:hover': { bgcolor: '#7f8e9d', boxShadow: '0 10px 26px rgba(145, 160, 175, 0.28)', transform: 'translateY(-5px)' },
              }}
            >
              Contact us
            </Button>
            <Button
              href="#services"
              variant="outlined"
              sx={{
                color: 'white',
                fontSize: 13,
                border: `3px solid ${palette.border}`,
                bgcolor: 'rgba(7, 14, 20, 0.3)',
                transition: 'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
                '&:hover': { transform: 'translateY(-5px)', borderColor: palette.cyan, boxShadow: '0 0 22px rgba(85, 242, 245, 0.24)' },
              }}
            >
              Services
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Box
        component="img"
        src={heroArrow}
        alt=""
        aria-hidden="true"
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          right: 'calc((100vw - 100%) * -1)',
          top: { md: 120, lg: 0 },
          bottom: { lg: 0 },
          width: { md: '44vw', lg: '42vw', xl: '43vw' },
          maxWidth: 'none',
          height: { md: 520, lg: 'calc(100vh - 100px)' },
          minHeight: { lg: 620 },
          objectFit: 'contain',
          objectPosition: 'right center',
          borderRadius: { md: '48px 0 0 48px', lg: '96px 0 0 96px' },
          zIndex: 1,
          animation: `${floatSoft} 5s ease-in-out infinite`,
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />
    </Box>
  );
}
