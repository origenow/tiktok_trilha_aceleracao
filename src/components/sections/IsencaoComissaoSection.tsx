"use client";

import { motion } from "motion/react";
import { ExternalLink, Tag, Truck } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.48, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
});

export function IsencaoComissaoSection() {
  return (
    <section className="w-full py-12 md:py-16" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="w-full max-w-[430px] md:max-w-screen-2xl mx-auto px-4 md:px-20">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <span
              className="font-body text-xs font-semibold px-4 py-1.5 self-start"
              style={{ backgroundColor: "#111111", color: "#ffffff", borderRadius: "999px", transform: "rotate(-2deg)", display: "inline-block" }}
            >
              🎓 Conteúdo oficial
            </span>
            <h2 className="font-display font-black leading-tight" style={{ fontSize: "clamp(1.6rem, 7vw, 2.5rem)", color: "#111111" }}>
              Seller Academy
            </h2>
            <p className="font-body text-sm md:text-base leading-snug" style={{ color: "#666666" }}>
              Saiba tudo sobre TikTok Shop — do cadastro à escala.
            </p>
          </div>

          <motion.a
            {...fadeUp(0.08)}
            href="https://seller-br.tiktok.com/university/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl p-5 md:p-4 md:px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #111111 0%, #333333 100%)", boxShadow: "0 6px 24px rgba(0,0,0,0.20)" }}
          >
            <div className="shrink-0 w-12 h-12 md:w-8 md:h-8 rounded-2xl md:rounded-lg flex items-center justify-center text-2xl md:text-sm" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              🎓
            </div>
            <div className="flex-1 md:flex-none">
              <p className="font-display font-black text-sm md:text-base text-white">Acessar Academy</p>
              <p className="font-body text-xs mt-0.5 md:hidden text-white/40">Treinamentos oficiais</p>
            </div>
            <div className="shrink-0 w-8 h-8 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              <ExternalLink size={14} className="text-white" />
            </div>
          </motion.a>
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <motion.a
            {...fadeUp(0.12)}
            href="https://seller-br.tiktok.com/university/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl p-6 transition-all duration-300 md:hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: "#ffffff", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
          >
            <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl" style={{ backgroundColor: "#111111" }}>
              📋
            </div>
            <div className="flex-1">
              <p className="font-display font-black text-sm md:text-base text-[#111111]">Políticas</p>
              <p className="font-body text-xs mt-0.5 text-[#111111]/50">Regras e termos da plataforma</p>
            </div>
            <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: "#111111" }}>
              <ExternalLink size={14} className="text-white" />
            </div>
          </motion.a>

          <motion.div
            {...fadeUp(0.16)}
            className="group relative rounded-3xl p-6 flex flex-col gap-1 overflow-hidden"
            style={{ background: "linear-gradient(145deg, #111111 0%, #2a2a2a 100%)", boxShadow: "0 6px 22px rgba(0,0,0,0.25)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <Tag size={16} className="text-white" />
              </div>
              <p className="font-body text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">comissão</p>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="font-display font-black text-4xl md:text-5xl text-white">6%</p>
              <p className="font-body text-[10px] font-bold text-white/40">+ R$ 4,00</p>
            </div>
            <p className="font-body text-[10px] mt-1 text-white/30">por item vendido</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.20)}
            className="group relative rounded-3xl p-6 flex flex-col gap-1 overflow-hidden"
            style={{ background: "linear-gradient(145deg, #333333 0%, #444444 100%)", boxShadow: "0 6px 22px rgba(0,0,0,0.18)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <Truck size={16} className="text-white" />
              </div>
              <p className="font-body text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">Frete</p>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="font-display font-black text-4xl md:text-5xl text-white">6%</p>
            </div>
            <p className="font-body text-[10px] mt-1 text-white/30">sobre o valor total</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
