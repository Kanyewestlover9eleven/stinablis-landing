//Footer.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Refresh ScrollTrigger after a short delay for mobile
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => ctx.revert();
  }, [mounted]);

  return (
    <footer
      ref={footerRef}
      style={{
        borderTop: "1px solid var(--stroke)",
        padding: "32px 0",
        textAlign: "center",
        color: "var(--muted)",
        opacity: mounted ? undefined : 0,
      }}
    >
      © {new Date().getFullYear()} Stinablis — All rights reserved.
    </footer>
  );
}
