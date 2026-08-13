"use client";

import Image from "next/image";
import { useState } from "react";

interface LinkAvatarProps {
  src: string;
  alt: string;
  /** Shown when the photo is missing so the page never renders a broken image. */
  fallback?: string;
}

export function LinkAvatar({ src, alt, fallback = "GS" }: LinkAvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-32 w-32 sm:h-36 sm:w-36">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-primary/20 blur-2xl"
      />
      <div className="relative h-full w-full rounded-full p-[1.5px] bg-gradient-to-b from-foreground/25 via-border/40 to-transparent">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
          {failed ? (
            <div className="flex h-full w-full items-center justify-center bg-foreground/[0.05] text-2xl font-medium tracking-[-0.02em] text-muted-foreground">
              {fallback}
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="144px"
              priority
              className="object-cover object-[center_20%]"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
