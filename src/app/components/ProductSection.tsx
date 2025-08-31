import { Box, Button, Container, Typography } from "@mui/material";

const products = [
  { img:"/product1.jpg", title:"Signal", desc:"Executive analytics cockpit. Real-time KPIs with zero setup." },
  { img:"/product2.jpg", title:"Relay",  desc:"Workflow automation: requests → approvals → Slack/Email." },
  { img:"/about-image.jpg", title:"Atlas", desc:"Headless CMS + site kit. Blazing fast, SEO-first." },
];

export default function ProductSection(){
  return (
    <Box id="products" component="section" sx={{ py:{ xs:12, md:16 }, background:"linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.03))" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ mb:{ xs:8, md:10 } }}>
          <Typography variant="h3" sx={{ fontWeight:900, mb:1.5, color:"#fff" }}>Our Products</Typography>
          <Typography className="subtle" sx={{ maxWidth:820, mx:"auto", fontSize:{ xs:"1.05rem", md:"1.15rem" } }}>
            Tooling that ships outcomes — not tickets.
          </Typography>
        </Box>

        <div className="grid grid-3">
          {products.map(p=>(
            <Box key={p.title} className="card" sx={{ height:"100%" }}>
              <img src={p.img} alt={p.title} className="aspect-3x2" />
              <Box className="card-pad">
                <Typography variant="h6" sx={{ fontWeight:900, mb:1, color:"#fff", fontSize:"1.25rem" }}>{p.title}</Typography>
                <Typography className="subtle" sx={{ mb:2, fontSize:"1.02rem" }}>{p.desc}</Typography>
                <Button className="btn btn-primary" fullWidth>Learn more</Button>
              </Box>
            </Box>
          ))}
        </div>
      </Container>
    </Box>
  );
}
