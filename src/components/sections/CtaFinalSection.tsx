"use client";

import React, { useState } from "react";
import { ChevronDown, Smartphone, ArrowRight } from "lucide-react";
import { HighlightedText } from "@/components/ui/highlighted-text";

/* ── Doodles ─────────────────────────────────────────────────── */
const StarDoodle = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <path
      d="M40 6 L45 32 L72 28 L52 44 L62 70 L40 54 L18 70 L28 44 L8 28 L35 32 Z"
      stroke="#FBEB35"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="none"
      opacity="0.7"
    />
  </svg>
);

const FlowerDoodle = () => (
  <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
    <circle cx="30" cy="30" r="5" stroke="#2DCCD3" strokeWidth="2" fill="none" opacity="0.8" />
    {[0, 72, 144, 216, 288].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      // Rounding to fix hydration float precision mismatches (Node vs Browser)
      const cx = (30 + 12 * Math.cos(rad)).toFixed(3);
      const cy = (30 + 12 * Math.sin(rad)).toFixed(3);
      return (
        <ellipse
          key={angle}
          cx={cx}
          cy={cy}
          rx="4.5"
          ry="7"
          transform={`rotate(${angle}, ${cx}, ${cy})`}
          stroke="#2DCCD3"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      );
    })}
  </svg>
);

/* ── Dados grupos WhatsApp ───────────────────────────────────── */
const GRUPOS = [
  { regiao: "Birigui", link: "https://chat.whatsapp.com/Fi4iERd1llnDjeORN0xwK2" },
  { regiao: "Brás", link: "https://chat.whatsapp.com/LUOgiqEApUc8mXOeVbPxKO" },
  { regiao: "Franca", link: "https://chat.whatsapp.com/I7FD7s2GK7N5Ld5XOTKPEa" },
  { regiao: "Goiânia", link: "https://chat.whatsapp.com/H46KVUKVn0jLEmDM9uQDSv" },
  { regiao: "Mar de Espanha", link: "https://chat.whatsapp.com/CtfLuI455TZ0sWCekVHb2I" },
  { regiao: "Nova Friburgo", link: "https://chat.whatsapp.com/EBYYg34lh2q5mb5gzKKz6J" },
  { regiao: "Nova Serrana", link: "https://chat.whatsapp.com/GgWOs3eNI4n9SWdA41Oabg" },
  { regiao: "Santa Catarina", link: "https://chat.whatsapp.com/DKDpkAUKmZFLh9TuwHJpq4" },
];

/* ── Componente principal ─────────────────────────────────────── */
export function CtaFinalSection() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <section
      id="cta"
      className="relative py-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #BAF6F0 0%, #EDD4B2 100%)" }}
    >
      {/* Doodles absolutos */}
      {/* Estrela Glint — vinda da seção de Webinars */}
      <svg
        className="absolute top-5 right-4 pointer-events-none animate-float"
        style={{ opacity: 0.55 }}
        width="52" height="52" viewBox="0 0 52 52" fill="none"
      >
        <path
          d="M26 2 L30.2 18.8 L46 15 L35.4 26 L46 37 L30.2 33.2 L26 50 L21.8 33.2 L6 37 L16.6 26 L6 15 L21.8 18.8 Z"
          stroke="#2DCCD3" strokeWidth="1.8" strokeLinejoin="round"
        />
      </svg>
      <div className="absolute top-6 left-4 w-16 h-16 animate-float pointer-events-none">
        <StarDoodle />
      </div>
      <div className="absolute bottom-10 right-4 w-14 h-14 animate-float-reverse pointer-events-none">
        <FlowerDoodle />
      </div>
      <div className="absolute top-1/3 right-6 w-10 h-10 animate-float pointer-events-none" style={{ animationDelay: "2s" }}>
        <StarDoodle />
      </div>

      <div className="relative z-10 w-full max-w-[430px] mx-auto px-6 flex flex-col items-center text-center">

        {/* Título */}
        <h2
          className="font-display font-black leading-[0.92] tracking-tighter mb-4"
          style={{ fontSize: "clamp(2rem, 9vw, 2.8rem)", color: "#033624" }}
        >
          Pronto para jogar{" "}
          <br />e vender{" "}
          <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.2}>
            muito?
          </HighlightedText>
        </h2>

        {/* Subtítulo */}
        <p className="font-body text-sm mb-8" style={{ color: "#4A0505", opacity: 0.8 }}>
          Abra sua conta agora e entre na Trilha de Aceleração
        </p>

        {/* Botão primário */}
        <a
          href="https://seller-br.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-black text-white text-base px-8 py-4 w-full text-center mb-3 hover:scale-[1.04] transition-all duration-200 flex items-center justify-center gap-2"
          style={{
            backgroundColor: "#F1204A",
            borderRadius: "999px",
            boxShadow: "0 8px 24px rgba(241,32,74,0.35)",
            display: "flex",
          }}
        >
          Abrir Conta de Vendedor <ArrowRight size={18} />
        </a>

        {/* Botão secundário */}
        <a
          href="https://seller-br.tiktok.com/challenges/growth"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-black text-sm px-8 py-3.5 w-full text-center hover:bg-thrive/5 transition-colors duration-200 flex items-center justify-center gap-2"
          style={{
            border: "2px solid #033624",
            borderRadius: "999px",
            color: "#033624",
            display: "flex",
          }}
        >
          Ver missões no Seller Center
        </a>

        {/* Divisor */}
        <div className="w-full mt-10 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(3,54,36,0.2)" }} />
            <span className="font-body text-xs" style={{ color: "#033624", opacity: 0.5 }}>
              Grupos de WhatsApp
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(3,54,36,0.2)" }} />
          </div>
        </div>

        {/* Accordion grupos */}
        <div className="w-full">
          <button
            onClick={() => setAccordionOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl font-body text-sm font-medium transition-colors duration-200"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              color: "#033624",
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="flex items-center gap-2">
              <Smartphone size={18} style={{ opacity: 0.7 }} />
              <span>Entre no grupo da sua região</span>
            </div>
            <ChevronDown
              size={18}
              className="transition-transform duration-300"
              style={{
                transform: accordionOpen ? "rotate(180deg)" : "rotate(0deg)",
                color: "#033624",
              }}
            />
          </button>

          {accordionOpen && (
            <div className="mt-2 rounded-2xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.85)" }}>
              {GRUPOS.map((g, i) => (
                <a
                  key={i}
                  href={g.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3.5 font-body text-sm hover:bg-shimmer/30 transition-colors border-b"
                  style={{
                    color: "#033624",
                    borderColor: "rgba(3,54,36,0.08)",
                  }}
                >
                  <span>{g.regiao}</span>
                  <span className="text-xs flex items-center gap-1" style={{ color: "#F1204A" }}>
                    Entrar <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
