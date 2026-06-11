"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function LogoIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          aria-hidden="true"
        >
          {/* Subtle radial glow behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]"
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%)",
            }}
          />

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="relative flex items-start text-[clamp(3rem,12vw,9rem)] font-semibold tracking-[-0.04em] leading-none text-foreground"
          >
            <span>GilyStudios</span>
            <motion.sup
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-[0.18em] ml-1 mt-1 font-normal text-foreground/80"
            >
              ™
            </motion.sup>
          </motion.div>

          {/* Underline reveal */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
            className="absolute bottom-[36%] h-px w-[clamp(180px,28vw,520px)] bg-gradient-to-r from-transparent via-primary/80 to-transparent origin-center"
          />

          {/* Bottom marker */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Creative & AI Studio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
