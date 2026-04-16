"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  ShoppingBag,
  TrendingUp,
  Rocket,
  Gem,
  Trophy,
  Coins,
  Target,
  Crown,
  Play,
  Users,
  Package,
  Tag,
  Video,
  UserCheck,
  Megaphone,
  Layers,
  Radio,
  Zap,
  BarChart2,
  Gift,
  Info,
  BookOpen,
  ChevronRight,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HighlightedText } from "@/components/ui/highlighted-text";

/* ── Design system colors ────────────────────────────────────── */
const DS = {
  shimmer: "#BAF6F0",
  muse:    "#EDD4B2",
  thrive:  "#033624",
  ember:   "#4A0505",
  blaze:   "#F1204A",
  glint:   "#2DCCD3",
  glow:    "#FBEB35",
  dawn:    "#EDBBE8",
  white:   "#FFFFFF",
};

/* ── Types ───────────────────────────────────────────────────── */
interface Material {
  title: string;
  url: string | null;
}

interface MissionGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
  materials?: Material[];
  note?: { text: string; href: string; external?: boolean };
  images?: string[];
}

interface FaseData {
  id: string;
  label: string;
  shortLabel: string;
  tagLabel: string;
  icon: LucideIcon;
  duration: string;
  color: string;
  onColor: string;
  rewardBg: string;
  image: string;
  objective: string;
  tip?: string;
  missionGroups: MissionGroup[];
  reward: string;
  rewardSub: string;
  rewardIcon: LucideIcon;
}

