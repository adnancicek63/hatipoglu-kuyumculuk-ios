import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"]; const useMemo = __vite__cjsImport1_react["useMemo"];
import {
  Calculator,
  Flame,
  ArrowLeftRight,
  Coins,
  Info
} from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
export const JewelCalculatorView = ({ rates }) => {
  const [calcMode, setCalcMode] = useState("sale");
  const [karat, setKarat] = useState("22K");
  const [weight, setWeight] = useState("12.50");
  const [laborPerGram, setLaborPerGram] = useState("75");
  const [fixedLabor, setFixedLabor] = useState("0");
  const [discount, setDiscount] = useState("0");
  const [scrapKarat, setScrapKarat] = useState("14K");
  const [scrapWeight, setScrapWeight] = useState("8.40");
  const [scrapMilyemDeduction, setScrapMilyemDeduction] = useState("15");
  const [givenKarat, setGivenKarat] = useState("14K");
  const [givenWeight, setGivenWeight] = useState("15.00");
  const [takenKarat, setTakenKarat] = useState("22K");
  const [takenWeight, setTakenWeight] = useState("20.00");
  const [takenLaborPerGram, setTakenLaborPerGram] = useState("80");
  const getRate = (k) => {
    return rates.find((r) => r.karat === k) || rates[0];
  };
  const hasRate = useMemo(() => {
    return rates.find((r) => r.code === "HAS") || rates[0];
  }, [rates]);
  const saleCalculation = useMemo(() => {
    const w = parseFloat(weight) || 0;
    const lPerGr = parseFloat(laborPerGram) || 0;
    const fLabor = parseFloat(fixedLabor) || 0;
    const disc = parseFloat(discount) || 0;
    const rateObj = getRate(karat);
    let purity = 0.916;
    if (karat === "24K") purity = 0.995;
    else if (karat === "18K") purity = 0.75;
    else if (karat === "14K") purity = 0.585;
    const baseMetalValue = rateObj.selling * w;
    const totalLabor = lPerGr * w + fLabor;
    const subtotal = baseMetalValue + totalLabor;
    const total = Math.max(0, subtotal - disc);
    const pureHasGram = w * purity;
    const costBase = rateObj.buying * w;
    const estimatedProfit = total - costBase;
    return {
      subtotal,
      total,
      pureHasGram,
      totalLabor,
      estimatedProfit,
      costBase
    };
  }, [karat, weight, laborPerGram, fixedLabor, discount, rates]);
  const scrapCalculation = useMemo(() => {
    const w = parseFloat(scrapWeight) || 0;
    const fireMilyem = parseFloat(scrapMilyemDeduction) || 0;
    let baseMilyem = 585;
    if (scrapKarat === "24K") baseMilyem = 995;
    else if (scrapKarat === "22K") baseMilyem = 916;
    else if (scrapKarat === "18K") baseMilyem = 750;
    else if (scrapKarat === "14K") baseMilyem = 585;
    const netMilyem = Math.max(0, baseMilyem - fireMilyem);
    const netHasGram = w * netMilyem / 1e3;
    const payoutTL = netHasGram * hasRate.buying;
    return {
      baseMilyem,
      netMilyem,
      netHasGram,
      payoutTL
    };
  }, [scrapKarat, scrapWeight, scrapMilyemDeduction, hasRate]);
  const tradeCalculation = useMemo(() => {
    const gW = parseFloat(givenWeight) || 0;
    const tW = parseFloat(takenWeight) || 0;
    const tLabor = parseFloat(takenLaborPerGram) || 0;
    const gRate = getRate(givenKarat);
    const tRate = getRate(takenKarat);
    const givenValueTL = gW * gRate.buying;
    const takenMetalTL = tW * tRate.selling;
    const takenLaborTotal = tW * tLabor;
    const takenValueTL = takenMetalTL + takenLaborTotal;
    const differenceTL = takenValueTL - givenValueTL;
    return {
      givenValueTL,
      takenValueTL,
      takenLaborTotal,
      differenceTL
    };
  }, [givenKarat, givenWeight, takenKarat, takenWeight, takenLaborPerGram, rates]);
  return /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 pb-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-[#141520] p-1 rounded-2xl border border-white/10 flex items-center shadow-inner", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setCalcMode("sale"),
          className: `flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${calcMode === "sale" ? "bg-amber-500 text-black shadow-md" : "text-neutral-400 hover:text-white"}`,
          children: [
            /* @__PURE__ */ jsxDEV(Calculator, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 147,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Satış / Fiyat" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 148,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 139,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setCalcMode("scrap"),
          className: `flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${calcMode === "scrap" ? "bg-amber-500 text-black shadow-md" : "text-neutral-400 hover:text-white"}`,
          children: [
            /* @__PURE__ */ jsxDEV(Flame, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 159,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Hurda Bozdur" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 160,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 151,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setCalcMode("trade"),
          className: `flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${calcMode === "trade" ? "bg-amber-500 text-black shadow-md" : "text-neutral-400 hover:text-white"}`,
          children: [
            /* @__PURE__ */ jsxDEV(ArrowLeftRight, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 171,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Altın Takas" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 172,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 163,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    calcMode === "sale" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-[#13141d] border border-amber-500/20 p-5 shadow-xl space-y-3.5", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Coins, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Satış & Fiyat Hesaplama" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1.5", children: "Ayar Seçimi" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-4 gap-2", children: ["24K", "22K", "18K", "14K"].map((k) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setKarat(k),
              className: `py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${karat === k ? "bg-amber-500 text-black border-amber-500 shadow-md shadow-amber-500/20" : "bg-black/40 text-neutral-300 border-white/10 hover:border-white/20"}`,
              children: k
            },
            k,
            false,
            {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 190,
              columnNumber: 19
            },
            this
          )) }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 188,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 186,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1", children: "Ağırlık (Gram)" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 209,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                step: "0.01",
                value: weight,
                onChange: (e) => setWeight(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-sm focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 212,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1", children: "Gram Başı İşçilik (₺)" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 222,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                step: "5",
                value: laborPerGram,
                onChange: (e) => setLaborPerGram(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-sm focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 225,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 221,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1", children: "Sabit Ek İşçilik (₺)" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 237,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                step: "50",
                value: fixedLabor,
                onChange: (e) => setFixedLabor(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-sm focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 240,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 236,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1", children: "İndirim / İkram (₺)" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 250,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                step: "50",
                value: discount,
                onChange: (e) => setDiscount(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-rose-300 font-mono text-sm focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 253,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 249,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 235,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
        lineNumber: 179,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-gradient-to-br from-[#1b1710] to-[#12131b] border border-amber-500/35 p-5 shadow-2xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-xs text-neutral-400", children: [
          /* @__PURE__ */ jsxDEV("span", { children: "Nihai Müşteri Satış Tutarı" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 267,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400 font-medium", children: [
            "Has Karşılığı: ",
            saleCalculation.pureHasGram.toFixed(2),
            " gr"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 268,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-2 text-3xl font-extrabold text-amber-400 font-mono tracking-tight", children: [
          "₺",
          Math.round(saleCalculation.total).toLocaleString("tr-TR")
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 271,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-4 pt-3 border-t border-white/10 space-y-1.5 text-xs text-neutral-300", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-400", children: "Toplam İşçilik Tutarı:" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 277,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-mono", children: [
              "₺",
              Math.round(saleCalculation.totalLabor).toLocaleString("tr-TR")
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 278,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 276,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-400", children: "Maliyet Tabanı:" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 281,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-neutral-400", children: [
              "₺",
              Math.round(saleCalculation.costBase).toLocaleString("tr-TR")
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 282,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 280,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between font-semibold", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-300", children: "Tahmini Brüt Kâr:" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 285,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-emerald-400", children: [
              "+₺",
              Math.round(saleCalculation.estimatedProfit).toLocaleString("tr-TR")
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 286,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 284,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 275,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
        lineNumber: 265,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
      lineNumber: 178,
      columnNumber: 9
    }, this),
    calcMode === "scrap" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-[#13141d] border border-amber-500/20 p-5 shadow-xl space-y-3.5", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Flame, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 298,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Hurda Altın Bozdurma & Fire Kesintisi" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 299,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 297,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1.5", children: "Hurda Ayarı" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 303,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-4 gap-2", children: ["24K", "22K", "18K", "14K"].map((k) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setScrapKarat(k),
              className: `py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${scrapKarat === k ? "bg-amber-500 text-black border-amber-500 shadow-md shadow-amber-500/20" : "bg-black/40 text-neutral-300 border-white/10"}`,
              children: k
            },
            k,
            false,
            {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 306,
              columnNumber: 19
            },
            this
          )) }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 304,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 302,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1", children: "Tartılan Ağırlık (gr)" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 324,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                step: "0.01",
                value: scrapWeight,
                onChange: (e) => setScrapWeight(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-sm focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 327,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 323,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1", children: "Fire Payı (Milyem / Bindelik)" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 337,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                step: "1",
                value: scrapMilyemDeduction,
                onChange: (e) => setScrapMilyemDeduction(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-sm focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 340,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 336,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 322,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-[11px] text-amber-200/90 flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(Info, { className: "w-4 h-4 shrink-0 text-amber-400 mt-0.5" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 351,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: [
            "Hurda altın, ergitme ve ramat firesi düşülerek Net Has (",
            scrapCalculation.netMilyem,
            "/1000 milyem) üzerinden hesaplanır."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 352,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 350,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
        lineNumber: 296,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-gradient-to-br from-[#121b14] to-[#12131b] border border-emerald-500/35 p-5 shadow-2xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-xs text-neutral-400", children: [
          /* @__PURE__ */ jsxDEV("span", { children: "Müşteriye Ödenecek Nakit" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 361,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 font-medium", children: [
            "Net Has: ",
            scrapCalculation.netHasGram.toFixed(3),
            " gr"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 362,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 360,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-2 text-3xl font-extrabold text-emerald-400 font-mono tracking-tight", children: [
          "₺",
          Math.round(scrapCalculation.payoutTL).toLocaleString("tr-TR")
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 365,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-400", children: "Uygulanan Has Alış Kuru:" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 370,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-white", children: [
            "₺",
            hasRate.buying.toLocaleString("tr-TR"),
            " / gr"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 371,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 369,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
        lineNumber: 359,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
      lineNumber: 295,
      columnNumber: 9
    }, this),
    calcMode === "trade" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-[#13141d] border border-amber-500/20 p-5 shadow-xl space-y-4", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(ArrowLeftRight, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 382,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Altın Değişimi & Takas Simülatörü" }, void 0, false, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 383,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 381,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-semibold text-rose-400 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { children: "1. Müşterinin Getirdiği (Verilen) Altın" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 389,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-neutral-400", children: "(Alış kuru uygulanır)" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 390,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 388,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] text-neutral-400 block mb-0.5", children: "Ayar" }, void 0, false, {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 394,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  value: givenKarat,
                  onChange: (e) => setGivenKarat(e.target.value),
                  className: "w-full px-2 py-1.5 rounded-lg bg-black border border-white/15 text-white text-xs",
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "24K", children: "24K Has" }, void 0, false, {
                      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                      lineNumber: 400,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "22K", children: "22K Bilezik" }, void 0, false, {
                      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                      lineNumber: 401,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "18K", children: "18K Takı" }, void 0, false, {
                      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                      lineNumber: 402,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "14K", children: "14K Takı" }, void 0, false, {
                      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                      lineNumber: 403,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                  lineNumber: 395,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 393,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] text-neutral-400 block mb-0.5", children: "Gram" }, void 0, false, {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 407,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "number",
                  step: "0.01",
                  value: givenWeight,
                  onChange: (e) => setGivenWeight(e.target.value),
                  className: "w-full px-2 py-1.5 rounded-lg bg-black border border-white/15 text-white text-xs font-mono"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                  lineNumber: 408,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 406,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 392,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-right text-[11px] text-neutral-400 pt-1", children: [
            "Sayım Değeri: ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: [
              "₺",
              Math.round(tradeCalculation.givenValueTL).toLocaleString("tr-TR")
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 418,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 417,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 387,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-semibold text-emerald-400 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { children: "2. Müşterinin Aldığı (Yeni) Altın" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 425,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-neutral-400", children: "(Satış kuru + işçilik)" }, void 0, false, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 426,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 424,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] text-neutral-400 block mb-0.5", children: "Ayar" }, void 0, false, {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 430,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  value: takenKarat,
                  onChange: (e) => setTakenKarat(e.target.value),
                  className: "w-full px-2 py-1.5 rounded-lg bg-black border border-white/15 text-white text-xs",
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "24K", children: "24K Has" }, void 0, false, {
                      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                      lineNumber: 436,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "22K", children: "22K Bilezik" }, void 0, false, {
                      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                      lineNumber: 437,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "18K", children: "18K Takı" }, void 0, false, {
                      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                      lineNumber: 438,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "14K", children: "14K Takı" }, void 0, false, {
                      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                      lineNumber: 439,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                  lineNumber: 431,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 429,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] text-neutral-400 block mb-0.5", children: "Gram" }, void 0, false, {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 443,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "number",
                  step: "0.01",
                  value: takenWeight,
                  onChange: (e) => setTakenWeight(e.target.value),
                  className: "w-full px-2 py-1.5 rounded-lg bg-black border border-white/15 text-white text-xs font-mono"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                  lineNumber: 444,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 442,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] text-neutral-400 block mb-0.5", children: "İşçilik/gr (₺)" }, void 0, false, {
                fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                lineNumber: 453,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "number",
                  step: "5",
                  value: takenLaborPerGram,
                  onChange: (e) => setTakenLaborPerGram(e.target.value),
                  className: "w-full px-2 py-1.5 rounded-lg bg-black border border-white/15 text-white text-xs font-mono"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
                  lineNumber: 454,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 452,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 428,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-right text-[11px] text-neutral-400 pt-1", children: [
            "Yeni Ürün Bedeli: ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: [
              "₺",
              Math.round(tradeCalculation.takenValueTL).toLocaleString("tr-TR")
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
              lineNumber: 464,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
            lineNumber: 463,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 423,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
        lineNumber: 380,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-gradient-to-br from-[#1b1812] to-[#12131b] border border-amber-500/35 p-5 shadow-2xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-neutral-400", children: tradeCalculation.differenceTL >= 0 ? "Müşterinin Ödeyeceği Nakit Fark" : "Müşteriye İade Edilecek Tutar" }, void 0, false, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 471,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: `mt-2 text-3xl font-extrabold font-mono tracking-tight ${tradeCalculation.differenceTL >= 0 ? "text-amber-400" : "text-emerald-400"}`, children: [
          "₺",
          Math.abs(Math.round(tradeCalculation.differenceTL)).toLocaleString("tr-TR")
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 477,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-3 text-xs text-neutral-400", children: tradeCalculation.differenceTL >= 0 ? "Müşteri getirdiği eski altın düşüldükten sonra bu farkı ödeyecektir." : "Müşterinin getirdiği altın yeni üründen fazla tuttuğu için para üstü ödenecektir." }, void 0, false, {
          fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
          lineNumber: 483,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
        lineNumber: 470,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
      lineNumber: 379,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/calculator/JewelCalculatorView.tsx?raw=1789374318218",
    lineNumber: 136,
    columnNumber: 5
  }, this);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpld2VsQ2FsY3VsYXRvclZpZXcudHN4P3Jhdz0xNzg5Mzc0MzE4MjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFxuICBDYWxjdWxhdG9yLCBcbiAgRmxhbWUsIFxuICBBcnJvd0xlZnRSaWdodCwgXG4gIERvbGxhclNpZ24sIFxuICBTY2FsZSwgXG4gIENvaW5zLCBcbiAgU3BhcmtsZXMsXG4gIEluZm9cbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEdvbGRSYXRlLCBHb2xkS2FyYXQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBKZXdlbENhbGN1bGF0b3JWaWV3UHJvcHMge1xuICByYXRlczogR29sZFJhdGVbXTtcbn1cblxudHlwZSBDYWxjTW9kZSA9ICdzYWxlJyB8ICdzY3JhcCcgfCAndHJhZGUnO1xuXG5leHBvcnQgY29uc3QgSmV3ZWxDYWxjdWxhdG9yVmlldzogUmVhY3QuRkM8SmV3ZWxDYWxjdWxhdG9yVmlld1Byb3BzPiA9ICh7IHJhdGVzIH0pID0+IHtcbiAgY29uc3QgW2NhbGNNb2RlLCBzZXRDYWxjTW9kZV0gPSB1c2VTdGF0ZTxDYWxjTW9kZT4oJ3NhbGUnKTtcblxuICAvLyBNb2RlIDE6IFNhdMSxxZ8gSGVzYXBsYXnEsWPEsSBTdGF0ZVxuICBjb25zdCBba2FyYXQsIHNldEthcmF0XSA9IHVzZVN0YXRlPEdvbGRLYXJhdD4oJzIySycpO1xuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGU8c3RyaW5nPignMTIuNTAnKTtcbiAgY29uc3QgW2xhYm9yUGVyR3JhbSwgc2V0TGFib3JQZXJHcmFtXSA9IHVzZVN0YXRlPHN0cmluZz4oJzc1Jyk7XG4gIGNvbnN0IFtmaXhlZExhYm9yLCBzZXRGaXhlZExhYm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJzAnKTtcbiAgY29uc3QgW2Rpc2NvdW50LCBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcwJyk7XG5cbiAgLy8gTW9kZSAyOiBIdXJkYSAvIEJvemR1cm1hIFN0YXRlXG4gIGNvbnN0IFtzY3JhcEthcmF0LCBzZXRTY3JhcEthcmF0XSA9IHVzZVN0YXRlPEdvbGRLYXJhdD4oJzE0SycpO1xuICBjb25zdCBbc2NyYXBXZWlnaHQsIHNldFNjcmFwV2VpZ2h0XSA9IHVzZVN0YXRlPHN0cmluZz4oJzguNDAnKTtcbiAgY29uc3QgW3NjcmFwTWlseWVtRGVkdWN0aW9uLCBzZXRTY3JhcE1pbHllbURlZHVjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcxNScpOyAvLyBGaXJlIG1pbHllbWkgKMO2cm46IDE1IG1pbHllbSlcblxuICAvLyBNb2RlIDM6IFRha2FzIChBbHTEsW4gRGXEn2nFn2ltaSkgU3RhdGVcbiAgY29uc3QgW2dpdmVuS2FyYXQsIHNldEdpdmVuS2FyYXRdID0gdXNlU3RhdGU8R29sZEthcmF0PignMTRLJyk7XG4gIGNvbnN0IFtnaXZlbldlaWdodCwgc2V0R2l2ZW5XZWlnaHRdID0gdXNlU3RhdGU8c3RyaW5nPignMTUuMDAnKTtcbiAgY29uc3QgW3Rha2VuS2FyYXQsIHNldFRha2VuS2FyYXRdID0gdXNlU3RhdGU8R29sZEthcmF0PignMjJLJyk7XG4gIGNvbnN0IFt0YWtlbldlaWdodCwgc2V0VGFrZW5XZWlnaHRdID0gdXNlU3RhdGU8c3RyaW5nPignMjAuMDAnKTtcbiAgY29uc3QgW3Rha2VuTGFib3JQZXJHcmFtLCBzZXRUYWtlbkxhYm9yUGVyR3JhbV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCc4MCcpO1xuXG4gIC8vIEZpbmQgcmF0ZSBoZWxwZXJcbiAgY29uc3QgZ2V0UmF0ZSA9IChrOiBHb2xkS2FyYXQpID0+IHtcbiAgICByZXR1cm4gcmF0ZXMuZmluZChyID0+IHIua2FyYXQgPT09IGspIHx8IHJhdGVzWzBdO1xuICB9O1xuXG4gIGNvbnN0IGhhc1JhdGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gcmF0ZXMuZmluZChyID0+IHIuY29kZSA9PT0gJ0hBUycpIHx8IHJhdGVzWzBdO1xuICB9LCBbcmF0ZXNdKTtcblxuICAvLyBNb2RlIDEgQ29tcHV0YXRpb25zXG4gIGNvbnN0IHNhbGVDYWxjdWxhdGlvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHcgPSBwYXJzZUZsb2F0KHdlaWdodCkgfHwgMDtcbiAgICBjb25zdCBsUGVyR3IgPSBwYXJzZUZsb2F0KGxhYm9yUGVyR3JhbSkgfHwgMDtcbiAgICBjb25zdCBmTGFib3IgPSBwYXJzZUZsb2F0KGZpeGVkTGFib3IpIHx8IDA7XG4gICAgY29uc3QgZGlzYyA9IHBhcnNlRmxvYXQoZGlzY291bnQpIHx8IDA7XG5cbiAgICBjb25zdCByYXRlT2JqID0gZ2V0UmF0ZShrYXJhdCk7XG4gICAgbGV0IHB1cml0eSA9IDAuOTE2O1xuICAgIGlmIChrYXJhdCA9PT0gJzI0SycpIHB1cml0eSA9IDAuOTk1O1xuICAgIGVsc2UgaWYgKGthcmF0ID09PSAnMThLJykgcHVyaXR5ID0gMC43NTA7XG4gICAgZWxzZSBpZiAoa2FyYXQgPT09ICcxNEsnKSBwdXJpdHkgPSAwLjU4NTtcblxuICAgIC8vIEdyYW0gYmFzZSBwcmljZVxuICAgIGNvbnN0IGJhc2VNZXRhbFZhbHVlID0gcmF0ZU9iai5zZWxsaW5nICogdztcbiAgICBjb25zdCB0b3RhbExhYm9yID0gKGxQZXJHciAqIHcpICsgZkxhYm9yO1xuICAgIGNvbnN0IHN1YnRvdGFsID0gYmFzZU1ldGFsVmFsdWUgKyB0b3RhbExhYm9yO1xuICAgIGNvbnN0IHRvdGFsID0gTWF0aC5tYXgoMCwgc3VidG90YWwgLSBkaXNjKTtcblxuICAgIGNvbnN0IHB1cmVIYXNHcmFtID0gdyAqIHB1cml0eTtcbiAgICBjb25zdCBjb3N0QmFzZSA9IHJhdGVPYmouYnV5aW5nICogdztcbiAgICBjb25zdCBlc3RpbWF0ZWRQcm9maXQgPSB0b3RhbCAtIGNvc3RCYXNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1YnRvdGFsLFxuICAgICAgdG90YWwsXG4gICAgICBwdXJlSGFzR3JhbSxcbiAgICAgIHRvdGFsTGFib3IsXG4gICAgICBlc3RpbWF0ZWRQcm9maXQsXG4gICAgICBjb3N0QmFzZSxcbiAgICB9O1xuICB9LCBba2FyYXQsIHdlaWdodCwgbGFib3JQZXJHcmFtLCBmaXhlZExhYm9yLCBkaXNjb3VudCwgcmF0ZXNdKTtcblxuICAvLyBNb2RlIDIgQ29tcHV0YXRpb25zIChIdXJkYSAvIEJvemR1cm1hKVxuICBjb25zdCBzY3JhcENhbGN1bGF0aW9uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgdyA9IHBhcnNlRmxvYXQoc2NyYXBXZWlnaHQpIHx8IDA7XG4gICAgY29uc3QgZmlyZU1pbHllbSA9IHBhcnNlRmxvYXQoc2NyYXBNaWx5ZW1EZWR1Y3Rpb24pIHx8IDA7XG5cbiAgICBsZXQgYmFzZU1pbHllbSA9IDU4NTtcbiAgICBpZiAoc2NyYXBLYXJhdCA9PT0gJzI0SycpIGJhc2VNaWx5ZW0gPSA5OTU7XG4gICAgZWxzZSBpZiAoc2NyYXBLYXJhdCA9PT0gJzIySycpIGJhc2VNaWx5ZW0gPSA5MTY7XG4gICAgZWxzZSBpZiAoc2NyYXBLYXJhdCA9PT0gJzE4SycpIGJhc2VNaWx5ZW0gPSA3NTA7XG4gICAgZWxzZSBpZiAoc2NyYXBLYXJhdCA9PT0gJzE0SycpIGJhc2VNaWx5ZW0gPSA1ODU7XG5cbiAgICAvLyBOZXQgTWlseWVtIGFmdGVyIGZpcmVcbiAgICBjb25zdCBuZXRNaWx5ZW0gPSBNYXRoLm1heCgwLCBiYXNlTWlseWVtIC0gZmlyZU1pbHllbSk7XG4gICAgY29uc3QgbmV0SGFzR3JhbSA9ICh3ICogbmV0TWlseWVtKSAvIDEwMDA7XG4gICAgY29uc3QgcGF5b3V0VEwgPSBuZXRIYXNHcmFtICogaGFzUmF0ZS5idXlpbmc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmFzZU1pbHllbSxcbiAgICAgIG5ldE1pbHllbSxcbiAgICAgIG5ldEhhc0dyYW0sXG4gICAgICBwYXlvdXRUTCxcbiAgICB9O1xuICB9LCBbc2NyYXBLYXJhdCwgc2NyYXBXZWlnaHQsIHNjcmFwTWlseWVtRGVkdWN0aW9uLCBoYXNSYXRlXSk7XG5cbiAgLy8gTW9kZSAzIENvbXB1dGF0aW9ucyAoVGFrYXMpXG4gIGNvbnN0IHRyYWRlQ2FsY3VsYXRpb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBnVyA9IHBhcnNlRmxvYXQoZ2l2ZW5XZWlnaHQpIHx8IDA7XG4gICAgY29uc3QgdFcgPSBwYXJzZUZsb2F0KHRha2VuV2VpZ2h0KSB8fCAwO1xuICAgIGNvbnN0IHRMYWJvciA9IHBhcnNlRmxvYXQodGFrZW5MYWJvclBlckdyYW0pIHx8IDA7XG5cbiAgICBjb25zdCBnUmF0ZSA9IGdldFJhdGUoZ2l2ZW5LYXJhdCk7XG4gICAgY29uc3QgdFJhdGUgPSBnZXRSYXRlKHRha2VuS2FyYXQpO1xuXG4gICAgLy8gTcO8xZ90ZXJpbmluIHZlcmRpxJ9pIGFsdMSxbsSxbiBrdXl1bWN1eWEgYWzEscWfIGRlxJ9lcmlcbiAgICBjb25zdCBnaXZlblZhbHVlVEwgPSBnVyAqIGdSYXRlLmJ1eWluZztcblxuICAgIC8vIE3DvMWfdGVyaW5pbiBhbGTEscSfxLEgeWVuaSBhbHTEsW7EsW4gc2F0xLHFnyBkZcSfZXJpIChtZXRhbCArIGnFn8OnaWxpaylcbiAgICBjb25zdCB0YWtlbk1ldGFsVEwgPSB0VyAqIHRSYXRlLnNlbGxpbmc7XG4gICAgY29uc3QgdGFrZW5MYWJvclRvdGFsID0gdFcgKiB0TGFib3I7XG4gICAgY29uc3QgdGFrZW5WYWx1ZVRMID0gdGFrZW5NZXRhbFRMICsgdGFrZW5MYWJvclRvdGFsO1xuXG4gICAgY29uc3QgZGlmZmVyZW5jZVRMID0gdGFrZW5WYWx1ZVRMIC0gZ2l2ZW5WYWx1ZVRMOyAvLyBNw7zFn3RlcmluaW4gw7ZkZXllY2XEn2kgZmFya1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdpdmVuVmFsdWVUTCxcbiAgICAgIHRha2VuVmFsdWVUTCxcbiAgICAgIHRha2VuTGFib3JUb3RhbCxcbiAgICAgIGRpZmZlcmVuY2VUTCxcbiAgICB9O1xuICB9LCBbZ2l2ZW5LYXJhdCwgZ2l2ZW5XZWlnaHQsIHRha2VuS2FyYXQsIHRha2VuV2VpZ2h0LCB0YWtlbkxhYm9yUGVyR3JhbSwgcmF0ZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHBiLTZcIj5cbiAgICAgIHsvKiBTZWdtZW50ZWQgQ29udHJvbGxlciBpT1MgSGVhZGVyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzE0MTUyMF0gcC0xIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgZmxleCBpdGVtcy1jZW50ZXIgc2hhZG93LWlubmVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDYWxjTW9kZSgnc2FsZScpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtMSBweS0yIHJvdW5kZWQteGwgdGV4dC14cyBmb250LXNlbWlib2xkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgY2FsY01vZGUgPT09ICdzYWxlJ1xuICAgICAgICAgICAgICA/ICdiZy1hbWJlci01MDAgdGV4dC1ibGFjayBzaGFkb3ctbWQnXG4gICAgICAgICAgICAgIDogJ3RleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYWxjdWxhdG9yIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICA8c3Bhbj5TYXTEscWfIC8gRml5YXQ8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDYWxjTW9kZSgnc2NyYXAnKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgIGNhbGNNb2RlID09PSAnc2NyYXAnXG4gICAgICAgICAgICAgID8gJ2JnLWFtYmVyLTUwMCB0ZXh0LWJsYWNrIHNoYWRvdy1tZCdcbiAgICAgICAgICAgICAgOiAndGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPEZsYW1lIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICA8c3Bhbj5IdXJkYSBCb3pkdXI8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDYWxjTW9kZSgndHJhZGUnKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgIGNhbGNNb2RlID09PSAndHJhZGUnXG4gICAgICAgICAgICAgID8gJ2JnLWFtYmVyLTUwMCB0ZXh0LWJsYWNrIHNoYWRvdy1tZCdcbiAgICAgICAgICAgICAgOiAndGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93TGVmdFJpZ2h0IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICA8c3Bhbj5BbHTEsW4gVGFrYXM8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNT0RFIDE6IFNBVEnFniBIRVNBUExBWUlDSSAqL31cbiAgICAgIHtjYWxjTW9kZSA9PT0gJ3NhbGUnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJnLVsjMTMxNDFkXSBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8yMCBwLTUgc2hhZG93LXhsIHNwYWNlLXktMy41XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8Q29pbnMgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPlNhdMSxxZ8gJiBGaXlhdCBIZXNhcGxhbWE8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICB7LyogS2FyYXQgc2VsZWN0aW9uIHBpbGxzICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtWzExcHhdIHRleHQtbmV1dHJhbC00MDAgbWItMS41XCI+QXlhciBTZcOnaW1pPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgeyhbJzI0SycsICcyMksnLCAnMThLJywgJzE0SyddIGFzIEdvbGRLYXJhdFtdKS5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17a31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEthcmF0KGspfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS0yIHJvdW5kZWQteGwgdGV4dC14cyBmb250LWJvbGQgYm9yZGVyIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBrYXJhdCA9PT0ga1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctYW1iZXItNTAwIHRleHQtYmxhY2sgYm9yZGVyLWFtYmVyLTUwMCBzaGFkb3ctbWQgc2hhZG93LWFtYmVyLTUwMC8yMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWJsYWNrLzQwIHRleHQtbmV1dHJhbC0zMDAgYm9yZGVyLXdoaXRlLzEwIGhvdmVyOmJvcmRlci13aGl0ZS8yMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtrfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBJbnB1dHMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBBxJ/EsXJsxLFrIChHcmFtKVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3ZWlnaHR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRXZWlnaHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbSBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBHcmFtIEJhxZ/EsSDEsMWfw6dpbGlrICjigropXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYm9yUGVyR3JhbX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldExhYm9yUGVyR3JhbShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBTYWJpdCBFayDEsMWfw6dpbGlrICjigropXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXhlZExhYm9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Rml4ZWRMYWJvcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIMSwbmRpcmltIC8gxLBrcmFtICjigropXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERpc2NvdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtcm9zZS0zMDAgZm9udC1tb25vIHRleHQtc20gZm9jdXM6Ym9yZGVyLWFtYmVyLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmVzdWx0IENhcmQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMWIxNzEwXSB0by1bIzEyMTMxYl0gYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzUgcC01IHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1uZXV0cmFsLTQwMFwiPlxuICAgICAgICAgICAgICA8c3Bhbj5OaWhhaSBNw7zFn3RlcmkgU2F0xLHFnyBUdXRhcsSxPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMCBmb250LW1lZGl1bVwiPkhhcyBLYXLFn8SxbMSxxJ/EsToge3NhbGVDYWxjdWxhdGlvbi5wdXJlSGFzR3JhbS50b0ZpeGVkKDIpfSBncjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1hbWJlci00MDAgZm9udC1tb25vIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgIOKCuntNYXRoLnJvdW5kKHNhbGVDYWxjdWxhdGlvbi50b3RhbCkudG9Mb2NhbGVTdHJpbmcoJ3RyLVRSJyl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHB0LTMgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwIHNwYWNlLXktMS41IHRleHQteHMgdGV4dC1uZXV0cmFsLTMwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTQwMFwiPlRvcGxhbSDEsMWfw6dpbGlrIFR1dGFyxLE6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ub1wiPuKCuntNYXRoLnJvdW5kKHNhbGVDYWxjdWxhdGlvbi50b3RhbExhYm9yKS50b0xvY2FsZVN0cmluZygndHItVFInKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTQwMFwiPk1hbGl5ZXQgVGFiYW7EsTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtbmV1dHJhbC00MDBcIj7igrp7TWF0aC5yb3VuZChzYWxlQ2FsY3VsYXRpb24uY29zdEJhc2UpLnRvTG9jYWxlU3RyaW5nKCd0ci1UUicpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC0zMDBcIj5UYWhtaW5pIEJyw7x0IEvDonI6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LWVtZXJhbGQtNDAwXCI+K+KCuntNYXRoLnJvdW5kKHNhbGVDYWxjdWxhdGlvbi5lc3RpbWF0ZWRQcm9maXQpLnRvTG9jYWxlU3RyaW5nKCd0ci1UUicpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogTU9ERSAyOiBIVVJEQSBCT1pEVVJNQSBIRVNBUExBWUlDSSAqL31cbiAgICAgIHtjYWxjTW9kZSA9PT0gJ3NjcmFwJyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBiZy1bIzEzMTQxZF0gYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMjAgcC01IHNoYWRvdy14bCBzcGFjZS15LTMuNVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPEZsYW1lIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5IdXJkYSBBbHTEsW4gQm96ZHVybWEgJiBGaXJlIEtlc2ludGlzaTwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwIG1iLTEuNVwiPkh1cmRhIEF5YXLEsTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIHsoWycyNEsnLCAnMjJLJywgJzE4SycsICcxNEsnXSBhcyBHb2xkS2FyYXRbXSkubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTY3JhcEthcmF0KGspfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS0yIHJvdW5kZWQteGwgdGV4dC14cyBmb250LWJvbGQgYm9yZGVyIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JhcEthcmF0ID09PSBrXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci01MDAgdGV4dC1ibGFjayBib3JkZXItYW1iZXItNTAwIHNoYWRvdy1tZCBzaGFkb3ctYW1iZXItNTAwLzIwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctYmxhY2svNDAgdGV4dC1uZXV0cmFsLTMwMCBib3JkZXItd2hpdGUvMTAnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7a31cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBUYXJ0xLFsYW4gQcSfxLFybMSxayAoZ3IpXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjcmFwV2VpZ2h0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2NyYXBXZWlnaHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbSBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBGaXJlIFBhecSxIChNaWx5ZW0gLyBCaW5kZWxpaylcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2NyYXBNaWx5ZW1EZWR1Y3Rpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTY3JhcE1pbHllbURlZHVjdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy1hbWJlci01MDAvMTAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8yMCB0ZXh0LVsxMXB4XSB0ZXh0LWFtYmVyLTIwMC85MCBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cInctNCBoLTQgc2hyaW5rLTAgdGV4dC1hbWJlci00MDAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgSHVyZGEgYWx0xLFuLCBlcmdpdG1lIHZlIHJhbWF0IGZpcmVzaSBkw7zFn8O8bGVyZWsgTmV0IEhhcyAoe3NjcmFwQ2FsY3VsYXRpb24ubmV0TWlseWVtfS8xMDAwIG1pbHllbSkgw7x6ZXJpbmRlbiBoZXNhcGxhbsSxci5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU2NyYXAgUGF5b3V0IFJlc3VsdCBDYXJkICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzEyMWIxNF0gdG8tWyMxMjEzMWJdIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAvMzUgcC01IHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1uZXV0cmFsLTQwMFwiPlxuICAgICAgICAgICAgICA8c3Bhbj5Nw7zFn3Rlcml5ZSDDlmRlbmVjZWsgTmFraXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC00MDAgZm9udC1tZWRpdW1cIj5OZXQgSGFzOiB7c2NyYXBDYWxjdWxhdGlvbi5uZXRIYXNHcmFtLnRvRml4ZWQoMyl9IGdyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtbW9ubyB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgICAgICDigrp7TWF0aC5yb3VuZChzY3JhcENhbGN1bGF0aW9uLnBheW91dFRMKS50b0xvY2FsZVN0cmluZygndHItVFInKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcHQtMyBib3JkZXItdCBib3JkZXItd2hpdGUvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1uZXV0cmFsLTMwMFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNDAwXCI+VXlndWxhbmFuIEhhcyBBbMSxxZ8gS3VydTo8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXdoaXRlXCI+4oK6e2hhc1JhdGUuYnV5aW5nLnRvTG9jYWxlU3RyaW5nKCd0ci1UUicpfSAvIGdyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIE1PREUgMzogQUxUSU4gVEFLQVMgKERFxJ7EsMWexLBNxLApICovfVxuICAgICAge2NhbGNNb2RlID09PSAndHJhZGUnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJnLVsjMTMxNDFkXSBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8yMCBwLTUgc2hhZG93LXhsIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPEFycm93TGVmdFJpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5BbHTEsW4gRGXEn2nFn2ltaSAmIFRha2FzIFNpbcO8bGF0w7Zyw7w8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICB7LyogTcO8xZ90ZXJpbmluIFZlcmRpxJ9pIEFsdMSxbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtMnhsIGJnLWJsYWNrLzQwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtcm9zZS00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+MS4gTcO8xZ90ZXJpbmluIEdldGlyZGnEn2kgKFZlcmlsZW4pIEFsdMSxbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LW5ldXRyYWwtNDAwXCI+KEFsxLHFnyBrdXJ1IHV5Z3VsYW7EsXIpPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LW5ldXRyYWwtNDAwIGJsb2NrIG1iLTAuNVwiPkF5YXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2l2ZW5LYXJhdH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0R2l2ZW5LYXJhdChlLnRhcmdldC52YWx1ZSBhcyBHb2xkS2FyYXQpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0xLjUgcm91bmRlZC1sZyBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNEtcIj4yNEsgSGFzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMktcIj4yMksgQmlsZXppazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMThLXCI+MThLIFRha8SxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNEtcIj4xNEsgVGFrxLE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1uZXV0cmFsLTQwMCBibG9jayBtYi0wLjVcIj5HcmFtPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2l2ZW5XZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEdpdmVuV2VpZ2h0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgcHktMS41IHJvdW5kZWQtbGcgYmctYmxhY2sgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1tb25vXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBwdC0xXCI+XG4gICAgICAgICAgICAgICAgU2F5xLFtIERlxJ9lcmk6IDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPuKCuntNYXRoLnJvdW5kKHRyYWRlQ2FsY3VsYXRpb24uZ2l2ZW5WYWx1ZVRMKS50b0xvY2FsZVN0cmluZygndHItVFInKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE3DvMWfdGVyaW5pbiBBbGTEscSfxLEgWWVuaSBBbHTEsW4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLTJ4bCBiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWVtZXJhbGQtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjIuIE3DvMWfdGVyaW5pbiBBbGTEscSfxLEgKFllbmkpIEFsdMSxbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LW5ldXRyYWwtNDAwXCI+KFNhdMSxxZ8ga3VydSArIGnFn8OnaWxpayk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbmV1dHJhbC00MDAgYmxvY2sgbWItMC41XCI+QXlhcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YWtlbkthcmF0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUYWtlbkthcmF0KGUudGFyZ2V0LnZhbHVlIGFzIEdvbGRLYXJhdCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0yIHB5LTEuNSByb3VuZGVkLWxnIGJnLWJsYWNrIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSB0ZXh0LXhzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI0S1wiPjI0SyBIYXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIyS1wiPjIySyBCaWxlemlrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOEtcIj4xOEsgVGFrxLE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0S1wiPjE0SyBUYWvEsTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LW5ldXRyYWwtNDAwIGJsb2NrIG1iLTAuNVwiPkdyYW08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YWtlbldlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGFrZW5XZWlnaHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0xLjUgcm91bmRlZC1sZyBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgdGV4dC14cyBmb250LW1vbm9cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbmV1dHJhbC00MDAgYmxvY2sgbWItMC41XCI+xLDFn8OnaWxpay9nciAo4oK6KTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rha2VuTGFib3JQZXJHcmFtfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUYWtlbkxhYm9yUGVyR3JhbShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0yIHB5LTEuNSByb3VuZGVkLWxnIGJnLWJsYWNrIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtbW9ub1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHRleHQtWzExcHhdIHRleHQtbmV1dHJhbC00MDAgcHQtMVwiPlxuICAgICAgICAgICAgICAgIFllbmkgw5xyw7xuIEJlZGVsaTogPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+4oK6e01hdGgucm91bmQodHJhZGVDYWxjdWxhdGlvbi50YWtlblZhbHVlVEwpLnRvTG9jYWxlU3RyaW5nKCd0ci1UUicpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFRyYWRlIERpZmZlcmVuY2UgUmVzdWx0IENhcmQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMWIxODEyXSB0by1bIzEyMTMxYl0gYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzUgcC01IHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNDAwXCI+XG4gICAgICAgICAgICAgIHt0cmFkZUNhbGN1bGF0aW9uLmRpZmZlcmVuY2VUTCA+PSAwXG4gICAgICAgICAgICAgICAgPyAnTcO8xZ90ZXJpbmluIMOWZGV5ZWNlxJ9pIE5ha2l0IEZhcmsnXG4gICAgICAgICAgICAgICAgOiAnTcO8xZ90ZXJpeWUgxLBhZGUgRWRpbGVjZWsgVHV0YXInfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbXQtMiB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBmb250LW1vbm8gdHJhY2tpbmctdGlnaHQgJHtcbiAgICAgICAgICAgICAgdHJhZGVDYWxjdWxhdGlvbi5kaWZmZXJlbmNlVEwgPj0gMCA/ICd0ZXh0LWFtYmVyLTQwMCcgOiAndGV4dC1lbWVyYWxkLTQwMCdcbiAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAg4oK6e01hdGguYWJzKE1hdGgucm91bmQodHJhZGVDYWxjdWxhdGlvbi5kaWZmZXJlbmNlVEwpKS50b0xvY2FsZVN0cmluZygndHItVFInKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNDAwXCI+XG4gICAgICAgICAgICAgIHt0cmFkZUNhbGN1bGF0aW9uLmRpZmZlcmVuY2VUTCA+PSAwXG4gICAgICAgICAgICAgICAgPyAnTcO8xZ90ZXJpIGdldGlyZGnEn2kgZXNraSBhbHTEsW4gZMO8xZ/DvGxkw7xrdGVuIHNvbnJhIGJ1IGZhcmvEsSDDtmRleWVjZWt0aXIuJ1xuICAgICAgICAgICAgICAgIDogJ03DvMWfdGVyaW5pbiBnZXRpcmRpxJ9pIGFsdMSxbiB5ZW5pIMO8csO8bmRlbiBmYXpsYSB0dXR0dcSfdSBpw6dpbiBwYXJhIMO8c3TDvCDDtmRlbmVjZWt0aXIuJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFrSlU7QUFsSlYsU0FBZ0IsVUFBVSxlQUFlO0FBQ3pDO0FBQUEsRUFDRTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFHQTtBQUFBLEVBRUE7QUFBQSxPQUNLO0FBU0EsYUFBTSxzQkFBMEQsQ0FBQyxFQUFFLE1BQU0sTUFBTTtBQUNwRixRQUFNLENBQUMsVUFBVSxXQUFXLElBQUksU0FBbUIsTUFBTTtBQUd6RCxRQUFNLENBQUMsT0FBTyxRQUFRLElBQUksU0FBb0IsS0FBSztBQUNuRCxRQUFNLENBQUMsUUFBUSxTQUFTLElBQUksU0FBaUIsT0FBTztBQUNwRCxRQUFNLENBQUMsY0FBYyxlQUFlLElBQUksU0FBaUIsSUFBSTtBQUM3RCxRQUFNLENBQUMsWUFBWSxhQUFhLElB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