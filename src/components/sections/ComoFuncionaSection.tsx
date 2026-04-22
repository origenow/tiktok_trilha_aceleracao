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
  duration = 40,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const copies = 8;
  const blockItems = Array(copies).fill(items).flat();
  const adjustedDuration = duration * 4;

  const Badge = ({ item }: { item: string }) => (
    <span
      className="inline-flex items-center font-body text-xs lg:text-[14px] lg:font-bold px-3 py-1.5 lg:px-5 lg:py-2.5 whitespace-nowrap flex-shrink-0 lg:shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-[#F1204A] hover:text-white hover:border-[#F1204A] cursor-default bg-[#BAF6F0] text-[#033624] border-[1.5px] border-[#2DCCD3] rounded-full"
    >
      {item}
    </span>
  );

  return (
    <div className="overflow-hidden w-full group py-1">
      <div
        className="flex w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${adjustedDuration}s linear infinite`,
        } as React.CSSProperties}
      >
        <div className="flex gap-2 lg:gap-3 pr-2 lg:pr-3 w-max">
          {blockItems.map((item, i) => (
            <Badge key={`b1-${i}`} item={item} />
          ))}
        </div>
        <div className="flex gap-2 lg:gap-3 pr-2 lg:pr-3 w-max">
          {blockItems.map((item, i) => (
            <Badge key={`b2-${i}`} item={item} />
          ))}
        </div>
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* ── Coluna esquerda: header + marquee ── */}
          <div className="lg:pr-4 lg:pt-2">
            <motion.div
              className="px-6 lg:px-0 mb-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full font-body text-xs font-black uppercase tracking-widest mb-5 border border-[#FBEB35]/60 bg-[#FBEB35]/15 text-[#033624]"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Recompensas
              </motion.span>
              <h2
                className="font-display font-black leading-[0.95]"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#033624" }}
              >
                Como resgatar seus{" "}
                <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.3}>
                  prêmios?
                </HighlightedText>
              </h2>
              <p
                className="font-body text-sm lg:text-base mt-5 font-medium max-w-sm mx-auto lg:mx-0 leading-relaxed"
                style={{ color: "#4A0505", opacity: 0.72 }}
              >
                Depois de completar as missões estratégicas da Trilha, veja como retirar suas recompensas no Seller Center e impulsionar suas vendas.
              </p>
            </motion.div>

            {/* Marquee com fade nas bordas */}
            <motion.div
              className="relative mb-8 lg:mb-0 lg:mt-10 lg:ml-[calc(-50vw+50%)] lg:w-[calc(50vw+50%)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {/* Edge fades */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />
              <div className="flex flex-col gap-2 lg:gap-3 py-1 overflow-hidden">
                <Marquee items={m1} duration={60} />
                <Marquee items={m2} reverse duration={75} />
                <Marquee items={m3} duration={65} />
              </div>
            </motion.div>
          </div>

          {/* ── Coluna direita: timeline animada ── */}
          <div className="px-6 lg:px-0 lg:flex lg:justify-center">
            <div className="w-full lg:max-w-[400px]">

              {/* Steps */}
              <div className="flex flex-col border-t-2 border-dashed lg:border-none" style={{ borderColor: "#2DCCD3" }}>
                {PASSOS.map((passo, i) => {
                  const Icon = passo.icon;
                  const colors    = ["#F1204A", "#FBEB35", "#EDBBE8", "#2DCCD3"];
                  const textColors = ["#ffffff",  "#033624", "#4A0505", "#033624"];
                  const bgTints   = ["rgba(241,32,74,0.10)", "rgba(251,235,53,0.18)", "rgba(237,187,232,0.25)", "rgba(45,204,211,0.14)"];
                  const color     = colors[i];
                  const nextColor = colors[i + 1];
                  const textColor = textColors[i];
                  const bgTint    = bgTints[i];
                  const isLast    = i === PASSOS.length - 1;

                  return (
                    <React.Fragment key={i}>
                      {/* ── Mobile ── */}
                      <motion.div
                        className="lg:hidden flex gap-4 border-b border-dashed py-5"
                        style={{ borderBottomColor: color }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.45, delay: i * 0.1 }}
                      >
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-sm shadow-md"
                          style={{ backgroundColor: color, color: textColor }}
                        >
                          {passo.num}
                        </div>
                        <div className="flex flex-col gap-0.5 pt-0.5">
                          <Icon size={15} style={{ color, opacity: 0.8 }} />
                          <h3 className="font-display font-black text-sm mt-0.5" style={{ color: "#033624" }}>
                            {passo.title}
                          </h3>
                          <p className="font-body text-sm leading-relaxed" style={{ color: "#4A0505", opacity: 0.7 }}>
                            {passo.desc}
                          </p>
                        </div>
                      </motion.div>

                      {/* ── Desktop ── */}
                      <motion.div
                        className="hidden lg:flex gap-4 items-start"
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.11, type: "spring", stiffness: 90 }}
                      >
                        {/* Bolinha + linha conectora */}
                        <div className="flex flex-col items-center flex-shrink-0" style={{ width: 44 }}>
                          <motion.div
                            className="w-11 h-11 rounded-full flex items-center justify-center font-display font-black text-base z-10 relative shadow-lg cursor-default select-none"
                            style={{ backgroundColor: color, color: textColor }}
                            initial={{ scale: 0, rotate: -20 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 280, damping: 14, delay: i * 0.11 }}
                            whileHover={{ scale: 1.18, rotate: 6 }}
                          >
                            {passo.num}
                          </motion.div>

                          {!isLast && (
                            <motion.div
                              className="w-[2px] flex-1 min-h-[32px] mt-2 rounded-full"
                              style={{
                                background: `linear-gradient(to bottom, ${color}90, ${nextColor}55)`,
                                transformOrigin: "top",
                              }}
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.11 + 0.28, ease: "easeOut" }}
                            />
                          )}
                        </div>

                        {/* Card de conteúdo */}
                        <motion.div
                          className="flex-1 rounded-2xl p-4 mb-4 cursor-default overflow-hidden relative"
                          style={{
                            background: "white",
                            boxShadow: `0 4px 24px rgba(3,54,36,0.07), 0 0 0 1px ${color}22`,
                            borderColor: `${color}30`,
                          }}
                          whileHover={{
                            y: -4,
                            boxShadow: `0 14px 40px rgba(3,54,36,0.13), 0 0 0 1.5px ${color}55`,
                          }}
                          transition={{ type: "spring", stiffness: 380, damping: 22 }}
                        >
                          {/* Acento colorido no topo do card */}
                          <div
                            className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                            style={{ background: `linear-gradient(to right, ${color}, ${color}44)` }}
                          />

                          <div className="flex items-center gap-3 mb-2 mt-1">
                            <div
                              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: bgTint }}
                            >
                              <Icon size={15} style={{ color }} />
                            </div>
                            <h3 className="font-display font-black text-sm leading-tight" style={{ color: "#033624" }}>
                              {passo.title}
                            </h3>
                          </div>
                          <p className="font-body text-xs leading-relaxed pl-11" style={{ color: "#4A0505", opacity: 0.68 }}>
                            {passo.desc}
                          </p>
                        </motion.div>
                      </motion.div>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                className="mt-8 lg:mt-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.58 }}
              >
                <motion.a
                  href="https://seller-br.tiktok.com/challenges/growth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 font-display font-black text-sm lg:text-base px-7 py-4 w-full justify-center"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#F1204A",
                    borderRadius: "999px",
                    boxShadow: "0 10px 32px rgba(241,32,74,0.32)",
                  }}
                  whileHover={{ y: -3, boxShadow: "0 18px 44px rgba(241,32,74,0.42)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380, damping: 20 }}
                  onClick={() => {
                    confetti({
                      particleCount: 150,
                      spread: 80,
                      origin: { y: 0.8 },
                      colors: ["#F1204A", "#FBEB35", "#2DCCD3", "#EDBBE8"],
                      zIndex: 9999,
                    });
                  }}
                >
                  Resgatar recompensas agora{" "}
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </motion.a>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
