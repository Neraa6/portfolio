"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Instagram, Volume2, VolumeX, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { playRetroBeep, playRetroSelect, toggleAudioMute, isAudioMuted } from "@/lib/retro-audio";

const navLinks = [
  { name: "START", href: "#home" },
  { name: "STATS", href: "#about" },
  { name: "INVENTORY", href: "#skills" },
  { name: "MISSIONS", href: "#projects" },
  { name: "QUESTS", href: "#experience" },
  { name: "CONSOLE", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(isAudioMuted());
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMuteToggle = () => {
    const isNowMuted = toggleAudioMute();
    setMuted(isNowMuted);
    if (!isNowMuted) {
      playRetroBeep(880, 0.1);
    }
  };

  const scrollToSection = (href: string) => {
    playRetroSelect();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-3 py-3 flex justify-center",
        scrolled ? "mt-1" : "mt-2"
      )}
    >
      {/* Neo-Brutalist HUD Container */}
      <div className="w-full max-w-5xl bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] rounded-xl px-4 py-2.5 flex items-center justify-between">
        
        {/* Logo / Player 1 Badge */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          onMouseEnter={() => playRetroBeep(440, 0.05)}
          className="flex items-center gap-2.5 group interactive select-none"
        >
          <div className="p-1.5 bg-[#FFDE00] border-2 border-black rounded-lg text-black group-hover:bg-[#FF5722] group-hover:text-white transition-colors shadow-[2px_2px_0px_#000]">
            <Gamepad2 className="w-4 h-4" />
          </div>
          
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635] border border-black animate-pulse" />
              <span className="text-xs font-grotesk font-black text-black tracking-wider uppercase">P1: REGAN</span>
            </div>
            {/* HP mini bar */}
            <div className="flex items-center gap-1 text-[9px] font-mono text-zinc-800">
              <span className="font-extrabold text-black">HP</span>
              <div className="w-12 h-2.5 bg-[#FAF7F2] border border-black rounded-sm overflow-hidden p-0.5">
                <div className="w-full h-full bg-[#A3E635]" />
              </div>
              <span className="text-[8px] font-extrabold">100%</span>
            </div>
          </div>
        </motion.a>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              onMouseEnter={() => playRetroBeep(580, 0.03)}
              className="px-3 py-1.5 rounded-lg text-xs font-grotesk font-black text-black hover:bg-[#FFDE00] border-2 border-transparent hover:border-black transition-all hover:shadow-[2px_2px_0px_#000] interactive uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Audio Toggle & Socials */}
        <div className="flex items-center gap-2">
          {/* Audio SFX Switch */}
          <button
            onClick={handleMuteToggle}
            type="button"
            className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000] rounded-lg text-black hover:bg-[#FFDE00] transition-all interactive cursor-pointer"
            title={muted ? "Unmute Sound FX" : "Mute Sound FX"}
            aria-label="Toggle Sound Effects"
          >
            {muted ? <VolumeX className="w-4 h-4 text-black" /> : <Volume2 className="w-4 h-4 text-black" />}
          </button>

          {/* Socials (Desktop) */}
          <div className="hidden sm:flex items-center gap-1.5">
            {[
              { icon: Github, href: "https://github.com/Neraa6", label: "GitHub" },
              { icon: Instagram, href: "https://www.instagram.com/yrgnn/", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playRetroBeep(660, 0.03)}
                className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000] rounded-lg text-black hover:bg-[#2563EB] hover:text-white transition-all interactive"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 bg-[#FFDE00] border-2 border-black text-black shadow-[2px_2px_0px_#000] rounded-lg interactive cursor-pointer"
            onClick={() => {
              playRetroSelect();
              setIsOpen(!isOpen);
            }}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Neo-Brutalist Menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-3 right-3 bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] rounded-xl p-4 flex flex-col gap-2 md:hidden z-50"
          >
            <div className="text-[10px] font-mono text-black font-extrabold uppercase border-b-2 border-black pb-1.5 flex items-center justify-between">
              <span>[ NAVIGATION MENU ]</span>
              <span className="px-1.5 py-0.5 bg-[#FFDE00] border border-black text-[9px]">P1 CONTROL</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-3 py-2 rounded-lg bg-[#FAF7F2] border-2 border-black text-xs font-grotesk font-black text-black hover:bg-[#FFDE00] transition-colors text-left flex items-center justify-between shadow-[2px_2px_0px_#000]"
              >
                <span>{link.name}</span>
                <span className="text-[10px] font-black">▶</span>
              </a>
            ))}
            <div className="flex gap-2 pt-2 border-t-2 border-black">
              {[
                { icon: Github, href: "https://github.com/Neraa6", label: "GitHub" },
                { icon: Instagram, href: "https://www.instagram.com/yrgnn/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#FAF7F2] border-2 border-black text-black hover:bg-[#FF5722] hover:text-white transition-all flex-1 flex justify-center rounded-lg font-mono text-xs shadow-[2px_2px_0px_#000]"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
