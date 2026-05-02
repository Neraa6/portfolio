"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/animations/typewriter";
import { FadeIn } from "@/components/animations/fade-in";
import { ParticleBg } from "@/components/effects/particle-bg";
import { GradientOrb } from "@/components/effects/gradient-orb";
import { TiltCard } from "@/components/effects/tilt-card";
import Image from "next/image";

export function Hero() {
  const typewriterTexts = [
    "IT Student",
    "Full Stack Developer",
    "IoT Enthusiast",
    "Problem Solver",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg">
        <ParticleBg />
        <GradientOrb className="top-1/4 -left-20" size="xl" />
        <GradientOrb className="bottom-1/4 -right-20" size="lg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <FadeIn delay={0.2}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Your Name</span>
            </motion.h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-xl md:text-2xl text-text-secondary">
              <Typewriter texts={typewriterTexts} />
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Passionate about building modern web applications, backend systems, 
              networking infrastructure, and smart IoT solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="interactive">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg" className="interactive">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="interactive">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover:shadow-glow interactive"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right Content - Profile Card */}
        <FadeIn delay={0.5} direction="right">
          <TiltCard className="max-w-md mx-auto lg:ml-auto">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative glass-card p-2 rounded-3xl"
            >
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-secondary rounded-3xl blur opacity-30" />
              
              <div className="relative bg-secondary/50 rounded-3xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </TiltCard>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}