import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function getSEOTags({
  title,
  description,
  image = "/images/og-image.jpg",
  url = "https://yourportfolio.com",
}: SEOProps): Metadata {
  return {
    title: {
      default: title,
      template: `%s | Your Name`,
    },
    description,
    keywords: [
      "Full Stack Developer",
      "IT Student",
      "Web Development",
      "IoT",
      "React",
      "Next.js",
      "Node.js",
      "Portfolio",
    ],
    authors: [{ name: "Your Name" }],
    creator: "Your Name",
    publisher: "Your Name",
    
    // Open Graph
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Your Name Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@yourhandle",
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    // Verification
    verification: {
      google: "your-google-verification-code",
    },
    
    // Manifest
    manifest: "/site.webmanifest",
    
    // Icons
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    
    // Alternate languages
    alternates: {
      canonical: url,
    },
  };
}