import { AppBar, Box, Button, Container, Stack } from '@mui/material';
import logo from '../assets/rivyde-logo.png';
import { palette } from '../theme';

const navItems = ['Home', 'Services', 'About', 'Contact'];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{ bgcolor: palette.background, backdropFilter: 'blur(14px)' }}
    >
      <Container maxWidth="xl">
        <Stack
          component="nav"
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          sx={{
            minHeight: { xs: 'auto', md: 100 },
            py: { xs: 1.75, sm: 0 },
            gap: { xs: 1.5, sm: 3, md: 'clamp(24px, 7vw, 108px)' },
            justifyContent: { xs: 'center', sm: 'space-between', md: 'flex-end' },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Rivyde"
            sx={{
              mr: { xs: 0, sm: 'auto' },
              width: { xs: 132, sm: 152, md: 'clamp(160px, 16vw, 210px)' },
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              justifyContent: { xs: 'space-between', sm: 'center' },
              gap: { xs: 1, sm: 2.5, md: 'clamp(42px, 8vw, 118px)' },
              overflowX: 'auto',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: item === 'Home' ? '#00edf5' : palette.text,
                  fontSize: { xs: 12, md: 13 },
                  p: { xs: '6px 0', md: '8px 0' },
                  minWidth: 'auto',
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
          <Button
            href="#contact"
            variant="contained"
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              bgcolor: palette.cyanDeep,
              color: 'white',
              fontSize: 13,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#2498b6', boxShadow: 'none' },
            }}
          >
            Let's Talk
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
}
