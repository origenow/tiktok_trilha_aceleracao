"use client";

import { motion } from "motion/react";
import { Trophy, PhoneCall, Zap, Tag, Star, ArrowRight, Sparkles } from "lucide-react";

/* ── WhatsApp icon ───────────────────────────────────────────── */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Dados ───────────────────────────────────────────────────── */
const BENEFICIOS = [
  { icon: Trophy,    title: "Até R$ 2.400 em cupons",                   desc: "de plataforma nas primeiras fases",                          bg: "#2DCCD3", color: "#033624", span: 1 },
  { icon: PhoneCall, title: "Sessões de suporte",                        desc: "com especialistas TikTok Shop",                             bg: "#ffffff", color: "#033624", span: 1 },
  { icon: Zap,       title: "Incentivo de tráfego",                      desc: "para seus produtos em destaque",                            bg: "#FBEB35", color: "#033624", span: 1 },
  { icon: Tag,       title: "Cupons até 30% off",                        desc: "para atrair mais compradores",                              bg: "#ffffff", color: "#033624", span: 1 },
  { icon: Star,      title: "Matching com Top Criadores + Ads Credits",  desc: "Conecte-se com os maiores criadores de conteúdo do TikTok", bg: "#F1204A", color: "#ffffff", span: 2, badge: "Fase 4" },
];

const REGIOES = [
  { nome: "Birigui",        whatsapp: "https://chat.whatsapp.com/Fi4iERd1llnDjeORN0xwK2" },
  { nome: "Brás",           whatsapp: "https://chat.whatsapp.com/LUOgiqEApUc8mXOeVbPxKO" },
  { nome: "Franca",         whatsapp: "https://chat.whatsapp.com/I7FD7s2GK7N5Ld5XOTKPEa" },
  { nome: "Goiânia",        whatsapp: "https://chat.whatsapp.com/H46KVUKVn0jLEmDM9uQDSv" },
  { nome: "Mar de Espanha", whatsapp: "https://chat.whatsapp.com/CtfLuI455TZ0sWCekVHb2I" },
  { nome: "Nova Friburgo",  whatsapp: "https://chat.whatsapp.com/EBYYg34lh2q5mb5gzKKz6J" },
  { nome: "Nova Serrana",   whatsapp: "https://chat.whatsapp.com/GgWOs3eNI4n9SWdA41Oabg" },
  { nome: "Santa Catarina", whatsapp: "https://chat.whatsapp.com/DKDpkAUKmZFLh9TuwHJpq4" },
];

const HERO_STATS = [
  { val: "R$ 9.800", label: "em benefícios totais"  },
  { val: "8",        label: "regiões participantes" },
  { val: "0%",       label: "comissão por 90 dias"  },
];

/* ── Animações ────────────────────────────────────────────────── */
const heroLine = (delay: number) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.2 as const },
  transition:  { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
});

