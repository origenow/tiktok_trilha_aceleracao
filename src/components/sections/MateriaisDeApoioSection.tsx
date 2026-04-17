"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HighlightedText } from "@/components/ui/highlighted-text";
import {
  ExternalLink, ChevronDown,
  BookOpen, Megaphone, Settings, TrendingUp, Heart,
  Gem, Baby, ShieldAlert, RotateCcw, BarChart2, Globe,
} from "lucide-react";

/* ── Tipos ────────────────────────────────────────────────────── */
type MaterialItem = {
  icon: React.ElementType;
  label: string;
  description: string;
  href: string;
  accent: string;       // cor do ícone + borda + badge bg
  accentText: string;   // cor do texto sobre accent
  cardBg: string;       // fundo do card (tint suave)
  badge?: string;
};

type MaterialGroup = {
  id: string;
  groupTitle: string;
  pill: string;
  headerBg: string;     // fundo sólido do header do grupo
  headerText: string;
  bodyBg: string;       // fundo da área expandida
  pillRotate: string;
  items: MaterialItem[];
};

/* ── Dados ───────────────────────────────────────────────────── */
const GRUPOS: MaterialGroup[] = [
  {
    id: "apoio",
    groupTitle: "Materiais de Apoio",
    pill: "📚 Leituras essenciais",
    headerBg: "#2DCCD3",
    headerText: "#111111",
    bodyBg: "#e8fafa",
    pillRotate: "-3deg",
    items: [
      {
        icon: BookOpen,
        label: "Trilha de Aceleração",
        description: "Guia completo da jornada de crescimento no TikTok Shop",
        href: "https://seller-br.tiktok.com/challenges/growth",
        accent: "#111111",
        accentText: "#BAF6F0",
        cardBg: "#d0f5f3",
        badge: "Início aqui",
      },
      {
        icon: BarChart2,
        label: "Política de Pagamentos",
        description: "Entenda os ciclos, prazos e regras de repasse",
        href: "https://seller-br.tiktok.com/university/essay?knowledge_id=1442971112769281&role=1&course_type=1&from=search%7BcontentIdParams%7D&identity=1",
        accent: "#2DCCD3",
        accentText: "#111111",
        cardBg: "#ffffff",
      },
      {
        icon: Megaphone,
        label: "Campanhas",
        description: "Como participar e maximizar sua exposição nas campanhas",
        href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&content_id=3545348371269138&role=seller&keyword=saude&menu=feature",
        accent: "#F1204A",
        accentText: "#ffffff",
        cardBg: "#fff0f2",
      },
      {
        icon: Settings,
        label: "Configurar Promoções",
        description: "Passo a passo para criar ofertas e cupons na plataforma",
        href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&content_id=354534837339905&role=seller&keyword=saude&menu=feature",
        accent: "#FBEB35",
        accentText: "#111111",
        cardBg: "#fffde8",
      },
      {
        icon: TrendingUp,
        label: "GMV Max — Ads Acelerados",
        description: "Impulsionamento automático com ROAS otimizado",
        href: "/gmv-max",
        accent: "#F1204A",
        accentText: "#ffffff",
        cardBg: "#fff0f2",
        badge: "⭐ Destaque",
      },
      {
        icon: Heart,
        label: "Boas Práticas de Lingerie",
        description: "Políticas e recomendações para venda nesta categoria",
        href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&role=seller&menu=feature",
        accent: "#EDBBE8",
        accentText: "#4A0505",
        cardBg: "#fdf0fc",
      },
    ],
  },
  {
    id: "categoria",
    groupTitle: "Solicitação de Categoria",
    pill: "🏷️ Categorias especiais",
    headerBg: "#F1204A",
    headerText: "#ffffff",
    bodyBg: "#fff5f6",
    pillRotate: "4deg",
    items: [
      {
        icon: Gem,
        label: "Jóias e Semi Jóias",
        description: "Requisitos e processo para vender na categoria de jóias",
        href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&role=seller&menu=feature",
        accent: "#2DCCD3",
        accentText: "#111111",
        cardBg: "#d0f5f3",
        badge: "💎 Premium",
      },
      {
        icon: Baby,
        label: "Bebê & Maternidade",
        description: "Categoria exclusiva para Polos de Moda credenciados",
        href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&role=seller&menu=feature",
        accent: "#EDBBE8",
        accentText: "#4A0505",
        cardBg: "#fdf0fc",
      },
    ],
  },
  {
    id: "treinamentos",
    groupTitle: "Treinamentos Gravados",
    pill: "🎬 Assista quando quiser",
    headerBg: "#FBEB35",
    headerText: "#111111",
    bodyBg: "#fffde8",
    pillRotate: "-5deg",
    items: [
      {
        icon: ShieldAlert,
        label: "Saúde da Conta",
        description: "Violações, impactos e como manter sua conta em dia",
        href: "https://seller-br.tiktok.com/university/essay?knowledge_id=1444948508641040&role=1&course_type=1&from=search%7BcontentIdParams%7D&identity=1",
        accent: "#F1204A",
        accentText: "#ffffff",
        cardBg: "#fff0f2",
      },
      {
        icon: RotateCcw,
        label: "Reembolsos e Devoluções",
        description: "Fluxo completo de gestão de devoluções e reembolsos",
        href: "https://seller-br.tiktok.com/university/essay?knowledge_id=8943390731159218&default_language=pt-BR&identity=1",
        accent: "#111111",
        accentText: "#BAF6F0",
        cardBg: "#eaf5f0",
      },
      {
        icon: BarChart2,
        label: "Relatório Financeiro",
        description: "Como interpretar seus dados financeiros e crescimento",
        href: "https://seller-br.tiktok.com/university/essay?identity=1&role=1&knowledge_id=2494371300607761&from=course",
        accent: "#FBEB35",
        accentText: "#111111",
        cardBg: "#fffde8",
      },
    ],
  },
];

