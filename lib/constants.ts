export const SITE_CONFIG = {
  name: "Your Name",
  title: "IT Student | Full Stack Developer | IoT Enthusiast",
  description: "Passionate about building modern web applications, backend systems, networking infrastructure, and smart IoT solutions.",
  url: "https://yourportfolio.com",
  email: "hello@example.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    instagram: "https://instagram.com/yourhandle",
  },
} as const;

export const NAVIGATION = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;