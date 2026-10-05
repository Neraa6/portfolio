import React from "react";

interface DoodleProps {
  className?: string;
  color?: string;
}

export function CurvedArrow({ className = "w-16 h-12", color = "currentColor" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 45 C 30 10, 70 15, 85 40"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 38 L 86 42 L 82 25"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ScribbleCircle({ className = "w-20 h-20", color = "currentColor" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 50 10 C 20 12 10 35 12 60 C 15 82 38 90 65 88 C 88 85 92 60 88 35 C 84 15 55 8 30 15 C 15 20 8 45 15 70"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function UnderlineScribble({ className = "w-32 h-4", color = "currentColor" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 5 12 C 45 4, 115 16, 195 8 C 150 15, 80 18, 25 14"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SparkleStar({ className = "w-8 h-8", color = "currentColor" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 2 C25 15 35 25 48 25 C35 25 25 35 25 48 C25 35 15 25 2 25 C15 25 25 15 25 2 Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlowerDoodle({ className = "w-10 h-10", color = "currentColor" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 18 C26 8, 14 10, 18 20 C8 16, 6 28, 16 30 C6 34, 8 46, 18 42 C14 52, 26 54, 30 44 C34 54, 46 52, 42 42 C52 46, 54 34, 44 30 C54 28, 52 16, 42 20 C46 10, 34 8, 30 18 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="30" cy="30" r="5" fill={color} />
    </svg>
  );
}

export function WavyLine({ className = "w-24 h-6", color = "currentColor" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 5 10 Q 20 0 35 10 T 65 10 T 95 10 T 115 10"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function TapeSticker({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={`relative inline-block px-3 py-1 bg-[#FFF9D2]/90 border border-[#D4C585] text-black font-mono text-xs font-bold uppercase shadow-sm ${className}`}
      style={{
        boxShadow: "2px 2px 0px rgba(0,0,0,0.15)",
        transform: "rotate(-1.5deg)",
      }}
    >
      {children}
    </div>
  );
}
