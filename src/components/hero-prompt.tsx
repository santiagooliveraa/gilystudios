"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mic } from "lucide-react";

const examples = [
  "I want to automate my customer support…",
  "Build a WhatsApp bot for my brand…",
  "Sync my CRM with email and Notion…",
  "Make my Instagram DMs auto-reply…",
  "Create a voice agent that books calls…",
  "Launch a premium website in two weeks…",
  "Set up Telegram bots for my team…",
  "Automate the boring stuff so I can focus on growth…",
];

export function HeroPrompt() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");

  useEffect(() => {
    const full = examples[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < full.length) {
        timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), 38);
      } else {
        timeout = setTimeout(() => setPhase("holding"), 1500);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("erasing"), 800);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 18);
      } else {
        setIndex((i) => (i + 1) % examples.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index]);

  const openContact = () => {
    const subject = encodeURIComponent("New project — GilyStudios");
    const body = encodeURIComponent(examples[index]);
    window.location.href = `mailto:Gilystudios@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      onClick={openContact}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openContact();
      }}
      className="relative w-full max-w-2xl mx-auto rounded-3xl bg-foreground/95 text-background shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.005] active:scale-[0.995]"
      style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
    >
      <div className="px-4 pt-3.5 pb-1 text-left text-[15px] leading-snug select-none">
        <span className="text-background">{text}</span>
        <span
          aria-hidden
          className="inline-block w-[2px] h-[18px] ml-0.5 -mb-0.5 bg-background/70 animate-pulse align-middle"
        />
      </div>
      <div className="flex items-center justify-between px-2.5 pb-2.5">
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-background/45 pl-1.5">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Tap to start a project
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-background/40">
            <Mic className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground">
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  );
}
