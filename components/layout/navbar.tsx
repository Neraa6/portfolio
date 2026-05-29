"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 flex justify-center",
        scrolled ? "mt-1" : "mt-3"
      )}
    >
      {/* Floating Pill Container */}
      <div className="w-full max-w-5xl bg-secondary border border-khaki/30 rounded-3xl px-6 py-3 flex items-center justify-between shadow-sm">
        {/* Logo / Title */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="text-sm font-bold font-mono tracking-tight text-accent-secondary flex items-center gap-1.5 interactive"
          whileHover={{ scale: 1.02 }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>RE.GAN</span>
        </motion.a>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono text-text-secondary hover:text-accent-secondary transition-all interactive hover:bg-khaki/10"
              whileHover={{ y: -1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Socials & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Socials (Desktop) */}
          <div className="hidden sm:flex items-center gap-1.5">
            {[
              { icon: Github, href: "https://github.com/Neraa6" },
              { icon: Instagram, href: "https://www.instagram.com/y.regan6/" },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#F6F3EB] border border-khaki/30 text-text-secondary hover:text-accent-secondary hover:border-khaki transition-all interactive"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>

          {/* Toggle */}
          <button
            className="md:hidden p-2 rounded-xl bg-[#F6F3EB] border border-khaki/30 text-text-secondary hover:text-accent-secondary transition-colors interactive"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Expandable) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-secondary border border-khaki/30 rounded-3xl p-5 flex flex-col gap-3 md:hidden shadow-sm"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2.5 rounded-2xl hover:bg-[#F6F3EB] text-xs font-mono text-text-secondary hover:text-accent-secondary transition-colors text-left"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex gap-2 pt-3 border-t border-khaki/20">
              {[
                { icon: Github, href: "https://github.com/Neraa6" },
                { icon: Instagram, href: "https://www.instagram.com/y.regan6/" },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#F6F3EB] border border-khaki/30 text-text-secondary hover:text-accent-secondary transition-all flex-1 flex justify-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}