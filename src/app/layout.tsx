import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crescent Technology",
  description:
    "Crescent Technology, established in 2006 in Atlanta, Georgia, USA, is a leader indigital transformation, specializing in custom IOT integrations, generative AI, andadvanced analytics, and cloud migration. With over 15 years of experience, wehave empoweredmore than 76 clients worldwide. We operate from offices inthe USA, KSA, and India.",
  applicationName: "Crescent Technology",
  authors: [{ name: "Crescent Technology" }],
  keywords: [
    "digital transformation",
    "custom IOT integrations",
    "generative AI",
    "advanced analytics",
    "cloud migration",
    "custom software development",
    "machine learning",
    "data analytics",
    "IT consulting",
    "cybersecurity",
  ],
  generator: "Crescent Technology",
  creator: "Crescent Technology",
  publisher: "Crescent Technology",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
