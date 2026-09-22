import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Slide, Bullet, Card } from "@/components/Slide";
import { Compass } from "@/components/Compass";
import { useTheme } from "@/components/use-theme";
import { useFontSize } from "@/components/use-font-size";
import { Sun, Moon, Globe, Magnet, TriangleAlert, ALargeSmall } from "lucide-react";

export const Route = createFileRoute("/teoria")({
  head: () => ({
    meta: [
      { title: "Aprofundamento Teórico: Magnetômetro" },
    ],
  }),
  component: TeoriaPage,
});

const SLIDES = [
  "capa-teoria",
  "efeito-hall",
  "microteslas",
  "espaco-3d",
  "ponte-react",
];

function TeoriaPage() {
  const { theme, toggle } = useTheme();
  const { cycleSize } = useFontSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((i: number) => {
    const idx = Math.max(0, Math.min(SLIDES.length - 1, i));
    const el = document.getElementById(SLIDES[idx] ?? "capa-teoria");
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      setScroll(el.scrollTop);
      setCurrent(Math.round(el.scrollTop / el.clientHeight));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        goTo(current + 1);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goTo(current - 1);
      } else if (e.key.toLowerCase() === "t") {
        toggle();
      } else if (e.key.toLowerCase() === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(() => {});
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo, toggle]);

  const rotation = scroll * 0.09;

  return (
    <div className="relative h-screen overflow-hidden bg-background">
      {/* Camadas de parallax */}
      <div
        className="pointer-events-none fixed inset-0 grid-bg opacity-70"
        style={{ transform: `translateY(${scroll * -0.08}px)` }}
      />
      <div
        className="pointer-events-none fixed left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--glow), transparent 65%)",
          transform: `translate(-50%, calc(-50% + ${scroll * -0.15}px))`,
        }}
      />
      <div
        className="pointer-events-none fixed right-6 top-1/2 hidden -translate-y-1/2 opacity-30 lg:block"
        style={{ transform: `translateY(calc(-50% + ${scroll * -0.05}px))` }}
      >
        <Compass angle={rotation} size={520} />
      </div>

      {/* Botões do Topo */}
      <div className="fixed right-5 top-5 z-30 flex items-center gap-3">
        <Link
          to="/"
          className="panel grid h-12 place-items-center px-4 font-display font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          &larr; Voltar
        </Link>
        <button
          onClick={cycleSize}
          aria-label="Mudar tamanho da fonte"
          className="panel grid h-12 w-12 place-items-center text-xl transition-transform hover:scale-105"
        >
          <ALargeSmall size={20} />
        </button>
        <button
          onClick={toggle}
          aria-label="Alternar tema claro e escuro"
          className="panel grid h-12 w-12 place-items-center text-xl transition-transform hover:scale-105"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Menu de bolinhas */}
      <nav className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
        {SLIDES.map((s, i) => (
          <button
            key={s}
            onClick={() => goTo(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            className={`h-3 w-3 rounded-full border border-primary transition-all ${
              current === i ? "scale-125 bg-primary" : "bg-transparent hover:bg-primary/40"
            }`}
          />
        ))}
      </nav>

      {/* Barra de progresso */}
      <div className="fixed left-0 top-0 z-30 h-1 w-full bg-transparent">
        <div
          className="h-full bg-accent transition-[width] duration-150"
          style={{ width: `${(current / (SLIDES.length - 1)) * 100}%` }}
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        {/* 1 — Capa */}
        <Slide id="capa-teoria" index={1}>
          <div className="text-center">
            <span className="tag-chip">Seminário: Aprofundamento Teórico</span>
            <h1
              className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-7xl glow-text"
              style={{ transform: `translateY(${scroll * 0.12}px)` }}
            >
              Como o celular sente o magnetismo?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A ponte entre a física dos semicondutores e o código no React Native
            </p>
            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ↓ role a página · setas navegam · T = tema
            </p>
          </div>
        </Slide>

        {/* 2 — Efeito Hall */}
        <Slide id="efeito-hall" index={2} kicker="A Física" title="O Efeito Hall">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="leading-relaxed text-lg">
                O magnetômetro moderno <strong>não tem peças móveis</strong>. Em vez disso, ele usa o princípio físico chamado <em>Efeito Hall</em> (descoberto em 1889).
              </p>
              <ul className="space-y-4">
                <Bullet>
                  Dentro do chip, há um material semicondutor por onde passa uma corrente elétrica constante.
                </Bullet>
                <Bullet>
                  Quando o campo magnético da Terra atravessa o chip, ele exerce a <strong>Força de Lorentz</strong>, empurrando os elétrons para um lado.
                </Bullet>
              </ul>
            </div>
            <div className="panel p-6 flex flex-col justify-center">
              <h3 className="font-display text-xl font-bold text-primary mb-2">A Tensão de Hall</h3>
              <p className="text-muted-foreground">
                Esse acúmulo de elétrons de um lado gera uma pequena voltagem. O celular lê essa voltagem para "sentir" a força magnética, transformando magnetismo em eletricidade.
              </p>
            </div>
          </div>
        </Slide>

        {/* 3 — Microteslas */}
        <Slide id="microteslas" index={3} kicker="Unidade de Medida" title="Microteslas (µT)">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Campo Terrestre" icon={<Globe size={24} />}>
              O campo magnético natural da Terra varia aproximadamente entre <strong>25 e 65 µT</strong> dependendo da sua localização geográfica.
            </Card>
            <Card title="Interferências" icon={<Magnet size={24} />}>
              Um ímã de geladeira comum possui cerca de <strong>5.000 µT</strong>. Muito mais forte que a Terra!
            </Card>
            <Card title="Descalibração" icon={<TriangleAlert size={24} />}>
              Por isso capinhas de ímã ou notebooks enlouquecem o sensor: o celular lê a força gigante perto dele e ignora o norte da Terra.
            </Card>
          </div>
        </Slide>

        {/* 4 — Espaço 3D */}
        <Slide id="espaco-3d" index={4} kicker="Os Sensores" title="O Espaço 3D">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="panel p-6">
              <h3 className="font-display text-xl font-bold text-primary mb-4">Três Eixos (X, Y, Z)</h3>
              <p className="mb-4">
                Como o mundo é 3D, o celular usa <strong>três sensores Hall</strong> posicionados em ângulos de 90°.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>X:</strong> Esquerda/Direita</li>
                <li><strong>Y:</strong> Cima/Baixo</li>
                <li><strong>Z:</strong> Frente/Trás</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <p className="leading-relaxed text-lg">
                A mágica para criar a interface da bússola 2D é o <code>Math.atan2(-x, y)</code>.
              </p>
              <p className="text-muted-foreground">
                Ele une a força horizontal (X) com a vertical (Y) e nos devolve exatamente o ângulo em graus (0° a 360°) que o celular está apontando.
              </p>
            </div>
          </div>
        </Slide>

        {/* 5 — React Native */}
        <Slide id="ponte-react" index={5} kicker="Software" title="A Ponte com o React Native">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="leading-relaxed">
                Antigamente, era preciso escrever Java/Kotlin (<code>SensorManager</code>) para Android e Swift (<code>CoreMotion</code>) para iOS.
              </p>
              <p className="leading-relaxed">
                O <strong>Expo Sensors</strong> abstrai isso criando uma <em>bridge</em> (ponte) assíncrona.
              </p>
            </div>
            <div className="panel p-6 flex flex-col justify-center">
              <code className="text-primary text-sm font-mono bg-primary/10 p-3 rounded-md mb-4 block">
                Magnetometer.addListener(callback);
              </code>
              <p className="text-muted-foreground">
                Com uma linha, o React ativa o ouvinte nativo. O sistema passa a enviar mudanças de tensão (convertidas em µT) para o JavaScript a cada milissegundo!
              </p>
            </div>
          </div>
        </Slide>

      </div>
    </div>
  );
}
