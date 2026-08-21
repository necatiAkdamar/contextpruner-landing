import React, { useState, useEffect, useRef } from 'react';
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
  Mail, 
  Check, 
  Database,
  Brain,
  Sun,
  Moon,
  Shield,
  ExternalLink,
  Globe,
  ChevronDown
} from 'lucide-react';

type Lang = 'en' | 'de' | 'tr';

interface UseCase {
  id: string;
  category: string;
  title: string;
  target: string;
  whyNow: string;
  description: string;
  buildability: string;
  icon: React.ElementType;
  tagColor: string;
}

interface ContentDictionary {
  badgeText: string;
  heroTitle1: string;
  heroHighlight: string;
  heroDesc: string;
  trustBoxTitle: string;
  trustBoxDesc: string;
  btnContact: string;
  btnExplore: string;
  btnMakeOffer: string;
  blueprintsBadge: string;
  blueprintsTitle: string;
  blueprintsDesc: string;
  labelTarget: string;
  labelWhyNow: string;
  labelSpeed: string;
  ctaTitle: string;
  ctaDesc: string;
  copiedText: string;
  copyBtnText: string;
  btnSubmitOffer: string;
  btnEscrow: string;
  badgeDirect: string;
  badgeEscrow: string;
  badgeTransfer: string;
  footerRights: string;
  footerDirectContact: string;
  mailSubject: string;
  useCases: UseCase[];
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [copied, setCopied] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const contactEmail = "necatiakdamar@gmail.com";

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Click outside to close language dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  ];

  // 3 Dilde Çevrilmiş 7 Proje Fikri ve Sayfa İçeriği
  const content: Record<Lang, ContentDictionary> = {
    en: {
      badgeText: "Category-Defining AI & LLM Infrastructure Domain",
      heroTitle1: "Own the Flagship Brand for",
      heroHighlight: "Context & Token Optimization",
      heroDesc: "As autonomous agents, MCP tools, and RAG architectures dominate enterprise AI, context window bloat and prompt security are the core bottlenecks. ContextPruner.com gives your project instant authority and organic search dominance.",
      trustBoxTitle: "Direct & Verified Owner Sale",
      trustBoxDesc: "Save on broker fees or choose escrow-secured transfer (Dan / Sedo / Escrow.com).",
      btnContact: "Contact Owner",
      btnExplore: "Explore 7 Product Blueprints",
      btnMakeOffer: "Acquisition & Offer",
      blueprintsBadge: "Turnkey AI Products & SaaS Models",
      blueprintsTitle: "7 High-Growth Products You Can Build on This Domain",
      blueprintsDesc: "Acquiring ContextPruner.com gives you immediate brand leadership across the entire AI middleware, security, and developer ecosystem:",
      labelTarget: "Target",
      labelWhyNow: "Why Now",
      labelSpeed: "Speed to MVP",
      ctaTitle: "Direct Contact & Safe Domain Acquisition",
      ctaDesc: "Contact the verified owner directly to acquire ContextPruner.com, submit an offer, or start an escrow-protected transfer.",
      copiedText: "Email Copied!",
      copyBtnText: "Copy Email",
      btnSubmitOffer: "Submit Acquisition Offer (Send Email)",
      btnEscrow: "Safe Escrow Transfer",
      badgeDirect: "Direct & Fast Communication",
      badgeEscrow: "Buyer Protection via Escrow",
      badgeTransfer: "Instant EPP / Auth-Code Transfer",
      footerRights: "All rights reserved. Built for AI infrastructure innovators.",
      footerDirectContact: "Direct Inquiries & Acquisition:",
      mailSubject: "Acquisition Offer for ContextPruner.com",
      useCases: [
        {
          id: "health-audit",
          category: "Free Diagnostic & Lead Magnet",
          title: "Context Health Audit",
          target: "RAG & AI Agent Engineering Teams",
          whyNow: "Low-friction client acquisition. Prove context rot, bloated token budgets, and attention drift in seconds before pitching optimization pipelines.",
          description: "A lightweight scanner for repos, RAG corpora, and agent logs that computes a 'Context Rot Score' and visualizes token waste with attention heatmaps.",
          buildability: "Fast MVP (2-3 Weeks). Token counting, AST parsing, and token overlap heatmaps.",
          icon: Activity,
          tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
        },
        {
          id: "mcp-server",
          category: "MCP Registry Middleware",
          title: "ContextPruner MCP Server",
          target: "Developers building autonomous agents via Model Context Protocol",
          whyNow: "MCP adoption is exploding with 10k+ servers. Packaged context pruning is becoming standard infrastructure for low-latency agent loops.",
          description: "A plug-and-play MCP tool published on standard registries that intercepts heavy search results, file dumps, and API payloads before entering the LLM context.",
          buildability: "Very Fast (1-2 Weeks). Built-in organic distribution directly from MCP tool registries.",
          icon: Cpu,
          tagColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
        },
        {
          id: "context-firewall",
          category: "OWASP Top 10 • AI Security",
          title: "Context Firewall & Injection Defense",
          target: "Security-conscious teams deploying autonomous production agents",
          whyNow: "Prompt injection is the #1 vulnerability in the OWASP LLM Top 10. Attackers frequently poison untrusted MCP tool outputs and web scrapes.",
          description: "A defensive prune layer that scrubs indirect prompt injections, jailbreaks, and malicious payloads hidden within ingested web pages and emails.",
          buildability: "Niche Point Solution. Lightweight rule-based and semantic sanitizer focused specifically on agent tool outputs.",
          icon: Lock,
          tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/20"
        },
        {
          id: "context-diet",
          category: "B2C Viral • Zero Server Cost",
          title: "Context Diet Browser Extension",
          target: "ChatGPT Plus, Claude Pro & Gemini power users hitting limits",
          whyNow: "Users waste up to 70% of message limits by pasting raw web pages with HTML and cookie clutter. Zero-server privacy model enables rapid viral adoption.",
          description: "A client-side Chrome extension that automatically strips boilerplate, HTML noise, and redundant text before pasting into AI chat interfaces.",
          buildability: "Immediate (Days). 100% client-side privacy model (zero data storage) ensures instant Chrome Web Store approval.",
          icon: Chrome,
          tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/20"
        },
        {
          id: "rag-optimizer",
          category: "B2B Middleware • API",
          title: "Enterprise RAG Pipeline Optimizer",
          target: "Companies building vector search and enterprise knowledge bases",
          whyNow: "Over 40% of retrieved chunks contain irrelevant noise, causing needle-in-a-haystack confusion and degraded model reasoning.",
          description: "A high-throughput API layer that semantically prunes retrieved chunks before sending them to the LLM, preserving only salient context.",
          buildability: "Medium. Cross-encoder rerankers and extractive summarization pipelines.",
          icon: Database,
          tagColor: "text-blue-500 bg-blue-500/10 border-blue-500/20"
        },
        {
          id: "agent-memory",
          category: "Autonomous Systems",
          title: "Agent Long-Term Memory Compressor",
          target: "Teams building multi-turn coding and research agents",
          whyNow: "Long-running autonomous agents frequently hit context limits and suffer from catastrophic forgetting of initial system instructions.",
          description: "A dynamic conversation manager that continuously compresses agent history, purging repetitive tool logs while retaining critical state decisions.",
          buildability: "Medium. Lightweight Python/TypeScript library easily plugged into agent loops.",
          icon: Brain,
          tagColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
        },
        {
          id: "prompt-caching",
          category: "LLM FinOps",
          title: "Prompt Cache & Token Reducer",
          target: "AI startups and SaaS platforms facing steep monthly API bills",
          whyNow: "Anthropic, OpenAI, and Gemini prompt caching mechanisms require strictly aligned and normalized static context to hit high cache rates.",
          description: "An intelligent proxy that segregates dynamic from static context, aligning tokens for maximum cache hit ratios and reducing API costs by up to 70%.",
          buildability: "Low/Medium. Token normalization and proxy-level cache alignment engine.",
          icon: Layers,
          tagColor: "text-teal-500 bg-teal-500/10 border-teal-500/20"
        }
      ]
    },
    de: {
      badgeText: "Kategorieprägende AI & LLM Infrastruktur-Domain",
      heroTitle1: "Sichern Sie sich die führende Marke für",
      heroHighlight: "Kontext- & Token-Optimierung",
      heroDesc: "Während autonome Agenten, MCP-Tools und RAG-Architekturen die KI-Landschaft dominieren, sind aufgeblähte Kontextfenster und Prompt-Sicherheitsrisiken die größten Hürden. ContextPruner.com verleiht Ihrem Projekt sofortige Marktführerschaft.",
      trustBoxTitle: "Direkter & Sicherer Kauf vom Eigentümer",
      trustBoxDesc: "Sparen Sie Maklergebühren oder nutzen Sie den treuhandgesicherten Transfer (Dan / Sedo / Escrow.com).",
      btnContact: "Eigentümer kontaktieren",
      btnExplore: "Alle 7 Produkt-Blueprints ansehen",
      btnMakeOffer: "Angebot abgeben & Kaufen",
      blueprintsBadge: "Schlüsselfertige KI-Produkte & SaaS-Modelle",
      blueprintsTitle: "7 lukrative Produkte, die Sie auf dieser Domain aufbauen können",
      blueprintsDesc: "Mit dem Erwerb von ContextPruner.com erhalten Sie sofortige Markenautorität im gesamten KI-Middleware- und Entwickler-Ökosystem:",
      labelTarget: "Zielgruppe",
      labelWhyNow: "Warum jetzt",
      labelSpeed: "MVP-Entwicklungszeit",
      ctaTitle: "Direkter Kontakt & Sichere Domain-Übertragung",
      ctaDesc: "Kontaktieren Sie den verifizierten Eigentümer direkt, um ein Kaufangebot abzugeben oder den Treuhand-Transfer zu starten.",
      copiedText: "E-Mail kopiert!",
      copyBtnText: "E-Mail kopieren",
      btnSubmitOffer: "Kaufangebot senden (E-Mail öffnen)",
      btnEscrow: "Sicherer Treuhand-Kauf",
      badgeDirect: "Direkte & Schnelle Kommunikation",
      badgeEscrow: "Käuferschutz via Escrow",
      badgeTransfer: "Sofortiger Auth-Code / EPP Transfer",
      footerRights: "Alle Rechte vorbehalten. Entwickelt für KI-Innovatoren.",
      footerDirectContact: "Direkter Kontakt & Akquisitionsanfragen:",
      mailSubject: "Kaufangebot für ContextPruner.com",
      useCases: [
        {
          id: "health-audit",
          category: "Kostenlose Diagnose & Lead-Magnet",
          title: "Context Health Audit",
          target: "RAG- & KI-Agenten-Entwicklerteams",
          whyNow: "Reibungslose Kundengewinnung. Weisen Sie Token-Verschwendung und Kontext-Fäulnis in Sekundenschnelle nach, bevor Sie Optimierungstools verkaufen.",
          description: "Ein leichtgewichtiger Scanner für Repositories, RAG-Korpora und Agenten-Logs, der einen 'Context Rot Score' ermittelt und Token-Verlust visualisiert.",
          buildability: "Schnelles MVP (2-3 Wochen). Token-Zählung, AST-Parsing und semantische Heatmaps.",
          icon: Activity,
          tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
        },
        {
          id: "mcp-server",
          category: "MCP Registry Middleware",
          title: "ContextPruner MCP Server",
          target: "Entwickler autonomer Agenten über das Model Context Protocol",
          whyNow: "MCP wächst rasant mit über 10.000 Servern. Vorkomprimierter Kontext für Tool-Ausgaben wird zum Standard für latenzarme Agenten.",
          description: "Ein MCP-Tool für offizielle Registries, das umfangreiche Suchergebnisse, Datei-Dumps und API-Payloads vor dem LLM-Kontextfenster komprimiert.",
          buildability: "Sehr schnell (1-2 Wochen). Organische Nutzergewinnung direkt über MCP-Tool-Kataloge.",
          icon: Cpu,
          tagColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
        },
        {
          id: "context-firewall",
          category: "OWASP Top 10 • KI-Sicherheit",
          title: "Context Firewall & Injektionsschutz",
          target: "Sicherheitsorientierte Teams mit Produktions-Agenten",
          whyNow: "Prompt Injection ist die Bedrohung #1 in den OWASP LLM Top 10. Angreifer manipulieren Agenten gezielt über manipulierte MCP-Server und Webseiten.",
          description: "Eine Schutzschicht, die indirekte Prompt-Injections, Jailbreaks und bösartige Befehle aus externen Tool-Ergebnissen und E-Mails herausfiltert.",
          buildability: "Spezialisierte Lösung. Leichtgewichtiger semantischer Filter speziell für MCP-Tool-Outputs.",
          icon: Lock,
          tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/20"
        },
        {
          id: "context-diet",
          category: "B2C Viral • Keine Serverkosten",
          title: "Context Diet Browser-Erweiterung",
          target: "Power-User von ChatGPT Plus, Claude Pro & Gemini",
          whyNow: "Endnutzer verschwenden bis zu 70% ihrer Nachrichten-Limits durch unformatierte Webtexte. Ein Client-Side-Datenschutzmodell ermöglicht virales Wachstum.",
          description: "Eine Chrome-Erweiterung, die HTML-Ballast und redundanten Text direkt im Browser bereinigt, bevor Inhalte in KI-Chats eingefügt werden.",
          buildability: "Sofort (Wenige Tage). 100% lokale Datenverarbeitung ohne Server-Infrastruktur.",
          icon: Chrome,
          tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/20"
        },
        {
          id: "rag-optimizer",
          category: "B2B Middleware • API",
          title: "Enterprise RAG Pipeline Optimizer",
          target: "Unternehmen mit Vektorsuche und Wissensdatenbanken",
          whyNow: "Über 40% abgerufener Chunks enthalten irrelevantes Rauschen, was die Modellgenauigkeit (Needle-in-a-Haystack) stark beeinträchtigt.",
          description: "Eine API-Schicht, die semantisches Rauschen aus abgerufenen Dokumenten filtert, bevor diese an das LLM weitergeleitet werden.",
          buildability: "Mittel. Cross-Encoder Reranking und extraktive Zusammenfassungspipelines.",
          icon: Database,
          tagColor: "text-blue-500 bg-blue-500/10 border-blue-500/20"
        },
        {
          id: "agent-memory",
          category: "Autonome Systeme",
          title: "Agent Long-Term Memory Compressor",
          target: "Entwickler mehrstufiger Coding- und Analyse-Agenten",
          whyNow: "Langlebige Agenten stoßen an Kontextgrenzen und vergessen oft grundlegende Systemanweisungen.",
          description: "Verwaltet den Konversationsverlauf dynamisch, bereinigt unwichtige Tool-Logs und erhält kritische Status- und Entscheidungspfade.",
          buildability: "Mittel. Leichtgewichtige Python/TypeScript-Bibliothek für Agenten-Loops.",
          icon: Brain,
          tagColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
        },
        {
          id: "prompt-caching",
          category: "LLM FinOps",
          title: "Prompt Cache & Token Reducer",
          target: "KI-Startups mit hohen monatlichen API-Kosten",
          whyNow: "Prompt-Caching-Funktionen von Anthropic, OpenAI und Gemini erfordern exakt ausgerichteten, statischen Kontext für hohe Cache-Trefferraten.",
          description: "Ein Proxy, der statischen und dynamischen Kontext trennt, Tokens für maximale Cache-Hits optimiert und API-Kosten um bis zu 70% senkt.",
          buildability: "Gering/Mittel. Token-Normalisierung und Proxy-basiertes Caching.",
          icon: Layers,
          tagColor: "text-teal-500 bg-teal-500/10 border-teal-500/20"
        }
      ]
    },
    tr: {
      badgeText: "Kategori Belirleyici AI & LLM Altyapı Alan Adı",
      heroTitle1: "Bu Alan Adıyla Lider Marka Olun:",
      heroHighlight: "Bağlam ve Token Optimizasyonu",
      heroDesc: "Otonom ajanlar, MCP araçları ve RAG mimarileri kurumsal yapay zekayı şekillendirirken, şişkin bağlam pencereleri ve güvenlik riskleri en kritik darboğaz haline geldi. ContextPruner.com projenize anında sektör otoritesi ve güven kazandırır.",
      trustBoxTitle: "Sahibinden Doğrudan & Güvenli Satış",
      trustBoxDesc: "Aracı komisyonu olmadan veya Escrow (Dan / Sedo / Escrow.com) güvencesiyle hızlı ve güvenli devir.",
      btnContact: "Sahibiyle İletişime Geç",
      btnExplore: "7 Proje Fikrinin Tamamını İncele",
      btnMakeOffer: "Satın Alma & Teklif Ver",
      blueprintsBadge: "Kullanıma Hazır Yapay Zeka Ürün Modelleri",
      blueprintsTitle: "Bu Domain ile Hayata Geçirebileceğiniz 7 Güçlü Proje",
      blueprintsDesc: "ContextPruner.com alan adını aldığınızda B2B middleware'den B2C tarayıcı eklentilerine ve MCP sunucularına kadar aşağıdaki projeler için hazır bir marka gücüne sahip olursunuz:",
      labelTarget: "Hedef Kitle",
      labelWhyNow: "Neden Şimdi",
      labelSpeed: "MVP Geliştirme Süresi",
      ctaTitle: "Doğrudan Sahibi ile Güvenli İletişim",
      ctaDesc: "ContextPruner.com alan adını doğrudan satın almak, teklif iletmek veya devir sürecini başlatmak için iletişime geçin.",
      copiedText: "E-posta Kopyalandı!",
      copyBtnText: "E-postayı Kopyala",
      btnSubmitOffer: "Teklifinizi İletin (E-posta Gönder)",
      btnEscrow: "Escrow ile Güvenli Alış",
      badgeDirect: "Doğrudan & Hızlı İletişim",
      badgeEscrow: "Escrow Alıcı Koruması",
      badgeTransfer: "Anında Transfer Kodu (EPP/Auth)",
      footerRights: "Tüm hakları saklıdır. Yapay zeka altyapı liderleri için tasarlandı.",
      footerDirectContact: "Doğrudan İletişim & Satın Alma:",
      mailSubject: "ContextPruner.com Alan Adı Satın Alma Teklifi",
      useCases: [
        {
          id: "health-audit",
          category: "Ücretsiz Teşhis & Lead Magnet",
          title: "Context Health Audit",
          target: "RAG ve Yapay Zeka Ajanı Geliştiren Ekipler",
          whyNow: "Düşük sürtünmeli müşteri edinimi. contextpruner.app gibi tarayıcı-içi teşhis modellerini RAG pipeline'larına taşıyıp 'önce ücretsiz teşhis, sonra ücretli optimizasyon' hunisi kurabilirsiniz.",
          description: "Repo, RAG corpus'u veya ajan loglarını tarayıp 'Context Rot Skoru' çıkaran, boşa harcanan tokenları ve modelin dikkatini dağıtan gürültüleri ısı haritasıyla gösteren ücretsiz raporlama aracı.",
          buildability: "Hızlı MVP (2-3 Hafta). Token sayımı, AST analizi ve semantik benzerlik ısı haritası.",
          icon: Activity,
          tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
        },
        {
          id: "mcp-server",
          category: "MCP Registry Middleware",
          title: "ContextPruner MCP Sunucusu",
          target: "Model Context Protocol ile otonom ajan geliştirenler",
          whyNow: "MCP 10.000+ sunucuyla hızla büyüyor. Ajanların tool çıktılarındaki şişkinliği önceden kırpacak yeniden kullanılabilir 'Context Pack' standart bir altyapı haline geliyor.",
          description: "MCP kayıt defterine doğrudan yayınlanan; arama sonuçları, API çıktıları ve büyük dosya dökümlerini ajanın ana context penceresine girmeden önce sıkıştıran araç.",
          buildability: "Çok Hızlı (1-2 Hafta). MCP SDK ile protokol standardında sunucu yazılıp registry üzerinden organik dağıtıma sunulabilir.",
          icon: Cpu,
          tagColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
        },
        {
          id: "context-firewall",
          category: "OWASP Top 10 • AI Güvenliği",
          title: "Context Firewall & Enjeksiyon Koruması",
          target: "Kurumsal güvenlik ve üretim ortamında ajan çalıştıran ekipler",
          whyNow: "OWASP LLM Top 10 listesinde prompt injection 1 numaralı tehdit. Saldırganların zehirli MCP veya web içerikleriyle ajanları manipüle etmesini önlemek bir zorunluluk.",
          description: "Maliyet değil güvenlik odaklı filtreleme: Ajanın context'ine giren web sayfaları, e-postalar ve tool sonuçlarındaki gizli talimatları (indirect prompt injection) temizleyen güvenlik katmanı.",
          buildability: "Nokta Çözüm MVP. Küçük ekipler için özellikle MCP tool çıktılarını temizleyen uygun maliyetli güvenlik filtresi.",
          icon: Lock,
          tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/20"
        },
        {
          id: "context-diet",
          category: "B2C Viral • Sıfır Sunucu Maliyeti",
          title: "Context Diet Tarayıcı Eklentisi",
          target: "ChatGPT Plus, Claude Pro & Gemini kullanıcıları",
          whyNow: "Bireysel kullanıcılar kopyala-yapıştır yaparken kota ve bağlam limitlerine takılıyor. Sıfır sunucu maliyeti ve 'veri cihazda kalır' güvencesiyle yüksek hacimli B2C pazarı sunar.",
          description: "Web arayüzlerine büyük metin veya web sayfası yapıştırıldığında gereksiz HTML, menü ve tekrarlı metinleri tarayıcı içinde anında budayarak mesaj kotasını koruyan Chrome eklentisi.",
          buildability: "Anında (Birkaç Gün). Kurumsal satış döngüsü gerektirmez, Chrome Web Store'da hemen yayınlanabilir.",
          icon: Chrome,
          tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/20"
        },
        {
          id: "rag-optimizer",
          category: "B2B Middleware • API",
          title: "Kurumsal RAG Pipeline Optimizer",
          target: "Vektör veritabanı ve kurumsal arama sistemleri kuran şirketler",
          whyNow: "Geri getirilen chunk'ların %40'tan fazlası alakasız gürültü içerir ve 'needle-in-a-haystack' sorunuyla model performansını düşürür.",
          description: "Vektör aramasından dönen döküman parçalarını LLM'e göndermeden önce semantik olarak budayan ve sadece can alıcı kısımları ileten yüksek verimli API katmanı.",
          buildability: "Orta Seviye. Cross-encoder reranker ve extractive summarization pipeline'ı.",
          icon: Database,
          tagColor: "text-blue-500 bg-blue-500/10 border-blue-500/20"
        },
        {
          id: "agent-memory",
          category: "Otonom Sistemler",
          title: "Ajan Uzun Süreli Hafıza Sıkıştırıcı",
          target: "Çok adımlı kodlama ve araştırma ajanları geliştirenler",
          whyNow: "Uzun süre çalışan ajanlar token limitini doldurur ve geçmişteki önemli sistem talimatlarını unutur.",
          description: "Ajanın konuşma geçmişini dinamik olarak sıkıştıran, gereksiz tool loglarını temizleyip kritik kararları ve state verilerini koruyan hafıza yöneticisi.",
          buildability: "Orta Seviye. Konuşma geçmişi döngülerine entegre edilen hafif Python/TypeScript kütüphanesi.",
          icon: Brain,
          tagColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
        },
        {
          id: "prompt-caching",
          category: "LLM FinOps",
          title: "Prompt Cache & Token Düşürücü",
          target: "Yüksek API faturası ödeyen SaaS ve AI startup'ları",
          whyNow: "Anthropic, OpenAI ve Gemini'ın prompt caching özellikleri doğru formatlanmış ve budanmış context gerektirir.",
          description: "Statik ve dinamik context'i ayrıştırıp yeniden kullanılabilir token bloklarını optimize eden ve prompt maliyetlerini %70'e kadar azaltan optimizasyon motoru.",
          buildability: "Düşük/Orta Seviye. Token normalizasyonu ve cache hizalama proxy'si.",
          icon: Layers,
          tagColor: "text-teal-500 bg-teal-500/10 border-teal-500/20"
        }
      ]
    }
  };

  const t = content[lang];
  const activeLangObj = languages.find(l => l.code === lang) || languages[0];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${
      theme === 'dark' ? 'bg-[#06080e] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Ambient Gradient Background Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] blur-[140px] pointer-events-none -z-10 ${
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

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Direct Contact Email Pill */}
            <a 
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(t.mailSubject)}`}
              className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:border-cyan-600'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-cyan-500" />
              <span>{contactEmail}</span>
            </a>

            {/* Language Selector Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-sm'
                }`}
                aria-label="Select Language"
              >
                <span>{activeLangObj.flag}</span>
                <span className="font-semibold uppercase">{activeLangObj.code}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {langMenuOpen && (
                <div className={`absolute right-0 mt-1.5 w-36 rounded-xl border shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-200'
                    : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                        lang === l.code
                          ? 'bg-cyan-500/10 text-cyan-500 font-bold'
                          : theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {lang === l.code && <Check className="w-3 h-3" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button (Light/Dark) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border transition-all ${
                theme === 'dark' 
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA in Navbar */}
            <a 
              href="#contact-buy"
              className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-sm shrink-0"
            >
              {t.btnMakeOffer}
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
            <span>{t.badgeText}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.12]">
            {t.heroTitle1} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500">
              {t.heroHighlight}
            </span>
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t.heroDesc}
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
                <p className="text-xs font-bold">{t.trustBoxTitle}</p>
                <p className="text-[11px] opacity-80 mt-0.5">{t.trustBoxDesc}</p>
              </div>
            </div>
            <a 
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(t.mailSubject)}`}
              className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 shrink-0 transition-colors"
            >
              {t.btnContact}
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
              <span>{t.btnExplore}</span>
              <ArrowRight className="w-4 h-4 text-cyan-500" />
            </a>
            <a 
              href="#contact-buy"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{t.btnMakeOffer}</span>
            </a>
          </div>
        </div>

        {/* 7 Turnkey Product Blueprints */}
        <section id="blueprints" className="mt-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
              {t.blueprintsBadge}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t.blueprintsTitle}
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.blueprintsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.useCases.map((item, index) => {
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
                        {t.labelTarget}: <span className="font-medium">{item.target}</span>
                      </p>
                    </div>

                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item.description}
                    </p>

                    <div className={`pt-3 border-t space-y-1.5 text-xs ${
                      theme === 'dark' ? 'border-slate-800/80' : 'border-slate-100'
                    }`}>
                      <div>
                        <span className="font-semibold text-cyan-500">{t.labelWhyNow}: </span>
                        <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>{item.whyNow}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-emerald-500">{t.labelSpeed}: </span>
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
              {t.ctaTitle}
            </h2>
            <p className={`text-sm mt-3 max-w-xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.ctaDesc}
            </p>

            {/* Prominent Mail Copy Box */}
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
                <span>{copied ? t.copiedText : t.copyBtnText}</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(t.mailSubject)}`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{t.btnSubmitOffer}</span>
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
                <span>{t.btnEscrow}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className={`mt-8 pt-6 border-t flex flex-wrap justify-center items-center gap-6 text-xs ${
              theme === 'dark' ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t.badgeDirect}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t.badgeEscrow}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t.badgeTransfer}</span>
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
          <p>© {new Date().getFullYear()} ContextPruner.com. {t.footerRights}</p>
          <p>
            {t.footerDirectContact} <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(t.mailSubject)}`} className="text-cyan-500 underline font-medium">{contactEmail}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
