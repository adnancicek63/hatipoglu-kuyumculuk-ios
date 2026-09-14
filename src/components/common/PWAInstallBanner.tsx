import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import { Share, PlusSquare, X, Smartphone } from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
export const PWAInstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
    setIsInstalled(isStandalone);
    const ua = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(ua);
    setIsIOS(isIOSDevice);
    const handleBeforePrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", handleBeforePrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforePrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
        setDeferredPrompt(null);
      }
    } else if (isIOS) {
      setShowIOSModal(true);
    } else {
      setShowIOSModal(true);
    }
  };
  if (isInstalled || dismissed) return null;
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mx-3 mt-2 p-2.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-between text-xs animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30", children: /* @__PURE__ */ jsxDEV(Smartphone, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 69,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "font-bold text-white text-[12px]", children: "iPhone / iOS Uygulaması Olarak Yükle" }, void 0, false, {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-neutral-300", children: "Ana ekrana ekleyerek tam ekran açın" }, void 0, false, {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 75,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: handleInstallClick,
            className: "px-2.5 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-[11px] font-bold shadow transition cursor-pointer active:scale-95",
            children: "Nasıl Yüklenir?"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 82,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setDismissed(true),
            className: "p-1 text-neutral-400 hover:text-white",
            title: "Kapat",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
              lineNumber: 93,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 88,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    showIOSModal && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-sm rounded-3xl bg-[#161723] border border-amber-500/40 p-6 shadow-2xl relative text-xs text-neutral-200 animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setShowIOSModal(false),
          className: "absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-neutral-400 hover:text-white cursor-pointer",
          children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 102,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center pb-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxDEV(Smartphone, { className: "w-6 h-6" }, void 0, false, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 111,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 110,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-white", children: "iPhone'a Nasıl Yüklenir?" }, void 0, false, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 113,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-400 mt-1", children: "Safari üzerinden 2 adımda ana ekranınıza ekleyip yerel iOS uygulaması gibi kullanın:" }, void 0, false, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 114,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 mt-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-black/50 rounded-2xl border border-white/10 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0", children: "1" }, void 0, false, {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "font-semibold text-white flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "Paylaş Düğmesine Dokunun" }, void 0, false, {
                fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
                lineNumber: 126,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(Share, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
                lineNumber: 127,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
              lineNumber: 125,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-400 mt-0.5", children: "Safari alt çubuğundaki kare içindeki yukarı ok (Paylaş) simgesine basın." }, void 0, false, {
              fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
              lineNumber: 129,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-black/50 rounded-2xl border border-white/10 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0", children: "2" }, void 0, false, {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "font-semibold text-white flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "Ana Ekrana Ekle" }, void 0, false, {
                fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
                lineNumber: 141,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(PlusSquare, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
                lineNumber: 142,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
              lineNumber: 140,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-400 mt-0.5", children: [
              "Açılan menüyü aşağı kaydırıp ",
              /* @__PURE__ */ jsxDEV("strong", { children: '"Ana Ekrana Ekle"' }, void 0, false, {
                fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
                lineNumber: 145,
                columnNumber: 50
              }, this),
              " seçeneğini seçin."
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
              lineNumber: 144,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
            lineNumber: 139,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 135,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setShowIOSModal(false),
          className: "mt-5 w-full py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-lg transition cursor-pointer",
          children: "Anladım"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
          lineNumber: 151,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/common/PWAInstallBanner.tsx?raw=1789374318218",
    lineNumber: 65,
    columnNumber: 5
  }, this);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBXQUluc3RhbGxCYW5uZXIudHN4P3Jhdz0xNzg5Mzc0MzE4MjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRG93bmxvYWQsIFNoYXJlLCBQbHVzU3F1YXJlLCBYLCBTbWFydHBob25lIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIEJlZm9yZUluc3RhbGxQcm9tcHRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgcHJvbXB0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICB1c2VyQ2hvaWNlOiBQcm9taXNlPHsgb3V0Y29tZTogJ2FjY2VwdGVkJyB8ICdkaXNtaXNzZWQnOyBwbGF0Zm9ybTogc3RyaW5nIH0+O1xufVxuXG5leHBvcnQgY29uc3QgUFdBSW5zdGFsbEJhbm5lcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkZWZlcnJlZFByb21wdCwgc2V0RGVmZXJyZWRQcm9tcHRdID0gdXNlU3RhdGU8QmVmb3JlSW5zdGFsbFByb21wdEV2ZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0luc3RhbGxlZCwgc2V0SXNJbnN0YWxsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNJT1MsIHNldElzSU9TXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dJT1NNb2RhbCwgc2V0U2hvd0lPU01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc21pc3NlZCwgc2V0RGlzbWlzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgaW4gc3RhbmRhbG9uZSBtb2RlXG4gICAgY29uc3QgaXNTdGFuZGFsb25lID1cbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKScpLm1hdGNoZXMgfHxcbiAgICAgICh3aW5kb3cubmF2aWdhdG9yIGFzIHVua25vd24gYXMgeyBzdGFuZGFsb25lPzogYm9vbGVhbiB9KS5zdGFuZGFsb25lID09PSB0cnVlO1xuICAgIHNldElzSW5zdGFsbGVkKGlzU3RhbmRhbG9uZSk7XG5cbiAgICAvLyBEZXRlY3QgaU9TXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGlzSU9TRGV2aWNlID0gL2lwaG9uZXxpcGFkfGlwb2QvLnRlc3QodWEpO1xuICAgIHNldElzSU9TKGlzSU9TRGV2aWNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUJlZm9yZVByb21wdCA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0RGVmZXJyZWRQcm9tcHQoZSBhcyBCZWZvcmVJbnN0YWxsUHJvbXB0RXZlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBcHBJbnN0YWxsZWQgPSAoKSA9PiB7XG4gICAgICBzZXRJc0luc3RhbGxlZCh0cnVlKTtcbiAgICAgIHNldERlZmVycmVkUHJvbXB0KG51bGwpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5zdGFsbHByb21wdCcsIGhhbmRsZUJlZm9yZVByb21wdCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FwcGluc3RhbGxlZCcsIGhhbmRsZUFwcEluc3RhbGxlZCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZWluc3RhbGxwcm9tcHQnLCBoYW5kbGVCZWZvcmVQcm9tcHQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FwcGluc3RhbGxlZCcsIGhhbmRsZUFwcEluc3RhbGxlZCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUluc3RhbGxDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoZGVmZXJyZWRQcm9tcHQpIHtcbiAgICAgIGF3YWl0IGRlZmVycmVkUHJvbXB0LnByb21wdCgpO1xuICAgICAgY29uc3QgeyBvdXRjb21lIH0gPSBhd2FpdCBkZWZlcnJlZFByb21wdC51c2VyQ2hvaWNlO1xuICAgICAgaWYgKG91dGNvbWUgPT09ICdhY2NlcHRlZCcpIHtcbiAgICAgICAgc2V0SXNJbnN0YWxsZWQodHJ1ZSk7XG4gICAgICAgIHNldERlZmVycmVkUHJvbXB0KG51bGwpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNJT1MpIHtcbiAgICAgIHNldFNob3dJT1NNb2RhbCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2hvd0lPU01vZGFsKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoaXNJbnN0YWxsZWQgfHwgZGlzbWlzc2VkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgbXQtMiBwLTIuNSByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNTAwLzE1IHZpYS1hbWJlci01MDAvMTAgdG8tdHJhbnNwYXJlbnQgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC14bCBiZy1hbWJlci01MDAvMjAgdGV4dC1hbWJlci00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzBcIj5cbiAgICAgICAgICAgIDxTbWFydHBob25lIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtWzEycHhdXCI+XG4gICAgICAgICAgICAgIGlQaG9uZSAvIGlPUyBVeWd1bGFtYXPEsSBPbGFyYWsgWcO8a2xlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1uZXV0cmFsLTMwMFwiPlxuICAgICAgICAgICAgICBBbmEgZWtyYW5hIGVrbGV5ZXJlayB0YW0gZWtyYW4gYcOnxLFuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUluc3RhbGxDbGlja31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIuNSBweS0xIHJvdW5kZWQteGwgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHRleHQtWzExcHhdIGZvbnQtYm9sZCBzaGFkb3cgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciBhY3RpdmU6c2NhbGUtOTVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5hc8SxbCBZw7xrbGVuaXI/XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlzbWlzc2VkKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICB0aXRsZT1cIkthcGF0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBpT1MgSW5zdGFsbGF0aW9uIEd1aWRlIFNoZWV0ICovfVxuICAgICAge3Nob3dJT1NNb2RhbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzgwIGJhY2tkcm9wLWJsdXItbWQgcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gcm91bmRlZC0zeGwgYmctWyMxNjE3MjNdIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzQwIHAtNiBzaGFkb3ctMnhsIHJlbGF0aXZlIHRleHQteHMgdGV4dC1uZXV0cmFsLTIwMCBhbmltYXRlLWluIHpvb20taW4tOTUgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJT1NNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgcC0xLjUgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzEwIHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLTJ4bCBiZy1hbWJlci01MDAvMjAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvNDAgdGV4dC1hbWJlci00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPFNtYXJ0cGhvbmUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+aVBob25lJ2EgTmFzxLFsIFnDvGtsZW5pcj88L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwIG10LTFcIj5cbiAgICAgICAgICAgICAgICBTYWZhcmkgw7x6ZXJpbmRlbiAyIGFkxLFtZGEgYW5hIGVrcmFuxLFuxLF6YSBla2xleWlwIHllcmVsIGlPUyB1eWd1bGFtYXPEsSBnaWJpIGt1bGxhbsSxbjpcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG10LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctYmxhY2svNTAgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcgaC03IHJvdW5kZWQtZnVsbCBiZy1hbWJlci01MDAvMjAgdGV4dC1hbWJlci0zMDAgZm9udC1ib2xkIHRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYXlsYcWfIETDvMSfbWVzaW5lIERva3VudW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxTaGFyZSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtbmV1dHJhbC00MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgIFNhZmFyaSBhbHQgw6d1YnXEn3VuZGFraSBrYXJlIGnDp2luZGVraSB5dWthcsSxIG9rIChQYXlsYcWfKSBzaW1nZXNpbmUgYmFzxLFuLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy1ibGFjay81MCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1mdWxsIGJnLWFtYmVyLTUwMC8yMCB0ZXh0LWFtYmVyLTMwMCBmb250LWJvbGQgdGV4dC14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFuYSBFa3JhbmEgRWtsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFBsdXNTcXVhcmUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICBBw6fEsWxhbiBtZW7DvHnDvCBhxZ9hxJ/EsSBrYXlkxLFyxLFwIDxzdHJvbmc+XCJBbmEgRWtyYW5hIEVrbGVcIjwvc3Ryb25nPiBzZcOnZW5lxJ9pbmkgc2XDp2luLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJT1NNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTUgdy1mdWxsIHB5LTIuNSByb3VuZGVkLTJ4bCBiZy1hbWJlci01MDAgaG92ZXI6YmctYW1iZXItNDAwIHRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQteHMgc2hhZG93LWxnIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbmxhZMSxbVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQWdFSSxtQkFJUSxjQUpSO0FBaEVKLFNBQWdCLFVBQVUsaUJBQWlCO0FBQzNDLFNBQW1CLE9BQU8sWUFBWSxHQUFHLGtCQUFrQjtBQU9wRCxhQUFNLG1CQUE2QixNQUFNO0FBQzlDLFFBQU0sQ0FBQyxnQkFBZ0IsaUJBQWlCLElBQUksU0FBMEMsSUFBSTtBQUMxRixRQUFNLENBQUMsYUFBYSxjQUFjLElB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