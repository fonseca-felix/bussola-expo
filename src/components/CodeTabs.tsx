import { useState } from "react";

const TABS = [
  {
    label: "1 · Ligando o sensor",
    code: `import { useEffect, useState } from "react";
import { Magnetometer } from "expo-sensors";

export default function Bussola() {
  const [dados, setDados] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    // 10 leituras por segundo: suave e leve para a bateria
    Magnetometer.setUpdateInterval(100);

    // o "ouvinte" avisa sempre que o celular muda de posicao
    const inscricao = Magnetometer.addListener(setDados);

    // ao sair da tela, desligamos o sensor (evita gasto de bateria)
    return () => inscricao.remove();
  }, []);
}`,
  },
  {
    label: "2 · Ângulo + agulha girando",
    code: `// 1) transforma os dois eixos em um angulo de 0 a 360
function calcularAngulo({ x, y }) {
  let angulo = Math.atan2(-x, y) * (180 / Math.PI);
  return (angulo + 360) % 360; // nunca negativo
}

const grau = calcularAngulo(dados);

// 2) gira a imagem da agulha na direcao contraria ao celular
<Image
  source={require("./assets/bussola.png")}
  style={{
    width: 300,
    height: 300,
    transform: [{ rotate: \`\${360 - grau}deg\` }],
  }}
/>

<Text>{grau.toFixed(0)}° — voce esta olhando para {direcao(grau)}</Text>`,
  },
];

export function CodeTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap gap-2 border-b border-border p-3">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === i
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-foreground sm:text-sm">
        <code>{TABS[active]?.code}</code>
      </pre>
    </div>
  );
}
