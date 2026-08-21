import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Chrome, 
  Activity, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Mail, 
  Check, 
  Database,
  Brain,
  Sun,
  Moon,
  Shield,
  ExternalLink,
  Bot
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [copied, setCopied] = useState(false);
  const contactEmail = "necatiakdamar@gmail.com";

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // 7 Bütüncül Proje Fikri (Mevcut 3 Temel + 4 Yeni Fikir)
  const allUseCases = [
    // --- YENİ FİKİR 1 ---
    {
      id: "health-audit",
      category: "Free Diagnostic & Lead Magnet",
      title: "Context Health Audit",
      target: "RAG & AI Agent Engineering Teams",
      whyNow: "Düşük sürtünmeli müşteri edinimi. contextpruner.app gibi tarayıcı-içi triage modelleri RAG ve log dünyasına taşınarak 'önce ücretsiz teşhis, sonra ücretli tedavi' hunisi kurulabilir.",
      description: "Repo, RAG corpus'u veya ajan loglarını tarayıp 'Context Rot Skoru' çıkaran, boşa harcanan tokenları ve modelin dikkatini dağıtan gürültüleri ısı haritasıyla gösteren ücretsiz raporlama aracı.",
      buildability: "Hızlı MVP (2-3 Hafta). Token sayımı, semantik benzerlik filtreleme ve görsel ısı haritası yeterlidir.",
      icon: Activity,
      tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    // --- YENİ FİKİR 2 ---
    {
      id: "mcp-server",
      category: "MCP Registry Middleware",
      title: "ContextPruner MCP Server",
      target: "Model Context Protocol ile otonom ajan geliştirenler",
      whyNow: "MCP 10.000+ sunucuyla hızla büyüyor. Ajanların tool çıktılarındaki şişkinliği önceden kırpacak yeniden kullanılabilir 'Context Pack' middleware standart haline geliyor.",
      description: "MCP kayıt defterine doğrudan yayınlanan; arama sonuçları, API çıktıları ve büyük dosya dökümlerini ajanın ana context penceresine girmeden önce sıkıştıran protokol-uyumlu araç.",
      buildability: "Çok Hızlı (1-2 Hafta). MCP SDK ile protokol standardında sunucu yazılıp registry üzerinden organik dağıtıma sunulabilir.",
      icon: Cpu,
      tagColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
    },
    // --- YENİ FİKİR 3 ---
    {
      id: "context-firewall",
      category: "OWASP Top 10 • AI Security",
      title: "Context Firewall & Injection Defense",
      target: "Kurumsal güvenlik ve üretimde ajan çalıştıran ekipler",
      whyNow: "OWASP LLM Top 10 listesinde prompt injection 1 numaralı tehdit. Saldırganların zehirli MCP veya web içerikleriyle ajanları manipüle etmesini önlemek bir zorunluluk.",
      description: "Maliyet değil güvenlik odaklı filtreleme: Ajanın context'ine giren web sayfaları, e-postalar ve tool sonuçlarındaki gizli talimatları (indirect prompt injection) temizleyen güvenlik katmanı.",
      buildability: "Nokta Çözüm MVP. Küçük ekipler için özellikle MCP tool çıktılarını temizleyen uygun maliyetli güvenlik filtresi.",
      icon: Lock,
      tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    // --- YENİ FİKİR 4 ---
    {
      id: "context-diet",
      category: "B2C Viral • Zero Server Cost",
      title: "Context Diet Browser Extension",
      target: "ChatGPT Plus, Claude Pro & Gemini power user'ları",
      whyNow: "Bireysel kullanıcılar kopyala-yapıştır yaparken kota ve bağlam limitlerine takılıyor. Sıfır sunucu maliyeti ve 'veri cihazda kalır' güvencesiyle yüksek hacimli B2C pazarı sunar.",
      description: "Web arayüzlerine büyük metin veya web sayfası yapıştırıldığında gereksiz HTML, menü ve tekrarlı metinleri tarayıcı içinde anında budayarak mesaj kotasını koruyan Chrome eklentisi.",
      buildability: "Anında (Birkaç Gün). Kurumsal satış döngüsü gerektirmez, Chrome Web Store'da hemen doğrulanabilir.",
      icon: Chrome,
      tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/20"
    },
    // --- MEVCUT TEMEL FİKİR 1 ---
    {
      id: "rag-optimizer",
      category: "B2B Middleware • API",
      title: "Enterprise RAG Pipeline Optimizer",
      target: "Vektör veritabanı ve kurumsal arama sistemleri kuran şirketler",
      whyNow: "Geri getirilen chunk'ların %40'tan fazlası alakasız gürültü içeriyor ve 'needle-in-a-haystack' sorunuyla model performansını düşürüyor.",
      description: "Vektör aramasından dönen döküman parçalarını LLM'e göndermeden önce semantik olarak budayan ve sadece can alıcı kısımları ileten yüksek verimli API katmanı.",
      buildability: "Orta Seviye. Cross-encoder reranker ve extractive summarization pipeline'ı.",
      icon: Database,
      tagColor: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    },
    // --- MEVCUT TEMEL FİKİR 2 ---
    {
      id: "agent-memory",
      category: "Autonomous Systems",
      title: "Agent Long-Term Memory Compressor",
      target: "Çok adımlı (multi-turn) kodlama ve araştırma ajanları geliştirenler",
      whyNow: "Uzun süre çalışan ajanlar token limitini doldurur ve geçmişteki önemli sistem talimatlarını unutur.",
      description: "Ajanın konuşma geçmişini dinamik olarak sıkıştıran, gereksiz tool loglarını temizleyip kritik kararları ve state verilerini koruyan hafıza yöneticisi.",
      buildability: "Orta Seviye. Konuşma geçmişi döngülerine entegre edilen hafif Python/TypeScript kütüphanesi.",
      icon: Brain,
      tagColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
    },
    // --- MEVCUT TEMEL FİKİR 3 ---
    {
      id: "prompt-caching",
      category: "LLM FinOps",
      title: "Prompt Cache & Token Reducer",
      target: "Yüksek API faturası ödeyen SaaS ve AI startup'ları",
      whyNow: "Anthropic, OpenAI ve Gemini'ın prompt caching özellikleri doğru formatlanmış ve budanmış context gerektirir.",
      description: "Statik ve dinamik context'i ayrıştırıp yeniden kullanılabilir token bloklarını optimize eden ve prompt maliyetlerini %70'e kadar azaltan optimizasyon motoru.",
      buildability: "Düşük/Orta Seviye. Token normalizasyonu ve cache hizalama proxy'si.",
      icon: Layers,
      tagColor: "text-teal-500 bg-teal-500/10 border-teal-500/20"
    }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${
      theme === 'dark' ? 'bg-[#06080e] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Dynamic Background Blur */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] blur-[140px] pointer-events-none -z-10 ${
        theme === 'dark' 
          ? 'bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-emerald-500/10' 
          : 'bg-gradient-to-tr from-cyan-300/30 via-blue-200/30 to-emerald-200/30'
      }`} />

      {/* Header */}
      <header className={`border-b backdrop-blur-md sticky top-0 z-50 transition-colors ${
        theme === 'dark' ? 'border-slate-800/80 bg-[#06080e]/85' : 'border-slate-200 bg-white/85'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
              <Scissors className="w-4 h-4 text-white transform -rotate-45" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              ContextPruner<span className="text-cyan-500">.com</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Direct Contact Email Chip */}
            <a 
              href={`mailto:${contactEmail}?subject=Domain%20Offer%20for%20ContextPruner.com`}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:border-cyan-600'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-cyan-500" />
              <span>{contactEmail}</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border transition-all ${
                theme === 'dark' 
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action */}
            <a 
              href="#contact-buy"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-sm"
            >
              Direct Acquisition
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-14 pb-20">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border ${
            theme === 'dark' 
              ? 'bg-slate-900/80 border-slate-800 text-slate-300' 
              : 'bg-white border-slate-200 text-slate-700 shadow-sm'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Category-Defining AI & LLM Infrastructure Domain</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.12]">
            Own the Flagship Brand for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500">
              Context & Token Optimization
            </span>
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            As autonomous agents, MCP tools, and RAG pipelines dominate the AI landscape, bloated context windows and security risks are the core bottlenecks. <strong className={theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}>ContextPruner.com</strong> provides instant industry credibility and SEO authority.
          </p>

          {/* Direct Buy Trust Banner */}
          <div className={`p-4 rounded-2xl border max-w-xl mx-auto text-left flex items-center justify-between gap-3 ${
            theme === 'dark' 
              ? 'bg-slate-900/60 border-slate-800 text-slate-300' 
              : 'bg-cyan-50/70 border-cyan-200 text-slate-800'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold">Sahibinden Doğrudan & Güvenli Satış</p>
                <p className="text-[11px] opacity-80 mt-0.5">Aracı komisyonu olmadan veya Escrow (Dan/Sedo) güvencesiyle hızlı devir.</p>
              </div>
            </div>
            <a 
              href={`mailto:${contactEmail}?subject=Direct%20Acquisition%20ContextPruner.com`}
              className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 shrink-0 transition-colors"
            >
              İletişime Geç
            </a>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="#blueprints"
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium border transition-all flex items-center justify-center gap-2 ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-300 shadow-sm'
              }`}
            >
              <span>7 Proje Fikrinin Tamamını İncele</span>
              <ArrowRight className="w-4 h-4 text-cyan-500" />
            </a>
            <a 
              href="#contact-buy"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Satın Alma & Teklif Ver</span>
            </a>
          </div>
        </div>

        {/* 7 Turnkey Product Blueprints */}
        <section id="blueprints" className="mt-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
              Turnkey AI Products & SaaS Models
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Bu Domain ile Hayata Geçirebileceğiniz 7 Güçlü Proje
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              <strong className="text-cyan-500">ContextPruner.com</strong> alan adını aldığınızda B2B middleware'den B2C tarayıcı eklentilerine ve MCP sunucularına kadar aşağıdaki projeler için hazır bir marka gücüne sahip olursunuz:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allUseCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all group relative ${
                    theme === 'dark'
                      ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  } ${index === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                        {item.category}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform ${
                        theme === 'dark' ? 'bg-slate-800/80' : 'bg-slate-100'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold group-hover:text-cyan-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                        Hedef: <span className="font-medium">{item.target}</span>
                      </p>
                    </div>

                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item.description}
                    </p>

                    <div className={`pt-3 border-t space-y-1.5 text-xs ${
                      theme === 'dark' ? 'border-slate-800/80' : 'border-slate-100'
                    }`}>
                      <div>
                        <span className="font-semibold text-cyan-500">Neden Şimdi: </span>
                        <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>{item.whyNow}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-emerald-500">Geliştirme Eforu: </span>
                        <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{item.buildability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Direct Contact & Acquisition Section */}
        <section id="contact-buy" className="mt-24 scroll-mt-24">
          <div className={`rounded-3xl border p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl relative transition-all ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-slate-900 to-[#06080e] border-cyan-500/30'
              : 'bg-gradient-to-b from-white to-slate-50 border-cyan-300'
          }`}>
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 text-cyan-500 shadow-inner">
              <Zap className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Doğrudan Sahibi ile Güvenli İletişim
            </h2>
            <p className={`text-sm mt-3 max-w-xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <strong className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>ContextPruner.com</strong> alan adını doğrudan satın almak, teklif vermek veya devir sürecini başlatmak için iletişime geçin.
            </p>

            {/* Prominent Mail Box */}
            <div className={`mt-6 p-4 rounded-xl border max-w-md mx-auto flex items-center justify-between gap-3 ${
              theme === 'dark' 
                ? 'bg-slate-950/80 border-slate-800 text-slate-200' 
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}>
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="font-mono text-sm font-semibold truncate select-all">{contactEmail}</span>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 font-medium transition-colors shrink-0 flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : null}
                <span>{copied ? "Kopyalandı" : "Kopyala"}</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`mailto:${contactEmail}?subject=ContextPruner.com%20Alan%20Ad%C4%B1%20Sat%C4%B1n%20Alma%20Teklifi`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Teklifinizi İletin (E-posta Gönder)</span>
              </a>

              <a
                href="https://dan.com"
                target="_blank"
                rel="noreferrer"
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-medium border transition-all flex items-center justify-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-sm'
                }`}
              >
                <span>Escrow ile Güvenli Alış</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className={`mt-8 pt-6 border-t flex flex-wrap justify-center items-center gap-6 text-xs ${
              theme === 'dark' ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Doğrudan & Hızlı İletişim</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Escrow / Dan Alıcı Koruması</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Anında Transfer Kodu (EPP/Auth)</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t py-8 text-center text-xs transition-colors ${
        theme === 'dark' 
          ? 'border-slate-900 bg-slate-950 text-slate-500' 
          : 'border-slate-200 bg-slate-100 text-slate-600'
      }`}>
        <div className="max-w-6xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} ContextPruner.com. Tüm hakları saklıdır.</p>
          <p>
            Doğrudan İletişim & Teklif: <a href={`mailto:${contactEmail}`} className="text-cyan-500 underline font-medium">{contactEmail}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
