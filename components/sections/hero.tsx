"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Instagram, MapPin, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/animations/typewriter";
import { useEffect, useState } from "react";
import { playRetroPowerup, playRetroSelect } from "@/lib/retro-audio";
import { CurvedArrow, ScribbleCircle, SparkleStar, UnderlineScribble } from "@/components/ui/handwritten-doodles";
import { HeroPhotoCollage } from "@/components/sections/hero-photo-collage";

export function Hero() {
  const [time, setTime] = useState("");

  const typewriterTexts = [
    "IT Student @ SMK TI BAZMA",
    "Full Stack Web Developer",
    "IoT & Embedded Hardware",
    "Network Infrastructure",
  ];

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePressStart = (e: React.MouseEvent) => {
    e.preventDefault();
    playRetroPowerup();
    const elem = document.querySelector("#projects");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    playRetroSelect();
    const link = document.createElement("a");
    link.href = "/CV-Regan.pdf";
    link.download = "CV-Regan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    playRetroSelect();
    const elem = document.querySelector("#contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full text-left space-y-10 py-4 relative">
      
      {/* Clean Unboxed System Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold text-[#111111]">

        {/* Location & Real-Time Clock */}
        <div className="flex items-center gap-3 bg-white border border-[#111111] px-3.5 py-1 font-mono font-bold shadow-sm">
          <span className="flex items-center gap-1.5 text-[#111111]">
            <MapPin className="w-3.5 h-3.5 text-[#FFADAD] stroke-[2.5]" />
            BOGOR, ID
          </span>
          <span className="w-0.5 h-3.5 bg-[#111111]/30" />
          <span className="flex items-center gap-1.5 text-[#111111]">
            <Clock className="w-3.5 h-3.5 text-[#111111] stroke-[2.5]" />
            {time ? time : "00:00:00"} WIB
          </span>
        </div>
      </div>

      {/* Main Breathable Editorial Hero Layout (No Heavy Outer Box Border) */}
      <div className="space-y-12 relative">
        
        {/* Background Graphic Doodle Accents */}
        <div className="absolute -top-6 right-8 opacity-15 pointer-events-none hidden lg:block">
          <ScribbleCircle className="w-36 h-36 text-[#111111]" />
        </div>

        {/* Stage Tag & Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* Left / Top Editorial Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-8 z-10">
            
            <div className="flex items-center gap-3">
              <div className="inline-block px-3.5 py-1 bg-[#FFC6FF] text-[#111111] text-xs font-mono font-black tracking-widest uppercase border border-[#111111] shadow-sm">
                EDITORIAL SPREAD
              </div>
              <div className="hidden sm:inline-block bg-[#D8FF45] text-[#111111] border border-[#111111] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-wider -rotate-1 shadow-sm">
                ★ STATUS: READY
              </div>
            </div>

            {/* Huge Headline Composition */}
            <div className="space-y-3 relative">
              <p className="text-xl sm:text-2xl font-grotesk font-black text-[#111111] tracking-widest uppercase flex items-center gap-2">
                HELLO, I&apos;M
              </p>
              
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-grotesk font-black text-[#111111] tracking-tighter leading-[0.88] uppercase relative">
                YUSUF REGAN <br />
                <span className="bg-[#D8FF45] text-[#111111] px-3 py-1 inline-block mt-2 border-[2px] border-[#111111] shadow-[4px_4px_0px_#111111] -rotate-1 relative">
                  MANGGALA GHALIB
                  <SparkleStar className="absolute -top-4 -right-4 w-7 h-7 text-[#FFADAD]" />
                </span>
              </h1>
              
              <div className="pt-2">
                <UnderlineScribble className="w-52 h-5 text-[#111111]" />
              </div>
            </div>

            {/* Technical Typewriter Subtitle Box */}
            <div className="text-xs sm:text-sm font-mono font-bold text-[#FAF7F2] flex items-center gap-2.5 min-h-12 bg-[#111111] border border-[#111111] px-4 py-3 shadow-[3px_3px_0px_#D8FF45]">
              <Sparkles className="w-4 h-4 text-[#D8FF45] shrink-0 stroke-[2.5]" />
              <Typewriter texts={typewriterTexts} />
            </div>

            {/* Bio Description Block with Editorial Left Accent Line (No Heavy Box Border) */}
            <div className="p-4 sm:p-6 bg-transparent border-l-[6px] border-l-[#A0C4FF] space-y-2 relative">
              <p className="text-base sm:text-lg text-[#111111] leading-relaxed font-sans font-semibold">
                I am an IT student specializing in modern web applications, robust backend architectures, network infrastructure, and smart IoT hardware solutions. Driven by automation and scalable software design.
              </p>
              <div className="inline-block font-handwriting text-lg text-[#111111] bg-[#FFE17D] px-2 border border-[#111111] shadow-sm rotate-1">
                * creative & technical
              </div>
            </div>
          </div>

          {/* Right Editorial Photo Collage UI (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            {/* Handwritten Arrow pointing to photo */}
            <div className="absolute -top-10 -left-6 z-30 hidden sm:block pointer-events-none">
              <CurvedArrow className="w-20 h-14 text-[#111111]" />
              <span className="font-handwriting text-xl font-bold text-[#111111] block -mt-2 rotate-[-6deg]">
                That&apos;s me!
              </span>
            </div>

            {/* Scrapbook UI Photo Collage */}
            <HeroPhotoCollage />
          </div>

        </div>

        {/* Action Controls & Social Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#111111]/20">
          <div className="flex flex-wrap gap-3.5">
            <Button
              href="#projects"
              onClick={handlePressStart}
              variant="lime"
              size="md"
            >
              PRESS START <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Button>

            <Button
              href="/CV-Regan.pdf"
              download="CV-Regan.pdf"
              onClick={handleDownloadCV}
              variant="secondary"
              size="md"
            >
              <Download className="w-4 h-4 stroke-[3]" /> CV.PDF
            </Button>

            <Button
              href="#contact"
              onClick={handleContactClick}
              variant="pink"
              size="md"
            >
              <Mail className="w-4 h-4 stroke-[3]" /> CONTACT
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/Neraa6", label: "GitHub" },
              { icon: Instagram, href: "https://www.instagram.com/yrgnn/", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-[#111111] shadow-[2.5px_2.5px_0px_#111111] text-[#111111] hover:bg-[#A0C4FF] transition-all interactive cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5"
                aria-label={label}
              >
                <Icon className="w-4 h-4 stroke-[2.5]" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
