import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-start space-y-2 rounded-xl border border-border bg-card p-6 transition duration-200 hover:shadow-sm",
        className,
      )}
    >
      {header ? <div className="mb-2">{header}</div> : null}
      <div className="transition duration-200">
        <div className="h-12 w-12 rounded-lg bg-primary/10 ring-1 ring-primary/30 grid place-items-center text-primary">
          {icon ?? <span>★</span>}
        </div>
        <div className="mt-3 mb-1 font-sans text-xl font-semibold text-foreground">
          {title}
        </div>
        <div className="font-sans text-lg font-normal text-muted-foreground leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
