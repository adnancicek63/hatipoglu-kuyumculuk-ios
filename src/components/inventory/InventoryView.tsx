import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"]; const useMemo = __vite__cjsImport1_react["useMemo"];
import {
  Gem,
  Plus,
  Search,
  PlusCircle,
  MinusCircle,
  AlertTriangle,
  Trash2,
  Scale,
  X,
  Check,
  ChevronDown
} from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
const CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "bilezik", label: "Bilezik" },
  { id: "yuzuk", label: "Yüzük" },
  { id: "kolye", label: "Kolye" },
  { id: "ziynet", label: "Ziynet" },
  { id: "kulce", label: "Külçe" },
  { id: "kupe", label: "Küpe" },
  { id: "set", label: "Takım" }
];
export const InventoryView = ({
  inventory,
  rates,
  onAddItem,
  onDeleteItem,
  onAdjustQuantity
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [formName, setFormName] = useState("");
  const [formCode, setFormCode] = useState("");
  const [formCategory, setFormCategory] = useState("bilezik");
  const [formKarat, setFormKarat] = useState("22K");
  const [formWeight, setFormWeight] = useState("");
  const [formQuantity, setFormQuantity] = useState("1");
  const [formLaborPerGram, setFormLaborPerGram] = useState("75");
  const [formNotes, setFormNotes] = useState("");
  const filteredItems = useMemo(() => {
    return inventory.filter((item) => {
      const matchCat = selectedCategory === "all" || item.category === selectedCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [inventory, selectedCategory, searchQuery]);
  const getItemCurrentPrice = (item) => {
    if (!item.useDynamicPricing && item.sellingPrice > 0) {
      return item.sellingPrice;
    }
    const rate = rates.find((r) => r.karat === item.karat) || rates[0];
    const gramPrice = rate.selling * (item.purity / 0.995);
    const labor = item.laborCostPerGram * item.weightGram + item.fixedLaborCost;
    return Math.round(gramPrice * item.weightGram + labor);
  };
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const weight = parseFloat(formWeight) || 0;
    const qty = parseInt(formQuantity, 10) || 1;
    const labor = parseFloat(formLaborPerGram) || 0;
    let purity = 0.916;
    if (formKarat === "24K") purity = 0.995;
    else if (formKarat === "18K") purity = 0.75;
    else if (formKarat === "14K") purity = 0.585;
    const rate = rates.find((r) => r.karat === formKarat) || rates[0];
    const estimatedCost = rate.buying * purity * weight;
    onAddItem({
      name: formName,
      code: formCode || `STK-${Date.now().toString().slice(-4)}`,
      category: formCategory,
      karat: formKarat,
      purity,
      weightGram: weight,
      quantity: qty,
      laborCostPerGram: labor,
      fixedLaborCost: 0,
      costPrice: Math.round(estimatedCost),
      sellingPrice: 0,
      useDynamicPricing: true,
      minStockAlert: 2,
      notes: formNotes
    });
    setFormName("");
    setFormCode("");
    setFormWeight("");
    setFormNotes("");
    setShowAddModal(false);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 pb-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }, void 0, false, {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            placeholder: "Ürün adı veya stok kodu ara...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "w-full pl-9 pr-3 py-2 rounded-2xl bg-[#14151f] border border-white/10 text-white placeholder-neutral-500 text-xs focus:border-amber-400 focus:outline-none transition"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 126,
            columnNumber: 11
          },
          this
        ),
        searchQuery && /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setSearchQuery(""),
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 138,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 134,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setShowAddModal(true),
          className: "flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold shadow-lg shadow-amber-500/25 transition cursor-pointer active:scale-95 shrink-0",
          children: [
            /* @__PURE__ */ jsxDEV(Plus, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 147,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Yeni Ürün" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 148,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 143,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1", children: CATEGORIES.map((cat) => {
      const isSelected = selectedCategory === cat.id;
      return /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setSelectedCategory(cat.id),
          className: `px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer ${isSelected ? "bg-amber-500 text-black font-semibold shadow-md shadow-amber-500/20" : "bg-[#151620] text-neutral-300 hover:text-white border border-white/5"}`,
          children: cat.label
        },
        cat.id,
        false,
        {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 157,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-2.5", children: filteredItems.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12 bg-[#12131b] rounded-3xl border border-white/5 text-neutral-400", children: [
      /* @__PURE__ */ jsxDEV(Gem, { className: "w-10 h-10 mx-auto text-amber-500/40 mb-2" }, void 0, false, {
        fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
        lineNumber: 176,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-neutral-300", children: "Ürün bulunamadı" }, void 0, false, {
        fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
        lineNumber: 177,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-500 mt-1", children: "Arama kriterini değiştirin veya yeni ürün ekleyin." }, void 0, false, {
        fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
        lineNumber: 178,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
      lineNumber: 175,
      columnNumber: 11
    }, this) : filteredItems.map((item) => {
      const price = getItemCurrentPrice(item);
      const isLowStock = item.quantity <= item.minStockAlert;
      return /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "relative rounded-2xl bg-[#13141d]/90 border border-white/10 p-3.5 shadow-md hover:border-amber-500/30 transition-all",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 font-mono font-bold border border-amber-500/25", children: item.karat }, void 0, false, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 193,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] text-neutral-400 font-mono", children: [
                    "#",
                    item.code
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 196,
                    columnNumber: 23
                  }, this),
                  isLowStock && /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30", children: [
                    /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-3 h-3" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 201,
                      columnNumber: 27
                    }, this),
                    "Kritik"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 200,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 192,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-white text-sm mt-1 truncate", children: item.name }, void 0, false, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 207,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mt-1.5 text-xs text-neutral-300", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxDEV(Scale, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 214,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-white", children: [
                      item.weightGram,
                      " gr"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 215,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 213,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { children: "•" }, void 0, false, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 217,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { children: [
                    "İşçilik: ",
                    item.laborCostPerGram,
                    " ₺/gr"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 218,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 212,
                  columnNumber: 21
                }, this),
                item.notes && /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-400 mt-1 italic line-clamp-1", children: [
                  '"',
                  item.notes,
                  '"'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 222,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 191,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-right shrink-0 flex flex-col items-end", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-neutral-400", children: "Birim Satış" }, void 0, false, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 230,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-base font-bold text-amber-400 font-mono", children: [
                  "₺",
                  price.toLocaleString("tr-TR")
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 231,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mt-2 bg-black/40 px-2 py-1 rounded-xl border border-white/10", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => onAdjustQuantity(item.id, -1),
                      className: "text-neutral-400 hover:text-rose-400 active:scale-90 transition cursor-pointer",
                      title: "1 Azalt",
                      children: /* @__PURE__ */ jsxDEV(MinusCircle, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                        lineNumber: 242,
                        columnNumber: 25
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 237,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-white min-w-[20px] text-center font-mono", children: item.quantity }, void 0, false, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 244,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => onAdjustQuantity(item.id, 1),
                      className: "text-neutral-400 hover:text-emerald-400 active:scale-90 transition cursor-pointer",
                      title: "1 Artır",
                      children: /* @__PURE__ */ jsxDEV(PlusCircle, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                        lineNumber: 252,
                        columnNumber: 25
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 247,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 236,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 229,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 190,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-400", children: [
                "Stok Toplamı: ",
                /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: [
                  (item.weightGram * item.quantity).toFixed(2),
                  " gr"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 261,
                  columnNumber: 35
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 260,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 font-semibold font-mono", children: [
                  "₺",
                  (price * item.quantity).toLocaleString("tr-TR")
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 264,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => {
                      if (confirm(`"${item.name}" ürününü silmek istediğinize emin misiniz?`)) {
                        onDeleteItem(item.id);
                      }
                    },
                    className: "text-neutral-500 hover:text-rose-400 p-1 transition cursor-pointer",
                    title: "Ürünü Sil",
                    children: /* @__PURE__ */ jsxDEV(Trash2, { className: "w-3.5 h-3.5" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 276,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 267,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 263,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 259,
              columnNumber: 17
            }, this)
          ]
        },
        item.id,
        true,
        {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 186,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    showAddModal && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-3", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-md rounded-3xl bg-[#151622] border border-amber-500/30 p-5 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto no-scrollbar", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Gem, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 292,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Yeni Ürün / Stok Girişi" }, void 0, false, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 293,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 291,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowAddModal(false),
            className: "p-1 rounded-full bg-white/10 text-neutral-400 hover:text-white cursor-pointer",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 299,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 295,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
        lineNumber: 290,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleCreateProduct, className: "mt-4 space-y-3 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Ürün Adı" }, void 0, false, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 305,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Örn: 22 Ayar Kibrit Çöpü Bilezik",
              value: formName,
              onChange: (e) => setFormName(e.target.value),
              className: "w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none",
              required: true
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 308,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 304,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2.5", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Stok Kodu / Barkod" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 320,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                placeholder: "BLZ-22-03",
                value: formCode,
                onChange: (e) => setFormCode(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 323,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 319,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Kategori" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 333,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  value: formCategory,
                  onChange: (e) => setFormCategory(e.target.value),
                  className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white appearance-none focus:border-amber-400 focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "bilezik", children: "Bilezik" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 342,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "yuzuk", children: "Yüzük" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 343,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "kolye", children: "Kolye" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 344,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "ziynet", children: "Ziynet Altın" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 345,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "kulce", children: "Külçe Altın" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 346,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "kupe", children: "Küpe" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 347,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "set", children: "Takım / Set" }, void 0, false, {
                      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                      lineNumber: 348,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 337,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" }, void 0, false, {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 350,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 336,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 332,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 318,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Ayar" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 357,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: formKarat,
                onChange: (e) => setFormKarat(e.target.value),
                className: "w-full px-2.5 py-2 rounded-xl bg-black/60 border border-white/15 text-amber-300 font-semibold focus:border-amber-400 focus:outline-none",
                children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "24K", children: "24 Ayar (Has)" }, void 0, false, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 365,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "22K", children: "22 Ayar" }, void 0, false, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 366,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "18K", children: "18 Ayar" }, void 0, false, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 367,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "14K", children: "14 Ayar" }, void 0, false, {
                    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                    lineNumber: 368,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 360,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 356,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Gramaj (gr)" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 373,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                step: "0.01",
                placeholder: "15.50",
                value: formWeight,
                onChange: (e) => setFormWeight(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono focus:border-amber-400 focus:outline-none",
                required: true
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 376,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 372,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Adet" }, void 0, false, {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 388,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                min: "1",
                value: formQuantity,
                onChange: (e) => setFormQuantity(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono focus:border-amber-400 focus:outline-none",
                required: true
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                lineNumber: 391,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 387,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 355,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Gram Başı İşçilik Tutarı (TL / gr)" }, void 0, false, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 403,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "number",
              step: "1",
              placeholder: "75",
              value: formLaborPerGram,
              onChange: (e) => setFormLaborPerGram(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono focus:border-amber-400 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 406,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 402,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Ürün Notu / Özellikler" }, void 0, false, {
            fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
            lineNumber: 417,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Örn: TSE damgalı, taşlı veya özel seri",
              value: formNotes,
              onChange: (e) => setFormNotes(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white focus:border-amber-400 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 420,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 416,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-3 flex gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setShowAddModal(false),
              className: "flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 font-medium cursor-pointer",
              children: "İptal"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 430,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "submit",
              className: "flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 441,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Stoka Ekle" }, void 0, false, {
                  fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
                  lineNumber: 442,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
              lineNumber: 437,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
          lineNumber: 429,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
        lineNumber: 303,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
      lineNumber: 289,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
      lineNumber: 288,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/inventory/InventoryView.tsx?raw=1789374318218",
    lineNumber: 121,
    columnNumber: 5
  }, this);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkludmVudG9yeVZpZXcudHN4P3Jhdz0xNzg5Mzc0MzE4MjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFxuICBHZW0sIFxuICBQbHVzLCBcbiAgU2VhcmNoLCBcbiAgUGx1c0NpcmNsZSwgXG4gIE1pbnVzQ2lyY2xlLCBcbiAgQWxlcnRUcmlhbmdsZSwgXG4gIFRyYXNoMiwgXG4gIFRhZywgXG4gIFNjYWxlLCBcbiAgWCwgXG4gIENoZWNrLFxuICBDaGV2cm9uRG93blxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgSW52ZW50b3J5SXRlbSwgUHJvZHVjdENhdGVnb3J5LCBHb2xkS2FyYXQsIEdvbGRSYXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgSW52ZW50b3J5Vmlld1Byb3BzIHtcbiAgaW52ZW50b3J5OiBJbnZlbnRvcnlJdGVtW107XG4gIHJhdGVzOiBHb2xkUmF0ZVtdO1xuICBvbkFkZEl0ZW06IChpdGVtOiBPbWl0PEludmVudG9yeUl0ZW0sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnPikgPT4gdm9pZDtcbiAgb25VcGRhdGVJdGVtOiAoaWQ6IHN0cmluZywgdXBkYXRlczogUGFydGlhbDxJbnZlbnRvcnlJdGVtPikgPT4gdm9pZDtcbiAgb25EZWxldGVJdGVtOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb25BZGp1c3RRdWFudGl0eTogKGlkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENBVEVHT1JJRVM6IHsgaWQ6IFByb2R1Y3RDYXRlZ29yeSB8ICdhbGwnOyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcbiAgeyBpZDogJ2FsbCcsIGxhYmVsOiAnVMO8bcO8JyB9LFxuICB7IGlkOiAnYmlsZXppaycsIGxhYmVsOiAnQmlsZXppaycgfSxcbiAgeyBpZDogJ3l1enVrJywgbGFiZWw6ICdZw7x6w7xrJyB9LFxuICB7IGlkOiAna29seWUnLCBsYWJlbDogJ0tvbHllJyB9LFxuICB7IGlkOiAneml5bmV0JywgbGFiZWw6ICdaaXluZXQnIH0sXG4gIHsgaWQ6ICdrdWxjZScsIGxhYmVsOiAnS8O8bMOnZScgfSxcbiAgeyBpZDogJ2t1cGUnLCBsYWJlbDogJ0vDvHBlJyB9LFxuICB7IGlkOiAnc2V0JywgbGFiZWw6ICdUYWvEsW0nIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgSW52ZW50b3J5VmlldzogUmVhY3QuRkM8SW52ZW50b3J5Vmlld1Byb3BzPiA9ICh7XG4gIGludmVudG9yeSxcbiAgcmF0ZXMsXG4gIG9uQWRkSXRlbSxcbiAgb25EZWxldGVJdGVtLFxuICBvbkFkanVzdFF1YW50aXR5LFxufSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxQcm9kdWN0Q2F0ZWdvcnkgfCAnYWxsJz4oJ2FsbCcpO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dBZGRNb2RhbCwgc2V0U2hvd0FkZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBOZXcgSXRlbSBGb3JtIFN0YXRlXG4gIGNvbnN0IFtmb3JtTmFtZSwgc2V0Rm9ybU5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZm9ybUNvZGUsIHNldEZvcm1Db2RlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Zvcm1DYXRlZ29yeSwgc2V0Rm9ybUNhdGVnb3J5XSA9IHVzZVN0YXRlPFByb2R1Y3RDYXRlZ29yeT4oJ2JpbGV6aWsnKTtcbiAgY29uc3QgW2Zvcm1LYXJhdCwgc2V0Rm9ybUthcmF0XSA9IHVzZVN0YXRlPEdvbGRLYXJhdD4oJzIySycpO1xuICBjb25zdCBbZm9ybVdlaWdodCwgc2V0Rm9ybVdlaWdodF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmb3JtUXVhbnRpdHksIHNldEZvcm1RdWFudGl0eV0gPSB1c2VTdGF0ZSgnMScpO1xuICBjb25zdCBbZm9ybUxhYm9yUGVyR3JhbSwgc2V0Rm9ybUxhYm9yUGVyR3JhbV0gPSB1c2VTdGF0ZSgnNzUnKTtcbiAgY29uc3QgW2Zvcm1Ob3Rlcywgc2V0Rm9ybU5vdGVzXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBGaWx0ZXJlZCBsaXN0XG4gIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gaW52ZW50b3J5LmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoQ2F0ID0gc2VsZWN0ZWRDYXRlZ29yeSA9PT0gJ2FsbCcgfHwgaXRlbS5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeTtcbiAgICAgIGNvbnN0IG1hdGNoU2VhcmNoID1cbiAgICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgaXRlbS5jb2RlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgICByZXR1cm4gbWF0Y2hDYXQgJiYgbWF0Y2hTZWFyY2g7XG4gICAgfSk7XG4gIH0sIFtpbnZlbnRvcnksIHNlbGVjdGVkQ2F0ZWdvcnksIHNlYXJjaFF1ZXJ5XSk7XG5cbiAgLy8gQ2FsY3VsYXRlIGN1cnJlbnQgcHJpY2UgZm9yIGFuIGl0ZW1cbiAgY29uc3QgZ2V0SXRlbUN1cnJlbnRQcmljZSA9IChpdGVtOiBJbnZlbnRvcnlJdGVtKSA9PiB7XG4gICAgaWYgKCFpdGVtLnVzZUR5bmFtaWNQcmljaW5nICYmIGl0ZW0uc2VsbGluZ1ByaWNlID4gMCkge1xuICAgICAgcmV0dXJuIGl0ZW0uc2VsbGluZ1ByaWNlO1xuICAgIH1cbiAgICBjb25zdCByYXRlID0gcmF0ZXMuZmluZChyID0+IHIua2FyYXQgPT09IGl0ZW0ua2FyYXQpIHx8IHJhdGVzWzBdO1xuICAgIGNvbnN0IGdyYW1QcmljZSA9IHJhdGUuc2VsbGluZyAqIChpdGVtLnB1cml0eSAvIDAuOTk1KTtcbiAgICBjb25zdCBsYWJvciA9IChpdGVtLmxhYm9yQ29zdFBlckdyYW0gKiBpdGVtLndlaWdodEdyYW0pICsgaXRlbS5maXhlZExhYm9yQ29zdDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChncmFtUHJpY2UgKiBpdGVtLndlaWdodEdyYW0gKyBsYWJvcik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlUHJvZHVjdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgd2VpZ2h0ID0gcGFyc2VGbG9hdChmb3JtV2VpZ2h0KSB8fCAwO1xuICAgIGNvbnN0IHF0eSA9IHBhcnNlSW50KGZvcm1RdWFudGl0eSwgMTApIHx8IDE7XG4gICAgY29uc3QgbGFib3IgPSBwYXJzZUZsb2F0KGZvcm1MYWJvclBlckdyYW0pIHx8IDA7XG5cbiAgICBsZXQgcHVyaXR5ID0gMC45MTY7XG4gICAgaWYgKGZvcm1LYXJhdCA9PT0gJzI0SycpIHB1cml0eSA9IDAuOTk1O1xuICAgIGVsc2UgaWYgKGZvcm1LYXJhdCA9PT0gJzE4SycpIHB1cml0eSA9IDAuNzUwO1xuICAgIGVsc2UgaWYgKGZvcm1LYXJhdCA9PT0gJzE0SycpIHB1cml0eSA9IDAuNTg1O1xuXG4gICAgY29uc3QgcmF0ZSA9IHJhdGVzLmZpbmQociA9PiByLmthcmF0ID09PSBmb3JtS2FyYXQpIHx8IHJhdGVzWzBdO1xuICAgIGNvbnN0IGVzdGltYXRlZENvc3QgPSAocmF0ZS5idXlpbmcgKiBwdXJpdHkgKiB3ZWlnaHQpO1xuXG4gICAgb25BZGRJdGVtKHtcbiAgICAgIG5hbWU6IGZvcm1OYW1lLFxuICAgICAgY29kZTogZm9ybUNvZGUgfHwgYFNUSy0ke0RhdGUubm93KCkudG9TdHJpbmcoKS5zbGljZSgtNCl9YCxcbiAgICAgIGNhdGVnb3J5OiBmb3JtQ2F0ZWdvcnksXG4gICAgICBrYXJhdDogZm9ybUthcmF0LFxuICAgICAgcHVyaXR5LFxuICAgICAgd2VpZ2h0R3JhbTogd2VpZ2h0LFxuICAgICAgcXVhbnRpdHk6IHF0eSxcbiAgICAgIGxhYm9yQ29zdFBlckdyYW06IGxhYm9yLFxuICAgICAgZml4ZWRMYWJvckNvc3Q6IDAsXG4gICAgICBjb3N0UHJpY2U6IE1hdGgucm91bmQoZXN0aW1hdGVkQ29zdCksXG4gICAgICBzZWxsaW5nUHJpY2U6IDAsXG4gICAgICB1c2VEeW5hbWljUHJpY2luZzogdHJ1ZSxcbiAgICAgIG1pblN0b2NrQWxlcnQ6IDIsXG4gICAgICBub3RlczogZm9ybU5vdGVzLFxuICAgIH0pO1xuXG4gICAgLy8gUmVzZXRcbiAgICBzZXRGb3JtTmFtZSgnJyk7XG4gICAgc2V0Rm9ybUNvZGUoJycpO1xuICAgIHNldEZvcm1XZWlnaHQoJycpO1xuICAgIHNldEZvcm1Ob3RlcygnJyk7XG4gICAgc2V0U2hvd0FkZE1vZGFsKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHBiLTZcIj5cbiAgICAgIHsvKiBTZWFyY2ggYW5kIEFkZCBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xXCI+XG4gICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1uZXV0cmFsLTQwMFwiIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIsOccsO8biBhZMSxIHZleWEgc3RvayBrb2R1IGFyYS4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGwtOSBwci0zIHB5LTIgcm91bmRlZC0yeGwgYmctWyMxNDE1MWZdIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1uZXV0cmFsLTUwMCB0ZXh0LXhzIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAge3NlYXJjaFF1ZXJ5ICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoUXVlcnkoJycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZE1vZGFsKHRydWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMy41IHB5LTIgcm91bmRlZC0yeGwgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHRleHQteHMgZm9udC1ib2xkIHNoYWRvdy1sZyBzaGFkb3ctYW1iZXItNTAwLzI1IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTk1IHNocmluay0wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxQbHVzIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgIDxzcGFuPlllbmkgw5xyw7xuPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogaU9TIFNlZ21lbnRlZCBDYXRlZ29yeSBGaWx0ZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgb3ZlcmZsb3cteC1hdXRvIG5vLXNjcm9sbGJhciBweS0xXCI+XG4gICAgICAgIHtDQVRFR09SSUVTLm1hcChjYXQgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZENhdGVnb3J5ID09PSBjYXQuaWQ7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtjYXQuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0LmlkKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMy41IHB5LTEuNSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgPyAnYmctYW1iZXItNTAwIHRleHQtYmxhY2sgZm9udC1zZW1pYm9sZCBzaGFkb3ctbWQgc2hhZG93LWFtYmVyLTUwMC8yMCdcbiAgICAgICAgICAgICAgICAgIDogJ2JnLVsjMTUxNjIwXSB0ZXh0LW5ldXRyYWwtMzAwIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci13aGl0ZS81J1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NhdC5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBJbnZlbnRvcnkgSXRlbSBMaXN0ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIuNVwiPlxuICAgICAgICB7ZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMiBiZy1bIzEyMTMxYl0gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci13aGl0ZS81IHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICAgIDxHZW0gY2xhc3NOYW1lPVwidy0xMCBoLTEwIG14LWF1dG8gdGV4dC1hbWJlci01MDAvNDAgbWItMlwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC0zMDBcIj7DnHLDvG4gYnVsdW5hbWFkxLE8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbXQtMVwiPkFyYW1hIGtyaXRlcmluaSBkZcSfacWfdGlyaW4gdmV5YSB5ZW5pIMO8csO8biBla2xleWluLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZ2V0SXRlbUN1cnJlbnRQcmljZShpdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGlzTG93U3RvY2sgPSBpdGVtLnF1YW50aXR5IDw9IGl0ZW0ubWluU3RvY2tBbGVydDtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCBiZy1bIzEzMTQxZF0vOTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBwLTMuNSBzaGFkb3ctbWQgaG92ZXI6Ym9yZGVyLWFtYmVyLTUwMC8zMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgYmctYW1iZXItNTAwLzE1IHRleHQtYW1iZXItMzAwIGZvbnQtbW9ubyBmb250LWJvbGQgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmthcmF0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgI3tpdGVtLmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHtpc0xvd1N0b2NrICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtWzEwcHhdIHB4LTEuNSBweS0wLjUgcm91bmRlZCBiZy1yb3NlLTUwMC8yMCB0ZXh0LXJvc2UtMzAwIGJvcmRlciBib3JkZXItcm9zZS01MDAvMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEtyaXRpa1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGUgdGV4dC1zbSBtdC0xIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICB7LyogV2VpZ2h0ICYgTGFib3IgU3BlY3MgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbXQtMS41IHRleHQteHMgdGV4dC1uZXV0cmFsLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2NhbGUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPntpdGVtLndlaWdodEdyYW19IGdyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+xLDFn8OnaWxpazoge2l0ZW0ubGFib3JDb3N0UGVyR3JhbX0g4oK6L2dyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5ub3RlcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBtdC0xIGl0YWxpYyBsaW5lLWNsYW1wLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFwie2l0ZW0ubm90ZXN9XCJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIFByaWNlICYgUXVhbnRpdHkgQ29udHJvbHMgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgc2hyaW5rLTAgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC00MDBcIj5CaXJpbSBTYXTEscWfPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LWFtYmVyLTQwMCBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICDigrp7cHJpY2UudG9Mb2NhbGVTdHJpbmcoJ3RyLVRSJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBRdWFudGl0eSBTZWxlY3RvciBidXR0b25zICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG10LTIgYmctYmxhY2svNDAgcHgtMiBweS0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRqdXN0UXVhbnRpdHkoaXRlbS5pZCwgLTEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXJvc2UtNDAwIGFjdGl2ZTpzY2FsZS05MCB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiMSBBemFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1pbnVzQ2lyY2xlIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGUgbWluLXctWzIwcHhdIHRleHQtY2VudGVyIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRqdXN0UXVhbnRpdHkoaXRlbS5pZCwgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtZW1lcmFsZC00MDAgYWN0aXZlOnNjYWxlLTkwIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCIxIEFydMSxclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNDaXJjbGUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogQm90dG9tIENhcmQgRm9vdGVyOiBUb3RhbCBJbi1TdG9jayBWYWx1ZSBhbmQgRGVsZXRlICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBwdC0yLjUgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIFN0b2sgVG9wbGFtxLE6IDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnsoaXRlbS53ZWlnaHRHcmFtICogaXRlbS5xdWFudGl0eSkudG9GaXhlZCgyKX0gZ3I8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMCBmb250LXNlbWlib2xkIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgIOKCunsocHJpY2UgKiBpdGVtLnF1YW50aXR5KS50b0xvY2FsZVN0cmluZygndHItVFInKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oYFwiJHtpdGVtLm5hbWV9XCIgw7xyw7xuw7xuw7wgc2lsbWVrIGlzdGVkacSfaW5pemUgZW1pbiBtaXNpbml6P2ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlSXRlbShpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC01MDAgaG92ZXI6dGV4dC1yb3NlLTQwMCBwLTEgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLDnHLDvG7DvCBTaWxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBBZGQgTmV3IFByb2R1Y3QgaU9TIE1vZGFsIFNoZWV0ICovfVxuICAgICAge3Nob3dBZGRNb2RhbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtZW5kIHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjay83NSBiYWNrZHJvcC1ibHVyLXNtIHAtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHJvdW5kZWQtM3hsIGJnLVsjMTUxNjIyXSBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCBwLTUgc2hhZG93LTJ4bCBhbmltYXRlLWluIHNsaWRlLWluLWZyb20tYm90dG9tIGR1cmF0aW9uLTMwMCBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvIG5vLXNjcm9sbGJhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGItMyBib3JkZXItYiBib3JkZXItd2hpdGUvMTBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxHZW0gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+WWVuaSDDnHLDvG4gLyBTdG9rIEdpcmnFn2k8L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLWZ1bGwgYmctd2hpdGUvMTAgdGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ3JlYXRlUHJvZHVjdH0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTMgdGV4dC14c1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW5ldXRyYWwtMzAwIGZvbnQtbWVkaXVtIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIMOccsO8biBBZMSxXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiw5ZybjogMjIgQXlhciBLaWJyaXQgw4fDtnDDvCBCaWxlemlrXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtTmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZvcm1OYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIuNSByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbmV1dHJhbC0zMDAgZm9udC1tZWRpdW0gbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBTdG9rIEtvZHUgLyBCYXJrb2RcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJMWi0yMi0wM1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtQ29kZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybUNvZGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW5ldXRyYWwtMzAwIGZvbnQtbWVkaXVtIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgS2F0ZWdvcmlcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZvcm1DYXRlZ29yeShlLnRhcmdldC52YWx1ZSBhcyBQcm9kdWN0Q2F0ZWdvcnkpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgYXBwZWFyYW5jZS1ub25lIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiaWxlemlrXCI+QmlsZXppazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ5dXp1a1wiPlnDvHrDvGs8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia29seWVcIj5Lb2x5ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ6aXluZXRcIj5aaXluZXQgQWx0xLFuPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImt1bGNlXCI+S8O8bMOnZSBBbHTEsW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia3VwZVwiPkvDvHBlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNldFwiPlRha8SxbSAvIFNldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1uZXV0cmFsLTQwMCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbmV1dHJhbC0zMDAgZm9udC1tZWRpdW0gbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBBeWFyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUthcmF0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGb3JtS2FyYXQoZS50YXJnZXQudmFsdWUgYXMgR29sZEthcmF0KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIuNSBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LWFtYmVyLTMwMCBmb250LXNlbWlib2xkIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI0S1wiPjI0IEF5YXIgKEhhcyk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIyS1wiPjIyIEF5YXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE4S1wiPjE4IEF5YXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0S1wiPjE0IEF5YXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW5ldXRyYWwtMzAwIGZvbnQtbWVkaXVtIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgR3JhbWFqIChncilcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxNS41MFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtV2VpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGb3JtV2VpZ2h0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSBmb250LW1vbm8gZm9jdXM6Ym9yZGVyLWFtYmVyLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBmb250LW1lZGl1bSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIEFkZXRcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGb3JtUXVhbnRpdHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW5ldXRyYWwtMzAwIGZvbnQtbWVkaXVtIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIEdyYW0gQmHFn8SxIMSwxZ/Dp2lsaWsgVHV0YXLEsSAoVEwgLyBncilcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjc1XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtTGFib3JQZXJHcmFtfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybUxhYm9yUGVyR3JhbShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBmb250LW1lZGl1bSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICDDnHLDvG4gTm90dSAvIMOWemVsbGlrbGVyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiw5ZybjogVFNFIGRhbWdhbMSxLCB0YcWfbMSxIHZleWEgw7Z6ZWwgc2VyaVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybU5vdGVzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybU5vdGVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLWFtYmVyLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIuNSByb3VuZGVkLXhsIGJnLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzE1IHRleHQtbmV1dHJhbC0zMDAgZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIMSwcHRhbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIuNSByb3VuZGVkLXhsIGJnLWFtYmVyLTUwMCBob3ZlcjpiZy1hbWJlci00MDAgdGV4dC1ibGFjayBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSBzaGFkb3ctbGcgc2hhZG93LWFtYmVyLTUwMC8yMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U3Rva2EgRWtsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQTRIVTtBQTVIVixTQUFnQixVQUFVLGVBQWU7QUFDekM7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLE9BQ0s7QUFZUCxNQUFNLGFBQStEO0FBQUEsRUFDbkUsRUFBRSxJQUFJLE9BQU8sT0FBTyxPQUFPO0FBQUEsRUFDM0IsRUFBRSxJQUFJLFdBQVcsT0FBTyxVQUFVO0FBQUEsRUFDbEMsRUFBRSxJQUFJLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDOUIsRUFBRSxJQUFJLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDOUIsRUFBRSxJQUFJLFVBQVUsT0FBTyxTQUFTO0FBQUEsRUFDaEMsRUFBRSxJQUFJLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDOUIsRUFBRSxJQUFJLFFBQVEsT0FBTyxPQUFPO0FBQUEsRUFDNUIsRUFBRSxJQUFJLE9BQU8sT0FBTyxRQUFRO0FBQzlCO0FBRU8sYUFBTSxnQkFBOEMsQ0FBQztBQUFBLEVBQzFEO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLE1BQU07QUFDSixRQUFNLENBQUMsa0JBQWtCLG1CQUFtQixJQUFJLFNBQWtDLEtBQUs7QUFDdkYsUUFBTSxDQUFDLGFBQWEsY0FBYyxJQUFJLFNBQVMsRUFBRTtBQUNqRCxRQUFNLENBQUMsY0FBYyxlQUFlLElBQUksU0FBUyxLQUFLO0FBR3RE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