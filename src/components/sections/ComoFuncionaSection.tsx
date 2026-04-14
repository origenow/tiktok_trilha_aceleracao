"use client";

import React from "react";
import { ShoppingBag, TrendingUp, Gift, Trophy, ArrowRight } from "lucide-react";
import { HighlightedText } from "@/components/ui/highlighted-text";

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
    desc: "Ao completar a missão, recarregue a página para registrar",
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
    <section id="como-funciona" className="relative py-12 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Decorative icons */}
      <FloatingDoodle src="/assets_new/4.svg" size={60} top="2%" left="4%" rotate={-12} opacity={0.12} />
      <FloatingDoodle src="/assets_new/6.svg" size={55} bottom="10%" right="4%" rotate={12} opacity={0.15} reverse />
      <FloatingDoodle src="/assets_new/1.svg" size={45} top="40%" right="2%" rotate={25} opacity={0.08} />
      <FloatingDoodle src="/assets_new/2.svg" size={35} bottom="20%" left="6%" rotate={-45} opacity={0.1} />
      <FloatingDoodle src="/assets_new/5.svg" size={50} top="15%" right="10%" rotate={10} opacity={0.05} />
      <div className="w-full max-w-[430px] mx-auto">

        {/* Header */}
        <div className="px-6 mb-6 text-center">
          <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: "#FBEB35", textShadow: "0 0 0 #033624", WebkitTextStroke: "0.5px #bba800" }}>
            Recompensas
          </p>
          <h2
            className="font-display font-black leading-tight"
            style={{ fontSize: "clamp(1.6rem, 7vw, 2.2rem)", color: "#033624" }}
          >
            Como resgatar seus <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.3}>prêmios?</HighlightedText>
          </h2>
          <p className="font-body text-sm mt-2" style={{ color: "#4A0505", opacity: 0.7 }}>
            Depois de completar as missões, veja como retirar suas recompensas no Seller Center
          </p>
        </div>

        {/* Marquee triplo */}
        <div className="relative mb-8">
          {/* Fade laterais */}
          <div
            className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          />

          <div className="flex flex-col gap-2 py-1">
            <Marquee items={m1} duration="35s" />
            <Marquee items={m2} reverse duration="45s" />
            <Marquee items={m3} duration="40s" />
          </div>
        </div>

        {/* 4 passos */}
        <div className="px-6">
          <div className="border-t-2 border-dashed" style={{ borderColor: "#2DCCD3" }}>
            {PASSOS.map((passo, i) => {
              const Icon = passo.icon;
              const dividerColors = ["#F1204A", "#FBEB35", "#EDBBE8", "#2DCCD3"];
              return (
                <div
                  key={i}
                  className="flex gap-4 py-5 border-b border-dashed"
                  style={{ borderColor: dividerColors[i % dividerColors.length] }}
                >
                  {/* Número */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-sm text-white"
                    style={{ backgroundColor: "#F1204A" }}
                  >
                    {passo.num}
                  </div>

                  {/* Ícone + texto */}
                  <div className="flex flex-col gap-1 pt-0.5">
                    <Icon size={20} style={{ color: "#033624", opacity: 0.6 }} />
                    <h3 className="font-display font-black text-sm" style={{ color: "#033624" }}>
                      {passo.title}
                    </h3>
                    <p className="font-body text-sm" style={{ color: "#4A0505", opacity: 0.75 }}>
                      {passo.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Link seller center */}
          <div className="mt-8 text-center flex justify-center">
            <a
              href="https://seller-br.tiktok.com/challenges/growth"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-display font-black text-sm px-7 py-3 transition-all duration-200"
              style={{ 
                color: "#ffffff", 
                backgroundColor: "#F1204A", 
                borderRadius: "999px",
                boxShadow: "0 4px 12px rgba(241, 32, 74, 0.2)"
              }}
            >
              Ver minhas recompensas agora <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