/* ── Dados das fases ─────────────────────────────────────────── */
const FASES: FaseData[] = [
  {
    id: "fase1",
    label: "Fase 1",
    shortLabel: "Começar a Vender",
    tagLabel: "Fase 1 · 5 dias",
    icon: ShoppingBag,
    duration: "5 dias",
    color: DS.glint,
    onColor: DS.thrive,
    rewardBg: DS.shimmer,
    image: "/assets/m3.jpg",
    objective: "Deixe sua loja pronta e gere as primeiras vendas",
    tip: "Complete todas as missões nos primeiros 5 dias para garantir as recompensas.",
    missionGroups: [
      {
        title: "Entrar na comunidade",
        icon: Users,
        items: [
          "Entre no grupo de WhatsApp da sua região",
          "Acompanhe dicas e suporte diário do grupo",
        ],
        note: { text: "Ver grupos por região", href: "#cta" },
      },
      {
        title: "Subir seus produtos",
        icon: Package,
        items: [
          "Cadastre pelo menos 10 produtos na loja",
          "Use fotos de qualidade e descrições completas",
        ],
        materials: [
          { title: "Webinar TikTok Shop [1]", url: null },
          { title: "Webinar introdutório sobre Lives", url: null },
        ],
      },
      {
        title: "Ativar ofertas",
        icon: Tag,
        items: [
          "Coloque promoção em 5 produtos",
          "Crie 1 cupom de desconto",
          "Ative 3 ofertas relâmpago",
        ],
      },
      {
        title: "Criar os primeiros conteúdos",
        icon: Video,
        items: [
          "Faça 2 lives de 60 minutos cada",
          "Poste 3 vídeos com link do produto",
        ],
      },
      {
        title: "Como ganhar benefícios?",
        icon: Gift,
        items: [
          "Siga as Oportunidades de crescimento no painel (Figura 1)",
          "Siga as Tarefas de Lives no Live Manager (Figura 2)",
        ],
        note: { text: "Acessar Central do Vendedor", href: "https://seller-br.tiktok.com/challenges/growth", external: true },
        images: [
          "/assets/beneficios/beneficio1.png",
          "/assets/beneficios/beneficio2.png",
        ],
      },
    ],
    reward: "Até R$ 2.400 em cupons de plataforma",
    rewardSub: "Sessões de suporte · 0% de comissão por 90 dias",
    rewardIcon: Trophy,
  },
  {
    id: "fase2",
    label: "Fase 2",
    shortLabel: "Escalar Vendas",
    tagLabel: "Fase 2 · 30 dias",
    icon: TrendingUp,
    duration: "30 dias",
    color: DS.glow,
    onColor: DS.thrive,
    rewardBg: "#FFFDE0",
    image: "/assets/m4.png",
    objective: "Ganhe volume com criadores + conteúdo",
    tip: "Mais conteúdo = mais vendas. Foque em criadores e lives nesta fase.",
    missionGroups: [
      {
        title: "Ativar afiliados",
        icon: UserCheck,
        items: [
          "Coloque TODOS os produtos em colaboração aberta (comissão >10%)",
          "Defina amostras grátis para seus top 2 produtos",
          "Envie no mínimo 30 amostras do mesmo produto para criadores",
        ],
        materials: [
          { title: "Webinar TikTok Shop [2]", url: null },
          { title: "Webinar sobre Afiliados", url: null },
        ],
      },
      {
        title: "Escalar conteúdo",
        icon: BarChart2,
        items: [
          "Poste 10 vídeos compráveis com link do produto",
          "Realize lives — mínimo 20h no total (sugestão: 14 lives)",
        ],
        materials: [
          { title: "Playbook de Vídeos", url: null },
          { title: "Playbook de Lives", url: null },
          { title: "Webinar Lives [2]", url: null },
          { title: "Webinar Lives [3]", url: null },
        ],
      },
      {
        title: "Entrar nas campanhas",
        icon: Megaphone,
        items: [
          "Acesse Marketing > Campanhas no Seller Center",
          "Participe de todas as oportunidades de descontos financiados pelo TikTok",
        ],
      },
    ],
    reward: "Até R$ 3.400 em cupons + impulsionamento",
    rewardSub: "Incentivo de tráfego · 15% off cupom · Comissão extra criadores",
    rewardIcon: Coins,
  },
  {
    id: "fase3",
    label: "Fase 3",
    shortLabel: "Acelerar",
    tagLabel: "Fase 3 · 60 dias",
    icon: Rocket,
    duration: "60 dias",
    color: DS.dawn,
    onColor: DS.ember,
    rewardBg: "#F9EEFA",
    image: "/assets/m2.jpg",
    objective: "Escale de forma consistente com criadores, lives e tráfego pago",
    tip: "Mais criadores + mais lives + tráfego pago = escala de verdade.",
    missionGroups: [
      {
        title: "Escalar criadores",
        icon: Layers,
        items: [
          "Trabalhe com criadores ativos para atingir 1.500 vídeos publicados",
          "Reforce o relacionamento com top criadores (mais produtos + comunicação ativa)",
        ],
        materials: [
          { title: "Webinar TikTok Shop [3]", url: null },
        ],
      },
      {
        title: "Aumentar intensidade de lives",
        icon: Radio,
        items: [
          "Faça lives frequentes — mínimo 40h por mês",
          "Realize 1 big live por campanha mensal (mínimo 3h)",
        ],
        materials: [
          { title: "Webinar Lives [4]", url: null },
        ],
      },
      {
        title: "Investir em tráfego (GMV Max)",
        icon: Zap,
        items: [
          "Ative GMV Max nos produtos com mais de 30 vídeos",
          "Investimento inicial sugerido: R$ 2.500/mês",
        ],
        materials: [
          { title: "Webinar GMV Max", url: null },
        ],
      },
    ],
    reward: "Matching com Top Criadores + Ads Credits",
    rewardSub: "Cashback em ads até R$ 4.000 · Cupons 30% off · Comissão extra",
    rewardIcon: Target,
  },
  {
    id: "fase4",
    label: "Diamante",
    shortLabel: "Escala Avançada",
    tagLabel: "Diamante",
    icon: Gem,
    duration: "R$ 4k/dia",
    color: DS.ember,
    onColor: DS.white,
    rewardBg: DS.muse,
    image: "/assets/m1.jpg",
    objective: "Maximizar crescimento com estratégia avançada e suporte dedicado",
    tip: "Atingindo R$ 4.000/dia de média você desbloqueia benefícios exclusivos do TikTok.",
    missionGroups: [
      {
        title: "Manter alto volume de vendas",
        icon: BarChart2,
        items: [
          "Atingir média de aproximadamente R$ 4.000/dia em vendas",
          "Manter consistência por pelo menos 30 dias consecutivos",
        ],
      },
      {
        title: "Benefícios que você desbloqueia",
        icon: Gift,
        items: [
          "Gerente de contas dedicado (TikTok)",
          "Planejamento estratégico personalizado",
          "Acesso antecipado a campanhas e oportunidades",
          "Suporte direto para escalar mais rápido",
        ],
      },
    ],
    reward: "Escala Avançada",
    rewardSub: "Benefícios exclusivos para top vendedores",
    rewardIcon: Crown,
  },
];

