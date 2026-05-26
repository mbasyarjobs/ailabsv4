/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Play,
  Compass,
  MessageCircle,
  HelpCircle,
  Phone,
  ArrowUpRight,
  Copy,
  Menu,
  X,
  ArrowRight,
  Mail,
  Image as ImageIcon,
  Bot,
  Share2,
  Search,
  Check,
  Info,
  Layers,
  Video,
  ExternalLink,
  Sliders,
  Sparkle,
  Code,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { StyleGuide, ToolItem } from "./types";
import { STYLE_GUIDES, TOOLS_HUB_LIST } from "./data";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<StyleGuide | null>(null);
  const [imageMode, setImageMode] = useState<"aesthetic" | "placeholder">(
    "aesthetic",
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Custom interactive wizard state
  const [activeWizardStyle, setActiveWizardStyle] = useState<StyleGuide>(
    STYLE_GUIDES[0],
  );
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Form support simulation state
  const [ticketSubject, setTicketSubject] = useState<string>("");
  const [ticketDetail, setTicketDetail] = useState<string>("");
  const [ticketSubmitted, setTicketSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerCopyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const categories = [
    "All",
    "Claymation",
    "3D/CGI",
    "Anime",
    "2D/Cartoon",
    "Stylized",
  ];

  const filteredStyles = STYLE_GUIDES.filter((item) => {
    const matchCat =
      activeCategory === "All" || item.category === activeCategory;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchCat && matchSearch;
  });

  // Modern design header rendering helpers
  const renderIcon = (type: string) => {
    switch (type) {
      case "chat":
        return <MessageCircle className="w-5 h-5 text-brand-cyan" />;
      case "bot":
        return <Bot className="w-5 h-5 text-brand-violet" />;
      case "mail":
        return <Mail className="w-5 h-5 text-brand-pink" />;
      case "leonardo":
        return <ImageIcon className="w-5 h-5 text-brand-cyan" />;
      case "google":
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const handleCreateWhatsAppTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketDetail) return;
    const waText = `Halo Admin AI Animation Studio,\n\nSaya butuh bantuan mengenai: ${ticketSubject || "General"}\n\nDetail:\n${ticketDetail}`;
    const uri = `https://wa.me/6287732480033?text=${encodeURIComponent(waText)}`;
    window.open(uri, "_blank");
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketSubject("");
      setTicketDetail("");
    }, 3000);
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-gray-200 selection:bg-brand-violet/30 overflow-x-hidden">
      {/* Background Cyber Glow Layer and Glass Blobs */}
      <div className="absolute top-[5%] left-[10%] w-[350px] h-[350px] bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[5%] w-[450px] h-[450px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-brand-violet/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* STICKY NAVBAR */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/50"
            : "bg-transparent py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-5.5 h-5.5 text-white" />
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-violet opacity-30 blur-sm group-hover:opacity-60 transition-all duration-300 -z-10" />
              </div>
              <span className="font-display font-medium text-lg md:text-xl tracking-tight text-white group-hover:text-slate-300 transition-all">
                Rullz AI{" "}
                <span className="text-brand-cyan tracking-wide font-extrabold">
                  Studio Hub
                </span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5 p-1 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "AI Tools", href: "#aitools" },
                { name: "Style Guide", href: "#styles" },
                { name: "Prompt Lab", href: "#prompt-lab" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-xs px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Premium CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <span className="text-xs font-sans text-slate-300 bg-white/5 border border-white/10 py-1.5 px-3 rounded-full flex items-center gap-1.5 font-medium backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 animate-ping" />
                Platform Komunitas
              </span>
              <a
                href="#prompt-lab"
                className="inline-flex items-center justify-center px-4.5 py-2 bg-white text-black font-semibold text-xs rounded-full hover:bg-brand-cyan hover:scale-105 transition-all duration-200 shadow-md shadow-cyan-500/10 cursor-pointer"
              >
                Coba Prompt Lab
              </a>
            </div>

            {/* Mobile Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition backdrop-blur-md"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-black/80 border-b border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "AI Tools", href: "#aitools" },
                  { name: "Style Guide", href: "#styles" },
                  { name: "Prompt Lab", href: "#prompt-lab" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <div className="text-xs font-sans text-slate-300 bg-white/5 border border-white/10 py-1.5 px-3 rounded-md inline-block self-start font-medium backdrop-blur-md">
                    Komunitas Kreator Animasi
                  </div>
                  <a
                    href="#prompt-lab"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 px-4 bg-white text-black hover:bg-slate-100 rounded-full text-sm font-bold shadow-md shadow-white/5"
                  >
                    Mulai Eksperimen
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative pt-32 pb-24 md:pt-44 md:pb-36 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Particle Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 animate-pulse duration-[8000ms]">
          <div className="absolute top-20 left-[15%] w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse opacity-40 duration-1000" />
          <div className="absolute top-[40%] right-[10%] w-2 h-2 bg-brand-violet rounded-full animate-ping opacity-35 duration-[3000ms]" />
          <div className="absolute bottom-[20%] left-[25%] w-1 h-1 bg-brand-pink rounded-full opacity-60 animate-bounce duration-[4000ms]" />
          <div className="absolute top-[60%] left-[8%] w-1.5 h-1.5 bg-brand-cyan rounded-full opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-3.5 h-3.5 border border-white/10 rounded-full animate-spin duration-[20000ms]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-brand-cyan mb-6 shadow-inner tracking-wide uppercase backdrop-blur-md"
          >
            <Sparkle className="w-3.5 h-3.5 text-brand-cyan animate-spin duration-[6000ms]" />
            Rullz Ai Labs
          </motion.div>

          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-none text-white"
          >
            AI Animation <br />
            <span className="bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink bg-clip-text text-transparent drop-shadow-sm">
              Studio Hub
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Semua tools AI animation, style reference, dan chatbot AI studio
            dalam satu tempat. Percepat proses produksi kreatif Anda dengan
            efisien.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#aitools"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full shadow-xl shadow-cyan-500/5 hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Mulai Sekarang
              <ArrowRight className="w-4 h-4 text-black" />
            </a>

            <a
              href="#styles"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/25 text-sm font-bold text-white rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4.5 h-4.5 text-slate-300" />
              Lihat Style
            </a>
          </motion.div>

          {/* Visual Showcase Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 sm:mt-20 relative rounded-2xl border border-white/10 p-2 sm:p-4 bg-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/60 group overflow-hidden"
          >
            {/* Top Bar Decoration */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-t-xl border-b border-white/10 text-xs font-mono text-slate-400 justify-between">
              <div className="flex items-center gap-1.5 font-sans">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-2 text-[11px] text-slate-300 font-medium">
                  storyboard_preset_archives.json
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-cyan flex items-center gap-1 font-sans font-medium text-[11px]">
                  Arsip Prompt Siap Salin
                </span>
              </div>
            </div>

            {/* Embedded static showcase panel */}
            <div className="bg-black/20 p-5 md:p-8 rounded-b-xl text-left space-y-6">
              <div className="space-y-3">
                <div className="text-2xl font-display font-semibold text-white tracking-tight flex items-center gap-2">
                  <Video className="w-5 h-5 text-brand-cyan" />
                  Contoh Video Creator AI
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Tonton contoh hasil video yang dibuat menggunakan tools AI
                  animation terbaru. Klik tombol play untuk memutar video dalam
                  kualitas HD.
                </p>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "video-1",
                    title: "Claymation Style Animation",
                    desc: "Contoh animasi clay motion dengan tekstur lembut dan warna pastel.",
                    src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4",
                  },
                  {
                    id: "video-2",
                    title: "3D CGI Character Motion",
                    desc: "Demonstrasi karakter 3D dengan rigging dan motion capture realistis.",
                    src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4",
                  },
                ].map((video) => (
                  <div
                    key={video.id}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-all duration-300"
                  >
                    {/* Video Player */}
                    <div className="aspect-[3/2] w-full relative bg-black/40 overflow-hidden">
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        controls
                        controlsList="nodownload"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect fill='%23000' width='16' height='9'/%3E%3Ccircle cx='8' cy='4.5' r='2.5' fill='%23fff' opacity='0.7'/%3E%3Cpolygon points='7,3.5 7,5.5 9,4.5' fill='%23000' opacity='0.7'/%3E%3C/svg%3E"
                      >
                        <source src={video.src} type="video/mp4" />
                        Browser Anda tidak mendukung HTML5 video.
                      </video>
                    </div>

                    {/* Video Info */}
                    <div className="p-4 bg-black/20 border-t border-white/10">
                      <h4 className="text-sm font-display font-medium text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1.5 font-light leading-relaxed">
                        {video.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FITUR 1 - AI TOOLS & CHATBOT STUDIO */}
      <section
        id="aitools"
        className="py-24 relative z-10 border-t border-white/10 bg-black/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
              AI Tools Studio Rekomendasi
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight">
              Akses Cepat Menuju Workspace Animasi AI
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
              Kompilasi tools gratis, premium, dan asisten custom AI untuk
              mendukung produktivitas studio Konten Anda di satu tempat.
            </p>
          </div>

          {/* Tools Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TOOLS_HUB_LIST.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ y: -6 }}
                className="relative group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Background linear gradient trace of glass highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-white/50 transition-all duration-300" />

                <div>
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-white/35 transition-colors">
                      {renderIcon(tool.iconType)}
                    </div>

                    <span
                      className={`text-[10px] uppercase tracking-wider font-bold py-1 px-3.5 rounded-full border ${tool.badgeColor}`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  {/* Title and text info */}
                  <h4 className="text-lg font-display font-medium text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-3 font-light leading-relaxed min-h-[3.75rem]">
                    {tool.desc}
                  </p>
                </div>

                {/* Open link action buttons */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                    Status:{" "}
                    <span className="text-emerald-400 font-bold">Ready</span>
                  </span>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 py-2.5 px-4.5 rounded-full transition-all duration-200 backdrop-blur-md"
                  >
                    {tool.btnText}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FITUR 2 - AI ANIMATION STYLE GUIDE */}
      <section
        id="styles"
        className="py-24 relative z-10 border-t border-white/10 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-xs font-mono font-bold tracking-widest text-brand-violet uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
                AI Animation Style Guide
              </h2>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight">
                Contoh Berbagai Style Animasi Populer
              </h3>
              <p className="text-slate-300 text-sm mt-3 font-light leading-relaxed">
                Jelajahi dan pilih gaya animasi terbaik yang cocok dengan
                storyboard Anda. Gunakan prompt instan kami untuk integrasi
                model difusi cepat.
              </p>
            </div>

            {/* Layout Customizer Toggles */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-black/30 p-1 border border-white/10 rounded-xl flex items-center text-xs backdrop-blur-md">
                <button
                  onClick={() => setImageMode("aesthetic")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    imageMode === "aesthetic"
                      ? "bg-white text-black shadow"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Galeri Estetik
                </button>
                <button
                  onClick={() => setImageMode("placeholder")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    imageMode === "placeholder"
                      ? "bg-white text-black shadow"
                      : "text-slate-300 hover:text-white"
                  }`}
                  title="Gunakan placeholder berlogo placehold.co seperti instruksi struktural"
                >
                  Placeholder Polos
                </button>
              </div>
            </div>
          </div>

          {/* Search and Category Filtering bar */}
          <div className="mb-10 flex flex-col md:flex-row items-center gap-4 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-3 rounded-2xl">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari gaya..."
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-violet backdrop-blur-md"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-white text-black font-bold"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Style Guides Modern Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredStyles.map((style) => (
                <motion.div
                  key={style.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl backdrop-blur-md"
                >
                  <div>
                    {/* Thumbnail wrapper */}
                    <div className="aspect-[3/2] w-full overflow-hidden relative bg-black/40">
                      {/* Image zoom on hover */}
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={
                          imageMode === "aesthetic"
                            ? style.imageUrl
                            : style.placeholderUrl
                        }
                        alt={style.name}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />

                      {/* Top Overlay Badge for developer tag */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap gap-1">
                        <span className="text-[9px] font-mono tracking-wider font-bold bg-black/60 text-brand-cyan py-0.5 px-2 rounded-md border border-white/5 backdrop-blur-sm">
                          {style.category}
                        </span>
                      </div>

                      {/* Right Creator Badge */}
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="text-[9px] font-mono text-slate-300 bg-black/60 py-0.5 px-2 rounded-md border border-white/5 backdrop-blur-sm">
                          @{style.creator}
                        </span>
                      </div>

                      {/* Hover Play/Details Action Button */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <button
                          onClick={() => {
                            setSelectedStyle(style);
                            setActiveWizardStyle(style);
                          }}
                          className="bg-white text-black hover:bg-brand-cyan hover:scale-105 px-4 py-2.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-xl transition-all"
                        >
                          <Play className="w-4 h-4 text-black fill-black" />
                          Gunakan Prompt
                        </button>
                      </div>
                    </div>

                    {/* Card Content Footer */}
                    <div className="p-5">
                      <h4 className="text-base font-display font-medium text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                        {style.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed font-light">
                        {style.desc}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-4">
                        {style.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] text-slate-450 bg-white/5 px-2 py-0.5 rounded font-mono border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Copy Prompts Shortcut Footer Bar */}
                  <div className="p-5 py-3.5 bg-black/20 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedStyle(style);
                        setActiveWizardStyle(style);
                      }}
                      className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-all"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-500" />
                      Detail Spek
                    </button>

                    <button
                      onClick={() =>
                        triggerCopyToClipboard(style.prompt, style.id)
                      }
                      className="text-[11px] font-mono text-white hover:text-brand-cyan font-semibold flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-full transition-all"
                    >
                      {copiedId === style.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />{" "}
                          Tersalin!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> CopyPrompt
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredStyles.length === 0 && (
              <div className="col-span-full py-12 text-center bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-slate-400 text-sm">
                  Gaya animasi pencarian "{searchQuery}" tidak ditemukan.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-3 text-xs text-brand-cyan hover:underline"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FITUR 3 - CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 relative z-10 border-t border-white/10 bg-black/10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-brand-violet/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl backdrop-blur-sm">
                <HelpCircle className="w-8 h-8 text-brand-cyan" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Butuh Bantuan?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto font-light leading-relaxed">
                Jika mengalami kendala seputar pemakaian prompt, workflow
                kustom, atau pendaftaran kelas, silakan hubungi WhatsApp admin
                kami secara langsung.
              </p>

              {/* Quick form simulation inside section */}
              <form
                onSubmit={handleCreateWhatsAppTicket}
                className="max-w-md mx-auto mt-8 text-left space-y-4"
              >
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-slate-405 uppercase tracking-wide block mb-1">
                      Subjek Pertanyaan
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-white/30 transition backdrop-blur-md"
                      placeholder="Contoh: Kesulitan mendaftar Temporary Email"
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-405 uppercase tracking-wide block mb-1">
                      Pesan detail bantuan *
                    </label>
                    <textarea
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-white/30 transition resize-none backdrop-blur-md"
                      placeholder="Tulis kendala Anda di sini, lalu klik tombol kirim di bawah..."
                      value={ticketDetail}
                      onChange={(e) => setTicketDetail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-slate-950 text-sm font-bold rounded-full shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                    Kirim ke WhatsApp Admin
                  </button>

                  <a
                    href="https://wa.me/6287732480033"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 rounded-full transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-450" />
                    +62 877 3248 0033
                  </a>
                </div>

                {ticketSubmitted && (
                  <div className="text-center p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-400 font-medium">
                    Membuka WhatsApp Web... Sukses generate template pesan!
                  </div>
                )}
              </form>

              {/* Extra Security disclaimer */}
              <p className="text-[11px] text-slate-400 mt-6 max-w-xs mx-auto font-light">
                Jam Kerja Admin: Setiap hari pukul 09:00 - 21:00 WIB. Pertanyaan
                Anda akan segera direspons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-black/40 border-t border-white/10 py-12 text-slate-400 text-xs index-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side brand info */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-cyan flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="text-left">
                <span className="font-display font-extrabold text-sm text-white block">
                  AI Generated{" "}
                  <span className="text-brand-cyan">Animation</span>
                </span>
                <span className="text-[10px] text-slate-350 block font-light">
                  Generated Prompt & Content Maker for AI Animation Creators
                </span>
              </div>
            </div>

            {/* Middle Nav Shortcuts */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
              <a href="#home" className="hover:text-white transition-all">
                Home
              </a>
              <a href="#aitools" className="hover:text-white transition-all">
                AI Tools
              </a>
              <a href="#styles" className="hover:text-white transition-all">
                Style Guides
              </a>
              <a href="#prompt-lab" className="hover:text-white transition-all">
                Prompt Lab
              </a>
              <a href="#contact" className="hover:text-white transition-all">
                Contact
              </a>
            </div>

            {/* Right side social representations */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="Twitter"
              >
                <Bot className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="GitHub Repository"
              >
                <Code className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copyright Divider line */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-slate-500 font-mono text-[10px] gap-4">
            <div>
              &copy; {new Date().getFullYear()} M Basyar. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-300 transition cursor-pointer">
                Privacy Policy
              </span>
              <span>&bull;</span>
              <span className="hover:text-slate-300 transition cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Bottom Right) */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/6287732480033?text=Halo%20Basyar%20AI%20Animation%20Studio%20Hub,%20saya%20tertarik%20menggunakan%20berbagai%20layanan%20asisten%20prompt..."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        title="Hubungi Admin WhatsApp"
      >
        <span className="absolute -top-12 right-0 bg-slate-950 text-slate-200 text-xs py-1.5 px-3.5 rounded-lg font-medium border border-white/10 shadow-lg select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Tanya Kami (WhatsApp)
        </span>
        <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950 group-hover:rotate-12 transition-transform" />
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 -z-10" />
      </a>

      {/* POPUP DETAIL MODAL DIALOGUE */}
      <AnimatePresence>
        {selectedStyle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto bg-black/70 backdrop-blur-md"
          >
            {/* Clicking background backdrop closes modal */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedStyle(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ type: "spring", bounce: 0.15 }}
              className="relative w-full max-w-3xl bg-black/60 border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 backdrop-blur-xl"
            >
              {/* Modal Banner Area */}
              <div className="aspect-[21/9] w-full relative bg-black/40">
                <img
                  className="w-full h-full object-cover brightness-[0.7]"
                  src={
                    imageMode === "aesthetic"
                      ? selectedStyle.imageUrl
                      : selectedStyle.placeholderUrl
                  }
                  alt={selectedStyle.name}
                  referrerPolicy="no-referrer"
                />

                {/* Visual Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Modal close icon */}
                <button
                  onClick={() => setSelectedStyle(null)}
                  className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-neutral-800 text-slate-400 hover:text-white rounded-full border border-white/10 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Sub-badge over header */}
                <div className="absolute bottom-4 left-6 z-10">
                  <span className="text-[10px] font-mono tracking-wider bg-brand-cyan/20 text-brand-cyan px-2.5 py-1 rounded border border-brand-cyan/30 uppercase">
                    {selectedStyle.category} Style Core
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-medium text-white mt-2 tracking-tight">
                    {selectedStyle.name}
                  </h4>
                </div>
              </div>

              {/* Modal Scrollable Contents area */}
              <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="space-y-2">
                  <h5 className="text-xs font-mono text-slate-500 uppercase">
                    DESKRIPSI SENI ANIMASI
                  </h5>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {selectedStyle.desc}
                  </p>
                </div>

                {/* Combined Compiled Prompt panels inside Modal with double action copy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left block prompt image */}
                  <div className="p-4 bg-black/20 rounded-xl border border-white/10 flex flex-col justify-between backdrop-blur-sm">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                          <ImageIcon className="w-3.5 h-3.5 text-brand-cyan" />{" "}
                          Text-to-Image (Prompt)
                        </span>
                        <button
                          onClick={() =>
                            triggerCopyToClipboard(
                              selectedStyle.prompt,
                              `${selectedStyle.id}-modal-img`,
                            )
                          }
                          className="text-[10px] font-mono text-brand-cyan hover:underline hover:scale-105 transition"
                        >
                          {copiedId === `${selectedStyle.id}-modal-img`
                            ? "Copied!"
                            : "Copy"}
                        </button>
                      </div>
                      <p className="text-xs text-slate-300 font-mono leading-relaxed select-all">
                        {selectedStyle.prompt}
                      </p>
                    </div>
                  </div>

                  {/* Right block prompt video */}
                  <div className="p-4 bg-black/20 rounded-xl border border-white/10 flex flex-col justify-between backdrop-blur-sm">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                          <Video className="w-3.5 h-3.5 text-brand-violet" />{" "}
                          Motion Physics (Video)
                        </span>
                        <button
                          onClick={() =>
                            triggerCopyToClipboard(
                              selectedStyle.videoPrompt,
                              `${selectedStyle.id}-modal-v`,
                            )
                          }
                          className="text-[10px] font-mono text-brand-violet hover:underline hover:scale-105 transition"
                        >
                          {copiedId === `${selectedStyle.id}-modal-v`
                            ? "Copied!"
                            : "Copy"}
                        </button>
                      </div>
                      <p className="text-xs text-slate-300 font-mono leading-relaxed select-all">
                        {selectedStyle.videoPrompt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional metadata tags */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-450 font-mono">
                      ASPECT RATIO DEFAULTS:
                    </span>
                    <span className="bg-white/5 px-2.5 py-1 rounded text-slate-350 border border-white/10 font-mono">
                      --ar 16:9
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-slate-450 font-mono">
                      RECOMMENDED SPEED:
                    </span>
                    <span className="bg-white/5 px-2.5 py-1 rounded text-slate-350 border border-white/10 font-mono">
                      Motion Index 6-8
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Bottom Call action button */}
              <div className="px-6 py-4 bg-black/40 border-t border-white/15 flex items-center justify-end gap-3 backdrop-blur-sm">
                <button
                  onClick={() => setSelectedStyle(null)}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-semibold border border-white/10 transition-all cursor-pointer"
                >
                  Tutup Panduan
                </button>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-tr from-brand-violet to-brand-cyan hover:scale-[1.02] active:scale-[0.98] text-white text-xs font-bold rounded-xl transition-all shadow-lg"
                >
                  Jalankan Tool Generator
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
