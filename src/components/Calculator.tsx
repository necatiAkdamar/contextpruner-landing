/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingDown, Coins, Zap, ShieldAlert } from "lucide-react";

const SLIDER_STEPS = [
  { value: 10_000_000, label: "10M" },
  { value: 25_000_000, label: "25M" },
  { value: 50_000_000, label: "50M" },
  { value: 100_000_000, label: "100M" },
  { value: 250_000_000, label: "250M" },
  { value: 500_000_000, label: "500M" },
  { value: 1_000_000_000, label: "1B" },
  { value: 2_500_000_000, label: "2.5B" },
  { value: 5_000_000_000, label: "5B" },
  { value: 10_000_000_000, label: "10B" },
];

export default function Calculator() {
  const [stepIndex, setStepIndex] = useState(5); // 500M is default

  const currentVolume = SLIDER_STEPS[stepIndex].value;

  // Calculation Logic
  // Raw Cost = Volume * $2.50 per Million
  const rawCost = (currentVolume / 1_000_000) * 2.5;

  // Compressed Volume = Volume * 0.40 (60% pruning/compression rate)
  const compressionRate = 0.60;
  const compressedVolume = currentVolume * (1 - compressionRate);

  // Optimized Cost = Compressed Volume * $2.50
  const optimizedCost = (compressedVolume / 1_000_000) * 2.5;

  // Savings
  const monthlySavings = rawCost - optimizedCost;
  const annualSavings = monthlySavings * 12;

  // Format money helper
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatTokens = (val: number) => {
    if (val >= 1_000_000_000) {
      return `${(val / 1_000_000_000).toFixed(1).replace(/\.0$/, "")} Billion`;
    }
    return `${(val / 1_000_000).toFixed(0)} Million`;
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 relative" id="savings-calculator">
      {/* Background glow trail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            The AI Token Tax is Unsustainable
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg max-w-2xl mx-auto">
            Context window expansion has created a massive cost vector. Calculate your instant savings using standard ContextPruner logic.
          </p>
        </div>

        {/* Calculator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Card */}
          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono text-emerald-mint uppercase tracking-wider">Enterprise ROI Engine</span>
                <Coins className="w-5 h-5 text-emerald-mint" />
              </div>

              <div className="mb-8">
                <label className="block text-slate-300 font-display font-medium text-lg mb-3">
                  Estimated Monthly GPT-4o / Claude Input Volume
                </label>
                <div className="text-3xl font-mono font-bold text-white mb-6 flex items-baseline">
                  {formatTokens(currentVolume)}
                  <span className="text-xs text-slate-500 font-sans ml-2 font-normal">tokens / month</span>
                </div>

                {/* Styled Range Slider */}
                <div className="relative mt-2">
                  <input
                    type="range"
                    min="0"
                    max={SLIDER_STEPS.length - 1}
                    value={stepIndex}
                    onChange={(e) => setStepIndex(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-neon focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-3 px-1">
                    {SLIDER_STEPS.map((step, idx) => (
                      <span
                        key={step.label}
                        className={`cursor-pointer transition-colors duration-200 ${
                          idx === stepIndex ? "text-emerald-mint font-semibold" : "hover:text-slate-300"
                        }`}
                        onClick={() => setStepIndex(idx)}
                      >
                        {step.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Split metrics visualization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800/60 mt-4">
              <div className="bg-slate-950/60 border border-slate-900/80 rounded-xl p-4">
                <div className="flex items-center space-x-2 text-red-400 mb-1">
                  <ShieldAlert className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">Unoptimized Cost</span>
                </div>
                <div className="text-xl font-mono font-bold text-red-400">
                  {formatCurrency(rawCost)}
                  <span className="text-xs text-slate-500 font-sans font-normal"> / mo</span>
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                <div className="flex items-center space-x-2 text-emerald-mint mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">Optimized Cost</span>
                </div>
                <div className="text-xl font-mono font-bold text-emerald-mint">
                  {formatCurrency(optimizedCost)}
                  <span className="text-xs text-emerald-500/50 font-sans font-normal"> / mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-5 relative flex flex-col justify-between bg-gradient-to-b from-slate-900/60 to-slate-950/70 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 overflow-hidden box-glow-emerald">
            {/* Top accent shine */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div>
              <div className="flex items-center space-x-2 text-emerald-mint bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 self-start text-xs font-mono tracking-wide w-fit mb-6">
                <TrendingDown className="w-3.5 h-3.5 animate-pulse" />
                <span>60% Average Context Reduction</span>
              </div>

              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">
                Your Monthly Savings
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="text-4xl sm:text-5xl font-mono font-extrabold text-emerald-mint tracking-tight glow-emerald mb-3"
                >
                  {formatCurrency(monthlySavings)}
                </motion.div>
              </AnimatePresence>

              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1 mt-6">
                Estimated Annual Savings
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`annual-${stepIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className="text-2xl font-mono font-bold text-white tracking-tight"
                >
                  {formatCurrency(annualSavings)}
                  <span className="text-xs text-slate-400 font-sans font-normal ml-1">USD saved / year</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6 border-t border-slate-800/60 mt-8">
              <p className="text-slate-400 font-sans text-xs leading-relaxed italic">
                "Context pruning is not just code optimization—it's a critical financial layer for enterprise AI."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
