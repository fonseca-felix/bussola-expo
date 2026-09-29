import { n as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-font-size-CRnWfrEn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Slide({ id, index, title, kicker, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		"data-slide": index,
		className: "relative flex min-h-screen w-full snap-start items-center justify-center px-5 py-24 sm:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-5xl",
			children: [(kicker || title) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8",
				children: [kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary",
					children: [
						String(index).padStart(2, "0"),
						" · ",
						kicker
					]
				}), title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-3xl font-bold leading-tight sm:text-5xl",
					children: title
				})]
			}), children]
		})
	});
}
function Bullet({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-3 text-base leading-relaxed text-foreground sm:text-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0",
			children
		})]
	});
}
function Card({ title, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel p-6 transition-transform duration-300 hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-3",
			children: [icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-semibold",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-muted-foreground sm:text-base",
			children
		})]
	});
}
var MARKS = Array.from({ length: 72 }, (_, i) => i * 5);
function Compass({ angle, size = 280, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative select-none ${className}`,
		style: {
			width: size,
			height: size
		},
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 rounded-full border border-primary/40 bg-card/60",
				style: { boxShadow: "0 0 60px -20px var(--glow), inset 0 0 40px -25px var(--glow)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 transition-transform duration-300 ease-out",
				style: { transform: `rotate(${-angle}deg)` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 200 200",
					className: "h-full w-full",
					children: [MARKS.map((deg) => {
						const major = deg % 45 === 0;
						const r1 = major ? 78 : 84;
						const rad = (deg - 90) * Math.PI / 180;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: (100 + r1 * Math.cos(rad)).toFixed(3),
							y1: (100 + r1 * Math.sin(rad)).toFixed(3),
							x2: (100 + 92 * Math.cos(rad)).toFixed(3),
							y2: (100 + 92 * Math.sin(rad)).toFixed(3),
							stroke: "currentColor",
							className: major ? "text-primary" : "text-muted-foreground/50",
							strokeWidth: major ? 2 : 1
						}, deg);
					}), [
						["N", 0],
						["L", 90],
						["S", 180],
						["O", 270]
					].map(([label, deg]) => {
						const rad = (deg - 90) * Math.PI / 180;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: (100 + 62 * Math.cos(rad)).toFixed(3),
							y: (100 + 62 * Math.sin(rad) + 5).toFixed(3),
							textAnchor: "middle",
							className: label === "N" ? "fill-accent" : "fill-muted-foreground",
							style: {
								fontSize: 15,
								fontWeight: 700
							},
							children: label
						}, label);
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 200 200",
					className: "h-full w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
							points: "100,26 110,100 100,112 90,100",
							className: "fill-destructive"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
							points: "100,174 110,100 100,88 90,100",
							className: "fill-muted-foreground/70"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "100",
							cy: "100",
							r: "7",
							className: "fill-primary"
						})
					]
				})
			})
		]
	});
}
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("seminario-theme");
		if (saved === "light" || saved === "dark") setTheme(saved);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("seminario-theme", theme);
	}, [theme]);
	return {
		theme,
		toggle: (0, import_react.useCallback)(() => {
			setTheme((t) => t === "dark" ? "light" : "dark");
		}, []),
		setTheme
	};
}
function useFontSize() {
	const [level, setLevel] = (0, import_react.useState)(3);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("seminario-font-size");
		if (saved) {
			const parsed = parseInt(saved, 10);
			if (parsed >= 1 && parsed <= 5) setLevel(parsed);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const sizes = {
			1: "14px",
			2: "15px",
			3: "16px",
			4: "18px",
			5: "20px"
		};
		root.style.fontSize = sizes[level];
		localStorage.setItem("seminario-font-size", level.toString());
	}, [level]);
	return {
		level,
		cycleSize: (0, import_react.useCallback)(() => {
			setLevel((l) => l >= 5 ? 1 : l + 1);
		}, []),
		setLevel
	};
}
//#endregion
export { useFontSize as a, Slide as i, Card as n, useTheme as o, Compass as r, Bullet as t };
