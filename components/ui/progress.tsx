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
    blue: "bg-black",
    purple: "bg-black",
    gradient: "bg-black",
  };

  return (
    <div className={cn("h-3 bg-[#F2F2F2] border-2 border-black rounded-none overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn("h-full rounded-none", colors[color])}
      />
    </div>
  );
}