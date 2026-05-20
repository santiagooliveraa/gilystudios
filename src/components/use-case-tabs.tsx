"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DashboardMockup, type DashboardData } from "./dashboard-mockup";
import {
  KanbanVisual,
  CalendarVisual,
  ChatVisual,
  BrandKitVisual,
  GalleryVisual,
} from "./tab-visuals";

type VisualKind = "dashboard" | "kanban" | "calendar" | "chat" | "brandkit" | "gallery";

interface UseCase {
  id: string;
  label: string;
  title: string;
  description: string;
  visual: VisualKind;
  dashboard: DashboardData;
}

const TAB_ORDER = ["support", "ops", "content", "brand", "creative", "sales"];

const rawCases: UseCase[] = [
  {
    id: "sales",
    label: "Sales",
    title: "Lead routing on autopilot.",
    description:
      "Inbound inquiries get classified, enriched, and routed in seconds. Your sales team only sees deals that are ready to close.",
    visual: "dashboard",
    dashboard: {
      title: "Sales Pipeline",
      status: "Q3 view",
      metrics: [
        { label: "Open deals", value: "47", trend: "9%", trendUp: true },
        { label: "Avg deal size", value: "$8.4k", trend: "16%", trendUp: true },
        { label: "Close rate", value: "31%", trend: "4%", trendUp: true },
        { label: "Won this month", value: "$92k", trend: "22%", trendUp: true },
      ],
      activity: [
        { who: "Brand X · Series A studio", action: "Proposal sent", status: "ok" },
        { who: "Indie hotel · pre-launch", action: "Closed · $14k", status: "ok" },
        { who: "Skincare DTC · annual", action: "Renewed", status: "ok" },
        { who: "Press inquiry · in review", action: "Awaiting reply", status: "warn" },
      ],
      activityPool: [
        { who: "Members club · onboarding", action: "Kickoff scheduled", status: "ok" },
        { who: "Fashion ATL · brand refresh", action: "Discovery booked", status: "ok" },
        { who: "Pharma startup · long-shot", action: "Not a fit, declined", status: "pending" },
        { who: "Restaurant group · 3 locations", action: "Won · $28k", status: "ok" },
        { who: "Founder portfolio · referral", action: "Intro warm", status: "ok" },
        { who: "Wellness app · stalled", action: "Re-engaging", status: "warn" },
      ],
    },
  },
  {
    id: "ops",
    label: "Operations",
    title: "The boring stuff, handled.",
    description:
      "Order processing, status updates, supplier comms. The back office quietly runs itself while you focus on growth.",
    visual: "kanban",
    dashboard: {
      title: "Ops Pipeline",
      status: "Live",
      metrics: [
        { label: "Orders today", value: "342", trend: "18%", trendUp: true },
        { label: "Avg fulfillment", value: "4.2h", trend: "31%", trendUp: true },
        { label: "On-time rate", value: "98%", trend: "2%", trendUp: true },
        { label: "Hours saved", value: "18h", trend: "9%", trendUp: true },
      ],
      activity: [
        { who: "Order #4921 · Tokyo", action: "Shipped via DHL", status: "ok" },
        { who: "Restock alert · cashmere line", action: "Order placed", status: "ok" },
        { who: "Refund request · #4918", action: "Auto-approved", status: "ok" },
        { who: "Supplier delay flag", action: "Notified ops lead", status: "warn" },
      ],
      activityPool: [
        { who: "Order #5104 · Madrid", action: "Confirmed, shipping today", status: "ok" },
        { who: "Inventory sync · sneakers", action: "Updated across stores", status: "ok" },
        { who: "Customs hold · #5021", action: "Flagged for review", status: "warn" },
        { who: "Wholesale order · Net 30", action: "Invoiced via Stripe", status: "ok" },
        { who: "Subscription renewal × 14", action: "Charged successfully", status: "ok" },
        { who: "Damaged package report", action: "Replacement queued", status: "warn" },
      ],
    },
  },
  {
    id: "content",
    label: "Content",
    title: "Always-on content engine.",
    description:
      "Generate, edit, schedule. Newsletters, blog posts, social. AI drafts the work, you review and approve.",
    visual: "calendar",
    dashboard: {
      title: "Content Engine",
      status: "Live",
      metrics: [
        { label: "Posts this week", value: "23", trend: "14%", trendUp: true },
        { label: "Avg draft time", value: "6m", trend: "42%", trendUp: true },
        { label: "Engagement rate", value: "4.8%", trend: "11%", trendUp: true },
        { label: "Hours saved", value: "26h", trend: "15%", trendUp: true },
      ],
      activity: [
        { who: "Newsletter · Issue 14", action: "Draft ready for review", status: "ok" },
        { who: "Instagram carousel", action: "Scheduled for 6pm", status: "ok" },
        { who: "Blog · trends Q3", action: "In review", status: "warn" },
        { who: "TikTok script · skin routine", action: "Published", status: "ok" },
      ],
      activityPool: [
        { who: "X thread · launch tease", action: "Posted, 2.1k views", status: "ok" },
        { who: "Newsletter Issue 15", action: "Draft generated", status: "ok" },
        { who: "Reel script · BTS", action: "Sent to editor", status: "ok" },
        { who: "LinkedIn post · founder note", action: "Scheduled for Monday", status: "ok" },
        { who: "Email campaign · re-engage", action: "Approved by you", status: "ok" },
        { who: "Brand voice drift detected", action: "Flagged for review", status: "warn" },
      ],
    },
  },
  {
    id: "support",
    label: "Support",
    title: "Support that doesn't sleep.",
    description:
      "Tier-1 questions handled by a custom AI agent trained on your docs and brand voice. Escalates to humans only when it matters.",
    visual: "chat",
    dashboard: {
      title: "Support Agent",
      status: "Live",
      metrics: [
        { label: "Conversations", value: "412", trend: "22%", trendUp: true },
        { label: "Auto-resolved", value: "89%", trend: "6%", trendUp: true },
        { label: "Avg response", value: "14s", trend: "38%", trendUp: true },
        { label: "CSAT", value: "4.7", trend: "0.2", trendUp: true },
      ],
      activity: [
        { who: "Sizing question · denim", action: "Answered with chart", status: "ok" },
        { who: "Order status · #4892", action: "Tracking shared", status: "ok" },
        { who: "Custom request · gift wrap", action: "Escalated to ops", status: "warn" },
        { who: "Returns policy · EU", action: "Answered + linked", status: "ok" },
      ],
      activityPool: [
        { who: "VIP customer · re-stock", action: "Notified when in", status: "ok" },
        { who: "Payment failed · retry", action: "Customer informed", status: "ok" },
        { who: "Allergy concern · ingredients", action: "Escalated to founder", status: "warn" },
        { who: "Shipping ETA query", action: "Quoted from carrier API", status: "ok" },
        { who: "Discount code expired", action: "New code sent", status: "ok" },
        { who: "Press inquiry redirect", action: "Routed to PR", status: "ok" },
      ],
    },
  },
  {
    id: "brand",
    label: "Brand",
    title: "Identity systems that scale.",
    description:
      "Naming, visual identity, voice, design tokens. Designed to feel premium and built so non-designers can use them.",
    visual: "brandkit",
    dashboard: {
      title: "Brand System",
      status: "Live",
      metrics: [
        { label: "Tokens defined", value: "94", trend: "12", trendUp: true },
        { label: "Components", value: "38", trend: "4", trendUp: true },
        { label: "Used this week", value: "1.2k", trend: "19%", trendUp: true },
        { label: "Consistency", value: "98%", trend: "2%", trendUp: true },
      ],
      activity: [
        { who: "Logo · primary lockup", action: "Exported for press kit", status: "ok" },
        { who: "Color · gradient revision", action: "Published to system", status: "ok" },
        { who: "Voice guide · Q3 update", action: "Awaiting approval", status: "warn" },
        { who: "Type pairing · long-form", action: "Locked in system", status: "ok" },
      ],
      activityPool: [
        { who: "Pattern · woven motif v2", action: "Added to library", status: "ok" },
        { who: "Photo treatment · LUT", action: "Distributed to creators", status: "ok" },
        { who: "Card template · holiday", action: "Drafted for review", status: "warn" },
        { who: "Iconography set · 24px", action: "Shipped to Figma", status: "ok" },
        { who: "Tagline · short version", action: "Locked", status: "ok" },
        { who: "Trademark filing · ™ class 35", action: "Submitted", status: "ok" },
      ],
    },
  },
  {
    id: "creative",
    label: "Creative",
    title: "Production without the bottleneck.",
    description:
      "Photography, 3D, video, AI-generated assets. End-to-end production crafted to brand spec, ready to ship.",
    visual: "gallery",
    dashboard: {
      title: "Creative Stack",
      status: "Live",
      metrics: [
        { label: "Assets shipped", value: "47", trend: "21%", trendUp: true },
        { label: "Avg turnaround", value: "2.1d", trend: "33%", trendUp: true },
        { label: "Approval rate", value: "96%", trend: "4%", trendUp: true },
        { label: "Active projects", value: "8", trend: "2", trendUp: true },
      ],
      activity: [
        { who: "Product shoot · S/S drop", action: "Delivered + retouched", status: "ok" },
        { who: "3D render · hero scene", action: "Final approved", status: "ok" },
        { who: "Reel · launch teaser", action: "In post", status: "warn" },
        { who: "AI generation · 24 variants", action: "Top 4 selected", status: "ok" },
      ],
      activityPool: [
        { who: "Brand film · 30s spot", action: "Locked cut delivered", status: "ok" },
        { who: "Lookbook · 18 spreads", action: "PDF ready", status: "ok" },
        { who: "Packaging mock · v3", action: "Sent to print", status: "ok" },
        { who: "Animation loop · web hero", action: "Optimized + shipped", status: "ok" },
        { who: "Photo selects · 240 → 32", action: "Curated by AI + team", status: "ok" },
        { who: "Color grade · winter set", action: "Approved", status: "ok" },
      ],
    },
  },
];

