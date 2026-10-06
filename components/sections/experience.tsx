"use client";

import { GraduationCap, Camera, Calendar, Briefcase, Flag } from "lucide-react";
import { playRetroBeep } from "@/lib/retro-audio";
import { UnderlineScribble } from "@/components/ui/handwritten-doodles";

const experiences = [
  {
    checkpoint: "CHECKPOINT 01",
    checkpointColor: "bg-[#FFADAD] text-[#111111]",
    flagColor: "bg-[#FFADAD] text-[#111111]",
    type: "Internship",
    icon: Briefcase,
    title: "IT Staff Intern",
    organization: "PT Pertamina Geothermal Energy Tbk",
    period: "Agustus 2026 - Present",
    description: "Prepared and annotated image datasets to support AI model training, focusing on accurate and consistent data labeling.",
    annotation: "★ enterprise IT experience",
  },
  {
    checkpoint: "CHECKPOINT 02",
    checkpointColor: "bg-[#D8FF45] text-[#111111]",
    flagColor: "bg-[#D8FF45] text-[#111111]",
    type: "Activity",
    icon: Camera,
    title: "Student Council Multimedia Division Lead",
    organization: "OSIS SMK TI BAZMA",
    period: "2024 - 2025",
    description: "Managed school documentation, brand assets, social media layouts, and multimedia coverages for local campaigns.",
    annotation: "★ leadership & design",
  },
  {
    checkpoint: "CHECKPOINT 03",
    checkpointColor: "bg-[#FFE17D] text-[#111111]",
    flagColor: "bg-[#FFE17D] text-[#111111]",
    type: "Education",
    icon: GraduationCap,
    title: "IT Student - Vocational High School",
    organization: "SMK TI BAZMA",
    period: "2023 - Present",
    description: "Specializing in Full Stack Software Development, Database Management, and Networking administration guidelines.",
    annotation: "★ vocational IT foundation",
  },
 
];

export function Experience() {
  return (
    <div className="w-full space-y-12 text-left">
      {/* Editorial Title Header */}
      <div className="space-y-2 relative">
        <div className="inline-block px-3.5 py-1 bg-[#A0C4FF] text-[#111111] text-xs font-mono font-black uppercase border border-[#111111] shadow-sm">
          CAMPAIGN LOG // 04
        </div>
        
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-grotesk font-black text-[#111111] tracking-tight uppercase">
            EXPERIENCE TIMELINE
          </h2>
          <span className="font-handwriting text-2xl text-[#111111] font-bold -rotate-1 bg-[#B7E4C7] px-3 py-0.5 border border-[#111111] shadow-sm hidden sm:inline-block">
            * editorial chronology
          </span>
        </div>
        <UnderlineScribble className="w-52 h-4 text-[#111111]" />
      </div>

      {/* Editorial Magazine Timeline Layout (Clean Unboxed Stepper) */}
      <div className="max-w-4xl mx-auto space-y-12 relative pl-8 sm:pl-16 before:absolute before:left-3 sm:before:left-7 before:top-4 before:bottom-4 before:w-1.5 before:bg-[#111111]">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => playRetroBeep(500, 0.03)}
              className="relative text-left group"
            >
              {/* Stepper Flag Icon */}
              <div className={`absolute -left-8 sm:-left-16 top-1 w-9 h-9 sm:w-11 sm:h-11 ${exp.flagColor} border border-[#111111] shadow-sm flex items-center justify-center z-10`}>
                <Flag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>

              {/* Step Content Area (Unboxed) */}
              <div className="bg-transparent border-t border-[#111111]/20 pt-4 space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-1 ${exp.checkpointColor} border border-[#111111] text-[10px] font-mono font-black uppercase shadow-sm`}>
                      {exp.checkpoint}
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-[#111111] text-[10px] font-mono font-bold text-[#111111] shadow-sm">
                      {exp.type}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#111111] flex items-center gap-1.5 bg-[#FFE17D] px-3 py-1 border border-[#111111] shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-[#111111] stroke-[2.5]" />
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-3xl font-grotesk font-black text-[#111111] tracking-tight uppercase flex items-center gap-2.5">
                    <Icon className="w-5 h-5 text-[#111111] shrink-0 stroke-[2.5]" />
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-mono font-black text-[#111111] bg-white px-2.5 py-1 inline-block border border-[#111111] shadow-sm">
                      📍 {exp.organization}
                    </p>
                    <span className="font-handwriting text-base font-bold text-[#111111] bg-[#FFF9D2] px-2 py-0.5 border border-[#111111] shadow-sm -rotate-1 hidden sm:inline-block">
                      {exp.annotation}
                    </span>
                  </div>
                </div>

                <p className="text-base text-[#111111] leading-relaxed font-sans font-medium">
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