/* ── MaterialCard ─────────────────────────────────────────────── */
function MaterialCard({ item, index }: { item: MaterialItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("/") ? "_self" : "_blank"}
      rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.22, delay: index * 0.055 }}
      className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
      style={{
        backgroundColor: item.cardBg,
        borderLeft: `4px solid ${item.accent}`,
        boxShadow: "0 1px 6px rgba(3,54,36,0.06)",
      }}
    >
      {/* Ícone */}
      <div
        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ backgroundColor: item.accent }}
      >
        <Icon size={16} style={{ color: item.accentText, strokeWidth: 2.2 }} />
      </div>

      {/* Texto */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <p className="font-display font-black text-sm leading-tight" style={{ color: "#111111" }}>
            {item.label}
          </p>
          {item.badge && (
            <span
              className="font-body text-[9px] font-medium px-2 py-0.5 rounded-full shrink-0"
              style={{ backgroundColor: item.accent, color: item.accentText }}
            >
              {item.badge}
            </span>
          )}
        </div>
        <p className="font-body text-xs mt-0.5 leading-snug" style={{ color: "#4A0505", opacity: 0.55 }}>
          {item.description}
        </p>
      </div>

      {/* Seta */}
      <ExternalLink
        size={13}
        className="shrink-0 opacity-25 group-hover:opacity-70 transition-opacity"
        style={{ color: item.accent }}
      />
    </motion.a>
  );
}

