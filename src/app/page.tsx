import Link from "next/link";
import {
  Workflow,
  Globe,
  MessageSquare,
  Layers,
  Palette,
  Camera,
  ArrowUpRight,
  Sparkles,
  Mail,
  Phone,
  Send,
  AtSign,
  Database,
  Users,
  Headphones,
  ShoppingCart,
  FileText,
  Mic,
} from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { HeroVisuals } from "@/components/hero-visuals";
import { UseCaseTabs } from "@/components/use-case-tabs";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { CountUp } from "@/components/count-up";
import { Mascot } from "@/components/mascot";
import { HeroPrompt } from "@/components/hero-prompt";

const proofTiles = [
  {
    stat: "47h saved",
    context: "per week on customer support",
    name: "Lucía Méndez",
    role: "Founder · hospitality",
    initials: "LM",
    avatarTone: "bg-rose-400/15 text-rose-300 border-rose-400/30",
  },
  {
    stat: "92% auto-resolved",
    context: "support tickets across email + WhatsApp",
    name: "Marco Llovet",
    role: "Head of Ops · beauty DTC",
    initials: "ML",
    avatarTone: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  },
  {
    stat: "Live in 12 days",
    context: "from kickoff to launch, end to end",
    name: "Tomás Vela",
    role: "CEO · fashion brand",
    initials: "TV",
    avatarTone: "bg-amber-400/15 text-amber-300 border-amber-400/30",
  },
  {
    stat: "3.4× more leads",
    context: "qualified and routed automatically",
    name: "Ada Knowles",
    role: "VP Sales · members club",
    initials: "AK",
    avatarTone: "bg-indigo-400/15 text-indigo-300 border-indigo-400/30",
  },
  {
    stat: "$84k closed",
    context: "in one quarter via inbound automation",
    name: "Helena Vrij",
    role: "Founder · skincare brand",
    initials: "HV",
    avatarTone: "bg-cyan-400/15 text-cyan-300 border-cyan-400/30",
  },
  {
    stat: "24/7 voice agent",
    context: "answering calls in two languages",
    name: "Rafa Cisneros",
    role: "GM · members club",
    initials: "RC",
    avatarTone: "bg-fuchsia-400/15 text-fuchsia-300 border-fuchsia-400/30",
  },
];

const capabilities = [
  { Icon: Mail, label: "Email", category: "Channel", desc: "Sequences, replies, newsletters" },
  { Icon: MessageSquare, label: "WhatsApp", category: "Channel", desc: "Auto-replies, broadcasts, support" },
  { Icon: Send, label: "Telegram", category: "Channel", desc: "Bots, channels, notifications" },
  { Icon: AtSign, label: "Instagram", category: "Channel", desc: "DMs, posts, story flows" },
  { Icon: Phone, label: "SMS", category: "Channel", desc: "Reminders, OTP, broadcasts" },
  { Icon: Mic, label: "Voice agents", category: "Channel", desc: "AI that answers your phone" },
  { Icon: Database, label: "CRM", category: "System", desc: "All your leads, one place" },
  { Icon: ShoppingCart, label: "Sales pipeline", category: "System", desc: "From lead to close, automated" },
  { Icon: Users, label: "Lead routing", category: "System", desc: "Right inquiry, right person, fast" },
  { Icon: Headphones, label: "Support agent", category: "System", desc: "24/7 customer answers" },
  { Icon: Globe, label: "Websites & apps", category: "Build", desc: "Premium Next.js builds" },
  { Icon: FileText, label: "Content engine", category: "Build", desc: "Posts, blogs, newsletters at scale" },
];

const services = [
  {
    title: "AI Automation",
    tagline: "Workflows that run themselves.",
    Icon: Workflow,
  },
  {
    title: "Web Design & Development",
    tagline: "Sites that convert and last.",
    Icon: Globe,
  },
  {
    title: "AI & Digital Experience",
    tagline: "The interactive layer.",
    Icon: MessageSquare,
  },
  {
    title: "Brand Architecture",
    tagline: "The system behind the look.",
    Icon: Layers,
  },
  {
    title: "Art Direction",
    tagline: "Cohesion across touchpoints.",
    Icon: Palette,
  },
  {
    title: "Creative Production",
    tagline: "Whatever your brand needs, made.",
    Icon: Camera,
  },
];

const features = [
  {
    n: "01",
    title: "Studios that ship.",
    description:
      "Most agencies disappear after the kickoff and resurface at the deadline. We work out loud. You see what we ship, when we ship it, every day.",
    visual: { kind: "compare" },
    mascot: "duo-laptop.png",
    mascotAlt: "Kiro and Orbit working together on a laptop",
  },
];

