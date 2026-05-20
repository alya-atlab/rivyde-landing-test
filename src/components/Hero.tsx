import { Box, Button, Container, Stack, Typography } from '@mui/material';
import heroArrow from '../assets/hero-arrow.png';
import { palette } from '../theme';

export default function Hero() {
  return (
    <Box id="home" component="section" sx={{ minHeight: { lg: 'calc(100vh - 100px)' }, bgcolor: palette.background, overflow: 'hidden' }}>
      <Container
        maxWidth="xl"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.05fr) minmax(360px, 0.95fr)' },
          minHeight: { xs: 'auto', lg: 'calc(100vh - 100px)' },
          alignItems: 'center',
          gap: { xs: 2.5, sm: 4, md: 5.5 },
          pt: { xs: 2, sm: 4, lg: 0 },
        }}
      >
        <Stack spacing={{ xs: 3, md: 5 }} sx={{ py: { xs: 5, sm: 6, md: 8 }, zIndex: 2, textAlign: { xs: 'center', lg: 'left' } }}>
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
              sx={{ bgcolor: '#91a0af', color: 'white', fontSize: 13, boxShadow: 'none', '&:hover': { bgcolor: '#7f8e9d', boxShadow: 'none' } }}
            >
              Contact us
            </Button>
            <Button href="#services" variant="outlined" sx={{ color: 'white', fontSize: 13, border: `3px solid ${palette.border}`, bgcolor: 'rgba(7, 14, 20, 0.3)' }}>
              Services
            </Button>
          </Stack>
        </Stack>
        <Box
          component="img"
          src={heroArrow}
          alt=""
          aria-hidden="true"
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '100%',
            maxWidth: { xs: 520, lg: 'none' },
            mx: { xs: 'auto', lg: 0 },
            height: { xs: 280, sm: 360, md: 460, lg: 'min(88vh, 850px)' },
            minHeight: { xs: 0, lg: 560 },
            borderTopLeftRadius: { xs: 44, sm: 72, lg: 120 },
            borderBottomLeftRadius: { xs: 44, sm: 72, lg: 120 },
            borderTopRightRadius: { xs: 44, lg: 0 },
            borderBottomRightRadius: { xs: 44, lg: 0 },
            objectFit: 'cover',
            objectPosition: 'center',
            boxShadow: 'inset 0 0 120px rgba(85, 242, 245, 0.14)',
          }}
        />
      </Container>
    </Box>
  );
}
