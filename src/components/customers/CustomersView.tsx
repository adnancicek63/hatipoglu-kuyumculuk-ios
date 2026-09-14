import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"];
import {
  Users,
  UserPlus,
  Phone,
  Vault,
  Receipt,
  Plus,
  X,
  Check,
  Search,
  Printer,
  Copy,
  Sparkles
} from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
import confetti from "/node_modules/.vite/deps/canvas-confetti.js?v=09fc5390";
export const CustomersView = ({
  customers,
  inventory,
  rates,
  settings,
  receipts,
  onAddCustomer,
  onAddTransaction,
  onCompleteSale
}) => {
  const [subTab, setSubTab] = useState("customers");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showNewSaleModal, setShowNewSaleModal] = useState(false);
  const [activeReceipt, setActiveReceipt] = useState(null);
  const [newCustName, setNewCustName] = useState("");
  const [newCustPhone, setNewCustPhone] = useState("");
  const [newCustAddress, setNewCustAddress] = useState("");
  const [txType, setTxType] = useState("payment_cash");
  const [txDescription, setTxDescription] = useState("");
  const [txAmountTL, setTxAmountTL] = useState("");
  const [txAmountGold, setTxAmountGold] = useState("");
  const [saleCustomerId, setSaleCustomerId] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const [saleQuantity, setSaleQuantity] = useState(1);
  const [saleCustomPrice, setSaleCustomPrice] = useState("");
  const [saleDiscount, setSaleDiscount] = useState("0");
  const [salePaymentMethod, setSalePaymentMethod] = useState("cash");
  const [saleNotes, setSaleNotes] = useState("");
  const filteredCustomers = customers.filter(
    (c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.phone.includes(searchQuery)
  );
  const handleCreateCustomer = (e) => {
    e.preventDefault();
    if (!newCustName.trim()) return;
    onAddCustomer({
      name: newCustName,
      phone: newCustPhone,
      address: newCustAddress,
      debtTL: 0,
      debtGoldGram: 0,
      entrustedGoldGram: 0
    });
    setNewCustName("");
    setNewCustPhone("");
    setNewCustAddress("");
    setShowAddCustomerModal(false);
  };
  const handleSaveTransaction = (e) => {
    e.preventDefault();
    if (!selectedCustomer) return;
    const tl = parseFloat(txAmountTL) || 0;
    const gold = parseFloat(txAmountGold) || 0;
    onAddTransaction(selectedCustomer.id, {
      type: txType,
      description: txDescription || "Kasa Hareketi",
      amountTL: tl,
      amountGoldGram: gold
    });
    setSelectedCustomer((prev) => {
      if (!prev) return null;
      let newDebtTL = prev.debtTL;
      let newDebtGold = prev.debtGoldGram;
      let newEntrusted = prev.entrustedGoldGram;
      if (txType === "payment_cash") newDebtTL = Math.max(0, newDebtTL - tl);
      else if (txType === "payment_gold") newDebtGold = Math.max(0, newDebtGold - gold);
      else if (txType === "emanet_deposit") newEntrusted += gold;
      else if (txType === "emanet_withdraw") newEntrusted = Math.max(0, newEntrusted - gold);
      return {
        ...prev,
        debtTL: newDebtTL,
        debtGoldGram: newDebtGold,
        entrustedGoldGram: newEntrusted,
        transactions: [
          {
            id: `tx-${Date.now()}`,
            date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            type: txType,
            description: txDescription || "Kasa Hareketi",
            amountTL: tl,
            amountGoldGram: gold
          },
          ...prev.transactions
        ]
      };
    });
    setTxDescription("");
    setTxAmountTL("");
    setTxAmountGold("");
    setShowTransactionModal(false);
  };
  const handleExecuteSale = (e) => {
    e.preventDefault();
    const product = inventory.find((i) => i.id === selectedProductId);
    if (!product) return;
    let unitPrice = product.sellingPrice;
    if (saleCustomPrice) {
      unitPrice = parseFloat(saleCustomPrice) || unitPrice;
    } else if (product.useDynamicPricing) {
      const rate = rates.find((r) => r.karat === product.karat) || rates[0];
      const metalVal = rate.selling * (product.purity / 0.995) * product.weightGram;
      const labor = product.laborCostPerGram * product.weightGram + product.fixedLaborCost;
      unitPrice = Math.round(metalVal + labor);
    }
    const subtotal = unitPrice * saleQuantity;
    const discount = parseFloat(saleDiscount) || 0;
    const grandTotal = Math.max(0, subtotal - discount);
    const customerObj = customers.find((c) => c.id === saleCustomerId);
    const customerName = customerObj ? customerObj.name : "Perakende Müşteri";
    const created = onCompleteSale({
      customerName,
      items: [
        {
          productName: product.name,
          karat: product.karat,
          weightGram: product.weightGram,
          quantity: saleQuantity,
          unitPrice,
          totalPrice: subtotal
        }
      ],
      totalWeightGram: Number((product.weightGram * saleQuantity).toFixed(2)),
      subtotalTL: subtotal,
      discountTL: discount,
      grandTotalTL: grandTotal,
      paymentMethod: salePaymentMethod,
      notes: saleNotes
    });
    if (customerObj && salePaymentMethod === "credit") {
      onAddTransaction(customerObj.id, {
        type: "sale",
        description: `${saleQuantity}x ${product.name} Vadeli Satış`,
        amountTL: grandTotal,
        amountGoldGram: Number((product.weightGram * saleQuantity * (product.purity / 0.995)).toFixed(2))
      });
    }
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#F59E0B", "#FBBF24", "#D97706", "#FFFFFF"]
      });
    } catch {
    }
    setActiveReceipt(created);
    setShowNewSaleModal(false);
  };
  const copyReceiptText = (receipt) => {
    const text = `========================
${settings.storeName}
Fiş No: #${receipt.receiptNumber}
Tarih: ${receipt.date}
Müşteri: ${receipt.customerName}
------------------------
${receipt.items.map((i) => `${i.quantity}x ${i.productName} (${i.weightGram} gr ${i.karat}) - ₺${i.totalPrice.toLocaleString("tr-TR")}`).join("\n")}
------------------------
Toplam Ağırlık: ${receipt.totalWeightGram} gr
İndirim: ₺${receipt.discountTL}
Genel Toplam: ₺${receipt.grandTotalTL.toLocaleString("tr-TR")}
Ödeme Türü: ${receipt.paymentMethod === "cash" ? "Nakit" : receipt.paymentMethod === "card" ? "Kredi Kartı" : receipt.paymentMethod === "credit" ? "Veresiye" : "Altın Takas"}
========================
Bizi tercih ettiğiniz için teşekkür ederiz.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert("Satış fişi panoya kopyalandı!");
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 pb-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-[#141520] p-1 rounded-2xl border border-white/10 flex items-center shadow-inner", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setSubTab("customers"),
          className: `flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${subTab === "customers" ? "bg-amber-500 text-black shadow-md" : "text-neutral-400 hover:text-white"}`,
          children: [
            /* @__PURE__ */ jsxDEV(Users, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 247,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Müşteri & Emanet" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 248,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 239,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => {
            setShowNewSaleModal(true);
          },
          className: "flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-md transition cursor-pointer active:scale-95",
          children: [
            /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 257,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Hızlı Satış Yap" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 258,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 251,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setSubTab("receipts"),
          className: `flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${subTab === "receipts" ? "bg-amber-500 text-black shadow-md" : "text-neutral-400 hover:text-white"}`,
          children: [
            /* @__PURE__ */ jsxDEV(Receipt, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 269,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: [
              "Fişler (",
              receipts.length,
              ")"
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 270,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 261,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 238,
      columnNumber: 7
    }, this),
    subTab === "customers" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 280,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Müşteri adı veya telefon ara...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "w-full pl-9 pr-3 py-2 rounded-2xl bg-[#14151f] border border-white/10 text-white placeholder-neutral-500 text-xs focus:border-amber-400 focus:outline-none transition"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 281,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 279,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowAddCustomerModal(true),
            className: "flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold shadow-lg shadow-amber-500/25 transition cursor-pointer active:scale-95 shrink-0",
            children: [
              /* @__PURE__ */ jsxDEV(UserPlus, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 294,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Yeni Müşteri" }, void 0, false, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 295,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 290,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-2.5", children: filteredCustomers.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-10 bg-[#12131b] rounded-3xl border border-white/5 text-neutral-400", children: [
        /* @__PURE__ */ jsxDEV(Users, { className: "w-8 h-8 mx-auto text-amber-500/40 mb-2" }, void 0, false, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 303,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs", children: "Kayıtlı müşteri bulunamadı." }, void 0, false, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 304,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 302,
        columnNumber: 15
      }, this) : filteredCustomers.map((cust) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          onClick: () => setSelectedCustomer(cust),
          className: "rounded-2xl bg-[#13141d]/90 border border-white/10 p-3.5 shadow-md hover:border-amber-500/30 transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-white text-sm flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { children: cust.name }, void 0, false, {
                    fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                    lineNumber: 316,
                    columnNumber: 25
                  }, this),
                  cust.entrustedGoldGram > 0 && /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium", children: "Emanet Var" }, void 0, false, {
                    fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                    lineNumber: 318,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 315,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-400 flex items-center gap-1 mt-0.5", children: [
                  /* @__PURE__ */ jsxDEV(Phone, { className: "w-3 h-3 text-neutral-500" }, void 0, false, {
                    fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                    lineNumber: 324,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { children: cust.phone || "Telefon yok" }, void 0, false, {
                    fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                    lineNumber: 325,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 323,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 314,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: cust.debtTL > 0 || cust.debtGoldGram > 0 ? /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-rose-400 font-semibold uppercase", children: "Borç" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 332,
                  columnNumber: 27
                }, this),
                cust.debtTL > 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-bold text-rose-400 font-mono", children: [
                  "₺",
                  cust.debtTL.toLocaleString("tr-TR")
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 334,
                  columnNumber: 29
                }, this),
                cust.debtGoldGram > 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-semibold text-amber-300 font-mono", children: [
                  cust.debtGoldGram,
                  " gr Has"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 339,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 331,
                columnNumber: 25
              }, this) : /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-emerald-400 font-medium", children: "Borcu Yok" }, void 0, false, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 345,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 329,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 313,
              columnNumber: 19
            }, this),
            cust.entrustedGoldGram > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-neutral-300 bg-amber-500/5 px-2.5 py-1 rounded-xl", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 text-amber-300", children: [
                /* @__PURE__ */ jsxDEV(Vault, { className: "w-3.5 h-3.5" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 356,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Kasada Emanet:" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 357,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 355,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-white font-mono", children: [
                cust.entrustedGoldGram.toFixed(2),
                " gr"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 359,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 354,
              columnNumber: 21
            }, this)
          ]
        },
        cust.id,
        true,
        {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 308,
          columnNumber: 17
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 300,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 276,
      columnNumber: 9
    }, this),
    subTab === "receipts" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: receipts.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12 bg-[#12131b] rounded-3xl border border-white/5 text-neutral-400", children: [
      /* @__PURE__ */ jsxDEV(Receipt, { className: "w-10 h-10 mx-auto text-amber-500/40 mb-2" }, void 0, false, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 376,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-neutral-300", children: "Kayıtlı Satış Fişi Yok" }, void 0, false, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 377,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-500 mt-1", children: "Hızlı satış yaptığınızda fişler burada arşivlenir." }, void 0, false, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 378,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 375,
      columnNumber: 13
    }, this) : receipts.map((rcp) => /* @__PURE__ */ jsxDEV(
      "div",
      {
        onClick: () => setActiveReceipt(rcp),
        className: "rounded-2xl bg-[#13141d]/90 border border-white/10 p-3.5 hover:border-amber-500/30 transition cursor-pointer",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-amber-400 font-bold", children: [
              "#",
              rcp.receiptNumber
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 388,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-400", children: rcp.date }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 389,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 387,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-1 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-semibold text-white", children: rcp.customerName }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 392,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-base font-bold text-emerald-400 font-mono", children: [
              "₺",
              rcp.grandTotalTL.toLocaleString("tr-TR")
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 393,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 391,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-neutral-400 mt-1", children: [
            rcp.items.length,
            " kalem ürün • ",
            rcp.totalWeightGram,
            " gr"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 397,
            columnNumber: 17
          }, this)
        ]
      },
      rcp.id,
      true,
      {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 382,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 373,
      columnNumber: 9
    }, this),
    selectedCustomer && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-3", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-md rounded-3xl bg-[#151622] border border-amber-500/30 p-5 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto no-scrollbar", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-white", children: selectedCustomer.name }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 412,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-400", children: selectedCustomer.phone }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 413,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 411,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setSelectedCustomer(null),
            className: "p-1 rounded-full bg-white/10 text-neutral-400 hover:text-white",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 419,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 415,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 410,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2 mt-4 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-neutral-400 text-[10px]", children: "TL Borcu" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 426,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-base font-bold text-rose-400 font-mono", children: [
            "₺",
            selectedCustomer.debtTL.toLocaleString("tr-TR")
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 427,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 425,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-neutral-400 text-[10px]", children: "Altın Borcu (24K Has)" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 433,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-base font-bold text-amber-300 font-mono", children: [
            selectedCustomer.debtGoldGram.toFixed(2),
            " gr"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 434,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 432,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 424,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-3 p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-emerald-400 font-semibold flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(Vault, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 444,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Kasadaki Emanet Altın:" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 445,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 443,
            columnNumber: 17
          }, this),
          selectedCustomer.entrustedNotes && /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-400 italic mt-0.5", children: selectedCustomer.entrustedNotes }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 448,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 442,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-base font-bold text-white font-mono", children: [
          selectedCustomer.entrustedGoldGram.toFixed(2),
          " gr"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 451,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 441,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex gap-2", children: /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setShowTransactionModal(true),
          className: "flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer",
          children: [
            /* @__PURE__ */ jsxDEV(Plus, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 462,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "İşlem / Tahsilat / Emanet" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 463,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 458,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 457,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4 pt-3 border-t border-white/10", children: [
        /* @__PURE__ */ jsxDEV("h5", { className: "text-xs font-bold text-neutral-300 mb-2", children: "Hesap Ekstresi & Geçmiş İşlemler" }, void 0, false, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 469,
          columnNumber: 15
        }, this),
        selectedCustomer.transactions.length === 0 ? /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-500 text-center py-4", children: "Henüz işlem kaydı yok." }, void 0, false, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 471,
          columnNumber: 17
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 max-h-48 overflow-y-auto no-scrollbar", children: selectedCustomer.transactions.map((t) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "p-2.5 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between text-xs",
            children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "font-semibold text-white", children: t.description }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 480,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-neutral-400", children: t.date }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 481,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 479,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-right font-mono", children: [
                t.amountTL > 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-amber-300 font-bold", children: [
                  "₺",
                  t.amountTL.toLocaleString("tr-TR")
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 485,
                  columnNumber: 27
                }, this),
                t.amountGoldGram > 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-neutral-300", children: [
                  t.amountGoldGram,
                  " gr"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 490,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 483,
                columnNumber: 23
              }, this)
            ]
          },
          t.id,
          true,
          {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 475,
            columnNumber: 21
          },
          this
        )) }, void 0, false, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 473,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 468,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 409,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 408,
      columnNumber: 9
    }, this),
    showTransactionModal && selectedCustomer && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-sm rounded-3xl bg-[#161723] border border-amber-500/30 p-5 shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white", children: [
          "İşlem Ekle: ",
          selectedCustomer.name
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 509,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowTransactionModal(false),
            className: "p-1 rounded-full bg-white/10 text-neutral-400 hover:text-white",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 514,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 510,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 508,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSaveTransaction, className: "mt-4 space-y-3 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 mb-1", children: "İşlem Türü" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 520,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "select",
            {
              value: txType,
              onChange: (e) => setTxType(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white",
              children: [
                /* @__PURE__ */ jsxDEV("option", { value: "payment_cash", children: "Nakit Tahsilat (TL Borç Ödemesi)" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 526,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("option", { value: "payment_gold", children: "Altın Tahsilat (Altın Borç Ödemesi)" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 527,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("option", { value: "emanet_deposit", children: "Kasa Emanet Teslim Al (Altın)" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 528,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("option", { value: "emanet_withdraw", children: "Emanet Altın İade Et" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 529,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("option", { value: "sale", children: "Veresiye Borç Kaydet" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 530,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 521,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 519,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 mb-1", children: "Açıklama" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 535,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Örn: Elden nakit alındı / 2 burma teslim edildi",
              value: txDescription,
              onChange: (e) => setTxDescription(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white",
              required: true
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 536,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 534,
          columnNumber: 15
        }, this),
        (txType === "payment_cash" || txType === "sale") && /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 mb-1", children: "Tutar (TL)" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 548,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "number",
              step: "1",
              placeholder: "0",
              value: txAmountTL,
              onChange: (e) => setTxAmountTL(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 549,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 547,
          columnNumber: 17
        }, this),
        (txType === "payment_gold" || txType === "emanet_deposit" || txType === "emanet_withdraw" || txType === "sale") && /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 mb-1", children: "Altın Ağırlığı (Gram)" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 562,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "number",
              step: "0.01",
              placeholder: "0.00",
              value: txAmountGold,
              onChange: (e) => setTxAmountGold(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 563,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 561,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-2 flex gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setShowTransactionModal(false),
              className: "flex-1 py-2.5 rounded-xl bg-white/10 text-neutral-300 font-medium",
              children: "İptal"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 575,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "submit",
              className: "flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold",
              children: "Kaydet"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 582,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 574,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 518,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 507,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 506,
      columnNumber: 9
    }, this),
    showAddCustomerModal && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-sm rounded-3xl bg-[#161723] border border-amber-500/30 p-5 shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(UserPlus, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 600,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Yeni Müşteri Kaydı" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 601,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 599,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowAddCustomerModal(false),
            className: "p-1 rounded-full bg-white/10 text-neutral-400 hover:text-white",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 607,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 603,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 598,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleCreateCustomer, className: "mt-4 space-y-3 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 mb-1", children: "Ad Soyad" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 613,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Müşteri Adı Soyadı",
              value: newCustName,
              onChange: (e) => setNewCustName(e.target.value),
              className: "w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white focus:border-amber-400 focus:outline-none",
              required: true
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 614,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 612,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 mb-1", children: "Telefon Numarası" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 625,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "tel",
              placeholder: "05XX XXX XX XX",
              value: newCustPhone,
              onChange: (e) => setNewCustPhone(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white focus:border-amber-400 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 626,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 624,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 mb-1", children: "Adres / Not" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 636,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Mahalle, cadde veya özel not",
              value: newCustAddress,
              onChange: (e) => setNewCustAddress(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white focus:border-amber-400 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 637,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 635,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-2 flex gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setShowAddCustomerModal(false),
              className: "flex-1 py-2.5 rounded-xl bg-white/10 text-neutral-300 font-medium",
              children: "İptal"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 647,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "submit",
              className: "flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold",
              children: "Müşteri Ekle"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 654,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 646,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 611,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 597,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 596,
      columnNumber: 9
    }, this),
    showNewSaleModal && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-3", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-md rounded-3xl bg-[#151622] border border-amber-500/30 p-5 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto no-scrollbar", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 672,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Hızlı Satış Yap & Fiş Kes" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 673,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 671,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowNewSaleModal(false),
            className: "p-1 rounded-full bg-white/10 text-neutral-400 hover:text-white",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 679,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 675,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 670,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleExecuteSale, className: "mt-4 space-y-3.5 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Satılacak Ürün" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 686,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "select",
            {
              value: selectedProductId,
              onChange: (e) => setSelectedProductId(e.target.value),
              className: "w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white",
              required: true,
              children: [
                /* @__PURE__ */ jsxDEV("option", { value: "", children: "Ürün Seçiniz..." }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 695,
                  columnNumber: 19
                }, this),
                inventory.map((item) => /* @__PURE__ */ jsxDEV("option", { value: item.id, disabled: item.quantity <= 0, children: [
                  item.name,
                  " (",
                  item.weightGram,
                  " gr - ",
                  item.karat,
                  ") [Stok: ",
                  item.quantity,
                  "]"
                ] }, item.id, true, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 697,
                  columnNumber: 21
                }, this))
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 689,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 685,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Adet" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 707,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                min: "1",
                value: saleQuantity,
                onChange: (e) => setSaleQuantity(Math.max(1, parseInt(e.target.value) || 1)),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono",
                required: true
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 710,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 706,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "İndirim (₺)" }, void 0, false, {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 721,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                value: saleDiscount,
                onChange: (e) => setSaleDiscount(e.target.value),
                className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-rose-300 font-mono"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 724,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 720,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 705,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Kayıtlı Müşteri (Opsiyonel)" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 735,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "select",
            {
              value: saleCustomerId,
              onChange: (e) => setSaleCustomerId(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white",
              children: [
                /* @__PURE__ */ jsxDEV("option", { value: "", children: "Perakende / İsimsiz Müşteri" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 743,
                  columnNumber: 19
                }, this),
                customers.map((c) => /* @__PURE__ */ jsxDEV("option", { value: c.id, children: [
                  c.name,
                  " (",
                  c.phone,
                  ")"
                ] }, c.id, true, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 745,
                  columnNumber: 21
                }, this))
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 738,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 734,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-300 font-medium mb-1", children: "Ödeme Şekli" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 754,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setSalePaymentMethod("cash"),
                className: `py-2 rounded-xl text-xs font-semibold border ${salePaymentMethod === "cash" ? "bg-amber-500 text-black border-amber-500" : "bg-black/40 text-neutral-300 border-white/10"}`,
                children: "Nakit TL"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 758,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setSalePaymentMethod("card"),
                className: `py-2 rounded-xl text-xs font-semibold border ${salePaymentMethod === "card" ? "bg-amber-500 text-black border-amber-500" : "bg-black/40 text-neutral-300 border-white/10"}`,
                children: "Kredi Kartı"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 769,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setSalePaymentMethod("gold_exchange"),
                className: `py-2 rounded-xl text-xs font-semibold border ${salePaymentMethod === "gold_exchange" ? "bg-amber-500 text-black border-amber-500" : "bg-black/40 text-neutral-300 border-white/10"}`,
                children: "Hurda / Takas"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 780,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setSalePaymentMethod("credit"),
                className: `py-2 rounded-xl text-xs font-semibold border ${salePaymentMethod === "credit" ? "bg-amber-500 text-black border-amber-500" : "bg-black/40 text-neutral-300 border-white/10"}`,
                children: "Veresiye (Cariye Yaz)"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 791,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 757,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 753,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-3 flex gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setShowNewSaleModal(false),
              className: "flex-1 py-2.5 rounded-xl bg-white/10 text-neutral-300 font-medium",
              children: "Vazgeç"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 806,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "submit",
              className: "flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20",
              children: [
                /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 817,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Satışı Tamamla" }, void 0, false, {
                  fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                  lineNumber: 818,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
              lineNumber: 813,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 805,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 683,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 669,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 668,
      columnNumber: 9
    }, this),
    activeReceipt && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-sm rounded-3xl bg-neutral-900 border border-amber-500/40 p-6 shadow-2xl relative text-xs text-neutral-200 animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setActiveReceipt(null),
          className: "absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-neutral-400 hover:text-white",
          children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 834,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 830,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center pb-4 border-b border-dashed border-white/20", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "font-extrabold text-base tracking-wider text-amber-400 uppercase", children: settings.storeName }, void 0, false, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 839,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] text-neutral-400 mt-0.5", children: settings.address }, void 0, false, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 842,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-neutral-500", children: [
          "Tel: ",
          settings.phone
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 843,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "inline-block mt-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-neutral-300", children: [
          "Fiş No: #",
          activeReceipt.receiptNumber
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 844,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 838,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "py-2.5 border-b border-dashed border-white/20 space-y-1 text-[11px]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-400", children: "Tarih:" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 852,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: activeReceipt.date }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 853,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 851,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-neutral-400", children: "Müşteri:" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 856,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-white", children: activeReceipt.customerName }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 857,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 855,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 850,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "py-3 border-b border-dashed border-white/20 space-y-2", children: activeReceipt.items.map((it, idx) => /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-[11px]", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "font-semibold text-white", children: it.productName }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 866,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-neutral-400 text-[10px]", children: [
            it.quantity,
            " adet • ",
            it.weightGram,
            " gr • ",
            it.karat
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 867,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 865,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "font-mono font-bold text-amber-300", children: [
          "₺",
          it.totalPrice.toLocaleString("tr-TR")
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 871,
          columnNumber: 19
        }, this)
      ] }, idx, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 864,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 862,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "pt-3 space-y-1.5", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-neutral-400", children: [
          /* @__PURE__ */ jsxDEV("span", { children: "Ara Toplam:" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 881,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-mono", children: [
            "₺",
            activeReceipt.subtotalTL.toLocaleString("tr-TR")
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 882,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 880,
          columnNumber: 15
        }, this),
        activeReceipt.discountTL > 0 && /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-rose-400", children: [
          /* @__PURE__ */ jsxDEV("span", { children: "İskonto:" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 886,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-mono", children: [
            "-₺",
            activeReceipt.discountTL.toLocaleString("tr-TR")
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 887,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 885,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-sm font-extrabold text-white pt-1", children: [
          /* @__PURE__ */ jsxDEV("span", { children: "Genel Toplam:" }, void 0, false, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 891,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-amber-400 text-base", children: [
            "₺",
            activeReceipt.grandTotalTL.toLocaleString("tr-TR")
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 892,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
          lineNumber: 890,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 879,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-5 pt-3 border-t border-white/10 flex gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => copyReceiptText(activeReceipt),
            className: "flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer",
            children: [
              /* @__PURE__ */ jsxDEV(Copy, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 904,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Kopyala" }, void 0, false, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 905,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 900,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => window.print(),
            className: "flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer",
            children: [
              /* @__PURE__ */ jsxDEV(Printer, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 911,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Yazdır" }, void 0, false, {
                fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
                lineNumber: 912,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
            lineNumber: 907,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
        lineNumber: 899,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 829,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
      lineNumber: 828,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/customers/CustomersView.tsx?raw=1789374318218",
    lineNumber: 236,
    columnNumber: 5
  }, this);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkN1c3RvbWVyc1ZpZXcudHN4P3Jhdz0xNzg5Mzc0MzE4MjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFxuICBVc2VycywgXG4gIFVzZXJQbHVzLCBcbiAgUGhvbmUsIFxuICBWYXVsdCwgXG4gIEFycm93RG93bkxlZnQsIFxuICBBcnJvd1VwUmlnaHQsIFxuICBSZWNlaXB0LCBcbiAgUGx1cywgXG4gIFgsIFxuICBDaGVjaywgXG4gIFNlYXJjaCxcbiAgRmlsZVRleHQsXG4gIFByaW50ZXIsXG4gIENvcHksXG4gIFNwYXJrbGVzXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgY29uZmV0dGkgZnJvbSAnY2FudmFzLWNvbmZldHRpJztcbmltcG9ydCB7IEN1c3RvbWVyLCBDdXN0b21lclRyYW5zYWN0aW9uLCBJbnZlbnRvcnlJdGVtLCBTYWxlUmVjZWlwdCwgR29sZFJhdGUsIFN0b3JlU2V0dGluZ3MgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBDdXN0b21lcnNWaWV3UHJvcHMge1xuICBjdXN0b21lcnM6IEN1c3RvbWVyW107XG4gIGludmVudG9yeTogSW52ZW50b3J5SXRlbVtdO1xuICByYXRlczogR29sZFJhdGVbXTtcbiAgc2V0dGluZ3M6IFN0b3JlU2V0dGluZ3M7XG4gIHJlY2VpcHRzOiBTYWxlUmVjZWlwdFtdO1xuICBvbkFkZEN1c3RvbWVyOiAoY3VzdG9tZXI6IE9taXQ8Q3VzdG9tZXIsICdpZCcgfCAndHJhbnNhY3Rpb25zJyB8ICdjcmVhdGVkQXQnPikgPT4gdm9pZDtcbiAgb25BZGRUcmFuc2FjdGlvbjogKGN1c3RvbWVySWQ6IHN0cmluZywgdHg6IE9taXQ8Q3VzdG9tZXJUcmFuc2FjdGlvbiwgJ2lkJyB8ICdkYXRlJz4pID0+IHZvaWQ7XG4gIG9uQ29tcGxldGVTYWxlOiAoc2FsZURhdGE6IE9taXQ8U2FsZVJlY2VpcHQsICdpZCcgfCAncmVjZWlwdE51bWJlcicgfCAnZGF0ZSc+KSA9PiBTYWxlUmVjZWlwdDtcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWVyc1ZpZXc6IFJlYWN0LkZDPEN1c3RvbWVyc1ZpZXdQcm9wcz4gPSAoe1xuICBjdXN0b21lcnMsXG4gIGludmVudG9yeSxcbiAgcmF0ZXMsXG4gIHNldHRpbmdzLFxuICByZWNlaXB0cyxcbiAgb25BZGRDdXN0b21lcixcbiAgb25BZGRUcmFuc2FjdGlvbixcbiAgb25Db21wbGV0ZVNhbGUsXG59KSA9PiB7XG4gIGNvbnN0IFtzdWJUYWIsIHNldFN1YlRhYl0gPSB1c2VTdGF0ZTwnY3VzdG9tZXJzJyB8ICdzYWxlcycgfCAncmVjZWlwdHMnPignY3VzdG9tZXJzJyk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VsZWN0ZWRDdXN0b21lciwgc2V0U2VsZWN0ZWRDdXN0b21lcl0gPSB1c2VTdGF0ZTxDdXN0b21lciB8IG51bGw+KG51bGwpO1xuXG4gIC8vIE1vZGFsc1xuICBjb25zdCBbc2hvd0FkZEN1c3RvbWVyTW9kYWwsIHNldFNob3dBZGRDdXN0b21lck1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dUcmFuc2FjdGlvbk1vZGFsLCBzZXRTaG93VHJhbnNhY3Rpb25Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TmV3U2FsZU1vZGFsLCBzZXRTaG93TmV3U2FsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGl2ZVJlY2VpcHQsIHNldEFjdGl2ZVJlY2VpcHRdID0gdXNlU3RhdGU8U2FsZVJlY2VpcHQgfCBudWxsPihudWxsKTtcblxuICAvLyBOZXcgQ3VzdG9tZXIgZm9ybVxuICBjb25zdCBbbmV3Q3VzdE5hbWUsIHNldE5ld0N1c3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW25ld0N1c3RQaG9uZSwgc2V0TmV3Q3VzdFBob25lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW25ld0N1c3RBZGRyZXNzLCBzZXROZXdDdXN0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gVHJhbnNhY3Rpb24gZm9ybVxuICBjb25zdCBbdHhUeXBlLCBzZXRUeFR5cGVdID0gdXNlU3RhdGU8Q3VzdG9tZXJUcmFuc2FjdGlvblsndHlwZSddPigncGF5bWVudF9jYXNoJyk7XG4gIGNvbnN0IFt0eERlc2NyaXB0aW9uLCBzZXRUeERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3R4QW1vdW50VEwsIHNldFR4QW1vdW50VExdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdHhBbW91bnRHb2xkLCBzZXRUeEFtb3VudEdvbGRdID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIE5ldyBTYWxlIEZvcm1cbiAgY29uc3QgW3NhbGVDdXN0b21lcklkLCBzZXRTYWxlQ3VzdG9tZXJJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3NlbGVjdGVkUHJvZHVjdElkLCBzZXRTZWxlY3RlZFByb2R1Y3RJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3NhbGVRdWFudGl0eSwgc2V0U2FsZVF1YW50aXR5XSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtzYWxlQ3VzdG9tUHJpY2UsIHNldFNhbGVDdXN0b21QcmljZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3NhbGVEaXNjb3VudCwgc2V0U2FsZURpc2NvdW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJzAnKTtcbiAgY29uc3QgW3NhbGVQYXltZW50TWV0aG9kLCBzZXRTYWxlUGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZTwnY2FzaCcgfCAnY2FyZCcgfCAnZ29sZF9leGNoYW5nZScgfCAnY3JlZGl0Jz4oJ2Nhc2gnKTtcbiAgY29uc3QgW3NhbGVOb3Rlcywgc2V0U2FsZU5vdGVzXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBGaWx0ZXIgY3VzdG9tZXJzXG4gIGNvbnN0IGZpbHRlcmVkQ3VzdG9tZXJzID0gY3VzdG9tZXJzLmZpbHRlcihjID0+IFxuICAgIGMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgYy5waG9uZS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcbiAgKTtcblxuICBjb25zdCBoYW5kbGVDcmVhdGVDdXN0b21lciA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFuZXdDdXN0TmFtZS50cmltKCkpIHJldHVybjtcbiAgICBvbkFkZEN1c3RvbWVyKHtcbiAgICAgIG5hbWU6IG5ld0N1c3ROYW1lLFxuICAgICAgcGhvbmU6IG5ld0N1c3RQaG9uZSxcbiAgICAgIGFkZHJlc3M6IG5ld0N1c3RBZGRyZXNzLFxuICAgICAgZGVidFRMOiAwLFxuICAgICAgZGVidEdvbGRHcmFtOiAwLFxuICAgICAgZW50cnVzdGVkR29sZEdyYW06IDAsXG4gICAgfSk7XG4gICAgc2V0TmV3Q3VzdE5hbWUoJycpO1xuICAgIHNldE5ld0N1c3RQaG9uZSgnJyk7XG4gICAgc2V0TmV3Q3VzdEFkZHJlc3MoJycpO1xuICAgIHNldFNob3dBZGRDdXN0b21lck1vZGFsKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlVHJhbnNhY3Rpb24gPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghc2VsZWN0ZWRDdXN0b21lcikgcmV0dXJuO1xuICAgIGNvbnN0IHRsID0gcGFyc2VGbG9hdCh0eEFtb3VudFRMKSB8fCAwO1xuICAgIGNvbnN0IGdvbGQgPSBwYXJzZUZsb2F0KHR4QW1vdW50R29sZCkgfHwgMDtcblxuICAgIG9uQWRkVHJhbnNhY3Rpb24oc2VsZWN0ZWRDdXN0b21lci5pZCwge1xuICAgICAgdHlwZTogdHhUeXBlLFxuICAgICAgZGVzY3JpcHRpb246IHR4RGVzY3JpcHRpb24gfHwgJ0thc2EgSGFyZWtldGknLFxuICAgICAgYW1vdW50VEw6IHRsLFxuICAgICAgYW1vdW50R29sZEdyYW06IGdvbGQsXG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgbG9jYWwgc2VsZWN0ZWQgY3VzdG9tZXIgcmVmZXJlbmNlXG4gICAgc2V0U2VsZWN0ZWRDdXN0b21lcihwcmV2ID0+IHtcbiAgICAgIGlmICghcHJldikgcmV0dXJuIG51bGw7XG4gICAgICBsZXQgbmV3RGVidFRMID0gcHJldi5kZWJ0VEw7XG4gICAgICBsZXQgbmV3RGVidEdvbGQgPSBwcmV2LmRlYnRHb2xkR3JhbTtcbiAgICAgIGxldCBuZXdFbnRydXN0ZWQgPSBwcmV2LmVudHJ1c3RlZEdvbGRHcmFtO1xuICAgICAgaWYgKHR4VHlwZSA9PT0gJ3BheW1lbnRfY2FzaCcpIG5ld0RlYnRUTCA9IE1hdGgubWF4KDAsIG5ld0RlYnRUTCAtIHRsKTtcbiAgICAgIGVsc2UgaWYgKHR4VHlwZSA9PT0gJ3BheW1lbnRfZ29sZCcpIG5ld0RlYnRHb2xkID0gTWF0aC5tYXgoMCwgbmV3RGVidEdvbGQgLSBnb2xkKTtcbiAgICAgIGVsc2UgaWYgKHR4VHlwZSA9PT0gJ2VtYW5ldF9kZXBvc2l0JykgbmV3RW50cnVzdGVkICs9IGdvbGQ7XG4gICAgICBlbHNlIGlmICh0eFR5cGUgPT09ICdlbWFuZXRfd2l0aGRyYXcnKSBuZXdFbnRydXN0ZWQgPSBNYXRoLm1heCgwLCBuZXdFbnRydXN0ZWQgLSBnb2xkKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgZGVidFRMOiBuZXdEZWJ0VEwsXG4gICAgICAgIGRlYnRHb2xkR3JhbTogbmV3RGVidEdvbGQsXG4gICAgICAgIGVudHJ1c3RlZEdvbGRHcmFtOiBuZXdFbnRydXN0ZWQsXG4gICAgICAgIHRyYW5zYWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBgdHgtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgICAgICAgIHR5cGU6IHR4VHlwZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0eERlc2NyaXB0aW9uIHx8ICdLYXNhIEhhcmVrZXRpJyxcbiAgICAgICAgICAgIGFtb3VudFRMOiB0bCxcbiAgICAgICAgICAgIGFtb3VudEdvbGRHcmFtOiBnb2xkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4ucHJldi50cmFuc2FjdGlvbnMsXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgc2V0VHhEZXNjcmlwdGlvbignJyk7XG4gICAgc2V0VHhBbW91bnRUTCgnJyk7XG4gICAgc2V0VHhBbW91bnRHb2xkKCcnKTtcbiAgICBzZXRTaG93VHJhbnNhY3Rpb25Nb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRXhlY3V0ZVNhbGUgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBpbnZlbnRvcnkuZmluZChpID0+IGkuaWQgPT09IHNlbGVjdGVkUHJvZHVjdElkKTtcbiAgICBpZiAoIXByb2R1Y3QpIHJldHVybjtcblxuICAgIGxldCB1bml0UHJpY2UgPSBwcm9kdWN0LnNlbGxpbmdQcmljZTtcbiAgICBpZiAoc2FsZUN1c3RvbVByaWNlKSB7XG4gICAgICB1bml0UHJpY2UgPSBwYXJzZUZsb2F0KHNhbGVDdXN0b21QcmljZSkgfHwgdW5pdFByaWNlO1xuICAgIH0gZWxzZSBpZiAocHJvZHVjdC51c2VEeW5hbWljUHJpY2luZykge1xuICAgICAgY29uc3QgcmF0ZSA9IHJhdGVzLmZpbmQociA9PiByLmthcmF0ID09PSBwcm9kdWN0LmthcmF0KSB8fCByYXRlc1swXTtcbiAgICAgIGNvbnN0IG1ldGFsVmFsID0gKHJhdGUuc2VsbGluZyAqIChwcm9kdWN0LnB1cml0eSAvIDAuOTk1KSkgKiBwcm9kdWN0LndlaWdodEdyYW07XG4gICAgICBjb25zdCBsYWJvciA9IChwcm9kdWN0LmxhYm9yQ29zdFBlckdyYW0gKiBwcm9kdWN0LndlaWdodEdyYW0pICsgcHJvZHVjdC5maXhlZExhYm9yQ29zdDtcbiAgICAgIHVuaXRQcmljZSA9IE1hdGgucm91bmQobWV0YWxWYWwgKyBsYWJvcik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VidG90YWwgPSB1bml0UHJpY2UgKiBzYWxlUXVhbnRpdHk7XG4gICAgY29uc3QgZGlzY291bnQgPSBwYXJzZUZsb2F0KHNhbGVEaXNjb3VudCkgfHwgMDtcbiAgICBjb25zdCBncmFuZFRvdGFsID0gTWF0aC5tYXgoMCwgc3VidG90YWwgLSBkaXNjb3VudCk7XG5cbiAgICBjb25zdCBjdXN0b21lck9iaiA9IGN1c3RvbWVycy5maW5kKGMgPT4gYy5pZCA9PT0gc2FsZUN1c3RvbWVySWQpO1xuICAgIGNvbnN0IGN1c3RvbWVyTmFtZSA9IGN1c3RvbWVyT2JqID8gY3VzdG9tZXJPYmoubmFtZSA6ICdQZXJha2VuZGUgTcO8xZ90ZXJpJztcblxuICAgIGNvbnN0IGNyZWF0ZWQgPSBvbkNvbXBsZXRlU2FsZSh7XG4gICAgICBjdXN0b21lck5hbWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvZHVjdE5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICBrYXJhdDogcHJvZHVjdC5rYXJhdCxcbiAgICAgICAgICB3ZWlnaHRHcmFtOiBwcm9kdWN0LndlaWdodEdyYW0sXG4gICAgICAgICAgcXVhbnRpdHk6IHNhbGVRdWFudGl0eSxcbiAgICAgICAgICB1bml0UHJpY2UsXG4gICAgICAgICAgdG90YWxQcmljZTogc3VidG90YWwsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgdG90YWxXZWlnaHRHcmFtOiBOdW1iZXIoKHByb2R1Y3Qud2VpZ2h0R3JhbSAqIHNhbGVRdWFudGl0eSkudG9GaXhlZCgyKSksXG4gICAgICBzdWJ0b3RhbFRMOiBzdWJ0b3RhbCxcbiAgICAgIGRpc2NvdW50VEw6IGRpc2NvdW50LFxuICAgICAgZ3JhbmRUb3RhbFRMOiBncmFuZFRvdGFsLFxuICAgICAgcGF5bWVudE1ldGhvZDogc2FsZVBheW1lbnRNZXRob2QsXG4gICAgICBub3Rlczogc2FsZU5vdGVzLFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2FsZSB3YXMgb24gY3JlZGl0IHRvIGEgcmVnaXN0ZXJlZCBjdXN0b21lciwgdXBkYXRlIGRlYnRcbiAgICBpZiAoY3VzdG9tZXJPYmogJiYgc2FsZVBheW1lbnRNZXRob2QgPT09ICdjcmVkaXQnKSB7XG4gICAgICBvbkFkZFRyYW5zYWN0aW9uKGN1c3RvbWVyT2JqLmlkLCB7XG4gICAgICAgIHR5cGU6ICdzYWxlJyxcbiAgICAgICAgZGVzY3JpcHRpb246IGAke3NhbGVRdWFudGl0eX14ICR7cHJvZHVjdC5uYW1lfSBWYWRlbGkgU2F0xLHFn2AsXG4gICAgICAgIGFtb3VudFRMOiBncmFuZFRvdGFsLFxuICAgICAgICBhbW91bnRHb2xkR3JhbTogTnVtYmVyKChwcm9kdWN0LndlaWdodEdyYW0gKiBzYWxlUXVhbnRpdHkgKiAocHJvZHVjdC5wdXJpdHkgLyAwLjk5NSkpLnRvRml4ZWQoMikpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciBjZWxlYnJhdG9yeSBjb25mZXR0aVxuICAgIHRyeSB7XG4gICAgICBjb25mZXR0aSh7XG4gICAgICAgIHBhcnRpY2xlQ291bnQ6IDUwLFxuICAgICAgICBzcHJlYWQ6IDYwLFxuICAgICAgICBvcmlnaW46IHsgeTogMC44IH0sXG4gICAgICAgIGNvbG9yczogWycjRjU5RTBCJywgJyNGQkJGMjQnLCAnI0Q5NzcwNicsICcjRkZGRkZGJ10sXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yZVxuICAgIH1cblxuICAgIHNldEFjdGl2ZVJlY2VpcHQoY3JlYXRlZCk7XG4gICAgc2V0U2hvd05ld1NhbGVNb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgY29weVJlY2VpcHRUZXh0ID0gKHJlY2VpcHQ6IFNhbGVSZWNlaXB0KSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGA9PT09PT09PT09PT09PT09PT09PT09PT1cbiR7c2V0dGluZ3Muc3RvcmVOYW1lfVxuRmnFnyBObzogIyR7cmVjZWlwdC5yZWNlaXB0TnVtYmVyfVxuVGFyaWg6ICR7cmVjZWlwdC5kYXRlfVxuTcO8xZ90ZXJpOiAke3JlY2VpcHQuY3VzdG9tZXJOYW1lfVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4ke3JlY2VpcHQuaXRlbXMubWFwKGkgPT4gYCR7aS5xdWFudGl0eX14ICR7aS5wcm9kdWN0TmFtZX0gKCR7aS53ZWlnaHRHcmFtfSBnciAke2kua2FyYXR9KSAtIOKCuiR7aS50b3RhbFByaWNlLnRvTG9jYWxlU3RyaW5nKCd0ci1UUicpfWApLmpvaW4oJ1xcbicpfVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5Ub3BsYW0gQcSfxLFybMSxazogJHtyZWNlaXB0LnRvdGFsV2VpZ2h0R3JhbX0gZ3JcbsSwbmRpcmltOiDigroke3JlY2VpcHQuZGlzY291bnRUTH1cbkdlbmVsIFRvcGxhbTog4oK6JHtyZWNlaXB0LmdyYW5kVG90YWxUTC50b0xvY2FsZVN0cmluZygndHItVFInKX1cbsOWZGVtZSBUw7xyw7w6ICR7cmVjZWlwdC5wYXltZW50TWV0aG9kID09PSAnY2FzaCcgPyAnTmFraXQnIDogcmVjZWlwdC5wYXltZW50TWV0aG9kID09PSAnY2FyZCcgPyAnS3JlZGkgS2FydMSxJyA6IHJlY2VpcHQucGF5bWVudE1ldGhvZCA9PT0gJ2NyZWRpdCcgPyAnVmVyZXNpeWUnIDogJ0FsdMSxbiBUYWthcyd9XG49PT09PT09PT09PT09PT09PT09PT09PT1cbkJpemkgdGVyY2loIGV0dGnEn2luaXogacOnaW4gdGXFn2Vra8O8ciBlZGVyaXouYDtcblxuICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcbiAgICAgIGFsZXJ0KCdTYXTEscWfIGZpxZ9pIHBhbm95YSBrb3B5YWxhbmTEsSEnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBwYi02XCI+XG4gICAgICB7LyogU3ViIHRhYnM6IE3DvMWfdGVyaSBEZWZ0ZXJpIC8gSMSxemzEsSBTYXTEscWfIC8gR2XDp21pxZ8gRmnFn2xlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxNDE1MjBdIHAtMSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGZsZXggaXRlbXMtY2VudGVyIHNoYWRvdy1pbm5lclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3ViVGFiKCdjdXN0b21lcnMnKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgIHN1YlRhYiA9PT0gJ2N1c3RvbWVycydcbiAgICAgICAgICAgICAgPyAnYmctYW1iZXItNTAwIHRleHQtYmxhY2sgc2hhZG93LW1kJ1xuICAgICAgICAgICAgICA6ICd0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgIDxzcGFuPk3DvMWfdGVyaSAmIEVtYW5ldDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dOZXdTYWxlTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MDAgdG8tYW1iZXItNDAwIHRleHQtYmxhY2sgc2hhZG93LW1kIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTk1XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgPHNwYW4+SMSxemzEsSBTYXTEscWfIFlhcDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN1YlRhYigncmVjZWlwdHMnKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgIHN1YlRhYiA9PT0gJ3JlY2VpcHRzJ1xuICAgICAgICAgICAgICA/ICdiZy1hbWJlci01MDAgdGV4dC1ibGFjayBzaGFkb3ctbWQnXG4gICAgICAgICAgICAgIDogJ3RleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWNlaXB0IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICA8c3Bhbj5GacWfbGVyICh7cmVjZWlwdHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDVVNUT01FUlMgU1VCLVRBQiAqL31cbiAgICAgIHtzdWJUYWIgPT09ICdjdXN0b21lcnMnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICB7LyogSGVhZGVyIHNlYXJjaCAmIGFkZCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMVwiPlxuICAgICAgICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy00IGgtNCB0ZXh0LW5ldXRyYWwtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTcO8xZ90ZXJpIGFkxLEgdmV5YSB0ZWxlZm9uIGFyYS4uLlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGwtOSBwci0zIHB5LTIgcm91bmRlZC0yeGwgYmctWyMxNDE1MWZdIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1uZXV0cmFsLTUwMCB0ZXh0LXhzIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZEN1c3RvbWVyTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMy41IHB5LTIgcm91bmRlZC0yeGwgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHRleHQteHMgZm9udC1ib2xkIHNoYWRvdy1sZyBzaGFkb3ctYW1iZXItNTAwLzI1IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTk1IHNocmluay0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFVzZXJQbHVzIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5ZZW5pIE3DvMWfdGVyaTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEN1c3RvbWVyIENhcmRzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yLjVcIj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZEN1c3RvbWVycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTAgYmctWyMxMjEzMWJdIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItd2hpdGUvNSB0ZXh0LW5ldXRyYWwtNDAwXCI+XG4gICAgICAgICAgICAgICAgPFVzZXJzIGNsYXNzTmFtZT1cInctOCBoLTggbXgtYXV0byB0ZXh0LWFtYmVyLTUwMC80MCBtYi0yXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+S2F5xLF0bMSxIG3DvMWfdGVyaSBidWx1bmFtYWTEsS48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgZmlsdGVyZWRDdXN0b21lcnMubWFwKGN1c3QgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17Y3VzdC5pZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ3VzdG9tZXIoY3VzdCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBiZy1bIzEzMTQxZF0vOTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBwLTMuNSBzaGFkb3ctbWQgaG92ZXI6Ym9yZGVyLWFtYmVyLTUwMC8zMCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y3VzdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0LmVudHJ1c3RlZEdvbGRHcmFtID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBiZy1hbWJlci01MDAvMjAgdGV4dC1hbWJlci0zMDAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFuZXQgVmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC00MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy0zIGgtMyB0ZXh0LW5ldXRyYWwtNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXN0LnBob25lIHx8ICdUZWxlZm9uIHlvayd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2N1c3QuZGVidFRMID4gMCB8fCBjdXN0LmRlYnRHb2xkR3JhbSA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtcm9zZS00MDAgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj5Cb3LDpzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VzdC5kZWJ0VEwgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtcm9zZS00MDAgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigrp7Y3VzdC5kZWJ0VEwudG9Mb2NhbGVTdHJpbmcoJ3RyLVRSJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0LmRlYnRHb2xkR3JhbSA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtYW1iZXItMzAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1c3QuZGVidEdvbGRHcmFtfSBnciBIYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1lbWVyYWxkLTQwMCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCb3JjdSBZb2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBFbnRydXN0ZWQgZGV0YWlscyBpZiBhbnkgKi99XG4gICAgICAgICAgICAgICAgICB7Y3VzdC5lbnRydXN0ZWRHb2xkR3JhbSA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIuNSBwdC0yIGJvcmRlci10IGJvcmRlci13aGl0ZS81IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtbmV1dHJhbC0zMDAgYmctYW1iZXItNTAwLzUgcHgtMi41IHB5LTEgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtYW1iZXItMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmF1bHQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+S2FzYWRhIEVtYW5ldDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1c3QuZW50cnVzdGVkR29sZEdyYW0udG9GaXhlZCgyKX0gZ3JcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIFJFQ0VJUFRTIFNVQi1UQUIgKi99XG4gICAgICB7c3ViVGFiID09PSAncmVjZWlwdHMnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICB7cmVjZWlwdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMiBiZy1bIzEyMTMxYl0gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci13aGl0ZS81IHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICAgICAgPFJlY2VpcHQgY2xhc3NOYW1lPVwidy0xMCBoLTEwIG14LWF1dG8gdGV4dC1hbWJlci01MDAvNDAgbWItMlwiIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1uZXV0cmFsLTMwMFwiPkthecSxdGzEsSBTYXTEscWfIEZpxZ9pIFlvazwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIG10LTFcIj5IxLF6bMSxIHNhdMSxxZ8geWFwdMSxxJ/EsW7EsXpkYSBmacWfbGVyIGJ1cmFkYSBhcsWfaXZsZW5pci48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgcmVjZWlwdHMubWFwKHJjcCA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3JjcC5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVSZWNlaXB0KHJjcCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYmctWyMxMzE0MWRdLzkwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcC0zLjUgaG92ZXI6Ym9yZGVyLWFtYmVyLTUwMC8zMCB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LWFtYmVyLTQwMCBmb250LWJvbGRcIj4je3JjcC5yZWNlaXB0TnVtYmVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDBcIj57cmNwLmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57cmNwLmN1c3RvbWVyTmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICDigrp7cmNwLmdyYW5kVG90YWxUTC50b0xvY2FsZVN0cmluZygndHItVFInKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNDAwIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgIHtyY3AuaXRlbXMubGVuZ3RofSBrYWxlbSDDvHLDvG4g4oCiIHtyY3AudG90YWxXZWlnaHRHcmFtfSBnclxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogQ3VzdG9tZXIgRGV0YWlsIERyYXdlciAvIE1vZGFsICovfVxuICAgICAge3NlbGVjdGVkQ3VzdG9tZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWVuZCBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svNzUgYmFja2Ryb3AtYmx1ci1zbSBwLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCByb3VuZGVkLTN4bCBiZy1bIzE1MTYyMl0gYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAgcC01IHNoYWRvdy0yeGwgYW5pbWF0ZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbSBkdXJhdGlvbi0zMDAgbWF4LWgtWzkwdmhdIG92ZXJmbG93LXktYXV0byBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBiLTMgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntzZWxlY3RlZEN1c3RvbWVyLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC00MDBcIj57c2VsZWN0ZWRDdXN0b21lci5waG9uZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDdXN0b21lcihudWxsKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzEwIHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEJhbGFuY2VzIFN1bW1hcnkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgbXQtNCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLXJvc2UtNTAwLzEwIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItcm9zZS01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDAgdGV4dC1bMTBweF1cIj5UTCBCb3JjdTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXJvc2UtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAg4oK6e3NlbGVjdGVkQ3VzdG9tZXIuZGVidFRMLnRvTG9jYWxlU3RyaW5nKCd0ci1UUicpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy1hbWJlci01MDAvMTAgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDAgdGV4dC1bMTBweF1cIj5BbHTEsW4gQm9yY3UgKDI0SyBIYXMpPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtYW1iZXItMzAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ3VzdG9tZXIuZGVidEdvbGRHcmFtLnRvRml4ZWQoMil9IGdyXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBFbWFuZXQgU3RhdHVzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHAtMyBiZy1lbWVyYWxkLTUwMC8xMCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxWYXVsdCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5LYXNhZGFraSBFbWFuZXQgQWx0xLFuOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDdXN0b21lci5lbnRydXN0ZWROb3RlcyAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwIGl0YWxpYyBtdC0wLjVcIj57c2VsZWN0ZWRDdXN0b21lci5lbnRydXN0ZWROb3Rlc308L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC13aGl0ZSBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDdXN0b21lci5lbnRydXN0ZWRHb2xkR3JhbS50b0ZpeGVkKDIpfSBnclxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEFjdGlvbiBidXR0b25zICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dUcmFuc2FjdGlvbk1vZGFsKHRydWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yLjUgcm91bmRlZC14bCBiZy1hbWJlci01MDAgaG92ZXI6YmctYW1iZXItNDAwIHRleHQtYmxhY2sgdGV4dC14cyBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSBzaGFkb3ctbWQgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGx1cyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+xLDFn2xlbSAvIFRhaHNpbGF0IC8gRW1hbmV0PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogVHJhbnNhY3Rpb24gSGlzdG9yeSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwdC0zIGJvcmRlci10IGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1uZXV0cmFsLTMwMCBtYi0yXCI+SGVzYXAgRWtzdHJlc2kgJiBHZcOnbWnFnyDEsMWfbGVtbGVyPC9oNT5cbiAgICAgICAgICAgICAge3NlbGVjdGVkQ3VzdG9tZXIudHJhbnNhY3Rpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgdGV4dC1jZW50ZXIgcHktNFwiPkhlbsO8eiBpxZ9sZW0ga2F5ZMSxIHlvay48L3A+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgbWF4LWgtNDggb3ZlcmZsb3cteS1hdXRvIG5vLXNjcm9sbGJhclwiPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ3VzdG9tZXIudHJhbnNhY3Rpb25zLm1hcCh0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIuNSBiZy1ibGFjay80MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItd2hpdGUvNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57dC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1uZXV0cmFsLTQwMFwiPnt0LmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QuYW1vdW50VEwgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTMwMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDigrp7dC5hbW91bnRUTC50b0xvY2FsZVN0cmluZygndHItVFInKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3QuYW1vdW50R29sZEdyYW0gPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QuYW1vdW50R29sZEdyYW19IGdyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBBZGQgVHJhbnNhY3Rpb24gTW9kYWwgKi99XG4gICAgICB7c2hvd1RyYW5zYWN0aW9uTW9kYWwgJiYgc2VsZWN0ZWRDdXN0b21lciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzc1IGJhY2tkcm9wLWJsdXItc20gcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gcm91bmRlZC0zeGwgYmctWyMxNjE3MjNdIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIHAtNSBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0zIGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZVwiPsSwxZ9sZW0gRWtsZToge3NlbGVjdGVkQ3VzdG9tZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1RyYW5zYWN0aW9uTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLWZ1bGwgYmctd2hpdGUvMTAgdGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2F2ZVRyYW5zYWN0aW9ufSBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktMyB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbmV1dHJhbC0zMDAgbWItMVwiPsSwxZ9sZW0gVMO8csO8PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dHhUeXBlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VHhUeXBlKGUudGFyZ2V0LnZhbHVlIGFzIEN1c3RvbWVyVHJhbnNhY3Rpb25bJ3R5cGUnXSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGF5bWVudF9jYXNoXCI+TmFraXQgVGFoc2lsYXQgKFRMIEJvcsOnIMOWZGVtZXNpKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBheW1lbnRfZ29sZFwiPkFsdMSxbiBUYWhzaWxhdCAoQWx0xLFuIEJvcsOnIMOWZGVtZXNpKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVtYW5ldF9kZXBvc2l0XCI+S2FzYSBFbWFuZXQgVGVzbGltIEFsIChBbHTEsW4pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW1hbmV0X3dpdGhkcmF3XCI+RW1hbmV0IEFsdMSxbiDEsGFkZSBFdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNhbGVcIj5WZXJlc2l5ZSBCb3LDpyBLYXlkZXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBtYi0xXCI+QcOnxLFrbGFtYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIsOWcm46IEVsZGVuIG5ha2l0IGFsxLFuZMSxIC8gMiBidXJtYSB0ZXNsaW0gZWRpbGRpXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0eERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VHhEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgeyh0eFR5cGUgPT09ICdwYXltZW50X2Nhc2gnIHx8IHR4VHlwZSA9PT0gJ3NhbGUnKSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW5ldXRyYWwtMzAwIG1iLTFcIj5UdXRhciAoVEwpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHhBbW91bnRUTH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VHhBbW91bnRUTChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgZm9udC1tb25vXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgeyh0eFR5cGUgPT09ICdwYXltZW50X2dvbGQnIHx8IHR4VHlwZSA9PT0gJ2VtYW5ldF9kZXBvc2l0JyB8fCB0eFR5cGUgPT09ICdlbWFuZXRfd2l0aGRyYXcnIHx8IHR4VHlwZSA9PT0gJ3NhbGUnKSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW5ldXRyYWwtMzAwIG1iLTFcIj5BbHTEsW4gQcSfxLFybMSxxJ/EsSAoR3JhbSk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0eEFtb3VudEdvbGR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFR4QW1vdW50R29sZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgZm9udC1tb25vXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dUcmFuc2FjdGlvbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yLjUgcm91bmRlZC14bCBiZy13aGl0ZS8xMCB0ZXh0LW5ldXRyYWwtMzAwIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDEsHB0YWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yLjUgcm91bmRlZC14bCBiZy1hbWJlci01MDAgaG92ZXI6YmctYW1iZXItNDAwIHRleHQtYmxhY2sgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBLYXlkZXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIE5ldyBDdXN0b21lciBNb2RhbCAqL31cbiAgICAgIHtzaG93QWRkQ3VzdG9tZXJNb2RhbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzc1IGJhY2tkcm9wLWJsdXItc20gcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gcm91bmRlZC0zeGwgYmctWyMxNjE3MjNdIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIHAtNSBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0zIGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxVc2VyUGx1cyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ZZW5pIE3DvMWfdGVyaSBLYXlkxLE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkQ3VzdG9tZXJNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIHJvdW5kZWQtZnVsbCBiZy13aGl0ZS8xMCB0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDcmVhdGVDdXN0b21lcn0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTMgdGV4dC14c1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW5ldXRyYWwtMzAwIG1iLTFcIj5BZCBTb3lhZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk3DvMWfdGVyaSBBZMSxIFNveWFkxLFcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0N1c3ROYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3Q3VzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMi41IHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBtYi0xXCI+VGVsZWZvbiBOdW1hcmFzxLE8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjA1WFggWFhYIFhYIFhYXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDdXN0UGhvbmV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROZXdDdXN0UGhvbmUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBtYi0xXCI+QWRyZXMgLyBOb3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYWhhbGxlLCBjYWRkZSB2ZXlhIMO2emVsIG5vdFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q3VzdEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROZXdDdXN0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZEN1c3RvbWVyTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIuNSByb3VuZGVkLXhsIGJnLXdoaXRlLzEwIHRleHQtbmV1dHJhbC0zMDAgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIMSwcHRhbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIuNSByb3VuZGVkLXhsIGJnLWFtYmVyLTUwMCBob3ZlcjpiZy1hbWJlci00MDAgdGV4dC1ibGFjayBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE3DvMWfdGVyaSBFa2xlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBOZXcgU2FsZSBNb2RhbCBTaGVldCAqL31cbiAgICAgIHtzaG93TmV3U2FsZU1vZGFsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1lbmQgc206aXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzc1IGJhY2tkcm9wLWJsdXItc20gcC0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgcm91bmRlZC0zeGwgYmctWyMxNTE2MjJdIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIHAtNSBzaGFkb3ctMnhsIGFuaW1hdGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20gZHVyYXRpb24tMzAwIG1heC1oLVs5MHZoXSBvdmVyZmxvdy15LWF1dG8gbm8tc2Nyb2xsYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0zIGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPFNwYXJrbGVzIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkjEsXpsxLEgU2F0xLHFnyBZYXAgJiBGacWfIEtlczwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXdTYWxlTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLWZ1bGwgYmctd2hpdGUvMTAgdGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRXhlY3V0ZVNhbGV9IGNsYXNzTmFtZT1cIm10LTQgc3BhY2UteS0zLjUgdGV4dC14c1wiPlxuICAgICAgICAgICAgICB7LyogUHJvZHVjdCBzZWxlY3RvciAqL31cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBmb250LW1lZGl1bSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBTYXTEsWxhY2FrIMOccsO8blxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkUHJvZHVjdElkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VsZWN0ZWRQcm9kdWN0SWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMi41IHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPsOccsO8biBTZcOnaW5pei4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAge2ludmVudG9yeS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0gZGlzYWJsZWQ9e2l0ZW0ucXVhbnRpdHkgPD0gMH0+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0gKHtpdGVtLndlaWdodEdyYW19IGdyIC0ge2l0ZW0ua2FyYXR9KSBbU3Rvazoge2l0ZW0ucXVhbnRpdHl9XVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogUXVhbnRpdHkgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBmb250LW1lZGl1bSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIEFkZXRcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2FsZVF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTYWxlUXVhbnRpdHkoTWF0aC5tYXgoMSwgcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDEpKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSBmb250LW1vbm9cIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBmb250LW1lZGl1bSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIMSwbmRpcmltICjigropXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2FsZURpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTYWxlRGlzY291bnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXJvc2UtMzAwIGZvbnQtbW9ub1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogQ3VzdG9tZXIgTGluayAoT3B0aW9uYWwpICovfVxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW5ldXRyYWwtMzAwIGZvbnQtbWVkaXVtIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIEthecSxdGzEsSBNw7zFn3RlcmkgKE9wc2l5b25lbClcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzYWxlQ3VzdG9tZXJJZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNhbGVDdXN0b21lcklkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5QZXJha2VuZGUgLyDEsHNpbXNpeiBNw7zFn3Rlcmk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtjdXN0b21lcnMubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Yy5pZH0gdmFsdWU9e2MuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjLm5hbWV9ICh7Yy5waG9uZX0pXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBQYXltZW50IE1ldGhvZCAqL31cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTMwMCBmb250LW1lZGl1bSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICDDlmRlbWUgxZ5la2xpXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNhbGVQYXltZW50TWV0aG9kKCdjYXNoJyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTIgcm91bmRlZC14bCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYm9yZGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2FsZVBheW1lbnRNZXRob2QgPT09ICdjYXNoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctYW1iZXItNTAwIHRleHQtYmxhY2sgYm9yZGVyLWFtYmVyLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWJsYWNrLzQwIHRleHQtbmV1dHJhbC0zMDAgYm9yZGVyLXdoaXRlLzEwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTmFraXQgVExcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2FsZVBheW1lbnRNZXRob2QoJ2NhcmQnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzYWxlUGF5bWVudE1ldGhvZCA9PT0gJ2NhcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci01MDAgdGV4dC1ibGFjayBib3JkZXItYW1iZXItNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctYmxhY2svNDAgdGV4dC1uZXV0cmFsLTMwMCBib3JkZXItd2hpdGUvMTAnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBLcmVkaSBLYXJ0xLFcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2FsZVBheW1lbnRNZXRob2QoJ2dvbGRfZXhjaGFuZ2UnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzYWxlUGF5bWVudE1ldGhvZCA9PT0gJ2dvbGRfZXhjaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci01MDAgdGV4dC1ibGFjayBib3JkZXItYW1iZXItNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctYmxhY2svNDAgdGV4dC1uZXV0cmFsLTMwMCBib3JkZXItd2hpdGUvMTAnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBIdXJkYSAvIFRha2FzXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNhbGVQYXltZW50TWV0aG9kKCdjcmVkaXQnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzYWxlUGF5bWVudE1ldGhvZCA9PT0gJ2NyZWRpdCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWFtYmVyLTUwMCB0ZXh0LWJsYWNrIGJvcmRlci1hbWJlci01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1ibGFjay80MCB0ZXh0LW5ldXRyYWwtMzAwIGJvcmRlci13aGl0ZS8xMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFZlcmVzaXllIChDYXJpeWUgWWF6KVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmV3U2FsZU1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yLjUgcm91bmRlZC14bCBiZy13aGl0ZS8xMCB0ZXh0LW5ldXRyYWwtMzAwIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBWYXpnZcOnXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMi41IHJvdW5kZWQteGwgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHNoYWRvdy1sZyBzaGFkb3ctYW1iZXItNTAwLzIwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TYXTEscWfxLEgVGFtYW1sYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIFNhbGUgUmVjZWlwdCBpT1MgTW9kYWwgKi99XG4gICAgICB7YWN0aXZlUmVjZWlwdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzgwIGJhY2tkcm9wLWJsdXItbWQgcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gcm91bmRlZC0zeGwgYmctbmV1dHJhbC05MDAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvNDAgcC02IHNoYWRvdy0yeGwgcmVsYXRpdmUgdGV4dC14cyB0ZXh0LW5ldXRyYWwtMjAwIGFuaW1hdGUtaW4gem9vbS1pbi05NSBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlUmVjZWlwdChudWxsKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCBwLTEuNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUvMTAgdGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgey8qIFJlY2VpcHQgSGVhZGVyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwYi00IGJvcmRlci1iIGJvcmRlci1kYXNoZWQgYm9yZGVyLXdoaXRlLzIwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1iYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtYW1iZXItNDAwIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgIHtzZXR0aW5ncy5zdG9yZU5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtbmV1dHJhbC00MDAgbXQtMC41XCI+e3NldHRpbmdzLmFkZHJlc3N9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1uZXV0cmFsLTUwMFwiPlRlbDoge3NldHRpbmdzLnBob25lfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtdC0yIHB4LTIuNSBweS0wLjUgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzUgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBmb250LW1vbm8gdGV4dC1bMTBweF0gdGV4dC1uZXV0cmFsLTMwMFwiPlxuICAgICAgICAgICAgICAgIEZpxZ8gTm86ICN7YWN0aXZlUmVjZWlwdC5yZWNlaXB0TnVtYmVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUmVjZWlwdCBNZXRhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yLjUgYm9yZGVyLWIgYm9yZGVyLWRhc2hlZCBib3JkZXItd2hpdGUvMjAgc3BhY2UteS0xIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNDAwXCI+VGFyaWg6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnthY3RpdmVSZWNlaXB0LmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDBcIj5Nw7zFn3Rlcmk6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPnthY3RpdmVSZWNlaXB0LmN1c3RvbWVyTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBJdGVtcyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMyBib3JkZXItYiBib3JkZXItZGFzaGVkIGJvcmRlci13aGl0ZS8yMCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAge2FjdGl2ZVJlY2VpcHQuaXRlbXMubWFwKChpdCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bMTFweF1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2l0LnByb2R1Y3ROYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDAgdGV4dC1bMTBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXQucXVhbnRpdHl9IGFkZXQg4oCiIHtpdC53ZWlnaHRHcmFtfSBnciDigKIge2l0LmthcmF0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtYW1iZXItMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIOKCuntpdC50b3RhbFByaWNlLnRvTG9jYWxlU3RyaW5nKCd0ci1UUicpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBUb3RhbHMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgc3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LW5ldXRyYWwtNDAwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+QXJhIFRvcGxhbTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vXCI+4oK6e2FjdGl2ZVJlY2VpcHQuc3VidG90YWxUTC50b0xvY2FsZVN0cmluZygndHItVFInKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7YWN0aXZlUmVjZWlwdC5kaXNjb3VudFRMID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXJvc2UtNDAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7EsHNrb250bzo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm9cIj4t4oK6e2FjdGl2ZVJlY2VpcHQuZGlzY291bnRUTC50b0xvY2FsZVN0cmluZygndHItVFInKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIHB0LTFcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5HZW5lbCBUb3BsYW06PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LWFtYmVyLTQwMCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgIOKCunthY3RpdmVSZWNlaXB0LmdyYW5kVG90YWxUTC50b0xvY2FsZVN0cmluZygndHItVFInKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBBY3Rpb24gYnV0dG9ucyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBwdC0zIGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb3B5UmVjZWlwdFRleHQoYWN0aXZlUmVjZWlwdCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIgcm91bmRlZC14bCBiZy13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8xNSB0ZXh0LW5ldXRyYWwtMjAwIHRleHQteHMgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Lb3B5YWxhPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5wcmludCgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIHJvdW5kZWQteGwgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHRleHQteHMgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFByaW50ZXIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPllhemTEsXI8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQXNQVTtBQXRQVixTQUFnQixnQkFBZ0I7QUFDaEM7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFHQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBQ1AsT0FBTyxjQUFjO0FBY2QsYUFBTSxnQkFBOEMsQ0FBQztBQUFBLEVBQzFEO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFB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