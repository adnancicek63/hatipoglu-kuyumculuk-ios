import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import { Wifi, Battery, Sparkles, ShieldCheck } from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
export const IOSStatusBar = ({
  hasGoldRate,
  totalHasGold,
  storeName
}) => {
  const [timeStr, setTimeStr] = useState("");
  const [islandExpanded, setIslandExpanded] = useState(false);
  useEffect(() => {
    const updateTime = () => {
      const now = /* @__PURE__ */ new Date();
      setTimeStr(
        now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1e4);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-40 w-full bg-[#0b0c10]/90 backdrop-blur-xl border-b border-amber-500/15 pt-[var(--sat,0px)] transition-all", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between px-5 pt-2 pb-1.5 text-xs text-neutral-300 font-medium", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 font-semibold tracking-tight text-[13px] text-white", children: /* @__PURE__ */ jsxDEV("span", { children: timeStr || "09:41" }, void 0, false, {
        fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setIslandExpanded(!islandExpanded),
          className: `flex items-center gap-2 px-3 py-1 bg-black/90 text-white rounded-full border border-amber-400/30 shadow-lg shadow-black/40 transition-all duration-300 cursor-pointer ${islandExpanded ? "scale-105 ring-2 ring-amber-500/40" : "hover:border-amber-400/60"}`,
          title: "Dynamic Island Bilgi Paneli",
          children: [
            /* @__PURE__ */ jsxDEV("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }, void 0, false, {
                fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
                lineNumber: 48,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" }, void 0, false, {
                fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
                lineNumber: 49,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] font-medium tracking-tight text-amber-300 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3 h-3 text-amber-400" }, void 0, false, {
                fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
                lineNumber: 52,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                "Has: ₺",
                hasGoldRate.toLocaleString("tr-TR", { minimumFractionDigits: 1 })
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
                lineNumber: 53,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-neutral-300", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-bold tracking-wider text-amber-400/90", children: "5G" }, void 0, false, {
          fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Wifi, { className: "w-3.5 h-3.5 text-neutral-300" }, void 0, false, {
          fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-medium", children: "98%" }, void 0, false, {
            fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Battery, { className: "w-4 h-4 text-emerald-400 fill-emerald-400/30" }, void 0, false, {
            fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
            lineNumber: 63,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    islandExpanded && /* @__PURE__ */ jsxDEV("div", { className: "mx-4 mb-2 p-3 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 rounded-2xl border border-amber-500/30 shadow-2xl text-xs text-neutral-200 animate-in fade-in slide-in-from-top-2 duration-200", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pb-2 border-b border-white/10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-amber-400 font-semibold", children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: storeName }, void 0, false, {
            fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
            lineNumber: 74,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30", children: "Kapalıçarşı Canlı Veri" }, void 0, false, {
          fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2 pt-2 text-[11px]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-2 rounded-xl border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-neutral-400 text-[10px]", children: "Has Gram Satış" }, void 0, false, {
            fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "font-bold text-amber-300 text-sm", children: [
            "₺",
            hasGoldRate.toLocaleString("tr-TR", { minimumFractionDigits: 2 })
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-2 rounded-xl border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-neutral-400 text-[10px]", children: "Kasada Toplam Has" }, void 0, false, {
            fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "font-bold text-white text-sm", children: [
            totalHasGold.toFixed(2),
            " gr"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/ios/IOSStatusBar.tsx?raw=1789374318218",
    lineNumber: 31,
    columnNumber: 5
  }, this);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklPU1N0YXR1c0Jhci50c3g/cmF3PTE3ODkzNzQzMTgyMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXaWZpLCBCYXR0ZXJ5LCBTcGFya2xlcywgU2hpZWxkQ2hlY2sgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgSU9TU3RhdHVzQmFyUHJvcHMge1xuICBoYXNHb2xkUmF0ZTogbnVtYmVyO1xuICB0b3RhbEhhc0dvbGQ6IG51bWJlcjtcbiAgc3RvcmVOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBJT1NTdGF0dXNCYXI6IFJlYWN0LkZDPElPU1N0YXR1c0JhclByb3BzPiA9ICh7XG4gIGhhc0dvbGRSYXRlLFxuICB0b3RhbEhhc0dvbGQsXG4gIHN0b3JlTmFtZSxcbn0pID0+IHtcbiAgY29uc3QgW3RpbWVTdHIsIHNldFRpbWVTdHJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNsYW5kRXhwYW5kZWQsIHNldElzbGFuZEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgc2V0VGltZVN0cihcbiAgICAgICAgbm93LnRvTG9jYWxlVGltZVN0cmluZygndHItVFInLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSlcbiAgICAgICk7XG4gICAgfTtcbiAgICB1cGRhdGVUaW1lKCk7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lLCAxMDAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTQwIHctZnVsbCBiZy1bIzBiMGMxMF0vOTAgYmFja2Ryb3AtYmx1ci14bCBib3JkZXItYiBib3JkZXItYW1iZXItNTAwLzE1IHB0LVt2YXIoLS1zYXQsMHB4KV0gdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgIHsvKiBpT1MgVG9wIEJhciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTUgcHQtMiBwYi0xLjUgdGV4dC14cyB0ZXh0LW5ldXRyYWwtMzAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIHsvKiBUaW1lICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1bMTNweF0gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxzcGFuPnt0aW1lU3RyIHx8ICcwOTo0MSd9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSW50ZXJhY3RpdmUgRHluYW1pYyBJc2xhbmQgKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc2xhbmRFeHBhbmRlZCghaXNsYW5kRXhwYW5kZWQpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTMgcHktMSBiZy1ibGFjay85MCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWFtYmVyLTQwMC8zMCBzaGFkb3ctbGcgc2hhZG93LWJsYWNrLzQwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgaXNsYW5kRXhwYW5kZWQgPyAnc2NhbGUtMTA1IHJpbmctMiByaW5nLWFtYmVyLTUwMC80MCcgOiAnaG92ZXI6Ym9yZGVyLWFtYmVyLTQwMC82MCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgICB0aXRsZT1cIkR5bmFtaWMgSXNsYW5kIEJpbGdpIFBhbmVsaVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGgtMiB3LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtcGluZyBhYnNvbHV0ZSBpbmxpbmUtZmxleCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTQwMCBvcGFjaXR5LTc1XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIGgtMiB3LTIgYmctZW1lcmFsZC01MDBcIj48L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbWVkaXVtIHRyYWNraW5nLXRpZ2h0IHRleHQtYW1iZXItMzAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy0zIGgtMyB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5IYXM6IOKCuntoYXNHb2xkUmF0ZS50b0xvY2FsZVN0cmluZygndHItVFInLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMSB9KX08L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7LyogU3RhdHVzIGljb25zICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdGV4dC1uZXV0cmFsLTMwMFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB0ZXh0LWFtYmVyLTQwMC85MFwiPjVHPC9zcGFuPlxuICAgICAgICAgIDxXaWZpIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtbmV1dHJhbC0zMDBcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTAuNVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1tZWRpdW1cIj45OCU8L3NwYW4+XG4gICAgICAgICAgICA8QmF0dGVyeSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZW1lcmFsZC00MDAgZmlsbC1lbWVyYWxkLTQwMC8zMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBEeW5hbWljIElzbGFuZCBFeHBhbmRlZCBQYW5lbCBEcm9wZG93biAqL31cbiAgICAgIHtpc2xhbmRFeHBhbmRlZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtYi0yIHAtMyBiZy1ncmFkaWVudC10by1yIGZyb20tbmV1dHJhbC05MDAgdmlhLWJsYWNrIHRvLW5ldXRyYWwtOTAwIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIHNoYWRvdy0yeGwgdGV4dC14cyB0ZXh0LW5ldXRyYWwtMjAwIGFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLXRvcC0yIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBiLTIgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdGV4dC1hbWJlci00MDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPntzdG9yZU5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBiZy1lbWVyYWxkLTUwMC8yMCB0ZXh0LWVtZXJhbGQtMzAwIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzMwXCI+XG4gICAgICAgICAgICAgIEthcGFsxLHDp2FyxZ/EsSBDYW5sxLEgVmVyaVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMiBwdC0yIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLzUgcC0yIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTQwMCB0ZXh0LVsxMHB4XVwiPkhhcyBHcmFtIFNhdMSxxZ88L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1hbWJlci0zMDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIOKCuntoYXNHb2xkUmF0ZS50b0xvY2FsZVN0cmluZygndHItVFInLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvNSBwLTIgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNDAwIHRleHQtWzEwcHhdXCI+S2FzYWRhIFRvcGxhbSBIYXM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAge3RvdGFsSGFzR29sZC50b0ZpeGVkKDIpfSBnclxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFtQ1U7QUFuQ1YsU0FBZ0IsVUFBVSxpQkFBaUI7QUFDM0MsU0FBUyxNQUFNLFNBQVMsVUFBVSxtQkFBbUI7QUFROUMsYUFBTSxlQUE0QyxDQUFDO0FBQUEsRUFDeEQ7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLE1BQU07QUFDSixRQUFNLENBQUMsU0FBUyxVQUFVLElBQUksU0FBUyxFQUFFO0FBQ3pDLFFBQU0sQ0FBQyxnQkFBZ0IsaUJBQWlCLElBQUksU0FBUyxLQUFLO0FBRTFELFlBQVUsTUFBTTtBQUNkLFVBQU0sYUFBYSxNQUFNO0FBQ3ZCLFlBQU0sTUFBTSxvQkFBSSxLQUFLO0FBQ3JCO0FBQUEsUUFDRSxJQUFJLG1CQUFtQixTQUFTLEVBQUUsTUFBTSxXQUFXLFFBQVEsVUFBVSxDQUFDO0FBQUEsTUFDeEU7QUFBQSxJQUNGO0FBQ0EsZUFBVztBQUNYLFVBQU0sUUFBUSxZQUFZLFlBQVksR0FBSztBQUMzQyxXQUFPLE1BQU0sY0FBYyxLQUFLO0FBQUEsRUFDbEMsR0FBRyxDQUFDLENBQUM7QUFFTCxTQUNFLHVCQUFDLFlBQU8sV0FBVSw2SEFFaEI7QUFBQSwyQkFBQyxTQUFJLFdBQVUsMkZBRWI7QUFBQSw2QkFBQyxTQUFJLFdBQVUsK0VBQ2IsaUNBQUMsVUFBTSxxQkFBVyxXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTBCLEtBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BR0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQyxjQUFjO0FBQUEsVUFDaEQsV0FBVyx5S0FDVCxpQkFBaUIsdUNBQXVDLDJCQUMxRDtBQUFBLFVBQ0EsT0FBTTtBQUFBLFVBRU47QUFBQSxt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