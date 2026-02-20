// Header.tsx

"use client";
import { useEffect, useRef, useState } from "react";
import { Toolbar, Box, Button } from "@mui/material";
import gsap from "gsap";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        headerRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          logoRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          navRef.current?.children || [],
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, [mounted]);

  return (
    <header
      ref={headerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backgroundColor: "rgba(10,12,18,.45)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--stroke)",
        opacity: mounted ? undefined : 0,
      }}
    >
      <Toolbar disableGutters sx={{ px: 2, width: "100%" }}>
        {/* Logo */}
        <a
          ref={logoRef}
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            opacity: mounted ? undefined : 0,
          }}
        >
          <Box
            component="img"
            src="/logo-new.png"
            alt="Stinablis"
            sx={{
              height: { xs: "36px", md: "44px" },
              width: "auto",
            }}
          />
        </a>

        <Box sx={{ flex: 1 }} />
        <div ref={navRef} style={{ display: "flex", alignItems: "center" }}>
          <Button href="#about" sx={{ color: "#fff", textTransform: "none", opacity: mounted ? 1 : 0 }}>
            About
          </Button>
          <Button href="#products" sx={{ color: "#fff", textTransform: "none", opacity: mounted ? 1 : 0 }}>
            Products
          </Button>
          <Button
            href="#contact"
            className="btn btn-primary"
            sx={{ ml: 1, textTransform: "none", opacity: mounted ? 1 : 0 }}
          >
            Contact
          </Button>
        </div>
      </Toolbar>
    </header>
  );
}