const trackerDashboard = {
  title: "Sprint 03 · Build",
  status: "Day 7 of 14",
  metrics: [
    { label: "Shipped", value: "12", trend: "4 this week", trendUp: true },
    { label: "In progress", value: "5", trend: "On track", trendUp: true },
    { label: "In review", value: "3", trend: "Today", trendUp: true },
    { label: "Days to launch", value: "7", trend: "On schedule", trendUp: true },
  ],
  activity: [
    { who: "Homepage hero · final", action: "Approved & live", status: "ok" as const },
    { who: "Lead automation v2", action: "Running in prod", status: "ok" as const },
    { who: "Email templates · 6 variants", action: "In review with you", status: "warn" as const },
    { who: "Brand voice document", action: "Drafting", status: "ok" as const },
  ],
  activityPool: [
    { who: "Contact form · spam filter", action: "Tuned + deployed", status: "ok" as const },
    { who: "Pricing page · v2 layout", action: "Sent for review", status: "warn" as const },
    { who: "404 page · custom illustration", action: "Live", status: "ok" as const },
    { who: "SEO · meta + structured data", action: "Shipped", status: "ok" as const },
    { who: "Analytics dashboard · setup", action: "Connected", status: "ok" as const },
    { who: "Footer · newsletter signup", action: "Wired to Resend", status: "ok" as const },
  ],
};

const metrics = [
  {
    value: "21",
    label: "hours saved per week",
    suffix: "",
    accent: "text-emerald-400",
    bg: "from-emerald-400/15 via-emerald-400/5",
    target: 21,
  },
  {
    value: "92",
    label: "average satisfaction score",
    suffix: "%",
    accent: "text-primary",
    bg: "from-rose-500/15 via-rose-500/5",
    target: 92,
  },
  {
    value: "14",
    label: "days from idea to live",
    suffix: "",
    accent: "text-amber-400",
    bg: "from-amber-400/15 via-amber-400/5",
    target: 14,
  },
  {
    value: "6",
    label: "disciplines, one studio",
    suffix: "",
    accent: "text-indigo-400",
    bg: "from-indigo-400/15 via-indigo-400/5",
    target: 6,
  },
];

const industries = [
  { name: "Hospitality", description: "Hotels, restaurants, members clubs", gradient: "from-amber-500/40 via-rose-500/20 to-transparent" },
  { name: "Fashion", description: "Brands, ateliers, lookbooks", gradient: "from-rose-500/40 via-fuchsia-500/20 to-transparent" },
  { name: "Beauty & Wellness", description: "Skincare, fitness, supplements", gradient: "from-emerald-400/30 via-teal-400/20 to-transparent" },
  { name: "Real Estate", description: "Developers, agents, listings", gradient: "from-blue-500/40 via-indigo-500/20 to-transparent" },
  { name: "Food & Beverage", description: "Restaurants, DTC food, drinks", gradient: "from-orange-500/40 via-amber-500/20 to-transparent" },
  { name: "Creative & Studios", description: "Photographers, artists, makers", gradient: "from-violet-500/40 via-purple-500/20 to-transparent" },
];

const stack = [
  "OpenAI",
  "Anthropic",
  "Vercel",
  "Next.js",
  "Supabase",
  "Stripe",
  "Resend",
  "n8n",
  "Make",
  "Twilio",
  "Notion",
  "Figma",
];

const process = [
  {
    step: "01",
    title: "Discover",
    description: "A conversation. We map your business, your tools, where AI can actually move the needle.",
    mascot: "orbit-search.png",
    mascotAlt: "Orbit with a magnifying glass, investigating your business",
  },
  {
    step: "02",
    title: "Build",
    description: "Design, automation, dev — in parallel. Daily previews. You stay in the loop the whole way.",
    mascot: "kiro-laptop.png",
    mascotAlt: "Kiro working on a laptop",
  },
  {
    step: "03",
    title: "Ship & Refine",
    description: "Launch live. Then we keep monitoring, refining, and expanding as your business grows.",
    mascot: "fist-bump.png",
    mascotAlt: "Kiro and Orbit celebrating with a fist bump",
  },
];

const testimonials = [
  {
    quote:
      "Collaborating with GilyStudios transformed our digital presence. Their ability to merge storytelling, design, and technology is unmatched.",
    author: "Amanda Reed",
    role: "Manager",
  },
  {
    quote:
      "Working with GilyStudios was an experience beyond expectations. Worthy of a global luxury brand.",
    author: "Emily Ronda",
    role: "CEO, NexaTech",
  },
];

function EyebrowTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-medium text-muted-foreground backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_currentColor] text-primary" />
      {children}
    </span>
  );
}

