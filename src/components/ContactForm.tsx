/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ShieldCheck, Mail, Clipboard, Check, ChevronRight } from "lucide-react";
import { ContactFormState } from "../types";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    fullName: "",
    companyName: "",
    offerAmount: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Simple USD auto-formatting on change
  const handleOfferChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/[^0-9]/g, "");
    if (!raw) {
      setForm((prev) => ({ ...prev, offerAmount: "" }));
      return;
    }
    const formatted = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(parseInt(raw));

    setForm((prev) => ({ ...prev, offerAmount: formatted }));
  };

  const validate = () => {
    const tempErrors: Partial<ContactFormState> = {};
    if (!form.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!form.companyName.trim()) tempErrors.companyName = "Company or LinkedIn URL is required";
    if (!form.offerAmount.trim()) {
      tempErrors.offerAmount = "Offer amount is required";
    } else {
      const parsedVal = parseInt(form.offerAmount.replace(/,/g, ""), 10);
      if (isNaN(parsedVal) || parsedVal < 500) {
        tempErrors.offerAmount = "Minimum premium domain inquiries generally start at $500";
      }
    }
    if (!form.message.trim()) tempErrors.message = "Please include a short message with your inquiry";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent("Inquiry / Offer for ContextPruner.com");
    const bodyText = `Hello,

I am submitting a secure acquisition inquiry for the premium domain: ContextPruner.com.

Acquisition Terms & Details:
- Name: ${form.fullName}
- Company / Profile: ${form.companyName}
- Proposed Offer: $${form.offerAmount} USD
- Escrow Route: Prepared to secure via Escrow.com or Sedo

Inquiry Message:
"${form.message}"

Please let me know if this offer is acceptable or if we can align on terms.

Best regards,
${form.fullName}`;

    return `mailto:necatiakdamar@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger Mailto
    const mailtoUrl = generateMailtoLink();
    
    // Open the email client securely
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const fullText = `Inquiry for ContextPruner.com
Name: ${form.fullName}
Company: ${form.companyName}
Offer: $${form.offerAmount} USD
Message: ${form.message}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative" id="secure-offer-form">
      {/* Visual background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-emerald-mint uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/5 mb-4 inline-block">
            Secure Acquisition
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Secure ContextPruner.com Today
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg max-w-xl mx-auto">
            Opportunities like this disappear quickly. Submit your acquisition offer below, and our broker team will respond within 12 hours.
          </p>
        </div>

        {/* Striking Submission Box */}
        <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden box-glow-emerald">
          {/* Top glowing line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/45 to-transparent" />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-sans text-sm"
                  />
                  {errors.fullName && <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.fullName}</p>}
                </div>

                {/* Company / LinkedIn */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Company / LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="e.g. NextGen AI Corp / linkedin.com/in/..."
                    className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-sans text-sm"
                  />
                  {errors.companyName && <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.companyName}</p>}
                </div>
              </div>

              {/* Offer Amount */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Acquisition Offer Amount (USD)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-500 font-mono text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    required
                    value={form.offerAmount}
                    onChange={handleOfferChange}
                    placeholder="5,000"
                    className="w-full pl-8 pr-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="text-slate-500 font-mono text-xs">USD</span>
                  </div>
                </div>
                {errors.offerAmount && <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.offerAmount}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Inquiry Message / Terms
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your vision, timeline, and whether you want to proceed via standard Escrow.com or Sedo."
                  className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-sans text-sm resize-none"
                />
                {errors.message && <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.message}</p>}
              </div>

              {/* Secure Trust Tag */}
              <div className="flex items-center space-x-2 text-slate-500 text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-mint" />
                <span>Encrypted direct Broker Routing via secure Escrow protocols.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-slate-950 font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-400 transition-all duration-300 transform active:scale-98 shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] cursor-pointer"
              >
                Submit Secure Offer
                <ChevronRight className="w-5 h-5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          ) : (
            /* Success screen state */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <ShieldCheck className="w-8 h-8 text-emerald-mint" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Acquisition Proposal Generated
              </h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                Your direct inquiry for <span className="text-white font-medium">ContextPruner.com</span> has been constructed. We've attempted to automatically launch your default mail client.
              </p>

              {/* Backup manual action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={generateMailtoLink()}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-slate-950 font-bold bg-emerald-mint hover:bg-emerald-300 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Launch Mail Client Again
                </a>
                <button
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-emerald-mint" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-4 h-4 mr-2" />
                      Copy Inquiry Details
                    </>
                  )}
                </button>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-slate-500 hover:text-emerald-mint transition-colors"
                >
                  ← Edit Offer / Send another inquiry
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer info blocks */}
        <div className="mt-16 text-center space-y-4 border-t border-slate-900/60 pt-8">
          <p className="text-xs font-mono text-slate-500">
            Direct Broker Email:{" "}
            <a href="mailto:necatiakdamar@gmail.com" className="text-slate-300 hover:text-emerald-mint transition-colors">
              necatiakdamar@gmail.com
            </a>
          </p>
          <p className="text-[10px] font-mono text-slate-600 max-w-md mx-auto leading-normal">
            Transactions secured exclusively via accredited third-party escrows (Escrow.com, Sedo, or Dan.com) to guarantee zero-risk transfer.
          </p>
        </div>
      </div>
    </section>
  );
}
