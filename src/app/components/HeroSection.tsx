"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, Typography, Container } from "@mui/material";
import gsap from "gsap";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, [mounted]);

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
          <div ref={titleRef} style={{ opacity: mounted ? undefined : 0 }}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "clamp(2.8rem, 11vw, 4.5rem)", md: "clamp(4.5rem, 6vw, 6.5rem)" },
                lineHeight: 1.1,
                color: "#fff",
              }}
            >
              STINABLIS
            </Typography>
          </div>

          <div ref={subtitleRef} style={{ opacity: mounted ? undefined : 0 }}>
            <Typography
              className="subtle"
              sx={{ maxWidth: 900, fontSize: { xs: "1.05rem", md: "1.25rem" }, lineHeight: 1.7, px: { xs: 1, md: 0 } }}
            >
              Engineering Meets Sustainability
            </Typography>
          </div>

          <div ref={ctaRef} style={{ opacity: mounted ? undefined : 0, width: "100%" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <Button href="#contact" className="btn btn-primary" sx={{ width: { xs: "100%", sm: "auto" }, color: "#fff" }}>
                Talk to us
              </Button>
            </Stack>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}