/* ── Animation variants ──────────────────────────────────────── */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 64 : -64,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -64 : 64,
    opacity: 0,
    scale: 0.96,
  }),
};

/* ── Helpers ─────────────────────────────────────────────────── */
function alpha(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ── FloatingDoodle ──────────────────────────────────────────── */
const FloatingDoodle = ({
  src, size = 40, top, left, right, bottom,
  delay = 0, rotate = 0, opacity = 0.3, reverse = false,
}: {
  src: string; size?: number; top?: string; left?: string;
  right?: string; bottom?: string; delay?: number;
  rotate?: number; opacity?: number; reverse?: boolean;
}) => (
  <div
    className={`absolute pointer-events-none ${reverse ? "animate-float-reverse" : "animate-float"}`}
    style={{ top, left, right, bottom, width: size, height: size, animationDelay: `${delay}s`, opacity }}
  >
    <img src={src} alt="" className="w-full h-full object-contain" style={{ transform: `rotate(${rotate}deg)` }} />
  </div>
);

/* ── Phase selector tab ──────────────────────────────────────── */
function PhaseTab({ fase, index, isActive, onClick }: {
  fase: FaseData; index: number; isActive: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className="relative flex flex-col gap-2 p-3.5 rounded-2xl text-left transition-all duration-300 overflow-hidden"
      style={isActive
        ? { backgroundColor: fase.color, boxShadow: `0 6px 20px ${alpha(fase.color, 0.45)}` }
        : { backgroundColor: DS.white, border: `1.5px solid rgba(3,54,36,0.08)` }}
    >
      {isActive && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 15%, rgba(255,255,255,0.28) 0%, transparent 55%)" }} />
      )}
      <div className="flex items-center justify-between relative z-10">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: isActive ? alpha(DS.white, 0.22) : alpha(fase.color, 0.12), color: isActive ? fase.onColor : fase.color }}>
          <fase.icon size={16} />
        </div>
        <span className="font-body text-[0.58rem] font-bold px-1.5 py-0.5 rounded-md"
          style={{ backgroundColor: isActive ? alpha(DS.white, 0.18) : alpha(fase.color, 0.12), color: isActive ? fase.onColor : fase.color }}>
          {index < 3 ? `F${index + 1}` : "◆"}
        </span>
      </div>
      <div className="relative z-10">
        <p className="font-display font-black text-[0.75rem] leading-tight" style={{ color: isActive ? fase.onColor : DS.thrive }}>
          {fase.shortLabel}
        </p>
        <p className="font-body text-[0.6rem] mt-0.5" style={{ color: isActive ? alpha(fase.onColor, 0.65) : "#9ca3af" }}>
          {fase.duration}
        </p>
      </div>
    </button>
  );
}

