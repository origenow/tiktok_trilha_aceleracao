"use client";

import React from "react";
import { motion } from "motion/react";
import { HighlightedText } from "@/components/ui/highlighted-text";

/* ── Doodles SVG inline ───────────────────────────────────────── */

const StarDoodle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 4 L33.5 22.5 L52 19.5 L38.5 31.5 L46 49 L30 39 L14 49 L21.5 31.5 L8 19.5 L26.5 22.5 Z"
      stroke="#FBEB35"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="none"
      opacity="0.75"
    />
  </svg>
);

const FlowerDoodle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="30" r="6" stroke="#2DCCD3" strokeWidth="2.5" fill="none" opacity="0.8" />
    {[0, 60, 120, 180, 240, 300].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 30 + 14 * Math.cos(rad);
      const cy = 30 + 14 * Math.sin(rad);
      return (
        <ellipse
          key={angle}
          cx={cx}
          cy={cy}
          rx="5"
          ry="8"
          transform={`rotate(${angle}, ${cx}, ${cy})`}
          stroke="#2DCCD3"
          strokeWidth="2"
          fill="none"
          opacity="0.65"
        />
      );
    })}
  </svg>
);

const ArrowDoodle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 80 60"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 45 C 20 10, 50 8, 65 28"
      stroke="#EDBBE8"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.8"
    />
    <path
      d="M54 20 L65 28 L56 36"
      stroke="#EDBBE8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.8"
    />
  </svg>
);

/* ── Badge circular girando ───────────────────────────────────── */
const CircularBadge = () => (
  <div className="relative w-24 h-24 bg-[#F1204A] rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[2px] border-white/20">
    <div className="absolute inset-1 animate-[spin_12s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="circlePath"
          d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
        <text
          style={{ fontSize: "9px", fontFamily: "TikTokSansDisplay", fontWeight: 900, letterSpacing: "0.2em" }}
          fill="white"
        >
          <textPath href="#circlePath" startOffset="0%">
            CATEGORIA MODA • CATEGORIA MODA •{" "}
          </textPath>
        </text>
      </svg>
    </div>
    <span className="text-2xl">🏆</span>
  </div>
);

/* ── Pílulas das fases (bottom row) ──────────────────────────── */
const fasesPills = [
  { label: "Fase 1 · 5 dias",  bg: "#2DCCD3", color: "#033624", rotate: "-4deg" },
  { label: "Fase 2 · 30 dias", bg: "#FBEB35", color: "#033624", rotate: "5deg"  },
  { label: "Fase 3 · 60 dias", bg: "#EDBBE8", color: "#4A0505", rotate: "-5deg" },
  { label: "💎 Diamante",       bg: "#4A0505", color: "#ffffff", rotate: "4deg"  },
];

/* ── Floating reward cards ───────────────────────────────────── */
const cards = [
  {
    emoji: "🛍️",
    title: "Fase 1",
    sub: "Até R$ 2.400",
    detail: "em cupons de plataforma",
    rotate: "-10deg",
    delay: 0,
    yAnim: [0, -14, 0],
    duration: 5,
  },
  {
    emoji: "👑",
    title: "Diamante",
    sub: "Gerente Dedicado",
    detail: "TikTok Shop",
    rotate: "10deg",
    delay: 1,
    yAnim: [0, -18, 0],
    duration: 6,
  },
];

