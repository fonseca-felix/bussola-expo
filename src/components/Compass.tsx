type CompassProps = {
  angle: number;
  size?: number;
  className?: string;
};

const MARKS = Array.from({ length: 72 }, (_, i) => i * 5);

export function Compass({ angle, size = 280, className = "" }: CompassProps) {
  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-full border border-primary/40 bg-card/60"
        style={{ boxShadow: "0 0 60px -20px var(--glow), inset 0 0 40px -25px var(--glow)" }}
      />
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `rotate(${-angle}deg)` }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          {MARKS.map((deg) => {
            const major = deg % 45 === 0;
            const r1 = major ? 78 : 84;
            const rad = ((deg - 90) * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={(100 + r1 * Math.cos(rad)).toFixed(3)}
                y1={(100 + r1 * Math.sin(rad)).toFixed(3)}
                x2={(100 + 92 * Math.cos(rad)).toFixed(3)}
                y2={(100 + 92 * Math.sin(rad)).toFixed(3)}
                stroke="currentColor"
                className={major ? "text-primary" : "text-muted-foreground/50"}
                strokeWidth={major ? 2 : 1}
              />
            );
          })}
          {[
            ["N", 0],
            ["L", 90],
            ["S", 180],
            ["O", 270],
          ].map(([label, deg]) => {
            const rad = (((deg as number) - 90) * Math.PI) / 180;
            return (
              <text
                key={label as string}
                x={(100 + 62 * Math.cos(rad)).toFixed(3)}
                y={(100 + 62 * Math.sin(rad) + 5).toFixed(3)}
                textAnchor="middle"
                className={label === "N" ? "fill-accent" : "fill-muted-foreground"}
                style={{ fontSize: 15, fontWeight: 700 }}
              >
                {label as string}
              </text>
            );
          })}
        </svg>
      </div>

      {/* agulha fixa */}
      <div className="absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <polygon points="100,26 110,100 100,112 90,100" className="fill-destructive" />
          <polygon points="100,174 110,100 100,88 90,100" className="fill-muted-foreground/70" />
          <circle cx="100" cy="100" r="7" className="fill-primary" />
        </svg>
      </div>
    </div>
  );
}
