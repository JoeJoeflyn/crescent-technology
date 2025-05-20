import Footer from "@/components/layout/footer";
import { NavbarComponent } from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crescent Technology",
  description:
    "Crescent Technology, established in 2006 in Atlanta, Georgia, USA, is a leader indigital transformation, specializing in custom IOT integrations, generative AI, andadvanced analytics, and cloud migration. With over 15 years of experience, wehave empoweredmore than 76 clients worldwide. We operate from offices inthe USA, KSA, and India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
