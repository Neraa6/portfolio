"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Code } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const experiences = [
  {
    type: "education",
    icon: GraduationCap,
    title: "IT Student - Vocational High School",
    organization: "SMK Technology",
    period: "2022 - 2026",
    description: "Specialized in Information Technology with focus on programming, networking, IoT systems, and digital design.",
    achievements: ["GPA: 3.8/4.0", "Best Project Award 2025", "IoT Competition Winner"],
  },
  {
    type: "certification",
    icon: Award,
    title: "Cisco Certified Network Associate",
    organization: "Cisco Networking Academy",
    period: "2024",
    description: "Fundamental networking concepts, routing, switching, and network security.",
  },
  {
    type: "internship",
    icon: Briefcase,
    title: "Junior Developer Intern",
    organization: "Tech Startup Inc.",
    period: "Summer 2025",
    description: "Developed web applications using React and Node.js, collaborated with cross-functional teams.",
    achievements: ["Built 3 production features", "Improved load time by 40%"],
  },
  {
    type: "project",
    icon: Code,
    title: "Smart IoT Home System",
    organization: "Personal Project",
    period: "2025",
    description: "End-to-end IoT solution with ESP32, MQTT, and React dashboard for home automation.",
    achievements: ["Real-time monitoring", "Voice control integration"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={exp.title} delay={index * 0.1}>
                  <motion.div
                    className={cn(
                      "relative flex gap-8",
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-accent to-accent-secondary border-4 border-background z-10" />

                    {/* Content Card */}
                    <div className={cn(
                      "flex-1 ml-12 md:ml-0",
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                    )}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass-card p-6 interactive"
                      >
                        <div className={cn(
                          "flex items-start gap-4 mb-4",
                          isEven ? "md:flex-row-reverse" : ""
                        )}>
                          <div className="p-3 rounded-xl bg-accent/20 flex-shrink-0">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <Badge variant="accent" className="mb-2">{exp.type}</Badge>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-accent-secondary font-medium">{exp.organization}</p>
                            <p className="text-sm text-text-secondary">{exp.period}</p>
                          </div>
                        </div>

                        <p className="text-text-secondary mb-4">{exp.description}</p>

                        {exp.achievements && (
                          <ul className={cn(
                            "space-y-2",
                            isEven ? "md:text-right" : ""
                          )}>
                            {exp.achievements.map((achievement) => (
                              <li key={achievement} className="text-sm text-text-secondary flex items-center gap-2">
                                <span className={cn(
                                  "w-1.5 h-1.5 rounded-full bg-accent",
                                  isEven ? "md:order-2" : ""
                                )} />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}