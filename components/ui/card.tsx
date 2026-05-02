import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ 
  className, 
  children, 
  hover = true,
  glow = false,
  ...props 
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "glass-card p-6",
        glow && "hover:shadow-glow hover:border-accent/40",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}