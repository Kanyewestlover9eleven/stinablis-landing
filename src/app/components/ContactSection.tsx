"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import Section from "./Section";
import { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <Section id="contact" withDivider={false}>
      <Box textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mb: 1.5,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              display: "block",
              width: "50%",
              height: "3px",
              background: "linear-gradient(90deg, var(--g1), var(--g2))",
              margin: "8px auto 0",
              borderRadius: "2px",
            },
          }}
        >
          Contact Us
        </Typography>
        <Typography className="subtle" sx={{ maxWidth: 720, mx: "auto", mt: 1 }}>
          Tell us what you need. We’ll reply fast.
        </Typography>
      </Box>

      {/* Revert to the darker card + white inputs */}
      <Box
        className="card"
        sx={{
          maxWidth: 720,
          mx: "auto",
          p: { xs: 3, md: 4 },
          background: "rgba(16,20,33,.95)",
          borderColor: "rgba(255,255,255,.08)",
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            label="Your email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiInputBase-input": { color: "#eef1f7" },
              "& .MuiInputLabel-root": { color: "var(--muted)" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--stroke)" },
            }}
          />
          <TextField
            label="Your message"
            fullWidth
            multiline
            minRows={4}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            sx={{
              mb: 3,
              "& .MuiInputBase-input": { color: "#eef1f7" },
              "& .MuiInputLabel-root": { color: "var(--muted)" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--stroke)" },
            }}
          />
          <Button type="submit" className="btn btn-primary" fullWidth>
            Send
          </Button>
        </form>
      </Box>
    </Section>
  );
}
