"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface FadeInProps
  extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
}

/**
 * Scroll-triggered reveal: fades + lifts + un-blurs as the element
 * enters the viewport (instead of firing on mount).
 */
export function FadeIn({
  children,
  delay = 0,
  y = 24,
  blur = true,
  once = true,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
