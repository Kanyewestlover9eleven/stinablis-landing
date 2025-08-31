"use client";

import { Box, Button, Typography } from "@mui/material";
import Section from "./Section";

const products = [
  { img: "/product1.jpg", title: "Signal", desc: "Executive analytics cockpit. Real-time KPIs with zero setup." },
  { img: "/product2.jpg", title: "Relay",  desc: "Workflow automation: requests → approvals → Slack/Email." },
  { img: "/about-image.jpg", title: "Atlas", desc: "Headless CMS + site kit. Blazing fast, SEO-first." },
];

export default function ProductSection() {
  return (
    <Section id="products">
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
          Our Products
        </Typography>
        <Typography className="subtle" sx={{ maxWidth: 720, mx: "auto", mt: 1 }}>
          Tooling that ships outcomes — not tickets.
        </Typography>
      </Box>

      {/* Force 3 across with your global grid classes */}
      <div className="grid grid-3">
        {products.map((p) => (
          <Box key={p.title} className="card" sx={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <img src={p.img} alt={p.title} className="aspect-3x2" />
            <Box className="card-pad" sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, color: "#fff" }}>
                {p.title}
              </Typography>
              <Typography className="subtle" sx={{ mb: 1 }}>
                {p.desc}
              </Typography>
              <Button className="btn btn-primary" fullWidth>
                Learn more
              </Button>
            </Box>
          </Box>
        ))}
      </div>
    </Section>
  );
}
