"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  return (
    <AnimatePresence>
      {scrollY.get() > 400 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            size="sm"
            className="rounded-full w-12 h-12 p-0 shadow-glow"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}