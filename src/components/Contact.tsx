import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  buttonPulse,
  fadeUp,
  floatSoft,
  glowPulse,
  waveScan,
} from "../animations";
import contactGlobe from "../assets/contact-globe.png";
import { palette } from "../theme";

const contactItems = [
  {
    icon: "email",
    label: "Email",
    value: "hello@rivyde.com",
    href: "mailto:hello.rivyde@gmail.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/company/rivyde",
    href: "https://www.linkedin.com/company/rivyde",
  },
  {
    icon: "location",
    label: "Location",
    value: "Remote \u00B7 Worldwide",
  },
];

function ContactIcon({ name }: { name: string }) {
  if (name === "linkedin") {
    return (
      <Typography
        sx={{
          color: palette.cyan,
          fontSize: 20,
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        in
      </Typography>
    );
  }

  const paths: Record<string, string> = {
    email:
      "M4 6.5h16v11H4v-11Zm1.7 1.2 6.3 5 6.3-5H5.7Zm12.6 8.6v-6.7l-6.3 5-6.3-5v6.7h12.6Z",
    location:
      "M12 2.8c-3.1 0-5.6 2.4-5.6 5.5 0 4.2 5.6 10.9 5.6 10.9s5.6-6.7 5.6-10.9c0-3.1-2.5-5.5-5.6-5.5Zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
    shield:
      "M12 3.1 5.4 5.8v5.1c0 4.1 2.8 7.9 6.6 9 3.8-1.1 6.6-4.9 6.6-9V5.8L12 3.1Zm0 14.7c-2.8-1-4.7-3.8-4.7-6.9V7l4.7-1.9L16.7 7v3.9c0 3.1-1.9 5.9-4.7 6.9Z",
    send: "M3.5 11.2 20.4 3.8l-4.5 16.7-3.5-6.4-6.5 3.6 2.8-5.1 7.1-5.2-8.6 3.9-3.7-.1Z",
  };

  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      sx={{ width: 22, height: 22, fill: palette.cyan, display: "block" }}
    >
      <path d={paths[name]} />
    </Box>
  );
}

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    bgcolor: "rgba(4, 11, 18, 0.5)",
    borderRadius: "8px",
    fontSize: 15,
    "& fieldset": {
      borderColor: "rgba(129, 148, 168, 0.3)",
      borderRadius: "8px",
    },
    "&:hover fieldset": { borderColor: "rgba(85, 242, 245, 0.5)" },
    "&.Mui-focused fieldset": {
      borderColor: palette.cyan,
      boxShadow: "0 0 18px rgba(85, 242, 245, 0.15)",
    },
  },
  "& .MuiInputBase-input, & .MuiInputBase-inputMultiline": {
    color: "#fff",
    "&::placeholder": {
      color: "rgba(188, 205, 222, 0.6)",
      opacity: 1,
    },
  },
};

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#020910",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: { xs: 8, lg: 6 },
        px: 0,
      }}
    >
      {/* ── Background gradient ── */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: `
            radial-gradient(ellipse at 75% 40%, rgba(33,166,200,0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 60%, rgba(85,242,245,0.07) 0%, transparent 40%)
          `,
        }}
      />

      {/* ── Globe ── */}
      <Box
        aria-hidden="true"
        component="img"
        src={contactGlobe}
        alt=""
        sx={{
          position: "absolute",
          top: { sm: "20%", md: "10%", lg: "-10%" },
          right: { xs: "-30%", sm: "-20%", md: "-10%", lg: "-5%", xl: "0%" },
          transform: "translateY(-50%)",
          width: "70%",
          height: "auto",
          pointerEvents: "none",
          zIndex: 0,
          opacity: { xs: 0.8, sm: 0.8, md: 1, lg: 1 },
          filter: "drop-shadow(0 0 40px rgba(85,242,245,0.3))",
          animation: `${glowPulse} 6s ease-in-out infinite, ${floatSoft} 10s ease-in-out infinite`,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      />

      {/* ── Main grid ── */}
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1300,
          mx: "auto",
          px: { xs: 3, sm: 5, lg: 8 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1.1fr" },
            gap: { xs: 6, lg: 6 },
            alignItems: "center",
          }}
        >
          {/* ══ LEFT ══ */}
          <Stack
            spacing={4}
            sx={{
              animation: `${fadeUp} 800ms cubic-bezier(0.16,1,0.3,1) both`,
              "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            }}
          >
            {/* Header text */}
            <Box sx={{ pt: 0, mt: 0 }}>
              <Typography
                sx={{
                  color: palette.cyan,
                  fontSize: 17,
                  fontWeight: 800,
                  mb: 1.5,
                  letterSpacing: 0.2,
                }}
              >
                Let's Talk
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontSize: { xs: 36, sm: 42, lg: 42 },
                  fontWeight: 500,
                  lineHeight: 1.18,
                  mb: 2.5,
                }}
              >
                Let's build something together
              </Typography>

              <Typography
                sx={{
                  color: "rgba(188,205,222,0.85)",
                  fontSize: { xs: 15, lg: 16 },
                  lineHeight: 1.7,
                  maxWidth: 400,
                }}
              >
                Have a project in mind or just want to say hello?
                <br />
                We'd love to hear from you.
              </Typography>
            </Box>

            {/* Contact items */}
            <Stack spacing={3}>
              {contactItems.map((item, i) => (
                <Stack
                  key={item.label}
                  direction="row"
                  alignItems="center"
                  spacing={2.5}
                  sx={{ position: "relative" }}
                >
                  {/* Animated line */}
                  <Box
                    aria-hidden="true"
                    sx={{
                      display: { xs: "none", lg: "block" },
                      position: "absolute",
                      left: 250,
                      top: "50%",
                      width: i === 0 ? 200 : i === 1 ? 150 : 230,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, rgba(85,242,245,0.55), transparent)",
                      animation: `${waveScan} 4s ease-in-out ${i * 0.5}s infinite`,
                    }}
                  />

                  {/* Icon bubble */}
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(85,242,245,0.06)",
                      border: "1px solid rgba(85,242,245,0.2)",
                      boxShadow:
                        "0 0 20px rgba(85,242,245,0.08), inset 0 0 14px rgba(85,242,245,0.06)",
                    }}
                  >
                    <ContactIcon name={item.icon} />
                  </Box>

                  {/* Text */}
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: 700,
                        mb: 0.3,
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      component={item.href ? "a" : "span"}
                      href={item.href}
                      target={
                        item.href?.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href?.startsWith("http") ? "noreferrer" : undefined
                      }
                      sx={{
                        color: "rgba(188,205,222,0.88)",
                        fontSize: 15,
                        textDecoration: "none",
                        display: "block",
                        "&:hover": { color: palette.cyan },
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>

          {/* ══ RIGHT — form card ══ */}
          <Box
            component="form"
            noValidate
            sx={{
              width: { sm: "100%", lg: "70%" },
              height: { lg: "70vh" },
              position: "relative",
              zIndex: 2,
              borderRadius: "16px",
              border: "1px solid rgba(129,148,168,0.22)",
              bgcolor: "rgba(6,14,22,0.82)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.4), inset 0 0 60px rgba(85,242,245,0.03)",
              p: { xs: 3, sm: 4, lg: 4.2 },
              animation: `${fadeUp} 800ms cubic-bezier(0.16,1,0.3,1) 120ms both`,
              "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            }}
          >
            <Typography
              sx={{ color: "#fff", fontSize: 16, fontWeight: 800, mb: 2 }}
            >
              Send us a message
            </Typography>

            {/* Name + Email */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
                mb: 2,
              }}
            >
              <TextField
                placeholder="Your Name"
                fullWidth
                sx={fieldSx}
                inputProps={{ style: { padding: "10px 16px" } }}
              />
              <TextField
                placeholder="Email Address"
                fullWidth
                sx={fieldSx}
                inputProps={{ style: { padding: "10px 16px" } }}
              />
            </Box>

            {/* Message label */}
            <Typography
              sx={{ color: "#fff", fontSize: 14, fontWeight: 700, mb: 1.5 }}
            >
              Your Message
            </Typography>

            {/* Textarea */}
            <TextField
              placeholder="Tell us about your project..."
              multiline
              rows={4}
              fullWidth
              sx={fieldSx}
            />

            {/* Submit */}
            <Button
              type="button"
              fullWidth
              variant="contained"
              endIcon={<ContactIcon name="send" />}
              sx={{
                mt: 2.5,
                py: 1.8,
                bgcolor: palette.cyanDeep,
                color: "#fff",
                fontSize: 16,
                height: 20,
                fontWeight: 700,
                borderRadius: "8px",
                boxShadow: "0 0 30px rgba(33,166,200,0.25)",
                textTransform: "none",
                animation: `${buttonPulse} 3s ease-in-out infinite`,
                "&:hover": {
                  bgcolor: "#26b5d8",
                  boxShadow: "0 10px 36px rgba(33,166,200,0.4)",
                  transform: "translateY(-2px)",
                },
                transition:
                  "transform 200ms ease, background-color 200ms ease, box-shadow 200ms ease",
                "@media (prefers-reduced-motion: reduce)": {
                  animation: "none",
                },
              }}
            >
              Send Message
            </Button>

            {/* Privacy note */}
            <Stack
              direction="row"
              spacing={1.25}
              alignItems="center"
              sx={{ mt: 1 }}
            >
              <ContactIcon name="shield" />
              <Typography
                sx={{ color: "rgba(188,205,222,0.65)", fontSize: 13 }}
              >
                We respect your privacy. Your information is safe with us.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* ── Footer copyright ── */}
      <Typography
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(136,151,168,0.7)",
          fontSize: 13.5,
          zIndex: 1,
          whiteSpace: "nowrap",
          display: { xs: "none", md: "block" },
        }}
      >
        ©2026 Rivyde .All rights reserved
      </Typography>
    </Box>
  );
}
