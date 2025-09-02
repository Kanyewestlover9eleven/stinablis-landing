//Header.tsx

"use client";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

export default function Header(){
  return (
    <AppBar position="fixed" elevation={0}
      sx={{ left:0,right:0,bgcolor:"rgba(10,12,18,.45)",backdropFilter:"blur(10px)",borderBottom:"1px solid var(--stroke)" }}>
      <Toolbar disableGutters sx={{ px:2, width:"100%" }}>
        <Box sx={{ fontWeight:900, letterSpacing:.4 }}>Stinablis</Box>
        <Box sx={{ flex:1 }} />
        <Button href="#about" sx={{ color:"#fff", textTransform:"none" }}>About</Button>
        <Button href="#products" sx={{ color:"#fff", textTransform:"none" }}>Products</Button>
        <Button href="#contact" className="btn btn-primary" sx={{ ml:1, textTransform:"none" }}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
