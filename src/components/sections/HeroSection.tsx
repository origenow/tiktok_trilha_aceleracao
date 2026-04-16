"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Trophy, ShoppingBag, Crown, Rocket, Gem, LucideIcon } from "lucide-react";
import { HighlightedText } from "@/components/ui/highlighted-text";

/* ── Floating Doodle component ───────────────────────────────── */

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
    <Trophy size={32} color="white" />
  </div>
);

/* ── Pílulas das fases (bottom row) ──────────────────────────── */
const fasesPills: { label: string; bg: string; color: string; rotate: string; icon?: LucideIcon }[] = [
  { label: "Fase 1 · 5 dias", bg: "#2DCCD3", color: "#033624", rotate: "-4deg" },
  { label: "Fase 2 · 30 dias", bg: "#FBEB35", color: "#033624", rotate: "5deg" },
  { label: "Fase 3 · 60 dias", bg: "#EDBBE8", color: "#4A0505", rotate: "-5deg" },
  { label: "Diamante", bg: "#4A0505", color: "#ffffff", rotate: "4deg", icon: Gem },
];

/* ── Floating reward cards ───────────────────────────────────── */
const cards = [
  {
    icon: ShoppingBag,
    title: "Fase 1",
    sub: "Até R$ 2.400",
    detail: "em cupons de plataforma",
    rotate: "-10deg",
    delay: 0,
    yAnim: [0, -14, 0],
    duration: 5,
  },
  {
    icon: Crown,
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
  const sectionRef = useRef<HTMLElement>(null);

  // Hook de Scroll para monitorar o progresso na HeroSection
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Cores e pesos transformados para mudar instantaneamente em pontos específicos
  // Parte 1: Ativa em 20% do scroll
  const color1 = useTransform(scrollYProgress, (v) => v >= 0.2 ? "#F1204A" : "#4A0505");
  const weight1 = useTransform(scrollYProgress, (v) => v >= 0.2 ? 900 : 100);

  // Parte 2: Ativa em 50% do scroll
  const color2 = useTransform(scrollYProgress, (v) => v >= 0.5 ? "#F1204A" : "#4A0505");
  const weight2 = useTransform(scrollYProgress, (v) => v >= 0.5 ? 900 : 100);

  // Parte 3: Ativa em 80% do scroll
  const color3 = useTransform(scrollYProgress, (v) => v >= 0.8 ? "#F1204A" : "#4A0505");
  const weight3 = useTransform(scrollYProgress, (v) => v >= 0.8 ? 900 : 100);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[250vh] flex flex-col"
      style={{ backgroundColor: "#BAF6F0" }}
    >
      {/* Sticky container para manter o conteúdo fixo enquanto rola */}
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">

        {/* Doodles absolutos */}
        <FloatingDoodle src="/assets_new/manequim.svg" size={86} bottom="32%" left="4%" rotate={12} delay={0.5} opacity={0.4} reverse />
        <FloatingDoodle src="/assets_new/2.svg" size={60} top="45%" right="4%" rotate={-12} delay={1.5} opacity={0.35} />
        <FloatingDoodle src="/assets_new/camera.svg" size={72} top="38%" left="6%" rotate={45} delay={0.8} opacity={0.4} reverse />
        <FloatingDoodle src="/assets_new/5.svg" size={56} top="18%" right="10%" rotate={0} delay={2.1} opacity={0.25} />
        <FloatingDoodle src="/assets_new/cosmetics.svg" size={79} top="8%" right="6%" rotate={-15} delay={1.2} opacity={0.3} />
        <FloatingDoodle src="/assets_new/7.svg" size={50} bottom="15%" right="8%" rotate={20} delay={0.3} opacity={0.15} reverse />
        <FloatingDoodle src="/assets_new/8.svg" size={38} top="25%" left="8%" rotate={-30} delay={2.5} opacity={0.2} />
        <FloatingDoodle src="/assets_new/9.svg" size={52} bottom="40%" right="12%" rotate={10} delay={1.8} opacity={0.1} />
        <FloatingDoodle src="/assets_new/10.svg" size={46} top="55%" left="2%" rotate={5} delay={0.1} opacity={0.3} />
        <FloatingDoodle src="/assets_new/manequim.svg" size={58} bottom="5%" left="15%" rotate={-20} delay={3.2} opacity={0.25} reverse />

        {/* Container mobile-first */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-[430px] mx-auto px-6 pt-8 pb-4">

          {/* Header de Logos */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 w-full flex items-center justify-between"
          >
            <div className="flex items-center">
              <img src="/tiktok-icon.svg" alt="TikTok" className="w-16 h-16 -ml-2" />
            </div>

            <div className="flex items-center">
              <img
                src="/tiktok-black.png"
                alt="TikTok Primary Logo"
                className="h-10 w-auto object-contain opacity-90"
                style={{ maxHeight: "36px" }}
              />
            </div>
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

          {/* Subtítulo Dinâmico */}
          <div className="font-body mt-4 text-[0.95rem] leading-relaxed w-full">
            <motion.p style={{ display: "inline-block" }}>
              <motion.span style={{ color: color1, fontWeight: weight1 }}>Siga as fases</motion.span>
              <motion.span style={{ color: "#4A0505", opacity: 0.8 }}> → </motion.span>
              <motion.span style={{ color: color2, fontWeight: weight2 }}>complete missões</motion.span>
              <motion.span style={{ color: "#4A0505", opacity: 0.8 }}> → </motion.span>
              <motion.span style={{ color: color3, fontWeight: weight3 }}>desbloqueie cupons, tráfego e suporte</motion.span>
            </motion.p>
          </div>

          {/* Cards flutuantes */}
          <div className="relative w-full mt-8 mb-6" style={{ height: "180px" }}>
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: i === 0 ? "0%" : "auto",
                  right: i === 1 ? "0%" : "auto",
                  top: i === 0 ? "20px" : "0px",
                  zIndex: 10,
                }}
                animate={{ y: card.yAnim }}
                transition={{ duration: card.duration, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
              >
                <div
                  className="px-5 py-4 flex flex-col items-center text-center pointer-events-auto w-36"
                  style={{
                    transform: `rotate(${card.rotate})`,
                    borderRadius: "2rem",
                    background: "rgba(255,255,255,0.22)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 8px 32px rgba(3,54,36,0.12), inset 0 1px 1px rgba(255,255,255,0.4)",
                  }}
                >
                  <div className="mb-2" style={{ color: "#F1204A" }}>
                    <card.icon size={32} />
                  </div>
                  <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                    {card.title}
                  </p>
                  <p className="font-body font-medium text-xs mt-0.5" style={{ color: "#F1204A" }}>
                    {card.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="absolute left-1/2 top-1/2 -track-x-1/2 -translate-y-1/2 -translate-x-1/2" style={{ zIndex: 5 }}>
              <CircularBadge />
            </div>
          </div>

          {/* CTA principal */}
          <motion.a
            href="#fases"
            className="font-display font-black text-white text-base px-8 py-4 shadow-lg hover:scale-[1.04] transition-all duration-200 w-full text-center flex items-center justify-center gap-2"
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
            <Rocket size={18} /> Começar a Trilha
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
        </div>

        {/* Bottom strip — pílulas das fases (AGORA DENTRO DO STICKY) */}
        <div className="mt-auto relative z-10 w-full max-w-[430px] mx-auto px-4 pb-8">
          <div className="bg-white rounded-3xl px-4 py-5 shadow-md">
            <p className="font-body text-xs text-center mb-3 opacity-60" style={{ color: "#033624" }}>
              4 fases · missões progressivas · recompensas reais
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {fasesPills.map((p) => (
                <span
                  key={p.label}
                  className="pill-tag text-xs flex items-center justify-center"
                  style={{
                    backgroundColor: p.bg,
                    color: p.color,
                    transform: `rotate(${p.rotate})`,
                    fontSize: "0.7rem",
                    padding: "4px 12px",
                  }}
                >
                  {p.icon && <p.icon size={12} className="mr-1 shrink-0" />}
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
