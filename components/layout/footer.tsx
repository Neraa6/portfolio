"use client";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative py-10 px-4 border-t border-khaki/30 mt-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-text-secondary text-xs text-center md:text-left font-mono">
            © {new Date().getFullYear()} Yusuf Regan Manggala Ghalib. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/Neraa6", label: "GitHub" },
              { icon: Instagram, href: "https://www.instagram.com/yrgnn/", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="interactive p-2.5 rounded-xl bg-white/5 border border-white/5 text-text-secondary hover:text-white hover:border-white/10 hover:bg-white/10 transition-all text-xs"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
