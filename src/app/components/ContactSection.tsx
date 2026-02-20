"use client";

import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
} from "@mui/material";
import Section from "./Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const formBoxRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        addressRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: addressRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formBoxRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formBoxRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        mapRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Refresh ScrollTrigger after a short delay for mobile
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_z4refme",        // Your EmailJS service ID
        "template_2tz2nes",       // Your EmailJS template ID
        formRef.current,
        "W4PxuH5Nidlqts1aJ"      // Your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <Section id="contact" withDivider={false}>
      <Container maxWidth="lg">
        <div ref={sectionRef}>
          {/* Heading */}
          <div ref={headingRef} style={{ textAlign: "center", marginBottom: "40px", opacity: mounted ? undefined : 0 }}>
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
              Tell us what you need. We&apos;ll reply fast.
            </Typography>
          </div>

          {/* Address • Form • Map */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 6 }}
            alignItems="stretch"
          >
            {/* Address */}
            <div ref={addressRef} style={{ flex: 1, opacity: mounted ? undefined : 0 }}>
              <Typography fontWeight={700}>
                Lot 1324, No.856, 1st Floor Tabuan Jaya 93350 Kuching Sarawak Malaysia
              </Typography>
              <Typography sx={{ mt: 1 }}>(+60) 11-6091 5670</Typography>
              <Typography sx={{ mt: 1 }}>info@stinablis.com</Typography>

              <Box sx={{ mt: 2 }}>
                <Link
                  href="https://facebook.com/stinablis"
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  color="inherit"
                >
                  Stinablis Facebook Page
                </Link>
                <br />
                <Link
                  href="https://linkedin.com/company/stinablis"
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  color="inherit"
                >
                  Stinablis LinkedIn Page
                </Link>
              </Box>
            </div>

            {/* Form */}
            <div ref={formBoxRef} className="card" style={{ flex: 1, padding: "24px", opacity: mounted ? undefined : 0 }}>
              <form ref={formRef} onSubmit={sendEmail}>
                <Stack spacing={2}>
                  <TextField
                    slotProps={{ htmlInput: { name: "user_name" } }}
                    fullWidth
                    placeholder="Your name"
                    variant="outlined"
                    required
                    InputProps={{
                      sx: {
                        bgcolor: "transparent",
                        color: "#fff",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--stroke)",
                        },
                        "& input": { color: "#fff" },
                      },
                    }}
                  />
                  <TextField
                    slotProps={{ htmlInput: { name: "user_email" } }}
                    fullWidth
                    placeholder="Your email"
                    variant="outlined"
                    required
                    InputProps={{
                      sx: {
                        bgcolor: "transparent",
                        color: "#fff",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--stroke)",
                        },
                        "& input": { color: "#fff" },
                      },
                    }}
                  />
                  <TextField
                    slotProps={{ htmlInput: { name: "message" } }}
                    fullWidth
                    multiline
                    minRows={4}
                    placeholder="Your message"
                    variant="outlined"
                    required
                    InputProps={{
                      sx: {
                        bgcolor: "transparent",
                        color: "#fff",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--stroke)",
                        },
                        "& textarea": { color: "#fff" },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    sx={{ alignSelf: { xs: "stretch", md: "flex-start" } }}
                  >
                    SEND
                  </Button>
                </Stack>
              </form>
            </div>

            {/* Map */}
            <div ref={mapRef} className="card" style={{ flex: 1, overflow: "hidden", opacity: mounted ? undefined : 0 }}>
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
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
