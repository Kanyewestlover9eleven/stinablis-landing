//Footer.tsx

import { Box } from "@mui/material";
export default function Footer(){
  return (
    <Box component="footer" sx={{ borderTop:"1px solid var(--stroke)", py:4, textAlign:"center", color:"var(--muted)" }}>
      © {new Date().getFullYear()} Stinablis — All rights reserved.
    </Box>
  );
}
