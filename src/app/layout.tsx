import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stinablis - Engineering Meets Sustainability",
  description: "Stinablis turns plastics into innovation. Engineering precision with modern tech.",
  icons: {
    icon: "/logo-new.png",
    apple: "/logo-new.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
        <link rel="icon" href="/logo-new.png" type="image/png" />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
