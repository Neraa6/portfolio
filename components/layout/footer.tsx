"use client";

import { Github, Instagram, Gamepad } from "lucide-react";
import { playRetroBeep } from "@/lib/retro-audio";
import { SparkleStar } from "@/components/ui/handwritten-doodles";

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-[#111111]/20 mt-20 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Editorial Copyright & Title */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-xs text-[#111111] font-black uppercase">
            <Gamepad className="w-4 h-4 text-[#111111] stroke-[2.5]" />
            <span className="bg-[#FFE17D] px-2 py-0.5 border border-[#111111] shadow-sm">
              THANK YOU FOR VISITING!
            </span>
            <SparkleStar className="w-5 h-5 text-[#FFADAD] hidden sm:inline-block" />
          </div>
          <p className="text-[#111111]/80 text-xs font-mono font-bold pt-1">
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
              className="p-2.5 bg-[#D8FF45] border border-[#111111] shadow-[2.5px_2.5px_0px_#111111] rounded-none text-[#111111] hover:bg-[#111111] hover:text-[#D8FF45] transition-all interactive text-xs hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <Icon className="w-4 h-4 stroke-[2.5]" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
