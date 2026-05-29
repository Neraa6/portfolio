"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function GradientOrb({ className, size = "lg" }: GradientOrbProps) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full blur-3xl opacity-15",
        "bg-gradient-radial from-accent/40 via-accent-secondary/20 to-transparent",
        sizes[size],
        className
      )}
    />
  );
}