"use client";

import { Github, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playRetroBeep } from "@/lib/retro-audio";
import { UnderlineScribble } from "@/components/ui/handwritten-doodles";

const projects = [
  {
    id: "todo-app",
    stage: "STAGE 01",
    stageColor: "bg-[#FFE17D] text-[#111111]",
    title: "Todo Task App",
    description: "A sleek task management app with real-time updates, drag and drop UI built using Next.js and TailwindCSS.",
    tech: ["Next.js", "TailwindCSS"],
    features: ["Real-time Sync", "Drag & Drop UI"],
    github: "https://github.com/Neraa6/todo-list",
    demo: "#",
    annotation: "★ drag & drop real-time",
  },
  {
    id: "ecommerce",
    stage: "STAGE 02",
    stageColor: "bg-[#D8FF45] text-[#111111]",
    title: "Mini E-Commerce",
    description: "A compact e-commerce platform with product management, shopping cart, and a clean UI built using TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    features: ["User Authentication", "Product Management"],
    github: "https://github.com/Neraa6",
    demo: "#",
    annotation: "★ cart & auth system",
  },
  {
    id: "catering",
    stage: "STAGE 03",
    stageColor: "bg-[#FFADAD] text-[#111111]",
    title: "Catering Online Platform",
    description: "Modern food ordering platform featuring direct cart checkout, order trackers, multi-merchant analytics, and Supabase integration.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    features: ["Cart & Checkout", "Dashboard Analytics", "Database Sync"],
    github: "https://github.com/Neraa6/catering",
    demo: "#",
    annotation: "★ full stack food platform",
  },
  {
    id: "iot-dashboard",
    stage: "STAGE 04",
    stageColor: "bg-[#A0C4FF] text-[#111111]",
    title: "IoT Control Dashboard",
    description: "Interactive dashboard for monitoring and controlling IoT devices, featuring real-time data visualization and automated MQTT alerts.",
    tech: ["Laravel", "MQTT", "shiftr.io"],
    features: ["Real-time Monitoring", "Device Control", "Alert Notifications"],
    github: "https://github.com/Neraa6/iot-dashboard",
    demo: "#",
    annotation: "★ real-time hardware MQTT",
  },
];

export function Projects() {
  return (
    <div className="w-full space-y-12 text-left">
      {/* Editorial Title Header */}
      <div className="space-y-2 relative">
        <div className="inline-block px-3.5 py-1 bg-[#FFC6FF] text-[#111111] text-xs font-mono font-black uppercase border border-[#111111] shadow-sm">
          MISSION LOG // 03
        </div>
        
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-grotesk font-black text-[#111111] tracking-tight uppercase">
            STAGE SELECT
          </h2>
          <span className="font-handwriting text-2xl text-[#111111] font-bold rotate-1 bg-[#FFE17D] px-3 py-0.5 border border-[#111111] shadow-sm hidden sm:inline-block">
            * editorial case studies
          </span>
        </div>
        <UnderlineScribble className="w-44 h-4 text-[#111111]" />
      </div>

      {/* Editorial Case Study Grid (Clean Unboxed Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onMouseEnter={() => playRetroBeep(540, 0.04)}
            className="bg-transparent flex flex-col justify-between text-left gap-6 group relative border-t border-[#111111]/20 pt-6"
          >
            {/* Top Sticker Annotation */}
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-1 ${proj.stageColor} text-[10px] font-mono font-black border border-[#111111] shadow-sm`}>
                {proj.stage}
              </span>
              <span className="font-handwriting text-base font-bold text-[#111111] bg-[#FFF9D2] px-3 py-0.5 border border-[#111111] shadow-sm -rotate-1">
                {proj.annotation}
              </span>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-grotesk font-black text-[#111111] uppercase tracking-tight">
                {proj.title}
              </h3>

              <p className="text-base text-[#111111] leading-relaxed font-sans font-medium">
                {proj.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-none bg-white border border-[#111111] text-[11px] font-mono font-bold text-[#111111] shadow-sm"
                  >
                    [ #{t} ]
                  </span>
                ))}
              </div>

              {/* Bullet Features Paper Block */}
              <ul className="space-y-2 pt-1 bg-white p-3.5 border border-[#111111] shadow-sm">
                {proj.features.map((feat, i) => (
                  <li key={i} className="text-xs font-mono font-bold text-[#111111] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 stroke-[2.5]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-3 pt-2">
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
                  variant="lime"
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