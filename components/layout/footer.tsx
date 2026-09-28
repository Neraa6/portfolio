"use client";

import { Github, Instagram, Gamepad } from "lucide-react";
import { playRetroBeep } from "@/lib/retro-audio";

export function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t-4 border-black mt-16 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Neo-Brutalist Title & Copyright */}
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2 font-grotesk text-xs text-black font-black uppercase">
            <Gamepad className="w-4 h-4 text-[#FF5722] stroke-[2.5]" />
            <span>THANK YOU FOR VISITING!</span>
          </div>
          <p className="text-black text-xs font-mono font-extrabold">
            © {new Date().getFullYear()} YUSUF REGAN MANGGALA GHALIB. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/Neraa6", label: "GitHub" },
            { icon: Instagram, href: "https://www.instagram.com/yrgnn/", label: "Instagram" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playRetroBeep(520, 0.03)}
              aria-label={label}
              className="p-2.5 bg-[#FAF7F2] border-2 border-black shadow-[2px_2px_0px_#000] rounded-lg text-black hover:bg-[#FFDE00] transition-all interactive text-xs"
            >
              <Icon className="w-4 h-4 stroke-[2.5]" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
