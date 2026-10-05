"use client";

import { Terminal, Cpu, Database, Network, Shield, Settings, Box, Sparkles } from "lucide-react";
import { playRetroBeep } from "@/lib/retro-audio";
import { UnderlineScribble } from "@/components/ui/handwritten-doodles";

const skillCategories = [
  {
    id: "backend",
    title: "Backend Core",
    slot: "SLOT 01",
    icon: Cpu,
    headerBg: "bg-[#FFE17D] text-[#111111]",
    items: ["Laravel (PHP)", "Express.js", "Node.js", "REST API"],
    badgeColors: ["bg-[#A0C4FF]", "bg-[#D8FF45]", "bg-[#FFC6FF]", "bg-[#FFE17D]"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    slot: "SLOT 02",
    icon: Terminal,
    headerBg: "bg-[#D8FF45] text-[#111111]",
    items: ["Next.js", "TypeScript", "TailwindCSS", "React", "JavaScript", "HTML/CSS"],
    badgeColors: ["bg-[#D8FF45]", "bg-[#A0C4FF]", "bg-[#FFADAD]", "bg-[#FFE17D]", "bg-[#FFC6FF]", "bg-[#B7E4C7]"],
  },
  {
    id: "database",
    title: "Database Relational",
    slot: "SLOT 03",
    icon: Database,
    headerBg: "bg-[#FFADAD] text-[#111111]",
    items: ["MySQL", "Supabase", "PostgreSQL"],
    badgeColors: ["bg-[#FFE17D]", "bg-[#D8FF45]", "bg-[#A0C4FF]"],
  },
  {
    id: "networking",
    title: "Network Infrastructure",
    slot: "SLOT 04",
    icon: Network,
    headerBg: "bg-[#A0C4FF] text-[#111111]",
    items: ["Mikrotik", "Linux Server", "Basic Networking", "Cisco"],
    badgeColors: ["bg-[#B7E4C7]", "bg-[#FFC6FF]", "bg-[#FFE17D]", "bg-[#D8FF45]"],
  },
  {
    id: "security",
    title: "Cyber Defence",
    slot: "SLOT 05",
    icon: Shield,
    headerBg: "bg-[#FFC6FF] text-[#111111]",
    items: ["CTF (Basic)", "Security Fundamentals"],
    badgeColors: ["bg-[#FFADAD]", "bg-[#A0C4FF]"],
  },
  {
    id: "tools",
    title: "Developer Equipment",
    slot: "SLOT 06",
    icon: Settings,
    headerBg: "bg-[#B7E4C7] text-[#111111]",
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Linux (Ubuntu)"],
    badgeColors: ["bg-[#FFE17D]", "bg-[#D8FF45]", "bg-[#A0C4FF]", "bg-[#FFC6FF]", "bg-[#FFADAD]", "bg-[#B7E4C7]"],
  },
];

export function Skills() {
  return (
    <div className="w-full space-y-12 text-left">
      {/* Editorial Header */}
      <div className="space-y-2 relative">
        <div className="inline-block px-3.5 py-1 bg-[#D8FF45] text-[#111111] text-xs font-mono font-black uppercase border border-[#111111] shadow-sm">
          ITEM INVENTORY // 02
        </div>
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-grotesk font-black text-[#111111] tracking-tight uppercase">
            EQUIPPED TECH STACK
          </h2>
          <span className="font-handwriting text-2xl text-[#111111] font-bold -rotate-1 bg-[#FFC6FF] px-3 py-0.5 border border-[#111111] shadow-sm hidden sm:inline-block">
            * sticker stamps & tools
          </span>
        </div>
        <UnderlineScribble className="w-48 h-4 text-[#111111]" />
      </div>

      {/* Grid of Breathable Editorial Inventory Slots (Unboxed Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              onMouseEnter={() => playRetroBeep(600, 0.04)}
              className="bg-transparent space-y-4 text-left transition-all relative group"
            >
              {/* Header Slot Bar */}
              <div className="flex items-center justify-between border-b border-[#111111]/20 pb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 ${category.headerBg} border border-[#111111] shadow-sm`}>
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xs font-mono font-black text-[#111111] uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                <span className="flex items-center gap-1 font-mono font-bold text-[10px] text-[#111111]/60">
                  <Box className="w-3 h-3 stroke-[2.5]" />
                  {category.slot}
                </span>
              </div>

              {/* Graphic Sticker Stamps Cluster */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {category.items.map((skill, sIdx) => {
                  const badgeColor = category.badgeColors[sIdx % category.badgeColors.length];
                  const rotations = ["-rotate-1", "rotate-2", "-rotate-2", "rotate-1"];
                  const rotClass = rotations[sIdx % rotations.length];
                  
                  return (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-none ${badgeColor} border border-[#111111] text-xs font-mono font-black text-[#111111] shadow-[2px_2px_0px_#111111] hover:scale-105 transition-transform cursor-default select-none ${rotClass}`}
                    >
                      [ {skill} ]
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}