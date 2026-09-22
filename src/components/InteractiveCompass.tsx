import { useRef, useState } from "react";
import { Compass } from "./Compass";

function dirName(deg: number) {
  if (deg >= 337.5 || deg < 22.5) return "Norte";
  if (deg < 67.5) return "Nordeste";
  if (deg < 112.5) return "Leste";
  if (deg < 157.5) return "Sudeste";
  if (deg < 202.5) return "Sul";
  if (deg < 247.5) return "Sudoeste";
  if (deg < 292.5) return "Oeste";
  return "Noroeste";
}

export function InteractiveCompass() {
  const ref = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(42);
  const [dragging, setDragging] = useState(false);

  const update = (clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = clientX - (r.left + r.width / 2);
    const y = clientY - (r.top + r.height / 2);
    const deg = (Math.atan2(x, -y) * 180) / Math.PI;
    setAngle((deg + 360) % 360);
  };

  const rad = ((angle - 90) * Math.PI) / 180;
  const x = Math.round(Math.cos(rad + Math.PI / 2) * 45 * 10) / 10;
  const y = Math.round(Math.sin(rad + Math.PI / 2) * 45 * 10) / 10;

  return (
    <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
      <div
        ref={ref}
        role="presentation"
        className="mx-auto cursor-grab touch-none active:cursor-grabbing"
        onPointerDown={(e) => {
          setDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
          update(e.clientX, e.clientY);
        }}
        onPointerMove={(e) => dragging && update(e.clientX, e.clientY)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        <Compass angle={angle} size={300} />
      </div>

      <div className="panel p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Leitura atual</p>
        <p className="mt-2 font-display text-5xl font-bold text-primary glow-text">
          {angle.toFixed(0)}°
        </p>
        <p className="mt-1 text-xl font-semibold text-accent">{dirName(angle)}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-sm">
          <div className="rounded-lg bg-secondary p-3">
            <span className="text-muted-foreground">x</span> = {x} µT
          </div>
          <div className="rounded-lg bg-secondary p-3">
            <span className="text-muted-foreground">y</span> = {y} µT
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Arraste em volta da bússola: os valores de x e y mudam e o ângulo sai do
          <span className="font-mono text-foreground"> Math.atan2(-x, y)</span>.
        </p>
      </div>
    </div>
  );
}
