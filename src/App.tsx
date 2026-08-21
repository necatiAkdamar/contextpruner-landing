import React, { useState } from 'react';
import { 
  Scissors, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Chrome, 
  Activity, 
  Lock, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Mail, 
  Check, 
  ChevronRight,
  Bot
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "contact@contextpruner.com"; // Tercih ettiğiniz iletişim adresi

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const useCases = [
    {
      id: "health-audit",
      badge: "GTM Funnel • Fast MVP",
      title: "Context Health Audit",
      subtitle: "Free Diagnostic & Lead Magnet",
      target: "RAG & Agent Engineering Teams",
      whyNow: "Zero-friction client acquisition. Prove context rot and wasted token budgets in seconds before pitching optimization pipelines.",
      description: "A lightweight scanner for repos, RAG corpora, and agent logs that computes a 'Context Rot Score' and highlights bloated tokens and attention drifts.",
      buildability: "High (2-3 Weeks MVP). Basic token counting, AST parsing, and token overlap heatmaps.",
      icon: Activity,
      color: "emerald"
    },
    {
      id: "mcp-server",
      badge: "Protocol Native • 10k+ Registries",
      title: "ContextPruner MCP Server",
      subtitle: "Middleware for Agentic Tool Calls",
      target: "Developers building autonomous agents via Model Context Protocol",
      whyNow: "MCP adoption is surging. Packaged, reusable context pruning is becoming standard infrastructure for high-latency agent systems.",
      description: "A plug-and-play MCP tool that intercepts heavy search results, file dumps, and API responses to compress them before hitting the LLM context window.",
      buildability: "Fast (1-2 Weeks). Publish to MCP registries for built-in organic distribution without marketing spend.",
      icon: Cpu,
      color: "cyan"
    },
    {
      id: "context-firewall",
      badge: "OWASP Top 10 • Enterprise Security",
      title: "Context Security Firewall",
      subtitle: "Tool & Prompt Injection Defense",
      target: "Security-conscious teams deploying production agents & untrusted tools",
      whyNow: "Prompt injection and poisoned MCP servers are the #1 attack vector in modern enterprise LLM deployments.",
      description: "A defensive prune layer that scrubs indirect prompt injections, jailbreak tokens, and malicious payloads hidden within ingested web pages and emails.",
      buildability: "Niche Point Solution. Lightweight rule-based & semantic sanitizer focused specifically on agent tool outputs.",
      icon: Lock,
      color: "amber"
    },
    {
      id: "context-diet",
      badge: "B2C Viral • Zero Server Cost",
      title: "Context Diet Browser Extension",
      subtitle: "Client-Side Token Saver for Power Users",
      target: "ChatGPT Plus, Claude Pro & Gemini power users hitting daily message caps",
      whyNow: "End-users regularly waste 70% of message limits by pasting raw web pages, boilerplates, and huge PDF excerpts.",
      description: "A zero-latency Chrome extension that trims boilerplate, HTML noise, and redundant text directly in the browser before pasting into AI chats.",
      buildability: "Immediate (Days). 100% client-side privacy model (zero data storage) ensuring fast Chrome Web Store approval.",
      icon: Chrome,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative overflow-hidden font-sans">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 blur-[130px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="border-b border-slate-800/60 backdrop-blur-md sticky top-0 z-50 bg-[#07090e]/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Scissors className="w-4 h-4 text-white transform -rotate-45" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">ContextPruner<span className="text-cyan-400">.com</span></span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Domain Available for Acquisition
            </span>
            <a 
              href="#make-offer"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md hover:shadow-cyan-500/20"
            >
              Make an Offer
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-400 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Category-Defining AI Infrastructure Asset</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Own the Standard Name in <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
              LLM Context Optimization
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            As LLMs, RAG architectures, and autonomous MCP agents scale, context window bloat and prompt security are the #1 operational bottlenecks. <strong className="text-slate-200">ContextPruner.com</strong> is the definitive domain brand for this multi-billion dollar category.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="#blueprints"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium border border-slate-700/80 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore 4 Product Blueprints</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
            <a 
              href="#make-offer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <span>Acquire Domain Now</span>
            </a>
          </div>
        </div>

        {/* Why This Domain Matters (Market Signals) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-slate-800/80 py-10">
          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Surging Context Cost</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Enterprises spend up to 60% of LLM budgets on repetitive, unpruned context and noisy tool outputs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">The MCP Revolution</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                With 10,000+ MCP servers active, context middleware and output pruning are mandatory for low-latency agent loops.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">OWASP Prompt Defense</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Indirect prompt injection via untrusted context is the #1 AI vulnerability. Pruning doubles as proactive defense.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Turnkey Product Blueprints */}
        <section id="blueprints" className="mt-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              4 Turnkey Products You Can Launch on This Domain
            </h2>
            <p className="text-sm text-slate-400">
              Buying <span className="text-cyan-400 font-medium">ContextPruner.com</span> gives you instant brand authority for any of the following high-demand architectures:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/60">
                        {item.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-800/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{item.subtitle}</p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-slate-800/60 space-y-2 text-xs">
                      <div>
                        <span className="text-slate-500 font-medium">Why now: </span>
                        <span className="text-slate-400">{item.whyNow}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-medium">Target audience: </span>
                        <span className="text-slate-300 font-medium">{item.target}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-medium">Speed to MVP: </span>
                        <span className="text-emerald-400 font-medium">{item.buildability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Acquisition & Direct Offer Card */}
        <section id="make-offer" className="mt-20 scroll-mt-24">
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl relative">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 text-cyan-400 shadow-inner">
              <Zap className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to Acquire ContextPruner.com?
            </h2>
            <p className="text-sm text-slate-400 mt-3 max-w-lg mx-auto leading-relaxed">
              Fast, secure transfer via accredited Escrow / Dan.com / Sedo or direct transaction. All reasonable offers considered.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`mailto:${emailAddress}?subject=Offer%20for%20ContextPruner.com`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Acquisition Offer</span>
              </a>

              <button 
                onClick={handleCopy}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : null}
                <span>{copied ? "Email Copied!" : "Copy Contact Email"}</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant Auth-Code Transfer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Escrow Buyer Protection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Clean Ownership & History</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-center text-xs text-slate-600">
        <p>© {new Date().getFullYear()} ContextPruner.com. All rights reserved. Built for AI infrastructure leaders.</p>
      </footer>
    </div>
  );
}
