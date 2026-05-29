"use client";

import { motion } from "framer-motion";
import { User, Award, Code2 } from "lucide-react";
import Image from "next/image";

export function About() {
  const stats = [
    { label: "Completed Projects", value: "6+", icon: Code2 },
    { label: "Years Learning/Exp", value: "2y+", icon: Award },
  ];

  return (
    <div className="w-full space-y-12">
      {/* Title */}
      <div className="space-y-2">
        <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">Biography</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-accent-secondary">About Me</h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Profile Photo (5 cols) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[320px] rounded-3xl overflow-hidden border border-khaki bg-[#FAF8F5] p-3 shadow-sm group">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images.JPG"
                alt="Yusuf Regan Manggala Ghalib"
                fill
                sizes="(max-w-768px) 100vw, 30vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            {/* Absolute overlay badge */}
            <div className="absolute top-6 left-6 bg-secondary/80 border border-khaki/30 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] text-text-primary font-mono backdrop-blur-sm">
              <User className="w-3.5 h-3.5 text-accent" />
              <span>Yusuf Regan</span>
            </div>
          </div>
        </div>

        {/* Right Side: Description & Stats (7 cols) */}
        <div className="md:col-span-7 space-y-6 text-left">
          <p className="text-lg text-text-primary leading-relaxed font-sans">
            I am a student at a 4-year vocational high school specializing in Information Technology, where I focus on backend server designs, web interfaces, and embedding hardware systems (IoT).
          </p>
          <p className="text-base text-text-secondary leading-relaxed font-sans">
            I enjoy building clean, automated digital systems. Every project presents a new learning environment, from optimizing database queries to engineering real-time wireless controllers.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 max-w-md">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-secondary border border-khaki/30 p-4 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-colors shadow-sm"
                >
                  <Icon className="w-5 h-5 text-accent mb-3" />
                  <div>
                    <div className="text-2xl font-bold text-accent-secondary font-mono tracking-tight">{stat.value}</div>
                    <div className="text-xs text-text-secondary font-mono pt-0.5">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}