/* ── Componente principal ─────────────────────────────────────── */
export function PoloModaSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#033624" }}>

      {/* ── Noise texture – premium grain feel ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* ── Dot-grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(45,204,211,0.11) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Focal radial light – atrás do título ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 28% 38%, rgba(45,204,211,0.09) 0%, transparent 65%), " +
            "radial-gradient(ellipse 50% 40% at 80% 18%, rgba(241,32,74,0.07) 0%, transparent 60%), " +
            "radial-gradient(ellipse 40% 50% at 10% 80%, rgba(45,204,211,0.05) 0%, transparent 60%)",
        }}
      />

      {/* ── Geometric floating elements (desktop only) ── */}
      {/* Anel externo top-right */}
      <motion.div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          top: "5%", right: "2%",
          width: 220, height: 220,
          borderRadius: "50%",
          border: "1.5px solid rgba(45,204,211,0.13)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      {/* Anel interno top-right */}
      <motion.div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          top: "9.5%", right: "6.5%",
          width: 110, height: 110,
          borderRadius: "50%",
          border: "1px solid rgba(45,204,211,0.09)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {/* Dot centro do anel */}
      <div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{ top: "13.5%", right: "10.3%", width: 5, height: 5, borderRadius: "50%", backgroundColor: "rgba(45,204,211,0.35)" }}
      />

      {/* Anel bottom-left */}
      <motion.div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          bottom: "8%", left: "-4%",
          width: 260, height: 260,
          borderRadius: "50%",
          border: "1px solid rgba(45,204,211,0.07)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      />

      {/* Dots decorativos espalhados */}
      <motion.div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{ top: "18%", left: "6%", width: 6, height: 6, borderRadius: "50%", backgroundColor: "rgba(251,235,53,0.45)" }}
        animate={{ opacity: [0.45, 0.9, 0.45] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{ top: "50%", left: "3%", width: 4, height: 4, borderRadius: "50%", backgroundColor: "rgba(45,204,211,0.50)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{ top: "28%", right: "18%", width: 5, height: 5, borderRadius: "50%", backgroundColor: "rgba(241,32,74,0.40)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Linha diagonal decorativa top-left */}
      <div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          top: "12%", left: "8%",
          width: 60, height: 1,
          backgroundColor: "rgba(45,204,211,0.15)",
          transform: "rotate(-35deg)",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          top: "14%", left: "7%",
          width: 30, height: 1,
          backgroundColor: "rgba(45,204,211,0.10)",
          transform: "rotate(-35deg)",
        }}
      />

      {/* ════════════════════════════════════════════════════════
          CONTEÚDO
      ════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[430px] lg:max-w-screen-xl mx-auto px-6 lg:px-20 py-12 lg:py-14 flex flex-col gap-10 lg:gap-14">

        {/* ══ ① HERO — grid 12 colunas ══════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 lg:items-start">

          {/* ── Coluna esquerda · 7 cols ── */}
          <div className="lg:col-span-7">

            {/* Badge glassmorphism */}
            <motion.div
              className="inline-flex mb-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body font-semibold text-xs uppercase tracking-widest"
                style={{
                  background: "rgba(241,32,74,0.15)",
                  border: "1px solid rgba(241,32,74,0.32)",
                  color: "#F1204A",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#F1204A" }}
                />
                Exclusivo para Polos de Moda
              </span>
            </motion.div>

            {/* Headline */}
            <h2
              className="font-display font-black leading-[0.91] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              <motion.span className="block text-white" {...heroLine(0.18)}>
                Venda moda{" "}
                <span style={{ color: "#2DCCD3" }}>no TikTok Shop</span>
              </motion.span>
              <motion.span className="block text-white mt-1" {...heroLine(0.28)}>
                e desbloqueie
              </motion.span>
              <motion.span className="block mt-1.5" {...heroLine(0.38)}>
                <span
                  className="inline-block rounded-lg px-3 py-0.5"
                  style={{
                    backgroundColor: "#F1204A",
                    color: "#ffffff",
                    boxShadow: "0 6px 28px rgba(241,32,74,0.40)",
                  }}
                >
                  benefícios exclusivos
                </span>
              </motion.span>
            </h2>

            {/* Subtítulo */}
            <motion.p
              className="font-body mt-4 text-sm lg:text-base leading-relaxed lg:mt-5"
              style={{ color: "rgba(255,255,255,0.48)", maxWidth: "460px" }}
              {...heroLine(0.48)}
            >
              Se sua loja está cadastrada com o CEP de um Polo de moda,
              você já faz parte automaticamente.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap items-center gap-4 mt-5 lg:mt-6" {...heroLine(0.54)}>
              <motion.a
                href="https://seller-br.tiktok.com/account/register?channel=BrunaSeller"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center gap-2 font-display font-black text-white text-sm lg:text-base px-7 py-3.5 rounded-full"
                style={{
                  backgroundColor: "#F1204A",
                  boxShadow: "0 8px 28px rgba(241,32,74,0.42)",
                }}
                whileHover={{ scale: 1.04, boxShadow: "0 16px 48px rgba(241,32,74,0.58)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 20 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  style={{ skewX: -12 }}
                  initial={{ x: "-110%" }}
                  whileHover={{ x: "110%" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
                <span className="relative flex items-center gap-2">
                  Abrir conta agora <ArrowRight size={17} />
                </span>
              </motion.a>

              <a
                href="#beneficios"
                className="group hidden lg:inline-flex items-center gap-1.5 font-body text-sm font-medium relative pb-0.5"
                style={{ color: "rgba(255,255,255,0.38)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)"; }}
              >
                Ver benefícios ↓
                <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300" style={{ backgroundColor: "rgba(255,255,255,0.35)" }} />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.p
              className="hidden lg:flex items-center gap-2 font-body text-xs mt-4"
              style={{ color: "rgba(255,255,255,0.28)" }}
              {...heroLine(0.60)}
            >
              <span style={{ color: "#2DCCD3" }}>✓</span>
              Vendedores de Birigui, Brás, Franca, Goiânia e mais 4 regiões já participam
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="hidden lg:grid lg:grid-cols-3 mt-7 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              {...heroLine(0.66)}
            >
              {HERO_STATS.map((s, i) => (
                <div
                  key={i}
                  className="pr-6"
                  style={{
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    paddingLeft: i > 0 ? "1.5rem" : 0,
                  }}
                >
                  <p className="font-display font-black text-white" style={{ fontSize: "1.5rem" }}>
                    {s.val}
                  </p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.32)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Coluna direita · 5 cols — Glassmorphism cards ── */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-2.5">

            {/* Card principal — R$ 9.800 */}
            <motion.div
              className="relative rounded-[20px] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(45,204,211,0.22)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
              initial={{ opacity: 0, x: 40, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, type: "spring", stiffness: 65, damping: 18 }}
              whileHover={{ y: -4, boxShadow: "0 20px 52px rgba(0,0,0,0.28), 0 0 0 1px rgba(45,204,211,0.28)" }}
            >
              {/* Linha de acento no topo */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent 0%, rgba(45,204,211,0.55) 50%, transparent 100%)" }}
              />
              <div className="px-6 py-5 flex items-center justify-between">
                <div>
                  <p
                    className="font-body text-[10px] uppercase tracking-[0.22em] mb-2 font-semibold"
                    style={{ color: "#2DCCD3", opacity: 0.82 }}
                  >
                    Total desbloqueável
                  </p>
                  <p
                    className="font-display font-black text-white leading-none"
                    style={{ fontSize: "2.5rem" }}
                  >
                    R$ 9.800
                  </p>
                  <p className="font-body text-sm mt-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                    em cupons, ads e incentivos
                  </p>
                </div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(45,204,211,0.08)",
                    border: "1px solid rgba(45,204,211,0.14)",
                  }}
                >
                  <Trophy size={28} style={{ color: "#2DCCD3", opacity: 0.55 }} />
                </div>
              </div>
            </motion.div>

            {/* Dois cards pequenos */}
            <div className="grid grid-cols-2 gap-2.5">

              {/* 0% comissão — Glow yellow */}
              <motion.div
                className="rounded-[16px] px-5 py-4 flex flex-col justify-between"
                style={{
                  backgroundColor: "#FBEB35",
                  boxShadow: "0 4px 20px rgba(251,235,53,0.20), inset 0 1px 0 rgba(255,255,255,0.55)",
                  minHeight: 118,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38, type: "spring", stiffness: 90 }}
                whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(251,235,53,0.30)" }}
              >
                <p className="font-body text-[11px] font-semibold" style={{ color: "#033624", opacity: 0.55 }}>
                  Primeiros 90 dias
                </p>
                <div>
                  <p className="font-display font-black leading-none mt-2" style={{ fontSize: "2.2rem", color: "#033624" }}>
                    0%
                  </p>
                  <p className="font-body text-xs mt-1.5" style={{ color: "#033624", opacity: 0.58 }}>
                    comissão na plataforma
                  </p>
                </div>
              </motion.div>

              {/* 4 fases — glassmorphism */}
              <motion.div
                className="rounded-[16px] px-5 py-4 flex flex-col justify-between"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  minHeight: 118,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.44, type: "spring", stiffness: 90 }}
                whileHover={{ y: -3, background: "rgba(255,255,255,0.08)" }}
              >
                <p className="font-body text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.40)" }}>
                  Fases de aceleração
                </p>
                <div>
                  <p className="font-display font-black leading-none mt-2 text-white" style={{ fontSize: "2.2rem" }}>
                    4
                  </p>
                  <p className="font-body text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.38)" }}>
                    do básico ao Diamante
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Card criadores — Blaze gradient glassmorphism */}
            <motion.div
              className="relative rounded-[16px] px-5 py-4 flex items-center gap-3 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(241,32,74,0.82) 0%, rgba(192,16,56,0.88) 100%)",
                border: "1px solid rgba(241,32,74,0.35)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 24px rgba(241,32,74,0.28), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.50, type: "spring", stiffness: 90 }}
              whileHover={{ y: -3, boxShadow: "0 14px 42px rgba(241,32,74,0.40)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.20) 50%, transparent 100%)" }}
              />
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <Star size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-black text-white text-sm leading-tight">
                  Matching com Top Criadores
                </p>
                <p className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.60)" }}>
                  Fase 4 · Ads Credits + Comissão extra
                </p>
              </div>
              <Sparkles size={15} style={{ color: "rgba(255,255,255,0.38)" }} className="flex-shrink-0" />
            </motion.div>

          </div>
        </div>

        {/* ══ ② GRID DE BENEFÍCIOS ══════════════════════════════ */}
        <motion.div {...inView(0.05)} id="beneficios">
          <p
            className="font-body text-xs lg:text-sm mb-4 lg:mb-8 font-semibold uppercase tracking-[0.18em]"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            O que você ganha entrando na Trilha
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {BENEFICIOS.map((b, i) => (
              <motion.div
                key={i}
                className="relative rounded-2xl p-5 lg:p-8 flex flex-col group cursor-pointer"
                style={{
                  backgroundColor: b.bg,
                  gridColumn: b.span === 2 ? "span 2" : undefined,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.20)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -7, boxShadow: "0 24px 56px rgba(0,0,0,0.28)" }}
              >
                {b.badge && (
                  <span
                    className="absolute top-3 lg:top-5 right-3 lg:right-5 font-display font-black text-white text-[10px] lg:text-xs px-2.5 py-1"
                    style={{ backgroundColor: "#4A0505", borderRadius: "999px" }}
                  >
                    {b.badge}
                  </span>
                )}
                <div className="mb-3 lg:mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <b.icon size={b.span === 2 ? 36 : 30} style={{ color: b.color, opacity: 0.85 }} />
                </div>
                <p className="font-display font-black text-sm lg:text-base leading-tight" style={{ color: b.color }}>
                  {b.title}
                </p>
                <p className="font-body text-xs lg:text-sm mt-1.5 lg:mt-2.5 leading-snug" style={{ color: b.color, opacity: 0.60 }}>
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══ ③ BLOCOS INFERIORES ══════════════════════════════ */}
        <div className="flex flex-col gap-6">

          {/* Polos participantes — mobile only */}
          <motion.div {...inView(0.1)} id="polos" className="lg:hidden">
            <div className="rounded-3xl p-6 flex flex-col" style={{ backgroundColor: "#BAF6F0" }}>
              <h3 className="font-display font-black text-xl mb-1" style={{ color: "#033624" }}>
                Polos Participantes
              </h3>
              <p className="font-body text-xs mb-5" style={{ color: "#4A0505", opacity: 0.6 }}>
                Clique na sua região para entrar na comunidade de suporte
              </p>
              <div className="grid grid-cols-2 gap-2">
                {REGIOES.map((r) => (
                  <a
                    key={r.nome}
                    href={r.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200"
                    style={{ backgroundColor: "#ffffff", color: "#033624" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F1204A"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff"; (e.currentTarget as HTMLElement).style.color = "#033624"; }}
                  >
                    <span>{r.nome}</span>
                    <WhatsAppIcon className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Abrir conta */}
          <motion.div {...inView(0.15)}>
            <div className="rounded-3xl p-6 lg:p-10 flex flex-col" style={{ backgroundColor: "#EDD4B2" }}>
              <div className="mb-5 lg:mb-8">
                <h3 className="font-display font-black text-lg lg:text-3xl mb-1" style={{ color: "#033624" }}>
                  Abrir conta no TikTok Shop
                </h3>
                <p className="font-body text-xs lg:text-sm" style={{ color: "#4A0505", opacity: 0.58 }}>
                  Escolha o link da sua região para criar sua conta
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                {[
                  {
                    href: "https://seller-br.tiktok.com/account/register?channel=BrunaSeller",
                    regioes: "Brás · Franca · Birigui · Goiânia",
                    ref: "Acesso pelo link Bruna Seller",
                  },
                  {
                    href: "https://seller-br.tiktok.com/account/register?channel=AnaCastro",
                    regioes: "Brás · N. Friburgo · Nova Serrana · Mar de Espanha",
                    ref: "Acesso pelo link Ana Castro",
                  },
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white rounded-2xl p-4 lg:p-6 flex items-center justify-between group"
                    style={{ boxShadow: "0 2px 12px rgba(3,54,36,0.07)" }}
                    whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(3,54,36,0.14)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    <div>
                      <p className="font-display font-black text-sm lg:text-base" style={{ color: "#033624" }}>
                        {link.regioes}
                      </p>
                      <p className="font-body text-xs mt-0.5" style={{ color: "#4A0505", opacity: 0.50 }}>
                        {link.ref}
                      </p>
                    </div>
                    <span
                      className="font-display font-black text-white text-xs lg:text-sm px-3 lg:px-5 py-1.5 lg:py-2.5 shrink-0 ml-3 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: "#F1204A", borderRadius: "999px" }}
                    >
                      Abrir →
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
