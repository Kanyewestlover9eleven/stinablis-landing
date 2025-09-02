"use client";
import { Box, Typography } from "@mui/material";
import Section from "./Section";

export default function AboutUs() {
  return (
    <Section id="about">
      <Box textAlign="center" sx={{ mb: { xs: 5, md: 7 } }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#fff", mb: 1 }}>
          About Us
        </Typography>
        <Typography className="subtle" sx={{ maxWidth: 720, mx: "auto" }}>
          Who we are and why people trust us.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" }, // text above image on mobile
          alignItems: "center",
          gap: { xs: 3.5, md: 8 },
        }}
      >
        {/* Text */}
        <Box sx={{ flex: "1 1 0", textAlign: { xs: "center", md: "left" }, px: { xs: 1, md: 0 } }}>
          <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.8, mb: 1.5 }}>
            <strong>Stinablis</strong> turns plastics into innovation.
          </Typography>
          <Typography className="subtle" sx={{ lineHeight: 1.9 }}>
            Born in Malaysia, we combine engineering precision with modern tech to deliver high-performance systems,
            custom databases, and tough automotive parts. No gimmicks — just reliable work built to perform.
          </Typography>
        </Box>

        {/* Image */}
        <Box sx={{ flex: "1 1 0", width: "100%" }}>
          <Box
            component="img"
            src="/about-image.jpg"
            alt="About Stinablis"
            sx={{
              width: "100%",
              height: { xs: 240, sm: 300, md: 420 },
              objectFit: "cover",
              borderRadius: 16,
              border: "1px solid var(--stroke)",
              boxShadow: "0 14px 30px rgba(0,0,0,.35)",
            }}
          />
        </Box>
      </Box>
    </Section>
  );
}
