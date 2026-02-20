"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Section from "./Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 60, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Refresh ScrollTrigger after a short delay for mobile
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <Section id="about">
      <div ref={sectionRef}>
        <div ref={headingRef} style={{ textAlign: "center", marginBottom: "40px", opacity: mounted ? undefined : 0 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#fff", mb: 1 }}>
            About Us
          </Typography>
          <Typography className="subtle" sx={{ maxWidth: 720, mx: "auto" }}>
            Who we are and why people trust us.
          </Typography>
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: { xs: 3.5, md: 8 },
          }}
        >
          {/* Text */}
          <div ref={textRef} style={{ flex: "1 1 0", opacity: mounted ? undefined : 0 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { xs: 1, md: 0 } }}>
              <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.8, mb: 1.5 }}>
                <strong>Stinablis</strong> turns plastics into innovation.
              </Typography>
              <Typography className="subtle" sx={{ lineHeight: 1.9 }}>
                Born in Malaysia, we combine engineering precision with modern tech to deliver high-performance systems,
                custom databases, and tough automotive parts. No gimmicks — just reliable work built to perform.
              </Typography>
            </Box>
          </div>

          {/* Image */}
          <div ref={imageRef} style={{ flex: "1 1 0", width: "100%", opacity: mounted ? undefined : 0 }}>
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
          </div>
        </Box>
      </div>
    </Section>
  );
}
