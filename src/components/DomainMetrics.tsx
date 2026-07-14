/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, Award, TrendingUp, Search } from "lucide-react";

const METRICS = [
  {
    id: "tld",
    value: ".COM",
    label: "Top-Tier Authority",
    description: "The gold standard of corporate internet presence. Inspires instant investor confidence, guarantees enterprise credibility, and secures high organic trust.",
    icon: Globe,
    color: "text-emerald-mint",
    bgColor: "bg-emerald-500/5",
    borderColor: "border-emerald-500/10",
  },
  {
    id: "memorability",
    value: "100%",
    label: "Phonetic Recall",
    description: "Compounded by two industry-standard terms: 'Context' and 'Pruner'. Instantly readable, easy to spell, and highly memorable in executive suites and tech meetups.",
    icon: Award,
    color: "text-indigo-hyper",
    bgColor: "bg-indigo-500/5",
    borderColor: "border-indigo-500/10",
  },
  {
    id: "niche",
    value: "AI FinOps",
    label: "SaaS Niche Alignment",
    description: "Sits at the exact intersection of AI infrastructure scale and cost control. Positions your brand perfectly for the high-margin enterprise software sector.",
    icon: TrendingUp,
    color: "text-teal-400",
    bgColor: "bg-teal-500/5",
    borderColor: "border-teal-500/10",
  },
  {
    id: "seo",
    value: "Surgical",
    label: "SEO Keyword Dominance",
    description: "Direct semantic correlation with 'context pruning' and 'prompt token compression'. Commands high-intent search volumes out-of-the-box.",
    icon: Search,
    color: "text-amber-400",
    bgColor: "bg-amber-500/5",
    borderColor: "border-amber-500/10",
  },
];

export default function DomainMetrics() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 relative" id="domain-metrics">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-emerald-mint uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/5 mb-4 inline-block">
            Asset Evaluation
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Domain Value Signals
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg max-w-2xl mx-auto">
            A brand is the single highest leverage multiplier of your venture's success. Here is why <span className="text-white">contextpruner.com</span> stands out.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="group relative p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent glow on card hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/20 to-transparent group-hover:via-emerald-500/20 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 rounded-lg ${metric.bgColor} border ${metric.borderColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Signal Metric</span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-300 font-display mb-3">
                    {metric.label}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-3">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
