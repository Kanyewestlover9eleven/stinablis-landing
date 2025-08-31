"use client";

import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  withDivider?: boolean;
}

export default function Section({ id, children, withDivider = true }: SectionProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 8 }, // reduced vertical padding (was 10/14)
        position: "relative",
      }}
    >
      <Container maxWidth="lg">{children}</Container>

      {/* Optional gradient divider at the bottom */}
      {withDivider && (
        <Box
          sx={{
            mt: { xs: 4, md: 6 }, // tighter margin below divider (was 8/10)
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent)",
          }}
        />
      )}
    </Box>
  );
}
