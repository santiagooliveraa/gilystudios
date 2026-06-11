"use client";

import { motion } from "motion/react";

const EASE = [0.19, 1, 0.22, 1] as const;
// Synced to the LogoIntro exit (starts fading at ~1.8s)
const BASE_DELAY = 1.85;
const STAGGER = 0.09;

const words = ["Where", "creativity", "meets"];

/**
 * Cinematic word-by-word headline reveal with blur,
 * timed to land exactly as the logo intro fades out.
 */
export function HeroHeadline() {
  return (
    <h1 className="mt-7 text-[clamp(2.75rem,8vw,7rem)] font-medium tracking-[-0.04em] leading-[0.92] text-balance">
      {words.map((w, i) => (
        <motion.span
          key={w}
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: "0.5em", filter: "blur(14px)" }}
          animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
          transition={{ duration: 1, delay: BASE_DELAY + i * STAGGER, ease: EASE }}
        >
          {w}
          {" "}
        </motion.span>
      ))}
      <motion.span
        className="inline-block will-change-transform"
        initial={{ opacity: 0, y: "0.5em", filter: "blur(14px)" }}
        animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: BASE_DELAY + words.length * STAGGER, ease: EASE }}
      >
        <span className="text-gradient-primary italic font-light">automation</span>
        <span>.</span>
      </motion.span>
    </h1>
  );
}
