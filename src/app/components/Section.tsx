"use client";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps { id?: string; children: ReactNode; withDivider?: boolean; }

export default function Section({ id, children, withDivider = true }: SectionProps) {
  return (
    <Box id={id} component="section" sx={{ py:{ xs:6, md:8 }, position:"relative" }}>
      <Container maxWidth="lg">{children}</Container>
      {withDivider && (
        <Box sx={{
          mt:{ xs:3, md:5 }, height:"1px",
          background:"linear-gradient(90deg,transparent,rgba(255,255,255,.14),transparent)"
        }}/>
      )}
    </Box>
  );
}
