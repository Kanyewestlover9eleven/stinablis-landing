"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Section from "./Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { img: "/rapid.jpg", title: "Rapid Prototyping", desc: "Any Idea or Solution that needs a prototype, we are here for you " },
  { img: "/fibre.jpg", title: "Sustainable Composites", desc: "Sustainable materials made from pineapple fibres" },
  { img: "/3dprint.jpg", title: "3D Printing", desc: "3D printed solutions catered to your requirements" },
  { img: "/bumper.png", title: "Automotive Parts", desc: "Customised parts based on your specifications" },
  { img: "/scanning.png", title: "Reverse Engineering", desc: "Reverse engineered solutions for your needs" },
  { img: "/web.png", title: "Software Solutions", desc: "Customised software solutions, websites and databases" },
  { img: "/production.png", title: "Animation and Audio Production", desc: "Your production needs, all in one stop" },
];

export default function ProductSection() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Refresh ScrollTrigger after a short delay for mobile
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4);

  return (
    <Section id="products">
      <div ref={sectionRef}>
        <div ref={headingRef} style={{ textAlign: "center", marginBottom: "40px", opacity: mounted ? undefined : 0 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#fff", mb: 1 }}>
            Our Products
          </Typography>
          <Typography className="subtle" sx={{ maxWidth: 720, mx: "auto" }}>
            Tooling that ships outcomes — not tickets.
          </Typography>
        </div>

        {/* First Row: 4 items */}
        <div className="grid grid-3">
          {firstRow.map((p, i) => (
            <div
              key={p.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="card"
              style={{ display: "flex", flexDirection: "column", opacity: mounted ? undefined : 0 }}
            >
              <img src={p.img} alt={p.title} className="aspect-3x2" />
              <Box className="card-pad" sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, color: "#fff" }}>
                  {p.title}
                </Typography>
                <Typography className="subtle" sx={{ mb: 2 }}>
                  {p.desc}
                </Typography>
                <Button className="btn btn-primary btn-full">Learn more</Button>
              </Box>
            </div>
          ))}
        </div>

        {/* Second Row: 3 items, centered */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <div className="grid grid-3" style={{ width: "fit-content" }}>
            {secondRow.map((p, i) => (
              <div
                key={p.title}
                ref={(el) => { cardsRef.current[i + 4] = el; }}
                className="card"
                style={{ display: "flex", flexDirection: "column", opacity: mounted ? undefined : 0 }}
              >
                <img src={p.img} alt={p.title} className="aspect-3x2" />
                <Box className="card-pad" sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, color: "#fff" }}>
                    {p.title}
                  </Typography>
                  <Typography className="subtle" sx={{ mb: 2 }}>
                    {p.desc}
                  </Typography>
                  <Button className="btn btn-primary btn-full">Learn more</Button>
                </Box>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </Section>
  );
}