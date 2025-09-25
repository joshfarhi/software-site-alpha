"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

type ThreeDMarqueeProps = {
  images: { src: string; alt?: string }[];
  className?: string;
};

export default function ThreeDMarquee({ images, className = "" }: ThreeDMarqueeProps) {
  // Split images into 4 rows for a layered 3D grid
  const rows = [0, 1, 2, 3].map((r) => images.filter((_, i) => i % 4 === r));
  const duplicated = rows.map((r) => [...r, ...r]);

  const depths = [-140, -70, 0, 70];
  const durations = [46, 40, 34, 28];

  return (
    <div className={`relative perspective-[1400px] ${className}`}>
      {/* background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px] opacity-[.05]" />
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        {/* Stage: rotate in 3D space to create the isometric board */}
        <div className="[transform-style:preserve-3d] [transform:rotateX(22deg)_rotateZ(-14deg)]">
          {duplicated.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`flex w-[200%] will-change-transform animate-[marquee-scroll_var(--dur)_linear_infinite] hover:[animation-play-state:paused] ${rowIdx % 2 === 0 ? "[animation-direction:normal]" : "[animation-direction:reverse]"}`}
              style={{
                ["--dur" as any]: `${durations[rowIdx]}s`,
                transform: `translateZ(${depths[rowIdx]}px)`,
              } as CSSProperties}
            >
              {row.map((img, i) => (
                <div key={i} className="shrink-0 w-[360px] md:w-[420px] p-6">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-border bg-muted/40 shadow-[0_10px_40px_-10px_rgb(0_0_0_/_.45)]">
                    <Image
                      src={img.src}
                      alt={img.alt || "Product image"}
                      fill
                      sizes="(max-width: 768px) 60vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* soft edge fades */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />
    </div>
  );
}


