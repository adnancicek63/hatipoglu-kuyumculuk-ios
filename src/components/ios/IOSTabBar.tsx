import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { TrendingUp, Gem, Calculator, Users, GitBranch } from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
export const IOSTabBar = ({
  activeTab,
  onTabChange,
  inventoryAlertCount
}) => {
  const tabs = [
    { id: "rates", label: "Piyasa", icon: TrendingUp },
    { id: "inventory", label: "Envanter", icon: Gem, badge: inventoryAlertCount },
    { id: "calc", label: "Hesapla", icon: Calculator },
    { id: "customers", label: "Müşteri", icon: Users },
    { id: "github", label: "GitHub", icon: GitBranch }
  ];
  const handleTabClick = (tabId) => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(10);
      } catch {
      }
    }
    onTabChange(tabId);
  };
  return /* @__PURE__ */ jsxDEV("nav", { className: "fixed bottom-0 left-0 right-0 z-50 bg-[#0d0e14]/90 backdrop-blur-2xl border-t border-white/10 pb-[max(var(--sab,0px),12px)] pt-2 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-md mx-auto px-4 flex items-center justify-around", children: tabs.map((tab) => {
    const Icon = tab.icon;
    const isActive = activeTab === tab.id;
    return /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => handleTabClick(tab.id),
        className: `relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 cursor-pointer ${isActive ? "text-amber-400 scale-105" : "text-neutral-400 hover:text-neutral-200"}`,
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV(
              Icon,
              {
                className: `w-6 h-6 transition-transform duration-200 ${isActive ? "stroke-[2.4] -translate-y-0.5" : "stroke-[1.75]"}`
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/ios/IOSTabBar.tsx?raw=1789374737828",
                lineNumber: 55,
                columnNumber: 17
              },
              this
            ),
            tab.badge && tab.badge > 0 ? /* @__PURE__ */ jsxDEV("span", { className: "absolute -top-1 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow", children: tab.badge }, void 0, false, {
              fileName: "/app/applet/src/components/ios/IOSTabBar.tsx?raw=1789374737828",
              lineNumber: 61,
              columnNumber: 19
            }, this) : null
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ios/IOSTabBar.tsx?raw=1789374737828",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: `text-[11px] mt-1 font-medium tracking-tight transition-all ${isActive ? "font-semibold text-amber-300" : "text-neutral-400"}`,
              children: tab.label
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/ios/IOSTabBar.tsx?raw=1789374737828",
              lineNumber: 66,
              columnNumber: 15
            },
            this
          ),
          isActive && /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-amber-400 mt-0.5 shadow-sm shadow-amber-400/50" }, void 0, false, {
            fileName: "/app/applet/src/components/ios/IOSTabBar.tsx?raw=1789374737828",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ]
      },
      tab.id,
      true,
      {
        fileName: "/app/applet/src/components/ios/IOSTabBar.tsx?raw=1789374737828",
        lineNumber: 45,
        columnNumber: 13
      },
      this
    );
  }) }, void 0, false, {
    fileName: "/app/applet/src/components/ios/IOSTabBar.tsx?raw=1789374737828",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/ios/IOSTabBar.tsx?raw=1789374737828",
    lineNumber: 38,
    columnNumber: 5
  }, this);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklPU1RhYkJhci50c3g/cmF3PTE3ODkzNzQ3Mzc4MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyZW5kaW5nVXAsIEdlbSwgQ2FsY3VsYXRvciwgVXNlcnMsIEdpdEJyYW5jaCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmV4cG9ydCB0eXBlIFRhYlR5cGUgPSAncmF0ZXMnIHwgJ2ludmVudG9yeScgfCAnY2FsYycgfCAnY3VzdG9tZXJzJyB8ICdnaXRodWInO1xuXG5pbnRlcmZhY2UgSU9TVGFiQmFyUHJvcHMge1xuICBhY3RpdmVUYWI6IFRhYlR5cGU7XG4gIG9uVGFiQ2hhbmdlOiAodGFiOiBUYWJUeXBlKSA9PiB2b2lkO1xuICBpbnZlbnRvcnlBbGVydENvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBJT1NUYWJCYXI6IFJlYWN0LkZDPElPU1RhYkJhclByb3BzPiA9ICh7XG4gIGFjdGl2ZVRhYixcbiAgb25UYWJDaGFuZ2UsXG4gIGludmVudG9yeUFsZXJ0Q291bnQsXG59KSA9PiB7XG4gIGNvbnN0IHRhYnMgPSBbXG4gICAgeyBpZDogJ3JhdGVzJyBhcyBUYWJUeXBlLCBsYWJlbDogJ1BpeWFzYScsIGljb246IFRyZW5kaW5nVXAgfSxcbiAgICB7IGlkOiAnaW52ZW50b3J5JyBhcyBUYWJUeXBlLCBsYWJlbDogJ0VudmFudGVyJywgaWNvbjogR2VtLCBiYWRnZTogaW52ZW50b3J5QWxlcnRDb3VudCB9LFxuICAgIHsgaWQ6ICdjYWxjJyBhcyBUYWJUeXBlLCBsYWJlbDogJ0hlc2FwbGEnLCBpY29uOiBDYWxjdWxhdG9yIH0sXG4gICAgeyBpZDogJ2N1c3RvbWVycycgYXMgVGFiVHlwZSwgbGFiZWw6ICdNw7zFn3RlcmknLCBpY29uOiBVc2VycyB9LFxuICAgIHsgaWQ6ICdnaXRodWInIGFzIFRhYlR5cGUsIGxhYmVsOiAnR2l0SHViJywgaWNvbjogR2l0QnJhbmNoIH0sXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlVGFiQ2xpY2sgPSAodGFiSWQ6IFRhYlR5cGUpID0+IHtcbiAgICAvLyBMaWdodCB0YWN0aWxlIGZlZWRiYWNrIHNpbXVsYXRpb24gaWYgc3VwcG9ydGVkXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmICd2aWJyYXRlJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRvci52aWJyYXRlKDEwKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICAgIH1cbiAgICB9XG4gICAgb25UYWJDaGFuZ2UodGFiSWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIGJnLVsjMGQwZTE0XS85MCBiYWNrZHJvcC1ibHVyLTJ4bCBib3JkZXItdCBib3JkZXItd2hpdGUvMTAgcGItW21heCh2YXIoLS1zYWIsMHB4KSwxMnB4KV0gcHQtMiBzaGFkb3ctWzBfLThweF8zMHB4X3JnYmEoMCwwLDAsMC42KV1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBweC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgIHt0YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgIGNvbnN0IEljb24gPSB0YWIuaWNvbjtcbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZVRhYiA9PT0gdGFiLmlkO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXt0YWIuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKHRhYi5pZCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTEgcHgtMyByb3VuZGVkLTJ4bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyAndGV4dC1hbWJlci00MDAgc2NhbGUtMTA1J1xuICAgICAgICAgICAgICAgICAgOiAndGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtMjAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTYgaC02IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCAke1xuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdzdHJva2UtWzIuNF0gLXRyYW5zbGF0ZS15LTAuNScgOiAnc3Ryb2tlLVsxLjc1XSdcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RhYi5iYWRnZSAmJiB0YWIuYmFkZ2UgPiAwID8gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xIC1yaWdodC0yIG1pbi13LVsxNnB4XSBoLTQgcHgtMSByb3VuZGVkLWZ1bGwgYmctcm9zZS01MDAgdGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0YWIuYmFkZ2V9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWzExcHhdIG10LTEgZm9udC1tZWRpdW0gdHJhY2tpbmctdGlnaHQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2ZvbnQtc2VtaWJvbGQgdGV4dC1hbWJlci0zMDAnIDogJ3RleHQtbmV1dHJhbC00MDAnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFiLmxhYmVsfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEuNSBoLTEuNSByb3VuZGVkLWZ1bGwgYmctYW1iZXItNDAwIG10LTAuNSBzaGFkb3ctc20gc2hhZG93LWFtYmVyLTQwMC81MFwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBc0RnQjtBQXJEaEIsU0FBUyxZQUFZLEtBQUssWUFBWSxPQUFPLGlCQUFpQjtBQVV2RCxhQUFNLFlBQXNDLENBQUM7QUFBQSxFQUNsRDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsTUFBTTtBQUNKLFFBQU0sT0FBTztBQUFBLElBQ1gsRUFBRSxJQUFJLFNBQW9CLE9BQU8sVUFBVSxNQUFNLFdBQVc7QUFBQSxJQUM1RCxFQUFFLElBQUksYUFBd0IsT0FBTyxZQUFZLE1BQU0sS0FBSyxPQUFPLG9CQUFvQjtBQUFBLElBQ3ZGLEVBQUUsSUFBSSxRQUFtQixPQUFPLFdBQVcsTUFBTSxXQUFXO0FBQUEsSUFDNUQsRUFBRSxJQUFJLGFBQXdCLE9BQU8sV0FBVyxNQUFNLE1BQU07QUFBQSxJQUM1RCxFQUFFLElBQUksVUFBcUIsT0FBTyxVQUFVLE1BQU0sVUFBVTtBQUFBLEVBQzlEO0FBRUEsUUFBTSxpQkFBaUIsQ0FBQyxVQUFtQjtBQUV6QyxRQUFJLE9BQU8sY0FBYyxlQUFlLGFBQWEsV0FBVztBQUM5RCxVQUFJO0FBQ0Ysa0JBQVUsUUFBUSxFQUFFO0FBQUEsTUFDdEIsUUFBUTtBQUFBLE1BRVI7QUFBQSxJQUNGO0FBQ0EsZ0JBQVksS0FBSztBQUFBLEVBQ25CO0FBRUEsU0FDRSx1QkFBQyxTQUFJLFdBQVUseUtBQ2IsaUNBQUMsU0FBSSxXQUFVLDBEQUNaLGVBQUssSUFBSSxTQUFPO0FBQ2YsVUFBTSxPQUFPLElBQUk7QUFDakIsVUFBTSxXQUFXLGNBQWMsSUFBSTtBQUVuQyxXQUNFO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFFQyxTQUFTLE1BQU0sZUFBZSxJQUFJLEVBQUU7QUFBQSxRQUNwQyxXQUFXLHVIQUNULFdBQ0ksNkJBQ0EseUNBQ047QUFBQSxRQUVBO0FBQUEsaUNBQUMsU0FBSSxXQUFVLFlBQ2I7QUFBQTtBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUNDLFdBQVcsNkNBQ1QsV0FBVyxrQ0FBa0MsZUFDL0M7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSUE7QUFBQSxZQUNDLElBQUksU0FBUyxJQUFJLFFBQVEsSUFDeEIsdUJBQUMsVUFBSyxXQUFVLG9KQUNiLGNBQUksU0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBLElBQ0U7QUFBQSxlQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBV0E7QUFBQSxVQUNBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxXQUFXLDhEQUNULFdBQVcsaUNBQWlDLGtCQUM5QztBQUFBLGNBRUMsY0FBSTtBQUFBO0FBQUEsWUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFNQTtBQUFBLFVBQ0MsWUFDQyx1QkFBQyxTQUFJLFdBQVUsZ0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNEY7QUFBQTtBQUFBO0FBQUEsTUE1QnpGLElBQUk7QUFBQSxNQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUErQkE7QUFBQSxFQUVKLENBQUMsS0F2Q0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXdDQSxLQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMENBO0FBRUo7IiwibmFtZXMiOltdfQ==