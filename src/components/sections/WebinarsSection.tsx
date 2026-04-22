"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { FileText, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { HighlightedText } from "@/components/ui/highlighted-text";

/* ── Dados dos PDFs ───────────────────────────────────────────── */
type WebinarCard = {
  id: number;
  emoji: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  tagTextColor: string;
  accentColor: string;
  bgFrom: string;
  bgTo: string;
  pdfPath: string;
  imagePath: string;
};

const WEBINARS: WebinarCard[] = [
  {
    id: 1,
    emoji: "📅",
    title: "Agenda Webinars de Abril",
    subtitle: "Calendário completo de eventos do mês",
    tag: "Abril",
    tagColor: "#2DCCD3",
    tagTextColor: "#033624",
    accentColor: "#2DCCD3",
    bgFrom: "#e8fafa",
    bgTo: "#BAF6F0",
    pdfPath: "/assets/webinars/Agenda Webinars de Abril (1).pdf",
    imagePath: "/assets/webinars/agenda.png",
  },
  {
    id: 2,
    emoji: "🏔️",
    title: "Convite Monte Sião",
    subtitle: "Evento presencial — Monte Sião",
    tag: "Evento",
    tagColor: "#FBEB35",
    tagTextColor: "#033624",
    accentColor: "#FBEB35",
    bgFrom: "#fffde8",
    bgTo: "#FFF9B0",
    pdfPath: "/assets/webinars/Convite Monte Sião.pdf",
    imagePath: "/assets/webinars/vaga.png",
  },
  {
    id: 3,
    emoji: "🎯",
    title: "Evento Goiânia — SINVEST",
    subtitle: "14 de abril · Goiânia",
    tag: "Presencial",
    tagColor: "#EDBBE8",
    tagTextColor: "#4A0505",
    accentColor: "#EDBBE8",
    bgFrom: "#fdf0fc",
    bgTo: "#EDBBE8",
    pdfPath: "/assets/webinars/Evento Goiânia 14 de abril (SINVEST) (1).pdf",
    imagePath: "/assets/webinars/commerce.png",
  },
];

/* ── Card individual ──────────────────────────────────────────── */
function WebinarCard({ card, index, scrollXProgress, onCardClick }: { card: WebinarCard; index: number; scrollXProgress: any; onCardClick: (i: number) => void }) {
  // Cálculo de escala baseado na posição do scroll (0 a 1)
  let inputRange: number[];
  let outputScale: number[];
  let outputOpacity: number[];

  const maxScale = index === 2 ? 1.05 : 1.15; // Aumentado o contraste

  if (index === 0) {
    inputRange = [0, 0.4];
    outputScale = [maxScale, 0.85];
    outputOpacity = [1, 0.5];
  } else if (index === 1) {
    inputRange = [0.1, 0.5, 0.9];
    outputScale = [0.85, maxScale, 0.85];
    outputOpacity = [0.5, 1, 0.5];
  } else {
    inputRange = [0.6, 1];
    outputScale = [0.85, maxScale];
    outputOpacity = [0.5, 1];
  }

  // Usando spring para suavizar a transição se o scroll for bruto
  const baseScale = useTransform(scrollXProgress, inputRange, outputScale);
  const baseOpacity = useTransform(scrollXProgress, inputRange, outputOpacity);
  
  const scale = useSpring(baseScale, { stiffness: 100, damping: 20 });
  const opacity = useSpring(baseOpacity, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      style={{ scale, opacity }}
      className="flex-shrink-0"
      onClick={() => onCardClick(index)}
    >
      <a
        href={card.pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "240px",
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(3,54,36,0.10)",
        }}
        className="group relative flex flex-col rounded-3xl overflow-hidden origin-center cursor-pointer"
        onClick={(e) => {
          // Se clicou em um card que não é o PDF diretamente, podemos querer apenas focar nele no mobile.
          // Mas como o href/_blank abre o PDF, vamos deixar rolar ou usar stopPropagation se quisermos apenas focar antes.
          // Para este projeto, o foco visual deve mudar durante o scroll.
        }}
      >
      {/* Preview via Imagem */}
      <div
        className="relative overflow-hidden flex items-center justify-center p-0"
        style={{ height: "200px" }}
      >
        <img
          src={card.imagePath}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay com tag */}
        <span
          className="absolute top-3 left-3 font-body text-[10px] font-semibold px-2.5 py-1 rounded-full z-10"
          style={{
            backgroundColor: card.tagColor,
            color: card.tagTextColor,
            transform: "rotate(-3deg)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          {card.tag}
        </span>
        {/* Ícone download no hover */}
        <div
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-10"
          style={{ backgroundColor: "#033624" }}
        >
          <Download size={13} style={{ color: "#BAF6F0" }} />
        </div>
      </div>

      {/* Texto */}
      <div className="p-4 flex flex-col gap-1" style={{ borderTop: `3px solid ${card.accentColor}` }}>
        <p
          className="font-display font-black text-sm leading-tight"
          style={{ color: "#033624" }}
        >
          {card.title}
        </p>
        <p
          className="font-body text-xs leading-snug"
          style={{ color: "#4A0505", opacity: 0.6 }}
        >
          {card.subtitle}
        </p>
        <div className="flex items-center gap-1 mt-2">
          <FileText size={11} style={{ color: card.accentColor === "#FBEB35" ? "#8a7a00" : card.accentColor }} />
          <span
            className="font-body text-[10px] font-medium"
            style={{ color: card.accentColor === "#FBEB35" ? "#8a7a00" : card.accentColor }}
          >
            Abrir PDF
          </span>
        </div>
      </div>
    </a>
  </motion.div>
);
}

