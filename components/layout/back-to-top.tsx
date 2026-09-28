"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { playRetroPowerup } from "@/lib/retro-audio";
import { useEffect, useState } from "react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShow(latest > 300);
    });
  }, [scrollY]);

  const handleScrollTop = () => {
    playRetroPowerup();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            variant="coral"
            size="sm"
            className="w-12 h-12 p-0 rounded-xl flex items-center justify-center border-[3px] border-black shadow-[4px_4px_0px_#000]"
            onClick={handleScrollTop}
            aria-label="Warp back to top"
            title="Warp to Top"
          >
            <ArrowUp className="w-5 h-5 text-white stroke-[3]" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}