import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, Moon, Smartphone, Settings, Globe, Ruler, Map, Telescope, Gamepad2, Magnet, Infinity as InfinityIcon, Monitor, CircleHelp, ALargeSmall } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Slide, Bullet, Card } from "@/components/Slide";
import { Compass } from "@/components/Compass";
import { InteractiveCompass } from "@/components/InteractiveCompass";
import { PhoneAxes } from "@/components/PhoneAxes";
import { useTheme } from "@/components/use-theme";
import { useFontSize } from "@/components/use-font-size";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magnetômetro no React Native — Seminário Félix & Mauro" },
      {
        name: "description",
        content:
          "Apresentação interativa com parallax sobre o magnetômetro (bússola) usando expo-sensors no React Native.",
      },
      { property: "og:title", content: "Desvendando o Magnetômetro no Celular" },
      {
        property: "og:description",
        content:
          "Como transformar seu smartphone em uma bússola com React Native e Expo — seminário de Desenvolvimento Mobile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Apresentacao,
});

const SLIDES = [
  "capa",
  "o-que-e",
  "eixos",
  "usos",
  "instalacao",
  "matematica",
  "simulador",
  "desafios",
  "conclusao",
];

function Apresentacao() {
  const { theme, toggle } = useTheme();
  const { cycleSize } = useFontSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((i: number) => {
    const idx = Math.max(0, Math.min(SLIDES.length - 1, i));
    const el = document.getElementById(SLIDES[idx] ?? "capa");
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

      {/* Botões do Topo (Tema e Teoria) */}
      <div className="fixed right-5 top-5 z-30 flex items-center gap-3">
        <Link
          to="/teoria"
          className="panel grid h-12 place-items-center px-4 font-display font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          +teoria
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
        <Slide id="capa" index={1}>
          <div className="text-center">
            <span className="tag-chip">Seminário de Desenvolvimento Mobile</span>
            <h1
              className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-7xl glow-text"
              style={{ transform: `translateY(${scroll * 0.12}px)` }}
            >
              Desvendando o Magnetômetro no Celular
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Como transformar seu smartphone em uma bússola com React Native e Expo
            </p>
            <p className="mt-8 font-display text-xl font-semibold text-primary">Félix &amp; Mauro</p>
            <div className="mt-6 flex justify-center">
              <span className="tag-chip flex items-center gap-2">
                <Smartphone size={16} /> Testado no Xiaomi Redmi Note 12 com Expo Go
              </span>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ↓ role a página · setas navegam · T = tema · F = tela cheia
            </p>
          </div>
        </Slide>

        {/* 2 */}
        <Slide id="o-que-e" index={2} kicker="Sem complicação" title="O que é e como funciona?">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="O que é" icon={<Settings size={24} />}>
              Um componente microscópico dentro da placa do celular que funciona como uma bússola
              digital — imagine uma agulha imantada minúscula dentro do chip.
            </Card>
            <Card title="Como funciona" icon={<Globe size={24} />}>
              A Terra é um ímã gigante. O sensor mede a força e a direção desse campo magnético
              invisível que passa por todos nós.
            </Card>
            <Card title="Unidade de medida" icon={<Ruler size={24} />}>
              Ele devolve números em <strong>microteslas (µT)</strong>, indicando a intensidade do
              campo magnético ao redor do aparelho.
            </Card>
          </div>
        </Slide>

        {/* 3 */}
        <Slide id="eixos" index={3} kicker="Orientação" title="Os três eixos do celular (X, Y e Z)">
          <PhoneAxes />
        </Slide>

        {/* 4 */}
        <Slide id="usos" index={4} kicker="No mundo real" title="Onde isso é usado no dia a dia?">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Google Maps" icon={<Map size={24} />}>
              Sabe exatamente para onde você está virado quando começa a andar a pé — é aquele cone
              azul de direção.
            </Card>
            <Card title="Apps de astronomia" icon={<Telescope size={24} />}>
              No Stellarium você aponta o celular para o céu e ele mostra qual constelação está
              naquela direção.
            </Card>
            <Card title="Jogos e Realidade Aumentada" icon={<Gamepad2 size={24} />}>
              Orienta a mira ou o cenário 3D conforme o jogador gira o próprio corpo.
            </Card>
          </div>
        </Slide>

        {/* 5 */}
        <Slide id="instalacao" index={5} kicker="Mão na massa" title="Como colocar no projeto Expo?">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="panel p-6">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Instalação em um comando
              </p>
              <pre className="mt-4 overflow-x-auto rounded-lg bg-secondary p-4 font-mono text-sm text-foreground">
                <code>npx expo install expo-sensors</code>
              </pre>
            </div>
            <ul className="space-y-4">
              <Bullet>
                <strong>Super vantagem:</strong> não precisa pedir aquela permissão chata na tela
                (como câmera ou GPS). O acesso ao magnetômetro é livre no Android e no iOS.
              </Bullet>
              <Bullet>
                <strong>Como o código escuta o sensor:</strong> ativamos um “ouvinte” (listener) que
                avisa o app toda vez que o celular muda de posição.
              </Bullet>
            </ul>
          </div>
        </Slide>

        {/* 6 */}
        <Slide id="matematica" index={6} kicker="Explicada fácil" title="A matemática da bússola">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <ul className="space-y-4">
                <Bullet>
                  <strong>O desafio:</strong> o sensor dá dois números (X e Y), mas precisamos de um
                  ângulo de 0° a 360°.
                </Bullet>
                <Bullet>
                  <strong>O truque:</strong> a função{" "}
                  <span className="font-mono text-primary">Math.atan2(-x, y)</span> transforma os
                  dois lados em um ângulo em graus.
                </Bullet>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["0° / 360°", "Norte"],
                ["90°", "Leste"],
                ["180°", "Sul"],
                ["270°", "Oeste"],
              ].map(([g, d]) => (
                <div key={d} className="panel p-5 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{g}</p>
                  <p className="mt-1 text-sm font-semibold text-accent">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 7 */}
        <Slide id="simulador" index={7} kicker="Demonstração" title="Bússola interativa">
          <InteractiveCompass />
        </Slide>

        {/* 8 */}
        <Slide id="desafios" index={8} kicker="A verdade do projeto" title="Dificuldades e desafios reais">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Agulha “louca”" icon={<Magnet size={24} />}>
              Capinhas com ímã, mesas de metal e notebooks causam interferência magnética no sensor.
            </Card>
            <Card title="A solução clássica" icon={<InfinityIcon size={24} />}>
              Fazer o movimento em formato de “8” com o celular no ar para calibrar o sensor.
            </Card>
            <Card title="Emulador x celular real" icon={<Monitor size={24} />}>
              Emuladores no PC não têm magnetômetro real. Por isso a demo foi feita no aparelho
              físico (Xiaomi Redmi Note 12).
            </Card>
          </div>
        </Slide>

        {/* 9 */}
        <Slide id="conclusao" index={9} kicker="Fechando" title="Conclusão e dúvidas">
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-4">
              <Bullet>O sensor é leve, rápido e não exige permissões extras.</Bullet>
              <Bullet>Com poucas linhas ele viabiliza recursos essenciais de navegação.</Bullet>
              <Bullet>Funciona melhor longe de metais e com o celular calibrado.</Bullet>
            </ul>
            <div className="panel p-6 text-center">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Código da bússola
              </p>
              <a
                href="https://github.com/fonseca-felix/bussola-expo"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-display text-lg font-bold text-primary underline underline-offset-4"
              >
                github.com/fonseca-felix/bussola-expo
              </a>
              <p className="mt-6 flex items-center justify-center gap-2 font-display text-2xl font-bold">Perguntas? <CircleHelp size={24} /></p>
              <p className="mt-1 text-sm text-muted-foreground">
                Espaço aberto para o professor e a turma.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}
