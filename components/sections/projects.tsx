"use client";

import { Github, Play, Star, Terminal, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playRetroBeep, playRetroSelect } from "@/lib/retro-audio";

const projects = [
  {
    id: "todo-app",
    stage: "STAGE 01",
    title: "Todo Task App",
    description: "A sleek task management app with real-time updates, drag and drop UI built using Next.js and TailwindCSS.",
    tech: ["Next.js", "TailwindCSS"],
    features: ["Real-time Sync", "Drag & Drop UI"],
    github: "https://github.com/Neraa6/todo-list",
    demo: "#",
    stageBg: "bg-[#FF5722]",
  },
  {
    id: "ecommerce",
    stage: "STAGE 02",
    title: "Mini E-Commerce",
    description: "A compact e-commerce platform with product management, shopping cart, and a clean UI built using TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    features: ["User Authentication", "Product Management"],
    github: "https://github.com/Neraa6",
    demo: "#",
    stageBg: "bg-[#2563EB]",
  },
  {
    id: "catering",
    stage: "STAGE 03",
    title: "Catering Online Platform",
    description: "Modern food ordering platform featuring direct cart checkout, order trackers, multi-merchant analytics, and Supabase integration.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    features: ["Cart & Checkout", "Dashboard Analytics", "Database Sync"],
    github: "https://github.com/Neraa6/catering",
    demo: "#",
    stageBg: "bg-[#FFDE00] text-black",
  },
  {
    id: "iot-dashboard",
    stage: "STAGE 04",
    title: "IoT Control Dashboard",
    description: "Interactive dashboard for monitoring and controlling IoT devices, featuring real-time data visualization and automated MQTT alerts.",
    tech: ["Laravel", "MQTT", "shiftr.io"],
    features: ["Real-time Monitoring", "Device Control", "Alert Notifications"],
    github: "https://github.com/Neraa6/iot-dashboard",
    demo: "#",
    stageBg: "bg-[#A3E635] text-black",
  },
];

export function Projects() {
  return (
    <div className="w-full space-y-8">
      {/* Title Header */}
      <div className="space-y-2 text-left">
        <div className="inline-block px-3.5 py-1 bg-[#2563EB] text-white text-xs font-grotesk font-black uppercase rounded-md border-2 border-black shadow-[2px_2px_0px_#000]">
          MISSION LOG
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-black text-black tracking-tight uppercase">
          STAGE SELECT
        </h2>
      </div>

      {/* Grid of Stage Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onMouseEnter={() => playRetroBeep(540, 0.04)}
            className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000000] transition-all text-left gap-5 group relative"
          >
            {/* Top Side: Header & Stage */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b-2 border-black pb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 ${proj.stageBg || "bg-[#FF5722] text-white"} text-[10px] font-mono font-extrabold rounded-md border-2 border-black shadow-[2px_2px_0px_#000]`}>
                    {proj.stage}
                  </span>
                  <h3 className="text-base sm:text-lg font-grotesk font-black text-black uppercase">
                    {proj.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-zinc-800 leading-relaxed font-sans font-medium">
                {proj.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-[#FFDE00] border-2 border-black text-[11px] font-mono font-extrabold text-black shadow-[2px_2px_0px_#000]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Bullet features */}
              <ul className="space-y-1.5 pt-1">
                {proj.features.map((feat, i) => (
                  <li key={i} className="text-xs font-mono font-bold text-black flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] shrink-0 fill-black" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-3 pt-3 border-t-2 border-black/20">
              <Button
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                className="flex-1"
              >
                <Github className="w-4 h-4 stroke-[2.5]" /> SOURCE
              </Button>

              {proj.demo !== "#" && (
                <Button
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="coral"
                  size="sm"
                  className="flex-1"
                >
                  <Play className="w-4 h-4 stroke-[2.5]" /> LIVE DEMO
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}