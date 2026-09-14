import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import {
  Github,
  Copy,
  Check,
  Download,
  Upload,
  Terminal,
  ShieldCheck,
  Store,
  RefreshCcw,
  ExternalLink,
  Sparkles,
  Lock,
  Globe,
  UploadCloud,
  CheckCircle2,
  ShieldAlert,
  Loader2,
  ArrowRight,
  Maximize2
} from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
import { uploadToGithubDirect, downloadProjectZip } from "/src/utils/githubService.ts";
export const GithubExportView = ({
  settings,
  onUpdateSettings,
  onExportJSON,
  onImportJSON,
  onResetData,
  onOpenModal
}) => {
  const [activeTab, setActiveTab] = useState("api");
  const [patToken, setPatToken] = useState(() => {
    return localStorage.getItem("hatipoglu_github_pat") || "";
  });
  const [repoName, setRepoName] = useState(() => {
    return localStorage.getItem("hatipoglu_github_repo") || "hatipoglu-kuyumculuk-ios";
  });
  const [isPrivate, setIsPrivate] = useState(false);
  const [commitMessage, setCommitMessage] = useState(
    "feat: Hatipoğlu Kuyumculuk iOS & Web Güncellemesi"
  );
  const [bundleId, setBundleId] = useState("com.hatipoglu.gold");
  const [progress, setProgress] = useState({
    step: "idle",
    message: ""
  });
  const [copiedSection, setCopiedSection] = useState(null);
  const [importStatus, setImportStatus] = useState(null);
  const [isDownloadingZip, setIsDownloadingZip] = useState(false);
  const [storeName, setStoreName] = useState(settings.storeName);
  const [phone, setPhone] = useState(settings.phone);
  const [address, setAddress] = useState(settings.address);
  const [settingsSaved, setSettingsSaved] = useState(false);
  useEffect(() => {
    if (patToken) {
      localStorage.setItem("hatipoglu_github_pat", patToken);
    }
  }, [patToken]);
  useEffect(() => {
    if (repoName) {
      localStorage.setItem("hatipoglu_github_repo", repoName);
    }
  }, [repoName]);
  const handleDirectUpload = async () => {
    if (!patToken.trim()) {
      setProgress({
        step: "error",
        message: "Lütfen GitHub Personal Access Token (PAT) giriniz.",
        error: "Token eksik"
      });
      return;
    }
    await uploadToGithubDirect(
      patToken,
      repoName.trim() || "hatipoglu-kuyumculuk-ios",
      isPrivate,
      commitMessage.trim(),
      bundleId.trim() || "com.hatipoglu.gold",
      (p) => setProgress(p)
    );
  };
  const handleDownloadZip = async () => {
    setIsDownloadingZip(true);
    try {
      await downloadProjectZip(bundleId);
    } finally {
      setIsDownloadingZip(false);
    }
  };
  const gitCliScript = `# 1. Proje ana dizininde tüm dosyaları ekleyin:
git init
git add .
git commit -m "${commitMessage || "feat: Hatipoğlu Kuyumculuk iOS & Web Güncellemesi"}"

# 2. Ana dalı belirleyin ve deponuzu bağlayın:
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/KULLANICI_ADINIZ/${repoName || "hatipoglu-kuyumculuk-ios"}.git

# 3. GitHub'a gönderin (push):
git push -u origin main`;
  const copyToClipboard = (text, sectionKey) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedSection(sectionKey);
      setTimeout(() => setCopiedSection(null), 2500);
    }
  };
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      const res = onImportJSON(content);
      setImportStatus(res.message);
      setTimeout(() => setImportStatus(null), 4e3);
    };
    reader.readAsText(file);
  };
  const handleSaveStoreSettings = (e) => {
    e.preventDefault();
    onUpdateSettings({
      ...settings,
      storeName,
      phone,
      address
    });
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2e3);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 pb-6 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-[#0f111a] border border-white/15 shadow-2xl overflow-hidden relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-5 border-b border-white/10 flex items-start justify-between bg-gradient-to-b from-white/[0.04] to-transparent", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-bold shadow-md shrink-0", children: /* @__PURE__ */ jsxDEV(Github, { className: "w-6 h-6 fill-current" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 173,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 172,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-sm sm:text-base font-bold text-white tracking-tight", children: "GİTHUB & CODEMAGIC.IO DAĞITIMI" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 177,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/35 text-amber-300 text-[10px] font-extrabold tracking-wider uppercase", children: "BULUT CI/CD" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 180,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 176,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-400 mt-0.5", children: "Tüm kaynak kodları ve Codemagic iOS yapılandırmasını GitHub deponuza aktarın" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 184,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 175,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 171,
          columnNumber: 11
        }, this),
        onOpenModal && /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: onOpenModal,
            className: "p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer",
            title: "Pencereyi Büyüt / Modal Olarak Aç",
            children: /* @__PURE__ */ jsxDEV(Maximize2, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 196,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 191,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 170,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center px-4 sm:px-5 border-b border-white/10 bg-black/20 text-xs font-semibold gap-4 sm:gap-6 overflow-x-auto no-scrollbar", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveTab("api"),
            className: `py-3 flex items-center gap-1.5 border-b-2 transition cursor-pointer whitespace-nowrap ${activeTab === "api" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-neutral-400 hover:text-neutral-200"}`,
            children: [
              /* @__PURE__ */ jsxDEV(UploadCloud, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 211,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Doğrudan Yükle (API)" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 212,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 203,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveTab("git"),
            className: `py-3 flex items-center gap-1.5 border-b-2 transition cursor-pointer whitespace-nowrap ${activeTab === "git" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-neutral-400 hover:text-neutral-200"}`,
            children: [
              /* @__PURE__ */ jsxDEV(Terminal, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 223,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Git Komutları" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 224,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 215,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveTab("zip"),
            className: `py-3 flex items-center gap-1.5 border-b-2 transition cursor-pointer whitespace-nowrap ${activeTab === "zip" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-neutral-400 hover:text-neutral-200"}`,
            children: [
              /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 235,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "GitHub ZIP" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 236,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 227,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      activeTab === "api" && /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-5 space-y-3.5 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "flex items-center gap-1.5 font-semibold text-neutral-200 text-[11px]", children: [
              /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 247,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "GitHub Personal Access Token (PAT)" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 248,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 246,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "https://github.com/settings/tokens/new?scopes=repo&description=Hatipoglu+Kuyumculuk+iOS",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 text-[11px] transition",
                children: [
                  /* @__PURE__ */ jsxDEV("span", { children: "Token Oluştur" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                    lineNumber: 256,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(ExternalLink, { className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                    lineNumber: 257,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 250,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 245,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "password",
              value: patToken,
              onChange: (e) => setPatToken(e.target.value),
              placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
              className: "w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-amber-400 focus:outline-none placeholder:text-neutral-600"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 260,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-[11px] text-neutral-400", children: "Tokeniniz tarayıcınızın yerel hafızasında saklanır, asla sunucuya gönderilmez. Yalnızca repo yetkisi yeterlidir." }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 267,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 244,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block font-semibold text-neutral-200 text-[11px]", children: "Depo (Repo) Adı:" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 275,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                value: repoName,
                onChange: (e) => setRepoName(e.target.value),
                placeholder: "hatipoglu-kuyumculuk-ios",
                className: "w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 278,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 274,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block font-semibold text-neutral-200 text-[11px]", children: "Gizlilik Türü:" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 288,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => setIsPrivate(false),
                  className: `py-2 px-2.5 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition cursor-pointer ${!isPrivate ? "bg-amber-400 border-amber-400 text-black shadow-md" : "bg-black/60 border-white/15 text-neutral-300 hover:border-white/30"}`,
                  children: [
                    /* @__PURE__ */ jsxDEV(Globe, { className: "w-3.5 h-3.5" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                      lineNumber: 301,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "Herkese Açık" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                      lineNumber: 302,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 292,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => setIsPrivate(true),
                  className: `py-2 px-2.5 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition cursor-pointer ${isPrivate ? "bg-amber-400 border-amber-400 text-black shadow-md" : "bg-black/60 border-white/15 text-neutral-300 hover:border-white/30"}`,
                  children: [
                    /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                      lineNumber: 314,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "Gizli (Private)" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                      lineNumber: 315,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 305,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 291,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 287,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 273,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block font-semibold text-neutral-200 text-[11px]", children: "Commit Mesajı:" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 323,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: commitMessage,
              onChange: (e) => setCommitMessage(e.target.value),
              placeholder: "feat: Hatipoğlu Kuyumculuk iOS & Web Güncellemesi",
              className: "w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-amber-400 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 326,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 322,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3.5 bg-black/40 rounded-2xl border border-white/15 space-y-2 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-white font-bold text-[11px] sm:text-xs", children: [
              /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 339,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Codemagic.io Bulut CI/CD & Apple App Store Yapılandırması" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 340,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 338,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "https://codemagic.io",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 text-[11px]",
                children: [
                  /* @__PURE__ */ jsxDEV("span", { children: "codemagic.io" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                    lineNumber: 348,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(ExternalLink, { className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                    lineNumber: 349,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 342,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 337,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-[10px] text-neutral-400 mb-1", children: "iOS Bundle Identifier:" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 354,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                value: bundleId,
                onChange: (e) => setBundleId(e.target.value),
                placeholder: "com.hatipoglu.gold",
                className: "w-full px-3 py-1.5 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 357,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 353,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-[11px] text-neutral-300 leading-relaxed", children: [
            "Deponuzun kök dizinine otomatik olarak ",
            /* @__PURE__ */ jsxDEV("code", { className: "text-amber-300 font-mono bg-white/5 px-1 py-0.5 rounded", children: "codemagic.yaml" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 367,
              columnNumber: 56
            }, this),
            " eklenir. GitHub'a aktarıldıktan sonra Codemagic.io'da projenizi bağlayıp Mac Mini M2 bulut makinelerinde doğrudan Apple App Store / TestFlight için .IPA derlemesi alabilirsiniz."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 366,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 336,
          columnNumber: 13
        }, this),
        progress.step !== "idle" && /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: `p-3 rounded-2xl border ${progress.step === "complete" ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" : progress.step === "error" ? "bg-rose-500/15 border-rose-500/30 text-rose-300" : "bg-amber-500/15 border-amber-500/30 text-amber-300"}`,
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                progress.step === "complete" ? /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 shrink-0 text-emerald-400" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 384,
                  columnNumber: 21
                }, this) : progress.step === "error" ? /* @__PURE__ */ jsxDEV(ShieldAlert, { className: "w-4 h-4 shrink-0 text-rose-400" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 386,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDEV(Loader2, { className: "w-4 h-4 shrink-0 animate-spin text-amber-400" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 388,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[11px]", children: progress.message }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 390,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 382,
                columnNumber: 17
              }, this),
              progress.total && progress.current && progress.step === "uploading" && /* @__PURE__ */ jsxDEV("div", { className: "mt-2", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-black/40 h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "bg-amber-400 h-full transition-all duration-200",
                  style: {
                    width: `${progress.current / progress.total * 100}%`
                  }
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 396,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 395,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 394,
                columnNumber: 19
              }, this),
              progress.step === "complete" && progress.repoUrl && /* @__PURE__ */ jsxDEV("div", { className: "mt-2.5 pt-2.5 border-t border-emerald-500/20 flex items-center justify-between flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: progress.repoUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 text-black font-bold text-xs shadow hover:bg-emerald-400 transition",
                    children: [
                      /* @__PURE__ */ jsxDEV("span", { children: "GitHub Deponuzu Açın" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                        lineNumber: 414,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV(ExternalLink, { className: "w-3.5 h-3.5" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                        lineNumber: 415,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                    lineNumber: 408,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: "https://codemagic.io/apps",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition",
                    children: [
                      /* @__PURE__ */ jsxDEV("span", { children: "Codemagic'te IPA Derleyin" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                        lineNumber: 424,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3 h-3 text-amber-400" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                        lineNumber: 425,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                    lineNumber: 418,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 407,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 373,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            onClick: handleDirectUpload,
            disabled: progress.step === "validating" || progress.step === "creating_repo" || progress.step === "uploading",
            className: "w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-amber-500/15 transition active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer",
            children: progress.step === "validating" || progress.step === "creating_repo" || progress.step === "uploading" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Loader2, { className: "w-4 h-4 animate-spin" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 441,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "GitHub'a Yükleniyor..." }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 442,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 440,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(UploadCloud, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 446,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Doğrudan GitHub'a Yükle ve Depoyu Oluştur" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 447,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 445,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 433,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 242,
        columnNumber: 11
      }, this),
      activeTab === "git" && /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-5 space-y-3 text-xs", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-neutral-300 leading-relaxed text-[11px]", children: [
          "Terminal üzerinden projenizi ve ",
          /* @__PURE__ */ jsxDEV("code", { className: "text-amber-400", children: "codemagic.yaml" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 458,
            columnNumber: 47
          }, this),
          " dosyasını GitHub'a göndermek için bu komutları kullanabilirsiniz:"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 457,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("pre", { className: "p-3.5 rounded-2xl bg-neutral-950 border border-white/15 text-[11px] text-neutral-200 font-mono overflow-x-auto no-scrollbar", children: gitCliScript }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 462,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => copyToClipboard(gitCliScript, "git-all"),
              className: "absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-[10px] font-bold flex items-center gap-1 shadow cursor-pointer active:scale-95",
              children: copiedSection === "git-all" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                /* @__PURE__ */ jsxDEV(Check, { className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 471,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Kopyalandı" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 472,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 470,
                columnNumber: 19
              }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                /* @__PURE__ */ jsxDEV(Copy, { className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 476,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Komutları Kopyala" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 477,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 475,
                columnNumber: 19
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 465,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 461,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-black/40 rounded-xl border border-white/10 text-[11px] text-neutral-400 space-y-1", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "font-bold text-white flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 485,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Codemagic'te IPA Derleme Adımları:" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 486,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 484,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "1. Codemagic.io hesabınıza girip deponuzu bağlayın." }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 488,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: '2. "Start new build" butonuna basarak Mac Mini M2 bulutunda IPA paketini oluşturun.' }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 489,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: [
            "3. Derleme tamamlandığında sağdaki Eserler (Artifacts) sekmesinden doğrudan ",
            /* @__PURE__ */ jsxDEV("strong", { children: "HatipogluGold.ipa" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 490,
              columnNumber: 94
            }, this),
            " dosyanızı indirin."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 490,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 483,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 456,
        columnNumber: 11
      }, this),
      activeTab === "zip" && /* @__PURE__ */ jsxDEV("div", { className: "p-5 text-center space-y-3 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxDEV(Download, { className: "w-6 h-6" }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 499,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 498,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white", children: "Tüm Projeyi ZIP Olarak İndirin" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 503,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-400 max-w-sm mx-auto mt-1", children: [
            /* @__PURE__ */ jsxDEV("code", { className: "text-amber-300", children: "codemagic.yaml" }, void 0, false, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 507,
              columnNumber: 17
            }, this),
            ", iOS yapılandırması ve kaynak kodların tamamını tek tıkla indirin."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 506,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 502,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: handleDownloadZip,
            disabled: isDownloadingZip,
            className: "py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-lg transition active:scale-95 disabled:opacity-50 inline-flex items-center gap-2 cursor-pointer",
            children: isDownloadingZip ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Loader2, { className: "w-3.5 h-3.5 animate-spin" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 518,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Paketleniyor..." }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 519,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 517,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 523,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "hatipoglu-kuyumculuk-ios.zip İndir" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 524,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 522,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 511,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 497,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "px-4 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] text-neutral-400 font-mono", children: [
        /* @__PURE__ */ jsxDEV("span", { children: "Hatipoğlu Kuyumculuk v1.0.0" }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 533,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400/80", children: "iOS & Web Bulut Dağıtımı" }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 534,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 532,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-[#13141e] border border-white/10 p-5 shadow-lg space-y-3", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 541,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: "Veritabanı & Kuyumcu Verisi Yedekleme" }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 542,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 540,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-400", children: "Tüm stok envanterinizi, müşteri cari borçlarını, emanet altın kayıtlarını ve fişlerinizi tek tıkla dosya olarak yedekleyin." }, void 0, false, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 544,
        columnNumber: 9
      }, this),
      importStatus && /* @__PURE__ */ jsxDEV("div", { className: "p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 550,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: importStatus }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 551,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 549,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2.5 pt-1", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: onExportJSON,
            className: "py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer active:scale-95",
            children: [
              /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 560,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "JSON Yedek İndir" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                lineNumber: 561,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 556,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("label", { className: "py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/10 transition cursor-pointer active:scale-95 text-center", children: [
          /* @__PURE__ */ jsxDEV(Upload, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 565,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Yedek Yükle" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 566,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "file",
              accept: ".json",
              onChange: handleFileUpload,
              className: "hidden"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 567,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 564,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 555,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
      lineNumber: 539,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl bg-[#13141e] border border-white/10 p-5 shadow-lg space-y-3", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Store, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 580,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: "Kuyumcu Mağaza Bilgileri" }, void 0, false, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 581,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 579,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSaveStoreSettings, className: "space-y-3 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-400 mb-1", children: "Mağaza Unvanı" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 586,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: storeName,
              onChange: (e) => setStoreName(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white focus:border-amber-400 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 587,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 585,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-400 mb-1", children: "Telefon" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 596,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: phone,
              onChange: (e) => setPhone(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white focus:border-amber-400 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 597,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 595,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-neutral-400 mb-1", children: "Adres" }, void 0, false, {
            fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
            lineNumber: 606,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: address,
              onChange: (e) => setAddress(e.target.value),
              className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white focus:border-amber-400 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 607,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 605,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-1 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "submit",
              className: "py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold cursor-pointer",
              children: settingsSaved ? "Kaydedildi ✓" : "Bilgileri Güncelle"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 616,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => {
                if (confirm("Tüm veriler fabrika ayarlarına sıfırlanacaktır. Emin misiniz?")) {
                  onResetData();
                }
              },
              className: "text-neutral-500 hover:text-rose-400 text-xs flex items-center gap-1 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxDEV(RefreshCcw, { className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 632,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Verileri Sıfırla" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
                  lineNumber: 633,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
              lineNumber: 623,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
          lineNumber: 615,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
        lineNumber: 584,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
      lineNumber: 578,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/github/GithubExportView.tsx?raw=1789374737828",
    lineNumber: 164,
    columnNumber: 5
  }, this);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdpdGh1YkV4cG9ydFZpZXcudHN4P3Jhdz0xNzg5Mzc0NzM3ODI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIEdpdGh1YiwgXG4gIENvcHksIFxuICBDaGVjaywgXG4gIERvd25sb2FkLCBcbiAgVXBsb2FkLCBcbiAgVGVybWluYWwsIFxuICBTaGllbGRDaGVjaywgXG4gIFN0b3JlLCBcbiAgUmVmcmVzaENjdywgXG4gIEV4dGVybmFsTGluayxcbiAgU3BhcmtsZXMsXG4gIExvY2ssXG4gIEdsb2JlLFxuICBVcGxvYWRDbG91ZCxcbiAgQ2hlY2tDaXJjbGUyLFxuICBTaGllbGRBbGVydCxcbiAgTG9hZGVyMixcbiAgQXJyb3dSaWdodCxcbiAgTWF4aW1pemUyXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBTdG9yZVNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXBsb2FkVG9HaXRodWJEaXJlY3QsIGRvd25sb2FkUHJvamVjdFppcCwgR2l0aHViVXBsb2FkUHJvZ3Jlc3MgfSBmcm9tICcuLi8uLi91dGlscy9naXRodWJTZXJ2aWNlJztcblxuaW50ZXJmYWNlIEdpdGh1YkV4cG9ydFZpZXdQcm9wcyB7XG4gIHNldHRpbmdzOiBTdG9yZVNldHRpbmdzO1xuICBvblVwZGF0ZVNldHRpbmdzOiAoc2V0dGluZ3M6IFN0b3JlU2V0dGluZ3MpID0+IHZvaWQ7XG4gIG9uRXhwb3J0SlNPTjogKCkgPT4gdm9pZDtcbiAgb25JbXBvcnRKU09OOiAoY29udGVudDogc3RyaW5nKSA9PiB7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB9O1xuICBvblJlc2V0RGF0YTogKCkgPT4gdm9pZDtcbiAgb25PcGVuTW9kYWw/OiAoKSA9PiB2b2lkO1xufVxuXG50eXBlIFRhYlR5cGUgPSAnYXBpJyB8ICdnaXQnIHwgJ3ppcCc7XG5cbmV4cG9ydCBjb25zdCBHaXRodWJFeHBvcnRWaWV3OiBSZWFjdC5GQzxHaXRodWJFeHBvcnRWaWV3UHJvcHM+ID0gKHtcbiAgc2V0dGluZ3MsXG4gIG9uVXBkYXRlU2V0dGluZ3MsXG4gIG9uRXhwb3J0SlNPTixcbiAgb25JbXBvcnRKU09OLFxuICBvblJlc2V0RGF0YSxcbiAgb25PcGVuTW9kYWwsXG59KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTxUYWJUeXBlPignYXBpJyk7XG5cbiAgLy8gRm9ybSBzdGF0ZXMgbWF0Y2hpbmcgc2NyZWVuc2hvdFxuICBjb25zdCBbcGF0VG9rZW4sIHNldFBhdFRva2VuXSA9IHVzZVN0YXRlPHN0cmluZz4oKCkgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGF0aXBvZ2x1X2dpdGh1Yl9wYXQnKSB8fCAnJztcbiAgfSk7XG4gIGNvbnN0IFtyZXBvTmFtZSwgc2V0UmVwb05hbWVdID0gdXNlU3RhdGU8c3RyaW5nPigoKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYXRpcG9nbHVfZ2l0aHViX3JlcG8nKSB8fCAnaGF0aXBvZ2x1LWt1eXVtY3VsdWstaW9zJztcbiAgfSk7XG4gIGNvbnN0IFtpc1ByaXZhdGUsIHNldElzUHJpdmF0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb21taXRNZXNzYWdlLCBzZXRDb21taXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgJ2ZlYXQ6IEhhdGlwb8SfbHUgS3V5dW1jdWx1ayBpT1MgJiBXZWIgR8O8bmNlbGxlbWVzaSdcbiAgKTtcbiAgY29uc3QgW2J1bmRsZUlkLCBzZXRCdW5kbGVJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdjb20uaGF0aXBvZ2x1LmdvbGQnKTtcblxuICAvLyBVcGxvYWQgc3RhdHVzICYgZmVlZGJhY2tcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZTxHaXRodWJVcGxvYWRQcm9ncmVzcz4oe1xuICAgIHN0ZXA6ICdpZGxlJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfSk7XG4gIGNvbnN0IFtjb3BpZWRTZWN0aW9uLCBzZXRDb3BpZWRTZWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaW1wb3J0U3RhdHVzLCBzZXRJbXBvcnRTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0Rvd25sb2FkaW5nWmlwLCBzZXRJc0Rvd25sb2FkaW5nWmlwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBTdG9yZSBzZXR0aW5ncyBmb3JtXG4gIGNvbnN0IFtzdG9yZU5hbWUsIHNldFN0b3JlTmFtZV0gPSB1c2VTdGF0ZShzZXR0aW5ncy5zdG9yZU5hbWUpO1xuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKHNldHRpbmdzLnBob25lKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoc2V0dGluZ3MuYWRkcmVzcyk7XG4gIGNvbnN0IFtzZXR0aW5nc1NhdmVkLCBzZXRTZXR0aW5nc1NhdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBMb2NhbCBzdG9yYWdlIHBlcnNpc3RlbmNlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBhdFRva2VuKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGF0aXBvZ2x1X2dpdGh1Yl9wYXQnLCBwYXRUb2tlbik7XG4gICAgfVxuICB9LCBbcGF0VG9rZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvTmFtZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhdGlwb2dsdV9naXRodWJfcmVwbycsIHJlcG9OYW1lKTtcbiAgICB9XG4gIH0sIFtyZXBvTmFtZV0pO1xuXG4gIGNvbnN0IGhhbmRsZURpcmVjdFVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXBhdFRva2VuLnRyaW0oKSkge1xuICAgICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgICBzdGVwOiAnZXJyb3InLFxuICAgICAgICBtZXNzYWdlOiAnTMO8dGZlbiBHaXRIdWIgUGVyc29uYWwgQWNjZXNzIFRva2VuIChQQVQpIGdpcmluaXouJyxcbiAgICAgICAgZXJyb3I6ICdUb2tlbiBla3NpaycsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCB1cGxvYWRUb0dpdGh1YkRpcmVjdChcbiAgICAgIHBhdFRva2VuLFxuICAgICAgcmVwb05hbWUudHJpbSgpIHx8ICdoYXRpcG9nbHUta3V5dW1jdWx1ay1pb3MnLFxuICAgICAgaXNQcml2YXRlLFxuICAgICAgY29tbWl0TWVzc2FnZS50cmltKCksXG4gICAgICBidW5kbGVJZC50cmltKCkgfHwgJ2NvbS5oYXRpcG9nbHUuZ29sZCcsXG4gICAgICAocCkgPT4gc2V0UHJvZ3Jlc3MocClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkWmlwID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzRG93bmxvYWRpbmdaaXAodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRvd25sb2FkUHJvamVjdFppcChidW5kbGVJZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzRG93bmxvYWRpbmdaaXAoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnaXRDbGlTY3JpcHQgPSBgIyAxLiBQcm9qZSBhbmEgZGl6aW5pbmRlIHTDvG0gZG9zeWFsYXLEsSBla2xleWluOlxuZ2l0IGluaXRcbmdpdCBhZGQgLlxuZ2l0IGNvbW1pdCAtbSBcIiR7Y29tbWl0TWVzc2FnZSB8fCAnZmVhdDogSGF0aXBvxJ9sdSBLdXl1bWN1bHVrIGlPUyAmIFdlYiBHw7xuY2VsbGVtZXNpJ31cIlxuXG4jIDIuIEFuYSBkYWzEsSBiZWxpcmxleWluIHZlIGRlcG9udXp1IGJhxJ9sYXnEsW46XG5naXQgYnJhbmNoIC1NIG1haW5cbmdpdCByZW1vdGUgcmVtb3ZlIG9yaWdpbiAyPi9kZXYvbnVsbCB8fCB0cnVlXG5naXQgcmVtb3RlIGFkZCBvcmlnaW4gaHR0cHM6Ly9naXRodWIuY29tL0tVTExBTklDSV9BRElOSVovJHtyZXBvTmFtZSB8fCAnaGF0aXBvZ2x1LWt1eXVtY3VsdWstaW9zJ30uZ2l0XG5cbiMgMy4gR2l0SHViJ2EgZ8O2bmRlcmluIChwdXNoKTpcbmdpdCBwdXNoIC11IG9yaWdpbiBtYWluYDtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAodGV4dDogc3RyaW5nLCBzZWN0aW9uS2V5OiBzdHJpbmcpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgICBzZXRDb3BpZWRTZWN0aW9uKHNlY3Rpb25LZXkpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWRTZWN0aW9uKG51bGwpLCAyNTAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZVVwbG9hZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdO1xuICAgIGlmICghZmlsZSkgcmV0dXJuO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBldmVudC50YXJnZXQ/LnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICBjb25zdCByZXMgPSBvbkltcG9ydEpTT04oY29udGVudCk7XG4gICAgICBzZXRJbXBvcnRTdGF0dXMocmVzLm1lc3NhZ2UpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJbXBvcnRTdGF0dXMobnVsbCksIDQwMDApO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZVN0b3JlU2V0dGluZ3MgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uVXBkYXRlU2V0dGluZ3Moe1xuICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICBzdG9yZU5hbWUsXG4gICAgICBwaG9uZSxcbiAgICAgIGFkZHJlc3MsXG4gICAgfSk7XG4gICAgc2V0U2V0dGluZ3NTYXZlZCh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNldHRpbmdzU2F2ZWQoZmFsc2UpLCAyMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHBiLTYgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgey8qIEV4YWN0IEdpdEh1YiAmIENvZGVtYWdpYyBNb2R1bGUgZnJvbSBTY3JlZW5zaG90ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBiZy1bIzBmMTExYV0gYm9yZGVyIGJvcmRlci13aGl0ZS8xNSBzaGFkb3ctMnhsIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy00OCBoLTQ4IGJnLWFtYmVyLTUwMC8xMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGwgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG5cbiAgICAgICAgey8qIEhlYWRlciBtYXRjaGluZyBJTUdfMDg0NSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc206cC01IGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUvWzAuMDRdIHRvLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC0yeGwgYmctd2hpdGUgdGV4dC1ibGFjayBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgc2hhZG93LW1kIHNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPVwidy02IGgtNiBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtYmFzZSBmb250LWJvbGQgdGV4dC13aGl0ZSB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgR8SwVEhVQiAmIENPREVNQUdJQy5JTyBEQcSeSVRJTUlcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IHJvdW5kZWQtbWQgYmctYW1iZXItNTAwLzIwIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzM1IHRleHQtYW1iZXItMzAwIHRleHQtWzEwcHhdIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgQlVMVVQgQ0kvQ0RcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgIFTDvG0ga2F5bmFrIGtvZGxhcsSxIHZlIENvZGVtYWdpYyBpT1MgeWFwxLFsYW5kxLFybWFzxLFuxLEgR2l0SHViIGRlcG9udXphIGFrdGFyxLFuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge29uT3Blbk1vZGFsICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuTW9kYWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMS41IHJvdW5kZWQteGwgYmctd2hpdGUvNSBob3ZlcjpiZy13aGl0ZS8xMCB0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUGVuY2VyZXlpIELDvHnDvHQgLyBNb2RhbCBPbGFyYWsgQcOnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1heGltaXplMiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiAzIFRhYnMgQmFyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTQgc206cHgtNSBib3JkZXItYiBib3JkZXItd2hpdGUvMTAgYmctYmxhY2svMjAgdGV4dC14cyBmb250LXNlbWlib2xkIGdhcC00IHNtOmdhcC02IG92ZXJmbG93LXgtYXV0byBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2FwaScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGJvcmRlci1iLTIgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdhcGknXG4gICAgICAgICAgICAgICAgPyAnYm9yZGVyLWFtYmVyLTQwMCB0ZXh0LWFtYmVyLTQwMCBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTIwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxVcGxvYWRDbG91ZCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkRvxJ9ydWRhbiBZw7xrbGUgKEFQSSk8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2dpdCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGJvcmRlci1iLTIgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdnaXQnXG4gICAgICAgICAgICAgICAgPyAnYm9yZGVyLWFtYmVyLTQwMCB0ZXh0LWFtYmVyLTQwMCBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTIwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXJtaW5hbCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkdpdCBLb211dGxhcsSxPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCd6aXAnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBib3JkZXItYi0yIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnemlwJ1xuICAgICAgICAgICAgICAgID8gJ2JvcmRlci1hbWJlci00MDAgdGV4dC1hbWJlci00MDAgZm9udC1ib2xkJ1xuICAgICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtbmV1dHJhbC0yMDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5HaXRIdWIgWklQPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVGFiIDE6IERvxJ9ydWRhbiBZw7xrbGUgKEFQSSkgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdhcGknICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpwLTUgc3BhY2UteS0zLjUgdGV4dC14c1wiPlxuICAgICAgICAgICAgey8qIEdpdEh1YiBQQVQgSW5wdXQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTIwMCB0ZXh0LVsxMXB4XVwiPlxuICAgICAgICAgICAgICAgICAgPExvY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0SHViIFBlcnNvbmFsIEFjY2VzcyBUb2tlbiAoUEFUKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NldHRpbmdzL3Rva2Vucy9uZXc/c2NvcGVzPXJlcG8mZGVzY3JpcHRpb249SGF0aXBvZ2x1K0t1eXVtY3VsdWsraU9TXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYW1iZXItNDAwIGhvdmVyOnRleHQtYW1iZXItMzAwIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtWzExcHhdIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRva2VuIE9sdcWfdHVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPEV4dGVybmFsTGluayBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXRUb2tlbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhdFRva2VuKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImdocF94eHh4eHh4eHh4eHh4eHh4eHh4eFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMuNSBweS0yLjUgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQteHMgZm9jdXM6Ym9yZGVyLWFtYmVyLTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXI6dGV4dC1uZXV0cmFsLTYwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHNtOnRleHQtWzExcHhdIHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICAgICAgICBUb2tlbmluaXogdGFyYXnEsWPEsW7EsXrEsW4geWVyZWwgaGFmxLF6YXPEsW5kYSBzYWtsYW7EsXIsIGFzbGEgc3VudWN1eWEgZ8O2bmRlcmlsbWV6LiBZYWxuxLF6Y2EgcmVwbyB5ZXRraXNpIHlldGVybGlkaXIuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUmVwbyBOYW1lICYgUHJpdmFjeSBUeXBlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTIwMCB0ZXh0LVsxMXB4XVwiPlxuICAgICAgICAgICAgICAgICAgRGVwbyAoUmVwbykgQWTEsTpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlcG9OYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBvTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImhhdGlwb2dsdS1rdXl1bWN1bHVrLWlvc1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMy41IHB5LTIgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQteHMgZm9jdXM6Ym9yZGVyLWFtYmVyLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTIwMCB0ZXh0LVsxMXB4XVwiPlxuICAgICAgICAgICAgICAgICAgR2l6bGlsaWsgVMO8csO8OlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1ByaXZhdGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS0yIHB4LTIuNSByb3VuZGVkLXhsIGJvcmRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHRleHQteHMgZm9udC1ib2xkIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAhaXNQcml2YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci00MDAgYm9yZGVyLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHNoYWRvdy1tZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWJsYWNrLzYwIGJvcmRlci13aGl0ZS8xNSB0ZXh0LW5ldXRyYWwtMzAwIGhvdmVyOmJvcmRlci13aGl0ZS8zMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxHbG9iZSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkhlcmtlc2UgQcOnxLFrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzUHJpdmF0ZSh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMiBweC0yLjUgcm91bmRlZC14bCBib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXNQcml2YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci00MDAgYm9yZGVyLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHNoYWRvdy1tZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWJsYWNrLzYwIGJvcmRlci13aGl0ZS8xNSB0ZXh0LW5ldXRyYWwtMzAwIGhvdmVyOmJvcmRlci13aGl0ZS8zMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NrIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2l6bGkgKFByaXZhdGUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb21taXQgTWVzc2FnZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC0yMDAgdGV4dC1bMTFweF1cIj5cbiAgICAgICAgICAgICAgICBDb21taXQgTWVzYWrEsTpcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21taXRNZXNzYWdlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWl0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmZWF0OiBIYXRpcG/En2x1IEt1eXVtY3VsdWsgaU9TICYgV2ViIEfDvG5jZWxsZW1lc2lcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zLjUgcHktMiByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ29kZW1hZ2ljIENJL0NEIENhcmQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IGJnLWJsYWNrLzQwIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvMTUgc3BhY2UteS0yIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LVsxMXB4XSBzbTp0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q29kZW1hZ2ljLmlvIEJ1bHV0IENJL0NEICYgQXBwbGUgQXBwIFN0b3JlIFlhcMSxbGFuZMSxcm1hc8SxPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlbWFnaWMuaW9cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDAgaG92ZXI6dGV4dC1hbWJlci0zMDAgZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1bMTFweF1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmNvZGVtYWdpYy5pbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LVsxMHB4XSB0ZXh0LW5ldXRyYWwtNDAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIGlPUyBCdW5kbGUgSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1bmRsZUlkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCdW5kbGVJZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvbS5oYXRpcG9nbHUuZ29sZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQteHMgZm9jdXM6Ym9yZGVyLWFtYmVyLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHNtOnRleHQtWzExcHhdIHRleHQtbmV1dHJhbC0zMDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgRGVwb251enVuIGvDtmsgZGl6aW5pbmUgb3RvbWF0aWsgb2xhcmFrIDxjb2RlIGNsYXNzTmFtZT1cInRleHQtYW1iZXItMzAwIGZvbnQtbW9ubyBiZy13aGl0ZS81IHB4LTEgcHktMC41IHJvdW5kZWRcIj5jb2RlbWFnaWMueWFtbDwvY29kZT4gZWtsZW5pci4gR2l0SHViJ2EgYWt0YXLEsWxkxLFrdGFuIHNvbnJhIENvZGVtYWdpYy5pbydkYSBwcm9qZW5pemkgYmHEn2xhecSxcCBNYWMgTWluaSBNMiBidWx1dCBtYWtpbmVsZXJpbmRlIGRvxJ9ydWRhbiBBcHBsZSBBcHAgU3RvcmUgLyBUZXN0RmxpZ2h0IGnDp2luIC5JUEEgZGVybGVtZXNpIGFsYWJpbGlyc2luaXouXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogVXBsb2FkIFByb2dyZXNzIGZlZWRiYWNrICovfVxuICAgICAgICAgICAge3Byb2dyZXNzLnN0ZXAgIT09ICdpZGxlJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMgcm91bmRlZC0yeGwgYm9yZGVyICR7XG4gICAgICAgICAgICAgICAgICBwcm9ncmVzcy5zdGVwID09PSAnY29tcGxldGUnXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWVtZXJhbGQtNTAwLzE1IGJvcmRlci1lbWVyYWxkLTUwMC8zMCB0ZXh0LWVtZXJhbGQtMzAwJ1xuICAgICAgICAgICAgICAgICAgICA6IHByb2dyZXNzLnN0ZXAgPT09ICdlcnJvcidcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctcm9zZS01MDAvMTUgYm9yZGVyLXJvc2UtNTAwLzMwIHRleHQtcm9zZS0zMDAnXG4gICAgICAgICAgICAgICAgICAgIDogJ2JnLWFtYmVyLTUwMC8xNSBib3JkZXItYW1iZXItNTAwLzMwIHRleHQtYW1iZXItMzAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAge3Byb2dyZXNzLnN0ZXAgPT09ICdjb21wbGV0ZScgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy00IGgtNCBzaHJpbmstMCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICkgOiBwcm9ncmVzcy5zdGVwID09PSAnZXJyb3InID8gKFxuICAgICAgICAgICAgICAgICAgICA8U2hpZWxkQWxlcnQgY2xhc3NOYW1lPVwidy00IGgtNCBzaHJpbmstMCB0ZXh0LXJvc2UtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctNCBoLTQgc2hyaW5rLTAgYW5pbWF0ZS1zcGluIHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWzExcHhdXCI+e3Byb2dyZXNzLm1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3Byb2dyZXNzLnRvdGFsICYmIHByb2dyZXNzLmN1cnJlbnQgJiYgcHJvZ3Jlc3Muc3RlcCA9PT0gJ3VwbG9hZGluZycgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzQwIGgtMS41IHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1hbWJlci00MDAgaC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KHByb2dyZXNzLmN1cnJlbnQgLyBwcm9ncmVzcy50b3RhbCkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtwcm9ncmVzcy5zdGVwID09PSAnY29tcGxldGUnICYmIHByb2dyZXNzLnJlcG9VcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yLjUgcHQtMi41IGJvcmRlci10IGJvcmRlci1lbWVyYWxkLTUwMC8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvZ3Jlc3MucmVwb1VybH1cbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHJvdW5kZWQteGwgYmctZW1lcmFsZC01MDAgdGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC14cyBzaGFkb3cgaG92ZXI6YmctZW1lcmFsZC00MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HaXRIdWIgRGVwb251enUgQcOnxLFuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlbWFnaWMuaW8vYXBwc1wiXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcHgtMyBweS0xLjUgcm91bmRlZC14bCBiZy13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC14cyBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29kZW1hZ2ljJ3RlIElQQSBEZXJsZXlpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7LyogQWN0aW9uIEJ1dHRvbiAqL31cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURpcmVjdFVwbG9hZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2dyZXNzLnN0ZXAgPT09ICd2YWxpZGF0aW5nJyB8fCBwcm9ncmVzcy5zdGVwID09PSAnY3JlYXRpbmdfcmVwbycgfHwgcHJvZ3Jlc3Muc3RlcCA9PT0gJ3VwbG9hZGluZyd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIHB4LTQgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTQwMCB2aWEtYW1iZXItNTAwIHRvLWFtYmVyLTQwMCBob3Zlcjpmcm9tLWFtYmVyLTMwMCBob3Zlcjp0by1hbWJlci00MDAgdGV4dC1ibGFjayBmb250LWV4dHJhYm9sZCB0ZXh0LXhzIHNtOnRleHQtc20gc2hhZG93LXhsIHNoYWRvdy1hbWJlci01MDAvMTUgdHJhbnNpdGlvbiBhY3RpdmU6c2NhbGUtWzAuOThdIGRpc2FibGVkOm9wYWNpdHktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvZ3Jlc3Muc3RlcCA9PT0gJ3ZhbGlkYXRpbmcnIHx8IHByb2dyZXNzLnN0ZXAgPT09ICdjcmVhdGluZ19yZXBvJyB8fCBwcm9ncmVzcy5zdGVwID09PSAndXBsb2FkaW5nJyA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwidy00IGgtNCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0SHViJ2EgWcO8a2xlbml5b3IuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxVcGxvYWRDbG91ZCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkRvxJ9ydWRhbiBHaXRIdWInYSBZw7xrbGUgdmUgRGVwb3l1IE9sdcWfdHVyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRhYiAyOiBHaXQgS29tdXRsYXLEsSAqL31cbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2dpdCcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOnAtNSBzcGFjZS15LTMgdGV4dC14c1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTMwMCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bMTFweF1cIj5cbiAgICAgICAgICAgICAgVGVybWluYWwgw7x6ZXJpbmRlbiBwcm9qZW5pemkgdmUgPGNvZGUgY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDBcIj5jb2RlbWFnaWMueWFtbDwvY29kZT4gZG9zeWFzxLFuxLEgR2l0SHViJ2EgZ8O2bmRlcm1layBpw6dpbiBidSBrb211dGxhcsSxIGt1bGxhbmFiaWxpcnNpbml6OlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC0yeGwgYmctbmV1dHJhbC05NTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtMjAwIGZvbnQtbW9ubyBvdmVyZmxvdy14LWF1dG8gbm8tc2Nyb2xsYmFyXCI+XG4gICAgICAgICAgICAgICAge2dpdENsaVNjcmlwdH1cbiAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQoZ2l0Q2xpU2NyaXB0LCAnZ2l0LWFsbCcpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yLjUgcmlnaHQtMi41IHB4LTIuNSBweS0xIHJvdW5kZWQtbGcgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHRleHQtWzEwcHhdIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBzaGFkb3cgY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3BpZWRTZWN0aW9uID09PSAnZ2l0LWFsbCcgPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPktvcHlhbGFuZMSxPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxDb3B5IGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Lb211dGxhcsSxIEtvcHlhbGE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy1ibGFjay80MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q29kZW1hZ2ljJ3RlIElQQSBEZXJsZW1lIEFkxLFtbGFyxLE6PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+MS4gQ29kZW1hZ2ljLmlvIGhlc2FixLFuxLF6YSBnaXJpcCBkZXBvbnV6dSBiYcSfbGF5xLFuLjwvcD5cbiAgICAgICAgICAgICAgPHA+Mi4gXCJTdGFydCBuZXcgYnVpbGRcIiBidXRvbnVuYSBiYXNhcmFrIE1hYyBNaW5pIE0yIGJ1bHV0dW5kYSBJUEEgcGFrZXRpbmkgb2x1xZ90dXJ1bi48L3A+XG4gICAgICAgICAgICAgIDxwPjMuIERlcmxlbWUgdGFtYW1sYW5kxLHEn8SxbmRhIHNhxJ9kYWtpIEVzZXJsZXIgKEFydGlmYWN0cykgc2VrbWVzaW5kZW4gZG/En3J1ZGFuIDxzdHJvbmc+SGF0aXBvZ2x1R29sZC5pcGE8L3N0cm9uZz4gZG9zeWFuxLF6xLEgaW5kaXJpbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogVGFiIDM6IEdpdEh1YiBaSVAgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICd6aXAnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSB0ZXh0LWNlbnRlciBzcGFjZS15LTMgdGV4dC14c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC0yeGwgYmctYW1iZXItNTAwLzIwIHRleHQtYW1iZXItNDAwIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgVMO8bSBQcm9qZXlpIFpJUCBPbGFyYWsgxLBuZGlyaW5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBtYXgtdy1zbSBteC1hdXRvIG10LTFcIj5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTMwMFwiPmNvZGVtYWdpYy55YW1sPC9jb2RlPiwgaU9TIHlhcMSxbGFuZMSxcm1hc8SxIHZlIGtheW5hayBrb2RsYXLEsW4gdGFtYW3EsW7EsSB0ZWsgdMSxa2xhIGluZGlyaW4uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkWmlwfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEb3dubG9hZGluZ1ppcH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMi41IHB4LTUgcm91bmRlZC14bCBiZy1hbWJlci01MDAgaG92ZXI6YmctYW1iZXItNDAwIHRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQteHMgc2hhZG93LWxnIHRyYW5zaXRpb24gYWN0aXZlOnNjYWxlLTk1IGRpc2FibGVkOm9wYWNpdHktNTAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzRG93bmxvYWRpbmdaaXAgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctMy41IGgtMy41IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5QYWtldGxlbml5b3IuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5oYXRpcG9nbHUta3V5dW1jdWx1ay1pb3MuemlwIMSwbmRpcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yLjUgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwIGJnLWJsYWNrLzQwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgIDxzcGFuPkhhdGlwb8SfbHUgS3V5dW1jdWx1ayB2MS4wLjA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDAvODBcIj5pT1MgJiBXZWIgQnVsdXQgRGHEn8SxdMSxbcSxPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQmFja3VwICYgUmVzdG9yZSAoSlNPTikgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJnLVsjMTMxNDFlXSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHAtNSBzaGFkb3ctbGcgc3BhY2UteS0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgIDxzcGFuPlZlcml0YWJhbsSxICYgS3V5dW1jdSBWZXJpc2kgWWVkZWtsZW1lPC9zcGFuPlxuICAgICAgICA8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICBUw7xtIHN0b2sgZW52YW50ZXJpbml6aSwgbcO8xZ90ZXJpIGNhcmkgYm9yw6dsYXLEsW7EsSwgZW1hbmV0IGFsdMSxbiBrYXnEsXRsYXLEsW7EsSB2ZSBmacWfbGVyaW5pemkgdGVrIHTEsWtsYSBkb3N5YSBvbGFyYWsgeWVkZWtsZXlpbi5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHtpbXBvcnRTdGF0dXMgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjUgcm91bmRlZC14bCBiZy1hbWJlci01MDAvMjAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAgdGV4dC1hbWJlci0zMDAgdGV4dC14cyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPFNoaWVsZENoZWNrIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPHNwYW4+e2ltcG9ydFN0YXR1c308L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yLjUgcHQtMVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uRXhwb3J0SlNPTn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIuNSBweC0zIHJvdW5kZWQteGwgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHRleHQteHMgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgc2hhZG93LW1kIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTk1XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5KU09OIFllZGVrIMSwbmRpcjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJweS0yLjUgcHgtMyByb3VuZGVkLXhsIGJnLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzE1IHRleHQtd2hpdGUgdGV4dC14cyBmb250LXNlbWlib2xkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGFjdGl2ZTpzY2FsZS05NSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPFVwbG9hZCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPlllZGVrIFnDvGtsZTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIGFjY2VwdD1cIi5qc29uXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTdG9yZSBJbmZvcm1hdGlvbiBGb3JtICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBiZy1bIzEzMTQxZV0gYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBwLTUgc2hhZG93LWxnIHNwYWNlLXktM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxTdG9yZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICA8c3Bhbj5LdXl1bWN1IE1hxJ9hemEgQmlsZ2lsZXJpPC9zcGFuPlxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTYXZlU3RvcmVTZXR0aW5nc30gY2xhc3NOYW1lPVwic3BhY2UteS0zIHRleHQteHNcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbmV1dHJhbC00MDAgbWItMVwiPk1hxJ9hemEgVW52YW7EsTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17c3RvcmVOYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdG9yZU5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbmV1dHJhbC00MDAgbWItMVwiPlRlbGVmb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLWFtYmVyLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uZXV0cmFsLTQwMCBtYi0xXCI+QWRyZXM8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFkZHJlc3MoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgcm91bmRlZC14bCBiZy1hbWJlci01MDAgaG92ZXI6YmctYW1iZXItNDAwIHRleHQtYmxhY2sgdGV4dC14cyBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2V0dGluZ3NTYXZlZCA/ICdLYXlkZWRpbGRpIOKckycgOiAnQmlsZ2lsZXJpIEfDvG5jZWxsZSd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdUw7xtIHZlcmlsZXIgZmFicmlrYSBheWFybGFyxLFuYSBzxLFmxLFybGFuYWNha3TEsXIuIEVtaW4gbWlzaW5pej8nKSkge1xuICAgICAgICAgICAgICAgICAgb25SZXNldERhdGEoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC01MDAgaG92ZXI6dGV4dC1yb3NlLTQwMCB0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlZnJlc2hDY3cgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPlZlcmlsZXJpIFPEsWbEsXJsYTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQXNLUSxTQWlSUSxVQWpSUjtBQXRLUixTQUFnQixVQUFVLGlCQUFpQjtBQUMzQztBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBRVAsU0FBUyxzQkFBc0IsMEJBQWdEO0FBYXhFLGFBQU0sbUJBQW9ELENBQUM7QUFBQSxFQUNoRTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsTUFBTTtBQUNKLFFBQU0sQ0FBQyxXQUFXLFlBQVksSUFBSSxTQUFrQixLQUFLO0FBR3pELFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSSxTQUFpQixNQUFNO0FBQ3JELFdBQU8sYUFBYSxRQUFRLHNCQUFzQixLQUFLO0FBQUEsRUFDekQsQ0FBQztBQUNELFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSSxTQUFpQixNQUFNO0FBQ3JELFdBQU8sYUFBYSxRQUFRLHVCQUF1QixLQUFL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