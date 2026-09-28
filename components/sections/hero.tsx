"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Instagram, MapPin, Clock, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/animations/typewriter";
import { useEffect, useState } from "react";
import { playRetroCoin, playRetroPowerup, playRetroSelect } from "@/lib/retro-audio";

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
    <div className="w-full text-left space-y-8 py-4">
      
      {/* Neo-Brutalist HUD Stats Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] p-4 rounded-xl text-xs font-mono font-bold text-black">

        {/* Location & Clock */}
        <div className="flex items-center gap-3 bg-[#FAF7F2] border-2 border-black px-3 py-1 rounded-lg shadow-[2px_2px_0px_#000]">
          <span className="flex items-center gap-1 text-black font-extrabold">
            <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
            BOGOR, ID
          </span>
          <span className="w-0.5 h-3 bg-black" />
          <span className="flex items-center gap-1 text-black font-mono font-bold">
            <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
            {time ? time : "00:00:00"} WIB
          </span>
        </div>
      </div>

      {/* Hero Content Frame */}
      <div className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000000] p-6 sm:p-10 rounded-2xl space-y-6 relative overflow-hidden">
        
        {/* Decorative Neo Geometry Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFDE00] border-l-[3px] border-b-[3px] border-black rounded-bl-3xl -z-0 opacity-20 pointer-events-none hidden sm:block" />
        <div className="absolute bottom-4 right-4 text-xs font-mono font-black text-black/20 select-none hidden sm:block">
          [NEO_BRUTAL_UI_V2.0]
        </div>

        {/* Stage & Header Badges */}
        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-[#FF5722] text-white border-2 border-black text-xs font-grotesk font-black tracking-widest uppercase rounded-md shadow-[2px_2px_0px_#000]">
              STAGE 01
            </span>
            <span className="px-3 py-1 bg-[#2563EB] text-white border-2 border-black text-xs font-grotesk font-black tracking-wider uppercase rounded-md shadow-[2px_2px_0px_#000]">
              LVL 99 DEVELOPER
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-grotesk font-black text-black tracking-tight leading-[0.95] uppercase">
            YUSUF REGAN <br />
            <span className="inline-block bg-[#FFDE00] text-black px-2 py-0.5 border-[3px] border-black shadow-[4px_4px_0px_#000] mt-1 transform -rotate-1">
              MANGGALA GHALIB
            </span>
          </h1>
        </div>

        {/* Animated Typewriter Subtitle */}
        <div className="text-sm sm:text-lg font-mono font-black text-black flex items-center gap-2 min-h-10 bg-[#FAF7F2] border-2 border-black px-4 py-1.5 rounded-lg max-w-xl shadow-[3px_3px_0px_#000] relative z-10">
          <Sparkles className="w-4 h-4 text-[#FF5722] shrink-0 animate-spin" />
          <Typewriter texts={typewriterTexts} />
        </div>

        {/* Bio Text */}
        <p className="text-base sm:text-lg text-zinc-900 max-w-2xl leading-relaxed font-sans font-medium relative z-10">
          I am an IT student specializing in modern web applications, robust backend architectures, network infrastructure, and smart IoT hardware solutions. Driven by automation and scalable software design.
        </p>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t-[3px] border-black relative z-10">
          <div className="flex flex-wrap gap-3">
            <Button
              href="#projects"
              onClick={handlePressStart}
              variant="primary"
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
              variant="teal"
              size="md"
            >
              <Mail className="w-4 h-4 stroke-[3]" /> CONTACT
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/Neraa6", label: "GitHub" },
              { icon: Instagram, href: "https://www.instagram.com/yrgnn/", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-lg text-black hover:bg-[#FFDE00] transition-all interactive cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-4 h-4 stroke-[2.5]" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
