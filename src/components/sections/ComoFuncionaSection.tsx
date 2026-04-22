"use client";

import React from "react";
import { motion } from "motion/react";
import { ShoppingBag, TrendingUp, Gift, Trophy, ArrowRight } from "lucide-react";
import { HighlightedText } from "@/components/ui/highlighted-text";
import confetti from "canvas-confetti";

/* ── Marquee component inline (sem dep extra) ────────────────── */
function Marquee({
  items,
  reverse = false,
  duration = "40s",
}: {
  items: string[];
  reverse?: boolean;
  duration?: string;
}) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-2 w-max"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration} linear infinite`,
          "--gap": "0.5rem",
        } as React.CSSProperties}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center font-body text-xs px-3 py-1.5 whitespace-nowrap flex-shrink-0"
            style={{
              backgroundColor: "#BAF6F0",
              color: "#033624",
              border: "1.5px solid #2DCCD3",
              borderRadius: "999px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Dados ───────────────────────────────────────────────────── */
const MISSOES_MARQUEE = [
  "Cadastre 10 produtos",
  "Ative promoção em 5 produtos",
  "Faça 2 lives de 60 min",
  "Poste 3 vídeos com produto",
  "Envie 30 amostras para criadores",
  "Participe das campanhas",
  "Ative GMV Max",
  "Gerencie criadores",
  "Realize 14 lives no mês",
  "Big live por campanha",
  "Colaboração aberta >10%",
  "10 vídeos compráveis",
];

const PASSOS = [
  {
    num: "1",
    icon: ShoppingBag,
    title: "Acesse Central do Vendedor",
    desc: "Vá em Crescimento no menu principal do Seller Center",
  },
  {
    num: "2",
    icon: TrendingUp,
    title: 'Clique em "Iniciar"',
    desc: "Selecione a fase e siga os passos de cada missão",
  },
  {
    num: "3",
    icon: Gift,
    title: "Conclua e atualize",
    desc: "Ao completar a missão, recarregue a página para registrar ",
  },
  {
    num: "4",
    icon: Trophy,
    title: "Resgate seus prêmios",
    desc: 'Acesse "Minhas Recompensas" e use seus cupons e créditos',
  },
];

const m1 = MISSOES_MARQUEE.slice(0, 4);
const m2 = MISSOES_MARQUEE.slice(4, 8);
const m3 = MISSOES_MARQUEE.slice(8);

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

/* ── Componente principal ─────────────────────────────────────── */
export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="relative pt-12 pb-20 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Decorative icons */}
      <FloatingDoodle src="/assets_new/camera.svg" size={108} top="2%" left="4%" rotate={-12} opacity={0.12} />
      <FloatingDoodle src="/assets_new/cosmetics.svg" size={99} bottom="10%" right="4%" rotate={12} opacity={0.15} reverse />
      <FloatingDoodle src="/assets_new/manequim.svg" size={81} top="40%" right="2%" rotate={25} opacity={0.08} />
      <FloatingDoodle src="/assets_new/2.svg" size={35} bottom="20%" left="6%" rotate={-45} opacity={0.1} />
      <FloatingDoodle src="/assets_new/5.svg" size={50} top="15%" right="10%" rotate={10} opacity={0.05} />
      <div className="w-full max-w-[430px] lg:max-w-screen-xl mx-auto lg:px-16">

        {/* Desktop: grid 2 colunas */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* ── Coluna esquerda: header + marquee ── */}
          <div className="lg:pr-8">
            {/* Header */}
            <motion.div
              className="px-6 lg:px-0 mb-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full font-body text-xs font-black uppercase tracking-widest mb-4 border border-[#FBEB35]/50 bg-[#FBEB35]/10 text-[#033624]">
                Recompensas
              </span>
              <h2
                className="font-display font-black leading-[0.95]"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#033624" }}
              >
                Como resgatar seus <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.3}>prêmios?</HighlightedText>
              </h2>
              <p className="font-body text-sm lg:text-base mt-4 font-medium max-w-sm mx-auto lg:mx-0" style={{ color: "#4A0505", opacity: 0.75 }}>
                Depois de completar as missões estratégicas da Trilha, veja como retirar suas recompensas no Seller Center e impulsionar suas vendas.
              </p>
            </motion.div>

            {/* Marquee triplo envolto em um card de vidro no desktop */}
            <motion.div
              className="relative mb-8 lg:p-6 lg:bg-white/50 lg:backdrop-blur-xl lg:rounded-[2rem] lg:border lg:border-white/60 lg:shadow-[0_20px_40px_rgba(3,54,36,0.05)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none lg:rounded-l-[2rem]"
                style={{ background: "linear-gradient(to right, rgba(255,255,255,0.9), transparent)" }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none lg:rounded-r-[2rem]"
                style={{ background: "linear-gradient(to left, rgba(255,255,255,0.9), transparent)" }}
              />
              <div className="flex flex-col gap-3 py-1">
                <Marquee items={m1} duration="35s" />
                <Marquee items={m2} reverse duration="45s" />
                <Marquee items={m3} duration="40s" />
              </div>
            </motion.div>
          </div>

          {/* ── Coluna direita: 4 passos em cards + botão ── */}
          <div className="px-6 lg:px-0">
            <div className="relative">
              {/* Linha guia desktop */}
              <div className="hidden lg:block absolute left-6 top-10 bottom-24 w-1 border-l-2 border-dashed border-[#2DCCD3]/30 z-0" />

              <div className="flex flex-col gap-0 lg:gap-4 lg:pb-8 relative z-10 border-t-2 border-dashed lg:border-none" style={{ borderColor: "#2DCCD3" }}>
                {PASSOS.map((passo, i) => {
                  const Icon = passo.icon;
                  const dividerColors = ["#F1204A", "#FBEB35", "#EDBBE8", "#2DCCD3"];
                  const currentColor = dividerColors[i % dividerColors.length];
                  
                  return (
                    <motion.div
                      key={i}
                      className="flex gap-4 lg:gap-6 py-5 lg:py-4 lg:px-6 lg:bg-white lg:rounded-2xl lg:shadow-sm lg:hover:shadow-md transition-all duration-300 lg:border lg:border-gray-100 group border-b border-dashed lg:border-solid lg:border-b-gray-100"
                      style={{ borderBottomColor: typeof window !== 'undefined' && window.innerWidth < 1024 ? currentColor : undefined }}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div
                        className="flex-shrink-0 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-display font-black text-sm lg:text-xl text-white shadow-md transition-transform duration-300 group-hover:rotate-12"
                        style={{ backgroundColor: currentColor, color: currentColor === "#FBEB35" ? "#033624" : "white" }}
                      >
                        {passo.num}
                      </div>
                      <div className="flex flex-col gap-1 pt-0.5 lg:pt-1">
                        <Icon size={20} className="lg:w-6 lg:h-6 transition-colors duration-300" style={{ color: "#033624", opacity: 0.6 }} />
                        <h3 className="font-display font-black text-sm lg:text-lg lg:mt-1" style={{ color: "#033624" }}>
                          {passo.title}
                        </h3>
                        <p className="font-body text-sm lg:text-[0.95rem] leading-relaxed" style={{ color: "#4A0505", opacity: 0.75 }}>
                          {passo.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Link seller center */}
            <motion.div
              className="mt-8 lg:mt-4 text-center lg:text-left flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="https://seller-br.tiktok.com/challenges/growth"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-display font-black text-sm lg:text-[1.1rem] px-7 py-3 lg:px-10 lg:py-5 lg:w-full justify-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  color: "#ffffff",
                  backgroundColor: "#F1204A",
                  borderRadius: "999px",
                  boxShadow: "0 10px 30px rgba(241, 32, 74, 0.3)"
                }}
                onClick={() => {
                  confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.8 },
                    colors: ['#F1204A', '#FBEB35', '#2DCCD3', '#EDBBE8'],
                    zIndex: 9999,
                  });
                }}
              >
                Resgatar recompensas agora <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
