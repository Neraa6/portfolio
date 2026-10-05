"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Instagram, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { playRetroBeep, playRetroSelect, toggleAudioMute, isAudioMuted } from "@/lib/retro-audio";

const navLinks = [
  { name: "START", href: "#home" },
  { name: "ABOUT ME", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 sm:px-8 py-4 flex justify-center",
        scrolled ? "bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#111111]/10 shadow-sm py-3" : "bg-transparent"
      )}
    >
      {/* Clean Unboxed Editorial Navigation */}
      <div className="w-full max-w-6xl flex items-center justify-between">
        
        {/* Brand Label */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          onMouseEnter={() => playRetroBeep(440, 0.05)}
          className="flex items-center gap-2 group interactive cursor-pointer select-none"
        >
          <span className="px-2 py-0.5 bg-[#D8FF45] border border-[#111111] text-[#111111] font-mono text-[10px] font-black uppercase tracking-wider">
            ISSUE N°01
          </span>
          <span className="text-xs font-mono font-black text-[#111111] tracking-widest uppercase">
            YUSUF REGAN <span className="font-handwriting text-base text-[#111111]/60 font-bold lowercase tracking-normal">· portfolio</span>
          </span>
        </motion.a>

        {/* Center Minimal Typography Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              onMouseEnter={() => playRetroBeep(580, 0.03)}
              className="px-3 py-1 text-xs font-mono font-bold text-[#111111] hover:bg-[#D8FF45] border border-transparent hover:border-[#111111] transition-all uppercase tracking-wider cursor-pointer"
            >
              [ {link.name} ]
            </a>
          ))}
        </div>

        {/* Audio Switch & Social Links */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleMuteToggle}
            type="button"
            className="p-1.5 bg-[#FFE17D] border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FFE17D] transition-colors interactive cursor-pointer"
            title={muted ? "Unmute Sound FX" : "Mute Sound FX"}
            aria-label="Toggle Sound Effects"
          >
            {muted ? <VolumeX className="w-3.5 h-3.5 stroke-[2.5]" /> : <Volume2 className="w-3.5 h-3.5 stroke-[2.5]" />}
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
                className="p-1.5 bg-white border border-[#111111] text-[#111111] hover:bg-[#FFC6FF] transition-colors interactive cursor-pointer shadow-sm"
                aria-label={label}
              >
                <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            ))}
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            className="md:hidden p-1.5 bg-[#111111] border border-[#111111] text-white interactive cursor-pointer hover:bg-[#D8FF45] hover:text-[#111111]"
            onClick={() => {
              playRetroSelect();
              setIsOpen(!isOpen);
            }}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-4 h-4 stroke-[3]" /> : <Menu className="w-4 h-4 stroke-[3]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-4 right-4 bg-[#FAF7F2] border border-[#111111] shadow-lg p-4 flex flex-col gap-2 md:hidden z-50 font-mono"
          >
            <div className="text-xs font-mono text-[#111111] font-bold uppercase border-b border-[#111111]/20 pb-2 flex items-center justify-between">
              <span className="bg-[#D8FF45] px-2 py-0.5 border border-[#111111]">[ EDITORIAL MENU ]</span>
              <span className="px-2 py-0.5 bg-[#111111] text-white text-[10px]">SYS_NAV</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-3 py-2 bg-white border border-[#111111] text-xs font-mono font-bold text-[#111111] hover:bg-[#A0C4FF] transition-colors text-left flex items-center justify-between shadow-sm"
              >
                <span>[ {link.name} ]</span>
                <span className="text-xs font-black">→</span>
              </a>
            ))}
            <div className="flex gap-2 pt-2 border-t border-[#111111]/20">
              {[
                { icon: Github, href: "https://github.com/Neraa6", label: "GitHub" },
                { icon: Instagram, href: "https://www.instagram.com/yrgnn/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#FFE17D] border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors flex-1 flex justify-center font-mono text-xs shadow-sm"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 stroke-[2.5]" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
