import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LogoIntro } from "@/components/logo-intro";
import { AmbientBackground } from "@/components/ambient-bg";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gilystudios.vercel.app";
const siteDescription =
  "Creative & AI studio for founders and small brands building from scratch. AI workflows, premium websites, brand systems, motion. From idea to live in days, not months.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GilyStudios™ — Where creativity meets automation",
    template: "%s · GilyStudios™",
  },
  description: siteDescription,
  applicationName: "GilyStudios",
  authors: [{ name: "GilyStudios" }],
  keywords: [
    "AI automation",
    "creative studio",
    "brand design",
    "Next.js development",
    "voice agents",
    "automation agency",
    "premium brand studio",
    "AI workflows",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "GilyStudios",
    title: "GilyStudios™ — Where creativity meets automation",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GilyStudios — Kiro and Orbit, the studio mascots",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GilyStudios™ — Where creativity meets automation",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AmbientBackground />
        <SmoothScroll />
        <LogoIntro />
        {children}
      </body>
    </html>
  );
}
