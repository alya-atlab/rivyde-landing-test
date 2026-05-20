import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { palette } from "../theme";

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: palette.background,
        minHeight: { xs: "auto", md: 468 },
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        py: { xs: 7, sm: 8, md: 8.75 },
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={{ xs: 2.25, sm: 3, md: 4 }}>
          <Typography
            sx={{
              color: palette.cyan,
              fontSize: "clamp(21px, 2.5vw, 28px)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Let's Talk
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "clamp(25px, 3.1vw, 36px)",
              lineHeight: 1.2,
            }}
          >
            Let's build something together
          </Typography>
          <Box>
            <Typography
              sx={{
                color: palette.muted,
                fontSize: { xs: 14, md: "clamp(15px, 1.35vw, 18px)" },
                lineHeight: 1.7,
              }}
            >
              Have a project in mind or just want to say hello?
            </Typography>
            <Typography
              sx={{
                color: palette.muted,
                fontSize: { xs: 14, md: "clamp(15px, 1.35vw, 18px)" },
                lineHeight: 1.7,
              }}
            >
              We'd love to hear from you
            </Typography>
          </Box>
          <Stack
            direction="row"
            sx={{
              width: { xs: "100%", sm: "auto" },
              gap: { xs: 1.5, sm: 2.25, md: "clamp(18px, 4vw, 48px)" },
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              href="mailto:hello.rivyde@gmail.com"
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "auto" },
                maxWidth: 220,
                bgcolor: palette.cyanDeep,
                color: "white",
                fontSize: 13,
                boxShadow: "none",
                "&:hover": { bgcolor: "#2498b6", boxShadow: "none" },
              }}
            >
              Email
            </Button>
            <Button
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "auto" },
                maxWidth: 220,
                color: "white",
                fontSize: 13,
                border: `3px solid ${palette.border}`,
                bgcolor: "rgba(7, 14, 20, 0.3)",
              }}
            >
              Linked in
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
