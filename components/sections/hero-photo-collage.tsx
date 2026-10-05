"use client";

import React from "react";
import Image from "next/image";
import { 
  Camera, 
  Infinity, 
  LayoutGrid, 
  Layers, 
  Crosshair, 
  Clock, 
  Flashlight, 
  QrCode, 
  MoreHorizontal,
  Compass,
  Mail,
  Calendar,
  Code2,
  Trash2
} from "lucide-react";

export function HeroPhotoCollage() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto py-2 select-none">
      
      {/* Outer Editorial Scrapbook Canvas Container (No Heavy Box Border) */}
      <div className="relative w-full aspect-[4/5] bg-transparent p-2 overflow-hidden rounded-none">
        
        {/* Layer 0: Map Background Grid & Giant Background Text */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        
        {/* Giant Layered Background Typography */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <span 
            className="text-8xl sm:text-9xl font-grotesk font-black text-transparent stroke-text uppercase tracking-tighter opacity-15 leading-none"
            style={{ WebkitTextStroke: "2.5px #111111" }}
          >
            REGAN
          </span>
        </div>

        {/* Top Header Pill: "My Account > Posts > Today" */}
        <div className="relative z-30 w-full bg-white border border-[#111111] shadow-[2.5px_2.5px_0px_#111111] px-3 py-1.5 flex items-center justify-between text-[11px] font-mono font-bold text-[#111111]">
          <div className="flex items-center gap-1.5">
            <LayoutGrid className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>My Account</span>
            <span className="text-[#111111]/40">&gt;</span>
            <span>Posts</span>
            <span className="text-[#111111]/40">&gt;</span>
            <span className="bg-[#D8FF45] px-1.5 py-0.5 border border-[#111111]">Today</span>
          </div>
          <MoreHorizontal className="w-4 h-4 stroke-[2.5]" />
        </div>

        {/* Top Right: Polaroid Printer Slot & Emitted Photo */}
        <div className="absolute top-12 right-4 z-20 w-36 flex flex-col items-center">
          {/* Slot Machine Header */}
          <div className="w-full bg-[#111111] text-white p-1 rounded-t-sm border border-[#111111] flex justify-center items-center shadow-sm">
            <div className="w-16 h-1 bg-[#FAF7F2] rounded-full" />
          </div>
          {/* Emitted Polaroid Frame */}
          <div className="w-28 bg-white border border-[#111111] shadow-[3px_3px_0px_#111111] p-1.5 pb-5 -mt-0.5 rotate-3 hover:rotate-0 transition-transform">
            <div className="relative aspect-square w-full border border-[#111111] overflow-hidden bg-gray-100">
              <Image
                src="/images.jpg"
                alt="Yusuf Regan Polaroid"
                fill
                sizes="120px"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Center Main Subject Photo Container */}
        <div className="relative z-10 w-[85%] mx-auto mt-4 aspect-[3/4] border-[2px] border-[#111111] bg-white shadow-[4px_4px_0px_#111111] overflow-hidden group">
          <Image
            src="/IMG-20260825-WA0121.jpg"
            alt="Yusuf Regan Main"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top scale-125 group-hover:scale-135 transition-transform duration-500"
            priority
          />

          {/* Green Camera Viewfinder Focus Box */}
          <div className="absolute top-[8%] left-[20%] w-[55%] h-[40%] border-[2px] border-[#D8FF45] z-20 pointer-events-none shadow-[0_0_0_9999px_rgba(0,0,0,0.05)]">
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#111111]" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#111111]" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#111111]" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#111111]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 flex items-center justify-center">
              <div className="w-full h-[1px] bg-[#D8FF45]" />
              <div className="h-full w-[1px] bg-[#D8FF45] absolute" />
            </div>
          </div>
        </div>

        {/* Floating Phone Frame Overlay */}
        <div 
          className="absolute inset-x-4 top-16 bottom-16 z-20 pointer-events-none border-[3.5px] border-white rounded-[32px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex flex-col justify-between p-3"
          style={{ transform: "rotate(-8deg)" }}
        >
          <div className="w-20 h-3.5 bg-black rounded-full mx-auto shadow-inner" />

          {/* Floating Camera UI Sidebar Tools */}
          <div className="absolute right-3 top-16 flex flex-col gap-3.5 bg-black/60 backdrop-blur-md p-2 rounded-full text-white text-[9px] font-mono font-bold shadow-lg">
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-serif font-bold text-xs">Aa</span>
              <span className="scale-75">Create</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Infinity className="w-3.5 h-3.5" />
              <span className="scale-75">Boomerang</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="scale-75">Layout</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Layers className="w-3.5 h-3.5" />
              <span className="scale-75">Capture</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Crosshair className="w-3.5 h-3.5" />
              <span className="scale-75">Level</span>
            </div>
          </div>

          {/* Floating Control Icons */}
          <div className="absolute left-3 top-24 flex flex-col gap-3 bg-black/60 backdrop-blur-md p-2 rounded-2xl text-white">
            <Flashlight className="w-3.5 h-3.5" />
            <Clock className="w-3.5 h-3.5" />
            <Camera className="w-3.5 h-3.5" />
            <QrCode className="w-3.5 h-3.5" />
          </div>

          <div className="w-28 h-1 bg-white/80 rounded-full mx-auto" />
        </div>

        {/* Bottom Left: Sub-Photo Card with Speech Bubble */}
        <div className="absolute bottom-6 left-3 z-30 w-32 bg-white border border-[#111111] shadow-[4px_4px_0px_#111111] p-1.5 space-y-1 rotate-[-3deg] hover:rotate-0 transition-transform">
          <div className="absolute -top-3 -right-2 bg-white border border-[#111111] px-2 py-0.5 rounded-full text-[10px] shadow-sm flex items-center gap-1 font-mono font-bold">
            <span className="w-1.5 h-1.5 bg-[#111111] rounded-full animate-ping" />
            <span>...</span>
          </div>

          <div className="relative aspect-square w-full border border-[#111111] overflow-hidden bg-gray-100">
            <Image
              src="/IMG-20260825-WA0061.jpg"
              alt="Yusuf Regan Sub photo"
              fill
              sizes="120px"
              className="object-cover object-center"
            />
          </div>

          <div className="bg-[#FFADAD] text-[#111111] text-[9px] font-mono font-black px-1.5 py-0.5 border border-[#111111] text-center uppercase tracking-wider">
            Yusuf Regan
          </div>
        </div>

        {/* Floating Stat Badges */}
        <div className="absolute bottom-12 right-4 z-30 flex items-center gap-2">
          <div className="bg-[#D8FF45] text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] px-2.5 py-0.5 font-mono text-xs font-black rounded-full">
            3012
          </div>
          <div className="bg-[#A0C4FF] text-[#111111] border border-[#111111] shadow-[2px_2px_0px_#111111] px-2.5 py-0.5 font-mono text-xs font-black rounded-full">
            143 / 400
          </div>
        </div>

        {/* Bottom Floating App Dock Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 bg-white/90 backdrop-blur-md border border-[#111111] shadow-[2.5px_2.5px_0px_#111111] px-3 py-1 flex items-center gap-2.5 text-[#111111] rounded-none">
          <div className="p-1 bg-[#A0C4FF] border border-[#111111] shadow-sm">
            <Compass className="w-3.5 h-3.5" />
          </div>
          <div className="p-1 bg-[#FFE17D] border border-[#111111] shadow-sm">
            <Mail className="w-3.5 h-3.5" />
          </div>
          <div className="p-1 bg-[#D8FF45] border border-[#111111] shadow-sm">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div className="p-1 bg-[#FFADAD] border border-[#111111] shadow-sm">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div className="p-1 bg-[#FFC6FF] border border-[#111111] shadow-sm">
            <Trash2 className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
}
