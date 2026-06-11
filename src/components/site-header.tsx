"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/magnetic";

const sections = [
  { id: "services", label: "Services" },
  { id: "features", label: "Why us" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

/**
 * Floating pill header with:
 * - scroll progress hairline at the very top
 * - auto-hide on scroll down / reveal on scroll up
 * - active-section highlighting via IntersectionObserver
 * - magnetic CTA with shine sweep
 */
export function SiteHeader() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 480) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress hairline */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-rose-400 to-primary"
        style={{ scaleX: progress }}
      />

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6">
        <motion.div
          animate={{ y: hidden ? -104 : 0 }}
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-6 rounded-full border border-border/60 bg-background/60 backdrop-blur-xl pl-5 pr-1.5 py-1.5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
        >
          <Link href="/" className="text-sm font-semibold tracking-tight">
            GilyStudios
            <sup className="text-[8px] ml-0.5 font-normal text-muted-foreground">™</sup>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-xs">
            {sections.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className={`relative transition-colors duration-300 ${
                  active === s.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-primary transition-all duration-300 ${
                    active === s.id ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </Link>
            ))}
          </nav>
          <Magnetic strength={0.2}>
            <Link
              href="#contact"
              className="btn-shine group inline-flex items-center gap-1.5 rounded-full bg-foreground text-background text-xs font-medium pl-3.5 pr-1.5 py-1.5 transition-transform duration-200 active:scale-[0.97]"
              style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
            >
              <span>Start a project</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-background/15">
                <ArrowUpRight
                  className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                  strokeWidth={2}
                />
              </span>
            </Link>
          </Magnetic>
        </motion.div>
      </header>
    </>
  );
}
