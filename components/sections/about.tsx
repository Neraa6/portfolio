"use client";

import { User, Award, Code2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { UnderlineScribble } from "@/components/ui/handwritten-doodles";

export function About() {
  const stats = [
    { label: "COMPLETED MISSIONS", value: "4+ PROJECTS", icon: Code2, color: "bg-[#D8FF45]" },
    { label: "EXP YEARS", value: "2+ YEARS", icon: Award, color: "bg-[#FFC6FF]" },
  ];

  return (
    <div className="w-full space-y-12 text-left">
      {/* Editorial Title Header */}
      <div className="space-y-2 relative">
        <div className="inline-block px-3.5 py-1 bg-[#FFE17D] text-[#111111] text-xs font-mono font-black uppercase border border-[#111111] shadow-sm">
          CHARACTER DOSSIER // 01
        </div>
        
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-grotesk font-black text-[#111111] tracking-tight uppercase">
            PLAYER PROFILE
          </h2>
          <span className="font-handwriting text-2xl text-[#111111] font-bold -rotate-2 bg-[#A0C4FF] px-3 py-0.5 border border-[#111111] shadow-sm hidden sm:inline-block">
            * biography & background
          </span>
        </div>
        <UnderlineScribble className="w-40 h-4 text-[#111111]" />
      </div>

      {/* Editorial Magazine Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        
        {/* Left Side: Editorial Taped Profile Frame (5 cols) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center relative">
          
          <div className="absolute -top-7 -right-2 z-20 hidden sm:block">
            <span className="font-handwriting text-xl font-bold text-[#111111] rotate-6 block">
              ★ verified dossier
            </span>
          </div>

          <div className="relative aspect-[3/4] w-full max-w-[320px] rounded-none overflow-hidden border-[2px] border-[#111111] shadow-[6px_6px_0px_#111111] bg-white p-3 group rotate-1 hover:rotate-0 transition-transform duration-300">
            
            {/* Top Tape Sticker */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#FFF9D2] text-[#111111] border border-[#111111] px-4 py-0.5 text-[10px] font-mono font-black uppercase tracking-widest z-10 shadow-sm">
              VERIFIED PROFILE
            </div>

            {/* Raw Image Container */}
            <div className="relative w-full h-full border border-[#111111] overflow-hidden bg-white">
              <Image
                src="/images.JPG"
                alt="Yusuf Regan Manggala Ghalib"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                priority
              />
            </div>

            {/* Character Tag Overlay */}
            <div className="absolute bottom-5 left-5 right-5 bg-[#A0C4FF] text-[#111111] px-3.5 py-2 border border-[#111111] flex items-center justify-between font-mono text-xs font-bold shadow-[2.5px_2.5px_0px_#111111]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#111111] stroke-[2.5]" />
                <span className="font-black tracking-wider">REGAN</span>
              </div>
              <span className="text-[#111111] text-[10px] font-mono font-black bg-white px-2 py-0.5 border border-[#111111]">[ P1 ]</span>
            </div>
          </div>
        </div>

        {/* Right Side: Dialogue & Quick Stats (7 cols) */}
        <div className="md:col-span-7 space-y-8 text-left">
          
          {/* Unboxed Breathable Dialogue Area */}
          <div className="space-y-4 relative">
            <div className="flex items-center justify-between border-b border-[#111111]/20 pb-3">
              <span className="font-mono text-xs text-[#111111] font-black uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#111111] stroke-[2.5]" />
                [ DIALOGUE BOX ]
              </span>
              <span className="text-[10px] font-mono font-black px-2.5 py-0.5 bg-[#D8FF45] text-[#111111] border border-[#111111] shadow-sm">
                ID: YUSUF_REGAN
              </span>
            </div>
            
            <p className="text-base sm:text-lg text-[#111111] leading-relaxed font-sans font-semibold">
              I am a student at a 4-year vocational high school specializing in Information Technology, where I focus on backend server designs, web interfaces, and embedding hardware systems (IoT).
            </p>
            <p className="text-sm text-[#111111]/80 leading-relaxed font-sans font-medium">
              I enjoy building clean, automated digital systems. Every project presents a new learning environment, from optimizing database queries to engineering real-time wireless controllers.
            </p>

            <div className="pt-2 flex justify-end">
              <span className="font-handwriting text-lg text-[#111111] bg-[#FFE17D] px-2.5 py-0.5 border border-[#111111] shadow-sm -rotate-1">
                ~ Yusuf Regan Manggala Ghalib
              </span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-5 pt-2">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#111111] shadow-[3.5px_3.5px_0px_#111111] p-5 rounded-none flex flex-col justify-between hover:bg-[#FFE17D] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 text-left group cursor-default"
                >
                  <div className={`w-9 h-9 ${stat.color} text-[#111111] border border-[#111111] shadow-sm group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center mb-3 transition-colors`}>
                    <Icon className="w-4.5 h-4.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-grotesk font-black tracking-tight text-[#111111]">{stat.value}</div>
                    <div className="text-xs font-mono font-bold pt-1 uppercase text-[#111111]/80">{stat.label}</div>
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