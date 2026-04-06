"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ── Dados das fases ─────────────────────────────────────────── */
const FASES = [
  {
    id: "fase1",
    label: "Fase 1 · Começar a Vender",
    emoji: "🛍️",
    duration: "5 dias",
    color: "#2DCCD3",
    tagColor: "#033624",
    rewardBg: "#BAF6F0",
    image: "/assets/1.svg",
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
    rewardEmoji: "🏆",
  },
  {
    id: "fase2",
    label: "Fase 2 · Escalar Vendas",
    emoji: "📈",
    duration: "30 dias",
    color: "#FBEB35",
    tagColor: "#033624",
    rewardBg: "#FFFDE0",
    image: "/assets/2.svg",
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
    rewardEmoji: "💰",
  },
  {
    id: "fase3",
    label: "Fase 3 · Acelerar",
    emoji: "🚀",
    duration: "60 dias",
    color: "#EDBBE8",
    tagColor: "#4A0505",
    rewardBg: "#F9EEFA",
    image: "/assets/3.svg",
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
    rewardEmoji: "🎯",
  },
  {
    id: "fase4",
    label: "💎 Diamante",
    emoji: "👑",
    duration: "Meta: R$ 4.000/dia",
    color: "#4A0505",
    tagColor: "#ffffff",
    rewardBg: "#EDD4B2",
    image: "/assets/1.svg",
    objective: "Atingir média de R$ 4.000/dia em vendas",
    missions: [
      "Gerente de contas dedicado (TikTok)",
      "Planejamento estratégico personalizado",
      "Acesso antecipado a campanhas exclusivas",
      "Suporte direto para escalar mais rápido",
    ],
    reward: "Escala Avançada",
    rewardSub: "Benefícios exclusivos para top vendedores",
    rewardEmoji: "💎",
  },
];

const ITEM_HEIGHT = 64;

const wrap = (min: number, max: number, v: number) => {
  const size = max - min;
  return ((((v - min) % size) + size) % size) + min;
};

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

  const getCardStatus = (index: number) => {
    let diff = index - currentIndex;
    if (diff > FASES.length / 2) diff -= FASES.length;
    if (diff < -FASES.length / 2) diff += FASES.length;
    if (diff === 0) return "active";
    if (diff === -1) return "prev";
    if (diff === 1) return "next";
    return "hidden";
  };

  return (
    <section id="fases" className="relative py-12" style={{ backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div className="w-full max-w-[430px] mx-auto px-6 mb-6">
        <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: "#2DCCD3" }}>
          A Trilha
        </p>
        <h2
          className="font-display font-black leading-tight"
          style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)", color: "#033624" }}
        >
          Missões por Fase
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
                    <span className="text-lg">{fase.emoji}</span>
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
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{currentFase.emoji}</span>
                  <div>
                    <h3
                      className="font-display font-black text-lg leading-tight"
                      style={{ color: "#033624" }}
                    >
                      {currentFase.label.replace(/^Fase \d · |^💎 /, "")}
                    </h3>
                    <p className="font-body text-xs italic mt-0.5" style={{ color: "#4A0505", opacity: 0.75 }}>
                      {currentFase.objective}
                    </p>
                  </div>
                </div>

                {/* Missões */}
                <ul className="space-y-1.5 mb-4">
                  {currentFase.missions.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm" style={{ color: "#033624" }}>
                      <span style={{ color: currentFase.color, flexShrink: 0, marginTop: "2px" }}>✦</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                {/* Recompensa */}
                <div
                  className="rounded-xl p-3"
                  style={{ backgroundColor: currentFase.rewardBg }}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xl">{currentFase.rewardEmoji}</span>
                    <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                      {currentFase.reward}
                    </p>
                  </div>
                  <p className="font-body text-xs pl-8" style={{ color: "#4A0505", opacity: 0.75 }}>
                    {currentFase.rewardSub}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress dots + linha trilha */}
      <div className="w-full max-w-[430px] mx-auto px-6 mt-8">
        <div className="flex items-center justify-center gap-3 relative">
          {/* Linha conectando dots */}
          <div
            className="absolute h-0.5 left-1/2 -translate-x-1/2"
            style={{
              width: `${(FASES.length - 1) * 40}px`,
              backgroundColor: "rgba(3,54,36,0.12)",
            }}
          />
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
