"use client";

import { useCallback, useRef, type MouseEvent, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Card with a mouse-tracking radial glow (spotlight) on hover.
 * The glow itself is rendered via the `.spotlight-card::after` rule
 * in globals.css using the --mx / --my CSS variables set here.
 */
export function SpotlightCard({ children, className = "", style }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`spotlight-card ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
