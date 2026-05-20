import { Box, Container, Stack, Typography } from '@mui/material';
import customIcon from '../assets/icon-custom.png';
import saasIcon from '../assets/icon-saas.png';
import techWave from '../assets/tech-wave.png';
import webIcon from '../assets/icon-web.png';
import { palette } from '../theme';

const services = [
  {
    title: 'Web Development',
    copy: 'Modern, responsive websites built with latest technology',
    icon: webIcon,
  },
  {
    title: 'Custom Software solutions',
    copy: 'Tailored Software to solve your business problems.',
    icon: customIcon,
  },
  {
    title: 'MVP & SaaS Development',
    copy: 'From idea to launch, we build & ship scalable digital products',
    icon: saasIcon,
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: palette.background,
        py: { xs: 7, sm: 8, md: 'clamp(72px, 11vw, 118px)' },
        pb: { xs: 15, sm: 18, md: 26.25 },
      }}
    >
      <Container maxWidth="xl">
        <Stack alignItems="center" spacing={{ xs: 1.5, sm: 2.5, md: 3 }} sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 'clamp(54px, 8vw, 82px)' } }}>
          <Typography sx={{ color: palette.cyan, fontSize: 'clamp(21px, 2.5vw, 28px)', fontWeight: 800, lineHeight: 1.2 }}>
            What we do
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', textAlign: 'center', fontSize: 'clamp(25px, 3.1vw, 36px)', lineHeight: 1.2 }}>
            Solutions tailored to your needs
          </Typography>
        </Stack>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: 2, md: 2.5, lg: 3.5 },
            maxWidth: { xs: 560, md: 'none' },
            mx: 'auto',
          }}
        >
          {services.map((service) => (
            <Box
              key={service.title}
              sx={{
                minHeight: { xs: 'auto', md: 170, lg: 180 },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '64px 1fr', lg: '78px 1fr' },
                alignItems: 'center',
                justifyItems: { xs: 'center', sm: 'start' },
                gap: { xs: 1.75, sm: 2, lg: 2.75 },
                p: { xs: 2.25, sm: 2.5, lg: '28px 18px' },
                textAlign: { xs: 'center', sm: 'left' },
                border: '1px solid rgba(129, 148, 168, 0.22)',
                bgcolor: 'rgba(8, 16, 24, 0.62)',
                boxShadow: '0 0 16px rgba(129, 148, 168, 0.28), inset 0 0 18px rgba(129, 148, 168, 0.14)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box component="img" src={service.icon} alt="" sx={{ width: { xs: 58, sm: 64, lg: 78 }, height: 'auto', objectFit: 'contain' }} />
              <Box>
                <Typography variant="h3" sx={{ mb: 2.5, fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: 1.2 }}>
                  {service.title}
                </Typography>
                <Typography sx={{ color: palette.muted, fontSize: 'clamp(13px, 1.05vw, 15px)', lineHeight: 1.7 }}>
                  {service.copy}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: { xs: 112, sm: 136, md: 160 },
          opacity: 0.8,
          backgroundImage: `url(${techWave})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />
    </Box>
  );
}
