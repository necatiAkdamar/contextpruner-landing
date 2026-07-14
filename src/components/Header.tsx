/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Scissors, Sparkles } from "lucide-react";

export default function Header() {
  const handleScrollToForm = () => {
    const element = document.getElementById("secure-offer-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-slate-900/60 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center transition-all duration-300 group-hover:bg-slate-900">
              <Scissors className="w-5 h-5 text-emerald-mint group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 bg-emerald-500/30 blur-md rounded-xl -z-10 group-hover:opacity-100 transition-opacity duration-300 opacity-60" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Context<span className="text-emerald-mint">Pruner</span>
            <span className="text-slate-500 text-sm font-normal">.com</span>
          </span>
        </div>

        {/* Right Action Badges & Button */}
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-semibold text-emerald-mint tracking-wider"
          >
            <Sparkles className="w-3 h-3 animate-pulse" />
            <span>💎 PREMIUM DOMAIN FOR SALE</span>
          </motion.div>

          <button
            onClick={handleScrollToForm}
            className="relative inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-medium text-slate-300 border border-slate-800 bg-slate-950/60 hover:text-white hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] active:scale-98"
          >
            Contact Broker
          </button>
        </div>
      </div>
    </header>
  );
}
