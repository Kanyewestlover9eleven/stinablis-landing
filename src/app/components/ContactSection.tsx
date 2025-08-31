"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Section from "./Section";

export default function ContactSection(){
  const [email,setEmail]=useState(""); const [msg,setMsg]=useState("");

  return (
    <Section id="contact" withDivider={false}>
      <Box textAlign="center" sx={{ mb:{ xs:5, md:7 } }}>
        <Typography variant="h4" sx={{ fontWeight:900, color:"#fff", mb:1 }}>Contact Us</Typography>
        <Typography className="subtle" sx={{ maxWidth:720, mx:"auto" }}>
          Tell us what you need. We’ll reply fast.
        </Typography>
      </Box>

      <Box className="card" sx={{ maxWidth:720, mx:"auto", p:{ xs:3, md:4 } }}>
        <form onSubmit={(e)=>e.preventDefault()}>
          <TextField label="Your email" type="email" fullWidth value={email} onChange={e=>setEmail(e.target.value)}
            sx={{ mb:2,
              "& .MuiInputBase-input":{ color:"#eef1f7" },
              "& .MuiInputLabel-root":{ color:"var(--muted)" },
              "& .MuiOutlinedInput-notchedOutline":{ borderColor:"var(--stroke)" }}} />
          <TextField label="Your message" fullWidth multiline minRows={4} value={msg} onChange={e=>setMsg(e.target.value)}
            sx={{ mb:3,
              "& .MuiInputBase-input":{ color:"#eef1f7" },
              "& .MuiInputLabel-root":{ color:"var(--muted)" },
              "& .MuiOutlinedInput-notchedOutline":{ borderColor:"var(--stroke)" }}} />
          <Button type="submit" className="btn btn-primary btn-full">Send</Button>
        </form>
      </Box>
    </Section>
  );
}
