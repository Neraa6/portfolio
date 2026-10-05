"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { playRetroBeep, playRetroSelect } from "@/lib/retro-audio";
import React from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "coral" | "teal" | "lime" | "yellow" | "orange" | "pink" | "default";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  title?: string;
  ariaLabel?: string;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  href,
  download,
  target,
  rel,
  type = "button",
  children,
  onClick,
  onMouseEnter,
  title,
  ariaLabel,
}: ButtonProps) {
  const variants = {
    default: "bg-[#111111] text-white border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#D8FF45] hover:text-[#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    primary: "bg-[#111111] text-white border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#D8FF45] hover:text-[#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    yellow: "bg-[#FFE17D] text-[#111111] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#111111] hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    lime: "bg-[#D8FF45] text-[#111111] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#111111] hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    orange: "bg-[#FFADAD] text-[#111111] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#111111] hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    coral: "bg-[#FFADAD] text-[#111111] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#111111] hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    secondary: "bg-[#FAF7F2] text-[#111111] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#A0C4FF] hover:text-[#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    teal: "bg-[#A0C4FF] text-[#111111] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#111111] hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    pink: "bg-[#FFC6FF] text-[#111111] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#111111] hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    outline: "bg-transparent text-[#111111] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#111111] hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]",
    ghost: "bg-transparent text-[#111111] hover:bg-[#D8FF45] hover:text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider",
    md: "px-5 py-2.5 text-sm font-grotesk font-black tracking-wider",
    lg: "px-7 py-3.5 text-base font-grotesk font-black tracking-wider",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playRetroSelect();
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetElem = document.querySelector(href);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    if (onClick) onClick(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playRetroBeep(520, 0.04);
    if (onMouseEnter) onMouseEnter(e);
  };

  const combinedClasses = cn(
    "relative rounded-none transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 select-none uppercase interactive cursor-pointer z-10",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        whileHover={{ x: -2, y: -2 }}
        whileTap={{ x: 2, y: 2 }}
        className={combinedClasses}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        title={title}
        aria-label={ariaLabel}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2 }}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      title={title}
      aria-label={ariaLabel}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  );
}