/* ── Ponto de paginação individual ────────────────────────────── */
function PaginationDot({ index, total, scrollXProgress }: { index: number; total: number; scrollXProgress: any }) {
  const step = 1 / (total - 1);
  const center = index * step;

  let inputRange: number[];
  let outputWidth: number[];
  let outputOpacity: number[];
  let outputColor: string[];

  if (index === 0) {
    inputRange = [0, 0.15];
    outputWidth = [20, 7];
    outputOpacity = [1, 0.25];
    outputColor = ["#F1204A", "#033624"];
  } else if (index === total - 1) {
    inputRange = [1 - 0.15, 1];
    outputWidth = [7, 20];
    outputOpacity = [0.25, 1];
    outputColor = ["#033624", "#F1204A"];
  } else {
    inputRange = [center - 0.15, center, center + 0.15];
    outputWidth = [7, 20, 7];
    outputOpacity = [0.25, 1, 0.25];
    outputColor = ["#033624", "#F1204A", "#033624"];
  }

  const dotWidth = useTransform(scrollXProgress, inputRange, outputWidth);
  const dotOpacity = useTransform(scrollXProgress, inputRange, outputOpacity);
  const dotColor = useTransform(scrollXProgress, inputRange, outputColor);

  return (
    <motion.div
      className="rounded-full"
      style={{
        width: dotWidth,
        height: "7px",
        backgroundColor: dotColor,
        opacity: dotOpacity,
      }}
    />
  );
}

