"use client";

import { GraduationCap, Camera, Calendar, Briefcase, Flag } from "lucide-react";
import { playRetroBeep } from "@/lib/retro-audio";

const experiences = [
  {
    checkpoint: "CHECKPOINT 01",
    type: "Education",
    icon: GraduationCap,
    title: "IT Student - Vocational High School",
    organization: "SMK TI BAZMA",
    period: "2023 - Present",
    description: "Specializing in Full Stack Software Development, Database Management, and Networking administration guidelines.",
    chkBg: "bg-[#FFDE00] text-black",
  },
  {
    checkpoint: "CHECKPOINT 02",
    type: "Activity",
    icon: Camera,
    title: "Student Council Multimedia Division Lead",
    organization: "OSIS SMK TI BAZMA",
    period: "2024 - 2025",
    description: "Managed school documentation, brand assets, social media layouts, and multimedia coverages for local campaigns.",
    chkBg: "bg-[#A3E635] text-black",
  },
  {
    checkpoint: "CHECKPOINT 03",
    type: "Internship",
    icon: Briefcase,
    title: "IT Staff Intern",
    organization: "PT Pertamina Geothermal Energy Tbk",
    period: "Agustus 2026 - Present",
    description: "IT support, system maintenance, software testing, and network administration assistant.",
    chkBg: "bg-[#2563EB] text-white",
  },
];

export function Experience() {
  return (
    <div className="w-full space-y-8">
      {/* Title Header */}
      <div className="space-y-2 text-left">
        <div className="inline-block px-3.5 py-1 bg-[#FF5722] text-white text-xs font-grotesk font-black uppercase rounded-md border-2 border-black shadow-[2px_2px_0px_#000]">
          CAMPAIGN LOG
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-black text-black tracking-tight uppercase">
          EXPERIENCE TIMELINE
        </h2>
      </div>

      {/* Spacious Neo-Brutalist Vertical Stepper */}
      <div className="max-w-3xl mx-auto space-y-6 relative pl-10 sm:pl-12 before:absolute before:left-4 sm:before:left-5 before:top-3 before:bottom-3 before:w-1.5 before:bg-black">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => playRetroBeep(500, 0.03)}
              className="relative text-left group"
            >
              {/* Stepper Flag Icon */}
              <div className="absolute -left-10 sm:-left-12 top-2 w-9 h-9 rounded-xl bg-[#FFDE00] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <Flag className="w-4 h-4 stroke-[2.5]" />
              </div>

              {/* Step Content Card */}
              <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-7 rounded-2xl space-y-3.5 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0px_0px_#000000] transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md border-2 border-black text-[10px] font-mono font-extrabold uppercase shadow-[2px_2px_0px_#000] ${exp.chkBg}`}>
                      {exp.checkpoint}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FAF7F2] border-2 border-black text-[10px] font-mono font-extrabold text-black shadow-[2px_2px_0px_#000]">
                      {exp.type}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-extrabold text-black flex items-center gap-1.5 bg-[#FFDE00] px-2.5 py-0.5 border border-black rounded shadow-[2px_2px_0px_#000]">
                    <Calendar className="w-3.5 h-3.5 text-black" />
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-grotesk font-black text-black tracking-tight uppercase flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#FF5722] shrink-0 stroke-[2.5]" />
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono font-extrabold text-[#2563EB]">
                    📍 {exp.organization}
                  </p>
                </div>

                <p className="text-sm text-zinc-900 leading-relaxed pt-2 border-t border-black/20 font-sans font-medium">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}