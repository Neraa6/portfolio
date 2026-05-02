import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { getSEOTags } from "./seo";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = getSEOTags({
  title: "Your Name | Full Stack Developer Portfolio",
  description: "IT Student & Junior Full Stack Developer specializing in modern web applications, backend systems, and IoT solutions.",
});

export const viewport: Viewport = {
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-background text-text-primary min-h-screen">
        <ScrollProgress />
        <CustomCursor />
        
        <Navbar />
        
        <main className="relative">
          {children}
        </main>
        
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}