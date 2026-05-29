"use client";

import { Terminal, Cpu, Database, Network, Shield, Settings } from "lucide-react";

const skillCategories = [
  {
    id: "backend",
    title: "Backend Development",
    icon: Cpu,
    items: ["Laravel (PHP)", "Express.js", "Node.js", "REST API"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Terminal,
    items: ["Next.js", "TypeScript", "TailwindCSS", "React", "JavaScript", "HTML/CSS"],
  },
  {
    id: "database",
    title: "Database Management",
    icon: Database,
    items: ["MySQL", "Supabase", "PostgreSQL"],
  },
  {
    id: "networking",
    title: "Networking & Infra",
    icon: Network,
    items: ["Mikrotik", "Linux Server", "Basic Networking", "Cisco"],
  },
  {
    id: "security",
    title: "Cyber Security",
    icon: Shield,
    items: ["CTF (Basic)", "Security Fundamentals"],
  },
  {
    id: "tools",
    title: "Tools & OS",
    icon: Settings,
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Linux (Ubuntu)"],
  },
];

export function Skills() {
  return (
    <div className="w-full space-y-12">
      {/* Title */}
      <div className="space-y-2">
        <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">Expertise</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-accent-secondary">Skills & Technologies</h2>
      </div>

      {/* Grid of Categories (shows everything at once, spacious & readable) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-secondary border border-khaki/30 p-6 rounded-3xl flex flex-col justify-between hover:border-accent/40 transition-colors shadow-sm text-left"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-sm font-bold text-accent-secondary font-mono">
                    {category.title}
                  </h3>
                </div>

                {/* Tag Cluster */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-[#F6F3EB] border border-khaki/30 text-[10px] font-mono text-text-primary hover:border-accent/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}