import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type MovingBorderButtonProps<E extends ElementType> = {
  as?: E;
  children: ReactNode;
  borderRadius?: string;
  duration?: number;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<E>, "className" | "children">;

export function MovingBorderButton<E extends ElementType = "button">(
  props: MovingBorderButtonProps<E>
) {
  const {
    as,
    children,
    borderRadius = "1.75rem",
    duration = 2000,
    containerClassName = "",
    borderClassName = "",
    className = "",
    ...rest
  } = props;

  const Component = (as || "button") as ElementType;

  return (
    <span
      className={`relative inline-flex overflow-hidden p-[2px] rounded-[var(--mb-radius)] ${containerClassName}`}
      style={{
        ["--mb-duration" as any]: `${duration}ms`,
        ["--mb-radius" as any]: borderRadius,
      }}
    >
      <span
        className={`pointer-events-none absolute inset-0 rounded-[inherit] animate-spin [animation-duration:var(--mb-duration)] ${borderClassName}`}
        style={{
          background:
            "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary))",
        }}
      />
      <Component
        className={`relative z-10 rounded-[calc(var(--mb-radius)-2px)] bg-background/80 text-foreground backdrop-blur px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-0 ${className}`}
        {...(rest as any)}
      >
        {children}
      </Component>
    </span>
  );
}

export default MovingBorderButton;


