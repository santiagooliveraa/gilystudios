"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface MountRevealProps
  extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: ReactNode;
  delay?: number;
  y?: number;
}

/**
 * Reveals on mount. /links is a single-screen page behind a QR code, so it
 * must not depend on a scroll event ever happening the way FadeIn does.
 */
export function MountReveal({ children, delay = 0, y = 16, ...rest }: MountRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
