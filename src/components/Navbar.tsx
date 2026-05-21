import { AppBar, Box, Button, Collapse, Container, IconButton, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import logo from '../assets/rivyde-logo.png';
import { palette } from '../theme';

const navItems = ['Home', 'Services', 'About', 'Contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.toLowerCase());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-34% 0px -52% 0px',
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
          direction="row"
          alignItems="center"
          sx={{
            minHeight: { xs: 68, md: 84, lg: 72 },
            py: 0,
            gap: { xs: 2, sm: 3, md: 'clamp(24px, 7vw, 108px)' },
            justifyContent: { xs: 'space-between', md: 'flex-end' },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Rivyde"
            sx={{
              mr: { xs: 0, md: 'auto' },
              width: { xs: 124, sm: 152, md: 'clamp(148px, 13vw, 190px)' },
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <IconButton
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              width: 42,
              height: 42,
              color: palette.text,
              
              bgcolor: 'rgba(8, 16, 24, 0.42)',
              '&:hover': {
                color: palette.cyan,
                borderColor: 'rgba(85, 242, 245, 0.55)',
                bgcolor: 'rgba(8, 16, 24, 0.62)',
              },
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: 19,
                height: 14,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {[0, 1, 2].map((line) => (
                <Box
                  key={line}
                  sx={{
                    height: 2,
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: 'currentColor',
                  }}
                />
              ))}
            </Box>
          </IconButton>
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 'auto',
              justifyContent: 'center',
              gap: { xs: 1, sm: 2.5, md: 'clamp(42px, 8vw, 118px)' },
              overflowX: 'auto',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: activeSection === item.toLowerCase() ? '#00edf5' : palette.text,
                  fontSize: { xs: 12, md: 13 },
                  p: { xs: '6px 0', md: '8px 0' },
                  minWidth: 'auto',
                  transition: 'color 180ms ease',
                  '&:hover': { color: palette.cyan },
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
        <Collapse in={mobileMenuOpen} timeout={220}>
          <Stack
            sx={{
              display: { xs: 'flex', md: 'none' },
              py: 1,
              borderTop: '1px solid rgba(129, 148, 168, 0.18)',
              gap: 0.25,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  color: activeSection === item.toLowerCase() ? '#00edf5' : palette.text,
                  fontSize: 13,
                  px: 0,
                  py: 1,
                  minWidth: 'auto',
                  transition: 'color 180ms ease',
                  '&:hover': { color: palette.cyan },
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Collapse>
      </Container>
    </AppBar>
  );
}
