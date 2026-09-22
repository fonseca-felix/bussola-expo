import type { ReactNode } from "react";

type SlideProps = {
  id: string;
  index: number;
  title?: string;
  kicker?: string;
  children: ReactNode;
};

export function Slide({ id, index, title, kicker, children }: SlideProps) {
  return (
    <section
      id={id}
      data-slide={index}
      className="relative flex min-h-screen w-full snap-start items-center justify-center px-5 py-24 sm:px-10"
    >
      <div className="w-full max-w-5xl">
        {(kicker || title) && (
          <header className="mb-8">
            {kicker && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {String(index).padStart(2, "0")} · {kicker}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-base leading-relaxed text-foreground sm:text-lg">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      <span className="min-w-0">{children}</span>
    </li>
  );
}

export function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="panel p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-3 flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</p>
    </div>
  );
}
