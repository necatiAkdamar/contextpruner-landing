/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const handleScrollToForm = () => {
    const element = document.getElementById("secure-offer-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToIdeas = () => {
    const element = document.getElementById("business-ideas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900/40">
      {/* Absolute Ambient Backgrounds */}
      <div className="absolute inset-0 bg-slate-950 pointer-events-none" />
      <div className="absolute inset-0 animated-grid opacity-35 pointer-events-none" />

      {/* Floating Radial Glow Spots */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-transparent blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] max-w-[700px] rounded-full bg-gradient-to-tr from-indigo-500/10 to-transparent blur-[140px] pointer-events-none animate-pulse-glow-delayed" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/60 backdrop-blur-md mb-8 text-xs font-mono text-slate-300 tracking-wider"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>EXCLUSIVE DIGITAL ASSET AVAILABILITY</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none mb-6"
        >
          Own the Infrastructure of the{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-300 to-indigo-400 filter drop-shadow-sm inline-block">
            LLM Efficiency
          </span>{" "}
          Revolution.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          In the era of agentic loops and massive RAG context windows, token waste is killing AI scalability.{" "}
          <span className="text-white font-medium">ContextPruner.com</span> is the ultimate brand for the next unicorn
          in AI prompt compression and cost optimization.
        </motion.p>

        {/* Urgent Domain Announcement Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-slate-800/80 backdrop-blur-xl box-glow-emerald"
        >
          <div className="flex items-center justify-center space-x-2 text-emerald-mint font-semibold mb-2 text-sm uppercase tracking-widest font-mono">
            <Sparkles className="w-4 h-4" />
            <span>This Premium Domain is Officially For Sale</span>
          </div>
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Don't be late to launch your vision. Secure the ultimate, highly memorable brand name for AI cost control
            before your competitors do.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Glowing Emerald CTA */}
          <button
            onClick={handleScrollToForm}
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl text-slate-950 font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 active:scale-98 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] cursor-pointer"
          >
            Make an Offer
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Glassmorphism Outline CTA */}
          <button
            onClick={handleScrollToIdeas}
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl text-white font-medium bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-300 cursor-pointer"
          >
            Explore Use Cases
          </button>
        </motion.div>

        {/* Trust Factors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 mt-16 text-xs font-mono text-slate-500"
        >
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-mint/60" />
            <span>Escrow.com Secured</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-mint/60" />
            <span>Instant Handover</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-mint/60" />
            <span>Full Brand IP Assets</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
