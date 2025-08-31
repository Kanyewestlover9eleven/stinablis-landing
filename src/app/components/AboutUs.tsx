"use client";
import { Box, Container, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box id="about" component="section" sx={{ py:{ xs:12, md:16 }, background:"linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ mb:{ xs:8, md:10 } }}>
          <Typography variant="h3" sx={{ fontWeight:900, mb:1.5, color:"#fff" }}>
            About Us
          </Typography>
          <Typography className="subtle" sx={{ maxWidth:820, mx:"auto", fontSize:{ xs:"1.05rem", md:"1.15rem" } }}>
            Who we are and why people trust us.
          </Typography>
        </Box>

        <Box sx={{ display:"flex", flexDirection:{ xs:"column", md:"row" }, alignItems:"center", gap:{ xs:5, md:10 } }}>
          <Box sx={{ flex:"1 1 0" }}>
            <Typography sx={{ fontSize:{ xs:"1.15rem", md:"1.25rem" }, lineHeight:1.8, mb:2 }}>
              <strong>Stinablis</strong> turns plastics into innovation.
            </Typography>
            <Typography className="subtle" sx={{ fontSize:{ xs:"1.02rem", md:"1.12rem" }, lineHeight:1.9 }}>
              Born in Malaysia, we combine engineering precision with modern tech to deliver high-performance systems,
              custom databases, and tough automotive parts. No gimmicks — just reliable work built to perform.
            </Typography>
          </Box>

          <Box sx={{ flex:"1 1 0", width:"100%" }}>
            <Box component="img" src="/about-image.jpg" alt="About Stinablis"
              sx={{ display:"block", width:"100%", height:{ xs:320, md:520 }, objectFit:"cover",
                    borderRadius:18, border:"1px solid var(--stroke)", boxShadow:"0 18px 44px rgba(0,0,0,.38)" }}/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
