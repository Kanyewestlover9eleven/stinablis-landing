"use client";
import { Box, Button, Typography } from "@mui/material";
import Section from "./Section";

const products = [
  { img:"/rapid.jpg", title:"Rapid Prototyping", desc:"We make prototypes" },
  { img:"/product2.jpg", title:"Sustainable Composites",  desc:"sustainable engineering" },
  { img:"/3dprint.jpg", title:"3D Printing", desc:"any prints you want" },
  { img:"/automotive.jpg", title:"Automotive Parts", desc:"customised parts based on your needs" },
  { img:"/about-image.jpg", title:"Reverse Engineering", desc:"Reverse engineering" },
  { img:"/software.jpg", title:"Software Solutions", desc:"Customised Software Solutions catered to your needs" },
];

export default function ProductSection(){
  return (
    <Section id="products">
      <Box textAlign="center" sx={{ mb:{ xs:5, md:7 } }}>
        <Typography variant="h4" sx={{ fontWeight:900, color:"#fff", mb:1 }}>Our Products</Typography>
        <Typography className="subtle" sx={{ maxWidth:720, mx:"auto" }}>
          Tooling that ships outcomes — not tickets.
        </Typography>
      </Box>

      <div className="grid grid-3">
        {products.map(p=>(
          <Box key={p.title} className="card" sx={{ display:"flex", flexDirection:"column" }}>
            <img src={p.img} alt={p.title} className="aspect-3x2" />
            <Box className="card-pad" sx={{ flexGrow:1 }}>
              <Typography variant="h6" sx={{ fontWeight:800, mb:.5, color:"#fff" }}>{p.title}</Typography>
              <Typography className="subtle" sx={{ mb:2 }}>{p.desc}</Typography>
              <Button className="btn btn-primary btn-full">Learn more</Button>
            </Box>
          </Box>
        ))}
      </div>
    </Section>
  );
}
