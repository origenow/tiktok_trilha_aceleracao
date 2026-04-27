"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { FileText, Download, ChevronLeft, ChevronRight, Video, Users } from "lucide-react";
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


/* ── Seção principal ──────────────────────────────────────────── */
export function WebinarsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        {/* ── Grid desktop (Duas Colunas: Webinars e Eventos) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12 px-0 relative items-start">
          
          {/* Divisor Lateral (Vertical) */}
          <div className="absolute left-[34%] top-10 bottom-0 w-px bg-[#033624]/10 hidden lg:block" />

          {/* HEADERS (Row 1) */}
          <div className="lg:col-span-4 flex flex-col gap-3 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: "#2DCCD3" }}>
                  <Video size={20} className="text-[#033624]" />
                </div>
                <h3 className="font-display font-black text-2xl" style={{ color: "#033624" }}>Webinars</h3>
              </div>
              <p className="font-body text-[0.95rem] leading-relaxed" style={{ color: "#4A0505", opacity: 0.65 }}>
                Sessões semanais com especialistas para você dominar as ferramentas do TikTok Shop e impulsionar suas vendas.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-3 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: "#FBEB35" }}>
                  <Users size={20} className="text-[#033624]" />
                </div>
                <h3 className="font-display font-black text-2xl" style={{ color: "#033624" }}>Eventos Presenciais</h3>
              </div>
              <p className="font-body text-[0.95rem] leading-relaxed max-w-xl" style={{ color: "#4A0505", opacity: 0.65 }}>
                Participe dos nossos encontros ao vivo em diversos polos de moda pelo Brasil para fazer networking e aprender na prática com nosso time.
              </p>
            </motion.div>
          </div>

          {/* CARDS (Row 2) */}
          <div className="lg:col-span-4 flex flex-col">
            {WEBINARS.filter(card => card.id === 1).map((card, i) => (
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
              >
                <div className="flex flex-col group">
                  <div className="flex justify-start px-6 mb-4 relative z-30">
                    <span className="font-body text-[0.7rem] font-black px-4 py-1.5 rounded-full uppercase tracking-widest"
                      style={{ backgroundColor: card.tagColor, color: card.tagTextColor, transform: "rotate(-2deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.12)", border: "2px solid white" }}>
                      {card.tag}
                    </span>
                  </div>
                  <div className="flex flex-col rounded-[2.5rem] overflow-hidden bg-white transition-all duration-300 relative z-20"
                    style={{ boxShadow: "0 10px 40px rgba(3,54,36,0.06)" }}>
                    <div className="relative overflow-hidden" style={{ height: "260px" }}>
                      <img src={card.imagePath} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
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
                        <span className="font-body text-xs font-bold tracking-wide uppercase" style={{ color: card.accentColor === "#FBEB35" ? "#8a7a00" : card.accentColor }}>Abrir PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8">
            {WEBINARS.filter(card => card.id !== 1).map((card, i) => (
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
              >
                <div className="flex flex-col group">
                  <div className="flex justify-start px-6 mb-4 relative z-30">
                    <span className="font-body text-[0.7rem] font-black px-4 py-1.5 rounded-full uppercase tracking-widest"
                      style={{ backgroundColor: card.tagColor, color: card.tagTextColor, transform: "rotate(-2deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.12)", border: "2px solid white" }}>
                      {card.tag}
                    </span>
                  </div>
                  <div className="flex flex-col rounded-[2.5rem] overflow-hidden bg-white transition-all duration-300 relative z-20"
                    style={{ boxShadow: "0 10px 40px rgba(3,54,36,0.06)" }}>
                    <div className="relative overflow-hidden" style={{ height: "260px" }}>
                      <img src={card.imagePath} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
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
                        <span className="font-body text-xs font-bold tracking-wide uppercase" style={{ color: card.accentColor === "#FBEB35" ? "#8a7a00" : card.accentColor }}>Abrir PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Mobile Layout ── */}
        <div className="lg:hidden flex flex-col gap-12">
          {/* Seção Mobile Webinars */}
          <div className="px-5">
            <h3 className="font-display font-black text-xl mb-2" style={{ color: "#033624" }}>Webinars</h3>
            <p className="font-body text-xs opacity-60 mb-6" style={{ color: "#4A0505" }}>Aulas semanais com especialistas</p>
            <div className="flex flex-col gap-4">
              {WEBINARS.filter(card => card.id === 1).map((card) => (
                <a key={card.id} href={card.pdfPath} target="_blank" rel="noopener noreferrer" 
                  className="bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm border border-gray-100">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                    <img src={card.imagePath} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-bold text-sm leading-tight" style={{ color: "#033624" }}>{card.title}</p>
                    <p className="font-body text-[0.65rem] opacity-60 mt-1">{card.subtitle}</p>
                  </div>
                  <Download size={18} className="text-[#F1204A]" />
                </a>
              ))}
            </div>
          </div>

          {/* Seção Mobile Eventos */}
          <div>
            <div className="px-5">
              <h3 className="font-display font-black text-xl mb-2" style={{ color: "#033624" }}>Eventos</h3>
              <p className="font-body text-xs opacity-60 mb-6" style={{ color: "#4A0505" }}>Networking e prática presencial</p>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-6 px-5 no-scrollbar">
              {WEBINARS.filter(card => card.id !== 1).map((card) => (
                <a key={card.id} href={card.pdfPath} target="_blank" rel="noopener noreferrer" 
                  className="bg-white rounded-3xl p-4 flex flex-col gap-3 shadow-sm border border-gray-100 min-w-[280px]">
                  <div className="w-full h-32 rounded-2xl overflow-hidden">
                    <img src={card.imagePath} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm leading-tight" style={{ color: "#033624" }}>{card.title}</p>
                    <p className="font-body text-[0.65rem] opacity-60 mt-1">{card.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#F1204A]">
                    <Download size={14} />
                    <span className="font-body text-[0.65rem] font-bold uppercase tracking-wider">Ver Agenda</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
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
