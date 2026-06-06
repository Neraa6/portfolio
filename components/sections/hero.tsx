"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Instagram, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/animations/typewriter";
import { useEffect, useState } from "react";

export function Hero() {
  const [time, setTime] = useState("");

  const typewriterTexts = [
    "IT Student",
    "Full Stack Developer",
    "IoT Enthusiast",
    "Tech Explorer",
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

  return (
    <div className="w-full text-left space-y-12 py-10">
      {/* Top Status & Clock Metadata */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary">
        {/* Pulsing work status */}
        <div className="flex items-center gap-2 bg-secondary border border-khaki/30 px-3.5 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-text-primary">Available for opportunities</span>
        </div>

        {/* Location & Clock */}
        <div className="flex items-center gap-3 bg-secondary border border-khaki/30 px-3.5 py-1.5 rounded-full">
          <span className="flex items-center gap-1.5 text-text-primary">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            Bogor, ID
          </span>
          <span className="w-px h-3 bg-khaki/30" />
          <span className="flex items-center gap-1.5 text-text-primary">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {time ? time : "00:00:00"} WIB
          </span>
        </div>
      </div>

      {/* Main typography */}
      <div className="space-y-6 max-w-4xl">
        <div className="space-y-2">
          <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">Introduction</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-accent-secondary leading-none">
            Yusuf Regan Manggala Ghalib
          </h1>
        </div>

        {/* Dynamic Typewriter text */}
        <div className="text-xl sm:text-2xl font-mono text-accent flex items-center h-8">
          <Typewriter texts={typewriterTexts} />
        </div>

        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed font-sans">
          I am an IT student specializing in modern web applications, backend development, networking infrastructure, and smart IoT solutions. Driven by robust architecture and automation.
        </p>
      </div>

      {/* Action Buttons & Socials */}
      <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-khaki/20 max-w-4xl">
        <div className="flex flex-wrap gap-4">
          <a href="#projects">
            <Button size="md" className="bg-accent text-white border border-accent hover:bg-accent/90 hover:opacity-100 shadow-none font-mono interactive">
              View Work <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="/CV-Regan.pdf" download>
            <Button variant="secondary" size="md" className="bg-secondary text-text-primary border border-khaki/40 hover:bg-khaki/10 shadow-none font-mono interactive">
              <Download className="w-4 h-4" /> Download CV
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="md" className="border border-accent-secondary text-accent-secondary hover:bg-accent-secondary/5 shadow-none font-mono interactive">
              <Mail className="w-4 h-4" /> Contact
            </Button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/Neraa6", label: "GitHub" },
            { icon: Instagram, href: "https://www.instagram.com/yrgnn/", label: "Instagram" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-secondary border border-khaki/30 text-text-secondary hover:text-accent-secondary hover:border-khaki transition-all interactive"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
