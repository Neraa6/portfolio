"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, staggerItem } from "@/components/animations/stagger-container";
import { TiltCard } from "@/components/effects/tilt-card";
import Image from "next/image";

const highlights = [
  { title: "Problem Solver", desc: "Analytical approach to challenges" },
  { title: "Fast Learner", desc: "Quickly adapt to new technologies" },
  { title: "Team Collaboration", desc: "Effective communicator & team player" },
  { title: "Creative Thinking", desc: "Innovative solutions & ideas" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <TiltCard className="max-w-md mx-auto">
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/profile-professional.jpg"
                  alt="Professional"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4"
                >
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {[
                      { label: "Projects", value: "3" },
                      { label: "Experience", value: "2y" },
                     
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-xs text-text-secondary">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TiltCard>
          </FadeIn>

          {/* Content */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed">
                I am an IT student from a 4-year vocational high school specializing in 
                Information Technology, where I studied programming, networking, IoT systems, 
                and digital design.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-text-secondary leading-relaxed">
                I enjoy creating impactful digital solutions—from modern web apps to smart 
                embedded systems. Every project is an opportunity to learn, innovate, and 
                make a difference.
              </p>
            </FadeIn>

           

            {/* Highlight Cards */}
            <StaggerContainer delay={0.8}>
              <motion.div variants={staggerItem} className="grid sm:grid-cols-2 gap-4 pt-4">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-4 rounded-xl interactive"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mb-2" />
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}