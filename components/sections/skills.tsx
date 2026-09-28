"use client";

import { Terminal, Cpu, Database, Network, Shield, Settings, Box, Sparkles } from "lucide-react";
import { playRetroBeep } from "@/lib/retro-audio";

const skillCategories = [
  {
    id: "backend",
    title: "Backend Core",
    slot: "SLOT 01",
    headerBg: "bg-[#FFDE00]",
    icon: Cpu,
    items: ["Laravel (PHP)", "Express.js", "Node.js", "REST API"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    slot: "SLOT 02",
    headerBg: "bg-[#A3E635]",
    icon: Terminal,
    items: ["Next.js", "TypeScript", "TailwindCSS", "React", "JavaScript", "HTML/CSS"],
  },
  {
    id: "database",
    title: "Database Relational",
    slot: "SLOT 03",
    headerBg: "bg-[#00E5FF]",
    icon: Database,
    items: ["MySQL", "Supabase", "PostgreSQL"],
  },
  {
    id: "networking",
    title: "Network Infrastructure",
    slot: "SLOT 04",
    headerBg: "bg-[#FF007A] text-white",
    icon: Network,
    items: ["Mikrotik", "Linux Server", "Basic Networking", "Cisco"],
  },
  {
    id: "security",
    title: "Cyber Defence",
    slot: "SLOT 05",
    headerBg: "bg-[#FFDE00]",
    icon: Shield,
    items: ["CTF (Basic)", "Security Fundamentals"],
  },
  {
    id: "tools",
    title: "Developer Equipment",
    slot: "SLOT 06",
    headerBg: "bg-[#2563EB] text-white",
    icon: Settings,
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Linux (Ubuntu)"],
  },
];

export function Skills() {
  return (
    <div className="w-full space-y-8">
      {/* Title Header */}
      <div className="space-y-2 text-left">
        <div className="inline-block px-3.5 py-1 bg-[#FFDE00] text-black text-xs font-grotesk font-black uppercase rounded-md border-2 border-black shadow-[2px_2px_0px_#000]">
          ITEM INVENTORY
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-black text-black tracking-tight uppercase">
          EQUIPPED TECH STACK
        </h2>
      </div>

      {/* Grid of Inventory Slots */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              onMouseEnter={() => playRetroBeep(600, 0.04)}
              className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] p-5 rounded-2xl flex flex-col justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0px_0px_#000000] transition-all text-left space-y-4 relative group"
            >
              {/* Top Header Slot */}
              <div className="flex items-center justify-between border-b-2 border-black pb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 ${category.headerBg} border-2 border-black rounded-lg text-black shadow-[2px_2px_0px_#000]`}>
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xs font-grotesk font-black text-black uppercase">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skill Tag Cluster */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-[#FAF7F2] border-2 border-black text-xs font-mono font-extrabold text-black hover:bg-[#FFDE00] transition-colors cursor-default select-none shadow-[2px_2px_0px_#000]"
                  >
                  {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Slot Number */}
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-800 pt-2 border-t border-black/20">
                <span className="flex items-center gap-1 font-bold">
                  <Box className="w-3.5 h-3.5 text-[#FF5722]" />
                  {category.slot}
                </span>
                <span className="flex items-center gap-1 font-grotesk font-black text-[#2563EB]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFDE00]" /> READY
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}