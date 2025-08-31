"use client";

import { Box, Container, Typography, TextField, Button, Stack, Link } from "@mui/material";

export default function ContactSection() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(180deg, rgba(15,19,32,1) 0%, rgba(10,12,18,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
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
          <Typography className="subtle">
            Tell us what you need. We’ll reply fast.
          </Typography>
        </Box>

        {/* Layout: Address | Form | Map */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Address */}
          <Box flex={1}>
            <Typography fontWeight={600}>
              No. 58, G floor, Block B, Taman Sri Sarawak, Jalan Padungan, 93350 Kuching Sarawak
            </Typography>
            <Typography sx={{ mt: 1 }}>(+60) 11-6091 5670</Typography>
            <Typography>info@stinablis.com</Typography>

            <Box sx={{ mt: 2 }}>
              <Link href="https://facebook.com/YOUR_PAGE_HERE" target="_blank" underline="hover" color="primary">
                Stinablis Facebook Page
              </Link>
              <br />
              <Link href="https://linkedin.com/YOUR_PAGE_HERE" target="_blank" underline="hover" color="primary">
                Stinablis LinkedIn Page
              </Link>
            </Box>
          </Box>

          {/* Contact Form */}
          <Box flex={1} component="form">
            <Stack spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Your email"
                InputProps={{
                  sx: {
                    bgcolor: "rgba(255,255,255,0.04)",
                    color: "#fff",
                    borderRadius: "8px",
                    "& input": { color: "#fff" },
                  },
                }}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                placeholder="Your message"
                InputProps={{
                  sx: {
                    bgcolor: "rgba(255,255,255,0.04)",
                    color: "#fff",
                    borderRadius: "8px",
                    "& textarea": { color: "#fff" },
                  },
                }}
              />
              <Button
                variant="contained"
                className="btn btn-primary"
                sx={{ color: "#fff" }}
              >
                SEND
              </Button>
            </Stack>
          </Box>

          {/* Google Maps Embed */}
          <Box
            flex={1}
            sx={{
              minHeight: 300,
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--stroke)",
              boxShadow: "0 8px 20px rgba(0,0,0,.4)",
              bgcolor: "rgba(255,255,255,0.04)", // fallback bg
            }}
          >
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
        </Stack>
      </Container>
    </Box>
  );
}
