"use client";

import React from "react";
import { ShoppingBag, TrendingUp, Gift, Trophy } from "lucide-react";

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

/* ── Componente principal ─────────────────────────────────────── */
export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-12" style={{ backgroundColor: "#ffffff" }}>
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
            Como resgatar seus prêmios?
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
          <div className="border-t-2 border-dashed" style={{ borderColor: "rgba(3,54,36,0.12)" }}>
            {PASSOS.map((passo, i) => {
              const Icon = passo.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 py-5 border-b border-dashed"
                  style={{ borderColor: "rgba(3,54,36,0.08)" }}
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
          <div className="mt-4 text-center">
            <a
              href="https://seller-br.tiktok.com/challenges/growth"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm underline"
              style={{ color: "#F1204A" }}
            >
              seller-br.tiktok.com/challenges/growth →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
