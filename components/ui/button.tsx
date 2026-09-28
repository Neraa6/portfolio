"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { playRetroBeep, playRetroSelect } from "@/lib/retro-audio";
import React from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "coral" | "teal" | "lime" | "pink";
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
    primary: "bg-[#FFDE00] text-black border-[3px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#FACC15] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]",
    coral: "bg-[#FF5722] text-white border-[3px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#F4511E] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]",
    secondary: "bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#FAF7F2] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]",
    teal: "bg-[#2563EB] text-white border-[3px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#1D4ED8] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]",
    lime: "bg-[#A3E635] text-black border-[3px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#84CC16] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]",
    pink: "bg-[#FF007A] text-white border-[3px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#E0006B] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]",
    outline: "bg-transparent text-black border-[3px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#FFDE00]/20 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]",
    ghost: "bg-transparent text-black hover:bg-black/10 border-2 border-transparent",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs font-mono font-extrabold tracking-wider",
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
    "relative rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 select-none uppercase interactive cursor-pointer z-10",
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