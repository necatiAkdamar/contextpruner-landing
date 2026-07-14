/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scissors } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/60 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <Scissors className="w-4 h-4 text-emerald-mint/60" />
          <span className="font-display font-semibold text-sm text-slate-400">
            Context<span className="text-emerald-mint">Pruner</span>.com
          </span>
        </div>
        <p className="text-xs text-slate-600 font-sans text-center md:text-right">
          © {new Date().getFullYear()} ContextPruner.com. All rights reserved. Secured escrow transactions.
        </p>
      </div>
    </footer>
  );
}
