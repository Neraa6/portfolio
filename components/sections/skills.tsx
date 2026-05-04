"use client";

import { motion } from "framer-motion";
import { StaggerContainer, staggerItem } from "@/components/animations/stagger-container";
import { FadeIn } from "@/components/animations/fade-in";

const skillCategories = [
  {
    title: "Backend",
    items: ["Laravel (PHP)", "Express.js", "Node.js", "REST API"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "TypeScript", "TailwindCSS", "React", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Database",
    items: ["MySQL", "Supabase", "PostgreSQL"],
  },
  {
    title: "Networking",
    items: ["Mikrotik", "Linux Server", "Basic Networking", "Cisco"],
  },
  {
    title: "Cyber Security",
    items: ["CTF (Basic)", "Security Fundamentals"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Linux (Ubuntu)"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={staggerItem}
                className="flex flex-col sm:flex-row sm:items-start gap-3"
              >
                {/* Category Label */}
                <div className="sm:w-40 flex-shrink-0">
                  <span className="text-lg font-bold text-white sm:text-right block">
                    {category.title}
                  </span>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-full bg-secondary border border-white/10 
                                 text-text-primary text-sm font-medium cursor-default 
                                 hover:border-accent/50 hover:bg-accent/10 
                                 hover:text-accent transition-all duration-200 
                                 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]
                                 interactive"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}