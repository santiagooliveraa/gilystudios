"use client";

import { motion } from "motion/react";

export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Slow drifting primary orb */}
      <motion.div
        animate={{
          x: ["-10%", "15%", "-5%", "-10%"],
          y: ["-10%", "20%", "60%", "-10%"],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[520px] w-[520px] rounded-full bg-primary/[0.06] blur-[160px]"
      />

      {/* Mid emerald orb */}
      <motion.div
        animate={{
          x: ["80%", "55%", "75%", "80%"],
          y: ["10%", "55%", "30%", "10%"],
        }}
        transition={{ duration: 80, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute h-[420px] w-[420px] rounded-full bg-emerald-500/[0.04] blur-[140px]"
      />

      {/* Indigo bottom orb */}
      <motion.div
        animate={{
          x: ["20%", "60%", "30%", "20%"],
          y: ["70%", "30%", "90%", "70%"],
        }}
        transition={{ duration: 90, repeat: Infinity, ease: "easeInOut", delay: 12 }}
        className="absolute h-[440px] w-[440px] rounded-full bg-indigo-500/[0.04] blur-[150px]"
      />

      {/* Amber accent orb */}
      <motion.div
        animate={{
          x: ["60%", "30%", "70%", "60%"],
          y: ["40%", "75%", "20%", "40%"],
        }}
        transition={{ duration: 75, repeat: Infinity, ease: "easeInOut", delay: 20 }}
        className="absolute h-[360px] w-[360px] rounded-full bg-amber-400/[0.03] blur-[140px]"
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
