"use client";

import { motion } from "motion/react";

interface MascotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  float?: boolean;
  delay?: number;
}

export function Mascot({ src, alt, width = 200, height = 200, className = "", float = false, delay = 0 }: MascotProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
      className={`inline-flex ${className}`}
    >
      <motion.img
        src={`/mascots/${src}?v=2`}
        alt={alt}
        width={width}
        height={height}
        animate={
          float
            ? { y: [0, -6, 0] }
            : undefined
        }
        transition={
          float
            ? { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
            : undefined
        }
        className="select-none pointer-events-none"
        draggable={false}
        style={{ width: `${width}px`, height: "auto", maxWidth: "100%" }}
      />
    </motion.div>
  );
}
