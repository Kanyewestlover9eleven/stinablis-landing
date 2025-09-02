"use client";
import { Box, Button, Stack, Typography, Container } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "88vh", md: "92vh" },
        display: "flex",
        alignItems: "center",
        background: "url(/hero-image.jpg) center/cover no-repeat",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.82))" }} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: { xs: 8, md: 12 }, px: { xs: 2, md: 0 } }}>
        <Stack alignItems="center" textAlign="center" spacing={3}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "clamp(2.8rem, 11vw, 4.5rem)", md: "clamp(4.5rem, 6vw, 6.5rem)" },
              lineHeight: 1.1,
              color: "#fff",
            }}
          >
            Stinablis
          </Typography>

          <Typography className="subtle" sx={{ maxWidth: 900, fontSize: { xs: "1.05rem", md: "1.25rem" }, lineHeight: 1.7, px: { xs: 1, md: 0 } }}>
            Engineering Meets Sustainability
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2, width: { xs: "100%", sm: "auto" } }}>
            <Button href="#contact" className="btn btn-primary" sx={{ width: { xs: "100%", sm: "auto" }, color: "#fff" }}>
              Talk to us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
