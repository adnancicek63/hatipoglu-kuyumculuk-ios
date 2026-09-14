import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"];
import { useJewelStore } from "/src/hooks/useJewelStore.ts";
import { IOSStatusBar } from "/src/components/ios/IOSStatusBar.tsx";
import { IOSTabBar } from "/src/components/ios/IOSTabBar.tsx";
import { RatesView } from "/src/components/rates/RatesView.tsx";
import { InventoryView } from "/src/components/inventory/InventoryView.tsx";
import { JewelCalculatorView } from "/src/components/calculator/JewelCalculatorView.tsx";
import { CustomersView } from "/src/components/customers/CustomersView.tsx";
import { GithubExportView } from "/src/components/github/GithubExportView.tsx";
import { GithubCodemagicModal } from "/src/components/github/GithubCodemagicModal.tsx";
import { PWAInstallBanner } from "/src/components/common/PWAInstallBanner.tsx";
import { Smartphone, Monitor, Github } from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
export default function App() {
  const [activeTab, setActiveTab] = useState("rates");
  const [phoneFrameMode, setPhoneFrameMode] = useState(false);
  const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);
  const {
    rates,
    inventory,
    customers,
    settings,
    receipts,
    hasGoldRate,
    totalHasGoldWeight,
    totalGrossWeight,
    totalStockValueTL,
    updateRate,
    simulateMarketTick,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem,
    adjustStockQuantity,
    addCustomer,
    addCustomerTransaction,
    completeSale,
    setSettings,
    exportDataAsJSON,
    importDataFromJSON,
    resetToDefaults
  } = useJewelStore();
  const lowStockCount = inventory.filter((i) => i.quantity <= i.minStockAlert).length;
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#07080b] text-[#f3f4f6] flex flex-col items-center justify-start selection:bg-amber-500 selection:text-black", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center justify-between w-full max-w-4xl px-4 py-2 text-xs text-neutral-400 border-b border-white/5", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx?raw=1789374737828",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-neutral-300", children: "Hatipoğlu Gold • iOS Kuyumcu Sistemi" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx?raw=1789374737828",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx?raw=1789374737828",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setIsGithubModalOpen(true),
            className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold cursor-pointer transition active:scale-95",
            title: "GitHub & Codemagic iOS Dağıtımını Aç",
            children: [
              /* @__PURE__ */ jsxDEV(Github, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 61,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "GitHub & Codemagic Dağıtımı" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 62,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] px-1.5 py-0.2 bg-amber-400 text-black font-extrabold rounded", children: "CI/CD" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 63,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/App.tsx?raw=1789374737828",
            lineNumber: 56,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setPhoneFrameMode(!phoneFrameMode),
            className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 transition cursor-pointer",
            title: "iPhone Çerçevesi Görünümünü Aç/Kapa",
            children: phoneFrameMode ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Monitor, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 73,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Geniş Görünüm" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 74,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx?raw=1789374737828",
              lineNumber: 72,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Smartphone, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 78,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "iPhone Çerçevesi" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 79,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx?raw=1789374737828",
              lineNumber: 77,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/App.tsx?raw=1789374737828",
            lineNumber: 66,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx?raw=1789374737828",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx?raw=1789374737828",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: `w-full flex-1 flex flex-col relative transition-all duration-300 ${phoneFrameMode ? "max-w-[420px] my-6 rounded-[52px] border-[10px] border-[#22242f] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden bg-[#0a0b10] min-h-[840px] max-h-[92vh]" : "max-w-md md:max-w-xl lg:max-w-2xl bg-[#0a0b10]"}`,
        children: [
          /* @__PURE__ */ jsxDEV(
            IOSStatusBar,
            {
              hasGoldRate,
              totalHasGold: totalHasGoldWeight,
              storeName: settings.storeName
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/App.tsx?raw=1789374737828",
              lineNumber: 95,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(PWAInstallBanner, {}, void 0, false, {
            fileName: "/app/applet/src/App.tsx?raw=1789374737828",
            lineNumber: 102,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("main", { className: "flex-1 px-4 pt-3 pb-24 overflow-y-auto no-scrollbar", children: [
            activeTab === "rates" && /* @__PURE__ */ jsxDEV(
              RatesView,
              {
                rates,
                totalHasGoldWeight,
                totalGrossWeight,
                totalStockValueTL,
                onUpdateRate: updateRate,
                onRefreshRates: simulateMarketTick
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 107,
                columnNumber: 13
              },
              this
            ),
            activeTab === "inventory" && /* @__PURE__ */ jsxDEV(
              InventoryView,
              {
                inventory,
                rates,
                onAddItem: addInventoryItem,
                onUpdateItem: updateInventoryItem,
                onDeleteItem: deleteInventoryItem,
                onAdjustQuantity: adjustStockQuantity
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 118,
                columnNumber: 13
              },
              this
            ),
            activeTab === "calc" && /* @__PURE__ */ jsxDEV(JewelCalculatorView, { rates }, void 0, false, {
              fileName: "/app/applet/src/App.tsx?raw=1789374737828",
              lineNumber: 129,
              columnNumber: 13
            }, this),
            activeTab === "customers" && /* @__PURE__ */ jsxDEV(
              CustomersView,
              {
                customers,
                inventory,
                rates,
                settings,
                receipts,
                onAddCustomer: addCustomer,
                onAddTransaction: addCustomerTransaction,
                onCompleteSale: completeSale
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 133,
                columnNumber: 13
              },
              this
            ),
            activeTab === "github" && /* @__PURE__ */ jsxDEV(
              GithubExportView,
              {
                settings,
                onUpdateSettings: setSettings,
                onExportJSON: exportDataAsJSON,
                onImportJSON: importDataFromJSON,
                onResetData: resetToDefaults,
                onOpenModal: () => setIsGithubModalOpen(true)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/App.tsx?raw=1789374737828",
                lineNumber: 146,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx?raw=1789374737828",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            IOSTabBar,
            {
              activeTab,
              onTabChange: setActiveTab,
              inventoryAlertCount: lowStockCount
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/App.tsx?raw=1789374737828",
              lineNumber: 158,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            GithubCodemagicModal,
            {
              isOpen: isGithubModalOpen,
              onClose: () => setIsGithubModalOpen(false)
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/App.tsx?raw=1789374737828",
              lineNumber: 165,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/App.tsx?raw=1789374737828",
        lineNumber: 87,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/App.tsx?raw=1789374737828",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50c3g/cmF3PTE3ODkzNzQ3Mzc4MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSmV3ZWxTdG9yZSB9IGZyb20gJy4vaG9va3MvdXNlSmV3ZWxTdG9yZSc7XG5pbXBvcnQgeyBJT1NTdGF0dXNCYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvaW9zL0lPU1N0YXR1c0Jhcic7XG5pbXBvcnQgeyBJT1NUYWJCYXIsIFRhYlR5cGUgfSBmcm9tICcuL2NvbXBvbmVudHMvaW9zL0lPU1RhYkJhcic7XG5pbXBvcnQgeyBSYXRlc1ZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvcmF0ZXMvUmF0ZXNWaWV3JztcbmltcG9ydCB7IEludmVudG9yeVZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvaW52ZW50b3J5L0ludmVudG9yeVZpZXcnO1xuaW1wb3J0IHsgSmV3ZWxDYWxjdWxhdG9yVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxjdWxhdG9yL0pld2VsQ2FsY3VsYXRvclZpZXcnO1xuaW1wb3J0IHsgQ3VzdG9tZXJzVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lcnMvQ3VzdG9tZXJzVmlldyc7XG5pbXBvcnQgeyBHaXRodWJFeHBvcnRWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL2dpdGh1Yi9HaXRodWJFeHBvcnRWaWV3JztcbmltcG9ydCB7IEdpdGh1YkNvZGVtYWdpY01vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL2dpdGh1Yi9HaXRodWJDb2RlbWFnaWNNb2RhbCc7XG5pbXBvcnQgeyBQV0FJbnN0YWxsQmFubmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9QV0FJbnN0YWxsQmFubmVyJztcbmltcG9ydCB7IFNtYXJ0cGhvbmUsIE1vbml0b3IsIEdpdGh1YiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPFRhYlR5cGU+KCdyYXRlcycpO1xuICBjb25zdCBbcGhvbmVGcmFtZU1vZGUsIHNldFBob25lRnJhbWVNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzR2l0aHViTW9kYWxPcGVuLCBzZXRJc0dpdGh1Yk1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qge1xuICAgIHJhdGVzLFxuICAgIGludmVudG9yeSxcbiAgICBjdXN0b21lcnMsXG4gICAgc2V0dGluZ3MsXG4gICAgcmVjZWlwdHMsXG4gICAgaGFzR29sZFJhdGUsXG4gICAgdG90YWxIYXNHb2xkV2VpZ2h0LFxuICAgIHRvdGFsR3Jvc3NXZWlnaHQsXG4gICAgdG90YWxTdG9ja1ZhbHVlVEwsXG4gICAgdXBkYXRlUmF0ZSxcbiAgICBzaW11bGF0ZU1hcmtldFRpY2ssXG4gICAgYWRkSW52ZW50b3J5SXRlbSxcbiAgICB1cGRhdGVJbnZlbnRvcnlJdGVtLFxuICAgIGRlbGV0ZUludmVudG9yeUl0ZW0sXG4gICAgYWRqdXN0U3RvY2tRdWFudGl0eSxcbiAgICBhZGRDdXN0b21lcixcbiAgICBhZGRDdXN0b21lclRyYW5zYWN0aW9uLFxuICAgIGNvbXBsZXRlU2FsZSxcbiAgICBzZXRTZXR0aW5ncyxcbiAgICBleHBvcnREYXRhQXNKU09OLFxuICAgIGltcG9ydERhdGFGcm9tSlNPTixcbiAgICByZXNldFRvRGVmYXVsdHMsXG4gIH0gPSB1c2VKZXdlbFN0b3JlKCk7XG5cbiAgLy8gTG93IHN0b2NrIGNvdW50ZXIgZm9yIHRhYiBiYWRnZVxuICBjb25zdCBsb3dTdG9ja0NvdW50ID0gaW52ZW50b3J5LmZpbHRlcihpID0+IGkucXVhbnRpdHkgPD0gaS5taW5TdG9ja0FsZXJ0KS5sZW5ndGg7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1bIzA3MDgwYl0gdGV4dC1bI2YzZjRmNl0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBzZWxlY3Rpb246YmctYW1iZXItNTAwIHNlbGVjdGlvbjp0ZXh0LWJsYWNrXCI+XG4gICAgICB7LyogRGVza3RvcCB2aWV3IHN3aXRjaGVyIGJhciAoT25seSB2aXNpYmxlIG9uIG1lZGl1bSsgc2NyZWVucykgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG1heC13LTR4bCBweC00IHB5LTIgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNDAwIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1hbWJlci00MDAgYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtMzAwXCI+SGF0aXBvxJ9sdSBHb2xkIOKAoiBpT1MgS3V5dW1jdSBTaXN0ZW1pPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzR2l0aHViTW9kYWxPcGVuKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEgcm91bmRlZC1mdWxsIGJnLWFtYmVyLTUwMC8yMCBob3ZlcjpiZy1hbWJlci01MDAvMzAgdGV4dC1hbWJlci0zMDAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvNDAgdGV4dC14cyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gYWN0aXZlOnNjYWxlLTk1XCJcbiAgICAgICAgICAgIHRpdGxlPVwiR2l0SHViICYgQ29kZW1hZ2ljIGlPUyBEYcSfxLF0xLFtxLFuxLEgQcOnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkdpdEh1YiAmIENvZGVtYWdpYyBEYcSfxLF0xLFtxLE8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHB4LTEuNSBweS0wLjIgYmctYW1iZXItNDAwIHRleHQtYmxhY2sgZm9udC1leHRyYWJvbGQgcm91bmRlZFwiPkNJL0NEPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGhvbmVGcmFtZU1vZGUoIXBob25lRnJhbWVNb2RlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBiZy13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzEwIHRleHQtbmV1dHJhbC0zMDAgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICB0aXRsZT1cImlQaG9uZSDDh2Vyw6dldmVzaSBHw7Zyw7xuw7xtw7xuw7wgQcOnL0thcGFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwaG9uZUZyYW1lTW9kZSA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TW9uaXRvciBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+R2VuacWfIEfDtnLDvG7DvG08L3NwYW4+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8U21hcnRwaG9uZSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+aVBob25lIMOHZXLDp2V2ZXNpPC9zcGFuPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNYWluIENvbnRhaW5lcjogRnVsbCBzY3JlZW4gb24gbW9iaWxlLCBvcHRpb25hbCBpUGhvbmUgZnJhbWUgb24gZGVza3RvcCAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXgtMSBmbGV4IGZsZXgtY29sIHJlbGF0aXZlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgIHBob25lRnJhbWVNb2RlXG4gICAgICAgICAgICA/ICdtYXgtdy1bNDIwcHhdIG15LTYgcm91bmRlZC1bNTJweF0gYm9yZGVyLVsxMHB4XSBib3JkZXItWyMyMjI0MmZdIHNoYWRvdy1bMF8yNXB4XzYwcHhfLTE1cHhfcmdiYSgwLDAsMCwwLjkpXSBvdmVyZmxvdy1oaWRkZW4gYmctWyMwYTBiMTBdIG1pbi1oLVs4NDBweF0gbWF4LWgtWzkydmhdJ1xuICAgICAgICAgICAgOiAnbWF4LXctbWQgbWQ6bWF4LXcteGwgbGc6bWF4LXctMnhsIGJnLVsjMGEwYjEwXSdcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIHsvKiBpT1MgU3RhdHVzIEJhciB3aXRoIER5bmFtaWMgSXNsYW5kICovfVxuICAgICAgICA8SU9TU3RhdHVzQmFyXG4gICAgICAgICAgaGFzR29sZFJhdGU9e2hhc0dvbGRSYXRlfVxuICAgICAgICAgIHRvdGFsSGFzR29sZD17dG90YWxIYXNHb2xkV2VpZ2h0fVxuICAgICAgICAgIHN0b3JlTmFtZT17c2V0dGluZ3Muc3RvcmVOYW1lfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBQV0EgSW5zdGFsbCBCYW5uZXIgKi99XG4gICAgICAgIDxQV0FJbnN0YWxsQmFubmVyIC8+XG5cbiAgICAgICAgey8qIFNjcm9sbGFibGUgVmlldyBDb250ZW50ICovfVxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNCBwdC0zIHBiLTI0IG92ZXJmbG93LXktYXV0byBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgICB7YWN0aXZlVGFiID09PSAncmF0ZXMnICYmIChcbiAgICAgICAgICAgIDxSYXRlc1ZpZXdcbiAgICAgICAgICAgICAgcmF0ZXM9e3JhdGVzfVxuICAgICAgICAgICAgICB0b3RhbEhhc0dvbGRXZWlnaHQ9e3RvdGFsSGFzR29sZFdlaWdodH1cbiAgICAgICAgICAgICAgdG90YWxHcm9zc1dlaWdodD17dG90YWxHcm9zc1dlaWdodH1cbiAgICAgICAgICAgICAgdG90YWxTdG9ja1ZhbHVlVEw9e3RvdGFsU3RvY2tWYWx1ZVRMfVxuICAgICAgICAgICAgICBvblVwZGF0ZVJhdGU9e3VwZGF0ZVJhdGV9XG4gICAgICAgICAgICAgIG9uUmVmcmVzaFJhdGVzPXtzaW11bGF0ZU1hcmtldFRpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7YWN0aXZlVGFiID09PSAnaW52ZW50b3J5JyAmJiAoXG4gICAgICAgICAgICA8SW52ZW50b3J5Vmlld1xuICAgICAgICAgICAgICBpbnZlbnRvcnk9e2ludmVudG9yeX1cbiAgICAgICAgICAgICAgcmF0ZXM9e3JhdGVzfVxuICAgICAgICAgICAgICBvbkFkZEl0ZW09e2FkZEludmVudG9yeUl0ZW19XG4gICAgICAgICAgICAgIG9uVXBkYXRlSXRlbT17dXBkYXRlSW52ZW50b3J5SXRlbX1cbiAgICAgICAgICAgICAgb25EZWxldGVJdGVtPXtkZWxldGVJbnZlbnRvcnlJdGVtfVxuICAgICAgICAgICAgICBvbkFkanVzdFF1YW50aXR5PXthZGp1c3RTdG9ja1F1YW50aXR5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2NhbGMnICYmIChcbiAgICAgICAgICAgIDxKZXdlbENhbGN1bGF0b3JWaWV3IHJhdGVzPXtyYXRlc30gLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2N1c3RvbWVycycgJiYgKFxuICAgICAgICAgICAgPEN1c3RvbWVyc1ZpZXdcbiAgICAgICAgICAgICAgY3VzdG9tZXJzPXtjdXN0b21lcnN9XG4gICAgICAgICAgICAgIGludmVudG9yeT17aW52ZW50b3J5fVxuICAgICAgICAgICAgICByYXRlcz17cmF0ZXN9XG4gICAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgICAgcmVjZWlwdHM9e3JlY2VpcHRzfVxuICAgICAgICAgICAgICBvbkFkZEN1c3RvbWVyPXthZGRDdXN0b21lcn1cbiAgICAgICAgICAgICAgb25BZGRUcmFuc2FjdGlvbj17YWRkQ3VzdG9tZXJUcmFuc2FjdGlvbn1cbiAgICAgICAgICAgICAgb25Db21wbGV0ZVNhbGU9e2NvbXBsZXRlU2FsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdnaXRodWInICYmIChcbiAgICAgICAgICAgIDxHaXRodWJFeHBvcnRWaWV3XG4gICAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgICAgb25VcGRhdGVTZXR0aW5ncz17c2V0U2V0dGluZ3N9XG4gICAgICAgICAgICAgIG9uRXhwb3J0SlNPTj17ZXhwb3J0RGF0YUFzSlNPTn1cbiAgICAgICAgICAgICAgb25JbXBvcnRKU09OPXtpbXBvcnREYXRhRnJvbUpTT059XG4gICAgICAgICAgICAgIG9uUmVzZXREYXRhPXtyZXNldFRvRGVmYXVsdHN9XG4gICAgICAgICAgICAgIG9uT3Blbk1vZGFsPXsoKSA9PiBzZXRJc0dpdGh1Yk1vZGFsT3Blbih0cnVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIHsvKiBGaXhlZCBpT1MgVGFiIEJhciAqL31cbiAgICAgICAgPElPU1RhYkJhclxuICAgICAgICAgIGFjdGl2ZVRhYj17YWN0aXZlVGFifVxuICAgICAgICAgIG9uVGFiQ2hhbmdlPXtzZXRBY3RpdmVUYWJ9XG4gICAgICAgICAgaW52ZW50b3J5QWxlcnRDb3VudD17bG93U3RvY2tDb3VudH1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogR2l0SHViICYgQ29kZW1hZ2ljIENsb3VkIENJL0NEIE1vZGFsICovfVxuICAgICAgICA8R2l0aHViQ29kZW1hZ2ljTW9kYWxcbiAgICAgICAgICBpc09wZW49e2lzR2l0aHViTW9kYWxPcGVufVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzR2l0aHViTW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFtRFUsU0FvQkksVUFwQko7QUFuRFYsU0FBZ0IsZ0JBQWdCO0FBQ2hDLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsaUJBQTBCO0FBQ25DLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsWUFBWSxTQUFTLGNBQWM7QUFFNUMsd0JBQXdCLE1BQU07QUFDNUIsUUFBTSxDQUFDLFdBQVcsWUFBWSxJQUFJLFNBQWtCLE9BQU87QUFDM0QsUUFBTSxDQUFDLGdCQUFnQixpQkFBaUIsSUFBSSxTQUFTLEtBQUs7QUFDMUQsUUFBTSxDQUFDLG1CQUFtQixvQkFBb0IsSUFBSSxTQUFTLEtBQUs7QUFFaEUsUUFBTTtBQUFBLElBQ0o7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