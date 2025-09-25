"use client";

import { useRef, useState, type ReactNode, type HTMLAttributes } from "react";
import GlowBorder from "./GlowBorder";

type WobbleCardProps = {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function WobbleCard({
  children,
  containerClassName = "",
  className = "",
  ...rest
}: WobbleCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("translate3d(0,0,0) scale(1)");

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const px = (mx / rect.width) * 2 - 1; // -1..1
    const py = (my / rect.height) * 2 - 1; // -1..1
    const translateX = px * 10; // px
    const translateY = py * 10; // px
    setTransform(`translate3d(${translateX}px, ${translateY}px, 0) scale(1.02)`);
    if (overlayRef.current) {
      overlayRef.current.style.setProperty("--mx", `${mx}px`);
      overlayRef.current.style.setProperty("--my", `${my}px`);
    }
  }

  function handleMouseLeave() {
    setTransform("translate3d(0,0,0) scale(1)");
  }

  return (
    <div className={`group relative ${containerClassName}`} {...rest}>
      <GlowBorder className={`transition-transform duration-200 will-change-transform ${className}`}>
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-3xl p-6 overflow-hidden"
          style={{ transform }}
        >
          <div
            ref={overlayRef}
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(400px circle at var(--mx) var(--my), color-mix(in oklab, var(--color-accent), transparent 70%), transparent 60%)",
            }}
          />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </GlowBorder>
    </div>
  );
}


