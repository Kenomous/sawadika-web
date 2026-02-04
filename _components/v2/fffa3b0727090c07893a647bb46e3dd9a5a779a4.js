const wa = (i) => import(i), ka = () => Promise.resolve().then(() => ya), { Fragment: ze, jsx: e, jsxs: n } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
const s = globalThis.__GLOBALS__.React, { Children: Na, cloneElement: Sa, Component: Ca, createContext: rt, createElement: Ae, createFactory: Ba, createRef: Ta, forwardRef: it, Fragment: Ra, isValidElement: Aa, lazy: za, memo: Lt, Profiler: Ia, PureComponent: _a, startTransition: Ea, StrictMode: Fa, Suspense: Ma, use: Da, useCallback: ja, useContext: ot, useDebugValue: La, useDeferredValue: Pa, useEffect: ke, useId: $a, useImperativeHandle: Ha, useInsertionEffect: Oa, useLayoutEffect: Wa, useMemo: st, useReducer: qa, useRef: lt, useState: q, useSyncExternalStore: Va, useTransition: Ua, version: Ya } = globalThis.__GLOBALS__.React, Ie = globalThis.__GLOBALS__.getAssetURL("7d430060b52ad00caf731348e0b37642ca6bf1ea.png"), ct = globalThis.__GLOBALS__.getAssetURL("63b12d47caa2cedd8be5a501d8ce32973e3bd7cc.png"), dt = globalThis.__GLOBALS__.getAssetURL("ffc2d0f91eaed506b30a17f8c5b5139640a1cb8e.png"), ut = globalThis.__GLOBALS__.getAssetURL("651c5f82b763a231047b87c94bc121cd03268558.png"), pe = globalThis.__GLOBALS__.getAssetURL("b530c2dbbbd8cd9523663684e3f38c9ec0ed5843.png");
function Pt() {
  return /* @__PURE__ */ e("header", { className: "h-[145px] relative shrink-0 w-full", "data-name": "Header 1", children: /* @__PURE__ */ e("div", { className: "flex flex-row items-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex items-center justify-between px-[64px] py-[24px] relative size-full", children: /* @__PURE__ */ e("div", { className: "h-[109px] relative shrink-0 w-[133px]", "data-name": "logo sw 1", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none size-full", src: Ie }) }) }) }) });
}
function $t() {
  return /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[32px] items-center leading-[0] relative shrink-0 text-center w-full", "data-name": "Text", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f2f2f2] text-[32px] tracking-[-0.64px] w-[740px]", children: /* @__PURE__ */ e("h1", { className: "block leading-[1.1] whitespace-pre-wrap", children: "Trois cuisines    Une seule passion" }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full not-italic relative shrink-0 text-[#b8b8b8] text-[18px] tracking-[-0.09px] w-[min-content]", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] whitespace-pre-wrap", children: "Des recettes venues dâ€™Asie, travaillÃ©es avec exigence et respect du goÃ»t." }) })
  ] });
}
function Ht({ onClick: i }) {
  return /* @__PURE__ */ e("button", { onClick: i, className: "bg-[#c8a24a] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0", "data-name": "Primary button", children: /* @__PURE__ */ e("div", { className: "flex flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.45]", children: "RESERVER" }) }) });
}
function Ot({ onClick: i }) {
  return /* @__PURE__ */ n("button", { onClick: i, className: "content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0", "data-name": "Secondary button", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": "true", className: "absolute border-3 border-[#c8a24a] border-solid inset-[-3px] pointer-events-none rounded-[15px]" }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2f2f2] text-[16px] text-left tracking-[-0.08px] whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.45]", children: "MENU" }) })
  ] });
}
function Wt({ onNavigate: i }) {
  return /* @__PURE__ */ n("div", { className: "content-center cursor-pointer flex flex-wrap gap-[16px] items-center relative shrink-0", "data-name": "Buttons", children: [
    /* @__PURE__ */ e(Ht, { onClick: () => i("reservation") }),
    /* @__PURE__ */ e(Ot, { onClick: () => i("menu") })
  ] });
}
function qt({ onNavigate: i }) {
  return /* @__PURE__ */ e("section", { className: "relative shrink-0 w-full", "data-name": "Hero 1", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center size-full", children: /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[48px] items-center justify-center px-[64px] py-[120px] relative w-full", children: [
    /* @__PURE__ */ e($t, {}),
    /* @__PURE__ */ e(Wt, { onNavigate: i })
  ] }) }) });
}
function Vt() {
  return /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full", "data-name": "Text", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#f2f2f2] text-[24px] tracking-[-0.48px] w-full", children: /* @__PURE__ */ e("h5", { className: "block leading-[1.2] whitespace-pre-wrap", children: "THAI FOOD" }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#b8b8b8] text-[18px] tracking-[-0.09px] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] whitespace-pre-wrap", children: "Une cuisine vive et parfumÃ©e, aux saveurs franches et assumÃ©es." }) })
  ] });
}
function Ut() {
  return /* @__PURE__ */ n("li", { className: "content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]", "data-name": "Card 1", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": "true", className: "aspect-[362.6666564941406/483] relative rounded-[16px] shrink-0 w-full", "data-name": "Image", role: "presentation", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full", src: ct }) }),
    /* @__PURE__ */ e(Vt, {})
  ] });
}
function Yt() {
  return /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full", "data-name": "Text", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#f2f2f2] text-[24px] tracking-[-0.48px] w-full", children: /* @__PURE__ */ e("h5", { className: "block leading-[1.2] whitespace-pre-wrap", children: "SUSHI AND ROLLS" }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#b8b8b8] text-[18px] tracking-[-0.09px] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] whitespace-pre-wrap", children: "Du produit frais, des gestes prÃ©cis, et un vrai sens de lâ€™Ã©quilibre." }) })
  ] });
}
function Gt() {
  return /* @__PURE__ */ n("li", { className: "content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]", "data-name": "Card 2", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": "true", className: "aspect-[362.66668701171875/483] relative rounded-[16px] shrink-0 w-full", "data-name": "Image", role: "presentation", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full", src: dt }) }),
    /* @__PURE__ */ e(Yt, {})
  ] });
}
function Xt() {
  return /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full", "data-name": "Text", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#f2f2f2] text-[24px] tracking-[-0.48px] w-full", children: /* @__PURE__ */ e("h5", { className: "block leading-[1.2] whitespace-pre-wrap", children: "INDIAN FOOD" }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#b8b8b8] text-[18px] tracking-[-0.09px] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] whitespace-pre-wrap", children: "Des Ã©pices maÃ®trisÃ©es, une cuisine riche, profonde et chaleureuse." }) })
  ] });
}
function Kt() {
  return /* @__PURE__ */ n("li", { className: "content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]", "data-name": "Card 3", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": "true", className: "aspect-[362.66668701171875/483] relative rounded-[16px] shrink-0 w-full", "data-name": "Image", role: "presentation", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full", src: ut }) }),
    /* @__PURE__ */ e(Xt, {})
  ] });
}
function Qt() {
  return /* @__PURE__ */ n("ul", { className: "content-stretch flex gap-[32px] items-start justify-center px-[64px] py-[120px] relative shrink-0 w-[1280px]", "data-name": "Feature cards 1", children: [
    /* @__PURE__ */ e(Ut, {}),
    /* @__PURE__ */ e(Gt, {}),
    /* @__PURE__ */ e(Kt, {})
  ] });
}
function Zt({ onNavigate: i }) {
  return /* @__PURE__ */ n("div", { className: "bg-size-[512px_768px] bg-top-left content-stretch flex flex-col items-center relative size-full", "data-name": "Desktop", style: { backgroundImage: `url('${pe}')` }, children: [
    /* @__PURE__ */ e(Pt, {}),
    /* @__PURE__ */ e(qt, { onNavigate: i }),
    /* @__PURE__ */ e(Qt, {})
  ] });
}
function Jt() {
  return /* @__PURE__ */ e("header", { className: "h-[145px] relative shrink-0 w-full", "data-name": "Header 1", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex flex-col items-center p-[24px] relative size-full", children: /* @__PURE__ */ e("div", { className: "h-[109px] relative shrink-0 w-[132px]", "data-name": "logo sw 1", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none size-full", src: Ie }) }) }) }) });
}
function en() {
  return /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-center w-full", "data-name": "Text", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f2f2f2] text-[32px] tracking-[-0.64px] w-full", children: /* @__PURE__ */ n("h1", { className: "whitespace-pre-wrap", children: [
      /* @__PURE__ */ e("span", { className: "leading-[1.1]", children: "Trois cuisines    " }),
      /* @__PURE__ */ e("span", { className: "leading-[1.1] text-[#c8a24a]", children: "Une seule passion" })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#b8b8b8] text-[18px] tracking-[-0.09px] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] whitespace-pre-wrap", children: "Des recettes venues dâ€™Asie, travaillÃ©es avec exigence et respect du goÃ»t." }) })
  ] });
}
function tn({ onClick: i }) {
  return /* @__PURE__ */ e("button", { onClick: i, className: "bg-[#c8a24a] relative rounded-[12px] shrink-0 w-full", "data-name": "Primary button", children: /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full", children: /* @__PURE__ */ e("div", { className: "flex flex-[1_0_0] flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[16px] text-center text-ellipsis text-white tracking-[-0.08px] whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] overflow-hidden", children: "RESERVER" }) }) }) }) });
}
function nn({ onClick: i }) {
  return /* @__PURE__ */ n("button", { onClick: i, className: "relative rounded-[12px] shrink-0 w-full", "data-name": "Secondary button", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": "true", className: "absolute border-3 border-[#c8a24a] border-solid inset-[-3px] pointer-events-none rounded-[15px]" }),
    /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-center size-full", children: /* @__PURE__ */ e("div", { className: "content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full", children: /* @__PURE__ */ e("div", { className: "flex flex-[1_0_0] flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#f2f2f2] text-[16px] text-center text-ellipsis tracking-[-0.08px] whitespace-nowrap", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] overflow-hidden", children: "MENU" }) }) }) })
  ] });
}
function an({ onNavigate: i }) {
  return /* @__PURE__ */ n("div", { className: "content-stretch cursor-pointer flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full", "data-name": "Buttons", children: [
    /* @__PURE__ */ e(tn, { onClick: () => i("reservation") }),
    /* @__PURE__ */ e(nn, { onClick: () => i("menu") })
  ] });
}
function rn({ onNavigate: i }) {
  return /* @__PURE__ */ n("section", { className: "content-stretch flex flex-col gap-[32px] h-[298px] items-center justify-center px-[24px] py-[80px] relative shrink-0 w-[374px]", "data-name": "Hero 1", children: [
    /* @__PURE__ */ e(en, {}),
    /* @__PURE__ */ e(an, { onNavigate: i })
  ] });
}
function on() {
  return /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full", "data-name": "Text", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#f2f2f2] text-[20px] tracking-[-0.3px] w-full", children: /* @__PURE__ */ e("h5", { className: "block leading-[1.2] whitespace-pre-wrap", children: "THAI FOOD" }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#b8b8b8] text-[18px] tracking-[-0.09px] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] whitespace-pre-wrap", children: "Une cuisine vive et parfumÃ©e, aux saveurs franches et assumÃ©es." }) })
  ] });
}
function sn() {
  return /* @__PURE__ */ n("li", { className: "content-stretch flex flex-col gap-[24px] items-start min-w-[224px] relative rounded-[8px] shrink-0 w-full", "data-name": "Card 1", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": "true", className: "aspect-[327/436] relative rounded-[16px] shrink-0 w-full", "data-name": "Image", role: "presentation", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full", src: ct }) }),
    /* @__PURE__ */ e(on, {})
  ] });
}
function ln() {
  return /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full", "data-name": "Text", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#f2f2f2] text-[20px] tracking-[-0.3px] w-full", children: /* @__PURE__ */ e("h5", { className: "block leading-[1.2] whitespace-pre-wrap", children: "SUSHI AND ROLLS" }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#b8b8b8] text-[18px] tracking-[-0.09px] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] whitespace-pre-wrap", children: "Du produit frais, des gestes prÃ©cis, et un vrai sens de lâ€™Ã©quilibre." }) })
  ] });
}
function cn() {
  return /* @__PURE__ */ n("li", { className: "content-stretch flex flex-col gap-[24px] items-start min-w-[224px] relative rounded-[8px] shrink-0 w-full", "data-name": "Card 2", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": "true", className: "aspect-[327/436] relative rounded-[16px] shrink-0 w-full", "data-name": "Image", role: "presentation", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full", src: dt }) }),
    /* @__PURE__ */ e(ln, {})
  ] });
}
function dn() {
  return /* @__PURE__ */ n("div", { className: "content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full", "data-name": "Text", children: [
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#f2f2f2] text-[20px] tracking-[-0.3px] w-full", children: /* @__PURE__ */ e("h5", { className: "block leading-[1.2] whitespace-pre-wrap", children: "INDIAN FOOD" }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#b8b8b8] text-[18px] tracking-[-0.09px] w-full", children: /* @__PURE__ */ e("p", { className: "leading-[1.45] whitespace-pre-wrap", children: "Des Ã©pices maÃ®trisÃ©es, une cuisine riche, profonde et chaleureuse." }) })
  ] });
}
function un() {
  return /* @__PURE__ */ n("li", { className: "content-stretch flex flex-col gap-[24px] items-start min-w-[224px] relative rounded-[8px] shrink-0 w-full", "data-name": "Card 3", children: [
    /* @__PURE__ */ e("div", { "aria-hidden": "true", className: "aspect-[327/436] relative rounded-[16px] shrink-0 w-full", "data-name": "Image", role: "presentation", children: /* @__PURE__ */ e("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full", src: ut }) }),
    /* @__PURE__ */ e(dn, {})
  ] });
}
function pn() {
  return /* @__PURE__ */ n("ul", { className: "content-stretch flex flex-col gap-[48px] h-[1848px] items-start px-[24px] py-[80px] relative shrink-0 w-[374px]", "data-name": "Feature cards 1", children: [
    /* @__PURE__ */ e(sn, {}),
    /* @__PURE__ */ e(cn, {}),
    /* @__PURE__ */ e(un, {})
  ] });
}
function mn({ onNavigate: i }) {
  return /* @__PURE__ */ n("div", { className: "bg-size-[512px_768px] bg-top-left content-stretch flex flex-col items-center relative size-full", "data-name": "Mobile", style: { backgroundImage: `url('${pe}')` }, children: [
    /* @__PURE__ */ e(Jt, {}),
    /* @__PURE__ */ e(rn, { onNavigate: i }),
    /* @__PURE__ */ e(pn, {})
  ] });
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), hn = (i) => i.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, a, l) => l ? l.toUpperCase() : a.toLowerCase()
), Ge = (i) => {
  const r = hn(i);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, pt = (...i) => i.filter((r, a, l) => !!r && r.trim() !== "" && l.indexOf(r) === a).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var gn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = it(
  ({
    color: i = "currentColor",
    size: r = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: l,
    className: b = "",
    children: d,
    iconNode: p,
    ...c
  }, S) => Ae(
    "svg",
    {
      ref: S,
      ...gn,
      width: r,
      height: r,
      stroke: i,
      strokeWidth: l ? Number(a) * 24 / Number(r) : a,
      className: pt("lucide", b),
      ...c
    },
    [
      ...p.map(([u, v]) => Ae(u, v)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = (i, r) => {
  const a = it(
    ({ className: l, ...b }, d) => Ae(xn, {
      ref: d,
      iconNode: r,
      className: pt(
        `lucide-${fn(Ge(i))}`,
        `lucide-${i}`,
        l
      ),
      ...b
    })
  );
  return a.displayName = Ge(i), a;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], xe = V("arrow-left", bn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], mt = V("calendar", yn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ft = V("check", vn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], ht = V("clock", wn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], gt = V("mail", kn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [["path", { d: "M5 12h14", key: "1ays0h" }]], xt = V("minus", Nn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], bt = V("phone", Sn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _e = V("plus", Cn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
], yt = V("shopping-bag", Bn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], vt = V("shopping-cart", Tn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], wt = V("trash-2", Rn);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], kt = V("user", An);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], Nt = V("users", zn), In = globalThis.__GLOBALS__.ReactDOM, { createPortal: Ga, findDOMNode: Xa, flushSync: Ka, hydrate: Qa, render: Za, unmountComponentAtNode: Ja, unstable_batchedUpdates: er, unstable_renderSubtreeIntoContainer: tr, version: nr } = globalThis.__GLOBALS__.ReactDOM;
function _n(i) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = i : a.appendChild(document.createTextNode(i));
}
const En = (i) => {
  switch (i) {
    case "success":
      return Dn;
    case "info":
      return Ln;
    case "warning":
      return jn;
    case "error":
      return Pn;
    default:
      return null;
  }
}, Fn = Array(12).fill(0), Mn = ({ visible: i, className: r }) => /* @__PURE__ */ s.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    r
  ].filter(Boolean).join(" "),
  "data-visible": i
}, /* @__PURE__ */ s.createElement("div", {
  className: "sonner-spinner"
}, Fn.map((a, l) => /* @__PURE__ */ s.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${l}`
})))), Dn = /* @__PURE__ */ s.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ s.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), jn = /* @__PURE__ */ s.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ s.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), Ln = /* @__PURE__ */ s.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ s.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), Pn = /* @__PURE__ */ s.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ s.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), $n = /* @__PURE__ */ s.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ s.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ s.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), Hn = () => {
  const [i, r] = s.useState(document.hidden);
  return s.useEffect(() => {
    const a = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", a), () => window.removeEventListener("visibilitychange", a);
  }, []), i;
};
let je = 1;
class On {
  constructor() {
    this.subscribe = (r) => (this.subscribers.push(r), () => {
      const a = this.subscribers.indexOf(r);
      this.subscribers.splice(a, 1);
    }), this.publish = (r) => {
      this.subscribers.forEach((a) => a(r));
    }, this.addToast = (r) => {
      this.publish(r), this.toasts = [
        ...this.toasts,
        r
      ];
    }, this.create = (r) => {
      var a;
      const { message: l, ...b } = r, d = typeof r?.id == "number" || ((a = r.id) == null ? void 0 : a.length) > 0 ? r.id : je++, p = this.toasts.find((S) => S.id === d), c = r.dismissible === void 0 ? !0 : r.dismissible;
      return this.dismissedToasts.has(d) && this.dismissedToasts.delete(d), p ? this.toasts = this.toasts.map((S) => S.id === d ? (this.publish({
        ...S,
        ...r,
        id: d,
        title: l
      }), {
        ...S,
        ...r,
        id: d,
        dismissible: c,
        title: l
      }) : S) : this.addToast({
        title: l,
        ...b,
        dismissible: c,
        id: d
      }), d;
    }, this.dismiss = (r) => (r ? (this.dismissedToasts.add(r), requestAnimationFrame(() => this.subscribers.forEach((a) => a({
      id: r,
      dismiss: !0
    })))) : this.toasts.forEach((a) => {
      this.subscribers.forEach((l) => l({
        id: a.id,
        dismiss: !0
      }));
    }), r), this.message = (r, a) => this.create({
      ...a,
      message: r
    }), this.error = (r, a) => this.create({
      ...a,
      message: r,
      type: "error"
    }), this.success = (r, a) => this.create({
      ...a,
      type: "success",
      message: r
    }), this.info = (r, a) => this.create({
      ...a,
      type: "info",
      message: r
    }), this.warning = (r, a) => this.create({
      ...a,
      type: "warning",
      message: r
    }), this.loading = (r, a) => this.create({
      ...a,
      type: "loading",
      message: r
    }), this.promise = (r, a) => {
      if (!a)
        return;
      let l;
      a.loading !== void 0 && (l = this.create({
        ...a,
        promise: r,
        type: "loading",
        message: a.loading,
        description: typeof a.description != "function" ? a.description : void 0
      }));
      const b = Promise.resolve(r instanceof Function ? r() : r);
      let d = l !== void 0, p;
      const c = b.then(async (u) => {
        if (p = [
          "resolve",
          u
        ], s.isValidElement(u))
          d = !1, this.create({
            id: l,
            type: "default",
            message: u
          });
        else if (qn(u) && !u.ok) {
          d = !1;
          const t = typeof a.error == "function" ? await a.error(`HTTP error! status: ${u.status}`) : a.error, C = typeof a.description == "function" ? await a.description(`HTTP error! status: ${u.status}`) : a.description, R = typeof t == "object" && !s.isValidElement(t) ? t : {
            message: t
          };
          this.create({
            id: l,
            type: "error",
            description: C,
            ...R
          });
        } else if (u instanceof Error) {
          d = !1;
          const t = typeof a.error == "function" ? await a.error(u) : a.error, C = typeof a.description == "function" ? await a.description(u) : a.description, R = typeof t == "object" && !s.isValidElement(t) ? t : {
            message: t
          };
          this.create({
            id: l,
            type: "error",
            description: C,
            ...R
          });
        } else if (a.success !== void 0) {
          d = !1;
          const t = typeof a.success == "function" ? await a.success(u) : a.success, C = typeof a.description == "function" ? await a.description(u) : a.description, R = typeof t == "object" && !s.isValidElement(t) ? t : {
            message: t
          };
          this.create({
            id: l,
            type: "success",
            description: C,
            ...R
          });
        }
      }).catch(async (u) => {
        if (p = [
          "reject",
          u
        ], a.error !== void 0) {
          d = !1;
          const v = typeof a.error == "function" ? await a.error(u) : a.error, t = typeof a.description == "function" ? await a.description(u) : a.description, g = typeof v == "object" && !s.isValidElement(v) ? v : {
            message: v
          };
          this.create({
            id: l,
            type: "error",
            description: t,
            ...g
          });
        }
      }).finally(() => {
        d && (this.dismiss(l), l = void 0), a.finally == null || a.finally.call(a);
      }), S = () => new Promise((u, v) => c.then(() => p[0] === "reject" ? v(p[1]) : u(p[1])).catch(v));
      return typeof l != "string" && typeof l != "number" ? {
        unwrap: S
      } : Object.assign(l, {
        unwrap: S
      });
    }, this.custom = (r, a) => {
      const l = a?.id || je++;
      return this.create({
        jsx: r(l),
        id: l,
        ...a
      }), l;
    }, this.getActiveToasts = () => this.toasts.filter((r) => !this.dismissedToasts.has(r.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const $ = new On(), Wn = (i, r) => {
  const a = r?.id || je++;
  return $.addToast({
    title: i,
    ...r,
    id: a
  }), a;
}, qn = (i) => i && typeof i == "object" && "ok" in i && typeof i.ok == "boolean" && "status" in i && typeof i.status == "number", Vn = Wn, Un = () => $.toasts, Yn = () => $.getActiveToasts(), Xe = Object.assign(Vn, {
  success: $.success,
  info: $.info,
  warning: $.warning,
  error: $.error,
  custom: $.custom,
  message: $.message,
  promise: $.promise,
  dismiss: $.dismiss,
  loading: $.loading
}, {
  getHistory: Un,
  getToasts: Yn
});
_n("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Be(i) {
  return i.label !== void 0;
}
const Gn = 3, Xn = "24px", Kn = "16px", Ke = 4e3, Qn = 356, Zn = 14, Jn = 45, ea = 200;
function ne(...i) {
  return i.filter(Boolean).join(" ");
}
function ta(i) {
  const [r, a] = i.split("-"), l = [];
  return r && l.push(r), a && l.push(a), l;
}
const na = (i) => {
  var r, a, l, b, d, p, c, S, u;
  const { invert: v, toast: t, unstyled: C, interacting: g, setHeights: R, visibleToasts: U, heights: N, index: L, toasts: oe, expanded: K, removeToast: se, defaultRichColors: D, closeButton: J, style: ae, cancelButtonStyle: ee, actionButtonStyle: ce, className: te = "", descriptionClassName: H = "", duration: Y, position: o, gap: x, expandByDefault: h, classNames: f, icons: m, closeButtonAriaLabel: F = "Close toast" } = i, [I, re] = s.useState(null), [A, _] = s.useState(null), [z, G] = s.useState(!1), [de, E] = s.useState(!1), [be, me] = s.useState(!1), [ye, ve] = s.useState(!1), [Ct, Le] = s.useState(!1), [Bt, Fe] = s.useState(0), [Tt, Pe] = s.useState(0), we = s.useRef(t.duration || Y || Ke), $e = s.useRef(null), ie = s.useRef(null), Rt = L === 0, At = L + 1 <= U, O = t.type, fe = t.dismissible !== !1, zt = t.className || "", It = t.descriptionClassName || "", Ne = s.useMemo(() => N.findIndex((y) => y.toastId === t.id) || 0, [
    N,
    t.id
  ]), _t = s.useMemo(() => {
    var y;
    return (y = t.closeButton) != null ? y : J;
  }, [
    t.closeButton,
    J
  ]), He = s.useMemo(() => t.duration || Y || Ke, [
    t.duration,
    Y
  ]), Me = s.useRef(0), he = s.useRef(0), Oe = s.useRef(0), ge = s.useRef(null), [Et, Ft] = o.split("-"), We = s.useMemo(() => N.reduce((y, M, P) => P >= Ne ? y : y + M.height, 0), [
    N,
    Ne
  ]), qe = Hn(), Mt = t.invert || v, De = O === "loading";
  he.current = s.useMemo(() => Ne * x + We, [
    Ne,
    We
  ]), s.useEffect(() => {
    we.current = He;
  }, [
    He
  ]), s.useEffect(() => {
    G(!0);
  }, []), s.useEffect(() => {
    const y = ie.current;
    if (y) {
      const M = y.getBoundingClientRect().height;
      return Pe(M), R((P) => [
        {
          toastId: t.id,
          height: M,
          position: t.position
        },
        ...P
      ]), () => R((P) => P.filter((W) => W.toastId !== t.id));
    }
  }, [
    R,
    t.id
  ]), s.useLayoutEffect(() => {
    if (!z) return;
    const y = ie.current, M = y.style.height;
    y.style.height = "auto";
    const P = y.getBoundingClientRect().height;
    y.style.height = M, Pe(P), R((W) => W.find((j) => j.toastId === t.id) ? W.map((j) => j.toastId === t.id ? {
      ...j,
      height: P
    } : j) : [
      {
        toastId: t.id,
        height: P,
        position: t.position
      },
      ...W
    ]);
  }, [
    z,
    t.title,
    t.description,
    R,
    t.id
  ]);
  const le = s.useCallback(() => {
    E(!0), Fe(he.current), R((y) => y.filter((M) => M.toastId !== t.id)), setTimeout(() => {
      se(t);
    }, ea);
  }, [
    t,
    se,
    R,
    he
  ]);
  s.useEffect(() => {
    if (t.promise && O === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let y;
    return K || g || qe ? (() => {
      if (Oe.current < Me.current) {
        const W = (/* @__PURE__ */ new Date()).getTime() - Me.current;
        we.current = we.current - W;
      }
      Oe.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      we.current !== 1 / 0 && (Me.current = (/* @__PURE__ */ new Date()).getTime(), y = setTimeout(() => {
        t.onAutoClose == null || t.onAutoClose.call(t, t), le();
      }, we.current));
    })(), () => clearTimeout(y);
  }, [
    K,
    g,
    t,
    O,
    qe,
    le
  ]), s.useEffect(() => {
    t.delete && le();
  }, [
    le,
    t.delete
  ]);
  function Dt() {
    var y;
    if (m?.loading) {
      var M;
      return /* @__PURE__ */ s.createElement("div", {
        className: ne(f?.loader, t == null || (M = t.classNames) == null ? void 0 : M.loader, "sonner-loader"),
        "data-visible": O === "loading"
      }, m.loading);
    }
    return /* @__PURE__ */ s.createElement(Mn, {
      className: ne(f?.loader, t == null || (y = t.classNames) == null ? void 0 : y.loader),
      visible: O === "loading"
    });
  }
  const jt = t.icon || m?.[O] || En(O);
  var Ve, Ue;
  return /* @__PURE__ */ s.createElement("li", {
    tabIndex: 0,
    ref: ie,
    className: ne(te, zt, f?.toast, t == null || (r = t.classNames) == null ? void 0 : r.toast, f?.default, f?.[O], t == null || (a = t.classNames) == null ? void 0 : a[O]),
    "data-sonner-toast": "",
    "data-rich-colors": (Ve = t.richColors) != null ? Ve : D,
    "data-styled": !(t.jsx || t.unstyled || C),
    "data-mounted": z,
    "data-promise": !!t.promise,
    "data-swiped": Ct,
    "data-removed": de,
    "data-visible": At,
    "data-y-position": Et,
    "data-x-position": Ft,
    "data-index": L,
    "data-front": Rt,
    "data-swiping": be,
    "data-dismissible": fe,
    "data-type": O,
    "data-invert": Mt,
    "data-swipe-out": ye,
    "data-swipe-direction": A,
    "data-expanded": !!(K || h && z),
    style: {
      "--index": L,
      "--toasts-before": L,
      "--z-index": oe.length - L,
      "--offset": `${de ? Bt : he.current}px`,
      "--initial-height": h ? "auto" : `${Tt}px`,
      ...ae,
      ...t.style
    },
    onDragEnd: () => {
      me(!1), re(null), ge.current = null;
    },
    onPointerDown: (y) => {
      De || !fe || ($e.current = /* @__PURE__ */ new Date(), Fe(he.current), y.target.setPointerCapture(y.pointerId), y.target.tagName !== "BUTTON" && (me(!0), ge.current = {
        x: y.clientX,
        y: y.clientY
      }));
    },
    onPointerUp: () => {
      var y, M, P;
      if (ye || !fe) return;
      ge.current = null;
      const W = Number(((y = ie.current) == null ? void 0 : y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Se = Number(((M = ie.current) == null ? void 0 : M.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), j = (/* @__PURE__ */ new Date()).getTime() - ((P = $e.current) == null ? void 0 : P.getTime()), X = I === "x" ? W : Se, Ce = Math.abs(X) / j;
      if (Math.abs(X) >= Jn || Ce > 0.11) {
        Fe(he.current), t.onDismiss == null || t.onDismiss.call(t, t), _(I === "x" ? W > 0 ? "right" : "left" : Se > 0 ? "down" : "up"), le(), ve(!0);
        return;
      } else {
        var Q, Z;
        (Q = ie.current) == null || Q.style.setProperty("--swipe-amount-x", "0px"), (Z = ie.current) == null || Z.style.setProperty("--swipe-amount-y", "0px");
      }
      Le(!1), me(!1), re(null);
    },
    onPointerMove: (y) => {
      var M, P, W;
      if (!ge.current || !fe || ((M = window.getSelection()) == null ? void 0 : M.toString().length) > 0) return;
      const j = y.clientY - ge.current.y, X = y.clientX - ge.current.x;
      var Ce;
      const Q = (Ce = i.swipeDirections) != null ? Ce : ta(o);
      !I && (Math.abs(X) > 1 || Math.abs(j) > 1) && re(Math.abs(X) > Math.abs(j) ? "x" : "y");
      let Z = {
        x: 0,
        y: 0
      };
      const Ye = (ue) => 1 / (1.5 + Math.abs(ue) / 20);
      if (I === "y") {
        if (Q.includes("top") || Q.includes("bottom"))
          if (Q.includes("top") && j < 0 || Q.includes("bottom") && j > 0)
            Z.y = j;
          else {
            const ue = j * Ye(j);
            Z.y = Math.abs(ue) < Math.abs(j) ? ue : j;
          }
      } else if (I === "x" && (Q.includes("left") || Q.includes("right")))
        if (Q.includes("left") && X < 0 || Q.includes("right") && X > 0)
          Z.x = X;
        else {
          const ue = X * Ye(X);
          Z.x = Math.abs(ue) < Math.abs(X) ? ue : X;
        }
      (Math.abs(Z.x) > 0 || Math.abs(Z.y) > 0) && Le(!0), (P = ie.current) == null || P.style.setProperty("--swipe-amount-x", `${Z.x}px`), (W = ie.current) == null || W.style.setProperty("--swipe-amount-y", `${Z.y}px`);
    }
  }, _t && !t.jsx && O !== "loading" ? /* @__PURE__ */ s.createElement("button", {
    "aria-label": F,
    "data-disabled": De,
    "data-close-button": !0,
    onClick: De || !fe ? () => {
    } : () => {
      le(), t.onDismiss == null || t.onDismiss.call(t, t);
    },
    className: ne(f?.closeButton, t == null || (l = t.classNames) == null ? void 0 : l.closeButton)
  }, (Ue = m?.close) != null ? Ue : $n) : null, (O || t.icon || t.promise) && t.icon !== null && (m?.[O] !== null || t.icon) ? /* @__PURE__ */ s.createElement("div", {
    "data-icon": "",
    className: ne(f?.icon, t == null || (b = t.classNames) == null ? void 0 : b.icon)
  }, t.promise || t.type === "loading" && !t.icon ? t.icon || Dt() : null, t.type !== "loading" ? jt : null) : null, /* @__PURE__ */ s.createElement("div", {
    "data-content": "",
    className: ne(f?.content, t == null || (d = t.classNames) == null ? void 0 : d.content)
  }, /* @__PURE__ */ s.createElement("div", {
    "data-title": "",
    className: ne(f?.title, t == null || (p = t.classNames) == null ? void 0 : p.title)
  }, t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title), t.description ? /* @__PURE__ */ s.createElement("div", {
    "data-description": "",
    className: ne(H, It, f?.description, t == null || (c = t.classNames) == null ? void 0 : c.description)
  }, typeof t.description == "function" ? t.description() : t.description) : null), /* @__PURE__ */ s.isValidElement(t.cancel) ? t.cancel : t.cancel && Be(t.cancel) ? /* @__PURE__ */ s.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: t.cancelButtonStyle || ee,
    onClick: (y) => {
      Be(t.cancel) && fe && (t.cancel.onClick == null || t.cancel.onClick.call(t.cancel, y), le());
    },
    className: ne(f?.cancelButton, t == null || (S = t.classNames) == null ? void 0 : S.cancelButton)
  }, t.cancel.label) : null, /* @__PURE__ */ s.isValidElement(t.action) ? t.action : t.action && Be(t.action) ? /* @__PURE__ */ s.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: t.actionButtonStyle || ce,
    onClick: (y) => {
      Be(t.action) && (t.action.onClick == null || t.action.onClick.call(t.action, y), !y.defaultPrevented && le());
    },
    className: ne(f?.actionButton, t == null || (u = t.classNames) == null ? void 0 : u.actionButton)
  }, t.action.label) : null);
};
function Qe() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const i = document.documentElement.getAttribute("dir");
  return i === "auto" || !i ? window.getComputedStyle(document.documentElement).direction : i;
}
function aa(i, r) {
  const a = {};
  return [
    i,
    r
  ].forEach((l, b) => {
    const d = b === 1, p = d ? "--mobile-offset" : "--offset", c = d ? Kn : Xn;
    function S(u) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((v) => {
        a[`${p}-${v}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof l == "number" || typeof l == "string" ? S(l) : typeof l == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((u) => {
      l[u] === void 0 ? a[`${p}-${u}`] = c : a[`${p}-${u}`] = typeof l[u] == "number" ? `${l[u]}px` : l[u];
    }) : S(c);
  }), a;
}
const ra = /* @__PURE__ */ s.forwardRef(function(r, a) {
  const { invert: l, position: b = "bottom-right", hotkey: d = [
    "altKey",
    "KeyT"
  ], expand: p, closeButton: c, className: S, offset: u, mobileOffset: v, theme: t = "light", richColors: C, duration: g, style: R, visibleToasts: U = Gn, toastOptions: N, dir: L = Qe(), gap: oe = Zn, icons: K, containerAriaLabel: se = "Notifications" } = r, [D, J] = s.useState([]), ae = s.useMemo(() => Array.from(new Set([
    b
  ].concat(D.filter((A) => A.position).map((A) => A.position)))), [
    D,
    b
  ]), [ee, ce] = s.useState([]), [te, H] = s.useState(!1), [Y, o] = s.useState(!1), [x, h] = s.useState(t !== "system" ? t : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), f = s.useRef(null), m = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""), F = s.useRef(null), I = s.useRef(!1), re = s.useCallback((A) => {
    J((_) => {
      var z;
      return (z = _.find((G) => G.id === A.id)) != null && z.delete || $.dismiss(A.id), _.filter(({ id: G }) => G !== A.id);
    });
  }, []);
  return s.useEffect(() => $.subscribe((A) => {
    if (A.dismiss) {
      requestAnimationFrame(() => {
        J((_) => _.map((z) => z.id === A.id ? {
          ...z,
          delete: !0
        } : z));
      });
      return;
    }
    setTimeout(() => {
      In.flushSync(() => {
        J((_) => {
          const z = _.findIndex((G) => G.id === A.id);
          return z !== -1 ? [
            ..._.slice(0, z),
            {
              ..._[z],
              ...A
            },
            ..._.slice(z + 1)
          ] : [
            A,
            ..._
          ];
        });
      });
    });
  }), [
    D
  ]), s.useEffect(() => {
    if (t !== "system") {
      h(t);
      return;
    }
    if (t === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? h("dark") : h("light")), typeof window > "u") return;
    const A = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      A.addEventListener("change", ({ matches: _ }) => {
        h(_ ? "dark" : "light");
      });
    } catch {
      A.addListener(({ matches: z }) => {
        try {
          h(z ? "dark" : "light");
        } catch (G) {
          console.error(G);
        }
      });
    }
  }, [
    t
  ]), s.useEffect(() => {
    D.length <= 1 && H(!1);
  }, [
    D
  ]), s.useEffect(() => {
    const A = (_) => {
      var z;
      if (d.every((E) => _[E] || _.code === E)) {
        var de;
        H(!0), (de = f.current) == null || de.focus();
      }
      _.code === "Escape" && (document.activeElement === f.current || (z = f.current) != null && z.contains(document.activeElement)) && H(!1);
    };
    return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A);
  }, [
    d
  ]), s.useEffect(() => {
    if (f.current)
      return () => {
        F.current && (F.current.focus({
          preventScroll: !0
        }), F.current = null, I.current = !1);
      };
  }, [
    f.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ s.createElement("section", {
    ref: a,
    "aria-label": `${se} ${m}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, ae.map((A, _) => {
    var z;
    const [G, de] = A.split("-");
    return D.length ? /* @__PURE__ */ s.createElement("ol", {
      key: A,
      dir: L === "auto" ? Qe() : L,
      tabIndex: -1,
      ref: f,
      className: S,
      "data-sonner-toaster": !0,
      "data-sonner-theme": x,
      "data-y-position": G,
      "data-lifted": te && D.length > 1 && !p,
      "data-x-position": de,
      style: {
        "--front-toast-height": `${((z = ee[0]) == null ? void 0 : z.height) || 0}px`,
        "--width": `${Qn}px`,
        "--gap": `${oe}px`,
        ...R,
        ...aa(u, v)
      },
      onBlur: (E) => {
        I.current && !E.currentTarget.contains(E.relatedTarget) && (I.current = !1, F.current && (F.current.focus({
          preventScroll: !0
        }), F.current = null));
      },
      onFocus: (E) => {
        E.target instanceof HTMLElement && E.target.dataset.dismissible === "false" || I.current || (I.current = !0, F.current = E.relatedTarget);
      },
      onMouseEnter: () => H(!0),
      onMouseMove: () => H(!0),
      onMouseLeave: () => {
        Y || H(!1);
      },
      onDragEnd: () => H(!1),
      onPointerDown: (E) => {
        E.target instanceof HTMLElement && E.target.dataset.dismissible === "false" || o(!0);
      },
      onPointerUp: () => o(!1)
    }, D.filter((E) => !E.position && _ === 0 || E.position === A).map((E, be) => {
      var me, ye;
      return /* @__PURE__ */ s.createElement(na, {
        key: E.id,
        icons: K,
        index: be,
        toast: E,
        defaultRichColors: C,
        duration: (me = N?.duration) != null ? me : g,
        className: N?.className,
        descriptionClassName: N?.descriptionClassName,
        invert: l,
        visibleToasts: U,
        closeButton: (ye = N?.closeButton) != null ? ye : c,
        interacting: Y,
        position: A,
        style: N?.style,
        unstyled: N?.unstyled,
        classNames: N?.classNames,
        cancelButtonStyle: N?.cancelButtonStyle,
        actionButtonStyle: N?.actionButtonStyle,
        closeButtonAriaLabel: N?.closeButtonAriaLabel,
        removeToast: re,
        toasts: D.filter((ve) => ve.position == E.position),
        heights: ee.filter((ve) => ve.position == E.position),
        setHeights: ce,
        expandByDefault: p,
        gap: oe,
        expanded: te,
        swipeDirections: r.swipeDirections
      });
    })) : null;
  }));
}), St = rt(void 0);
function ia({ children: i }) {
  const [r, a] = q([]), l = (u) => {
    a((v) => {
      const t = v.find((C) => C.id === u.id);
      return t ? (Xe.success(`${u.name} ajoutÃ© au panier (${t.quantity + 1})`), v.map(
        (C) => C.id === u.id ? { ...C, quantity: C.quantity + 1 } : C
      )) : (Xe.success(`${u.name} ajoutÃ© au panier (1)`), [...v, { ...u, quantity: 1 }]);
    });
  }, b = (u) => {
    a((v) => v.filter((t) => t.id !== u));
  }, d = (u, v) => {
    if (v <= 0) {
      b(u);
      return;
    }
    a(
      (t) => t.map(
        (C) => C.id === u ? { ...C, quantity: v } : C
      )
    );
  }, p = () => {
    a([]);
  }, c = () => r.reduce((u, v) => u + v.quantity, 0), S = () => r.reduce((u, v) => {
    const t = v.price.replace("€", "."), C = parseFloat(t);
    return u + C * v.quantity;
  }, 0);
  return /* @__PURE__ */ e(
    St.Provider,
    {
      value: {
        items: r,
        addItem: l,
        removeItem: b,
        updateQuantity: d,
        clearCart: p,
        getTotalItems: c,
        getTotalPrice: S
      },
      children: i
    }
  );
}
function Ee() {
  const i = ot(St);
  if (i === void 0)
    throw new Error("useCart must be used within a CartProvider");
  return i;
}
const Te = [
  { key: "starters", label: "EntrÃ©es" },
  { key: "thai", label: "Thai Food" },
  { key: "indian", label: "Indian Food" },
  { key: "bowls", label: "Bowls & Noodles" },
  { key: "sushi", label: "Sushi & Rolls" },
  { key: "desserts", label: "Desserts" },
  { key: "drinks", label: "Boissons" }
], Ze = "thai";
function Je(i) {
  return i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function et(i, r) {
  return r ? Je(`${i.name} ${i.description ?? ""} ${i.price ?? ""}`).includes(Je(r)) : !0;
}
function oa(i) {
  const { data: r, sectionsData: a, showPdfButton: l = !0, onPdfClick: b, onBack: d, onCartClick: p } = i, { addItem: c, getTotalItems: S } = Ee(), u = lt(null), v = st(() => {
    if (typeof window > "u") return Ze;
    const o = window.location.hash.replace("#", "");
    return Te.find((h) => h.key === o)?.key ?? Ze;
  }, []), [t, C] = q(v), [g, R] = q(""), [U, N] = q({});
  ke(() => {
    const o = () => {
      const x = window.location.hash.replace("#", ""), h = Te.find((f) => f.key === x);
      h && C(h.key);
    };
    return window.addEventListener("hashchange", o), () => window.removeEventListener("hashchange", o);
  }, []);
  const L = (o) => {
    C(o), R(""), typeof window < "u" && history.replaceState(null, "", `#${o}`), requestAnimationFrame(() => {
      u.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, oe = (o) => {
    N((x) => ({ ...x, [o]: !x[o] }));
  }, K = (o, x, h) => {
    const f = {};
    h.forEach((m) => f[m.title] = x), N((m) => ({ ...m, ...f }));
  }, se = {
    starters: [
      { name: "Nems poulet x4", price: "4€50" },
      { name: "Nems crevette x4", price: "5€50" },
      { name: "Gyozas lÃ©gumes x4", price: "4€50" },
      { name: "Tempura poulet x6", price: "4€50" },
      { name: "Tempura crevette x3", price: "5€50" },
      { name: "Yakitori poulet x2", price: "5€50" },
      { name: "Yakitori bÅ“uf fromage x2", price: "5€50" },
      { name: "Yakitori saumon x2", price: "6€00" },
      { name: "Edamame", price: "3€90" },
      { name: "Edamame spicy", price: "4€00" },
      { name: "Riz nature", price: "2€50" },
      { name: "Riz vinaigrÃ©", price: "3€00" },
      { name: "Soupe miso", price: "3€00" },
      { name: "Soupe miso spicy", price: "3€90" }
    ],
    thai: [
      {
        name: "Pad ThaÃ¯",
        description: "Nouilles de riz sautÃ©es aux lÃ©gumes, poulet katsu ou crevette",
        price: "11€50"
      },
      {
        name: "Khao Phat",
        description: "Riz thaÃ¯ sautÃ© aux lÃ©gumes, bÅ“uf ou poulet katsu",
        price: "11€90"
      },
      {
        name: "Tigre qui pleure",
        description: "Bavette marinÃ©e, riz thaÃ¯ sautÃ© aux lÃ©gumes, sauce piquante",
        price: "13€90"
      },
      {
        name: "Lampang",
        description: "Riz cantonais, tempura de poulet ou crevette, sauce piquante",
        price: "12€50"
      },
      {
        name: "Chicken Satay",
        description: "Nouilles de riz sautÃ©es aux lÃ©gumes, poulet, sauce satay",
        price: "12€50"
      }
    ],
    indian: [
      {
        name: "Chicken Curry",
        description: "Riz blanc, poulet aux Ã©pices indiennes, sauce curry",
        price: "8€90"
      },
      {
        name: "Butter Chicken / Korma",
        description: "Riz blanc, poulet, crÃ¨me, sauce tomate, noix de cajou",
        price: "9€90"
      },
      {
        name: "Crevettes Masala",
        description: "Riz, crevettes dÃ©cortiquÃ©es, sauce curry",
        price: "12€50"
      },
      {
        name: "Fish Curry",
        description: "Riz, filet de saumon au curry traditionnel",
        price: "12€50"
      },
      {
        name: "Egg Rice",
        description: "Riz, lÃ©gumes, Å“ufs et Ã©pices",
        price: "7€50"
      },
      {
        name: "Special Pulao Rice",
        description: "Riz parfumÃ©, Ã©pices indiennes",
        price: "8€50"
      }
    ],
    bowls: [],
    sushi: [],
    desserts: [
      { name: "Mango sticky rice", price: "4€90" },
      { name: "Mangue fraÃ®che", price: "4€00" },
      { name: "Mochi glacÃ©", price: "4€90" },
      { name: "Tiramisu", price: "4€00" },
      { name: "Fondant au chocolat", price: "4€00" }
    ],
    drinks: [
      { name: "Soda 33cl", price: "1€90" },
      { name: "Ramune 20cl", price: "3€50" },
      { name: "Mangajo 25cl", price: "3€50" },
      { name: "Eau 50cl", price: "1€00" }
    ]
  }, D = {
    bowls: [
      {
        title: "Yakisoba",
        blurb: "Nouilles sautÃ©es, lÃ©gumes, sauce japonaise.",
        items: [
          { name: "Poulet", price: "10€50" },
          { name: "BÅ“uf", price: "10€90" },
          { name: "Saumon", price: "11€50" },
          { name: "Crevette", price: "10€90" },
          { name: "Veggie", price: "9€90" }
        ]
      },
      {
        title: "Ramen",
        blurb: "Nouilles, lÃ©gumes, Å“uf, bouillon japonais.",
        items: [
          { name: "Poulet", price: "12€00" },
          { name: "BÅ“uf", price: "12€50" },
          { name: "Saumon", price: "12€50" },
          { name: "Crevette", price: "12€50" },
          { name: "Veggie", price: "10€90" }
        ]
      },
      {
        title: "Poke Bowl",
        blurb: "Riz vinaigrÃ©, lÃ©gumes.",
        items: [
          { name: "Poulet", price: "12€50" },
          { name: "Thon", price: "13€90" },
          { name: "Saumon", price: "12€90" },
          { name: "Crevette", price: "12€50" },
          { name: "Veggie", price: "11€90" }
        ]
      }
    ],
    sushi: [
      {
        title: "Chirashi",
        items: [
          { name: "Saumon", description: "Riz vinaigrÃ©, saumon", price: "11€50" },
          { name: "Saumon tataki", description: "Saumon snackÃ©, guacamole yuzu, sauce ponzu", price: "11€90" },
          { name: "Thon", description: "Riz vinaigrÃ©, thon", price: "13€90" }
        ]
      },
      {
        title: "Sashimi",
        items: [
          { name: "6 tranches de saumon", price: "6€90" },
          { name: "10 tranches de saumon", price: "10€90" },
          { name: "6 tranches de thon", price: "7€90" },
          { name: "10 tranches de thon", price: "11€90" },
          { name: "Assortiment: 8 saumon & 7 thon", price: "13€90" }
        ]
      },
      {
        title: "Nigiris",
        items: [
          { name: "2 saumon", price: "4€00" },
          { name: "2 thon", price: "4€50" },
          { name: "2 saumon snackÃ©", price: "4€50" },
          { name: "2 saumon cheese", price: "4€20" }
        ]
      },
      {
        title: "Rolls Signature (x8)",
        items: [
          { name: "Tigre", price: "9€90" },
          { name: "Dragon roll", price: "9€90" },
          { name: "Red dragon", price: "9€90" },
          { name: "Avocado", price: "8€50" }
        ]
      },
      {
        title: "California Rolls (x8)",
        items: [
          { name: "Saumon, avocat", price: "6€10" },
          { name: "Saumon, cheese", price: "6€00" },
          { name: "Saumon, concombre, spicy", price: "6€50" },
          { name: "Thon, avocat", price: "6€20" },
          { name: "Thon cuit, avocat", price: "6€20" },
          { name: "Avocat, concombre, cheese", price: "6€00" },
          { name: "Poulet, cheese", price: "6€90" },
          { name: "Avocat, cheese", price: "6€50" },
          { name: "Tempura, crevette", price: "5€90" }
        ]
      },
      {
        title: "Crispy Rolls (x8)",
        items: [
          { name: "Poulet, cheese", price: "6€50" },
          { name: "Poulet, avocat", price: "6€90" },
          { name: "Saumon, cheese", price: "6€90" },
          { name: "Tempura crevette", price: "6€80" },
          { name: "Tempura mangue", price: "6€90" }
        ]
      },
      {
        title: "Green Rolls (x8)",
        items: [
          { name: "Saumon, avocat", price: "6€00" },
          { name: "Saumon, menthe, cheese", price: "6€00" },
          { name: "Avocat, cheese", price: "6€50" },
          { name: "Crevette, menthe", price: "6€90" },
          { name: "Thon cuit, avocat", price: "6€50" }
        ]
      },
      {
        title: "Salmon Rolls (x8)",
        items: [
          { name: "Cheese", price: "7€50" },
          { name: "Avocat", price: "7€80" },
          { name: "Avocat, cheese", price: "7€90" }
        ]
      },
      {
        title: "Maki (x6)",
        items: [
          { name: "Saumon", price: "5€00" },
          { name: "Avocat, cheese", price: "4€90" },
          { name: "Saumon, concombre", price: "5€50" },
          { name: "Avocat", price: "4€50" },
          { name: "Thon", price: "5€70" }
        ]
      },
      {
        title: "Box",
        items: [
          { name: "Saumon x20", price: "15€90" },
          { name: "Mixte x20", price: "16€90" },
          { name: "Veggie x24", price: "14€90" },
          { name: "California x24", price: "16€90" },
          { name: "Classique x44", price: "40€90" },
          { name: "Premium x54", price: "49€90" }
        ]
      }
    ]
  }, J = { ...se, ...r ?? {} }, ae = {
    bowls: a?.bowls ?? D.bowls,
    sushi: a?.sushi ?? D.sushi
  }, ee = Te.find((o) => o.key === t)?.label ?? "", ce = t === "bowls" || t === "sushi";
  ke(() => {
    if (!g || !ce) return;
    const o = t, x = {};
    ae[o].forEach((h) => x[h.title] = !0), N((h) => ({ ...h, ...x }));
  }, [g, t]);
  const te = (o, x) => {
    const h = `${o.name}-${o.price}-${x}`, f = () => {
      o.price && c({
        id: h,
        name: o.name,
        price: o.price,
        description: o.description
      });
    };
    return /* @__PURE__ */ n("div", { style: w.row, children: [
      /* @__PURE__ */ n("div", { style: w.left, children: [
        /* @__PURE__ */ e("div", { style: w.itemName, children: o.name }),
        o.description ? /* @__PURE__ */ e("div", { style: w.itemDesc, children: o.description }) : null
      ] }),
      /* @__PURE__ */ n("div", { style: w.rightControls, children: [
        o.price ? /* @__PURE__ */ e("div", { style: w.price, children: o.price }) : null,
        o.price && /* @__PURE__ */ e(
          "button",
          {
            onClick: f,
            style: w.addToCartBtn,
            "aria-label": "Ajouter au panier",
            title: "Ajouter au panier",
            children: /* @__PURE__ */ e(_e, { style: { width: 16, height: 16 } })
          }
        )
      ] })
    ] }, `${o.name}-${x}`);
  }, H = () => {
    const o = J[t].filter((x) => et(x, g));
    return o.length === 0 ? /* @__PURE__ */ e("div", { style: w.empty, children: "Aucun rÃ©sultat." }) : /* @__PURE__ */ e("div", { style: w.list, children: o.map(te) });
  }, Y = (o) => {
    const h = ae[o].map((m) => {
      const F = m.items.filter((I) => et(I, g));
      return { ...m, items: F };
    }).filter((m) => m.items.length > 0 || !g);
    if (g && h.length === 0) return /* @__PURE__ */ e("div", { style: w.empty, children: "Aucun rÃ©sultat." });
    const f = h.some(
      (m, F) => g ? !0 : U[m.title] ?? F === 0
    );
    return /* @__PURE__ */ n(ze, { children: [
      /* @__PURE__ */ n("div", { style: w.accTools, children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            style: w.accToolBtn,
            onClick: () => K(o, !0, h),
            children: "Tout ouvrir"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            style: w.accToolBtn,
            onClick: () => K(o, !1, h),
            children: "Tout fermer"
          }
        ),
        /* @__PURE__ */ e("div", { style: w.accToolHint, children: f ? "" : "Ouvre une catÃ©gorie pour voir les plats." })
      ] }),
      /* @__PURE__ */ e("div", { style: w.accordion, children: h.map((m, F) => {
        const I = g ? !0 : U[m.title] ?? F === 0, re = m.items.length;
        return /* @__PURE__ */ n("div", { style: w.accSection, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => oe(m.title),
              style: w.accHeader,
              "aria-expanded": I,
              children: [
                /* @__PURE__ */ n("span", { style: w.accTitle, children: [
                  m.title,
                  g ? /* @__PURE__ */ n("span", { style: w.accCount, children: [
                    " (",
                    re,
                    ")"
                  ] }) : null
                ] }),
                /* @__PURE__ */ e("span", { style: w.accChevron, children: I ? "âˆ’" : "+" })
              ]
            }
          ),
          I ? /* @__PURE__ */ n("div", { style: w.accBody, children: [
            m.blurb ? /* @__PURE__ */ e("div", { style: w.sectionBlurb, children: m.blurb }) : null,
            m.items.map(te)
          ] }) : null
        ] }, m.title);
      }) })
    ] });
  };
  return /* @__PURE__ */ n("div", { style: w.page, children: [
    /* @__PURE__ */ n("div", { style: w.topBar, children: [
      d && /* @__PURE__ */ n(
        "button",
        {
          onClick: d,
          style: w.backButton,
          children: [
            /* @__PURE__ */ e(xe, { style: { width: 20, height: 20 } }),
            /* @__PURE__ */ e("span", { style: w.backText, children: "RETOUR" })
          ]
        }
      ),
      p && /* @__PURE__ */ n(
        "button",
        {
          onClick: p,
          style: w.cartButton,
          children: [
            /* @__PURE__ */ e(vt, { style: { width: 20, height: 20 } }),
            S() > 0 && /* @__PURE__ */ e("span", { style: w.cartBadge, children: S() })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("h1", { style: w.h1, children: "MENU" }),
    /* @__PURE__ */ e("div", { style: w.tabsWrap, role: "tablist", "aria-label": "CatÃ©gories du menu", children: Te.map((o) => {
      const x = o.key === t;
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": x,
          onClick: () => L(o.key),
          style: {
            ...w.tab,
            ...x ? w.tabActive : null
          },
          children: o.label
        },
        o.key
      );
    }) }),
    /* @__PURE__ */ e("div", { ref: u }),
    /* @__PURE__ */ n("div", { style: w.panel, role: "tabpanel", "aria-label": `CatÃ©gorie ${ee}`, children: [
      /* @__PURE__ */ n("div", { style: w.panelHeader, children: [
        /* @__PURE__ */ e("h2", { style: w.h2, children: ee }),
        /* @__PURE__ */ e(
          "input",
          {
            value: g,
            onChange: (o) => R(o.target.value),
            placeholder: "Rechercher un platâ€¦",
            style: w.search,
            "aria-label": "Rechercher un plat"
          }
        )
      ] }),
      t === "bowls" ? Y("bowls") : null,
      t === "sushi" ? Y("sushi") : null,
      t !== "bowls" && t !== "sushi" ? H() : null,
      l ? /* @__PURE__ */ e("button", { type: "button", style: w.pdfBtn, onClick: b, children: "TÃ©lÃ©charger le menu complet (PDF)" }) : null
    ] })
  ] });
}
const w = {
  page: {
    minHeight: "100vh",
    padding: "24px 18px",
    color: "#F2F2F2",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    backgroundImage: `url('${pe}')`,
    backgroundSize: "512px 768px",
    backgroundPosition: "top left"
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "transparent",
    border: "none",
    color: "#C8A24A",
    cursor: "pointer",
    padding: "8px 12px",
    fontSize: 14,
    fontWeight: 700
  },
  backText: {
    fontFamily: "'Cinzel', serif",
    fontWeight: 700,
    letterSpacing: 1
  },
  cartButton: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "transparent",
    border: "none",
    color: "#C8A24A",
    cursor: "pointer",
    padding: "8px 12px",
    fontSize: 14,
    fontWeight: 700
  },
  cartBadge: {
    background: "#F2F2F2",
    color: "#0F1113",
    borderRadius: 999,
    padding: "2px 6px",
    fontSize: 12,
    fontWeight: 700
  },
  h1: {
    margin: 0,
    fontSize: 44,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: 800
  },
  tabsWrap: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    padding: "14px 2px 6px",
    marginTop: 12,
    WebkitOverflowScrolling: "touch"
  },
  tab: {
    whiteSpace: "nowrap",
    borderRadius: 999,
    border: "1px solid rgba(242,242,242,0.22)",
    background: "transparent",
    color: "#F2F2F2",
    padding: "10px 14px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer"
  },
  tabActive: {
    background: "#C8A24A",
    border: "1px solid #C8A24A",
    color: "#0F1113"
  },
  panel: {
    marginTop: 18,
    background: "rgba(15,17,19,0.65)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: "16px 14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
  },
  panelHeader: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 10
  },
  h2: {
    margin: 0,
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: 800
  },
  search: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.04)",
    color: "#F2F2F2",
    outline: "none",
    fontSize: 14,
    fontWeight: 600
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 8
  },
  row: {
    display: "flex",
    gap: 12,
    justifyContent: "space-between",
    paddingBottom: 12,
    borderBottom: "1px solid rgba(255,255,255,0.10)"
  },
  left: { flex: 1 },
  itemName: {
    fontSize: 16,
    fontWeight: 800,
    lineHeight: 1.2
  },
  itemDesc: {
    marginTop: 6,
    fontSize: 13,
    color: "#B8B8B8",
    lineHeight: 1.35
  },
  rightControls: {
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  price: {
    fontSize: 15,
    fontWeight: 800,
    whiteSpace: "nowrap"
  },
  addToCartBtn: {
    background: "transparent",
    border: "none",
    color: "#C8A24A",
    cursor: "pointer",
    padding: 0
  },
  empty: {
    marginTop: 10,
    padding: "14px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    color: "#B8B8B8",
    fontSize: 14,
    fontWeight: 700
  },
  accTools: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 10,
    flexWrap: "wrap"
  },
  accToolBtn: {
    borderRadius: 999,
    border: "1px solid rgba(242,242,242,0.22)",
    background: "rgba(255,255,255,0.03)",
    color: "#F2F2F2",
    padding: "8px 12px",
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer"
  },
  accToolHint: {
    color: "#B8B8B8",
    fontSize: 12,
    fontWeight: 700
  },
  accordion: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 8
  },
  accSection: {
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    overflow: "hidden",
    background: "rgba(255,255,255,0.02)"
  },
  accHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 12px",
    cursor: "pointer",
    background: "rgba(0,0,0,0.15)",
    border: "none",
    color: "#F2F2F2",
    textAlign: "left"
  },
  accTitle: {
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#C8A24A"
  },
  accCount: {
    color: "#F2F2F2",
    fontWeight: 900,
    letterSpacing: 0,
    textTransform: "none"
  },
  accChevron: {
    fontSize: 20,
    fontWeight: 900,
    color: "#F2F2F2",
    lineHeight: 1
  },
  accBody: {
    padding: "10px 12px 2px"
  },
  sectionBlurb: {
    marginBottom: 10,
    fontSize: 13,
    color: "#B8B8B8",
    lineHeight: 1.35
  },
  pdfBtn: {
    width: "100%",
    marginTop: 16,
    padding: "14px 14px",
    borderRadius: 14,
    border: "none",
    background: "#C8A24A",
    color: "#0F1113",
    fontSize: 15,
    fontWeight: 900,
    cursor: "pointer"
  }
}, Re = [
  { key: "starters", label: "EntrÃ©es" },
  { key: "thai", label: "Thai Food" },
  { key: "indian", label: "Indian Food" },
  { key: "bowls", label: "Bowls & Noodles" },
  { key: "sushi", label: "Sushi & Rolls" },
  { key: "desserts", label: "Desserts" },
  { key: "drinks", label: "Boissons" }
], tt = "thai";
function nt(i) {
  return i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function at(i, r) {
  return r ? nt(`${i.name} ${i.description ?? ""} ${i.price ?? ""}`).includes(nt(r)) : !0;
}
function sa(i) {
  const { data: r, sectionsData: a, showPdfButton: l = !0, onPdfClick: b, onBack: d, onCartClick: p } = i, { addItem: c, getTotalItems: S } = Ee(), u = lt(null), v = st(() => {
    if (typeof window > "u") return tt;
    const o = window.location.hash.replace("#", "");
    return Re.find((h) => h.key === o)?.key ?? tt;
  }, []), [t, C] = q(v), [g, R] = q(""), [U, N] = q({});
  ke(() => {
    const o = () => {
      const x = window.location.hash.replace("#", ""), h = Re.find((f) => f.key === x);
      h && C(h.key);
    };
    return window.addEventListener("hashchange", o), () => window.removeEventListener("hashchange", o);
  }, []);
  const L = (o) => {
    C(o), R(""), typeof window < "u" && history.replaceState(null, "", `#${o}`), requestAnimationFrame(() => {
      u.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, oe = (o) => {
    N((x) => ({ ...x, [o]: !x[o] }));
  }, K = (o, x, h) => {
    const f = {};
    h.forEach((m) => f[m.title] = x), N((m) => ({ ...m, ...f }));
  }, se = {
    starters: [
      { name: "Nems poulet x4", price: "4€50" },
      { name: "Nems crevette x4", price: "5€50" },
      { name: "Gyozas lÃ©gumes x4", price: "4€50" },
      { name: "Tempura poulet x6", price: "4€50" },
      { name: "Tempura crevette x3", price: "5€50" },
      { name: "Yakitori poulet x2", price: "5€50" },
      { name: "Yakitori bÅ“uf fromage x2", price: "5€50" },
      { name: "Yakitori saumon x2", price: "6€00" },
      { name: "Edamame", price: "3€90" },
      { name: "Edamame spicy", price: "4€00" },
      { name: "Riz nature", price: "2€50" },
      { name: "Riz vinaigrÃ©", price: "3€00" },
      { name: "Soupe miso", price: "3€00" },
      { name: "Soupe miso spicy", price: "3€90" }
    ],
    thai: [
      {
        name: "Pad ThaÃ¯",
        description: "Nouilles de riz sautÃ©es aux lÃ©gumes, poulet katsu ou crevette",
        price: "11€50"
      },
      {
        name: "Khao Phat",
        description: "Riz thaÃ¯ sautÃ© aux lÃ©gumes, bÅ“uf ou poulet katsu",
        price: "11€90"
      },
      {
        name: "Tigre qui pleure",
        description: "Bavette marinÃ©e, riz thaÃ¯ sautÃ© aux lÃ©gumes, sauce piquante",
        price: "13€90"
      },
      {
        name: "Lampang",
        description: "Riz cantonais, tempura de poulet ou crevette, sauce piquante",
        price: "12€50"
      },
      {
        name: "Chicken Satay",
        description: "Nouilles de riz sautÃ©es aux lÃ©gumes, poulet, sauce satay",
        price: "12€50"
      }
    ],
    indian: [
      {
        name: "Chicken Curry",
        description: "Riz blanc, poulet aux Ã©pices indiennes, sauce curry",
        price: "8€90"
      },
      {
        name: "Butter Chicken / Korma",
        description: "Riz blanc, poulet, crÃ¨me, sauce tomate, noix de cajou",
        price: "9€90"
      },
      {
        name: "Crevettes Masala",
        description: "Riz, crevettes dÃ©cortiquÃ©es, sauce curry",
        price: "12€50"
      },
      {
        name: "Fish Curry",
        description: "Riz, filet de saumon au curry traditionnel",
        price: "12€50"
      },
      {
        name: "Egg Rice",
        description: "Riz, lÃ©gumes, Å“ufs et Ã©pices",
        price: "7€50"
      },
      {
        name: "Special Pulao Rice",
        description: "Riz parfumÃ©, Ã©pices indiennes",
        price: "8€50"
      }
    ],
    bowls: [],
    // gÃ©rÃ© via sections
    sushi: [],
    // gÃ©rÃ© via sections
    desserts: [
      { name: "Mango sticky rice", price: "4€90" },
      { name: "Mangue fraÃ®che", price: "4€00" },
      { name: "Mochi glacÃ©", price: "4€90" },
      { name: "Tiramisu", price: "4€00" },
      { name: "Fondant au chocolat", price: "4€00" }
    ],
    drinks: [
      { name: "Soda 33cl", price: "1€90" },
      { name: "Ramune 20cl", price: "3€50" },
      { name: "Mangajo 25cl", price: "3€50" },
      { name: "Eau 50cl", price: "1€00" }
    ]
  }, D = {
    bowls: [
      {
        title: "Yakisoba",
        blurb: "Nouilles sautÃ©es, lÃ©gumes, sauce japonaise.",
        items: [
          { name: "Poulet", price: "10€50" },
          { name: "BÅ“uf", price: "10€90" },
          { name: "Saumon", price: "11€50" },
          { name: "Crevette", price: "10€90" },
          { name: "Veggie", price: "9€90" }
        ]
      },
      {
        title: "Ramen",
        blurb: "Nouilles, lÃ©gumes, Å“uf, bouillon japonais.",
        items: [
          { name: "Poulet", price: "12€00" },
          { name: "BÅ“uf", price: "12€50" },
          { name: "Saumon", price: "12€50" },
          { name: "Crevette", price: "12€50" },
          { name: "Veggie", price: "10€90" }
        ]
      },
      {
        title: "Poke Bowl",
        blurb: "Riz vinaigrÃ©, lÃ©gumes.",
        items: [
          { name: "Poulet", price: "12€50" },
          { name: "Thon", price: "13€90" },
          { name: "Saumon", price: "12€90" },
          { name: "Crevette", price: "12€50" },
          { name: "Veggie", price: "11€90" }
        ]
      }
    ],
    sushi: [
      {
        title: "Chirashi",
        items: [
          { name: "Saumon", description: "Riz vinaigrÃ©, saumon", price: "11€50" },
          { name: "Saumon tataki", description: "Saumon snackÃ©, guacamole yuzu, sauce ponzu", price: "11€90" },
          { name: "Thon", description: "Riz vinaigrÃ©, thon", price: "13€90" }
        ]
      },
      {
        title: "Sashimi",
        items: [
          { name: "6 tranches de saumon", price: "6€90" },
          { name: "10 tranches de saumon", price: "10€90" },
          { name: "6 tranches de thon", price: "7€90" },
          { name: "10 tranches de thon", price: "11€90" },
          { name: "Assortiment: 8 saumon & 7 thon", price: "13€90" }
        ]
      },
      {
        title: "Nigiris",
        items: [
          { name: "2 saumon", price: "4€00" },
          { name: "2 thon", price: "4€50" },
          { name: "2 saumon snackÃ©", price: "4€50" },
          { name: "2 saumon cheese", price: "4€20" }
        ]
      },
      {
        title: "Rolls Signature (x8)",
        items: [
          { name: "Tigre", price: "9€90" },
          { name: "Dragon roll", price: "9€90" },
          { name: "Red dragon", price: "9€90" },
          { name: "Avocado", price: "8€50" }
        ]
      },
      {
        title: "California Rolls (x8)",
        items: [
          { name: "Saumon, avocat", price: "6€10" },
          { name: "Saumon, cheese", price: "6€00" },
          { name: "Saumon, concombre, spicy", price: "6€50" },
          { name: "Thon, avocat", price: "6€20" },
          { name: "Thon cuit, avocat", price: "6€20" },
          { name: "Avocat, concombre, cheese", price: "6€00" },
          { name: "Poulet, cheese", price: "6€90" },
          { name: "Avocat, cheese", price: "6€50" },
          { name: "Tempura, crevette", price: "5€90" }
        ]
      },
      {
        title: "Crispy Rolls (x8)",
        items: [
          { name: "Poulet, cheese", price: "6€50" },
          { name: "Poulet, avocat", price: "6€90" },
          { name: "Saumon, cheese", price: "6€90" },
          { name: "Tempura crevette", price: "6€80" },
          { name: "Tempura mangue", price: "6€90" }
        ]
      },
      {
        title: "Green Rolls (x8)",
        items: [
          { name: "Saumon, avocat", price: "6€00" },
          { name: "Saumon, menthe, cheese", price: "6€00" },
          { name: "Avocat, cheese", price: "6€50" },
          { name: "Crevette, menthe", price: "6€90" },
          { name: "Thon cuit, avocat", price: "6€50" }
        ]
      },
      {
        title: "Salmon Rolls (x8)",
        items: [
          { name: "Cheese", price: "7€50" },
          { name: "Avocat", price: "7€80" },
          { name: "Avocat, cheese", price: "7€90" }
        ]
      },
      {
        title: "Maki (x6)",
        items: [
          { name: "Saumon", price: "5€00" },
          { name: "Avocat, cheese", price: "4€90" },
          { name: "Saumon, concombre", price: "5€50" },
          { name: "Avocat", price: "4€50" },
          { name: "Thon", price: "5€70" }
        ]
      },
      {
        title: "Box",
        items: [
          { name: "Saumon x20", price: "15€90" },
          { name: "Mixte x20", price: "16€90" },
          { name: "Veggie x24", price: "14€90" },
          { name: "California x24", price: "16€90" },
          { name: "Classique x44", price: "40€90" },
          { name: "Premium x54", price: "49€90" }
        ]
      }
    ]
  }, J = { ...se, ...r ?? {} }, ae = {
    bowls: a?.bowls ?? D.bowls,
    sushi: a?.sushi ?? D.sushi
  }, ee = Re.find((o) => o.key === t)?.label ?? "", ce = t === "bowls" || t === "sushi";
  ke(() => {
    if (!g || !ce) return;
    const o = t, x = {};
    ae[o].forEach((h) => x[h.title] = !0), N((h) => ({ ...h, ...x }));
  }, [g, t]);
  const te = (o, x) => {
    const h = `${o.name}-${o.price}-${x}`, f = () => {
      o.price && c({
        id: h,
        name: o.name,
        price: o.price,
        description: o.description
      });
    };
    return /* @__PURE__ */ n("div", { style: k.row, children: [
      /* @__PURE__ */ n("div", { style: k.left, children: [
        /* @__PURE__ */ e("div", { style: k.itemName, children: o.name }),
        o.description ? /* @__PURE__ */ e("div", { style: k.itemDesc, children: o.description }) : null
      ] }),
      /* @__PURE__ */ n("div", { style: k.rightControls, children: [
        o.price ? /* @__PURE__ */ e("div", { style: k.price, children: o.price }) : null,
        o.price && /* @__PURE__ */ e(
          "button",
          {
            onClick: f,
            style: k.addToCartBtn,
            "aria-label": "Ajouter au panier",
            title: "Ajouter au panier",
            children: /* @__PURE__ */ e(_e, { style: { width: 14, height: 14 } })
          }
        )
      ] })
    ] }, `${o.name}-${x}`);
  }, H = () => {
    const o = J[t].filter((x) => at(x, g));
    return o.length === 0 ? /* @__PURE__ */ e("div", { style: k.empty, children: "Aucun rÃ©sultat." }) : /* @__PURE__ */ e("div", { style: k.list, children: o.map(te) });
  }, Y = (o) => {
    const h = ae[o].map((m) => {
      const F = m.items.filter((I) => at(I, g));
      return { ...m, items: F };
    }).filter((m) => m.items.length > 0 || !g);
    if (g && h.length === 0) return /* @__PURE__ */ e("div", { style: k.empty, children: "Aucun rÃ©sultat." });
    const f = h.some(
      (m, F) => g ? !0 : U[m.title] ?? F === 0
    );
    return /* @__PURE__ */ n(ze, { children: [
      /* @__PURE__ */ n("div", { style: k.accTools, children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            style: k.accToolBtn,
            onClick: () => K(o, !0, h),
            children: "Tout ouvrir"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            style: k.accToolBtn,
            onClick: () => K(o, !1, h),
            children: "Tout fermer"
          }
        ),
        /* @__PURE__ */ e("div", { style: k.accToolHint, children: f ? "" : "Ouvre une catÃ©gorie pour voir les plats." })
      ] }),
      /* @__PURE__ */ e("div", { style: k.accordion, children: h.map((m, F) => {
        const I = g ? !0 : U[m.title] ?? F === 0, re = m.items.length;
        return /* @__PURE__ */ n("div", { style: k.accSection, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => oe(m.title),
              style: k.accHeader,
              "aria-expanded": I,
              children: [
                /* @__PURE__ */ n("span", { style: k.accTitle, children: [
                  m.title,
                  g ? /* @__PURE__ */ n("span", { style: k.accCount, children: [
                    " (",
                    re,
                    ")"
                  ] }) : null
                ] }),
                /* @__PURE__ */ e("span", { style: k.accChevron, children: I ? "âˆ’" : "+" })
              ]
            }
          ),
          I ? /* @__PURE__ */ n("div", { style: k.accBody, children: [
            m.blurb ? /* @__PURE__ */ e("div", { style: k.sectionBlurb, children: m.blurb }) : null,
            m.items.map(te)
          ] }) : null
        ] }, m.title);
      }) })
    ] });
  };
  return /* @__PURE__ */ n("div", { style: k.page, children: [
    /* @__PURE__ */ n("div", { style: k.topBar, children: [
      d && /* @__PURE__ */ n(
        "button",
        {
          onClick: d,
          style: k.backButton,
          children: [
            /* @__PURE__ */ e(xe, { style: { width: 18, height: 18 } }),
            /* @__PURE__ */ e("span", { style: k.backText, children: "RETOUR" })
          ]
        }
      ),
      p && /* @__PURE__ */ n(
        "button",
        {
          onClick: p,
          style: k.cartButton,
          children: [
            /* @__PURE__ */ e(vt, { style: { width: 18, height: 18 } }),
            S() > 0 && /* @__PURE__ */ e("span", { style: k.cartBadge, children: S() })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("h1", { style: k.h1, children: "MENU" }),
    /* @__PURE__ */ e("div", { style: k.tabsWrap, role: "tablist", "aria-label": "CatÃ©gories du menu", children: Re.map((o) => {
      const x = o.key === t;
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": x,
          onClick: () => L(o.key),
          style: {
            ...k.tab,
            ...x ? k.tabActive : null
          },
          children: o.label
        },
        o.key
      );
    }) }),
    /* @__PURE__ */ e("div", { ref: u }),
    /* @__PURE__ */ n("div", { style: k.panel, role: "tabpanel", "aria-label": `CatÃ©gorie ${ee}`, children: [
      /* @__PURE__ */ n("div", { style: k.panelHeader, children: [
        /* @__PURE__ */ e("h2", { style: k.h2, children: ee }),
        /* @__PURE__ */ e(
          "input",
          {
            value: g,
            onChange: (o) => R(o.target.value),
            placeholder: "Rechercher un platâ€¦",
            style: k.search,
            "aria-label": "Rechercher un plat"
          }
        )
      ] }),
      t === "bowls" ? Y("bowls") : null,
      t === "sushi" ? Y("sushi") : null,
      t !== "bowls" && t !== "sushi" ? H() : null,
      l ? /* @__PURE__ */ e("button", { type: "button", style: k.pdfBtn, onClick: b, children: "TÃ©lÃ©charger le menu complet (PDF)" }) : null
    ] })
  ] });
}
const k = {
  page: {
    minHeight: "100vh",
    padding: "24px 18px",
    color: "#F2F2F2",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    backgroundImage: `url('${pe}')`,
    backgroundSize: "512px 768px",
    backgroundPosition: "top left"
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },
  h1: {
    margin: 0,
    fontSize: 44,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: 800
  },
  tabsWrap: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    padding: "14px 2px 6px",
    marginTop: 12,
    WebkitOverflowScrolling: "touch"
  },
  tab: {
    whiteSpace: "nowrap",
    borderRadius: 999,
    border: "1px solid rgba(242,242,242,0.22)",
    background: "transparent",
    color: "#F2F2F2",
    padding: "10px 14px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer"
  },
  tabActive: {
    background: "#C8A24A",
    border: "1px solid #C8A24A",
    color: "#0F1113"
  },
  panel: {
    marginTop: 18,
    background: "rgba(15,17,19,0.65)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: "16px 14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
  },
  panelHeader: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 10
  },
  h2: {
    margin: 0,
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: 800
  },
  search: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.04)",
    color: "#F2F2F2",
    outline: "none",
    fontSize: 14,
    fontWeight: 600
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 8
  },
  row: {
    display: "flex",
    gap: 12,
    justifyContent: "space-between",
    paddingBottom: 12,
    borderBottom: "1px solid rgba(255,255,255,0.10)"
  },
  left: { flex: 1 },
  itemName: {
    fontSize: 16,
    fontWeight: 800,
    lineHeight: 1.2
  },
  itemDesc: {
    marginTop: 6,
    fontSize: 13,
    color: "#B8B8B8",
    lineHeight: 1.35
  },
  price: {
    fontSize: 15,
    fontWeight: 800,
    whiteSpace: "nowrap"
  },
  empty: {
    marginTop: 10,
    padding: "14px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    color: "#B8B8B8",
    fontSize: 14,
    fontWeight: 700
  },
  // Accordion tools
  accTools: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 10,
    flexWrap: "wrap"
  },
  accToolBtn: {
    borderRadius: 999,
    border: "1px solid rgba(242,242,242,0.22)",
    background: "rgba(255,255,255,0.03)",
    color: "#F2F2F2",
    padding: "8px 12px",
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer"
  },
  accToolHint: {
    color: "#B8B8B8",
    fontSize: 12,
    fontWeight: 700
  },
  accordion: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 8
  },
  accSection: {
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    overflow: "hidden",
    background: "rgba(255,255,255,0.02)"
  },
  accHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 12px",
    cursor: "pointer",
    background: "rgba(0,0,0,0.15)",
    border: "none",
    color: "#F2F2F2",
    textAlign: "left"
  },
  accTitle: {
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#C8A24A"
  },
  accCount: {
    color: "#F2F2F2",
    fontWeight: 900,
    letterSpacing: 0,
    textTransform: "none"
  },
  accChevron: {
    fontSize: 20,
    fontWeight: 900,
    color: "#F2F2F2",
    lineHeight: 1
  },
  accBody: {
    padding: "10px 12px 2px"
  },
  sectionBlurb: {
    marginBottom: 10,
    fontSize: 13,
    color: "#B8B8B8",
    lineHeight: 1.35
  },
  pdfBtn: {
    width: "100%",
    marginTop: 16,
    padding: "14px 14px",
    borderRadius: 14,
    border: "none",
    background: "#C8A24A",
    color: "#0F1113",
    fontSize: 15,
    fontWeight: 900,
    cursor: "pointer"
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 14,
    border: "none",
    background: "rgba(255,255,255,0.03)",
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer"
  },
  backText: {
    fontSize: 14,
    fontWeight: 800,
    color: "#F2F2F2"
  },
  addToCartBtn: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "4px 8px",
    borderRadius: 999,
    border: "none",
    background: "#C8A24A",
    color: "#0F1113",
    fontSize: 12,
    fontWeight: 800,
    cursor: "pointer"
  },
  rightControls: {
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  cartButton: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 14,
    border: "none",
    background: "rgba(255,255,255,0.03)",
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer"
  },
  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    background: "#C8A24A",
    color: "#0F1113",
    fontSize: 10,
    fontWeight: 800,
    borderRadius: 999,
    padding: "2px 4px",
    lineHeight: 1
  }
};
function la({ onBack: i }) {
  const [r, a] = q({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: ""
  }), [l, b] = q(!1), d = async (c) => {
    c.preventDefault();
    try {
      const y = await fetch("https://formsubmit.co/ajax/sawadika689@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: "Nouvelle reservation Sawadika",
          _replyto: r.email,
          _captcha: "false",
          name: r.name,
          email: r.email,
          phone: r.phone,
          date: r.date,
          time: r.time,
          guests: r.guests,
          message: r.message
        })
      });
      if (!y.ok)
        throw new Error("reservation_submit_failed");
      b(!0), setTimeout(() => {
        b(!1), a({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          message: ""
        });
      }, 3e3);
    } catch (y) {
      console.error("Reservation form error:", y), alert("Impossible d'envoyer la reservation pour le moment. Merci de reessayer.");
    }
  }, p = (c) => {
    a({
      ...r,
      [c.target.name]: c.target.value
    });
  };
  return /* @__PURE__ */ n("div", { className: "bg-size-[512px_768px] bg-top-left min-h-screen w-full", style: { backgroundImage: `url('${pe}')` }, children: [
    /* @__PURE__ */ e("header", { className: "h-[145px] w-full", children: /* @__PURE__ */ e("div", { className: "flex flex-row items-center size-full", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-between px-[64px] py-[24px] w-full", children: [
      /* @__PURE__ */ e("div", { className: "h-[109px] w-[133px] cursor-pointer", onClick: i, children: /* @__PURE__ */ e("img", { alt: "Logo", className: "object-cover size-full", src: Ie }) }),
      /* @__PURE__ */ n(
        "button",
        {
          onClick: i,
          className: "flex items-center gap-2 text-[#c8a24a] hover:text-[#d4b05e] transition-colors",
          children: [
            /* @__PURE__ */ e(xe, { className: "w-5 h-5" }),
            /* @__PURE__ */ e("span", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[16px]", children: "RETOUR" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ n("div", { className: "flex flex-col items-center px-[64px] pb-[80px]", children: [
      /* @__PURE__ */ e("h1", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[48px] text-[#f2f2f2] mb-[16px]", children: "RÃ‰SERVATION" }),
      /* @__PURE__ */ e("p", { className: "font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#b8b8b8] mb-[48px] text-center max-w-[600px]", children: "RÃ©servez votre table et laissez-vous transporter par nos saveurs asiatiques" }),
      /* @__PURE__ */ e("div", { className: "w-full max-w-[700px]", children: l ? /* @__PURE__ */ n("div", { className: "bg-[#1a1a1a]/80 border-2 border-[#c8a24a] rounded-[16px] p-[48px] text-center", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center mb-[24px]", children: /* @__PURE__ */ e("div", { className: "w-[80px] h-[80px] bg-[#c8a24a] rounded-full flex items-center justify-center", children: /* @__PURE__ */ e(ft, { className: "w-[48px] h-[48px] text-white" }) }) }),
        /* @__PURE__ */ e("h2", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[32px] text-[#f2f2f2] mb-[16px]", children: "RÃ©servation confirmÃ©e !" }),
        /* @__PURE__ */ n("p", { className: "font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#b8b8b8]", children: [
          "Nous avons bien reÃ§u votre demande de rÃ©servation.",
          /* @__PURE__ */ e("br", {}),
          "Un email de confirmation vous sera envoyÃ© sous peu."
        ] })
      ] }) : /* @__PURE__ */ n("form", { onSubmit: d, className: "bg-[#1a1a1a]/60 border border-[#333] rounded-[16px] p-[48px]", children: [
        /* @__PURE__ */ n("div", { className: "mb-[24px]", children: [
          /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#f2f2f2] mb-[12px]", children: [
            /* @__PURE__ */ e(kt, { className: "w-5 h-5 text-[#c8a24a]" }),
            "Nom complet"
          ] }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              name: "name",
              required: !0,
              value: r.name,
              onChange: p,
              className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[20px] py-[16px] text-[#f2f2f2] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
              placeholder: "Votre nom"
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-[24px] mb-[24px]", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#f2f2f2] mb-[12px]", children: [
              /* @__PURE__ */ e(gt, { className: "w-5 h-5 text-[#c8a24a]" }),
              "Email"
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                name: "email",
                required: !0,
                value: r.email,
                onChange: p,
                className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[20px] py-[16px] text-[#f2f2f2] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
                placeholder: "votre@email.com"
              }
            )
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#f2f2f2] mb-[12px]", children: [
              /* @__PURE__ */ e(bt, { className: "w-5 h-5 text-[#c8a24a]" }),
              "TÃ©lÃ©phone"
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                name: "phone",
                required: !0,
                value: r.phone,
                onChange: p,
                className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[20px] py-[16px] text-[#f2f2f2] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
                placeholder: "06 12 34 56 78"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "grid grid-cols-3 gap-[24px] mb-[24px]", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#f2f2f2] mb-[12px]", children: [
              /* @__PURE__ */ e(mt, { className: "w-5 h-5 text-[#c8a24a]" }),
              "Date"
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "date",
                name: "date",
                required: !0,
                value: r.date,
                onChange: p,
                className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[20px] py-[16px] text-[#f2f2f2] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors"
              }
            )
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#f2f2f2] mb-[12px]", children: [
              /* @__PURE__ */ e(ht, { className: "w-5 h-5 text-[#c8a24a]" }),
              "Heure"
            ] }),
            /* @__PURE__ */ n(
              "select",
              {
                name: "time",
                required: !0,
                value: r.time,
                onChange: p,
                className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[20px] py-[16px] text-[#f2f2f2] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
                children: [
                  /* @__PURE__ */ e("option", { value: "", children: "--:--" }),
                  /* @__PURE__ */ e("option", { value: "12:00", children: "12:00" }),
                  /* @__PURE__ */ e("option", { value: "12:30", children: "12:30" }),
                  /* @__PURE__ */ e("option", { value: "13:00", children: "13:00" }),
                  /* @__PURE__ */ e("option", { value: "13:30", children: "13:30" }),
                  /* @__PURE__ */ e("option", { value: "19:00", children: "19:00" }),
                  /* @__PURE__ */ e("option", { value: "19:30", children: "19:30" }),
                  /* @__PURE__ */ e("option", { value: "20:00", children: "20:00" }),
                  /* @__PURE__ */ e("option", { value: "20:30", children: "20:30" }),
                  /* @__PURE__ */ e("option", { value: "21:00", children: "21:00" }),
                  /* @__PURE__ */ e("option", { value: "21:30", children: "21:30" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#f2f2f2] mb-[12px]", children: [
              /* @__PURE__ */ e(Nt, { className: "w-5 h-5 text-[#c8a24a]" }),
              "Personnes"
            ] }),
            /* @__PURE__ */ e(
              "select",
              {
                name: "guests",
                required: !0,
                value: r.guests,
                onChange: p,
                className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[20px] py-[16px] text-[#f2f2f2] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
                children: [1, 2, 3, 4, 5, 6, 7, 8].map((c) => /* @__PURE__ */ e("option", { value: c, children: c }, c))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "mb-[32px]", children: [
          /* @__PURE__ */ e("label", { className: "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#f2f2f2] mb-[12px] block", children: "Demandes spÃ©ciales (optionnel)" }),
          /* @__PURE__ */ e(
            "textarea",
            {
              name: "message",
              value: r.message,
              onChange: p,
              rows: 4,
              className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[20px] py-[16px] text-[#f2f2f2] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors resize-none",
              placeholder: "Allergies, prÃ©fÃ©rences de table, occasion spÃ©ciale..."
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "submit",
            className: "w-full bg-[#c8a24a] hover:bg-[#d4b05e] rounded-[12px] px-[24px] py-[18px] font-['Cinzel:Bold',sans-serif] font-bold text-[18px] text-white transition-colors",
            children: "CONFIRMER LA RÃ‰SERVATION"
          }
        )
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mt-[48px] max-w-[700px] w-full", children: /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-[24px]", children: [
        /* @__PURE__ */ n("div", { className: "bg-[#1a1a1a]/40 border border-[#333] rounded-[12px] p-[24px]", children: [
          /* @__PURE__ */ e("h3", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[18px] text-[#c8a24a] mb-[12px]", children: "Horaires" }),
          /* @__PURE__ */ n("p", { className: "font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#b8b8b8]", children: [
            "DÃ©jeuner : 12h00 - 14h00",
            /* @__PURE__ */ e("br", {}),
            "DÃ®ner : 19h00 - 22h30",
            /* @__PURE__ */ e("br", {}),
            "FermÃ© le lundi"
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "bg-[#1a1a1a]/40 border border-[#333] rounded-[12px] p-[24px]", children: [
          /* @__PURE__ */ e("h3", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[18px] text-[#c8a24a] mb-[12px]", children: "Contact" }),
          /* @__PURE__ */ n("p", { className: "font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#b8b8b8]", children: [
            "TÃ©l : 01 23 45 67 89",
            /* @__PURE__ */ e("br", {}),
            "Email : contact@restaurant.fr",
            /* @__PURE__ */ e("br", {}),
            "12 Rue de l'Asie, 75001 Paris"
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function ca({ onBack: i }) {
  const [r, a] = q({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: ""
  }), [l, b] = q(!1), d = async (c) => {
    c.preventDefault();
    try {
      const y = await fetch("https://formsubmit.co/ajax/sawadika689@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: "Nouvelle reservation Sawadika",
          _replyto: r.email,
          _captcha: "false",
          name: r.name,
          email: r.email,
          phone: r.phone,
          date: r.date,
          time: r.time,
          guests: r.guests,
          message: r.message
        })
      });
      if (!y.ok)
        throw new Error("reservation_submit_failed");
      b(!0), setTimeout(() => {
        b(!1), a({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          message: ""
        });
      }, 3e3);
    } catch (y) {
      console.error("Reservation form error:", y), alert("Impossible d'envoyer la reservation pour le moment. Merci de reessayer.");
    }
  }, p = (c) => {
    a({
      ...r,
      [c.target.name]: c.target.value
    });
  };
  return /* @__PURE__ */ n("div", { className: "bg-size-[512px_768px] bg-top-left min-h-screen w-full", style: { backgroundImage: `url('${pe}')` }, children: [
    /* @__PURE__ */ e("header", { className: "h-[145px] w-full", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center size-full", children: /* @__PURE__ */ e("div", { className: "flex flex-col items-center p-[24px] w-full", children: /* @__PURE__ */ e("div", { className: "h-[109px] w-[132px] cursor-pointer mb-[16px]", onClick: i, children: /* @__PURE__ */ e("img", { alt: "Logo", className: "object-cover size-full", src: Ie }) }) }) }) }),
    /* @__PURE__ */ e("div", { className: "px-[24px] mb-[24px]", children: /* @__PURE__ */ n(
      "button",
      {
        onClick: i,
        className: "flex items-center gap-2 text-[#c8a24a] hover:text-[#d4b05e] transition-colors",
        children: [
          /* @__PURE__ */ e(xe, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[14px]", children: "RETOUR" })
        ]
      }
    ) }),
    /* @__PURE__ */ n("div", { className: "flex flex-col items-center px-[24px] pb-[80px]", children: [
      /* @__PURE__ */ e("h1", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[32px] text-[#f2f2f2] mb-[12px] text-center", children: "RÃ‰SERVATION" }),
      /* @__PURE__ */ e("p", { className: "font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#b8b8b8] mb-[32px] text-center", children: "RÃ©servez votre table et laissez-vous transporter par nos saveurs asiatiques" }),
      /* @__PURE__ */ e("div", { className: "w-full", children: l ? /* @__PURE__ */ n("div", { className: "bg-[#1a1a1a]/80 border-2 border-[#c8a24a] rounded-[16px] p-[32px] text-center", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center mb-[16px]", children: /* @__PURE__ */ e("div", { className: "w-[64px] h-[64px] bg-[#c8a24a] rounded-full flex items-center justify-center", children: /* @__PURE__ */ e(ft, { className: "w-[40px] h-[40px] text-white" }) }) }),
        /* @__PURE__ */ e("h2", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[24px] text-[#f2f2f2] mb-[12px]", children: "RÃ©servation confirmÃ©e !" }),
        /* @__PURE__ */ n("p", { className: "font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#b8b8b8]", children: [
          "Nous avons bien reÃ§u votre demande de rÃ©servation.",
          /* @__PURE__ */ e("br", {}),
          "Un email de confirmation vous sera envoyÃ© sous peu."
        ] })
      ] }) : /* @__PURE__ */ n("form", { onSubmit: d, className: "bg-[#1a1a1a]/60 border border-[#333] rounded-[16px] p-[24px]", children: [
        /* @__PURE__ */ n("div", { className: "mb-[20px]", children: [
          /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#f2f2f2] mb-[8px]", children: [
            /* @__PURE__ */ e(kt, { className: "w-4 h-4 text-[#c8a24a]" }),
            "Nom complet"
          ] }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              name: "name",
              required: !0,
              value: r.name,
              onChange: p,
              className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[16px] py-[12px] text-[#f2f2f2] text-[14px] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
              placeholder: "Votre nom"
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { className: "mb-[20px]", children: [
          /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#f2f2f2] mb-[8px]", children: [
            /* @__PURE__ */ e(gt, { className: "w-4 h-4 text-[#c8a24a]" }),
            "Email"
          ] }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "email",
              name: "email",
              required: !0,
              value: r.email,
              onChange: p,
              className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[16px] py-[12px] text-[#f2f2f2] text-[14px] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
              placeholder: "votre@email.com"
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { className: "mb-[20px]", children: [
          /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#f2f2f2] mb-[8px]", children: [
            /* @__PURE__ */ e(bt, { className: "w-4 h-4 text-[#c8a24a]" }),
            "TÃ©lÃ©phone"
          ] }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "tel",
              name: "phone",
              required: !0,
              value: r.phone,
              onChange: p,
              className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[16px] py-[12px] text-[#f2f2f2] text-[14px] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
              placeholder: "06 12 34 56 78"
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { className: "mb-[20px]", children: [
          /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#f2f2f2] mb-[8px]", children: [
            /* @__PURE__ */ e(mt, { className: "w-4 h-4 text-[#c8a24a]" }),
            "Date"
          ] }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "date",
              name: "date",
              required: !0,
              value: r.date,
              onChange: p,
              className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[16px] py-[12px] text-[#f2f2f2] text-[14px] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors"
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { className: "grid grid-cols-2 gap-[16px] mb-[20px]", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#f2f2f2] mb-[8px]", children: [
              /* @__PURE__ */ e(ht, { className: "w-4 h-4 text-[#c8a24a]" }),
              "Heure"
            ] }),
            /* @__PURE__ */ n(
              "select",
              {
                name: "time",
                required: !0,
                value: r.time,
                onChange: p,
                className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[16px] py-[12px] text-[#f2f2f2] text-[14px] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
                children: [
                  /* @__PURE__ */ e("option", { value: "", children: "--:--" }),
                  /* @__PURE__ */ e("option", { value: "12:00", children: "12:00" }),
                  /* @__PURE__ */ e("option", { value: "12:30", children: "12:30" }),
                  /* @__PURE__ */ e("option", { value: "13:00", children: "13:00" }),
                  /* @__PURE__ */ e("option", { value: "13:30", children: "13:30" }),
                  /* @__PURE__ */ e("option", { value: "19:00", children: "19:00" }),
                  /* @__PURE__ */ e("option", { value: "19:30", children: "19:30" }),
                  /* @__PURE__ */ e("option", { value: "20:00", children: "20:00" }),
                  /* @__PURE__ */ e("option", { value: "20:30", children: "20:30" }),
                  /* @__PURE__ */ e("option", { value: "21:00", children: "21:00" }),
                  /* @__PURE__ */ e("option", { value: "21:30", children: "21:30" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("label", { className: "flex items-center gap-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#f2f2f2] mb-[8px]", children: [
              /* @__PURE__ */ e(Nt, { className: "w-4 h-4 text-[#c8a24a]" }),
              "Pers."
            ] }),
            /* @__PURE__ */ e(
              "select",
              {
                name: "guests",
                required: !0,
                value: r.guests,
                onChange: p,
                className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[16px] py-[12px] text-[#f2f2f2] text-[14px] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors",
                children: [1, 2, 3, 4, 5, 6, 7, 8].map((c) => /* @__PURE__ */ e("option", { value: c, children: c }, c))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "mb-[24px]", children: [
          /* @__PURE__ */ e("label", { className: "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#f2f2f2] mb-[8px] block", children: "Demandes spÃ©ciales (optionnel)" }),
          /* @__PURE__ */ e(
            "textarea",
            {
              name: "message",
              value: r.message,
              onChange: p,
              rows: 3,
              className: "w-full bg-[#0a0a0a]/80 border border-[#333] rounded-[12px] px-[16px] py-[12px] text-[#f2f2f2] text-[14px] font-['Inter:Medium',sans-serif] focus:outline-none focus:border-[#c8a24a] transition-colors resize-none",
              placeholder: "Allergies, prÃ©fÃ©rences..."
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "submit",
            className: "w-full bg-[#c8a24a] hover:bg-[#d4b05e] rounded-[12px] px-[20px] py-[14px] font-['Cinzel:Bold',sans-serif] font-bold text-[16px] text-white transition-colors",
            children: "CONFIRMER LA RÃ‰SERVATION"
          }
        )
      ] }) }),
      /* @__PURE__ */ n("div", { className: "mt-[32px] w-full space-y-[16px]", children: [
        /* @__PURE__ */ n("div", { className: "bg-[#1a1a1a]/40 border border-[#333] rounded-[12px] p-[20px]", children: [
          /* @__PURE__ */ e("h3", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[16px] text-[#c8a24a] mb-[8px]", children: "Horaires" }),
          /* @__PURE__ */ n("p", { className: "font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#b8b8b8]", children: [
            "DÃ©jeuner : 12h00 - 14h00",
            /* @__PURE__ */ e("br", {}),
            "DÃ®ner : 19h00 - 22h30",
            /* @__PURE__ */ e("br", {}),
            "FermÃ© le lundi"
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "bg-[#1a1a1a]/40 border border-[#333] rounded-[12px] p-[20px]", children: [
          /* @__PURE__ */ e("h3", { className: "font-['Cinzel:Bold',sans-serif] font-bold text-[16px] text-[#c8a24a] mb-[8px]", children: "Contact" }),
          /* @__PURE__ */ n("p", { className: "font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#b8b8b8]", children: [
            "TÃ©l : 01 23 45 67 89",
            /* @__PURE__ */ e("br", {}),
            "Email : contact@restaurant.fr",
            /* @__PURE__ */ e("br", {}),
            "12 Rue de l'Asie, 75001 Paris"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function da({ onBack: i }) {
  const { items: r, removeItem: a, updateQuantity: l, clearCart: b, getTotalPrice: d } = Ee(), [p, c] = q(""), [u, v] = q(""), [m, h] = q(""), [f, x] = q(!1), o = () => {
    const C = /* @__PURE__ */ new Date();
    C.setMinutes(C.getMinutes() + 20), C.setSeconds(0), C.setMilliseconds(0);
    const g = C.getMinutes() % 5;
    g !== 0 && C.setMinutes(C.getMinutes() + (5 - g));
    const R = String(C.getHours()).padStart(2, "0"), U = String(C.getMinutes()).padStart(2, "0");
    return `${R}:${U}`;
  }, S = async () => {
    if (r.length === 0)
      return;
    if (!p.trim()) {
      alert("Merci de renseigner votre nom.");
      return;
    }
    if (!u.trim()) {
      alert("Merci de renseigner votre numero de telephone.");
      return;
    }
    if (!m) {
      alert("Merci de choisir une heure de recuperation.");
      return;
    }
    const C = o();
    if (!/^\d{2}:\d{2}$/.test(m) || m < C) {
      alert(`Heure invalide. Minimum autorise: ${C}`);
      return;
    }
    const g = r.map((R) => `${R.quantity}x ${R.name} (${R.price})`).join("\n");
    try {
      x(!0);
      const R = await fetch("https://formsubmit.co/ajax/sawadika689@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: "Nouvelle commande Click & Collect Sawadika",
          _captcha: "false",
          name: p.trim(),
          phone: u.trim(),
          pickup_time: m,
          total: `${d().toFixed(2).replace(".", ",")} EUR`,
          items: g
        })
      });
      if (!R.ok)
        throw new Error("order_submit_failed");
      alert("Votre commande click & collect a ete enregistree !"), b(), c(""), v(""), h("");
    } catch (R) {
      console.error("Order form error:", R), alert("Impossible d'envoyer la commande pour le moment. Merci de reessayer.");
    } finally {
      x(!1);
    }
  };
  return /* @__PURE__ */ n("div", { style: T.page, children: [
    i && /* @__PURE__ */ n("button", { onClick: i, style: T.backButton, children: [
      /* @__PURE__ */ e(xe, { style: { width: 20, height: 20 } }),
      /* @__PURE__ */ e("span", { style: T.backText, children: "RETOUR" })
    ] }),
    /* @__PURE__ */ e("h1", { style: T.h1, children: "MON PANIER" }),
    /* @__PURE__ */ e("p", { style: T.subtitle, children: "Click & Collect" }),
    /* @__PURE__ */ e("div", { style: T.container, children: r.length === 0 ? /* @__PURE__ */ n("div", { style: T.emptyCart, children: [
      /* @__PURE__ */ e(yt, { style: { width: 64, height: 64, opacity: 0.3 } }),
      /* @__PURE__ */ e("p", { style: T.emptyText, children: "Votre panier est vide" }),
      /* @__PURE__ */ e("p", { style: T.emptySubtext, children: "Ajoutez des plats depuis le menu" })
    ] }) : /* @__PURE__ */ n(ze, { children: [
      /* @__PURE__ */ e("div", { style: T.itemsList, children: r.map((c) => /* @__PURE__ */ n("div", { style: T.cartItem, children: [
        /* @__PURE__ */ n("div", { style: T.itemInfo, children: [
          /* @__PURE__ */ e("div", { style: T.itemName, children: c.name }),
          c.description && /* @__PURE__ */ e("div", { style: T.itemDescription, children: c.description }),
          /* @__PURE__ */ e("div", { style: T.itemPrice, children: c.price })
        ] }),
        /* @__PURE__ */ n("div", { style: T.itemControls, children: [
          /* @__PURE__ */ n("div", { style: T.quantityControl, children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => l(c.id, c.quantity - 1),
                style: T.quantityBtn,
                "aria-label": "Diminuer la quantitÃ©",
                children: /* @__PURE__ */ e(xt, { style: { width: 16, height: 16 } })
              }
            ),
            /* @__PURE__ */ e("span", { style: T.quantity, children: c.quantity }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => l(c.id, c.quantity + 1),
                style: T.quantityBtn,
                "aria-label": "Augmenter la quantitÃ©",
                children: /* @__PURE__ */ e(_e, { style: { width: 16, height: 16 } })
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => a(c.id),
              style: T.removeBtn,
              "aria-label": "Retirer du panier",
              children: /* @__PURE__ */ e(wt, { style: { width: 18, height: 18 } })
            }
          )
        ] })
      ] }, c.id)) }),
      /* @__PURE__ */ n("div", { style: T.summary, children: [
        /* @__PURE__ */ n("div", { style: T.totalRow, children: [
          /* @__PURE__ */ e("span", { style: T.totalLabel, children: "Total" }),
          /* @__PURE__ */ n("span", { style: T.totalPrice, children: [
            d().toFixed(2).replace(".", ","),
            "€"
          ] })
        ] }),
        /* @__PURE__ */ n("div", { style: T.orderFields, children: [
          /* @__PURE__ */ e("input", { type: "text", value: p, onChange: (C) => c(C.target.value), placeholder: "Nom pour la commande", style: T.orderInput }),
          /* @__PURE__ */ e("input", { type: "tel", value: u, onChange: (C) => v(C.target.value), placeholder: "Numero de telephone", style: T.orderInput }),
          /* @__PURE__ */ n("div", { style: T.pickupWrap, children: [
            /* @__PURE__ */ e("label", { style: T.fieldLabel, children: "Heure de recuperation" }),
            /* @__PURE__ */ e("input", { type: "time", value: m, min: o(), onChange: (C) => h(C.target.value), style: T.orderInput })
          ] })
        ] }),
        /* @__PURE__ */ e("button", { onClick: S, style: T.checkoutBtn, disabled: f, children: f ? "Envoi..." : "Valider la commande" }),
        /* @__PURE__ */ e("button", { onClick: b, style: T.clearBtn, children: "Vider le panier" })
      ] })
    ] }) })
  ] });
}
const T = {
  page: {
    minHeight: "100vh",
    padding: "24px 18px",
    color: "#F2F2F2",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    backgroundImage: `url('${pe}')`,
    backgroundSize: "512px 768px",
    backgroundPosition: "top left"
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "transparent",
    border: "none",
    color: "#C8A24A",
    cursor: "pointer",
    padding: "8px 12px",
    marginBottom: 16,
    fontSize: 14,
    fontWeight: 700
  },
  backText: {
    fontFamily: "'Cinzel', serif",
    fontWeight: 700,
    letterSpacing: 1
  },
  h1: {
    margin: 0,
    fontSize: 44,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: 800
  },
  subtitle: {
    textAlign: "center",
    color: "#C8A24A",
    fontSize: 18,
    fontWeight: 700,
    marginTop: 8,
    marginBottom: 24
  },
  container: {
    maxWidth: 800,
    margin: "0 auto",
    background: "rgba(15,17,19,0.65)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
  },
  emptyCart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    color: "#B8B8B8"
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 800,
    marginTop: 20,
    marginBottom: 8
  },
  emptySubtext: {
    fontSize: 14,
    fontWeight: 600,
    opacity: 0.7
  },
  itemsList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 24
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
    padding: 16,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 12
  },
  itemInfo: {
    flex: 1
  },
  itemName: {
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 4
  },
  itemDescription: {
    fontSize: 13,
    color: "#B8B8B8",
    marginBottom: 8,
    lineHeight: 1.35
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: 800,
    color: "#C8A24A"
  },
  itemControls: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(0,0,0,0.2)",
    borderRadius: 8,
    padding: "4px 8px"
  },
  quantityBtn: {
    background: "transparent",
    border: "none",
    color: "#F2F2F2",
    cursor: "pointer",
    padding: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  quantity: {
    fontSize: 16,
    fontWeight: 800,
    minWidth: 24,
    textAlign: "center"
  },
  removeBtn: {
    background: "transparent",
    border: "none",
    color: "#FF6B6B",
    cursor: "pointer",
    padding: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  summary: {
    borderTop: "2px solid rgba(255,255,255,0.10)",
    paddingTop: 20
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 800
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: 900,
    color: "#C8A24A"
  },
  orderFields: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 12
  },
  orderInput: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.04)",
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: 600
  },
  pickupWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: 700,
    color: "#C8A24A"
  },
  checkoutBtn: {
    width: "100%",
    padding: "16px 24px",
    background: "#C8A24A",
    border: "none",
    borderRadius: 12,
    color: "#0F1113",
    fontSize: 16,
    fontWeight: 900,
    cursor: "pointer",
    marginBottom: 12
  },
  clearBtn: {
    width: "100%",
    padding: "12px 24px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.20)",
    borderRadius: 12,
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer"
  }
}, ua = globalThis.__GLOBALS__.getAssetURL("7e3b0b3e71343695c0ce0ab9f6d32f8fe6326fba.png");
function pa({ onBack: i }) {
  const { items: r, removeItem: a, updateQuantity: l, clearCart: b, getTotalPrice: d } = Ee(), [p, c] = q(""), [u, v] = q(""), [m, h] = q(""), [f, x] = q(!1), o = () => {
    const C = /* @__PURE__ */ new Date();
    C.setMinutes(C.getMinutes() + 20), C.setSeconds(0), C.setMilliseconds(0);
    const g = C.getMinutes() % 5;
    g !== 0 && C.setMinutes(C.getMinutes() + (5 - g));
    const R = String(C.getHours()).padStart(2, "0"), U = String(C.getMinutes()).padStart(2, "0");
    return `${R}:${U}`;
  }, S = async () => {
    if (r.length === 0)
      return;
    if (!p.trim()) {
      alert("Merci de renseigner votre nom.");
      return;
    }
    if (!u.trim()) {
      alert("Merci de renseigner votre numero de telephone.");
      return;
    }
    if (!m) {
      alert("Merci de choisir une heure de recuperation.");
      return;
    }
    const C = o();
    if (!/^\d{2}:\d{2}$/.test(m) || m < C) {
      alert(`Heure invalide. Minimum autorise: ${C}`);
      return;
    }
    const g = r.map((R) => `${R.quantity}x ${R.name} (${R.price})`).join("\n");
    try {
      x(!0);
      const R = await fetch("https://formsubmit.co/ajax/sawadika689@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: "Nouvelle commande Click & Collect Sawadika",
          _captcha: "false",
          name: p.trim(),
          phone: u.trim(),
          pickup_time: m,
          total: `${d().toFixed(2).replace(".", ",")} EUR`,
          items: g
        })
      });
      if (!R.ok)
        throw new Error("order_submit_failed");
      alert("Votre commande click & collect a ete enregistree !"), b(), c(""), v(""), h("");
    } catch (R) {
      console.error("Order form error:", R), alert("Impossible d'envoyer la commande pour le moment. Merci de reessayer.");
    } finally {
      x(!1);
    }
  };
  return /* @__PURE__ */ n("div", { style: B.page, children: [
    i && /* @__PURE__ */ n("button", { onClick: i, style: B.backButton, children: [
      /* @__PURE__ */ e(xe, { style: { width: 18, height: 18 } }),
      /* @__PURE__ */ e("span", { style: B.backText, children: "RETOUR" })
    ] }),
    /* @__PURE__ */ e("h1", { style: B.h1, children: "MON PANIER" }),
    /* @__PURE__ */ e("p", { style: B.subtitle, children: "Click & Collect" }),
    /* @__PURE__ */ e("div", { style: B.container, children: r.length === 0 ? /* @__PURE__ */ n("div", { style: B.emptyCart, children: [
      /* @__PURE__ */ e(yt, { style: { width: 48, height: 48, opacity: 0.3 } }),
      /* @__PURE__ */ e("p", { style: B.emptyText, children: "Votre panier est vide" }),
      /* @__PURE__ */ e("p", { style: B.emptySubtext, children: "Ajoutez des plats depuis le menu" })
    ] }) : /* @__PURE__ */ n(ze, { children: [
      /* @__PURE__ */ e("div", { style: B.itemsList, children: r.map((c) => /* @__PURE__ */ n("div", { style: B.cartItem, children: [
        /* @__PURE__ */ n("div", { style: B.itemTop, children: [
          /* @__PURE__ */ n("div", { style: B.itemInfo, children: [
            /* @__PURE__ */ e("div", { style: B.itemName, children: c.name }),
            c.description && /* @__PURE__ */ e("div", { style: B.itemDescription, children: c.description })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => a(c.id),
              style: B.removeBtn,
              "aria-label": "Retirer du panier",
              children: /* @__PURE__ */ e(wt, { style: { width: 16, height: 16 } })
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { style: B.itemBottom, children: [
          /* @__PURE__ */ e("div", { style: B.itemPrice, children: c.price }),
          /* @__PURE__ */ n("div", { style: B.quantityControl, children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => l(c.id, c.quantity - 1),
                style: B.quantityBtn,
                "aria-label": "Diminuer la quantitÃ©",
                children: /* @__PURE__ */ e(xt, { style: { width: 14, height: 14 } })
              }
            ),
            /* @__PURE__ */ e("span", { style: B.quantity, children: c.quantity }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => l(c.id, c.quantity + 1),
                style: B.quantityBtn,
                "aria-label": "Augmenter la quantitÃ©",
                children: /* @__PURE__ */ e(_e, { style: { width: 14, height: 14 } })
              }
            )
          ] })
        ] })
      ] }, c.id)) }),
      /* @__PURE__ */ n("div", { style: B.summary, children: [
        /* @__PURE__ */ n("div", { style: B.totalRow, children: [
          /* @__PURE__ */ e("span", { style: B.totalLabel, children: "Total" }),
          /* @__PURE__ */ n("span", { style: B.totalPrice, children: [
            d().toFixed(2).replace(".", ","),
            "€"
          ] })
        ] }),
        /* @__PURE__ */ n("div", { style: B.orderFields, children: [
          /* @__PURE__ */ e("input", { type: "text", value: p, onChange: (C) => c(C.target.value), placeholder: "Nom pour la commande", style: B.orderInput }),
          /* @__PURE__ */ e("input", { type: "tel", value: u, onChange: (C) => v(C.target.value), placeholder: "Numero de telephone", style: B.orderInput }),
          /* @__PURE__ */ n("div", { style: B.pickupWrap, children: [
            /* @__PURE__ */ e("label", { style: B.fieldLabel, children: "Heure de recuperation" }),
            /* @__PURE__ */ e("input", { type: "time", value: m, min: o(), onChange: (C) => h(C.target.value), style: B.orderInput })
          ] })
        ] }),
        /* @__PURE__ */ e("button", { onClick: S, style: B.checkoutBtn, disabled: f, children: f ? "Envoi..." : "Valider la commande" }),
        /* @__PURE__ */ e("button", { onClick: b, style: B.clearBtn, children: "Vider le panier" })
      ] })
    ] }) })
  ] });
}
const B = {
  page: {
    minHeight: "100vh",
    padding: "16px 12px",
    color: "#F2F2F2",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    backgroundImage: `url('${ua}')`,
    backgroundSize: "375px 812px",
    backgroundPosition: "top left"
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "transparent",
    border: "none",
    color: "#C8A24A",
    cursor: "pointer",
    padding: "6px 8px",
    marginBottom: 12,
    fontSize: 12,
    fontWeight: 700
  },
  backText: {
    fontFamily: "'Cinzel', serif",
    fontWeight: 700,
    letterSpacing: 1
  },
  h1: {
    margin: 0,
    fontSize: 28,
    letterSpacing: 1.5,
    textAlign: "center",
    fontWeight: 800
  },
  subtitle: {
    textAlign: "center",
    color: "#C8A24A",
    fontSize: 14,
    fontWeight: 700,
    marginTop: 6,
    marginBottom: 16
  },
  container: {
    background: "rgba(15,17,19,0.65)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
  },
  emptyCart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    color: "#B8B8B8"
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 800,
    marginTop: 16,
    marginBottom: 6
  },
  emptySubtext: {
    fontSize: 13,
    fontWeight: 600,
    opacity: 0.7
  },
  itemsList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 20
  },
  cartItem: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 12,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 10
  },
  itemTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10
  },
  itemInfo: {
    flex: 1
  },
  itemName: {
    fontSize: 14,
    fontWeight: 800,
    marginBottom: 4
  },
  itemDescription: {
    fontSize: 12,
    color: "#B8B8B8",
    lineHeight: 1.3
  },
  removeBtn: {
    background: "transparent",
    border: "none",
    color: "#FF6B6B",
    cursor: "pointer",
    padding: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  itemBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 800,
    color: "#C8A24A"
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "rgba(0,0,0,0.2)",
    borderRadius: 6,
    padding: "3px 6px"
  },
  quantityBtn: {
    background: "transparent",
    border: "none",
    color: "#F2F2F2",
    cursor: "pointer",
    padding: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  quantity: {
    fontSize: 14,
    fontWeight: 800,
    minWidth: 20,
    textAlign: "center"
  },
  summary: {
    borderTop: "2px solid rgba(255,255,255,0.10)",
    paddingTop: 16
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 800
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 900,
    color: "#C8A24A"
  },
  orderFields: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 10
  },
  orderInput: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.04)",
    color: "#F2F2F2",
    fontSize: 13,
    fontWeight: 600
  },
  pickupWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: "#C8A24A"
  },
  checkoutBtn: {
    width: "100%",
    padding: "14px 20px",
    background: "#C8A24A",
    border: "none",
    borderRadius: 10,
    color: "#0F1113",
    fontSize: 14,
    fontWeight: 900,
    cursor: "pointer",
    marginBottom: 10
  },
  clearBtn: {
    width: "100%",
    padding: "10px 20px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.20)",
    borderRadius: 10,
    color: "#F2F2F2",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer"
  }
};
var ma = (i, r, a, l, b, d, p, c) => {
  let S = document.documentElement, u = ["light", "dark"];
  function v(g) {
    (Array.isArray(i) ? i : [i]).forEach((R) => {
      let U = R === "class", N = U && d ? b.map((L) => d[L] || L) : b;
      U ? (S.classList.remove(...N), S.classList.add(d && d[g] ? d[g] : g)) : S.setAttribute(R, g);
    }), t(g);
  }
  function t(g) {
    c && u.includes(g) && (S.style.colorScheme = g);
  }
  function C() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (l) v(l);
  else try {
    let g = localStorage.getItem(r) || a, R = p && g === "system" ? C() : g;
    v(R);
  } catch {
  }
}, fa = rt(void 0), ha = { setTheme: (i) => {
}, themes: [] }, ga = () => {
  var i;
  return (i = ot(fa)) != null ? i : ha;
};
Lt(({ forcedTheme: i, storageKey: r, attribute: a, enableSystem: l, enableColorScheme: b, defaultTheme: d, value: p, themes: c, nonce: S, scriptProps: u }) => {
  let v = JSON.stringify([a, r, d, i, c, p, l, b]).slice(1, -1);
  return Ae("script", { ...u, suppressHydrationWarning: !0, nonce: typeof window > "u" ? S : "", dangerouslySetInnerHTML: { __html: `(${ma.toString()})(${v})` } });
});
const xa = ({ ...i }) => {
  const { theme: r = "system" } = ga();
  return /* @__PURE__ */ e(
    ra,
    {
      theme: r,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...i
    }
  );
};
function ba() {
  const O = () => {
    const o = location.pathname.toLowerCase();
    if (o.endsWith("/menu.html"))
      return "menu";
    if (o.endsWith("/reservation.html"))
      return "reservation";
    if (o.endsWith("/panier.html") || o.endsWith("/cart.html"))
      return "cart";
    const x = new URLSearchParams(location.search).get("view"), h = (location.hash || "").replace(/^#/, "");
    return ["home", "menu", "reservation", "cart"].includes(x || h) ? x || h : "home";
  }, [i, r] = q(!1), [a, l] = q(O);
  ke(() => {
    const c = () => {
      r(window.innerWidth < 768);
    };
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, []);
  const b = (c) => {
    l(c);
  }, d = () => {
    l("home");
  }, p = () => {
    l("cart");
  };
  return /* @__PURE__ */ n(ia, { children: [
    /* @__PURE__ */ e(xa, { position: "top-center" }),
    a === "menu" && (i ? /* @__PURE__ */ e(sa, { onBack: d, onCartClick: p }) : /* @__PURE__ */ e(oa, { onBack: d, onCartClick: p })),
    a === "reservation" && (i ? /* @__PURE__ */ e(ca, { onBack: d }) : /* @__PURE__ */ e(la, { onBack: d })),
    a === "cart" && (i ? /* @__PURE__ */ e(pa, { onBack: d }) : /* @__PURE__ */ e(da, { onBack: d })),
    a === "home" && /* @__PURE__ */ e("div", { className: "min-h-screen w-full", children: i ? /* @__PURE__ */ e(mn, { onNavigate: b }) : /* @__PURE__ */ e(Zt, { onNavigate: b }) })
  ] });
}
const ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ba
}, Symbol.toStringTag, { value: "Module" }));
export {
  ka as Code0_8,
  wa as __importModule__
};




