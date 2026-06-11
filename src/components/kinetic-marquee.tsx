"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

interface KineticMarqueeProps {
  items: string[];
  /** percent per second */
  baseVelocity?: number;
}

/**
 * Scroll-velocity-reactive marquee: cruises slowly, accelerates with
 * scroll speed and reverses direction when scrolling up.
 */
export function KineticMarquee({ items, baseVelocity = 1.6 }: KineticMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const directionFactor = useRef(1);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const row = items.map((item) => (
    <span key={item} className="flex items-center gap-10 shrink-0">
      <span>{item}</span>
      <span className="text-primary">/</span>
    </span>
  ));

  return (
    <div
      className="relative overflow-hidden border-y border-border/30 py-5 bg-foreground/[0.02]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap text-2xl md:text-3xl font-medium tracking-tight"
        style={{ x }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-10 shrink-0" aria-hidden={i > 0}>
            {row}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