/* ── Componente principal ─────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#BAF6F0" }}
    >
      {/* Doodles absolutos */}
      <div className="absolute top-8 right-6 w-12 h-12 animate-float pointer-events-none">
        <FlowerDoodle className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 left-4 w-10 h-10 animate-float-reverse pointer-events-none">
        <StarDoodle className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 right-8 w-14 h-10 animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}>
        <ArrowDoodle className="w-full h-full" />
      </div>
      <div className="absolute top-40 left-8 w-8 h-8 animate-float-reverse pointer-events-none" style={{ animationDelay: "0.8s" }}>
        <StarDoodle className="w-full h-full" />
      </div>

      {/* Container mobile-first */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[430px] mx-auto px-6 pt-8 pb-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 self-start"
        >
          <span
            className="font-display font-black text-sm tracking-tight"
            style={{ color: "#033624", opacity: 0.65 }}
          >
            TikTok Shop
          </span>
        </motion.div>

        {/* Pílula categoria */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="self-start mb-4"
        >
          <span
            className="pill-tag text-xs"
            style={{
              backgroundColor: "#EDBBE8",
              color: "#4A0505",
              transform: "rotate(-6deg)",
              display: "inline-block",
            }}
          >
            Categoria Moda
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-display font-black leading-[0.9] tracking-tighter w-full"
          style={{
            fontSize: "clamp(2.4rem, 10vw, 3.2rem)",
            color: "#033624",
          }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            Trilha de
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            <HighlightedText highlightColor="#F1204A" from="bottom" delay={0.5}>
              Aceleração
            </HighlightedText>
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
          >
            TikTok Shop
          </motion.span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="font-body mt-4 text-[0.95rem] leading-relaxed"
          style={{ color: "#4A0505", opacity: 0.8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.55, duration: 0.4 }}
        >
          Siga as fases → complete missões → desbloqueie cupons, tráfego e suporte
        </motion.p>

        {/* Cards flutuantes */}
        <div className="relative w-full mt-8 mb-6" style={{ height: "200px" }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: i === 0 ? "0%" : "auto",
                right: i === 1 ? "0%" : "auto",
                top: i === 0 ? "20px" : "0px",
              }}
              animate={{ y: card.yAnim }}
              transition={{ duration: card.duration, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
            >
              <div
                className="card-float px-5 py-4 flex flex-col items-center text-center pointer-events-auto w-36"
                style={{ transform: `rotate(${card.rotate})` }}
              >
                <span className="text-3xl mb-2">{card.emoji}</span>
                <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                  {card.title}
                </p>
                <p className="font-body font-medium text-xs mt-0.5" style={{ color: "#F1204A" }}>
                  {card.sub}
                </p>
                <p className="font-body text-xs mt-0.5" style={{ color: "#4A0505", opacity: 0.7 }}>
                  {card.detail}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Badge circular centralizado */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <CircularBadge />
          </div>
        </div>

        {/* CTA principal */}
        <motion.a
          href="#fases"
          className="font-display font-black text-white text-base px-8 py-4 shadow-lg hover:scale-[1.04] transition-all duration-200 w-full text-center"
          style={{
            backgroundColor: "#F1204A",
            borderRadius: "999px",
            boxShadow: "0 8px 24px rgba(241, 32, 74, 0.35)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          whileHover={{ boxShadow: "0 12px 32px rgba(241, 32, 74, 0.5)" }}
        >
          🚀 Começar a Trilha
        </motion.a>

        {/* Seta scroll */}
        <motion.div
          className="mt-6 animate-bounce-arrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ color: "#033624" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5 L12 19 M6 13 L12 19 L18 13" stroke="#033624" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Role para ver */}
        <p className="font-body text-xs mt-1 opacity-50" style={{ color: "#033624" }}>
          Role para ver a trilha
        </p>
      </div>

      {/* Bottom strip — pílulas das fases */}
      <div className="relative z-10 w-full max-w-[430px] mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl px-4 py-5 shadow-md">
          <p className="font-body text-xs text-center mb-3 opacity-60" style={{ color: "#033624" }}>
            4 fases · missões progressivas · recompensas reais
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {fasesPills.map((p) => (
              <span
                key={p.label}
                className="pill-tag text-xs"
                style={{
                  backgroundColor: p.bg,
                  color: p.color,
                  transform: `rotate(${p.rotate})`,
                  fontSize: "0.7rem",
                  padding: "4px 12px",
                }}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
