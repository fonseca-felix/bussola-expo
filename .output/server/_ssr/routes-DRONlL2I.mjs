import { n as __toESM } from "../_runtime.mjs";
import { n as Slot, o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as useFontSize, i as Slide, n as Card, o as useTheme, r as Compass, t as Bullet } from "./use-font-size-CRnWfrEn.mjs";
import { _ as CircleQuestionMark, a as Smartphone, c as Printer, d as Map, f as Magnet, g as Circle, h as Gamepad2, i as Sun, l as Moon, m as Globe, o as Settings, p as Infinity$1, r as Telescope, s as Ruler, t as X, u as Monitor, v as ALargeSmall } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DRONlL2I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function dirName(deg) {
	if (deg >= 337.5 || deg < 22.5) return "Norte";
	if (deg < 67.5) return "Nordeste";
	if (deg < 112.5) return "Leste";
	if (deg < 157.5) return "Sudeste";
	if (deg < 202.5) return "Sul";
	if (deg < 247.5) return "Sudoeste";
	if (deg < 292.5) return "Oeste";
	return "Noroeste";
}
function InteractiveCompass() {
	const ref = (0, import_react.useRef)(null);
	const [angle, setAngle] = (0, import_react.useState)(42);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const update = (clientX, clientY) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = clientX - (r.left + r.width / 2);
		const y = clientY - (r.top + r.height / 2);
		const deg = Math.atan2(x, -y) * 180 / Math.PI;
		setAngle((deg + 360) % 360);
	};
	const rad = (angle - 90) * Math.PI / 180;
	const x = Math.round(Math.cos(rad + Math.PI / 2) * 45 * 10) / 10;
	const y = Math.round(Math.sin(rad + Math.PI / 2) * 45 * 10) / 10;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-center gap-8 md:grid-cols-[auto_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			role: "presentation",
			className: "mx-auto cursor-grab touch-none active:cursor-grabbing",
			onPointerDown: (e) => {
				setDragging(true);
				e.currentTarget.setPointerCapture(e.pointerId);
				update(e.clientX, e.clientY);
			},
			onPointerMove: (e) => dragging && update(e.clientX, e.clientY),
			onPointerUp: () => setDragging(false),
			onPointerCancel: () => setDragging(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
				angle,
				size: 300
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Leitura atual"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-display text-5xl font-bold text-primary glow-text",
					children: [angle.toFixed(0), "°"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xl font-semibold text-accent",
					children: dirName(angle)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-2 gap-3 font-mono text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-secondary p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "x"
							}),
							" = ",
							x,
							" µT"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-secondary p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "y"
							}),
							" = ",
							y,
							" µT"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: [
						"Arraste em volta da bússola: os valores de x e y mudam e o ângulo sai do",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-foreground",
							children: " Math.atan2(-x, y)"
						}),
						"."
					]
				})
			]
		})]
	});
}
var AXES = [
	{
		key: "x",
		label: "Eixo X",
		desc: "Inclinação para os lados: esquerda e direita do aparelho.",
		color: "text-destructive"
	},
	{
		key: "y",
		label: "Eixo Y",
		desc: "Frente e trás: do topo até a base do celular.",
		color: "text-accent"
	},
	{
		key: "z",
		label: "Eixo Z",
		desc: "Perpendicular à tela: algo se aproximando ou se afastando dela.",
		color: "text-primary"
	}
];
function PhoneAxes() {
	const [active, setActive] = (0, import_react.useState)("x");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-center gap-8 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 260 300",
				className: "h-[300px] w-[260px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "85",
						y: "60",
						width: "90",
						height: "180",
						rx: "14",
						className: "fill-card stroke-border",
						strokeWidth: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "93",
						y: "72",
						width: "74",
						height: "150",
						rx: "8",
						className: "fill-secondary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: active === "x" ? "opacity-100" : "opacity-25",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "40",
								y1: "150",
								x2: "220",
								y2: "150",
								className: "stroke-destructive",
								strokeWidth: "3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
								points: "220,150 210,145 210,155",
								className: "fill-destructive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "228",
								y: "155",
								className: "fill-destructive",
								style: { fontSize: 14 },
								children: "X"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: active === "y" ? "opacity-100" : "opacity-25",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "130",
								y1: "270",
								x2: "130",
								y2: "30",
								className: "stroke-accent",
								strokeWidth: "3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
								points: "130,30 125,40 135,40",
								className: "fill-accent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "138",
								y: "34",
								className: "fill-accent",
								style: { fontSize: 14 },
								children: "Y"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: active === "z" ? "opacity-100" : "opacity-25",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "130",
								y1: "150",
								x2: "215",
								y2: "70",
								className: "stroke-primary",
								strokeWidth: "3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
								points: "215,70 203,73 209,81",
								className: "fill-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "220",
								y: "66",
								className: "fill-primary",
								style: { fontSize: 14 },
								children: "Z"
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [AXES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onMouseEnter: () => setActive(a.key),
				onClick: () => setActive(a.key),
				className: `panel block w-full p-5 text-left transition-transform ${active === a.key ? "-translate-y-0.5 ring-1 ring-primary" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `font-display text-lg font-bold ${a.color}`,
					children: a.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground sm:text-base",
					children: a.desc
				})]
			}, a.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-xl bg-secondary p-4 text-sm text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Na prática:" }),
					" segurando o celular reto na horizontal, a bússola usa principalmente ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: "X"
					}),
					" e ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: "Y"
					}),
					"."
				]
			})]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
function PdfExportDialog({ currentTheme, onThemeChange, currentFontLevel, onFontLevelChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [previewTheme, setPreviewTheme] = (0, import_react.useState)(currentTheme);
	const [previewFont, setPreviewFont] = (0, import_react.useState)(currentFontLevel);
	const handleOpenChange = (isOpen) => {
		if (isOpen) {
			setPreviewTheme(currentTheme);
			setPreviewFont(currentFontLevel);
		}
		setOpen(isOpen);
	};
	const handlePrint = () => {
		onThemeChange(previewTheme);
		onFontLevelChange(previewFont);
		setTimeout(() => {
			window.print();
			setOpen(false);
		}, 150);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Opções de Impressão",
				className: "panel grid h-12 w-12 place-items-center text-xl transition-transform hover:scale-105",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { size: 20 })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Exportar PDF" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-medium leading-none",
							children: "Versão do PDF"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
							value: previewTheme,
							onValueChange: (val) => setPreviewTheme(val),
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center space-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
									value: "light",
									id: "pdf-light"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "pdf-light",
									children: "Preto e Branco"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center space-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
									value: "dark",
									id: "pdf-dark"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "pdf-dark",
									children: "Escuro (Original)"
								})]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-sm font-medium leading-none",
							children: ["Tamanho da Fonte: ", previewFont]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							value: [previewFont],
							min: 1,
							max: 5,
							step: 1,
							onValueChange: (vals) => setPreviewFont(vals[0] ?? currentFontLevel)
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-3 mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setOpen(false),
						children: "Cancelar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handlePrint,
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { size: 16 }), " Gerar PDF"]
					})]
				})
			]
		})]
	});
}
var SLIDES = [
	"capa",
	"o-que-e",
	"eixos",
	"usos",
	"instalacao",
	"matematica",
	"simulador",
	"desafios",
	"conclusao"
];
function Apresentacao() {
	const { theme, toggle, setTheme } = useTheme();
	const { cycleSize, level, setLevel } = useFontSize();
	const containerRef = (0, import_react.useRef)(null);
	const [scroll, setScroll] = (0, import_react.useState)(0);
	const [current, setCurrent] = (0, import_react.useState)(0);
	const goTo = (0, import_react.useCallback)((i) => {
		const idx = Math.max(0, Math.min(SLIDES.length - 1, i));
		document.getElementById(SLIDES[idx] ?? "capa")?.scrollIntoView({ behavior: "smooth" });
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfExportDialog, {
						currentTheme: theme,
						onThemeChange: setTheme,
						currentFontLevel: level,
						onFontLevelChange: setLevel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/teoria",
						className: "panel grid h-12 place-items-center px-4 font-display font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "+teoria"
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
						id: "capa",
						index: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tag-chip",
									children: "Seminário de Desenvolvimento Mobile"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-7xl glow-text",
									style: { transform: `translateY(${scroll * .12}px)` },
									children: "Desvendando o Magnetômetro no Celular"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl",
									children: "Como transformar seu smartphone em uma bússola com React Native e Expo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 font-display text-xl font-semibold text-primary",
									children: "Félix & Mauro"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tag-chip flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { size: 16 }), " Testado no Xiaomi Redmi Note 12 com Expo Go"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground",
									children: "↓ role a página · setas navegam · T = tema · F = tela cheia"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "o-que-e",
						index: 2,
						kicker: "Sem complicação",
						title: "O que é e como funciona?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "O que é",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 24 }),
									children: "Um componente microscópico dentro da placa do celular que funciona como uma bússola digital — imagine uma agulha imantada minúscula dentro do chip."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "Como funciona",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { size: 24 }),
									children: "A Terra é um ímã gigante. O sensor mede a força e a direção desse campo magnético invisível que passa por todos nós."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									title: "Unidade de medida",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { size: 24 }),
									children: [
										"Ele devolve números em ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "microteslas (µT)" }),
										", indicando a intensidade do campo magnético ao redor do aparelho."
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "eixos",
						index: 3,
						kicker: "Orientação",
						title: "Os três eixos do celular (X, Y e Z)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAxes, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "usos",
						index: 4,
						kicker: "No mundo real",
						title: "Onde isso é usado no dia a dia?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "Google Maps",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, { size: 24 }),
									children: "Sabe exatamente para onde você está virado quando começa a andar a pé — é aquele cone azul de direção."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "Apps de astronomia",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Telescope, { size: 24 }),
									children: "No Stellarium você aponta o celular para o céu e ele mostra qual constelação está naquela direção."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "Jogos e Realidade Aumentada",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { size: 24 }),
									children: "Orienta a mira ou o cenário 3D conforme o jogador gira o próprio corpo."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "instalacao",
						index: 5,
						kicker: "Mão na massa",
						title: "Como colocar no projeto Expo?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm uppercase tracking-widest text-muted-foreground",
									children: "Instalação em um comando"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "mt-4 overflow-x-auto rounded-lg bg-secondary p-4 font-mono text-sm text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "npx expo install expo-sensors" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bullet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Super vantagem:" }), " não precisa pedir aquela permissão chata na tela (como câmera ou GPS). O acesso ao magnetômetro é livre no Android e no iOS."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bullet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Como o código escuta o sensor:" }), " ativamos um “ouvinte” (listener) que avisa o app toda vez que o celular muda de posição."] })]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "matematica",
						index: 6,
						kicker: "Explicada fácil",
						title: "A matemática da bússola",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bullet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "O desafio:" }), " o sensor dá dois números (X e Y), mas precisamos de um ângulo de 0° a 360°."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bullet, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "O truque:" }),
										" a função",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-primary",
											children: "Math.atan2(-x, y)"
										}),
										" transforma os dois lados em um ângulo em graus."
									] })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [
									["0° / 360°", "Norte"],
									["90°", "Leste"],
									["180°", "Sul"],
									["270°", "Oeste"]
								].map(([g, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "panel p-5 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl font-bold text-primary",
										children: g
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold text-accent",
										children: d
									})]
								}, d))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "simulador",
						index: 7,
						kicker: "Demonstração",
						title: "Bússola interativa",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveCompass, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "desafios",
						index: 8,
						kicker: "A verdade do projeto",
						title: "Dificuldades e desafios reais",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "Agulha “louca”",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnet, { size: 24 }),
									children: "Capinhas com ímã, mesas de metal e notebooks causam interferência magnética no sensor."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "A solução clássica",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infinity$1, { size: 24 }),
									children: "Fazer o movimento em formato de “8” com o celular no ar para calibrar o sensor."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "Emulador x celular real",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { size: 24 }),
									children: "Emuladores no PC não têm magnetômetro real. Por isso a demo foi feita no aparelho físico (Xiaomi Redmi Note 12)."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
						id: "conclusao",
						index: 9,
						kicker: "Fechando",
						title: "Conclusão e dúvidas",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, { children: "O sensor é leve, rápido e não exige permissões extras." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, { children: "Com poucas linhas ele viabiliza recursos essenciais de navegação." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, { children: "Funciona melhor longe de metais e com o celular calibrado." })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel p-6 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm uppercase tracking-widest text-muted-foreground",
										children: "Código da bússola"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://github.com/fonseca-felix/bussola-expo",
										target: "_blank",
										rel: "noreferrer",
										className: "mt-3 inline-block font-display text-lg font-bold text-primary underline underline-offset-4",
										children: "github.com/fonseca-felix/bussola-expo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-6 flex items-center justify-center gap-2 font-display text-2xl font-bold",
										children: ["Perguntas? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { size: 24 })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "Espaço aberto para o professor e a turma."
									})
								]
							})]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { Apresentacao as component };
