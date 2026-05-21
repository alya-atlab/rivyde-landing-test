import { Box, Container, Typography } from '@mui/material';
import { palette } from '../theme';

export default function Footer() {
  return (
    <Box component="footer" sx={{ display: { xs: 'block', lg: 'none' }, py: { xs: 4, md: 6.5 }, bgcolor: palette.background, textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography sx={{ color: 'rgba(136, 151, 168, 0.75)', fontSize: 14 }}>
          {'\u00A9'}2026 Rivyde .All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}
