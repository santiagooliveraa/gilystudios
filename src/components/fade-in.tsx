"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: ReactNode;
  delay?: number;
  y?: number;
}

export function FadeIn({ children, delay = 0, y = 20, ...rest }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
