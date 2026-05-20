"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 1.4,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      let raf = 0;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / (duration * 1000));
        const eased = 1 - Math.pow(1 - t, 4);
        setValue(target * eased);
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    };

    // If already in view at mount (e.g., above the fold), animate immediately.
    const rect = el.getBoundingClientRect();
    const inViewNow =
      rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewNow) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