/* ── Mission group card ──────────────────────────────────────── */
function MissionGroupCard({ group, fase, step }: {
  group: MissionGroup; fase: FaseData; step: number;
}) {
  const GroupIcon = group.icon;
  const hasMaterials = group.materials && group.materials.length > 0;
  const hasImages = group.images && group.images.length > 0;
  const accentColor = fase.onColor === DS.white ? fase.color : fase.onColor;

  return (
    <div className="rounded-2xl overflow-hidden bg-white"
      style={{ border: `1.5px solid ${alpha(fase.color, 0.18)}` }}>

      {/* Header band */}
      <div className="flex items-center gap-3 px-4 py-3"
        style={{ backgroundColor: alpha(fase.color, 0.08), borderBottom: `1.5px solid ${alpha(fase.color, 0.14)}` }}>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: alpha(fase.color, 0.18), color: accentColor }}>
          <GroupIcon size={14} strokeWidth={2} />
        </div>
        <span className="font-display font-bold text-[0.82rem] flex-1 leading-tight" style={{ color: DS.thrive }}>
          {group.title}
        </span>
        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-display font-black text-[0.6rem]"
          style={{ backgroundColor: fase.color, color: fase.onColor, boxShadow: `0 2px 6px ${alpha(fase.color, 0.4)}` }}>
          {step}
        </div>
      </div>

      {/* Items */}
      <div className={cn("px-4 pt-3.5", hasMaterials || group.note || hasImages ? "pb-3" : "pb-3.5")}>
        <ul className="space-y-2.5">
          {group.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: alpha(fase.color, 0.12) }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: fase.color }} />
              </div>
              <span className="font-body text-[0.82rem] leading-snug" style={{ color: "#1a2e1e" }}>{item}</span>
            </li>
          ))}
        </ul>
        {group.note && (
          group.note.external ? (
            <a href={group.note.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 mt-3 font-body text-xs font-semibold w-fit rounded-full px-3 py-1.5"
              style={{ backgroundColor: alpha(DS.glint, 0.12), color: DS.thrive }}
            >
              <MessageCircle size={12} />
              {group.note.text}
              <ChevronRight size={11} />
            </a>
          ) : (
            <a href={group.note.href}
              className="flex items-center gap-1.5 mt-3 font-body text-xs font-semibold w-fit rounded-full px-3 py-1.5"
              style={{ backgroundColor: alpha(DS.glint, 0.12), color: DS.thrive }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(group.note!.href)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <MessageCircle size={12} />
              {group.note.text}
              <ChevronRight size={11} />
            </a>
          )
        )}
      </div>

      {/* Imagens inline */}
      {hasImages && (
        <div className="px-4 pb-4" style={{ borderTop: `1px dashed ${alpha(fase.color, 0.2)}` }}>
          <p className="font-body text-[0.6rem] uppercase tracking-wider pt-3 mb-2.5" style={{ color: alpha(DS.thrive, 0.4) }}>
            Figuras de referência
          </p>
          <div className="flex flex-col gap-3">
            {group.images!.map((src, i) => (
              <div key={i} className="w-full rounded-xl overflow-hidden"
                style={{ border: `1px solid ${alpha(fase.color, 0.18)}` }}>
                <p className="font-body text-[0.6rem] px-2.5 py-1.5" style={{ backgroundColor: alpha(fase.color, 0.08), color: alpha(DS.thrive, 0.5) }}>
                  Figura {i + 1}
                </p>
                <img src={src} alt={`Figura ${i + 1}`} className="w-full h-auto block" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Materiais inline */}
      {hasMaterials && (
        <div className="px-4 pb-3.5" style={{ borderTop: `1px dashed ${alpha(fase.color, 0.2)}` }}>
          <div className="flex items-center gap-1.5 pt-3 mb-2.5">
            <BookOpen size={11} style={{ color: alpha(DS.thrive, 0.4) }} />
            <span className="font-body text-[0.6rem] uppercase tracking-wider" style={{ color: alpha(DS.thrive, 0.4) }}>
              Materiais de apoio
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {group.materials!.map((mat, mi) => {
              const hasUrl = Boolean(mat.url);
              if (hasUrl) {
                return (
                  <a key={mi} href={mat.url!} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 hover:shadow-sm active:scale-[0.97]"
                    style={{ backgroundColor: alpha(fase.color, 0.08), border: `1px solid ${alpha(fase.color, 0.2)}` }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: fase.color, color: fase.onColor }}>
                      <Play size={10} fill={fase.onColor} strokeWidth={0} />
                    </div>
                    <span className="font-body text-[0.75rem] flex-1" style={{ color: DS.thrive }}>{mat.title}</span>
                    <ChevronRight size={12} style={{ color: alpha(fase.color, 0.6) }} />
                  </a>
                );
              }
              return (
                <div key={mi} className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ backgroundColor: "rgba(3,54,36,0.03)", border: "1px solid rgba(3,54,36,0.07)" }}>
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(3,54,36,0.06)", color: "rgba(3,54,36,0.3)" }}>
                    <Play size={10} strokeWidth={1.5} />
                  </div>
                  <span className="font-body text-[0.75rem] flex-1" style={{ color: "rgba(3,54,36,0.35)" }}>{mat.title}</span>
                  <span className="font-body text-[0.55rem] px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(3,54,36,0.05)", color: "rgba(3,54,36,0.3)" }}>
                    em breve
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Componente principal ────────────────────────────────────── */
export function FasesSection() {
  const [activeIndex, setActiveIndex]   = useState(0);
  const [groupStep, setGroupStep]       = useState(0);
  const [direction, setDirection]       = useState(1);
  const [showReward, setShowReward]     = useState(false);
  const rewardRef = useRef<HTMLDivElement>(null);

  const activeFase  = FASES[activeIndex];
  const totalSteps  = activeFase.missionGroups.length;
  const isLastGroup = groupStep === totalSteps - 1;

  /* Muda de fase e reseta o passo */
  const selectPhase = (i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
    setGroupStep(0);
    setShowReward(false);
  };

  /* Avança passo / fase */
  const goNext = () => {
    if (!isLastGroup) {
      setDirection(1);
      setGroupStep((p) => p + 1);
    } else if (!showReward) {
      setShowReward(true);
      setTimeout(() => rewardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
    } else if (activeIndex < FASES.length - 1) {
      setDirection(1);
      setActiveIndex((i) => i + 1);
      setGroupStep(0);
      setShowReward(false);
    }
  };

  /* Recua passo / fase */
  const goPrev = () => {
    if (showReward) {
      setShowReward(false);
    } else if (groupStep > 0) {
      setDirection(-1);
      setGroupStep((p) => p - 1);
    } else if (activeIndex > 0) {
      const prevLen = FASES[activeIndex - 1].missionGroups.length;
      setDirection(-1);
      setActiveIndex((i) => i - 1);
      setGroupStep(prevLen - 1);
      setShowReward(false);
    }
  };

  /* Pula diretamente para um passo */
  const jumpTo = (i: number) => {
    setDirection(i > groupStep ? 1 : -1);
    setGroupStep(i);
    setShowReward(false);
  };

  return (
    <section id="fases" className="relative pt-20 pb-20 overflow-hidden" style={{ backgroundColor: "#f4f6f5" }}>
      {/* Wave entrada */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[80px] block">
          <path d="M0,80 C200,20 500,70 720,30 C940,0 1180,60 1440,25 L1440,0 L0,0 Z" fill={DS.shimmer} />
        </svg>
      </div>

      {/* Floating doodles */}
      <FloatingDoodle src="/assets_new/10.svg"       size={80}  top="15%"    right="-2%"  rotate={15}  opacity={0.12} />
      <FloatingDoodle src="/assets_new/5.svg"         size={70}  bottom="25%" left="-2%"   rotate={-15} opacity={0.08} reverse />
      <FloatingDoodle src="/assets_new/manequim.svg"  size={72}  top="45%"    left="2%"    rotate={20}  opacity={0.06} />
      <FloatingDoodle src="/assets_new/2.svg"         size={50}  bottom="5%"  right="4%"   rotate={-10} opacity={0.08} />
      <FloatingDoodle src="/assets_new/camera.svg"    size={81}  top="5%"     left="4%"    rotate={30}  opacity={0.04} reverse />
      <FloatingDoodle src="/assets_new/cosmetics.svg" size={108} bottom="45%" right="2%"   rotate={45}  opacity={0.06} />

      {/* ── Header ── */}
      <div className="w-full max-w-[430px] mx-auto px-6 mb-7">
        <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: DS.glint }}>A Trilha</p>
        <h2 className="font-display font-black leading-tight" style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)", color: DS.thrive }}>
          Missões por{" "}
          <HighlightedText highlightColor={DS.blaze} from="bottom" inView delay={0.3}>Fase</HighlightedText>
        </h2>
        <p className="font-body text-sm mt-1.5" style={{ color: DS.ember, opacity: 0.7 }}>
          Selecione uma fase e siga os passos
        </p>
      </div>

      {/* ── Seletor 2×2 ── */}
      <div className="w-full max-w-[430px] mx-auto px-4 mb-5">
        <div className="grid grid-cols-2 gap-2.5">
          {FASES.map((fase, i) => (
            <PhaseTab key={fase.id} fase={fase} index={i} isActive={i === activeIndex} onClick={() => selectPhase(i)} />
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-3.5 px-0.5">
          {FASES.map((fase, i) => (
            <button key={i} onClick={() => selectPhase(i)}
              className="h-1 rounded-full transition-all duration-300"
              style={{ backgroundColor: i === activeIndex ? fase.color : "rgba(3,54,36,0.1)", width: i === activeIndex ? "2.5rem" : "0.5rem" }}
              aria-label={`Fase ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Conteúdo da fase ── */}
      <div className="w-full max-w-[430px] mx-auto px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeFase.id}
            custom={direction}
            variants={{
              enter:  (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit:   (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Imagem */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-sm">
              <Image src={activeFase.image} alt={activeFase.label} fill className="object-cover" sizes="430px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: activeFase.color }} />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="px-3 py-1.5 rounded-full font-body text-[0.65rem] font-semibold w-fit"
                  style={{ backgroundColor: activeFase.color, color: activeFase.onColor }}>
                  {activeFase.tagLabel}
                </div>
              </div>
            </div>

            {/* Cabeçalho + dica */}
            <div className="rounded-2xl bg-white p-5 mb-4"
              style={{ boxShadow: "0 4px 24px rgba(3,54,36,0.07), 0 1px 4px rgba(3,54,36,0.04)" }}>
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b" style={{ borderColor: "rgba(3,54,36,0.07)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: alpha(activeFase.color, 0.15), color: activeFase.color }}>
                  <activeFase.icon size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg leading-tight" style={{ color: DS.thrive }}>
                    {activeFase.shortLabel}
                  </h3>
                  <p className="font-body text-xs mt-0.5 leading-snug" style={{ color: DS.ember, opacity: 0.65 }}>
                    {activeFase.objective}
                  </p>
                </div>
              </div>
              {activeFase.tip && (
                <div className="flex items-start gap-2.5 rounded-xl px-3.5 py-3"
                  style={{ backgroundColor: alpha(activeFase.color, 0.1) }}>
                  <Info size={14} className="mt-0.5 shrink-0"
                    style={{ color: activeFase.onColor === DS.white ? activeFase.color : activeFase.onColor }} />
                  <p className="font-body text-xs leading-snug"
                    style={{ color: activeFase.onColor === DS.white ? activeFase.color : activeFase.onColor }}>
                    {activeFase.tip}
                  </p>
                </div>
              )}
            </div>

            {/* ── Step-by-step dos grupos ── */}
            <div className="mb-4">

              {/* Barra de progresso + label */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="font-body text-xs" style={{ color: alpha(DS.thrive, 0.45) }}>
                  Passo {groupStep + 1} de {totalSteps}
                </span>
                <div className="flex items-center gap-1.5">
                  {activeFase.missionGroups.map((_, i) => (
                    <button key={i} onClick={() => jumpTo(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        height: "6px",
                        width: i === groupStep ? "1.75rem" : "6px",
                        backgroundColor: i <= groupStep ? activeFase.color : "rgba(3,54,36,0.12)",
                      }}
                      aria-label={`Ir para passo ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Card animado */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${activeFase.id}-${groupStep}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                >
                  <MissionGroupCard
                    group={activeFase.missionGroups[groupStep]}
                    fase={activeFase}
                    step={groupStep + 1}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navegação */}
              <div className="mt-3 flex items-center gap-2.5">
                {/* Botão voltar */}
                <motion.button
                  onClick={goPrev}
                  disabled={groupStep === 0 && activeIndex === 0 && !showReward}
                  whileTap={{ scale: 0.92 }}
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: DS.white,
                    border: "1.5px solid rgba(3,54,36,0.1)",
                    color: DS.thrive,
                    opacity: groupStep === 0 && activeIndex === 0 && !showReward ? 0.3 : 1,
                  }}
                  aria-label="Passo anterior"
                >
                  <ChevronRight size={18} style={{ transform: "rotate(180deg)" }} />
                </motion.button>

                {/* Botão avançar */}
                <motion.button
                  onClick={goNext}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 h-11 rounded-2xl font-display font-black text-sm flex items-center justify-center gap-2 transition-shadow duration-200"
                  style={{
                    backgroundColor: activeFase.color,
                    color: activeFase.onColor,
                    boxShadow: `0 4px 18px ${alpha(activeFase.color, 0.45)}`,
                  }}
                >
                  {isLastGroup && showReward && activeIndex < FASES.length - 1 ? (
                    <>
                      Próxima fase
                      <ChevronRight size={15} />
                    </>
                  ) : isLastGroup && !showReward ? (
                    <>
                      <activeFase.rewardIcon size={15} />
                      Ver recompensa
                    </>
                  ) : !isLastGroup ? (
                    <>
                      Próximo passo
                      <ChevronRight size={15} />
                    </>
                  ) : null}
                </motion.button>
              </div>
            </div>

            {/* ── Recompensa (revelada ao concluir todos os passos) ── */}
            <AnimatePresence>
              {showReward && (
                <motion.div
                  ref={rewardRef}
                  key="reward"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl overflow-hidden mb-6"
                  style={{
                    boxShadow: `0 8px 32px ${alpha(activeFase.color, 0.22)}, 0 2px 8px rgba(3,54,36,0.06)`,
                    border: `1.5px solid ${alpha(activeFase.color, 0.28)}`,
                  }}
                >
                  {/* Banda superior colorida */}
                  <div className="px-5 py-3 flex items-center gap-2"
                    style={{ backgroundColor: activeFase.color }}>
                    <activeFase.rewardIcon size={16} color={activeFase.onColor} strokeWidth={2} />
                    <p className="font-body text-[0.65rem] font-semibold uppercase tracking-widest"
                      style={{ color: alpha(activeFase.onColor, 0.85) }}>
                      Recompensa desbloqueada
                    </p>
                  </div>

                  {/* Corpo */}
                  <div className="p-5" style={{ backgroundColor: activeFase.rewardBg }}>
                    <p className="font-display font-black text-base leading-tight mb-1" style={{ color: DS.thrive }}>
                      {activeFase.reward}
                    </p>
                    <p className="font-body text-[0.75rem] leading-snug" style={{ color: DS.ember, opacity: 0.8 }}>
                      {activeFase.rewardSub}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
