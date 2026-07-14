/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import BusinessIdeas from "./components/BusinessIdeas";
import DomainMetrics from "./components/DomainMetrics";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-mint overflow-x-hidden">
      {/* Header / Navigation */}
      <Header />

      <main>
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: The Cogs Problem & Market (Interactive ROI Calculator) */}
        <Calculator />

        {/* Section 4: 3 Golden Business Ideas */}
        <BusinessIdeas />

        {/* Section 5: Domain Metrics & Value Signals */}
        <DomainMetrics />

        {/* Section 6: Transforming CTA & Offer Submission Form */}
        <ContactForm />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