/* ── Seção principal ──────────────────────────────────────────── */
export function WebinarsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 250 : -250, behavior: "smooth" });
  }

  function handleCardClick(index: number) {
    if (!scrollRef.current) return;
    const cardWidth = 248; // 240 + 8 gap
    // Cálculo de offset para centralizar o card (considerando o espaçador inicial de 95px)
    const offset = (index * cardWidth + 95) - (430 / 2) + (120);
    scrollRef.current.scrollTo({ left: offset, behavior: "smooth" });
  }

  return (
    <section id="webinars" className="relative overflow-hidden py-20 lg:py-32" style={{ backgroundColor: "#EDD4B2" }}>

      {/* ── Doodles ── */}
      {/* Wave Superior Esquerdo (Fixa, Encaixada e Wavy, Preenchida) */}
      <svg
        className="absolute top-0 left-0 w-32 h-32 lg:w-64 lg:h-64 pointer-events-none opacity-30"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#FBEB35" d="M 0,0 L 0,180 C 40,230 80,120 120,110 S 180,40 200,0 L 0,0 Z" />
        <path fill="#2DCCD3" d="M 0,0 L 0,135 C 30,175 60,90 90,82 S 135,30 150,0 L 0,0 Z" />
        <path fill="#F1204A" d="M 0,0 L 0,90 C 20,120 40,60 60,55 S 90,20 100,0 L 0,0 Z" />
      </svg>

      {/* Wave Inferior Direito (Fixa, Encaixada e Wavy, Preenchida) */}
      <svg
        className="absolute bottom-0 right-0 w-32 h-32 lg:w-64 lg:h-64 pointer-events-none opacity-30 rotate-180"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#F1204A" d="M 0,0 L 0,180 C 40,230 80,120 120,110 S 180,40 200,0 L 0,0 Z" />
        <path fill="#2DCCD3" d="M 0,0 L 0,135 C 30,175 60,90 90,82 S 135,30 150,0 L 0,0 Z" />
        <path fill="#EDBBE8" d="M 0,0 L 0,90 C 20,120 40,60 60,55 S 90,20 100,0 L 0,0 Z" />
      </svg>

      {/* Florzinha Glow — esquerda central */}
      <svg
        className="absolute left-3 top-1/2 pointer-events-none animate-float-reverse hidden lg:block"
        style={{ opacity: 0.45, animationDelay: "1.2s" }}
        width="38" height="38" viewBox="0 0 38 38" fill="none"
      >
        <circle cx="19" cy="8" r="5.5" stroke="#FBEB35" strokeWidth="1.8" />
        <circle cx="8" cy="26" r="5.5" stroke="#FBEB35" strokeWidth="1.8" />
        <circle cx="30" cy="26" r="5.5" stroke="#FBEB35" strokeWidth="1.8" />
        <circle cx="19" cy="19" r="4" fill="#FBEB35" opacity="0.3" />
      </svg>

      {/* Seta Dawn — embaixo */}
      <svg
        className="absolute bottom-8 right-6 pointer-events-none animate-float hidden lg:block"
        style={{ opacity: 0.4, animationDelay: "0.6s" }}
        width="34" height="34" viewBox="0 0 34 34" fill="none"
      >
        <path
          d="M6 28 Q18 6 28 6 M22 4 L28 6 L26 12"
          stroke="#EDBBE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>

      <div className="relative z-10 w-full max-w-[430px] lg:max-w-screen-xl mx-auto lg:px-16 flex flex-col gap-12 lg:gap-20">

        {/* ── Cabeçalho ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="px-5 lg:px-0 lg:text-left"
        >
          {/* Pílula */}
          <span
            className="font-body text-xs font-semibold px-4 py-1.5 mb-4 inline-block"
            style={{
              backgroundColor: "#F1204A",
              color: "#ffffff",
              borderRadius: "999px",
              transform: "rotate(-2deg)",
            }}
          >
            📅 Calendário de eventos
          </span>

          <h2
            className="font-display font-black leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)", color: "#033624" }}
          >
            Fique ligado nos nossos{" "}
            <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.2}>
              Webinars
            </HighlightedText>{" "}
            e Eventos!
          </h2>

          <p
            className="font-body text-sm mt-3 leading-relaxed"
            style={{ color: "#4A0505", opacity: 0.7 }}
          >
            Conteúdo exclusivo com especialistas do TikTok Shop — salve as datas e não perca nenhuma edição.
          </p>
        </motion.div>

        {/* ── Grid desktop (3 colunas) ── */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 px-0">
          {WEBINARS.map((card, i) => (
            <motion.a
              key={card.id}
              href={card.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group flex flex-col rounded-[2rem] overflow-hidden cursor-pointer bg-white transition-all duration-300"
              style={{ boxShadow: "0 10px 40px rgba(3,54,36,0.06)" }}
            >
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <img
                  src={card.imagePath}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay gradiente no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span
                  className="absolute top-4 left-4 font-body text-[0.7rem] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-widest"
                  style={{ backgroundColor: card.tagColor, color: card.tagTextColor, transform: "rotate(-3deg)", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
                >
                  {card.tag}
                </span>
                
                {/* Ícone download centralizado grande no hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-300" style={{ backgroundColor: "#F1204A" }}>
                    <Download size={24} style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 bg-white relative z-20" style={{ borderTop: `4px solid ${card.accentColor}` }}>
                <p className="font-display font-black text-[1.35rem] leading-tight" style={{ color: "#033624" }}>{card.title}</p>
                <p className="font-body text-[0.9rem] leading-relaxed" style={{ color: "#4A0505", opacity: 0.7 }}>{card.subtitle}</p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                  <FileText size={14} style={{ color: card.accentColor === "#FBEB35" ? "#8a7a00" : card.accentColor }} />
                  <span className="font-body text-xs font-bold tracking-wide uppercase" style={{ color: card.accentColor === "#FBEB35" ? "#8a7a00" : card.accentColor }}>
                    Abrir PDF
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── Cards scroll horizontal — mobile only ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative px-0 lg:hidden"
        >
          {/* Botões nav — visíveis em telas maiores */}
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "#033624", boxShadow: "0 2px 8px rgba(3,54,36,0.25)" }}
          >
            <ChevronLeft size={14} style={{ color: "#BAF6F0" }} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "#033624", boxShadow: "0 2px 8px rgba(3,54,36,0.25)" }}
          >
            <ChevronRight size={14} style={{ color: "#BAF6F0" }} />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-10 no-scrollbar"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingTop: "20px",
            }}
          >
            {/* Espaçador inicial para permitir centralizar o primeiro card */}
            <div className="w-[95px] flex-shrink-0" />

            {WEBINARS.map((card, i) => (
              <div key={card.id} style={{ scrollSnapAlign: "center" }} className="flex-shrink-0">
                <WebinarCard 
                  card={card} 
                  index={i} 
                  scrollXProgress={scrollXProgress}
                  onCardClick={handleCardClick}
                 />
              </div>
            ))}

            {/* Espaçador final para permitir centralizar o último card */}
            <div className="w-[95px] flex-shrink-0" />
          </div>
        </motion.div>

        {/* ── Dots de paginação dinâmicos — mobile only ── */}
        <div className="flex lg:hidden justify-center gap-3 -mt-4">
          {WEBINARS.map((card, i) => (
            <PaginationDot 
              key={card.id} 
              index={i} 
              total={WEBINARS.length} 
              scrollXProgress={scrollXProgress} 
            />
          ))}
        </div>

      </div>

      {/* Wave de transição → CtaFinalSection */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[72px] block"
        >
          <path
            d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z"
            fill="#BAF6F0"
          />
        </svg>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
