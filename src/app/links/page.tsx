import type { Metadata } from "next";
import type { ComponentType } from "react";
import { ArrowUpRight, FileText, Globe, LayoutGrid, Mail, MessageSquare } from "lucide-react";
import { MountReveal } from "@/components/mount-reveal";
import { LinkAvatar } from "@/components/link-avatar";

type GlyphProps = { className?: string; strokeWidth?: number };

/** lucide-react v1 no longer ships brand marks. */
function InstagramGlyph({ className, strokeWidth = 1.75 }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface LinkItem {
  href: string;
  label: string;
  /** Small line above the label. Omit to let the label stand on its own. */
  caption?: string;
  icon: ComponentType<GlyphProps>;
  primary?: boolean;
  accent?: string;
  external: boolean;
}

export const metadata: Metadata = {
  title: "Links",
  description:
    "Every GilyStudios link in one place — website, portfolio, the sites we've built, WhatsApp, Instagram and email.",
  robots: { index: false, follow: false },
};

/** How we work — the studio deck. */
const PORTFOLIO_URL =
  "https://drive.google.com/file/d/1Vs6D2Otm-lHplSPQVVJ41hhO1Wk8El48/view?usp=sharing";

const WEBSITES_URL = "/links/websites";

const links: LinkItem[] = [
  {
    href: "https://gilystudios.vercel.app",
    label: "Website",
    caption: "The studio",
    icon: Globe,
    primary: true,
    external: false,
  },
  {
    href: PORTFOLIO_URL,
    label: "Portfolio",
    caption: "How we work",
    icon: FileText,
    accent: "text-amber-300",
    external: true,
  },
  {
    href: WEBSITES_URL,
    label: "Websites we built",
    icon: LayoutGrid,
    accent: "text-violet-300",
    external: false,
  },
  {
    href: "https://wa.me/61404354280?text=Hi%20GilyStudios%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
    label: "WhatsApp · +61 404 354 280",
    caption: "Message me · fastest",
    icon: MessageSquare,
    accent: "text-emerald-300",
    external: true,
  },
  {
    href: "https://instagram.com/santioliveraa",
    label: "@santioliveraa",
    caption: "Instagram · daily work",
    icon: InstagramGlyph,
    accent: "text-rose-300",
    external: true,
  },
  {
    href: "mailto:Gilystudios@gmail.com?subject=New%20project%20%E2%80%94%20GilyStudios",
    label: "Gilystudios@gmail.com",
    caption: "Email · for briefs",
    icon: Mail,
    accent: "text-sky-300",
    external: false,
  },
];

export default function LinksPage() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-[420px]">
        <MountReveal className="flex flex-col items-center text-center" y={12}>
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Creative &amp; AI studio
          </span>

          <div className="mt-7">
            <LinkAvatar src="/images/santi.jpg" alt="Santi Olivera, founder of GilyStudios" />
          </div>

          <h1 className="mt-7 text-[2.25rem] font-medium leading-[1.05] tracking-[-0.04em]">
            GilyStudios
            <sup className="ml-0.5 align-super text-[10px] font-normal text-muted-foreground">™</sup>
          </h1>

          <p className="mt-3 max-w-[19rem] text-[0.95rem] leading-[1.55] text-muted-foreground text-balance">
            Where creativity meets automation. AI workflows, premium websites and
            brand systems — built from scratch.
          </p>

          <p className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Taking on new projects
          </p>
        </MountReveal>

        <div className="mt-10 flex flex-col gap-3">
          {links.map(({ href, label, caption, icon: Icon, primary, accent, external }, i) => (
            <MountReveal key={href} delay={0.08 + i * 0.06} y={14}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={
                  primary
                    ? "group flex min-h-[4.25rem] flex-col items-center justify-center gap-1 rounded-2xl bg-foreground px-5 py-4 text-center text-background transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                    : "group flex min-h-[4.25rem] flex-col items-center justify-center gap-1 rounded-2xl border border-border/40 bg-foreground/[0.04] px-5 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/[0.08] active:scale-[0.98]"
                }
                style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
              >
                {caption ? (
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] ${primary ? "text-background/55" : "text-muted-foreground"}`}
                  >
                    {caption}
                  </span>
                ) : null}
                <span className="flex max-w-full items-center justify-center gap-2">
                  <Icon
                    className={`h-4 w-4 shrink-0 ${primary ? "text-background/70" : accent ?? "text-foreground"}`}
                    strokeWidth={1.75}
                  />
                  <span className="truncate text-sm font-medium">{label}</span>
                  <ArrowUpRight
                    className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${primary ? "text-background/45" : "text-muted-foreground"}`}
                    strokeWidth={1.5}
                  />
                </span>
              </a>
            </MountReveal>
          ))}
        </div>

        <MountReveal delay={0.4} y={10}>
          <p className="mt-10 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            © {new Date().getFullYear()} GilyStudios™ · Built in-house
          </p>
        </MountReveal>
      </div>
    </main>
  );
}
