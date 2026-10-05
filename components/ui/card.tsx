import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ 
  className, 
  children, 
  hover = true,
  ...props 
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { x: -3, y: -3, transition: { duration: 0.1 } } : undefined}
      className={cn(
        "bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] rounded-none p-6 transition-all duration-150",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}