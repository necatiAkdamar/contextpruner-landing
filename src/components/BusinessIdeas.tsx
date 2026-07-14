/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Scissors, Brain, Database, ArrowUpRight } from "lucide-react";

const IDEAS = [
  {
    id: "api-gateway",
    title: "AI Prompt Compression API Gateway (SaaS)",
    icon: Scissors,
    iconBg: "from-emerald-500/10 to-emerald-400/5",
    iconColor: "text-emerald-mint",
    description:
      "A serverless API middleware that sits between apps and LLM endpoints, dynamically stripping non-essential tokens, redundant chat history, and repetitive system prompts in real-time.",
    usecase: "High-volume SaaS applications processing multi-turn chats",
    metrics: ["60% Token Reduction", "Sub-5ms Latency overhead", "Universal API compatibility"],
  },
  {
    id: "agentic-memory",
    title: "State-Aware Agentic Memory Router",
    icon: Brain,
    iconBg: "from-indigo-500/10 to-indigo-400/5",
    iconColor: "text-indigo-hyper",
    description:
      "An advanced infrastructure tool for AI coding agents and autonomous workflows that prunes massive tool results while maintaining protocol invariants, cutting agent loop costs by up to 90%.",
    usecase: "Multi-agent coding environments and autonomous workflow orchestrators",
    metrics: ["90% Cost Reduction", "State-preserving prune logic", "Prevents context drift"],
  },
  {
    id: "rag-pruner",
    title: "Enterprise Provenance RAG Pruner",
    icon: Database,
    iconBg: "from-emerald-500/10 to-indigo-500/5",
    iconColor: "text-teal-400",
    description:
      "A plug-and-play cross-encoder system that replaces heavy chunking and costly rerankers, surgically selecting high-signal sentences from retrieved documents to prevent LLM attention rot.",
    usecase: "Vector search systems, private knowledge bases, and complex legal/medical Q&A",
    metrics: ["Zero attention rot", "Surgical semantic extraction", "RAG vector pipeline native"],
  },
];

export default function BusinessIdeas() {
  // Reusable 3D Card tilt handlers using raw DOM inline transform styles
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Calculate tilt degree (max 8 degrees)
    const rotateX = -(y / (box.height / 2)) * 6;
    const rotateY = (x / (box.width / 2)) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease-out";
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/60 relative" id="business-ideas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-emerald-mint uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/5 mb-4 inline-block">
            Venture Opportunities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            3 High-Value SaaS Playbooks
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg max-w-2xl mx-auto">
            ContextPruner.com is the definitive brand name for key architectural pillars in the next-generation AI software stack.
          </p>
        </div>

        {/* Playbooks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {IDEAS.map((idea) => {
            const IconComponent = idea.icon;
            return (
              <div
                key={idea.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-slate-700/60 cursor-pointer overflow-hidden box-glow-indigo"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Decorative spotlight backdrop */}
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-500" />

                <div>
                  {/* Top Header Card */}
                  <div className="flex items-center justify-between mb-6" style={{ transform: "translateZ(30px)" }}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${idea.iconBg} flex items-center justify-center border border-slate-800/60`}>
                      <IconComponent className={`w-6 h-6 ${idea.iconColor}`} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-mint transition-colors duration-300" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-xl text-white mb-3 tracking-tight group-hover:text-emerald-mint transition-colors duration-300" style={{ transform: "translateZ(20px)" }}>
                    {idea.title}
                  </h3>
                  <p className="text-slate-400 font-sans text-sm leading-relaxed mb-6" style={{ transform: "translateZ(10px)" }}>
                    {idea.description}
                  </p>
                </div>

                {/* Metrics & Target Market Footer */}
                <div className="border-t border-slate-800/60 pt-6 mt-6" style={{ transform: "translateZ(15px)" }}>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Core Target Market
                  </div>
                  <div className="text-xs text-slate-300 font-sans mb-4">
                    {idea.usecase}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {idea.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md border border-slate-800/80 bg-slate-950/60 text-slate-300"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
