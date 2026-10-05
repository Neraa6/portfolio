import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "yellow" | "lime" | "orange" | "pink" | "blue" | "coral";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-white text-black border-2 border-black shadow-[2px_2px_0px_#000000]",
    accent: "bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_#000000]",
    yellow: "bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_#000000]",
    lime: "bg-[#A3E635] text-black border-2 border-black shadow-[2px_2px_0px_#000000]",
    orange: "bg-[#FF5500] text-white border-2 border-black shadow-[2px_2px_0px_#000000]",
    pink: "bg-[#FF2E93] text-white border-2 border-black shadow-[2px_2px_0px_#000000]",
    blue: "bg-[#2563EB] text-white border-2 border-black shadow-[2px_2px_0px_#000000]",
    coral: "bg-[#FF0033] text-white border-2 border-black shadow-[2px_2px_0px_#000000]",
    outline: "bg-transparent text-black border-2 border-black shadow-[2px_2px_0px_#000000]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-none text-xs font-mono font-bold uppercase tracking-wider select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}