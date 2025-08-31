"use client";

import { Box, Typography } from "@mui/material";
import Section from "./Section";

export default function AboutUs() {
  return (
    <Section id="about">
      {/* Heading */}
      <Box textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mb: 1.5,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              display: "block",
              width: "50%",
              height: "3px",
              background: "linear-gradient(90deg, var(--g1), var(--g2))",
              margin: "8px auto 0",
              borderRadius: "2px",
            },
          }}
        >
          About Us
        </Typography>
        <Typography className="subtle" sx={{ maxWidth: 720, mx: "auto", mt: 1 }}>
          Who we are and why people trust us.
        </Typography>
      </Box>

      {/* Text + Image side by side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Text */}
        <Box sx={{ flex: "1 1 0" }}>
          <Typography sx={{ fontSize: "1.15rem", lineHeight: 1.7, mb: 2 }}>
            <strong>Stinablis</strong> turns plastics into innovation.
          </Typography>
          <Typography className="subtle" sx={{ lineHeight: 1.7 }}>
            At Stinablis, we turn bold ideas into real-world solutions. Born in
            Malaysia, we combine engineering precision with modern tech to
            deliver high-performance systems, custom databases, and tough
            automotive parts. No gimmicks — just solid, reliable work built to
            perform.
          </Typography>
        </Box>

        {/* Image */}
        <Box sx={{ flex: "1 1 0", width: "100%" }}>
          <Box
            component="img"
            src="/about-image.jpg"
            alt="About Stinablis"
            sx={{
              display: "block",
              width: "100%",
              height: { xs: 260, sm: 340, md: 420 },
              objectFit: "cover",
              borderRadius: 16,
              border: "1px solid var(--stroke)",
              boxShadow: "0 14px 30px rgba(0,0,0,.35)",
              backgroundColor: "#0f1320",
            }}
          />
        </Box>
      </Box>
    </Section>
  );
}
