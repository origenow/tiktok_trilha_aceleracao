"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  ShoppingBag,
  TrendingUp,
  Rocket,
  Crown,
  Trophy,
  Coins,
  Target,
  Gem,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HighlightedText } from "@/components/ui/highlighted-text";

/* ── Dados das fases ─────────────────────────────────────────── */
const FASES = [
  {
    id: "fase1",
    label: "Fase 1 · Começar a Vender",
    icon: ShoppingBag,
    duration: "5 dias",
    color: "#2DCCD3",
    tagColor: "#033624",
    rewardBg: "#BAF6F0",
    image: "/assets/m3.jpg",
    objective: "Deixe sua loja pronta e gere as primeiras vendas",
    missions: [
      "Entre no grupo de WhatsApp da sua região",
      "Cadastre 10 produtos na loja",
      "Ative promoção em 5 produtos",
      "Crie 3 ofertas relâmpago + 1 cupom",
      "Faça 2 lives de 60 minutos",
      "Poste 3 vídeos com link do produto",
    ],
    reward: "Até R$ 2.400 em cupons",
    rewardSub: "Sessões de suporte · 0% comissão por 90 dias",
    rewardIcon: Trophy,
  },
  {
    id: "fase2",
    label: "Fase 2 · Escalar Vendas",
    icon: TrendingUp,
    duration: "30 dias",
    color: "#FBEB35",
    tagColor: "#033624",
    rewardBg: "#FFFDE0",
    image: "/assets/m4.png",
    objective: "Ganhe volume com criadores + conteúdo",
    missions: [
      "Ative colaboração aberta em TODOS os produtos (>10%)",
      "Defina amostras grátis para os top 3 produtos",
      "Envie mínimo 30 amostras para criadores",
      "Poste 10 vídeos compráveis com link",
      "Realize 14 lives (mínimo 20h no total)",
      "Participe das campanhas no Seller Center",
    ],
    reward: "Até R$ 3.400 em cupons + impulsionamento",
    rewardSub: "Incentivo de tráfego · 15% off cupom · Comissão extra",
    rewardIcon: Coins,
  },
  {
    id: "fase3",
    label: "Fase 3 · Acelerar",
    icon: Rocket,
    duration: "60 dias",
    color: "#EDBBE8",
    tagColor: "#4A0505",
    rewardBg: "#F9EEFA",
    image: "/assets/m2.jpg",
    objective: "Escale de forma consistente com criadores, lives e tráfego pago",
    missions: [
      "Gerencie criadores para 1.500 vídeos publicados",
      "Reforce top criadores (mais produtos + comunicação)",
      "Faça lives frequentes — mínimo 40h/mês",
      "Realize 1 big live por campanha mensal (>3h)",
      "Ative GMV Max nos produtos com >30 vídeos",
      "Investimento inicial GMV Max: R$ 2.500/mês",
    ],
    reward: "Matching com Top Criadores + Ads Credits",
    rewardSub: "Cashback em ads até R$ 4.000 · Cupons 30% off",
    rewardIcon: Target,
  },
  {
    id: "fase4",
    label: "Diamante",
    icon: Gem,
    duration: "Meta: R$ 4.000/dia",
    color: "#4A0505",
    tagColor: "#ffffff",
    rewardBg: "#EDD4B2",
    image: "/assets/m1.jpg",
    objective: "Atingir média de R$ 4.000/dia em vendas",
    missions: [
      "Gerente de contas dedicado (TikTok)",
      "Planejamento estratégico personalizado",
      "Acesso antecipado a campanhas exclusivas",
      "Suporte direto para escalar mais rápido",
    ],
    reward: "Escala Avançada",
    rewardSub: "Benefícios exclusivos para top vendedores",
    rewardIcon: Crown,
  },
];

const ITEM_HEIGHT = 64;

const wrap = (min: number, max: number, v: number) => {
  const size = max - min;
  return ((((v - min) % size) + size) % size) + min;
};

const FloatingDoodle = ({
  src,
  size = 40,
  top,
  left,
  right,
  bottom,
  delay = 0,
  rotate = 0,
  opacity = 0.3,
  reverse = false
}: {
  src: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  rotate?: number;
  opacity?: number;
  reverse?: boolean;
}) => (
  <div
    className={`absolute pointer-events-none ${reverse ? 'animate-float-reverse' : 'animate-float'}`}
    style={{
      top, left, right, bottom,
      width: size, height: size,
      animationDelay: `${delay}s`,
      opacity
    }}
  >
    <img
      src={src}
      alt=""
      className="w-full h-full object-contain"
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  </div>
);

/* ── Progress dot colors ─────────────────────────────────────── */
const dotColors = ["#2DCCD3", "#FBEB35", "#EDBBE8", "#4A0505"];

