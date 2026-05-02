"use client";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-text-secondary text-sm text-center md:text-left">
            © 2026 Your Name — Built with{" "}
            <span className="gradient-text font-medium">Next.js + Tailwind</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/y.regan6/", label: "Instagram" },
              { icon: Mail, href: "mailto:yusufregan06@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 rounded-lg interactive"
                >
                  <Icon className="w-4 h-4" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}