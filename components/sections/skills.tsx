"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Network, Cpu, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, staggerItem } from "@/components/animations/stagger-container";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "blue",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "PHP", level: 75 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "purple",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "blue",
    skills: [
      { name: "Express.js", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Supabase", level: 70 },
    ],
  },
  {
    title: "Networking",
    icon: Network,
    color: "purple",
    skills: [
      { name: "Mikrotik", level: 85 },
      { name: "Cisco Basic", level: 70 },
      { name: "Linux Server", level: 75 },
    ],
  },
  {
    title: "IoT",
    icon: Cpu,
    color: "blue",
    skills: [
      { name: "ESP32", level: 80 },
      { name: "RFID Systems", level: 75 },
      { name: "Sensor Integration", level: 70 },
    ],
  },
  {
    title: "Tools",
    icon: Settings,
    color: "purple",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div key={category.title} variants={staggerItem}>
                  <Card className="h-full interactive" glow>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-${category.color}-500/20`}>
                        <Icon className={`w-5 h-5 text-${category.color}-400`} />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <Badge variant="accent">{skill.level}%</Badge>
                          </div>
                          <Progress value={skill.level} color={category.color as "blue" | "purple"} />
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}