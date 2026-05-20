"use client";

import { motion } from "motion/react";

export function HeroVisuals() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Primary glow — slow breath, rose */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10%] top-[20%] h-[640px] w-[640px] rounded-full bg-primary/40 blur-[160px]"
      />
      {/* Secondary warm glow — drifts */}
      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[50%] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]"
      />

      {/* Subtle grid — masked to fade out edges */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 75%)",
        }}
      />

      {/* Film grain noise — fixed, pointer-events-none per high-end-visual-design */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
