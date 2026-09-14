import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=31eaf37e"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=31eaf37e"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import {
  Github,
  X,
  Lock,
  ExternalLink,
  Sparkles,
  Terminal,
  Download,
  UploadCloud,
  Check,
  Copy,
  Globe,
  ShieldAlert,
  CheckCircle2,
  Loader2,
  ArrowRight
} from "/node_modules/.vite/deps/lucide-react.js?v=a00c8ebd";
import { uploadToGithubDirect, downloadProjectZip } from "/src/utils/githubService.ts";
export const GithubCodemagicModal = ({
  isOpen,
  onClose
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
  const [copiedCommands, setCopiedCommands] = useState(false);
  const [isDownloadingZip, setIsDownloadingZip] = useState(false);
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
  if (!isOpen) return null;
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
  const gitCliScript = `# 1. Proje dizininde git deposunu başlatın ve dosyaları ekleyin:
git init
git add .
git commit -m "${commitMessage || "feat: Hatipoğlu Kuyumculuk iOS & Web Güncellemesi"}"

# 2. Ana dalı belirleyin:
git branch -M main

# 3. GitHub uzak deponuzu bağlayın:
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/KULLANICI_ADINIZ/${repoName || "hatipoglu-kuyumculuk-ios"}.git

# 4. GitHub'a gönderin (Push):
git push -u origin main`;
  const copyCliCommands = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(gitCliScript);
      setCopiedCommands(true);
      setTimeout(() => setCopiedCommands(false), 2500);
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      id: "github-codemagic-overlay",
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200",
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          id: "github-codemagic-dialog",
          className: "w-full max-w-2xl bg-[#0f111a] border border-white/15 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col text-neutral-200 my-auto",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 sm:p-6 pb-4 border-b border-white/10 flex items-start justify-between relative bg-gradient-to-b from-white/[0.04] to-transparent", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3.5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-bold shadow-md shrink-0", children: /* @__PURE__ */ jsxDEV(Github, { className: "w-6 h-6 fill-current" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 136,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 135,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxDEV("h2", { className: "text-base sm:text-lg font-bold text-white tracking-tight", children: "GİTHUB & CODEMAGIC.IO DAĞITIMI" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 140,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/35 text-amber-300 text-[10px] font-extrabold tracking-wider uppercase", children: "BULUT CI/CD" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 143,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 139,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-400 mt-0.5", children: "Tüm kaynak kodları ve Codemagic iOS yapılandırmasını GitHub deponuza aktarın" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 147,
                    columnNumber: 15
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 138,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                lineNumber: 134,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  id: "close-github-modal-btn",
                  onClick: onClose,
                  className: "p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer",
                  title: "Kapat",
                  children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 159,
                    columnNumber: 13
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 153,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
              lineNumber: 133,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center px-6 border-b border-white/10 bg-black/20 text-xs font-semibold gap-6", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  id: "tab-direct-api",
                  onClick: () => setActiveTab("api"),
                  className: `py-3 flex items-center gap-2 border-b-2 transition cursor-pointer ${activeTab === "api" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-neutral-400 hover:text-neutral-200"}`,
                  children: [
                    /* @__PURE__ */ jsxDEV(UploadCloud, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 174,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "Doğrudan Yükle (API)" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 175,
                      columnNumber: 13
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 165,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  id: "tab-git-cli",
                  onClick: () => setActiveTab("git"),
                  className: `py-3 flex items-center gap-2 border-b-2 transition cursor-pointer ${activeTab === "git" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-neutral-400 hover:text-neutral-200"}`,
                  children: [
                    /* @__PURE__ */ jsxDEV(Terminal, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 187,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "Git Komutları" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 188,
                      columnNumber: 13
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 178,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  id: "tab-github-zip",
                  onClick: () => setActiveTab("zip"),
                  className: `py-3 flex items-center gap-2 border-b-2 transition cursor-pointer ${activeTab === "zip" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-neutral-400 hover:text-neutral-200"}`,
                  children: [
                    /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 200,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "GitHub ZIP" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 201,
                      columnNumber: 13
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 191,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
              lineNumber: 164,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-5 sm:p-6 space-y-4 max-h-[72vh] overflow-y-auto no-scrollbar text-xs", children: [
              activeTab === "api" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "flex items-center gap-1.5 font-semibold text-neutral-200", children: [
                      /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 213,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "GitHub Personal Access Token (PAT)" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 214,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 212,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "a",
                      {
                        href: "https://github.com/settings/tokens/new?scopes=repo&description=Hatipoglu+Kuyumculuk+iOS",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition",
                        children: [
                          /* @__PURE__ */ jsxDEV("span", { children: "Token Oluştur" }, void 0, false, {
                            fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                            lineNumber: 222,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ jsxDEV(ExternalLink, { className: "w-3 h-3" }, void 0, false, {
                            fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                            lineNumber: 223,
                            columnNumber: 21
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 216,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 211,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      id: "github-pat-input",
                      type: "password",
                      value: patToken,
                      onChange: (e) => setPatToken(e.target.value),
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      className: "w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-amber-400 focus:outline-none placeholder:text-neutral-600"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 226,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-400", children: "Tokeniniz tarayıcınızın yerel hafızasında saklanır, asla sunucuya gönderilmez. Yalnızca repo yetkisi yeterlidir." }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 234,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 210,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "block font-semibold text-neutral-200", children: "Depo (Repo) Adı:" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 242,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        id: "github-repo-name-input",
                        type: "text",
                        value: repoName,
                        onChange: (e) => setRepoName(e.target.value),
                        placeholder: "hatipoglu-kuyumculuk-ios",
                        className: "w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 245,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 241,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "block font-semibold text-neutral-200", children: "Gizlilik Türü:" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 256,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          type: "button",
                          onClick: () => setIsPrivate(false),
                          className: `py-2.5 px-3 rounded-xl border flex items-center justify-center gap-1.5 font-bold transition cursor-pointer ${!isPrivate ? "bg-amber-400 border-amber-400 text-black shadow-md" : "bg-black/60 border-white/15 text-neutral-300 hover:border-white/30"}`,
                          children: [
                            /* @__PURE__ */ jsxDEV(Globe, { className: "w-3.5 h-3.5" }, void 0, false, {
                              fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                              lineNumber: 269,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { children: "Herkese Açık" }, void 0, false, {
                              fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                              lineNumber: 270,
                              columnNumber: 23
                            }, this)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 260,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          type: "button",
                          onClick: () => setIsPrivate(true),
                          className: `py-2.5 px-3 rounded-xl border flex items-center justify-center gap-1.5 font-bold transition cursor-pointer ${isPrivate ? "bg-amber-400 border-amber-400 text-black shadow-md" : "bg-black/60 border-white/15 text-neutral-300 hover:border-white/30"}`,
                          children: [
                            /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5" }, void 0, false, {
                              fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                              lineNumber: 282,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { children: "Gizli (Private)" }, void 0, false, {
                              fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                              lineNumber: 283,
                              columnNumber: 23
                            }, this)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 273,
                          columnNumber: 21
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 259,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 255,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 240,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxDEV("label", { className: "block font-semibold text-neutral-200", children: "Commit Mesajı:" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 291,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      id: "github-commit-message-input",
                      type: "text",
                      value: commitMessage,
                      onChange: (e) => setCommitMessage(e.target.value),
                      placeholder: "feat: Hatipoğlu Kuyumculuk iOS & Web Güncellemesi",
                      className: "w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-amber-400 focus:outline-none"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 294,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 290,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-black/40 rounded-2xl border border-white/15 space-y-2.5 relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-white font-bold", children: [
                      /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 308,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "Codemagic.io Bulut CI/CD & Apple App Store Yapılandırması" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 309,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 307,
                      columnNumber: 19
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
                            fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                            lineNumber: 317,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ jsxDEV(ExternalLink, { className: "w-3 h-3" }, void 0, false, {
                            fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                            lineNumber: 318,
                            columnNumber: 21
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 311,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 306,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "block text-[11px] text-neutral-400 mb-1", children: "iOS Bundle Identifier:" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 323,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        id: "ios-bundle-id-input",
                        type: "text",
                        value: bundleId,
                        onChange: (e) => setBundleId(e.target.value),
                        placeholder: "com.hatipoglu.gold",
                        className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 326,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 322,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-neutral-300 leading-relaxed", children: [
                    "Deponuzun kök dizinine otomatik olarak ",
                    /* @__PURE__ */ jsxDEV("code", { className: "text-amber-300 font-mono bg-white/5 px-1 py-0.5 rounded", children: "codemagic.yaml" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 337,
                      columnNumber: 58
                    }, this),
                    " eklenir. GitHub'a aktarıldıktan sonra Codemagic.io'da projenizi bağlayıp Mac Mini M2 bulut makinelerinde doğrudan Apple App Store / TestFlight için .IPA derlemesi alabilirsiniz."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 336,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 305,
                  columnNumber: 15
                }, this),
                progress.step !== "idle" && /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `p-3.5 rounded-2xl border ${progress.step === "complete" ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" : progress.step === "error" ? "bg-rose-500/15 border-rose-500/30 text-rose-300" : "bg-amber-500/15 border-amber-500/30 text-amber-300"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                        progress.step === "complete" ? /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 shrink-0 text-emerald-400" }, void 0, false, {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 354,
                          columnNumber: 23
                        }, this) : progress.step === "error" ? /* @__PURE__ */ jsxDEV(ShieldAlert, { className: "w-4 h-4 shrink-0 text-rose-400" }, void 0, false, {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 356,
                          columnNumber: 23
                        }, this) : /* @__PURE__ */ jsxDEV(Loader2, { className: "w-4 h-4 shrink-0 animate-spin text-amber-400" }, void 0, false, {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 358,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-xs", children: progress.message }, void 0, false, {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 360,
                          columnNumber: 21
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 352,
                        columnNumber: 19
                      }, this),
                      progress.total && progress.current && progress.step === "uploading" && /* @__PURE__ */ jsxDEV("div", { className: "mt-2.5", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-black/40 h-2 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV(
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
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 367,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 366,
                        columnNumber: 23
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 365,
                        columnNumber: 21
                      }, this),
                      progress.step === "complete" && progress.repoUrl && /* @__PURE__ */ jsxDEV("div", { className: "mt-3 pt-3 border-t border-emerald-500/20 flex items-center justify-between flex-wrap gap-2", children: [
                        /* @__PURE__ */ jsxDEV(
                          "a",
                          {
                            href: progress.repoUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 text-black font-bold text-xs shadow hover:bg-emerald-400 transition",
                            children: [
                              /* @__PURE__ */ jsxDEV("span", { children: "GitHub Deponuzu Görüntüleyin" }, void 0, false, {
                                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                                lineNumber: 386,
                                columnNumber: 25
                              }, this),
                              /* @__PURE__ */ jsxDEV(ExternalLink, { className: "w-3.5 h-3.5" }, void 0, false, {
                                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                                lineNumber: 387,
                                columnNumber: 25
                              }, this)
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                            lineNumber: 380,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV(
                          "a",
                          {
                            href: "https://codemagic.io/apps",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition",
                            children: [
                              /* @__PURE__ */ jsxDEV("span", { children: "Codemagic'te IPA Derleyin" }, void 0, false, {
                                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                                lineNumber: 396,
                                columnNumber: 25
                              }, this),
                              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                                lineNumber: 397,
                                columnNumber: 25
                              }, this)
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                            lineNumber: 390,
                            columnNumber: 23
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 379,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 343,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    id: "start-github-upload-btn",
                    type: "button",
                    onClick: handleDirectUpload,
                    disabled: progress.step === "validating" || progress.step === "creating_repo" || progress.step === "uploading",
                    className: "w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-sm shadow-xl shadow-amber-500/15 transition active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
                    children: progress.step === "validating" || progress.step === "creating_repo" || progress.step === "uploading" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV(Loader2, { className: "w-4 h-4 animate-spin" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 414,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "GitHub'a Yükleniyor..." }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 415,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 413,
                      columnNumber: 19
                    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV(UploadCloud, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 419,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "Doğrudan GitHub'a Yükle ve Depoyu Oluştur" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 420,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 418,
                      columnNumber: 19
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 405,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                lineNumber: 208,
                columnNumber: 13
              }, this),
              activeTab === "git" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-3.5", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-neutral-300 leading-relaxed", children: [
                  "Kendi bilgisayarınızın terminalinde aşağıdaki komutları çalıştırarak tüm projeyi ve ",
                  /* @__PURE__ */ jsxDEV("code", { className: "text-amber-400 font-mono", children: "codemagic.yaml" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 430,
                    columnNumber: 101
                  }, this),
                  " dosyasını GitHub deponuza anında gönderebilirsiniz:"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 429,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxDEV("pre", { className: "p-4 rounded-2xl bg-neutral-950 border border-white/15 text-[11px] text-neutral-200 font-mono overflow-x-auto no-scrollbar leading-relaxed", children: gitCliScript }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 434,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: copyCliCommands,
                      className: "absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center gap-1.5 shadow transition cursor-pointer active:scale-95",
                      children: copiedCommands ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                        /* @__PURE__ */ jsxDEV(Check, { className: "w-3.5 h-3.5" }, void 0, false, {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 443,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { children: "Kopyalandı" }, void 0, false, {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 444,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 442,
                        columnNumber: 21
                      }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                        /* @__PURE__ */ jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 448,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { children: "Tümünü Kopyala" }, void 0, false, {
                          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                          lineNumber: 449,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 447,
                        columnNumber: 21
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 437,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 433,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "p-3.5 bg-black/40 rounded-2xl border border-white/10 space-y-1.5", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "font-bold text-white flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 457,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "Push İşleminden Sonra Ne Yapmalısınız?" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 458,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 456,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("ol", { className: "list-decimal list-inside space-y-1 text-neutral-400 text-[11px]", children: [
                    /* @__PURE__ */ jsxDEV("li", { children: "Codemagic.io hesabınıza gidin." }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 461,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("li", { children: [
                      "Yeni oluşturduğunuz ",
                      /* @__PURE__ */ jsxDEV("strong", { children: repoName }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 462,
                        columnNumber: 43
                      }, this),
                      " reposunu seçin."
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 462,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("li", { children: [
                      /* @__PURE__ */ jsxDEV("strong", { children: '"Start new build"' }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 463,
                        columnNumber: 23
                      }, this),
                      " butonuna tıklayarak iOS IPA derlemesini başlatın."
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 463,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("li", { children: [
                      "Derleme bittiğinde Eserler (Artifacts) sekmesinden ",
                      /* @__PURE__ */ jsxDEV("strong", { children: "HatipogluGold.ipa" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 464,
                        columnNumber: 74
                      }, this),
                      " dosyasını indirin."
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 464,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 460,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 455,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                lineNumber: 428,
                columnNumber: 13
              }, this),
              activeTab === "zip" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-center py-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 rounded-3xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto shadow-lg", children: /* @__PURE__ */ jsxDEV(Download, { className: "w-7 h-7" }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 473,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 472,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-white", children: "Tam Proje Kodlarını ZIP Olarak İndirin" }, void 0, false, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 477,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-neutral-400 max-w-md mx-auto mt-1 leading-relaxed", children: [
                    "Tüm kaynak kodlar, ",
                    /* @__PURE__ */ jsxDEV("code", { className: "text-amber-400", children: "codemagic.yaml" }, void 0, false, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 481,
                      columnNumber: 38
                    }, this),
                    ", iOS yapılandırması ve PWA dosyaları tek bir arşivde hazırlanır."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 480,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 476,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: handleDownloadZip,
                    disabled: isDownloadingZip,
                    className: "py-3 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg transition active:scale-95 disabled:opacity-50 inline-flex items-center gap-2 cursor-pointer mx-auto",
                    children: isDownloadingZip ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV(Loader2, { className: "w-4 h-4 animate-spin" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 492,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "ZIP Paketleniyor..." }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 493,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 491,
                      columnNumber: 19
                    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 497,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "hatipoglu-kuyumculuk-ios.zip İndir" }, void 0, false, {
                        fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                        lineNumber: 498,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                      lineNumber: 496,
                      columnNumber: 19
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                    lineNumber: 485,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                lineNumber: 471,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
              lineNumber: 206,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:px-6 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs text-neutral-400", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-[11px]", children: "Hatipoğlu Kuyumculuk v1.0.0" }, void 0, false, {
                fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                lineNumber: 508,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: onClose,
                  className: "px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition cursor-pointer",
                  children: "Kapat"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
                  lineNumber: 509,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
              lineNumber: 507,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
          lineNumber: 128,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/github/GithubCodemagicModal.tsx?raw=1789374318218",
      lineNumber: 124,
      columnNumber: 5
    },
    this
  );
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdpdGh1YkNvZGVtYWdpY01vZGFsLnRzeD9yYXc9MTc4OTM3NDMxODIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFxuICBHaXRodWIsIFxuICBYLCBcbiAgTG9jaywgXG4gIEV4dGVybmFsTGluaywgXG4gIFNwYXJrbGVzLCBcbiAgVGVybWluYWwsIFxuICBEb3dubG9hZCwgXG4gIFVwbG9hZENsb3VkLCBcbiAgQ2hlY2ssIFxuICBDb3B5LCBcbiAgR2xvYmUsIFxuICBTaGllbGRBbGVydCwgXG4gIENoZWNrQ2lyY2xlMiwgXG4gIExvYWRlcjIsIFxuICBBcnJvd1JpZ2h0LFxuICBDb2RlMlxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgdXBsb2FkVG9HaXRodWJEaXJlY3QsIGRvd25sb2FkUHJvamVjdFppcCwgR2l0aHViVXBsb2FkUHJvZ3Jlc3MgfSBmcm9tICcuLi8uLi91dGlscy9naXRodWJTZXJ2aWNlJztcblxuaW50ZXJmYWNlIEdpdGh1YkNvZGVtYWdpY01vZGFsUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbnR5cGUgVGFiVHlwZSA9ICdhcGknIHwgJ2dpdCcgfCAnemlwJztcblxuZXhwb3J0IGNvbnN0IEdpdGh1YkNvZGVtYWdpY01vZGFsOiBSZWFjdC5GQzxHaXRodWJDb2RlbWFnaWNNb2RhbFByb3BzPiA9ICh7XG4gIGlzT3BlbixcbiAgb25DbG9zZSxcbn0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPFRhYlR5cGU+KCdhcGknKTtcblxuICAvLyBGb3JtIHN0YXRlcyB3aXRoIGxvY2FsU3RvcmFnZSBwZXJzaXN0ZW5jZVxuICBjb25zdCBbcGF0VG9rZW4sIHNldFBhdFRva2VuXSA9IHVzZVN0YXRlPHN0cmluZz4oKCkgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGF0aXBvZ2x1X2dpdGh1Yl9wYXQnKSB8fCAnJztcbiAgfSk7XG4gIGNvbnN0IFtyZXBvTmFtZSwgc2V0UmVwb05hbWVdID0gdXNlU3RhdGU8c3RyaW5nPigoKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYXRpcG9nbHVfZ2l0aHViX3JlcG8nKSB8fCAnaGF0aXBvZ2x1LWt1eXVtY3VsdWstaW9zJztcbiAgfSk7XG4gIGNvbnN0IFtpc1ByaXZhdGUsIHNldElzUHJpdmF0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb21taXRNZXNzYWdlLCBzZXRDb21taXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgJ2ZlYXQ6IEhhdGlwb8SfbHUgS3V5dW1jdWx1ayBpT1MgJiBXZWIgR8O8bmNlbGxlbWVzaSdcbiAgKTtcbiAgY29uc3QgW2J1bmRsZUlkLCBzZXRCdW5kbGVJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdjb20uaGF0aXBvZ2x1LmdvbGQnKTtcblxuICAvLyBVcGxvYWQgc3RhdHVzIHN0YXRlc1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlPEdpdGh1YlVwbG9hZFByb2dyZXNzPih7XG4gICAgc3RlcDogJ2lkbGUnLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9KTtcbiAgY29uc3QgW2NvcGllZENvbW1hbmRzLCBzZXRDb3BpZWRDb21tYW5kc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Rvd25sb2FkaW5nWmlwLCBzZXRJc0Rvd25sb2FkaW5nWmlwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBTeW5jIHRva2VuIHRvIGxvY2FsIHN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGF0VG9rZW4pIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYXRpcG9nbHVfZ2l0aHViX3BhdCcsIHBhdFRva2VuKTtcbiAgICB9XG4gIH0sIFtwYXRUb2tlbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlcG9OYW1lKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGF0aXBvZ2x1X2dpdGh1Yl9yZXBvJywgcmVwb05hbWUpO1xuICAgIH1cbiAgfSwgW3JlcG9OYW1lXSk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGhhbmRsZURpcmVjdFVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXBhdFRva2VuLnRyaW0oKSkge1xuICAgICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgICBzdGVwOiAnZXJyb3InLFxuICAgICAgICBtZXNzYWdlOiAnTMO8dGZlbiBHaXRIdWIgUGVyc29uYWwgQWNjZXNzIFRva2VuIChQQVQpIGdpcmluaXouJyxcbiAgICAgICAgZXJyb3I6ICdUb2tlbiBla3NpaycsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCB1cGxvYWRUb0dpdGh1YkRpcmVjdChcbiAgICAgIHBhdFRva2VuLFxuICAgICAgcmVwb05hbWUudHJpbSgpIHx8ICdoYXRpcG9nbHUta3V5dW1jdWx1ay1pb3MnLFxuICAgICAgaXNQcml2YXRlLFxuICAgICAgY29tbWl0TWVzc2FnZS50cmltKCksXG4gICAgICBidW5kbGVJZC50cmltKCkgfHwgJ2NvbS5oYXRpcG9nbHUuZ29sZCcsXG4gICAgICAocCkgPT4gc2V0UHJvZ3Jlc3MocClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkWmlwID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzRG93bmxvYWRpbmdaaXAodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRvd25sb2FkUHJvamVjdFppcChidW5kbGVJZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzRG93bmxvYWRpbmdaaXAoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnaXRDbGlTY3JpcHQgPSBgIyAxLiBQcm9qZSBkaXppbmluZGUgZ2l0IGRlcG9zdW51IGJhxZ9sYXTEsW4gdmUgZG9zeWFsYXLEsSBla2xleWluOlxuZ2l0IGluaXRcbmdpdCBhZGQgLlxuZ2l0IGNvbW1pdCAtbSBcIiR7Y29tbWl0TWVzc2FnZSB8fCAnZmVhdDogSGF0aXBvxJ9sdSBLdXl1bWN1bHVrIGlPUyAmIFdlYiBHw7xuY2VsbGVtZXNpJ31cIlxuXG4jIDIuIEFuYSBkYWzEsSBiZWxpcmxleWluOlxuZ2l0IGJyYW5jaCAtTSBtYWluXG5cbiMgMy4gR2l0SHViIHV6YWsgZGVwb251enUgYmHEn2xhecSxbjpcbmdpdCByZW1vdGUgcmVtb3ZlIG9yaWdpbiAyPi9kZXYvbnVsbCB8fCB0cnVlXG5naXQgcmVtb3RlIGFkZCBvcmlnaW4gaHR0cHM6Ly9naXRodWIuY29tL0tVTExBTklDSV9BRElOSVovJHtyZXBvTmFtZSB8fCAnaGF0aXBvZ2x1LWt1eXVtY3VsdWstaW9zJ30uZ2l0XG5cbiMgNC4gR2l0SHViJ2EgZ8O2bmRlcmluIChQdXNoKTpcbmdpdCBwdXNoIC11IG9yaWdpbiBtYWluYDtcblxuICBjb25zdCBjb3B5Q2xpQ29tbWFuZHMgPSAoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQpIHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGdpdENsaVNjcmlwdCk7XG4gICAgICBzZXRDb3BpZWRDb21tYW5kcyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkQ29tbWFuZHMoZmFsc2UpLCAyNTAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IFxuICAgICAgaWQ9XCJnaXRodWItY29kZW1hZ2ljLW92ZXJsYXlcIlxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzg1IGJhY2tkcm9wLWJsdXItbWQgcC0zIHNtOnAtNCBvdmVyZmxvdy15LWF1dG8gYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgPlxuICAgICAgPGRpdiBcbiAgICAgICAgaWQ9XCJnaXRodWItY29kZW1hZ2ljLWRpYWxvZ1wiXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgYmctWyMwZjExMWFdIGJvcmRlciBib3JkZXItd2hpdGUvMTUgcm91bmRlZC0zeGwgc2hhZG93LTJ4bCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCB0ZXh0LW5ldXRyYWwtMjAwIG15LWF1dG9cIlxuICAgICAgPlxuICAgICAgICB7LyogVG9wIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgc206cC02IHBiLTQgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlIGJnLWdyYWRpZW50LXRvLWIgZnJvbS13aGl0ZS9bMC4wNF0gdG8tdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zLjVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtMnhsIGJnLXdoaXRlIHRleHQtYmxhY2sgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHNoYWRvdy1tZCBzaHJpbmstMFwiPlxuICAgICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT1cInctNiBoLTYgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIEfEsFRIVUIgJiBDT0RFTUFHSUMuSU8gREHEnklUSU1JXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSByb3VuZGVkLW1kIGJnLWFtYmVyLTUwMC8yMCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zNSB0ZXh0LWFtYmVyLTMwMCB0ZXh0LVsxMHB4XSBmb250LWV4dHJhYm9sZCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgIEJVTFVUIENJL0NEXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNDAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgIFTDvG0ga2F5bmFrIGtvZGxhcsSxIHZlIENvZGVtYWdpYyBpT1MgeWFwxLFsYW5kxLFybWFzxLFuxLEgR2l0SHViIGRlcG9udXphIGFrdGFyxLFuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJjbG9zZS1naXRodWItbW9kYWwtYnRuXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUvNSBob3ZlcjpiZy13aGl0ZS8xMCB0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICB0aXRsZT1cIkthcGF0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE5hdmlnYXRpb24gVGFicyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC02IGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBiZy1ibGFjay8yMCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgZ2FwLTZcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cInRhYi1kaXJlY3QtYXBpXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXBpJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweS0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlci1iLTIgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdhcGknXG4gICAgICAgICAgICAgICAgPyAnYm9yZGVyLWFtYmVyLTQwMCB0ZXh0LWFtYmVyLTQwMCBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTIwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxVcGxvYWRDbG91ZCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkRvxJ9ydWRhbiBZw7xrbGUgKEFQSSk8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cInRhYi1naXQtY2xpXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZ2l0Jyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweS0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlci1iLTIgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdnaXQnXG4gICAgICAgICAgICAgICAgPyAnYm9yZGVyLWFtYmVyLTQwMCB0ZXh0LWFtYmVyLTQwMCBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTIwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXJtaW5hbCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkdpdCBLb211dGxhcsSxPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJ0YWItZ2l0aHViLXppcFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3ppcCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYi0yIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnemlwJ1xuICAgICAgICAgICAgICAgID8gJ2JvcmRlci1hbWJlci00MDAgdGV4dC1hbWJlci00MDAgZm9udC1ib2xkJ1xuICAgICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtbmV1dHJhbC0yMDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5HaXRIdWIgWklQPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9kYWwgQm9keSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgc206cC02IHNwYWNlLXktNCBtYXgtaC1bNzJ2aF0gb3ZlcmZsb3cteS1hdXRvIG5vLXNjcm9sbGJhciB0ZXh0LXhzXCI+XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2FwaScgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgey8qIEdpdEh1YiBQQVQgSW5wdXQgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0SHViIFBlcnNvbmFsIEFjY2VzcyBUb2tlbiAoUEFUKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NldHRpbmdzL3Rva2Vucy9uZXc/c2NvcGVzPXJlcG8mZGVzY3JpcHRpb249SGF0aXBvZ2x1K0t1eXVtY3VsdWsraU9TXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYW1iZXItNDAwIGhvdmVyOnRleHQtYW1iZXItMzAwIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ub2tlbiBPbHXFn3R1cjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPEV4dGVybmFsTGluayBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiZ2l0aHViLXBhdC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhdFRva2VufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXRUb2tlbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImdocF94eHh4eHh4eHh4eHh4eHh4eHh4eFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMy41IHB5LTIuNSByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC14cyBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBwbGFjZWhvbGRlcjp0ZXh0LW5ldXRyYWwtNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICAgICAgICAgIFRva2VuaW5peiB0YXJhecSxY8SxbsSxesSxbiB5ZXJlbCBoYWbEsXphc8SxbmRhIHNha2xhbsSxciwgYXNsYSBzdW51Y3V5YSBnw7ZuZGVyaWxtZXouIFlhbG7EsXpjYSByZXBvIHlldGtpc2kgeWV0ZXJsaWRpci5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBSZXBvIE5hbWUgJiBQcml2YWN5IFJvdyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0zLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIERlcG8gKFJlcG8pIEFkxLE6XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ2l0aHViLXJlcG8tbmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlcG9OYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlcG9OYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJoYXRpcG9nbHUta3V5dW1jdWx1ay1pb3NcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMy41IHB5LTIuNSByb3VuZGVkLXhsIGJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXItd2hpdGUvMTUgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC14cyBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICBHaXpsaWxpayBUw7xyw7w6XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1ByaXZhdGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTIuNSBweC0zIHJvdW5kZWQteGwgYm9yZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgZm9udC1ib2xkIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFpc1ByaXZhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctYW1iZXItNDAwIGJvcmRlci1hbWJlci00MDAgdGV4dC1ibGFjayBzaGFkb3ctbWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWJsYWNrLzYwIGJvcmRlci13aGl0ZS8xNSB0ZXh0LW5ldXRyYWwtMzAwIGhvdmVyOmJvcmRlci13aGl0ZS8zMCdcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxHbG9iZSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SGVya2VzZSBBw6fEsWs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1ByaXZhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMi41IHB4LTMgcm91bmRlZC14bCBib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSBmb250LWJvbGQgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNQcml2YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWFtYmVyLTQwMCBib3JkZXItYW1iZXItNDAwIHRleHQtYmxhY2sgc2hhZG93LW1kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1ibGFjay82MCBib3JkZXItd2hpdGUvMTUgdGV4dC1uZXV0cmFsLTMwMCBob3Zlcjpib3JkZXItd2hpdGUvMzAnXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2l6bGkgKFByaXZhdGUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogQ29tbWl0IE1lc3NhZ2UgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgICAgICBDb21taXQgTWVzYWrEsTpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJnaXRodWItY29tbWl0LW1lc3NhZ2UtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1pdE1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1pdE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmZWF0OiBIYXRpcG/En2x1IEt1eXVtY3VsdWsgaU9TICYgV2ViIEfDvG5jZWxsZW1lc2lcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMuNSBweS0yLjUgcm91bmRlZC14bCBiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRleHQtd2hpdGUgdGV4dC14cyBmb2N1czpib3JkZXItYW1iZXItNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIENvZGVtYWdpYyBDSS9DRCBDYXJkICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBiZy1ibGFjay80MCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHNwYWNlLXktMi41IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29kZW1hZ2ljLmlvIEJ1bHV0IENJL0NEICYgQXBwbGUgQXBwIFN0b3JlIFlhcMSxbGFuZMSxcm1hc8SxPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlbWFnaWMuaW9cIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDAgaG92ZXI6dGV4dC1hbWJlci0zMDAgZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1bMTFweF1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5jb2RlbWFnaWMuaW88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtWzExcHhdIHRleHQtbmV1dHJhbC00MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBpT1MgQnVuZGxlIElkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW9zLWJ1bmRsZS1pZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1bmRsZUlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJ1bmRsZUlkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb20uaGF0aXBvZ2x1LmdvbGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQteGwgYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXhzIGZvY3VzOmJvcmRlci1hbWJlci00MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtMzAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgRGVwb251enVuIGvDtmsgZGl6aW5pbmUgb3RvbWF0aWsgb2xhcmFrIDxjb2RlIGNsYXNzTmFtZT1cInRleHQtYW1iZXItMzAwIGZvbnQtbW9ubyBiZy13aGl0ZS81IHB4LTEgcHktMC41IHJvdW5kZWRcIj5jb2RlbWFnaWMueWFtbDwvY29kZT4gZWtsZW5pci4gR2l0SHViJ2EgYWt0YXLEsWxkxLFrdGFuIHNvbnJhIENvZGVtYWdpYy5pbydkYSBwcm9qZW5pemkgYmHEn2xhecSxcCBNYWMgTWluaSBNMiBidWx1dCBtYWtpbmVsZXJpbmRlIGRvxJ9ydWRhbiBBcHBsZSBBcHAgU3RvcmUgLyBUZXN0RmxpZ2h0IGnDp2luIC5JUEEgZGVybGVtZXNpIGFsYWJpbGlyc2luaXouXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogVXBsb2FkIFByb2dyZXNzIC8gU3RhdHVzICovfVxuICAgICAgICAgICAgICB7cHJvZ3Jlc3Muc3RlcCAhPT0gJ2lkbGUnICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMuNSByb3VuZGVkLTJ4bCBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3Muc3RlcCA9PT0gJ2NvbXBsZXRlJ1xuICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWVtZXJhbGQtNTAwLzE1IGJvcmRlci1lbWVyYWxkLTUwMC8zMCB0ZXh0LWVtZXJhbGQtMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgIDogcHJvZ3Jlc3Muc3RlcCA9PT0gJ2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXJvc2UtNTAwLzE1IGJvcmRlci1yb3NlLTUwMC8zMCB0ZXh0LXJvc2UtMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWFtYmVyLTUwMC8xNSBib3JkZXItYW1iZXItNTAwLzMwIHRleHQtYW1iZXItMzAwJ1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9ncmVzcy5zdGVwID09PSAnY29tcGxldGUnID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy00IGgtNCBzaHJpbmstMCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IHByb2dyZXNzLnN0ZXAgPT09ICdlcnJvcicgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFNoaWVsZEFsZXJ0IGNsYXNzTmFtZT1cInctNCBoLTQgc2hyaW5rLTAgdGV4dC1yb3NlLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwidy00IGgtNCBzaHJpbmstMCBhbmltYXRlLXNwaW4gdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteHNcIj57cHJvZ3Jlc3MubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIFByb2dyZXNzIGJhciAqL31cbiAgICAgICAgICAgICAgICAgIHtwcm9ncmVzcy50b3RhbCAmJiBwcm9ncmVzcy5jdXJyZW50ICYmIHByb2dyZXNzLnN0ZXAgPT09ICd1cGxvYWRpbmcnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay80MCBoLTIgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1hbWJlci00MDAgaC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhwcm9ncmVzcy5jdXJyZW50IC8gcHJvZ3Jlc3MudG90YWwpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICB7LyogQ29tcGxldGUgQWN0aW9uIGxpbmsgKi99XG4gICAgICAgICAgICAgICAgICB7cHJvZ3Jlc3Muc3RlcCA9PT0gJ2NvbXBsZXRlJyAmJiBwcm9ncmVzcy5yZXBvVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHB0LTMgYm9yZGVyLXQgYm9yZGVyLWVtZXJhbGQtNTAwLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvZ3Jlc3MucmVwb1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHJvdW5kZWQteGwgYmctZW1lcmFsZC01MDAgdGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC14cyBzaGFkb3cgaG92ZXI6YmctZW1lcmFsZC00MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0SHViIERlcG9udXp1IEfDtnLDvG50w7xsZXlpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlbWFnaWMuaW8vYXBwc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSByb3VuZGVkLXhsIGJnLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzE1IHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LXhzIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29kZW1hZ2ljJ3RlIElQQSBEZXJsZXlpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogTWFpbiBBY3Rpb24gQnV0dG9uICovfVxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9XCJzdGFydC1naXRodWItdXBsb2FkLWJ0blwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGlyZWN0VXBsb2FkfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9ncmVzcy5zdGVwID09PSAndmFsaWRhdGluZycgfHwgcHJvZ3Jlc3Muc3RlcCA9PT0gJ2NyZWF0aW5nX3JlcG8nIHx8IHByb2dyZXNzLnN0ZXAgPT09ICd1cGxvYWRpbmcnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zLjUgcHgtNCByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNDAwIHZpYS1hbWJlci01MDAgdG8tYW1iZXItNDAwIGhvdmVyOmZyb20tYW1iZXItMzAwIGhvdmVyOnRvLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIGZvbnQtZXh0cmFib2xkIHRleHQtc20gc2hhZG93LXhsIHNoYWRvdy1hbWJlci01MDAvMTUgdHJhbnNpdGlvbiBhY3RpdmU6c2NhbGUtWzAuOThdIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9ncmVzcy5zdGVwID09PSAndmFsaWRhdGluZycgfHwgcHJvZ3Jlc3Muc3RlcCA9PT0gJ2NyZWF0aW5nX3JlcG8nIHx8IHByb2dyZXNzLnN0ZXAgPT09ICd1cGxvYWRpbmcnID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwidy00IGgtNCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HaXRIdWInYSBZw7xrbGVuaXlvci4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkQ2xvdWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvxJ9ydWRhbiBHaXRIdWInYSBZw7xrbGUgdmUgRGVwb3l1IE9sdcWfdHVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2dpdCcgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMuNVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtMzAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIEtlbmRpIGJpbGdpc2F5YXLEsW7EsXrEsW4gdGVybWluYWxpbmRlIGHFn2HEn8SxZGFraSBrb211dGxhcsSxIMOnYWzEscWfdMSxcmFyYWsgdMO8bSBwcm9qZXlpIHZlIDxjb2RlIGNsYXNzTmFtZT1cInRleHQtYW1iZXItNDAwIGZvbnQtbW9ub1wiPmNvZGVtYWdpYy55YW1sPC9jb2RlPiBkb3N5YXPEsW7EsSBHaXRIdWIgZGVwb251emEgYW7EsW5kYSBnw7ZuZGVyZWJpbGlyc2luaXo6XG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC0yeGwgYmctbmV1dHJhbC05NTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xNSB0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtMjAwIGZvbnQtbW9ubyBvdmVyZmxvdy14LWF1dG8gbm8tc2Nyb2xsYmFyIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAge2dpdENsaVNjcmlwdH1cbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5Q2xpQ29tbWFuZHN9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMyByaWdodC0zIHB4LTMgcHktMS41IHJvdW5kZWQteGwgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTQwMCB0ZXh0LWJsYWNrIHRleHQteHMgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgc2hhZG93IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29waWVkQ29tbWFuZHMgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Lb3B5YWxhbmTEsTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Uw7xtw7xuw7wgS29weWFsYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IGJnLWJsYWNrLzQwIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgc3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5QdXNoIMSwxZ9sZW1pbmRlbiBTb25yYSBOZSBZYXBtYWzEsXPEsW7EsXo/PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0LWRlY2ltYWwgbGlzdC1pbnNpZGUgc3BhY2UteS0xIHRleHQtbmV1dHJhbC00MDAgdGV4dC1bMTFweF1cIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5Db2RlbWFnaWMuaW8gaGVzYWLEsW7EsXphIGdpZGluLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+WWVuaSBvbHXFn3R1cmR1xJ91bnV6IDxzdHJvbmc+e3JlcG9OYW1lfTwvc3Ryb25nPiByZXBvc3VudSBzZcOnaW4uPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlwiU3RhcnQgbmV3IGJ1aWxkXCI8L3N0cm9uZz4gYnV0b251bmEgdMSxa2xheWFyYWsgaU9TIElQQSBkZXJsZW1lc2luaSBiYcWfbGF0xLFuLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+RGVybGVtZSBiaXR0acSfaW5kZSBFc2VybGVyIChBcnRpZmFjdHMpIHNla21lc2luZGVuIDxzdHJvbmc+SGF0aXBvZ2x1R29sZC5pcGE8L3N0cm9uZz4gZG9zeWFzxLFuxLEgaW5kaXJpbi48L2xpPlxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICd6aXAnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC0zeGwgYmctYW1iZXItNTAwLzIwIHRleHQtYW1iZXItNDAwIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctNyBoLTdcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIFRhbSBQcm9qZSBLb2RsYXLEsW7EsSBaSVAgT2xhcmFrIMSwbmRpcmluXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC00MDAgbWF4LXctbWQgbXgtYXV0byBtdC0xIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgVMO8bSBrYXluYWsga29kbGFyLCA8Y29kZSBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMFwiPmNvZGVtYWdpYy55YW1sPC9jb2RlPiwgaU9TIHlhcMSxbGFuZMSxcm1hc8SxIHZlIFBXQSBkb3N5YWxhcsSxIHRlayBiaXIgYXLFn2l2ZGUgaGF6xLFybGFuxLFyLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkWmlwfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rvd25sb2FkaW5nWmlwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgcHgtNiByb3VuZGVkLTJ4bCBiZy1hbWJlci01MDAgaG92ZXI6YmctYW1iZXItNDAwIHRleHQtYmxhY2sgZm9udC1leHRyYWJvbGQgdGV4dC14cyBzaGFkb3ctbGcgdHJhbnNpdGlvbiBhY3RpdmU6c2NhbGUtOTUgZGlzYWJsZWQ6b3BhY2l0eS01MCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXIgbXgtYXV0b1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXNEb3dubG9hZGluZ1ppcCA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctNCBoLTQgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+WklQIFBha2V0bGVuaXlvci4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmhhdGlwb2dsdS1rdXl1bWN1bHVrLWlvcy56aXAgxLBuZGlyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9kYWwgRm9vdGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpweC02IGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCBiZy1ibGFjay80MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LW5ldXRyYWwtNDAwXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzExcHhdXCI+SGF0aXBvxJ9sdSBLdXl1bWN1bHVrIHYxLjAuMDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0xLjUgcm91bmRlZC14bCBiZy13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8xNSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEthcGF0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUF1SWMsU0FxUkksVUFyUko7QUF2SWQsU0FBZ0IsVUFBVSxpQkFBaUI7QUFDM0M7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxPQUVLO0FBQ1AsU0FBUyxzQkFBc0IsMEJBQWdEO0FBU3hFLGFBQU0sdUJBQTRELENBQUM7QUFBQSxFQUN4RTtBQUFBLEVBQ0E7QUFDRixNQUFNO0FBQ0osUUFBTSxDQUFDLFdBQVcsWUFBWSxJQUFJLFNBQWtCLEtBQUs7QUFHekQsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJLFNBQWlCLE1BQU07QUFDckQsV0FBTyxhQUFhLFFBQVEsc0JBQXNCLEtBQUs7QUFBQSxFQUN6RCxDQUFDO0FBQ0QsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJLFNBQWlCLE1BQU07QUFDckQsV0FBTyxhQUFhLFFBQVEsdUJBQXVCLEtBQUs7QUFBQSxFQUMxRCxDQUFDO0FBQ0QsUUFBTSxDQUFDLFdBQVcsWUFBWSxJQUFJLFNBQWtCLEtBQUs7QUFDekQsUUFBTSxDQUFDLGVBQWUsZ0JBQWdCLElBQUk7QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFDQSxRQUFNLENBQUMsVUFBVSxXQUFXLElBQUksU0FBaUIsb0JBQW9CO0FBR3JFLFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSSxTQUErQjtBQUFBLElBQzdELE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxF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