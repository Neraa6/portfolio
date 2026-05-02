"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProgressProps {
  value: number;
  className?: string;
  color?: "blue" | "purple" | "gradient";
}

export function Progress({ value, className, color = "gradient" }: ProgressProps) {
  const colors = {
    blue: "bg-accent",
    purple: "bg-accent-secondary",
    gradient: "bg-gradient-to-r from-accent to-accent-secondary",
  };

  return (
    <div className={cn("h-2 bg-secondary rounded-full overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn("h-full rounded-full", colors[color])}
      />
    </div>
  );
}