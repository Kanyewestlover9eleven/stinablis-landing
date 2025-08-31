"use client";
import { Box, Button, Typography } from "@mui/material";
import Section from "./Section";

const products = [
  { img:"/product1.jpg", title:"Signal", desc:"Executive analytics cockpit. Real-time KPIs with zero setup." },
  { img:"/product2.jpg", title:"Relay",  desc:"Workflow automation: requests → approvals → Slack/Email." },
  { img:"/about-image.jpg", title:"Atlas", desc:"Headless CMS + site kit. Blazing fast, SEO-first." },
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
