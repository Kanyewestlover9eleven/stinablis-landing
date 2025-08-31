"use client";
import { Box, Button, Stack, Typography, Container } from "@mui/material";

export default function HeroSection(){
  return (
    <Box component="section"
      sx={{ position:"relative", minHeight:"92vh", display:"flex", alignItems:"center",
            background:"url(/hero-image.jpg) center/cover no-repeat" }}>
      <Box sx={{ position:"absolute", inset:0, background:"linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.82))" }}/>
      <Container maxWidth="lg" sx={{ position:"relative", zIndex:1, pt:12 }}>
        <Stack alignItems="center" textAlign="center" spacing={3}>
          <Typography variant="h1"
            sx={{ fontWeight:900, fontSize:{ xs:"3rem", md:"4.6rem" }, lineHeight:1.05, color:"#fff" }}>
            Stinablis
          </Typography>
          <Typography sx={{ maxWidth:900, fontSize:{ xs:"1.15rem", md:"1.35rem" }, lineHeight:1.7 }} className="subtle">
            Production-grade software, data, and AI systems with clean UI and ruthless reliability.
          </Typography>
          <Stack direction={{ xs:"column", sm:"row" }} spacing={2} sx={{ mt:2 }}>
            <Button href="#contact" className="btn btn-primary">Talk to us</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
