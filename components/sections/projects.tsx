"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, staggerItem } from "@/components/animations/stagger-container";
import { TiltCard } from "@/components/effects/tilt-card";
import Image from "next/image";

const projects = [
  {
    title: "Smart Door Lock",
    description: "Smart security system where registered RFID cards unlock the door automatically using ESP32 and C++.",
    image: "/images/project-smart-lock.jpg",
    tech: ["ESP32", "RFID", "IoT", "C++"],
    features: ["RFID authentication", "Access logging", "IoT monitoring", "Real-time status"],
    github: "#",
    demo: "#",
  },
  {
    title: "Iflix Clone",
    description: "Movie streaming web application with authentication, CRUD account system, and responsive UI.",
    image: "/images/project-iflix.jpg",
    tech: ["HTML & CSS", "JavaScript", "Express", "MySQL"],
    features: ["Login/Register", "Dashboard", "CRUD user", "Backend API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Catering Online System",
    description: "Modern catering ordering platform with admin dashboard and order management.",
    image: "/images/project-catering.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    features: ["Online ordering", "Payment integration", "Dashboard analytics", "Inventory system"],
    github: "#",
    demo: "#",
  },
   {
    title: "Pokemon API",
    description: "RESTful API for fetching Pokemon data with filtering and search capabilities.",
    image: "/images/project-pokemon.jpg",
    tech: ["Node.js", "Express", "MongoDB"],
    features: ["GET requests", "POST requests", "Filtering", "Search"],
    github: "#",
    demo: "#",
  },
  {
    title: "Whether App",
    description: "Weather forecasting app that provides real-time weather data and forecasts for any location.",
    image: "/images/project-whether.jpg",
    tech: ["React", "OpenWeather API", "TailwindCSS"],
    features: ["Current weather", "7-day forecast", "Location search", "Responsive design"],
    github: "#",
    demo: "#",
  },
  {
    title: "Todo App",
    description: "A simple and efficient todo application with a clean and intuitive user interface.",
    image: "/images/project-todo.jpg",
    tech: ["React", "TypeScript", "TailwindCSS"],
    features: ["Add tasks", "Mark as complete", "Delete tasks", "Responsive design"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid md:grid-cols-4 lg:grid-cols-3 gap-9">
            {projects.map((project) => (
              <motion.div key={project.title} variants={staggerItem}>
                <TiltCard className="h-full">
                  <Card className="h-full p-0 overflow-hidden interactive" hover={false}>
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="text-sm text-text-secondary flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Actions */}
                      <div className="flex gap-3 pt-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" size="sm" className="flex-1 interactive">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="flex-1 interactive">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

        {/* View All Button */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="interactive">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}