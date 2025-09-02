"use client";

import { Box, Container, Typography, TextField, Button, Stack, Link } from "@mui/material";
import Section from "./Section";

export default function ContactSection() {
  return (
    <Section id="contact" withDivider={false}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" sx={{ mb: { xs: 5, md: 7 } }}>
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
          <Typography className="subtle">Tell us what you need. We’ll reply fast.</Typography>
        </Box>

        {/* Address • Form • Map */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          {/* Address */}
          <Box flex={1}>
            <Typography fontWeight={700}>
              No. 58, G floor, Block B, Taman Sri Sarawak, Jalan Padungan, 93350 Kuching Sarawak
            </Typography>
            <Typography sx={{ mt: 1 }}>(+60) 11-6091 5670</Typography>
            <Typography sx={{ mt: 1 }}>info@stinablis.com</Typography>

            <Box sx={{ mt: 2 }}>
              <Link href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener" underline="hover" color="inherit">
                Stinablis Facebook Page
              </Link>
              <br />
              <Link href="https://linkedin.com/YOUR_PAGE" target="_blank" rel="noopener" underline="hover" color="inherit">
                Stinablis LinkedIn Page
              </Link>
            </Box>
          </Box>

          {/* Form */}
          <Box flex={1} className="card" sx={{ p: { xs: 2.5, md: 3 } }}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder="Your email"
                variant="outlined"
                InputProps={{
                  sx: {
                    bgcolor: "transparent",
                    color: "#fff",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--stroke)" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,.3)" },
                    "& input": { color: "#fff" },
                  },
                }}
              />
              <TextField
                fullWidth
                multiline
                minRows={4}
                placeholder="Your message"
                variant="outlined"
                InputProps={{
                  sx: {
                    bgcolor: "transparent",
                    color: "#fff",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--stroke)" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,.3)" },
                    "& textarea": { color: "#fff" },
                  },
                }}
              />
              <Button className="btn btn-primary" sx={{ alignSelf: { xs: "stretch", md: "flex-start" } }}>
                SEND
              </Button>
            </Stack>
          </Box>

          {/* Map */}
          <Box flex={1} className="card" sx={{ overflow: "hidden" }}>
            <Box sx={{ aspectRatio: "16 / 10", minHeight: { xs: 240, md: 300 } }}>
              <iframe
                title="Stinablis Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3451199480396!2d110.34905117496618!3d1.557059998428393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba76d9a491405%3A0x2cd3d5711f3ebe42!2sStinablis!5e0!3m2!1sen!2smy!4v1756655094706!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}
