"use client";

import React from "react";
import { motion } from "motion/react";
import { Trophy, ShoppingBag, Crown, Rocket, Gem, Gift } from "lucide-react";

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
  <div className="relative w-28 h-28 md:w-36 md:h-36 bg-[#EDBBE8] rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-white/20">
    <div className="absolute inset-1 animate-[spin_12s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="circlePath"
          d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
        <text
          style={{ fontSize: "10px", fontFamily: "TikTokSansDisplay", fontWeight: 900, letterSpacing: "0.15em" }}
          fill="#4A0505"
        >
          <textPath href="#circlePath" startOffset="0%">
            CATEGORIA MODA • CATEGORIA MODA •{" "}
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
        <Trophy size={40} color="#4A0505" />
    </div>
  </div>
);

/* ── Arrow components for bottom section (adapted to TikTok aesthetics) ───────────────────────────────── */
const ArrowBlack1 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-[#033624] stroke-current overflow-visible" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
);

const ArrowBlack2 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-[#033624] stroke-current overflow-visible" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
);

export function HeroSectionDesktop() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#F1204A] selection:text-white relative overflow-hidden w-full" style={{ backgroundColor: "#BAF6F0" }}>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#03362415_1px,transparent_1px),linear-gradient(to_bottom,#03362415_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

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


      {/* Hero Section Main Content */}
      <main className="flex-1 relative z-10 pt-16 pb-32 md:pt-20 md:pb-48 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto min-h-[85vh]">
        
        {/* Massive Typography & Elements Container */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10 mt-4 mb-16">
          
          {/* Text Stack */}
          <div className="w-full flex flex-col items-center relative z-10 space-y-2 md:space-y-4">
            
            {/* TRILHA DE */}
            <div className="w-full flex justify-start pl-[5%] md:pl-[15%] relative z-30">
              <h1 
                className="text-[clamp(4.5rem,11vw,150px)] font-black leading-[0.85] tracking-tighter text-[#033624] m-0 p-0 uppercase"
                style={{ 
                  fontFamily: 'TikTokSansDisplay, "Arial Black", Impact, sans-serif',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.8), 2px 2px 0 rgba(255,255,255,0.8), 3px 3px 0 rgba(255,255,255,0.8), 4px 4px 0 rgba(255,255,255,0.8)'
                }}
              >
                TRILHA DE
              </h1>
            </div>
            
            {/* ACELERAÇÃO */}
            <div className="w-full flex justify-center relative z-20">
              <h1 
                className="text-[clamp(4.5rem,13vw,200px)] font-black leading-[0.85] tracking-tighter text-[#F1204A] m-0 p-0 uppercase"
                style={{ 
                  fontFamily: 'TikTokSansDisplay, "Arial Black", Impact, sans-serif',
                  textShadow: '1px 1px 0 #033624, 2px 2px 0 #033624, 3px 3px 0 #033624, 4px 4px 0 #033624, 5px 5px 0 #033624, 6px 6px 0 #033624, 7px 7px 0 #033624, 8px 8px 0 #033624, 9px 9px 0 #033624, 10px 10px 0 #033624, 11px 11px 0 #033624'
                }}
              >
                ACELERAÇÃO
              </h1>
            </div>
            
            {/* TIKTOK SHOP */}
            <div className="w-full flex justify-start pl-[15%] md:pl-[30%] relative z-10">
              <h1 
                className="text-[clamp(4.5rem,11vw,150px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase"
                style={{ 
                  fontFamily: 'TikTokSansDisplay, "Arial Black", Impact, sans-serif',
                  textShadow: '1px 1px 0 #033624, 2px 2px 0 #033624, 3px 3px 0 #033624, 4px 4px 0 #033624, 5px 5px 0 #033624, 6px 6px 0 #033624, 7px 7px 0 #033624, 8px 8px 0 #033624, 9px 9px 0 #033624'
                }}
              >
                TIKTOK SHOP
              </h1>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#fases"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 relative z-50 px-8 py-4 rounded-full text-white text-base md:text-lg font-display font-black hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl"
            style={{ backgroundColor: "#F1204A", boxShadow: "0 8px 32px rgba(241, 32, 74, 0.4)" }}
          >
            <Rocket size={20} /> Começar a Trilha
          </motion.a>

          {/* Absolute Overlays (Cards & Badge) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            
            {/* Floating Glass Card 1 (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[20%] md:bottom-[10%] left-[0%] md:left-[10%] z-30 pointer-events-auto"
            >
              <div className="w-40 md:w-52 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[-12deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#2DCCD3] rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden">
                   <ShoppingBag size={40} className="text-[#033624]" />
                </div>
                <div className="text-center mt-2">
                  <p className="font-display font-black text-sm md:text-lg text-[#033624]">Fase 1</p>
                  <p className="text-[10px] md:text-xs font-bold text-[#F1204A] mt-1">Até R$ 2.400</p>
                  <p className="text-[9px] md:text-[10px] text-[#033624]/80 leading-tight mt-1">em cupons de plataforma</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card 2 (Top Right) */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[5%] md:top-auto md:bottom-[0%] right-[0%] md:right-[0%] z-30 pointer-events-auto"
            >
              <div className="w-40 md:w-52 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[12deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#FBEB35] rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden">
                  <Crown size={40} className="text-[#033624]" />
                </div>
                <div className="text-center mt-2">
                  <p className="font-display font-black text-sm md:text-lg text-[#033624]">Diamante</p>
                  <p className="text-[10px] md:text-xs font-bold text-[#F1204A] mt-1">Gerente Dedicado</p>
                  <p className="text-[9px] md:text-[10px] text-[#033624]/80 leading-tight mt-1">TikTok Shop</p>
                </div>
              </div>
            </motion.div>

            {/* Circular Badge */}
            <div className="absolute bottom-[-10%] md:bottom-[-15%] right-[5%] md:right-[15%] z-40 pointer-events-auto">
              <CircularBadge />
            </div>

          </div>
        </div>
      </main>

      {/* Bottom Features Section */}
      <section className="bg-white text-[#033624] rounded-t-[2.5rem] md:rounded-t-[3.5rem] px-6 py-12 md:px-10 md:py-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] mt-auto w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Missões */}
          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100 shadow-sm">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black font-display text-[#033624]">
              COMPLETE<br/>MISSÕES
            </h3>
            <p className="text-[11px] md:text-xs text-[#033624]/60 font-medium mb-auto font-body">
              3 Fases e 60 dias para crescer de nível.
            </p>
            
            {/* Pill Graphic */}
            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#2DCCD3] rounded-2xl p-2 pr-12 shadow-lg relative z-10">
                <div className="w-8 h-8 bg-white rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                  <Rocket size={16} className="text-[#033624]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black font-display text-[#033624] leading-none">Fase Inicial</p>
                  <p className="text-[8px] text-[#033624]/80 font-body mt-1">1 a 5 dias</p>
                </div>
              </div>
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#033624] text-white font-black text-[10px] px-3 py-2 rounded-xl z-20 shadow-md">
                + Pontos
              </div>
            </div>

            {/* Arrow pointing to next card */}
            <div className="hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30">
              <ArrowBlack1 />
            </div>
          </div>

          {/* Card 2: Recompensas */}
          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100 shadow-sm">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black font-display text-[#033624]">
              DESBLOQUEIE<br/>CUPONS
            </h3>
            <p className="text-[11px] md:text-xs text-[#033624]/60 font-medium mb-auto font-body">
              Até R$2.400 em cupons de plataforma.
            </p>
            
            {/* Pill Graphic */}
            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#F1204A] rounded-full p-1.5 shadow-lg">
                <div className="bg-white/20 text-white font-bold text-sm px-4 py-2 rounded-full mr-2">
                  R$ 2.400
                </div>
                <div className="font-bold text-xs px-4 text-white">
                  CUPOM
                </div>
              </div>
              
              {/* Small floating green pill */}
              <div className="absolute -bottom-6 right-1/4 bg-[#2DCCD3] rounded-full p-2 shadow-lg transform rotate-12 z-20">
                 <Gift size={16} className="text-[#033624]" />
              </div>
            </div>

            {/* Arrow pointing to next card */}
            <div className="hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30">
              <ArrowBlack2 />
            </div>
          </div>

          {/* Card 3: Diamante */}
          <div className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100 shadow-sm">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black font-display text-[#033624]">
              TORNE-SE<br/>DIAMANTE
            </h3>
            <p className="text-[11px] md:text-xs text-[#033624]/60 font-medium mb-auto font-body">
              Desbloqueie suporte VIP e gerente.
            </p>
            
            {/* Pill Graphic */}
            <div className="flex flex-col items-center bg-[#FBEB35] rounded-[2rem] px-6 py-4 text-[#033624] shadow-lg mt-6 relative w-full max-w-[200px]">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1 font-body">Status Alcançado</p>
              <p className="text-xl font-black font-display flex items-center gap-1"><Gem size={18} /> VIP</p>
              
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-8 w-5 h-5 bg-[#FBEB35] transform rotate-45"></div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
