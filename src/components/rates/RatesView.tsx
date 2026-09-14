import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"];
import {
  TrendingUp,
  RefreshCw,
  Edit3,
  Vault,
  Coins,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  X
} from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
export const RatesView = ({
  rates,
  totalHasGoldWeight,
  totalGrossWeight,
  totalStockValueTL,
  onUpdateRate,
  onRefreshRates
}) => {
  const [editingRate, setEditingRate] = useState(null);
  const [buyInput, setBuyInput] = useState("");
  const [sellInput, setSellInput] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startEdit = (rate) => {
    setEditingRate(rate);
    setBuyInput(rate.buying.toString());
    setSellInput(rate.selling.toString());
  };
  const saveEdit = (e) => {
    e.preventDefault();
    if (!editingRate) return;
    const b = parseFloat(buyInput) || editingRate.buying;
    const s = parseFloat(sellInput) || editingRate.selling;
    onUpdateRate(editingRate.id, b, s);
    setEditingRate(null);
  };
  const handleRefresh = () => {
    setIsRefreshing(true);
    onRefreshRates();
    setTimeout(() => setIsRefreshing(false), 600);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 pb-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1710] via-[#121216] to-[#0c0d12] border border-amber-500/25 p-5 shadow-xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxDEV(Vault, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Kasa Has Altın Varlığı" }, void 0, false, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30", children: "Milyem Bazlı" }, void 0, false, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-3 flex items-baseline justify-between", children: /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-3xl font-extrabold tracking-tight text-white flex items-baseline gap-1.5", children: [
          /* @__PURE__ */ jsxDEV("span", { children: totalHasGoldWeight.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }, void 0, false, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400 text-lg font-bold", children: "gr Has (24K)" }, void 0, false, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-neutral-400 mt-1", children: [
          "Toplam Brüt Envanter: ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-200 font-medium", children: [
            totalGrossWeight.toFixed(2),
            " gr"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 81,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
        lineNumber: 75,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-400", children: "Piyasa Stok Değeri:" }, void 0, false, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-base font-bold text-emerald-400", children: [
          "₺",
          totalStockValueTL.toLocaleString("tr-TR", { maximumFractionDigits: 0 })
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between px-1", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-bold text-white flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Canlı Altın & Döviz" }, void 0, false, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-400", children: "Kapalıçarşı / Harem tabela fiyatları" }, void 0, false, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: handleRefresh,
          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-200 border border-white/10 text-xs font-medium transition cursor-pointer active:scale-95",
          children: [
            /* @__PURE__ */ jsxDEV(RefreshCw, { className: `w-3.5 h-3.5 text-amber-400 ${isRefreshing ? "animate-spin" : ""}` }, void 0, false, {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 111,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Güncelle" }, void 0, false, {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 112,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 107,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl bg-[#13141c]/90 border border-white/10 overflow-hidden shadow-lg divide-y divide-white/5", children: rates.map((rate) => {
      const isUp = rate.changePercent >= 0;
      return /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "p-3.5 flex items-center justify-between hover:bg-white/[0.03] transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 pr-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-white text-sm", children: rate.name }, void 0, false, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 127,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono font-medium", children: rate.karat }, void 0, false, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 130,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                lineNumber: 126,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mt-0.5 text-[11px] text-neutral-400", children: [
                /* @__PURE__ */ jsxDEV("span", { children: [
                  "Saat: ",
                  rate.updatedAt
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 135,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "•" }, void 0, false, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 136,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: `flex items-center ${isUp ? "text-emerald-400" : "text-rose-400"}`, children: [
                  isUp ? /* @__PURE__ */ jsxDEV(ArrowUpRight, { className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                    lineNumber: 139,
                    columnNumber: 23
                  }, this) : /* @__PURE__ */ jsxDEV(ArrowDownRight, { className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                    lineNumber: 141,
                    columnNumber: 23
                  }, this),
                  isUp ? "+" : "",
                  rate.changePercent,
                  "%"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 137,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                lineNumber: 134,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 125,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-neutral-400 uppercase tracking-wider", children: [
                  "Alış / Satış (",
                  rate.unit,
                  ")"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 151,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-xs", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-300 font-mono", children: [
                    "₺",
                    rate.buying.toLocaleString("tr-TR", { minimumFractionDigits: 1 })
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                    lineNumber: 155,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-500", children: "/" }, void 0, false, {
                    fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                    lineNumber: 158,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400 font-mono font-bold", children: [
                    "₺",
                    rate.selling.toLocaleString("tr-TR", { minimumFractionDigits: 1 })
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                    lineNumber: 159,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 154,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                lineNumber: 150,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => startEdit(rate),
                  className: "p-2 rounded-xl bg-white/5 hover:bg-amber-500/20 text-neutral-400 hover:text-amber-300 transition cursor-pointer",
                  title: "Fiyat Düzenle",
                  children: /* @__PURE__ */ jsxDEV(Edit3, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                    lineNumber: 170,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 165,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 149,
              columnNumber: 15
            }, this)
          ]
        },
        rate.id,
        true,
        {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 121,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    editingRate && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-sm rounded-3xl bg-[#161722] border border-amber-500/30 p-5 shadow-2xl animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Coins, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 184,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: editingRate.name }, void 0, false, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 185,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 183,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setEditingRate(null),
            className: "p-1 rounded-full bg-white/10 text-neutral-400 hover:text-white",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 191,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 187,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
        lineNumber: 182,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: saveEdit, className: "mt-4 space-y-3", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-xs font-medium text-neutral-300 mb-1", children: [
            "Alış Fiyatı (TL / ",
            editingRate.unit,
            ")"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 197,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "number",
              step: "0.01",
              value: buyInput,
              onChange: (e) => setBuyInput(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-sm focus:border-amber-400 focus:outline-none",
              required: true
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 200,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 196,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-xs font-medium text-neutral-300 mb-1", children: [
            "Satış Fiyatı (TL / ",
            editingRate.unit,
            ")"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "number",
              step: "0.01",
              value: sellInput,
              onChange: (e) => setSellInput(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-sm focus:border-amber-400 focus:outline-none",
              required: true
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 214,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 210,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-2 flex gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setEditingRate(null),
              className: "flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium text-neutral-300 cursor-pointer",
              children: "Vazgeç"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 225,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "submit",
              className: "flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-xs font-bold text-black flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 236,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Kaydet" }, void 0, false, {
                  fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
                  lineNumber: 237,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
              lineNumber: 232,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
          lineNumber: 224,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
        lineNumber: 195,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
      lineNumber: 181,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
      lineNumber: 180,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/rates/RatesView.tsx?raw=1789374318218",
    lineNumber: 59,
    columnNumber: 5
  }, this);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhdGVzVmlldy50c3g/cmF3PTE3ODkzNzQzMTgyMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIFRyZW5kaW5nVXAsIFxuICBSZWZyZXNoQ3csIFxuICBFZGl0MywgXG4gIFZhdWx0LCBcbiAgQ29pbnMsIFxuICBBcnJvd1VwUmlnaHQsIFxuICBBcnJvd0Rvd25SaWdodCxcbiAgQ2hlY2ssXG4gIFhcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEdvbGRSYXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUmF0ZXNWaWV3UHJvcHMge1xuICByYXRlczogR29sZFJhdGVbXTtcbiAgdG90YWxIYXNHb2xkV2VpZ2h0OiBudW1iZXI7XG4gIHRvdGFsR3Jvc3NXZWlnaHQ6IG51bWJlcjtcbiAgdG90YWxTdG9ja1ZhbHVlVEw6IG51bWJlcjtcbiAgb25VcGRhdGVSYXRlOiAoaWQ6IHN0cmluZywgYnV5aW5nOiBudW1iZXIsIHNlbGxpbmc6IG51bWJlcikgPT4gdm9pZDtcbiAgb25SZWZyZXNoUmF0ZXM6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBSYXRlc1ZpZXc6IFJlYWN0LkZDPFJhdGVzVmlld1Byb3BzPiA9ICh7XG4gIHJhdGVzLFxuICB0b3RhbEhhc0dvbGRXZWlnaHQsXG4gIHRvdGFsR3Jvc3NXZWlnaHQsXG4gIHRvdGFsU3RvY2tWYWx1ZVRMLFxuICBvblVwZGF0ZVJhdGUsXG4gIG9uUmVmcmVzaFJhdGVzLFxufSkgPT4ge1xuICBjb25zdCBbZWRpdGluZ1JhdGUsIHNldEVkaXRpbmdSYXRlXSA9IHVzZVN0YXRlPEdvbGRSYXRlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtidXlJbnB1dCwgc2V0QnV5SW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VsbElucHV0LCBzZXRTZWxsSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNSZWZyZXNoaW5nLCBzZXRJc1JlZnJlc2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0YXJ0RWRpdCA9IChyYXRlOiBHb2xkUmF0ZSkgPT4ge1xuICAgIHNldEVkaXRpbmdSYXRlKHJhdGUpO1xuICAgIHNldEJ1eUlucHV0KHJhdGUuYnV5aW5nLnRvU3RyaW5nKCkpO1xuICAgIHNldFNlbGxJbnB1dChyYXRlLnNlbGxpbmcudG9TdHJpbmcoKSk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUVkaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZWRpdGluZ1JhdGUpIHJldHVybjtcbiAgICBjb25zdCBiID0gcGFyc2VGbG9hdChidXlJbnB1dCkgfHwgZWRpdGluZ1JhdGUuYnV5aW5nO1xuICAgIGNvbnN0IHMgPSBwYXJzZUZsb2F0KHNlbGxJbnB1dCkgfHwgZWRpdGluZ1JhdGUuc2VsbGluZztcbiAgICBvblVwZGF0ZVJhdGUoZWRpdGluZ1JhdGUuaWQsIGIsIHMpO1xuICAgIHNldEVkaXRpbmdSYXRlKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2ggPSAoKSA9PiB7XG4gICAgc2V0SXNSZWZyZXNoaW5nKHRydWUpO1xuICAgIG9uUmVmcmVzaFJhdGVzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1JlZnJlc2hpbmcoZmFsc2UpLCA2MDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgcGItNlwiPlxuICAgICAgey8qIFRvcCBIZWFkZXIgQ2FyZDogS2FzYSAmIEhhcyBWYXJsxLFrICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzFhMTcxMF0gdmlhLVsjMTIxMjE2XSB0by1bIzBjMGQxMl0gYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMjUgcC01IHNoYWRvdy14bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy00NCBoLTQ0IGJnLWFtYmVyLTUwMC8xMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGwgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtYW1iZXItNDAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgPFZhdWx0IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPHNwYW4+S2FzYSBIYXMgQWx0xLFuIFZhcmzEscSfxLE8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gcHgtMi41IHB5LTAuNSByb3VuZGVkLWZ1bGwgYmctYW1iZXItNTAwLzE1IHRleHQtYW1iZXItMzAwIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwXCI+XG4gICAgICAgICAgICBNaWx5ZW0gQmF6bMSxXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBpdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtYmFzZWxpbmUgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICA8c3Bhbj57dG90YWxIYXNHb2xkV2VpZ2h0LnRvTG9jYWxlU3RyaW5nKCd0ci1UUicsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMCB0ZXh0LWxnIGZvbnQtYm9sZFwiPmdyIEhhcyAoMjRLKTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC00MDAgbXQtMVwiPlxuICAgICAgICAgICAgICBUb3BsYW0gQnLDvHQgRW52YW50ZXI6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC0yMDAgZm9udC1tZWRpdW1cIj57dG90YWxHcm9zc1dlaWdodC50b0ZpeGVkKDIpfSBncjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVEwgRXF1aXZhbGVudCBWYWx1YXRpb24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwdC0zIGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDBcIj5QaXlhc2EgU3RvayBEZcSfZXJpOjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtZW1lcmFsZC00MDBcIj5cbiAgICAgICAgICAgIOKCunt0b3RhbFN0b2NrVmFsdWVUTC50b0xvY2FsZVN0cmluZygndHItVFInLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSYXRlcyBCYXIgSGVhZGVyICYgQWN0aW9ucyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTFcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICA8VHJlbmRpbmdVcCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkNhbmzEsSBBbHTEsW4gJiBEw7Z2aXo8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICAgIEthcGFsxLHDp2FyxZ/EsSAvIEhhcmVtIHRhYmVsYSBmaXlhdGxhcsSxXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmVmcmVzaH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHJvdW5kZWQtZnVsbCBiZy1uZXV0cmFsLTgwMC84MCBob3ZlcjpiZy1uZXV0cmFsLTcwMC84MCB0ZXh0LW5ldXRyYWwtMjAwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC14cyBmb250LW1lZGl1bSB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGFjdGl2ZTpzY2FsZS05NVwiXG4gICAgICAgID5cbiAgICAgICAgICA8UmVmcmVzaEN3IGNsYXNzTmFtZT17YHctMy41IGgtMy41IHRleHQtYW1iZXItNDAwICR7aXNSZWZyZXNoaW5nID8gJ2FuaW1hdGUtc3BpbicgOiAnJ31gfSAvPlxuICAgICAgICAgIDxzcGFuPkfDvG5jZWxsZTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFJhdGVzIEdyaWQgLyBMaXN0IGluIGlPUyBHcm91cGVkIFRhYmxlIFN0eWxlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBiZy1bIzEzMTQxY10vOTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnIGRpdmlkZS15IGRpdmlkZS13aGl0ZS81XCI+XG4gICAgICAgIHtyYXRlcy5tYXAocmF0ZSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNVcCA9IHJhdGUuY2hhbmdlUGVyY2VudCA+PSAwO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17cmF0ZS5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zLjUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGhvdmVyOmJnLXdoaXRlL1swLjAzXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHByLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGUgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICB7cmF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gcHgtMS41IHB5LTAuNSByb3VuZGVkIGJnLWFtYmVyLTUwMC8xMCB0ZXh0LWFtYmVyLTMwMCBmb250LW1vbm8gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAge3JhdGUua2FyYXR9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC0wLjUgdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2FhdDoge3JhdGUudXBkYXRlZEF0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPuKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyICR7aXNVcCA/ICd0ZXh0LWVtZXJhbGQtNDAwJyA6ICd0ZXh0LXJvc2UtNDAwJ31gfT5cbiAgICAgICAgICAgICAgICAgICAge2lzVXAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPEFycm93VXBSaWdodCBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEb3duUmlnaHQgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtpc1VwID8gJysnIDogJyd9e3JhdGUuY2hhbmdlUGVyY2VudH0lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBCdXlpbmcgLyBTZWxsaW5nICYgRWRpdCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LW5ldXRyYWwtNDAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICBBbMSxxZ8gLyBTYXTEscWfICh7cmF0ZS51bml0fSlcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTMwMCBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICDigrp7cmF0ZS5idXlpbmcudG9Mb2NhbGVTdHJpbmcoJ3RyLVRSJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDEgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTUwMFwiPi88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYW1iZXItNDAwIGZvbnQtbW9ubyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICDigrp7cmF0ZS5zZWxsaW5nLnRvTG9jYWxlU3RyaW5nKCd0ci1UUicsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAxIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN0YXJ0RWRpdChyYXRlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLXhsIGJnLXdoaXRlLzUgaG92ZXI6YmctYW1iZXItNTAwLzIwIHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC1hbWJlci0zMDAgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkZpeWF0IETDvHplbmxlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RWRpdDMgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEVkaXQgUmF0ZSBNb2RhbCBTaGVldCAoaU9TIFN0eWxlKSAqL31cbiAgICAgIHtlZGl0aW5nUmF0ZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzcwIGJhY2tkcm9wLWJsdXItc20gcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gcm91bmRlZC0zeGwgYmctWyMxNjE3MjJdIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIHAtNSBzaGFkb3ctMnhsIGFuaW1hdGUtaW4gem9vbS1pbi05NSBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBiLTMgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8Q29pbnMgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VkaXRpbmdSYXRlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ1JhdGUobnVsbCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIHJvdW5kZWQtZnVsbCBiZy13aGl0ZS8xMCB0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlRWRpdH0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtMzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIEFsxLHFnyBGaXlhdMSxIChUTCAvIHtlZGl0aW5nUmF0ZS51bml0fSlcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YnV5SW5wdXR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRCdXlJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtMzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIFNhdMSxxZ8gRml5YXTEsSAoVEwgLyB7ZWRpdGluZ1JhdGUudW5pdH0pXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGxJbnB1dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlbGxJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdSYXRlKG51bGwpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIuNSByb3VuZGVkLXhsIGJnLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzE1IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1uZXV0cmFsLTMwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVmF6Z2XDp1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIuNSByb3VuZGVkLXhsIGJnLWFtYmVyLTUwMCBob3ZlcjpiZy1hbWJlci00MDAgdGV4dC14cyBmb250LWJvbGQgdGV4dC1ibGFjayBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHNoYWRvdy1sZyBzaGFkb3ctYW1iZXItNTAwLzIwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5LYXlkZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUE2RFE7QUE3RFIsU0FBZ0IsZ0JBQWdCO0FBQ2hDO0FBQUEsRUFDRTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsT0FDSztBQVlBLGFBQU0sWUFBc0MsQ0FBQztBQUFBLEVBQ2xEO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7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