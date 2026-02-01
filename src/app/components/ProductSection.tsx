"use client";
import { Box, Button, Typography } from "@mui/material";
import Section from "./Section";

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
  // Split products into two rows
  const firstRow = products.slice(0, 4); // First 4 items
  const secondRow = products.slice(4);   // Remaining 3 items

  return (
    <Section id="products">
      <Box textAlign="center" sx={{ mb: { xs: 5, md: 7 } }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#fff", mb: 1 }}>
          Our Products
        </Typography>
        <Typography className="subtle" sx={{ maxWidth: 720, mx: "auto" }}>
          Tooling that ships outcomes — not tickets.
        </Typography>
      </Box>

      {/* First Row: 4 items */}
      <div className="grid grid-3">
        {firstRow.map((p) => (
          <Box key={p.title} className="card" sx={{ display: "flex", flexDirection: "column" }}>
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
          </Box>
        ))}
      </div>

      {/* Second Row: 3 items, centered */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <div className="grid grid-3" style={{ width: "fit-content" }}>
          {secondRow.map((p) => (
            <Box key={p.title} className="card" sx={{ display: "flex", flexDirection: "column" }}>
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
            </Box>
          ))}
        </div>
      </Box>
    </Section>
  );
}