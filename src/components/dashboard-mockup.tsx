"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export interface DashboardMetric {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
}

export interface DashboardActivity {
  who: string;
  action: string;
  status: "ok" | "pending" | "warn";
  time?: string;
}

export interface DashboardData {
  title: string;
  status: string;
  metrics: DashboardMetric[];
  activity?: DashboardActivity[];
  activityPool?: DashboardActivity[];
}

const TIME_LABELS = ["just now", "1m ago", "3m ago", "6m ago", "11m ago"];

function useLiveActivity(
  pool: DashboardActivity[] | undefined,
  initial: DashboardActivity[] | undefined
) {
  const [items, setItems] = useState<DashboardActivity[]>(initial ?? []);

  useEffect(() => {
    if (!pool || pool.length === 0) return;
    let cursor = 0;
    const interval = setInterval(() => {
      const next = pool[cursor % pool.length];
      cursor += 1;
      setItems((prev) => [{ ...next }, ...prev].slice(0, 4));
    }, 3400);
    return () => clearInterval(interval);
  }, [pool]);

  return items.map((item, i) => ({
    ...item,
    time: TIME_LABELS[i] ?? `${(i + 1) * 4}m ago`,
  }));
}

export function DashboardMockup({ data }: { data: DashboardData }) {
  const liveItems = useLiveActivity(data.activityPool, data.activity);
  const displayItems = data.activityPool ? liveItems : data.activity ?? [];

  return (
    <div className="rounded-[1.5rem] bg-foreground/[0.03] border border-border/40 p-1.5 overflow-hidden">
      <div className="rounded-[calc(1.5rem-0.375rem)] bg-card/80 p-5 lg:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {/* Header — centered title + live badge */}
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <h4 className="text-base font-medium tracking-tight text-foreground">
            {data.title}
          </h4>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-medium tracking-wide text-emerald-300 shrink-0">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {data.status}
          </span>
        </div>

        {/* Metric cards — uniform, no sparklines */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
          {data.metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center justify-center text-center gap-2 rounded-xl bg-foreground/[0.04] border border-border/40 px-4 py-5 min-h-[110px]"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium leading-none">
                {m.label}
              </p>
              <p className="text-3xl font-medium tracking-tight tabular-nums leading-none">
                {m.value}
              </p>
              {m.trend && (
                <p
                  className="text-[10px] tabular-nums leading-none"
                  style={{
                    color: m.trendUp ? "rgb(52, 211, 153)" : "rgb(244, 63, 94)",
                  }}
                >
                  {m.trendUp ? "↑" : "↓"} {m.trend} since last week
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Live activity feed */}
        {displayItems.length > 0 && (
          <div className="rounded-xl bg-foreground/[0.02] border border-border/30 overflow-hidden">
            <div className="px-4 py-2.5 border-b border-border/30 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                Recent activity
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-300">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Live
              </span>
            </div>
            <div className="relative">
              <AnimatePresence initial={false} mode="popLayout">
                {displayItems.map((a, i) => (
                  <motion.div
                    key={`${a.who}-${a.action}-${i}`}
                    layout
                    initial={{ opacity: 0, y: -16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{
                      layout: { duration: 0.55, ease: [0.19, 1, 0.22, 1] },
                      opacity: { duration: 0.45, ease: [0.19, 1, 0.22, 1] },
                      y: { duration: 0.55, ease: [0.19, 1, 0.22, 1] },
                      scale: { duration: 0.45, ease: [0.19, 1, 0.22, 1] },
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-xs border-b border-border/15 last:border-b-0"
                  >
                    <span
                      className={`relative inline-flex h-2 w-2 shrink-0 rounded-full ${
                        a.status === "ok"
                          ? "bg-emerald-400"
                          : a.status === "warn"
                          ? "bg-amber-400"
                          : "bg-muted-foreground/50"
                      }`}
                    >
                      {i === 0 && (
                        <span
                          className={`absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping ${
                            a.status === "ok"
                              ? "bg-emerald-400"
                              : a.status === "warn"
                              ? "bg-amber-400"
                              : "bg-muted-foreground/50"
                          }`}
                        />
                      )}
                    </span>
                    <span className="font-medium text-foreground truncate flex-1 min-w-0">
                      {a.who}
                    </span>
                    <span className="text-muted-foreground truncate hidden sm:inline">
                      {a.action}
                    </span>
                    <span className="text-muted-foreground/70 tabular-nums shrink-0 text-[10px] w-[64px] text-right">
                      {a.time}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