const cases: UseCase[] = TAB_ORDER.map((id) => rawCases.find((c) => c.id === id)!).filter(Boolean);

export function UseCaseTabs() {
  const [active, setActive] = useState(cases[0].id);
  const current = cases.find((c) => c.id === active) ?? cases[0];

  return (
    <div className="w-full">
      {/* Tab strip — horizontal scroll on mobile, single row */}
      <div
        className="-mx-6 md:mx-0 px-6 md:px-0 mb-10 overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
        <div className="flex items-center gap-1.5 w-max md:w-auto md:flex-wrap">
          {cases.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-300 ${
                  isActive
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-5"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.05] text-balance">
              {current.title}
            </h3>
            <p className="mt-5 text-base text-muted-foreground leading-[1.65] max-w-md">
              {current.description}
            </p>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 group"
            >
              See this automation
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground/[0.06] border border-border/40 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </motion.div>

          <motion.div
            key={`demo-${current.id}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7"
          >
            {current.visual === "dashboard" && <DashboardMockup data={current.dashboard} />}
            {current.visual === "kanban" && <KanbanVisual />}
            {current.visual === "calendar" && <CalendarVisual />}
            {current.visual === "chat" && <ChatVisual />}
            {current.visual === "brandkit" && <BrandKitVisual />}
            {current.visual === "gallery" && <GalleryVisual />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
