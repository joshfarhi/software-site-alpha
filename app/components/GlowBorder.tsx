"use client";

import { useRef, useState, type ReactNode, type HTMLAttributes } from "react";

type GlowBorderProps = {
  children: ReactNode;
  radius?: string;
  proximity?: number; // px beyond bounds to keep active
  movementDuration?: number; // seconds
  borderWidth?: number; // px
  className?: string;
  disabled?: boolean;
  contentClassName?: string; // classes for inner content wrapper
} & HTMLAttributes<HTMLDivElement>;

export default function GlowBorder({
  children,
  radius = "1.5rem",
  proximity = 24,
  movementDuration = 2,
  borderWidth = 1,
  className = "",
  disabled = false,
  contentClassName = "bg-card ring-1 ring-border",
  ...rest
}: GlowBorderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  }

  function onMouseLeave() {
    if (disabled) return;
    setCoords({ x: -proximity, y: -proximity });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative rounded-[var(--glow-radius)] p-[var(--glow-border)] ${className} group`}
      style={{
        ["--glow-radius" as any]: radius,
        ["--glow-border" as any]: `${borderWidth}px`,
        ["--glow-x" as any]: `${coords.x}px`,
        ["--glow-y" as any]: `${coords.y}px`,
        ["--glow-duration" as any]: `${movementDuration}s`,
      }}
      {...rest}
    >
      {/* Glow layer - masked to show as border only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-[max(var(--glow-border),1px)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            disabled
              ? "linear-gradient(90deg, var(--color-border), var(--color-border))"
              : "radial-gradient(240px circle at var(--glow-x) var(--glow-y), color-mix(in oklab, var(--color-primary), transparent 60%), transparent 60%), conic-gradient(from 0deg, var(--color-accent), var(--color-primary), var(--color-accent))",
          transition: `background-position var(--glow-duration) ease-out`,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        } as React.CSSProperties}
      />

      {/* Content */}
      <div className={`relative rounded-[calc(var(--glow-radius)-var(--glow-border))] ${contentClassName} ring-1 ring-border`}> 
        {children}
      </div>
    </div>
  );
}


