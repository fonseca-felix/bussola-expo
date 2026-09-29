import { n as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useFontSize, i as Slide, n as Card, o as useTheme, r as Compass, t as Bullet } from "./use-font-size-CRnWfrEn.mjs";
import { f as Magnet, i as Sun, l as Moon, m as Globe, n as TriangleAlert, v as ALargeSmall } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teoria-Cbvorw83.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDES = [
	"capa-teoria",
	"efeito-hall",
	"microteslas",
	"espaco-3d",
	"ponte-react"
];
function TeoriaPage() {
	const { theme, toggle } = useTheme();
	const { cycleSize } = useFontSize();
	const containerRef = (0, import_react.useRef)(null);
	const [scroll, setScroll] = (0, import_react.useState)(0);
	const [current, setCurrent] = (0, import_react.useState)(0);
	const goTo = (0, import_react.useCallback)((i) => {
		const idx = Math.max(0, Math.min(SLIDES.length - 1, i));
		document.getElementById(SLIDES[idx] ?? "capa-teoria")?.scrollIntoView({ behavior: "smooth" });
	}, []);
	(0, import_react.useEffect)(() => {
		const el = containerRef.current;
		if (!el) return;
		const onScroll = () => {
			setScroll(el.scrollTop);
			setCurrent(Math.round(el.scrollTop / el.clientHeight));
		};
		el.addEventListener("scroll", onScroll, { passive: true });
		return () => el.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if ([
				"ArrowDown",
				"ArrowRight",
				"PageDown",
				" "
			].includes(e.key)) {
				e.preventDefault();
				goTo(current + 1);
			} else if ([
				"ArrowUp",
				"ArrowLeft",
				"PageUp"
			].includes(e.key)) {
				e.preventDefault();
				goTo(current - 1);
			} else if (e.key.toLowerCase() === "t") toggle();
			else if (e.key.toLowerCase() === "f") if (document.fullscreenElement) document.exitFullscreen();
			else document.documentElement.requestFullscreen().catch(() => {});
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		current,
		goTo,
		toggle
	]);
	const rotation = scroll * .09;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-screen overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 grid-bg opacity-70",
				style: { transform: `translateY(${scroll * -.08}px)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl",
				style: {
					background: "radial-gradient(circle, var(--glow), transparent 65%)",
					transform: `translate(-50%, calc(-50% + ${scroll * -.15}px))`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed right-6 top-1/2 hidden -translate-y-1/2 opacity-30 lg:block",
				style: { transform: `translateY(calc(-50% + ${scroll * -.05}px))` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
					angle: rotation,
					size: 520
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed right-5 top-5 z-30 flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "panel grid h-12 place-items-center px-4 font-display font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "← Voltar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: cycleSize,
						"aria-label": "Mudar tamanho da fonte",
						className: "panel grid h-12 w-12 place-items-center text-xl transition-transform hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ALargeSmall, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: toggle,
						"aria-label": "Alternar tema claro e escuro",
						className: "panel grid h-12 w-12 place-items-center text-xl transition-transform hover:scale-105",
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 20 })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 sm:flex",
				children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => goTo(i),
					"aria-label": `Ir para o slide ${i + 1}`,
					className: `h-3 w-3 rounded-full border border-primary transition-all ${current === i ? "scale-125 bg-primary" : "bg-transparent hover:bg-primary/40"}`
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed left-0 top-0 z-30 h-1 w-full bg-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent transition-[width] duration-150",
					style: { width: `${current / (SLIDES.length - 1) * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: containerRef,
				className: "relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "capa-teoria",
						index: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tag-chip",
									children: "Seminário: Aprofundamento Teórico"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-7xl glow-text",
									style: { transform: `translateY(${scroll * .12}px)` },
									children: "Como o celular sente o magnetismo?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl",
									children: "A ponte entre a física dos semicondutores e o código no React Native"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground",
									children: "↓ role a página · setas navegam · T = tema"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "efeito-hall",
						index: 2,
						kicker: "A Física",
						title: "O Efeito Hall",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "leading-relaxed text-lg",
									children: [
										"O magnetômetro moderno ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "não tem peças móveis" }),
										". Em vez disso, ele usa o princípio físico chamado ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Efeito Hall" }),
										" (descoberto em 1889)."
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, { children: "Dentro do chip, há um material semicondutor por onde passa uma corrente elétrica constante." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bullet, { children: [
										"Quando o campo magnético da Terra atravessa o chip, ele exerce a ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Força de Lorentz" }),
										", empurrando os elétrons para um lado."
									] })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel p-6 flex flex-col justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold text-primary mb-2",
									children: "A Tensão de Hall"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Esse acúmulo de elétrons de um lado gera uma pequena voltagem. O celular lê essa voltagem para \"sentir\" a força magnética, transformando magnetismo em eletricidade."
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "microteslas",
						index: 3,
						kicker: "Unidade de Medida",
						title: "Microteslas (µT)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									title: "Campo Terrestre",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { size: 24 }),
									children: [
										"O campo magnético natural da Terra varia aproximadamente entre ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "25 e 65 µT" }),
										" dependendo da sua localização geográfica."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									title: "Interferências",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnet, { size: 24 }),
									children: [
										"Um ímã de geladeira comum possui cerca de ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5.000 µT" }),
										". Muito mais forte que a Terra!"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "Descalibração",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { size: 24 }),
									children: "Por isso capinhas de ímã ou notebooks enlouquecem o sensor: o celular lê a força gigante perto dele e ignora o norte da Terra."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "espaco-3d",
						index: 4,
						kicker: "Os Sensores",
						title: "O Espaço 3D",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold text-primary mb-4",
										children: "Três Eixos (X, Y, Z)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mb-4",
										children: [
											"Como o mundo é 3D, o celular usa ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "três sensores Hall" }),
											" posicionados em ângulos de 90°."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-2 text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "X:" }), " Esquerda/Direita"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Y:" }), " Cima/Baixo"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Z:" }), " Frente/Trás"] })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "leading-relaxed text-lg",
									children: [
										"A mágica para criar a interface da bússola 2D é o ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "Math.atan2(-x, y)" }),
										"."
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Ele une a força horizontal (X) com a vertical (Y) e nos devolve exatamente o ângulo em graus (0° a 360°) que o celular está apontando."
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "ponte-react",
						index: 5,
						kicker: "Software",
						title: "A Ponte com o React Native",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "leading-relaxed",
									children: [
										"Antigamente, era preciso escrever Java/Kotlin (",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "SensorManager" }),
										") para Android e Swift (",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "CoreMotion" }),
										") para iOS."
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "leading-relaxed",
									children: [
										"O ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Expo Sensors" }),
										" abstrai isso criando uma ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "bridge" }),
										" (ponte) assíncrona."
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel p-6 flex flex-col justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "text-primary text-sm font-mono bg-primary/10 p-3 rounded-md mb-4 block",
									children: "Magnetometer.addListener(callback);"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Com uma linha, o React ativa o ouvinte nativo. O sistema passa a enviar mudanças de tensão (convertidas em µT) para o JavaScript a cada milissegundo!"
								})]
							})]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { TeoriaPage as component };
