import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gary Gaspar — Développeur Full-Stack",
  description:
    "Site vitrine de Gary Gaspar, développeur full-stack spécialisé en React, Next.js et Node.js.",
  openGraph: {
    title: "Gary Gaspar — Développeur Full-Stack",
    description:
      "Site vitrine de Gary Gaspar, développeur full-stack spécialisé en React, Next.js et Node.js.",
    url: "https://garygaspar.dev",
    siteName: "Gary Gaspar",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gary Gaspar — Développeur Full-Stack",
    description:
      "Site vitrine de Gary Gaspar, développeur full-stack spécialisé en React, Next.js et Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
