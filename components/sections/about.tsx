"use client";

import { User, Award, Code2, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function About() {
  const stats = [
    { label: "COMPLETED MISSIONS", value: "4+ PROJECTS", icon: Code2, bg: "bg-[#FFDE00]" },
    { label: "EXP YEARS", value: "2+ YEARS", icon: Award, bg: "bg-[#A3E635]" },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Title Header */}
      <div className="space-y-2 text-left">
        <div className="inline-block px-3.5 py-1 bg-[#2563EB] text-white text-xs font-grotesk font-black uppercase rounded-md border-2 border-black shadow-[2px_2px_0px_#000]">
          CHARACTER DOSSIER
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-black text-black tracking-tight uppercase">
          PLAYER PROFILE
        </h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Profile Photo Frame */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[320px] rounded-2xl overflow-hidden border-[3px] border-black shadow-[8px_8px_0px_0px_#000000] bg-white p-3 group">
            
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#FFDE00] border-b-2 border-black" />

            {/* Image Container */}
            <div className="relative w-full h-full border-2 border-black rounded-xl overflow-hidden">
              <Image
                src="/images.JPG"
                alt="Yusuf Regan Manggala Ghalib"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Neo Character Name Tag */}
            <div className="absolute bottom-5 left-5 right-5 bg-black text-white px-3.5 py-2 rounded-xl border-2 border-black flex items-center justify-between font-grotesk text-xs shadow-[3px_3px_0px_#FFDE00]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#FFDE00]" />
                <span className="font-black tracking-wider">REGAN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Dialogue & Quick Stats (7 cols) */}
        <div className="md:col-span-7 space-y-6 text-left">
          
          {/* Dialogue Box */}
          <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-7 rounded-2xl space-y-4">
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <span className="font-grotesk text-xs text-black font-black uppercase flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#FF5722]" />
                [ DIALOGUE BOX ]
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#FAF7F2] border border-black rounded">ID: YUSUF_REGAN</span>
            </div>
            
            <p className="text-base text-black leading-relaxed font-sans font-medium">
              I am a student at a 4-year vocational high school specializing in Information Technology, where I focus on backend server designs, web interfaces, and embedding hardware systems (IoT).
            </p>
            <p className="text-sm text-zinc-800 leading-relaxed font-sans">
              I enjoy building clean, automated digital systems. Every project presents a new learning environment, from optimizing database queries to engineering real-time wireless controllers.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] p-5 rounded-2xl flex flex-col justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] transition-all text-left"
                >
                  <div className={`w-9 h-9 ${stat.bg} border-2 border-black rounded-lg flex items-center justify-center mb-3 shadow-[2px_2px_0px_#000]`}>
                    <Icon className="w-5 h-5 text-black stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-2xl font-grotesk font-black text-black tracking-tight">{stat.value}</div>
                    <div className="text-xs font-mono font-extrabold text-zinc-700 pt-1 uppercase">{stat.label}</div>
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