function FeatureVisualCodeOLD({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-6 h-full font-mono text-xs leading-relaxed shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${line.startsWith("//") ? "text-muted-foreground" : line.startsWith("$") ? "text-emerald-400" : line === "" ? "h-2" : "text-foreground/85"}`}
          >
            {line || " "}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureVisualDiagram() {
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="relative rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-8 h-full overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="grid grid-cols-3 gap-3 items-center text-[11px]">
          {/* Sources */}
          <div className="space-y-2">
            {["Shopify", "HubSpot", "Stripe"].map((n) => (
              <div key={n} className="rounded-lg bg-foreground/[0.05] border border-border/40 px-2.5 py-2 text-center text-foreground/80 font-medium">
                {n}
              </div>
            ))}
          </div>
          {/* AI node */}
          <div className="flex justify-center">
            <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 border border-primary/40">
              <span className="absolute inset-0 rounded-2xl bg-primary/10 animate-pulse" />
              <span className="relative font-semibold text-primary tracking-tight text-[11px]">AI Layer</span>
            </div>
          </div>
          {/* Outputs */}
          <div className="space-y-2">
            {["Slack alerts", "Email replies", "Notion log"].map((n) => (
              <div key={n} className="rounded-lg bg-foreground/[0.05] border border-border/40 px-2.5 py-2 text-center text-foreground/80 font-medium">
                {n}
              </div>
            ))}
          </div>
        </div>
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <line x1="33%" y1="22%" x2="50%" y2="50%" stroke="rgba(244,63,94,0.3)" strokeWidth="1" />
          <line x1="33%" y1="50%" x2="50%" y2="50%" stroke="rgba(244,63,94,0.5)" strokeWidth="1" />
          <line x1="33%" y1="78%" x2="50%" y2="50%" stroke="rgba(244,63,94,0.3)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="67%" y2="22%" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="67%" y2="50%" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="67%" y2="78%" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
        </svg>
        <div className="mt-5 pt-4 border-t border-border/40 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Custom data layer
        </div>
      </div>
    </div>
  );
}

function FeatureVisualSwatches() {
  const swatches = [
    { bg: "bg-rose-500", code: "#F43F5E", label: "Primary" },
    { bg: "bg-amber-500", code: "#F59E0B", label: "Highlight" },
    { bg: "bg-emerald-500", code: "#10B981", label: "Live" },
    { bg: "bg-zinc-900", code: "#171717", label: "Ground" },
    { bg: "bg-zinc-50", code: "#FAFAFA", label: "Air" },
    { bg: "bg-indigo-500", code: "#6366F1", label: "Cool" },
  ];
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-6 h-full grid grid-cols-3 gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {swatches.map((s) => (
          <div key={s.code} className="rounded-xl overflow-hidden border border-border/40 flex flex-col">
            <div className={`${s.bg} aspect-square`} />
            <div className="px-2 py-2 bg-foreground/[0.03] text-[10px]">
              <p className="font-medium text-foreground/90">{s.label}</p>
              <p className="text-muted-foreground font-mono tabular-nums">{s.code}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureVisualTracker() {
  return <DashboardMockup data={trackerDashboard} />;
}

function FeatureVisualFlow() {
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-5 lg:p-6 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-border/30">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-foreground/20" />
              <span className="h-2 w-2 rounded-full bg-foreground/20" />
              <span className="h-2 w-2 rounded-full bg-foreground/20" />
            </div>
            <span className="text-xs font-medium tracking-tight">Customer support · v3</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Live
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground hidden sm:inline">
            Editor
          </span>
        </div>

        {/* Canvas */}
        <div className="relative" style={{ height: "320px" }}>
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
            {/* Trigger → AI */}
            <path d="M 90,40 C 130,40 130,90 170,90" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" fill="none" />
            {/* AI → branch 1 */}
            <path d="M 280,70 C 320,70 320,30 360,30" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" fill="none" />
            {/* AI → branch 2 */}
            <path d="M 280,90 L 360,90" stroke="rgba(244,63,94,0.5)" strokeWidth="1.5" fill="none" />
            {/* AI → branch 3 */}
            <path d="M 280,110 C 320,110 320,160 360,160" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" fill="none" />
          </svg>

          {/* Trigger node */}
          <div className="absolute top-[24px] left-[8px] inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-medium">New message</span>
          </div>

          {/* AI Classify node */}
          <div className="absolute top-[58px] left-[160px] w-[136px] rounded-2xl bg-foreground/[0.06] border border-border/50 p-3 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">AI Agent</span>
            </div>
            <p className="text-xs font-medium leading-tight">Read intent</p>
            <div className="mt-2 flex items-center gap-1.5 rounded-md bg-foreground/[0.05] px-1.5 py-1">
              <Sparkles className="h-3 w-3 text-primary" strokeWidth={1.5} />
              <span className="text-[10px] text-muted-foreground tabular-nums">Claude 4.7 · 0.4s</span>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-foreground/[0.05] px-1.5 py-1">
              <Database className="h-3 w-3 text-foreground/70" strokeWidth={1.5} />
              <span className="text-[10px] text-muted-foreground">Your docs · synced</span>
            </div>
          </div>

          {/* Branch 1 — Auto reply */}
          <div className="absolute top-[8px] right-[8px] w-[136px] rounded-2xl bg-emerald-400/5 border border-emerald-400/30 p-3">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-emerald-300/80 font-medium">Auto-reply</span>
            </div>
            <p className="text-xs font-medium leading-tight">Common questions</p>
            <p className="text-[10px] text-muted-foreground mt-1.5">89% solved here</p>
          </div>

          {/* Branch 2 — Book call */}
          <div className="absolute top-[70px] right-[8px] w-[136px] rounded-2xl bg-foreground/[0.06] border border-border/50 p-3">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">Action</span>
            </div>
            <p className="text-xs font-medium leading-tight">Book a call</p>
            <p className="text-[10px] text-muted-foreground mt-1.5">Calendar synced</p>
          </div>

          {/* Branch 3 — Handoff */}
          <div className="absolute top-[140px] right-[8px] w-[136px] rounded-2xl bg-amber-400/5 border border-amber-400/30 p-3">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-amber-300/80 font-medium">Handoff</span>
            </div>
            <p className="text-xs font-medium leading-tight">To founder</p>
            <p className="text-[10px] text-muted-foreground mt-1.5">Complex cases only</p>
          </div>

          {/* Sample message bubble (lower portion) */}
          <div className="absolute bottom-[8px] left-[8px] right-[8px] rounded-xl bg-foreground/[0.03] border border-border/40 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium mb-1.5">
              Last conversation
            </p>
            <div className="flex items-start gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/[0.08] text-[9px] font-medium shrink-0">
                L
              </span>
              <p className="text-[11px] text-foreground/80 leading-snug">
                &ldquo;What size is the medium denim? I&apos;m usually a 28.&rdquo;
              </p>
            </div>
            <div className="mt-2 flex items-start gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 border border-primary/30 text-[9px] font-medium text-primary shrink-0">
                AI
              </span>
              <p className="text-[11px] text-foreground/80 leading-snug">
                &ldquo;Hey Lena, our medium runs true to size for 28-29. Here&apos;s the chart →&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>3 outcomes · 5 tools connected</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-300">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            Resolving in 38s avg
          </span>
        </div>
      </div>
    </div>
  );
}

function FeatureVisualCompare() {
  const them = [
    "Disappear after kickoff",
    "Status calls every 2 weeks",
    "Surprise at the deadline",
    "Decks instead of working software",
  ];
  const us = [
    "Daily previews you can touch",
    "We work where you work",
    "Ship something every day",
    "Real software, not slides",
  ];
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-6 lg:p-7 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="grid grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
          <div className="bg-card/60 p-5 lg:p-6 flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
              Most agencies
            </span>
            <ul className="space-y-3">
              {them.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-snug">
                  <span aria-hidden className="mt-1.5 h-[3px] w-3 bg-muted-foreground/40 shrink-0 rounded-full" />
                  <span className="line-through decoration-muted-foreground/40">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card/60 p-5 lg:p-6 flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.18em] text-primary font-medium">
              GilyStudios
            </span>
            <ul className="space-y-3">
              {us.map((t, i) => (
                <li
                  key={t}
                  className="flex items-start gap-2.5 text-sm text-foreground leading-snug"
                >
                  <span aria-hidden className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-primary text-[11px] shrink-0">
                    ✓
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-border/30 text-[11px] text-muted-foreground leading-relaxed">
          You see the work happen, not just the result.
        </div>
      </div>
    </div>
  );
}

function FeatureVisualOwnership() {
  const items = [
    { label: "Your code", note: "in your GitHub" },
    { label: "Your designs", note: "in your Figma" },
    { label: "Your automations", note: "on your accounts" },
    { label: "Your data", note: "never touches our servers" },
    { label: "Your brand guide", note: "yours from day one" },
    { label: "Your domain", note: "we never hold it" },
  ];
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-6 lg:p-7 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            Yours, from day one
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            No lock-in
          </span>
        </div>
        <ul className="space-y-2">
          {items.map((it) => (
            <li
              key={it.label}
              className="group flex items-center gap-3 rounded-xl bg-foreground/[0.04] border border-border/40 px-4 py-3 transition-colors duration-300 hover:bg-foreground/[0.06]"
              style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
            >
              <span aria-hidden className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-sm shrink-0">
                ✓
              </span>
              <span className="text-sm font-medium text-foreground/90 flex-1">{it.label}</span>
              <span className="text-xs text-muted-foreground">{it.note}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-border/30 text-[11px] text-muted-foreground leading-relaxed">
          Fire us tomorrow. You keep everything.
        </div>
      </div>
    </div>
  );
}

function FeatureVisualConnections() {
  const sources = [
    { name: "Shopify", desc: "Orders & customers" },
    { name: "HubSpot", desc: "Pipeline & deals" },
    { name: "Stripe", desc: "Payments & subs" },
  ];
  const outputs = [
    { name: "Slack alerts", desc: "Your team sees it" },
    { name: "Email replies", desc: "Customers hear back" },
    { name: "Notion log", desc: "Everything tracked" },
  ];
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="relative rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-7 h-full overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            Your business, connected
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Syncing
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center text-xs">
          <div className="space-y-2.5">
            {sources.map((s) => (
              <div key={s.name} className="rounded-xl bg-foreground/[0.05] border border-border/40 px-3.5 py-3">
                <p className="font-medium text-foreground/90 leading-none">{s.name}</p>
                <p className="text-[10px] text-muted-foreground mt-1 leading-none">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center px-2">
            <div className="relative inline-flex flex-col items-center justify-center h-28 w-28 rounded-3xl bg-primary/15 border border-primary/40 text-center px-2">
              <span className="absolute inset-0 rounded-3xl bg-primary/10 animate-pulse" />
              <span className="relative font-medium text-primary text-[11px] leading-tight">
                AI reads
                <br />
                everything
              </span>
            </div>
          </div>
          <div className="space-y-2.5">
            {outputs.map((s) => (
              <div key={s.name} className="rounded-xl bg-foreground/[0.05] border border-border/40 px-3.5 py-3">
                <p className="font-medium text-foreground/90 leading-none">{s.name}</p>
                <p className="text-[10px] text-muted-foreground mt-1 leading-none">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <line x1="35%" y1="33%" x2="50%" y2="55%" stroke="rgba(244,63,94,0.28)" strokeWidth="1" />
          <line x1="35%" y1="55%" x2="50%" y2="55%" stroke="rgba(244,63,94,0.45)" strokeWidth="1" />
          <line x1="35%" y1="77%" x2="50%" y2="55%" stroke="rgba(244,63,94,0.28)" strokeWidth="1" />
          <line x1="50%" y1="55%" x2="65%" y2="33%" stroke="rgba(52,211,153,0.28)" strokeWidth="1" />
          <line x1="50%" y1="55%" x2="65%" y2="55%" stroke="rgba(52,211,153,0.45)" strokeWidth="1" />
          <line x1="50%" y1="55%" x2="65%" y2="77%" stroke="rgba(52,211,153,0.28)" strokeWidth="1" />
        </svg>
        <p className="mt-6 pt-4 border-t border-border/40 text-[11px] text-muted-foreground leading-relaxed">
          Your tools, talking to each other. No new dashboards to learn.
        </p>
      </div>
    </div>
  );
}

const tools = [
  { name: "OpenAI", category: "AI" },
  { name: "Anthropic", category: "AI" },
  { name: "ChatGPT", category: "AI" },
  { name: "Claude", category: "AI" },
  { name: "ElevenLabs", category: "Voice" },
  { name: "Vercel", category: "Hosting" },
  { name: "Next.js", category: "Framework" },
  { name: "Supabase", category: "Database" },
  { name: "Stripe", category: "Payments" },
  { name: "Shopify", category: "Commerce" },
  { name: "Resend", category: "Email" },
  { name: "Twilio", category: "SMS / voice" },
  { name: "Notion", category: "Docs" },
  { name: "Figma", category: "Design" },
  { name: "n8n", category: "Workflows" },
  { name: "Make", category: "Workflows" },
];

function FeatureVisualTools() {
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-5 lg:p-6 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex items-center justify-between mb-5 px-1">
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            Our working stack
          </span>
          <span className="text-[10px] text-muted-foreground tabular-nums">{tools.length} tools</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-xl bg-foreground/[0.04] border border-border/40 px-3 py-3.5 flex flex-col items-center justify-center gap-1 text-center transition-all duration-300 hover:bg-foreground/[0.07] hover:border-border/80 hover:-translate-y-0.5"
              style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
            >
              <span className="text-sm font-medium tracking-tight text-foreground/90 leading-none">
                {t.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/70 leading-none">
                {t.category}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-5 px-1 text-[11px] text-muted-foreground leading-relaxed">
          Production-grade infrastructure. Your data stays in your accounts. Nothing locked behind us.
        </p>
      </div>
    </div>
  );
}

const workSamples = [
  { title: "Brand systems", note: "Naming, identity, voice", gradient: "from-amber-500/40 via-rose-500/30 to-rose-700/20" },
  { title: "AI automation", note: "Workflows, agents, ops", gradient: "from-rose-400/40 via-fuchsia-500/30 to-purple-600/20" },
  { title: "Web & motion", note: "Sites, animations, video", gradient: "from-emerald-400/40 via-teal-500/30 to-cyan-600/20" },
  { title: "Creative production", note: "Photo, 3D, AI assets", gradient: "from-orange-500/40 via-amber-500/30 to-yellow-700/20" },
];

function FeatureVisualWork() {
  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 h-full">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-5 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">What ships</span>
          <span className="text-[10px] text-muted-foreground">Every project</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {workSamples.map((w) => (
            <article
              key={w.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/40"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient}`} />
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{ background: "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(255,255,255,0.12), transparent 70%)" }}
              />
              <div className="relative h-full p-4 flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/70 font-medium">
                  {w.note}
                </span>
                <p className="text-base font-medium tracking-tight text-foreground leading-tight">
                  {w.title}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 px-2 text-[11px] text-muted-foreground leading-relaxed">
          Every piece ships press-ready. From brand systems to automations to motion.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6">
        <div className="flex items-center gap-6 rounded-full border border-border/60 bg-background/60 backdrop-blur-xl pl-5 pr-1.5 py-1.5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            GilyStudios
            <sup className="text-[8px] ml-0.5 font-normal text-muted-foreground">™</sup>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-xs text-muted-foreground">
            <Link href="#services" className="hover:text-foreground transition-colors duration-200">Services</Link>
            <Link href="#features" className="hover:text-foreground transition-colors duration-200">Why us</Link>
            <Link href="#process" className="hover:text-foreground transition-colors duration-200">Process</Link>
            <Link href="#contact" className="hover:text-foreground transition-colors duration-200">Contact</Link>
          </nav>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground text-background text-xs font-medium pl-3.5 pr-1.5 py-1.5 transition-transform duration-200 active:scale-[0.97]"
            style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
          >
            <span>Start a project</span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-background/15">
              <ArrowUpRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* ─────────── HERO — Centered with demo card ─────────── */}
        <section className="relative min-h-[100dvh] overflow-hidden px-6 md:px-12 lg:px-16 pb-20" style={{ paddingTop: "11rem" }}>
          <HeroVisuals />

          {/* Mascot — right side, near headline level */}
          <div className="hidden lg:block absolute top-[42%] right-6 xl:right-12 z-10 pointer-events-none">
            <Mascot src="hero-greeting.png" alt="Kiro and Orbit waving hello" width={140} float />
          </div>


          <div className="relative mx-auto max-w-[1100px] flex flex-col items-center text-center">
            <FadeIn>
              <EyebrowTag>Creative & AI Studio · est. 2026</EyebrowTag>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mt-7 text-[clamp(2.75rem,8vw,7rem)] font-medium tracking-[-0.04em] leading-[0.92] text-balance">
                Where creativity meets{" "}
                <span className="text-primary italic font-light">automation</span>.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-[1.6] text-balance">
                We design, build, and automate beautiful things. AI workflows, premium
                websites, and digital experiences for any business, from scratch.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="w-full">
              <div className="mt-10">
                <HeroPrompt />
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Or see how it works →
                </Link>
              </div>
              {/* Mobile/tablet mascot — below CTA link */}
              <div className="lg:hidden mt-10 flex justify-center pointer-events-none">
                <Mascot src="hero-greeting.png" alt="Kiro and Orbit waving hello" width={140} float />
              </div>
            </FadeIn>

          </div>
        </section>

        {/* ─────────── KINETIC MARQUEE ─────────── */}
        <div className="relative overflow-hidden border-y border-border/30 py-5 bg-foreground/[0.02]">
          <div className="flex gap-10 whitespace-nowrap animate-[marquee_42s_linear_infinite]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10 items-center text-2xl md:text-3xl font-medium tracking-tight shrink-0">
                <span>AI Automation</span>
                <span className="text-primary">/</span>
                <span>Voice Agents</span>
                <span className="text-primary">/</span>
                <span>Web Development</span>
                <span className="text-primary">/</span>
                <span>Brand Architecture</span>
                <span className="text-primary">/</span>
                <span>Art Direction</span>
                <span className="text-primary">/</span>
                <span>Data Integration</span>
                <span className="text-primary">/</span>
                <span>AI Workers</span>
                <span className="text-primary">/</span>
                <span>Creative Production</span>
                <span className="text-primary">/</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────── VIDEOS — clean strip, no labels ─────────── */}
        <section id="work" className="relative px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
          <FadeIn className="mx-auto max-w-[1100px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["work-01.mp4", "work-02.mp4", "work-03.mp4"].map((src) => (
                <div
                  key={src}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 bg-zinc-950"
                >
                  <video
                    src={`/videos/${src}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ─────────── CAPABILITIES GRID — Everything we automate ─────────── */}
        <section className="relative px-6 md:px-12 lg:px-16 py-20 lg:py-24 border-t border-border/30">
          <FadeIn className="mx-auto max-w-[1100px]">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
                Everything in one place
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                {capabilities.length} + counting
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {capabilities.map((c) => (
                <div
                  key={c.label}
                  className="group relative rounded-2xl bg-foreground/[0.025] border border-border/40 p-4 transition-all duration-300 hover:bg-foreground/[0.05] hover:border-border/70"
                  style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.04] border border-border/40 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <c.Icon className="h-4 w-4 text-foreground" strokeWidth={1.25} />
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                      {c.category}
                    </span>
                  </div>
                  <p className="text-sm font-medium tracking-tight text-foreground leading-tight">
                    {c.label}
                  </p>
                  <p className="mt-1.5 text-[11px] text-muted-foreground leading-snug">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              ...and whatever else your business needs. If it can be automated, we automate it.
            </p>
          </FadeIn>
        </section>

        {/* ─────────── USE CASE TABS ─────────── */}
        <section id="services" className="relative py-28 lg:py-32 px-6 md:px-12 lg:px-16">
          {/* Mascot — right side near headline */}
          <div className="hidden lg:block absolute top-32 right-8 xl:right-16 z-10 pointer-events-none">
            <Mascot src="orbit-front.png" alt="Orbit looking forward" width={140} float />
          </div>
          <div className="mx-auto max-w-[1200px]">
            <FadeIn className="max-w-3xl mb-14">
              {/* Mobile mascot — above headline */}
              <div className="lg:hidden mb-6 flex justify-end pointer-events-none">
                <Mascot src="orbit-front.png" alt="Orbit looking forward" width={130} float />
              </div>
              <EyebrowTag>What we automate</EyebrowTag>
              <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium tracking-[-0.03em] leading-[1.02] text-balance">
                One studio. Six disciplines.{" "}
                <span className="text-primary italic font-light">Pick a flow.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-[1.6] max-w-xl">
                Every business has its own bottlenecks. We map yours and build the
                AI workflow that fits.
              </p>
            </FadeIn>

            <UseCaseTabs />
          </div>
        </section>

        {/* ─────────── PROOF TILES — transparent glass + horizontal marquee ─────────── */}
        <section className="relative py-24 lg:py-28 border-t border-border/30 overflow-hidden">
          {/* Mascot — top right peek */}
          <div className="hidden lg:block absolute top-6 right-8 xl:right-16 z-10 pointer-events-none">
            <Mascot src="duo-pointing.png" alt="Kiro and Orbit pointing at outcomes" width={140} float />
          </div>

          <FadeIn className="px-6 md:px-12 lg:px-16 mb-12">
            <div className="mx-auto max-w-[1400px]">
              {/* Mobile/tablet mascot — above the headline */}
              <div className="lg:hidden mb-6 flex justify-end pointer-events-none">
                <Mascot src="duo-pointing.png" alt="Kiro and Orbit pointing at outcomes" width={130} float />
              </div>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <EyebrowTag>Real outcomes</EyebrowTag>
                  <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-balance max-w-2xl">
                    What people get back.
                  </h2>
                </div>
                <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Selected · 2026
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Marquee track */}
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <div
              className="flex gap-4 w-max"
              style={{ animation: "proof-marquee 48s linear infinite" }}
            >
              {[...proofTiles, ...proofTiles].map((p, i) => (
                <article
                  key={`${p.name}-${i}`}
                  className="group relative w-[300px] sm:w-[340px] shrink-0 rounded-3xl bg-foreground/[0.025] border border-border/50 backdrop-blur-sm overflow-hidden flex flex-col transition-all duration-500 hover:bg-foreground/[0.05] hover:border-border/80"
                  style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
                >
                  <div className="flex-1 p-6 lg:p-7 flex flex-col justify-center min-h-[180px]">
                    <p className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-foreground">
                      {p.stat}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-snug">
                      {p.context}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-6 lg:px-7 py-4 border-t border-border/40">
                    <span
                      aria-hidden
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-medium tracking-tight shrink-0 border ${p.avatarTone}`}
                    >
                      {p.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium tracking-tight truncate text-foreground">
                        {p.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground truncate">
                        {p.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── FEATURE SPOTLIGHTS — Split sections ─────────── */}
        <section id="features" className="px-6 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            {features.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={f.n}
                  className={`py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    i !== 0 ? "border-t border-border/30" : ""
                  }`}
                >
                  <FadeIn className={`relative lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                    {i === 1 && (
                      <div className="hidden md:block absolute -top-10 -right-4 lg:-top-12 lg:-right-8 z-20 pointer-events-none">
                        <Mascot src={f.mascot} alt={f.mascotAlt} width={140} float delay={0.05} />
                      </div>
                    )}
                    {/* Mobile mascot — above the feature heading */}
                    <div className="md:hidden mb-4 flex justify-end pointer-events-none">
                      <Mascot src={f.mascot} alt={f.mascotAlt} width={130} float delay={0.05} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Feature / {f.n}
                    </span>
                    <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-balance">
                      {f.title}
                    </h3>
                    <p className="mt-5 text-base text-muted-foreground leading-[1.65] max-w-md">
                      {f.description}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.1} className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""} relative`}>
                    {f.visual.kind === "compare" && <FeatureVisualCompare />}
                    {f.visual.kind === "flow" && <FeatureVisualFlow />}
                    {f.visual.kind === "ownership" && <FeatureVisualOwnership />}
                    {f.visual.kind === "tracker" && <FeatureVisualTracker />}
                    {f.visual.kind === "tools" && <FeatureVisualTools />}
                    {f.visual.kind === "connections" && <FeatureVisualConnections />}
                    {f.visual.kind === "work" && <FeatureVisualWork />}
                    {i === 0 && (
                      <div className="absolute -top-14 -right-6 z-20 pointer-events-none hidden md:block">
                        <Mascot src={f.mascot} alt={f.mascotAlt} width={140} float delay={0.05} />
                      </div>
                    )}
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─────────── INDUSTRIES GRID ─────────── */}
        {/* ─────────── STACK ─────────── */}
        <section className="relative py-24 lg:py-28 px-6 md:px-12 lg:px-16 border-t border-border/30">
          {/* Desktop mascot — top right corner peek */}
          <div className="hidden lg:block absolute top-6 right-8 xl:right-16 z-10 pointer-events-none">
            <Mascot src="kiro-dashboard.png" alt="Kiro presenting the tools we use" width={140} float />
          </div>
          <div className="mx-auto max-w-[1200px]">
            <FadeIn className="max-w-3xl mb-12">
              {/* Mobile/tablet mascot — above the headline */}
              <div className="lg:hidden mb-6 flex justify-end pointer-events-none">
                <Mascot src="kiro-dashboard.png" alt="Kiro presenting the tools we use" width={130} float />
              </div>
              <EyebrowTag>Stack we ship with</EyebrowTag>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-balance">
                Production-grade tools.{" "}
                <span className="text-primary italic font-light">No fluff.</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {stack.map((tool, i) => (
                <FadeIn key={tool} delay={Math.min(i * 0.03, 0.3)}>
                  <div className="rounded-2xl bg-foreground/[0.03] border border-border/40 h-20 flex items-center justify-center transition-all duration-300 hover:bg-foreground/[0.06] hover:border-border/80"
                    style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
                  >
                    <span className="text-sm font-medium tracking-tight text-foreground/80">{tool}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── SERVICES MINI-GRID ─────────── */}
        <section className="py-24 lg:py-28 px-6 md:px-12 lg:px-16 border-t border-border/30">
          <div className="mx-auto max-w-[1200px]">
            <FadeIn className="max-w-3xl mb-12">
              <EyebrowTag>All disciplines</EyebrowTag>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-balance">
                Six things, done{" "}
                <span className="text-primary italic font-light">obsessively well</span>.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={Math.min(i * 0.04, 0.2)}>
                  <article className="group rounded-2xl bg-foreground/[0.03] border border-border/40 p-6 h-full flex flex-col gap-4 transition-all duration-300 hover:bg-foreground/[0.05] hover:border-border/80"
                    style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.04] border border-border/40">
                        <s.Icon className="h-4 w-4 text-foreground" strokeWidth={1} />
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-[1.55]">{s.tagline}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── PROCESS ─────────── */}
        <section id="process" className="py-28 lg:py-32 px-6 md:px-12 lg:px-16 border-t border-border/30">
          <div className="mx-auto max-w-[1200px]">
            <FadeIn className="max-w-3xl mb-14">
              <EyebrowTag>How it works</EyebrowTag>
              <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium tracking-[-0.03em] leading-[1.02] text-balance">
                Simple, transparent,{" "}
                <span className="text-primary italic font-light">no drama</span>.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 relative">
              {process.map((p, i) => {
                const isLast = i === 2;
                const mascotWidth = isLast ? 130 : 120;
                return (
                  <FadeIn key={p.step} delay={i * 0.07}>
                    <div className="relative flex flex-col gap-4 pt-6">
                      <div className="absolute top-0 right-0 z-10 pointer-events-none flex items-start h-[120px]">
                        <Mascot src={p.mascot} alt={p.mascotAlt} width={mascotWidth} float delay={i * 0.1} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-6xl font-extralight tracking-tight text-foreground/90 tabular-nums">
                          {p.step}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-[1.65] max-w-sm">
                        {p.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────── TESTIMONIALS ─────────── */}
        {/* ─────────── CONTACT ─────────── */}
        <section id="contact" className="relative overflow-hidden py-28 lg:py-32 px-6 md:px-12 lg:px-16 border-t border-border/30">
          <div className="absolute top-6 right-6 lg:top-10 lg:right-12 z-10 pointer-events-none">
            <Mascot src="kiro-idea.png" alt="Kiro with an idea lightbulb" width={140} float />
          </div>
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <FadeIn className="lg:col-span-7">
              <EyebrowTag>Let&apos;s build</EyebrowTag>
              <h2 className="mt-6 text-[clamp(2.75rem,7vw,6rem)] font-medium tracking-[-0.04em] leading-[0.95] text-balance">
                Have an idea?{" "}
                <span className="text-primary italic font-light">Say hi.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-[1.6] max-w-xl">
                Tell us a bit about your business and what you want to build. We reply
                to every message, usually within a day.
              </p>
            </FadeIn>
            <FadeIn className="lg:col-span-5" delay={0.1}>
              <div className="rounded-[1.75rem] bg-foreground/[0.03] border border-border/40 p-1.5">
                <div className="rounded-[calc(1.75rem-0.375rem)] bg-card/60 p-5 lg:p-6 flex flex-col gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  {/* Primary — Email */}
                  <a
                    href="mailto:Gilystudios@gmail.com?subject=New%20project%20%E2%80%94%20GilyStudios"
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-foreground text-background px-5 py-4 transition-all duration-300 active:scale-[0.98]"
                    style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-background/70 shrink-0" strokeWidth={1.75} />
                      <div className="flex flex-col gap-0.5 text-left">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-background/55">Email · usually first</span>
                        <span className="text-sm font-medium">Gilystudios@gmail.com</span>
                      </div>
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/15">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    </span>
                  </a>

                  {/* Secondary — WhatsApp */}
                  <a
                    href="https://wa.me/61404354280?text=Hi%20GilyStudios%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-foreground/[0.05] border border-border/40 px-5 py-4 transition-all duration-300 active:scale-[0.98] hover:bg-foreground/[0.08]"
                    style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-4 w-4 text-emerald-300 shrink-0" strokeWidth={1.75} />
                      <div className="flex flex-col gap-0.5 text-left">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">WhatsApp · fastest</span>
                        <span className="text-sm font-medium">+61 404 354 280</span>
                      </div>
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground/[0.06]">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    </span>
                  </a>

                  {/* Status */}
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80 flex items-center gap-2">
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Replies within a day · 3 of 8 slots open
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/30 py-10 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-foreground tracking-tight text-sm">
              GilyStudios
              <sup className="text-[8px] ml-0.5 font-normal text-muted-foreground">™</sup>
            </span>
            <span className="text-muted-foreground/60">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:Gilystudios@gmail.com" className="hover:text-foreground transition-colors">Email</a>
            <a href="tel:+61404354280" className="hover:text-foreground transition-colors">Phone</a>
            <span className="text-muted-foreground/40">Built in-house</span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes proof-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </>
  );
}
