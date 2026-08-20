import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MountReveal } from "@/components/mount-reveal";

export const metadata: Metadata = {
  title: "Websites we built",
  description: "Live sites built by GilyStudios for nail studios, hair salons, restaurants and cafés.",
  robots: { index: false, follow: false },
};

interface Site {
  name: string;
  category: string;
  description: string;
  /** null until the live URL is ready — the card renders as coming soon. */
  href: string | null;
  /** Screenshot in public/images/sites, 1000x600. */
  shot: string;
  domain: string;
}

const sites: Site[] = [
  {
    name: "Gorgeous Gorgona",
    category: "Nails",
    description: "Russian manicure in Midtown Manhattan, with booking front and centre.",
    href: "https://russiannails.com",
    shot: "/images/sites/gorgona.webp",
    domain: "russiannails.com",
  },
  {
    name: "Mèche Salon",
    category: "Hair",
    description: "Full-service LA salon — stylists, services and online booking.",
    href: "https://mechesalonla.com",
    shot: "/images/sites/meche.webp",
    domain: "mechesalonla.com",
  },
  {
    name: "COQODAQ",
    category: "Restaurant",
    description: "Fried chicken and champagne in New York — menu, room and reservations.",
    href: "https://www.coqodaq.com",
    shot: "/images/sites/coqodaq.webp",
    domain: "coqodaq.com",
  },
  {
    name: "Onyx Coffee Lab",
    category: "Café",
    description: "Roastery, café and barista training, with the shop built in.",
    href: "https://onyxcoffeelab.eu",
    shot: "/images/sites/onyx.webp",
    domain: "onyxcoffeelab.eu",
  },
  {
    name: "Apa Aesthetic",
    category: "Dentistry",
    description: "Cosmetic dentistry — treatments, results and consultations.",
    href: "https://apaaesthetic.com",
    shot: "/images/sites/apa.webp",
    domain: "apaaesthetic.com",
  },
];

function SiteCard({ site }: { site: Site }) {
  const inner = (
    <>
      <div className="relative aspect-[5/3] overflow-hidden rounded-xl bg-card">
        <Image
          src={site.shot}
          alt={`${site.name} website`}
          fill
          sizes="(min-width: 640px) 300px, 90vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
        />
      </div>
      <div className="mt-4 flex flex-1 items-start justify-between gap-3 px-1 pb-1">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {site.category}
          </span>
          <h2 className="mt-1 text-base font-medium tracking-[-0.02em]">{site.name}</h2>
          <p className="mt-1.5 text-[13px] leading-[1.5] text-muted-foreground">
            {site.description}
          </p>
          <p className="mt-auto pt-3 truncate font-mono text-[11px] text-muted-foreground/60">
            {site.domain}
          </p>
        </div>
        {site.href ? (
          <span className="mt-4 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06]">
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </span>
        ) : (
          <span className="mt-4 shrink-0 rounded-full border border-border/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            Soon
          </span>
        )}
      </div>
    </>
  );

  const base =
    "flex h-full flex-col rounded-2xl border border-border/40 bg-foreground/[0.03] p-3 transition-all duration-300";

  if (!site.href) {
    return <div className={`${base} opacity-70`}>{inner}</div>;
  }

  return (
    <a
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${base} hover:-translate-y-0.5 hover:bg-foreground/[0.06] active:scale-[0.99]`}
      style={{ transitionTimingFunction: "var(--ease-out-strong)" }}
    >
      {inner}
    </a>
  );
}

export default function WebsitesPage() {
  return (
    <main className="relative min-h-svh px-6 py-16">
      <div className="mx-auto w-full max-w-[640px]">
        <MountReveal y={12}>
          <Link
            href="/links"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
            Links
          </Link>

          <h1 className="mt-8 text-[clamp(2rem,8vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            Websites we built
          </h1>
          <p className="mt-4 max-w-[30rem] text-[15px] leading-[1.6] text-muted-foreground">
            Real sites for real businesses — booking, menus, galleries and everything
            behind them. Built fast, built to last.
          </p>
        </MountReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sites.map((site, i) => (
            <MountReveal key={site.name} delay={0.1 + i * 0.07} y={16}>
              <SiteCard site={site} />
            </MountReveal>
          ))}
        </div>

        <MountReveal delay={0.45} y={10}>
          <p className="mt-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
            Want one for your business?{" "}
            <a
              href="https://wa.me/61404354280?text=Hi%20GilyStudios%2C%20I%20want%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              WhatsApp us
            </a>
          </p>
        </MountReveal>
      </div>
    </main>
  );
}
