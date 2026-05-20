import { createTheme } from '@mui/material/styles';

export const palette = {
  background: '#0B1118',
  surface: '#0a121a',
  cyan: '#55f2f5',
  cyanDeep: '#21a6c8',
  text: '#f8fafc',
  muted: '#8897a8',
  border: '#8194a8',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: palette.background,
      paper: palette.surface,
    },
    primary: {
      main: palette.cyan,
      contrastText: '#041018',
    },
    text: {
      primary: palette.text,
      secondary: palette.muted,
    },
  },
  typography: {
    fontFamily: ['Outfit', 'Segoe UI', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      fontSize: 13,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          minWidth: 320,
          backgroundColor: palette.background,
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          minHeight: 38,
          paddingInline: 18,
        },
      },
    },
  },
});