/* ── Componente principal ─────────────────────────────────────── */
export function FasesSection() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % FASES.length) + FASES.length) % FASES.length;
  const currentFase = FASES[currentIndex];

  const nextStep = useCallback(() => setStep((p) => p + 1), []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(nextStep, 5000);
    return () => clearInterval(id);
  }, [nextStep, isPaused]);

  const handleSelect = (index: number) => {
    const diff = (index - currentIndex + FASES.length) % FASES.length;
    if (diff > 0) setStep((s) => s + diff);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section id="fases" className="relative py-12 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Decorative icons */}
      <FloatingDoodle src="/assets_new/10.svg" size={80} top="15%" right="-2%" rotate={15} opacity={0.15} />
      <FloatingDoodle src="/assets_new/5.svg" size={70} bottom="25%" left="-2%" rotate={-15} opacity={0.1} reverse />
      <FloatingDoodle src="/assets_new/1.svg" size={40} top="45%" left="2%" rotate={20} opacity={0.08} />
      <FloatingDoodle src="/assets_new/2.svg" size={50} bottom="5%" right="4%" rotate={-10} opacity={0.1} />
      <FloatingDoodle src="/assets_new/4.svg" size={45} top="5%" left="4%" rotate={30} opacity={0.05} reverse />
      <FloatingDoodle src="/assets_new/6.svg" size={60} bottom="45%" right="2%" rotate={45} opacity={0.08} />
      {/* Header */}
      <div className="w-full max-w-[430px] mx-auto px-6 mb-6">
        <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: "#2DCCD3" }}>
          A Trilha
        </p>
        <h2
          className="font-display font-black leading-tight"
          style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)", color: "#033624" }}
        >
          Missões por <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.3}>Fase</HighlightedText>
        </h2>
        <p className="font-body text-sm mt-1" style={{ color: "#4A0505", opacity: 0.75 }}>
          Clique em uma fase para ver as missões e recompensas
        </p>
      </div>

      {/* Layout principal */}
      <div className="w-full max-w-[430px] mx-auto relative">

        {/* ── Coluna esquerda: chips das fases ── */}
        <div
          className="relative overflow-hidden px-6 py-6 flex flex-col justify-center"
          style={{
            backgroundColor: currentFase.color,
            minHeight: "200px",
            transition: "background-color 0.5s ease",
          }}
        >
          {/* Gradiente topo/base */}
          <div
            className="absolute inset-x-0 top-0 h-10 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, ${currentFase.color}, transparent)` }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-10 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${currentFase.color}, transparent)` }}
          />

          {/* Chips animados */}
          <div className="relative flex items-center justify-start" style={{ height: ITEM_HEIGHT * 4 }}>
            {FASES.map((fase, index) => {
              const distance = index - currentIndex;
              const wrapped = wrap(-(FASES.length / 2), FASES.length / 2, distance);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={fase.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content", position: "absolute" }}
                  animate={{ y: wrapped * ITEM_HEIGHT, opacity: 1 - Math.abs(wrapped) * 0.25 }}
                  transition={{ type: "spring", stiffness: 90, damping: 22 }}
                >
                  <button
                    onClick={() => handleSelect(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-500 text-left border font-body",
                      isActive
                        ? "bg-white border-white z-10 shadow-md"
                        : "bg-transparent border-white/30 hover:border-white/60"
                    )}
                    style={{ color: isActive ? currentFase.color : "rgba(255,255,255,0.65)" }}
                  >
                    <fase.icon size={20} />
                    <span className="text-sm font-medium whitespace-nowrap">{fase.label}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Painel direito: card da fase ativa ── */}
        <div className="relative px-4 pb-4" style={{ backgroundColor: "#f8f8f8" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFase.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="pt-4"
            >
              {/* Imagem da fase */}
              <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 shadow-sm">
                <Image
                  src={currentFase.image}
                  alt={currentFase.label}
                  fill
                  className="object-cover"
                  sizes="430px"
                />
                {/* Overlay com tag */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <span
                    className="pill-tag text-xs"
                    style={{
                      backgroundColor: currentFase.color,
                      color: currentFase.tagColor,
                      fontSize: "0.65rem",
                      padding: "3px 10px",
                    }}
                  >
                    {currentFase.label} · {currentFase.duration}
                  </span>
                </div>
              </div>

              {/* Card branco */}
              <div className="card-float p-5">
                {/* Cabeçalho */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${currentFase.color}20`, color: currentFase.color }}
                  >
                    <currentFase.icon size={32} />
                  </div>
                  <div>
                    <h3
                      className="font-display font-black text-lg leading-tight"
                      style={{ color: "#033624" }}
                    >
                      {currentFase.label.replace(/^Fase \d · |^💎 /, "")}
                    </h3>
                    <p className="font-body text-xs italic mt-1" style={{ color: "#4A0505", opacity: 0.75 }}>
                      {currentFase.objective}
                    </p>
                  </div>
                </div>

                {/* Missões */}
                <ul className="space-y-2 mb-6">
                  {currentFase.missions.map((m, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm" style={{ color: "#033624" }}>
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: currentFase.color }}
                      />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                {/* Recompensa */}
                <div
                  className="rounded-2xl p-4 flex flex-col gap-2"
                  style={{ backgroundColor: currentFase.rewardBg }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.5)", color: "#033624" }}
                    >
                      <currentFase.rewardIcon size={24} />
                    </div>
                    <div>
                      <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                        {currentFase.reward}
                      </p>
                      <p className="font-body text-[0.7rem] leading-tight mt-0.5" style={{ color: "#4A0505", opacity: 0.8 }}>
                        {currentFase.rewardSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress dots */}
      <div className="w-full max-w-[430px] mx-auto px-6 mt-8">
        <div className="flex items-center justify-center gap-3 relative">
          {dotColors.map((color, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="relative w-4 h-4 rounded-full transition-all duration-300 z-10"
              style={{
                backgroundColor: i === currentIndex ? color : "rgba(3,54,36,0.15)",
                transform: i === currentIndex ? "scale(1.3)" : "scale(1)",
                boxShadow: i === currentIndex ? `0 0 0 3px ${color}40` : "none",
              }}
            />
          ))}
        </div>
        <p className="font-body text-xs text-center mt-2 opacity-40" style={{ color: "#033624" }}>
          Fase {currentIndex + 1} de {FASES.length}
        </p>
      </div>
    </section>
  );
}
