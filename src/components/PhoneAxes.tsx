import { useState } from "react";

const AXES = [
  {
    key: "x",
    label: "Eixo X",
    desc: "Inclinação para os lados: esquerda e direita do aparelho.",
    color: "text-destructive",
  },
  {
    key: "y",
    label: "Eixo Y",
    desc: "Frente e trás: do topo até a base do celular.",
    color: "text-accent",
  },
  {
    key: "z",
    label: "Eixo Z",
    desc: "Perpendicular à tela: algo se aproximando ou se afastando dela.",
    color: "text-primary",
  },
] as const;

export function PhoneAxes() {
  const [active, setActive] = useState<string>("x");

  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div className="mx-auto">
        <svg viewBox="0 0 260 300" className="h-[300px] w-[260px]">
          <rect
            x="85"
            y="60"
            width="90"
            height="180"
            rx="14"
            className="fill-card stroke-border"
            strokeWidth="2"
          />
          <rect x="93" y="72" width="74" height="150" rx="8" className="fill-secondary" />
          {/* X */}
          <g className={active === "x" ? "opacity-100" : "opacity-25"}>
            <line x1="40" y1="150" x2="220" y2="150" className="stroke-destructive" strokeWidth="3" />
            <polygon points="220,150 210,145 210,155" className="fill-destructive" />
            <text x="228" y="155" className="fill-destructive" style={{ fontSize: 14 }}>
              X
            </text>
          </g>
          {/* Y */}
          <g className={active === "y" ? "opacity-100" : "opacity-25"}>
            <line x1="130" y1="270" x2="130" y2="30" className="stroke-accent" strokeWidth="3" />
            <polygon points="130,30 125,40 135,40" className="fill-accent" />
            <text x="138" y="34" className="fill-accent" style={{ fontSize: 14 }}>
              Y
            </text>
          </g>
          {/* Z */}
          <g className={active === "z" ? "opacity-100" : "opacity-25"}>
            <line x1="130" y1="150" x2="215" y2="70" className="stroke-primary" strokeWidth="3" />
            <polygon points="215,70 203,73 209,81" className="fill-primary" />
            <text x="220" y="66" className="fill-primary" style={{ fontSize: 14 }}>
              Z
            </text>
          </g>
        </svg>
      </div>

      <div className="space-y-3">
        {AXES.map((a) => (
          <button
            key={a.key}
            onMouseEnter={() => setActive(a.key)}
            onClick={() => setActive(a.key)}
            className={`panel block w-full p-5 text-left transition-transform ${
              active === a.key ? "-translate-y-0.5 ring-1 ring-primary" : ""
            }`}
          >
            <p className={`font-display text-lg font-bold ${a.color}`}>{a.label}</p>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">{a.desc}</p>
          </button>
        ))}
        <p className="rounded-xl bg-secondary p-4 text-sm text-foreground">
          <strong>Na prática:</strong> segurando o celular reto na horizontal, a bússola usa
          principalmente <span className="font-mono">X</span> e <span className="font-mono">Y</span>.
        </p>
      </div>
    </div>
  );
}