/* ── GrupoAccordeon ───────────────────────────────────────────── */
function GrupoAccordeon({
  grupo,
  open,
  onToggle,
}: {
  grupo: MaterialGroup;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{ boxShadow: "0 4px 20px rgba(3,54,36,0.10)" }}
    >
      {/* Header colorido sólido */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ backgroundColor: grupo.headerBg }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="font-body text-[11px] font-medium px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.25)",
              color: grupo.headerText,
              transform: `rotate(${grupo.pillRotate})`,
              display: "inline-block",
              backdropFilter: "blur(4px)",
            }}
          >
            {grupo.pill}
          </span>
          <span className="font-display font-black text-sm" style={{ color: grupo.headerText }}>
            {grupo.groupTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="font-body text-xs px-2.5 py-0.5 rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              color: grupo.headerText,
            }}
          >
            {grupo.items.length}
          </span>
          <ChevronDown
            size={16}
            className="transition-transform duration-300"
            style={{
              color: grupo.headerText,
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </button>

      {/* Itens expandíveis */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="flex flex-col gap-2.5 p-3"
              style={{ backgroundColor: grupo.bodyBg }}
            >
              {grupo.items.map((item, i) => (
                <MaterialCard key={item.label} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Seção principal ──────────────────────────────────────────── */
export function MateriaisDeApoioSection() {
  const [openId, setOpenId] = useState<string | null>(GRUPOS[0].id);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#EDBBE8" }}>

      {/* Doodles SVG inline */}
      <svg className="absolute top-6 right-4 opacity-25 pointer-events-none animate-float"
        width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M30 4L34.9 22.1L52 18L40.6 30L52 42L34.9 37.9L30 56L25.1 37.9L8 42L19.4 30L8 18L25.1 22.1L30 4Z"
          stroke="#2DCCD3" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <svg className="absolute bottom-12 left-3 opacity-20 pointer-events-none animate-float-reverse"
        width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="11" stroke="#F1204A" strokeWidth="2" />
        <circle cx="24" cy="24" r="20" stroke="#F1204A" strokeWidth="1.2" strokeDasharray="4 3" />
      </svg>
      <svg className="absolute top-1/3 right-1 opacity-15 pointer-events-none animate-float"
        style={{ animationDelay: "1.8s" }}
        width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 3C20 3 23 11 31 14C23 17 20 25 20 25C20 25 17 17 9 14C17 11 20 3 20 3Z"
          stroke="#FBEB35" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <svg className="absolute bottom-32 right-6 opacity-20 pointer-events-none animate-float-reverse"
        style={{ animationDelay: "0.8s" }}
        width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="8" r="4" stroke="#EDBBE8" strokeWidth="2" />
        <circle cx="8" cy="22" r="4" stroke="#EDBBE8" strokeWidth="2" />
        <circle cx="24" cy="22" r="4" stroke="#EDBBE8" strokeWidth="2" />
        <line x1="16" y1="12" x2="8" y2="18" stroke="#EDBBE8" strokeWidth="1.5" />
        <line x1="16" y1="12" x2="24" y2="18" stroke="#EDBBE8" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 w-full max-w-[430px] mx-auto px-5 py-14 flex flex-col gap-8">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="font-body text-xs font-medium px-4 py-1.5 mb-4 inline-block"
            style={{
              backgroundColor: "#111111",
              color: "#BAF6F0",
              borderRadius: "999px",
              transform: "rotate(-2deg)",
            }}
          >
            📖 Central de conhecimento
          </span>

          <h2
            className="font-display font-black leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)", color: "#111111" }}
          >
            Materiais{" "}
            <HighlightedText highlightColor="#2DCCD3" from="bottom" inView delay={0.2}>de Apoio</HighlightedText>
          </h2>

          <p className="font-body text-sm mt-3 leading-relaxed" style={{ color: "#4A0505", opacity: 0.65 }}>
            Tudo o que você precisa para operar com confiança — treinamentos, políticas e guias em um só lugar.
          </p>
        </motion.div>

        {/* Grupos accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          {GRUPOS.map((grupo) => (
            <GrupoAccordeon
              key={grupo.id}
              grupo={grupo}
              open={openId === grupo.id}
              onToggle={() => setOpenId(openId === grupo.id ? null : grupo.id)}
            />
          ))}
        </motion.div>

        {/* Card Chinese Version */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://seller-br.tiktok.com/university/home?default_language=zh-Hans"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #111111 0%, #055a3a 100%)",
              boxShadow: "0 4px 20px rgba(3,54,36,0.22)",
            }}
          >
            <div
              className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: "rgba(186,246,240,0.15)" }}
            >
              🇨🇳
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-display font-black text-sm" style={{ color: "#BAF6F0" }}>
                  Chinese Version
                </p>
                <span
                  className="font-body text-[10px] px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#F1204A", color: "#ffffff" }}
                >
                  2026.1 最新
                </span>
              </div>
              <p className="font-body text-xs leading-snug" style={{ color: "rgba(186,246,240,0.55)" }}>
                巴西服饰南家TikTok Shop基础运营指导
              </p>
            </div>
            <Globe
              size={16}
              className="shrink-0 opacity-35 group-hover:opacity-80 transition-opacity"
              style={{ color: "#BAF6F0" }}
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
