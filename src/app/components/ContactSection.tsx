"use client";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ContactSection(){
  const [email,setEmail]=useState(""); const [msg,setMsg]=useState("");
  return (
    <Box id="contact" component="section" sx={{ py:{ xs:12, md:16 }, background:"linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.02))" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ mb:{ xs:8, md:10 } }}>
          <Typography variant="h3" sx={{ fontWeight:900, mb:1.5, color:"#fff" }}>Contact Us</Typography>
          <Typography className="subtle" sx={{ maxWidth:820, mx:"auto", fontSize:{ xs:"1.05rem", md:"1.15rem" } }}>
            Tell us what you need. We’ll reply fast.
          </Typography>
        </Box>

        <Box className="card" sx={{ maxWidth:840, mx:"auto", p:{ xs:4, md:5 } }}>
          <form onSubmit={(e)=>e.preventDefault()}>
            <TextField label="Your email" type="email" fullWidth value={email} onChange={e=>setEmail(e.target.value)}
              sx={{ mb:3,
                "& .MuiInputBase-input":{ color:"#fff", fontSize:"1.05rem" },
                "& .MuiInputLabel-root":{ color:"var(--muted)" },
                "& .MuiOutlinedInput-notchedOutline":{ borderColor:"var(--stroke)" }}} />
            <TextField label="Your message" fullWidth multiline minRows={5} value={msg} onChange={e=>setMsg(e.target.value)}
              sx={{ mb:3,
                "& .MuiInputBase-input":{ color:"#fff", fontSize:"1.05rem" },
                "& .MuiInputLabel-root":{ color:"var(--muted)" },
                "& .MuiOutlinedInput-notchedOutline":{ borderColor:"var(--stroke)" }}} />
            <Button type="submit" className="btn btn-primary" fullWidth>Send</Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
