export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: "blue" | "purple";
  skills: Skill[];
}

export interface Experience {
  type: "education" | "certification" | "internship" | "project";
  icon: React.ElementType;
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}