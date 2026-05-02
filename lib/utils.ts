import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export function generateSchema(orgName: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    url,
    image: `${url}/images/profile.jpg`,
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourprofile",
      "https://instagram.com/yourhandle",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: orgName,
    },
  };
}