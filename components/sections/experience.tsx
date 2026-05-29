"use client";

import { GraduationCap, Camera, Calendar } from "lucide-react";

const experiences = [
  {
    type: "Education",
    icon: GraduationCap,
    title: "IT Student - Vocational High School",
    organization: "SMK TI BAZMA",
    period: "2023 - 2027",
    description: "Specializing in Full Stack Software Development, Database Management, and Networking administration guidelines.",
  },
  {
    type: "Activity",
    icon: Camera,
    title: "Student Council Multimedia Division Lead",
    organization: "OSIS SMK TI BAZMA",
    period: "2024 - 2025",
    description: "Managed school documentation, brand assets, social media layouts, and multimedia coverages for local campaigns.",
  },
];

export function Experience() {
  return (
    <div className="w-full space-y-12">
      {/* Title */}
      <div className="space-y-2">
        <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">Journey</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-accent-secondary">Education & Activities</h2>
      </div>

      {/* Spacious Vertical Stepper */}
      <div className="max-w-3xl mx-auto space-y-8 relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-khaki/40">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <div key={idx} className="relative group/step text-left space-y-2">
              {/* Stepper Dot */}
              <div className="absolute -left-8 top-1 w-6 h-6 rounded-full border-2 border-background bg-secondary group-hover/step:bg-accent group-hover/step:border-accent/40 transition-all flex items-center justify-center shadow-sm">
                <Icon className="w-3.5 h-3.5 text-accent-secondary group-hover/step:text-white transition-colors" />
              </div>

              {/* Step Content */}
              <div className="bg-secondary border border-khaki/30 p-6 rounded-3xl space-y-3 hover:border-accent/30 transition-colors shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#F6F3EB] border border-khaki/30 text-[9px] font-mono text-accent">
                    {exp.type}
                  </span>
                  <span className="text-[10px] font-mono text-text-secondary flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-accent-secondary tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-medium text-text-primary font-mono">
                    {exp.organization}
                  </p>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed pt-1 border-t border-khaki/10">
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