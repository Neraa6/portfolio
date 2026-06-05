import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { getSEOTags } from "./seo";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = getSEOTags({
  title: "Yusuf Regan | Full Stack Developer Portfolio",
  description: "IT Student & Junior Full Stack Developer specializing in modern web applications, backend systems, and IoT solutions.",
});

export const viewport: Viewport = {
  themeColor: "#F6F3EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} scroll-smooth`}>
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