"use client";

import { motion } from "motion/react";

function Frame({ children, label, status }: { children: React.ReactNode; label: string; status?: string }) {
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 overflow-hidden">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-5 lg:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <h4 className="text-base font-medium tracking-tight text-foreground">{label}</h4>
          {status && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-medium tracking-wide text-emerald-300">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {status}
            </span>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

/* ─────────── KANBAN — Operations ─────────── */
export function KanbanVisual() {
  const columns = [
    {
      title: "Incoming",
      color: "border-amber-400/40",
      dot: "bg-amber-400",
      items: [
        { who: "#5127 · Madrid", note: "2 items · express" },
        { who: "#5126 · Tokyo", note: "1 item · gift wrap" },
        { who: "#5125 · NYC", note: "wholesale, Net 30" },
      ],
    },
    {
      title: "Processing",
      color: "border-primary/40",
      dot: "bg-primary",
      items: [
        { who: "#5119 · Berlin", note: "Picked, packing now" },
        { who: "#5118 · Paris", note: "Label printed" },
      ],
    },
    {
      title: "Shipped",
      color: "border-emerald-400/40",
      dot: "bg-emerald-400",
      items: [
        { who: "#5114 · LA", note: "DHL · in transit" },
        { who: "#5113 · London", note: "Delivered today" },
        { who: "#5112 · Lisbon", note: "Delivered today" },
      ],
    },
  ];
  return (
    <Frame label="Ops Pipeline" status="Live">
      <div className="grid grid-cols-3 gap-2.5">
        {columns.map((col) => (
          <div key={col.title} className="rounded-xl bg-foreground/[0.02] border border-border/30 p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                  {col.title}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground tabular-nums">{col.items.length}</span>
            </div>
            <div className="space-y-2">
              {col.items.map((it, i) => (
                <motion.div
                  key={it.who}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.19, 1, 0.22, 1] }}
                  className="rounded-lg bg-foreground/[0.05] border border-border/40 px-3 py-2.5"
                >
                  <p className="text-xs font-medium text-foreground/90 leading-tight">{it.who}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{it.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ─────────── CALENDAR — Content ─────────── */
export function CalendarVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const events: Record<string, { label: string; tone: string }[]> = {
    Mon: [{ label: "Newsletter draft", tone: "bg-primary/20 text-primary" }],
    Tue: [
      { label: "IG carousel", tone: "bg-amber-400/20 text-amber-300" },
      { label: "Blog post", tone: "bg-primary/20 text-primary" },
    ],
    Wed: [{ label: "TikTok script", tone: "bg-emerald-400/20 text-emerald-300" }],
    Thu: [
      { label: "Reel · BTS", tone: "bg-emerald-400/20 text-emerald-300" },
      { label: "LinkedIn", tone: "bg-indigo-400/20 text-indigo-300" },
    ],
    Fri: [{ label: "Newsletter send", tone: "bg-primary/20 text-primary" }],
    Sat: [],
    Sun: [{ label: "Weekly review", tone: "bg-foreground/10 text-foreground/70" }],
  };
  return (
    <Frame label="Content Calendar" status="Live">
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((d) => (
          <div key={d} className="rounded-lg bg-foreground/[0.02] border border-border/30 p-2 min-h-[140px]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-2 text-center">
              {d}
            </p>
            <div className="space-y-1.5">
              {events[d].map((e, i) => (
                <motion.div
                  key={e.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                  className={`rounded-md ${e.tone} px-1.5 py-1 text-[9px] font-medium leading-tight text-center`}
                >
                  {e.label}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>This week · 8 pieces scheduled</span>
        <span className="text-emerald-300">↑ 14% vs last week</span>
      </div>
    </Frame>
  );
}

/* ─────────── CHAT — Support ─────────── */
export function ChatVisual() {
  const messages: { from: "customer" | "agent"; text: string; meta?: string }[] = [
    { from: "customer", text: "Hi! What size is the medium denim? I'm usually a 28 in Levi's.", meta: "Lena · 14:32" },
    {
      from: "agent",
      text: "Hey Lena, our medium denim runs true to size for 28-29. If you usually wear a 28, the medium will fit comfortably. Want me to send the size chart?",
      meta: "Agent · 14:32",
    },
    { from: "customer", text: "Yes please, and what's the return window?" },
    {
      from: "agent",
      text: "30 days, free returns in EU and US. Here's the chart and a $10 first-order credit while you decide ✨",
    },
  ];
  return (
    <Frame label="Support Agent" status="Live">
      <div className="space-y-3 max-h-[360px] overflow-hidden">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: m.from === "customer" ? -8 : 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.19, 1, 0.22, 1] }}
            className={`flex ${m.from === "customer" ? "justify-start" : "justify-end"}`}
          >
            <div className={`max-w-[78%] ${m.from === "customer" ? "" : "text-right"}`}>
              {m.meta && (
                <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground mb-1 px-1">
                  {m.meta}
                </p>
              )}
              <div
                className={`rounded-2xl px-4 py-2.5 text-xs leading-relaxed inline-block text-left ${
                  m.from === "customer"
                    ? "bg-foreground/[0.06] border border-border/40 text-foreground/90 rounded-bl-md"
                    : "bg-primary/15 border border-primary/30 text-foreground rounded-br-md"
                }`}
              >
                {m.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Resolved in 38 seconds</span>
        <span className="text-emerald-300">★ 5.0 · 412 conversations today</span>
      </div>
    </Frame>
  );
}

/* ─────────── BRAND KIT — Brand ─────────── */
export function BrandKitVisual() {
  const palette = [
    { c: "bg-rose-500", n: "Primary" },
    { c: "bg-amber-400", n: "Highlight" },
    { c: "bg-emerald-500", n: "Live" },
    { c: "bg-zinc-100", n: "Air" },
  ];
  return (
    <Frame label="Brand System" status="v2.4">
      <div className="grid grid-cols-2 gap-3">
        {/* Wordmark preview */}
        <div className="col-span-2 rounded-xl bg-foreground/[0.04] border border-border/40 p-6 flex items-center justify-center">
          <span className="text-3xl lg:text-4xl font-semibold tracking-[-0.04em] text-foreground">
            yourbrand
            <sup className="text-[10px] ml-0.5 font-normal text-muted-foreground">™</sup>
          </span>
        </div>

        {/* Palette */}
        <div className="rounded-xl bg-foreground/[0.04] border border-border/40 p-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium mb-3">
            Palette
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {palette.map((p) => (
              <div key={p.n} className="flex flex-col gap-1">
                <span className={`${p.c} aspect-square rounded-md`} />
                <span className="text-[9px] text-muted-foreground leading-none">{p.n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="rounded-xl bg-foreground/[0.04] border border-border/40 p-4 flex flex-col justify-between">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            Typography
          </p>
          <div>
            <p className="text-xl font-medium tracking-tight leading-none text-foreground">Aa</p>
            <p className="text-[10px] text-muted-foreground mt-1.5 leading-none">Geist · Display</p>
          </div>
        </div>

        {/* Button + CTA */}
        <div className="col-span-2 rounded-xl bg-foreground/[0.04] border border-border/40 p-4 flex items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            Buttons · v3
          </span>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-primary text-primary-foreground text-xs font-medium px-3.5 py-1.5">
              Primary
            </span>
            <span className="rounded-full border border-border/60 text-foreground text-xs font-medium px-3.5 py-1.5">
              Ghost
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>94 tokens · 38 components</span>
        <span className="text-emerald-300">↑ 98% consistency</span>
      </div>
    </Frame>
  );
}

/* ─────────── GALLERY — Creative ─────────── */
export function GalleryVisual() {
  const assets = [
    { label: "Hero · 4K", tone: "from-rose-500/40 via-rose-400/20 to-transparent", tag: "Photo" },
    { label: "Reel · 30s", tone: "from-amber-400/40 via-orange-500/20 to-transparent", tag: "Video" },
    { label: "Lookbook spread", tone: "from-emerald-400/40 via-teal-500/20 to-transparent", tag: "Print" },
    { label: "Pack mock · v3", tone: "from-indigo-500/40 via-violet-500/20 to-transparent", tag: "3D" },
    { label: "Brand film cut", tone: "from-fuchsia-500/40 via-pink-500/20 to-transparent", tag: "Video" },
    { label: "AI generated · 12", tone: "from-cyan-400/40 via-blue-500/20 to-transparent", tag: "Synth" },
  ];
  return (
    <Frame label="Creative Library" status="47 shipped">
      <div className="grid grid-cols-3 gap-2">
        {assets.map((a, i) => (
          <motion.article
            key={a.label}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.19, 1, 0.22, 1] }}
            className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-border/40"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${a.tone}`} />
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(255,255,255,0.15), transparent 70%)",
              }}
            />
            <div className="relative h-full p-3 flex flex-col justify-between">
              <span className="self-start rounded-full bg-background/40 backdrop-blur-sm text-[9px] uppercase tracking-[0.15em] text-foreground/80 px-2 py-0.5 font-medium">
                {a.tag}
              </span>
              <p className="text-[11px] font-medium tracking-tight text-foreground leading-tight">
                {a.label}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Shipped this month · 47 assets</span>
        <span className="text-emerald-300">↑ Avg approval 96%</span>
      </div>
    </Frame>
  );
}
