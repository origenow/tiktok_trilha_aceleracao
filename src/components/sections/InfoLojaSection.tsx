"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ChevronRight, Info, Tag, Truck } from "lucide-react";
import { HighlightedText } from "@/components/ui/highlighted-text";

/* ── Componente principal ─────────────────────────────────────── */
export function InfoLojaSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#BAF6F0" }}
    >
      {/* Doodle estrela — topo direito */}
      <svg
        className="absolute top-6 right-4 pointer-events-none animate-float"
        style={{ opacity: 0.4 }}
        width="44" height="44" viewBox="0 0 44 44" fill="none"
      >
        <path
          d="M22 2 L25.6 15.4 L38 12 L29.2 22 L38 32 L25.6 28.6 L22 42 L18.4 28.6 L6 32 L14.8 22 L6 12 L18.4 15.4 Z"
          stroke="#033624" strokeWidth="1.6" strokeLinejoin="round"
        />
      </svg>

      {/* Doodle flor — esquerda */}
      <svg
        className="absolute bottom-16 left-3 pointer-events-none animate-float-reverse"
        style={{ opacity: 0.3, animationDelay: "1s" }}
        width="36" height="36" viewBox="0 0 36 36" fill="none"
      >
        <circle cx="18" cy="18" r="4" stroke="#F1204A" strokeWidth="1.8" fill="none" />
        {[0, 72, 144, 216, 288].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = (18 + 9 * Math.cos(rad)).toFixed(2);
          const cy = (18 + 9 * Math.sin(rad)).toFixed(2);
          return (
            <ellipse
              key={angle}
              cx={cx} cy={cy} rx="3.5" ry="5.5"
              transform={`rotate(${angle}, ${cx}, ${cy})`}
              stroke="#F1204A" strokeWidth="1.6" fill="none" opacity="0.7"
            />
          );
        })}
      </svg>

      <div className="relative z-10 w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-10">

        {/* ─── Bloco 1: Seller Academy ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          {/* Label */}
          <span
            className="font-body text-xs font-semibold px-4 py-1.5 inline-block self-start"
            style={{
              backgroundColor: "#033624",
              color: "#BAF6F0",
              borderRadius: "999px",
              transform: "rotate(-2deg)",
            }}
          >
            🎓 Conteúdo oficial
          </span>

          <h2
            className="font-display font-black leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 7vw, 2.3rem)", color: "#033624" }}
          >
            Seller{" "}
            <HighlightedText highlightColor="#FBEB35" from="bottom" inView delay={0.15}>
              Academy
            </HighlightedText>
          </h2>

          <p
            className="font-body text-sm leading-relaxed -mt-1"
            style={{ color: "#4A0505", opacity: 0.75 }}
          >
            Saiba tudo sobre TikTok Shop — do cadastro à escala — com os treinamentos oficiais da plataforma.
          </p>

          {/* Card CTA Seller Academy */}
          <a
            href="https://seller-br.tiktok.com/university/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #033624 0%, #055a3a 100%)",
              boxShadow: "0 6px 24px rgba(3,54,36,0.22)",
            }}
          >
            <div
              className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: "rgba(186,246,240,0.12)" }}
            >
              🎓
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-black text-sm" style={{ color: "#BAF6F0" }}>
                Acessar Seller Academy
              </p>
              <p
                className="font-body text-xs mt-0.5 leading-snug"
                style={{ color: "rgba(186,246,240,0.55)" }}
              >
                Treinamentos oficiais TikTok Shop
              </p>
            </div>
            <ExternalLink
              size={15}
              className="shrink-0 opacity-35 group-hover:opacity-80 transition-opacity"
              style={{ color: "#BAF6F0" }}
            />
          </a>
        </motion.div>

        {/* ─── Bloco 2: Abrindo sua loja ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {/* Label */}
          <span
            className="font-body text-xs font-semibold px-4 py-1.5 inline-block self-start"
            style={{
              backgroundColor: "#F1204A",
              color: "#ffffff",
              borderRadius: "999px",
              transform: "rotate(2deg)",
            }}
          >
            🏪 Primeiros passos
          </span>

          <h2
            className="font-display font-black leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 7vw, 2.3rem)", color: "#033624" }}
          >
            Abrindo sua{" "}
            <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.15}>
              loja
            </HighlightedText>
          </h2>

          {/* Card: Políticas da Plataforma */}
          <a
            href="https://seller-br.tiktok.com/university/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 rounded-2xl px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 12px rgba(3,54,36,0.08)",
              borderLeft: "4px solid #2DCCD3",
            }}
          >
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#2DCCD3" }}
            >
              <Info size={16} style={{ color: "#033624" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                Políticas da Plataforma
              </p>
              <p className="font-body text-xs mt-0.5" style={{ color: "#4A0505", opacity: 0.55 }}>
                Regras e termos para vender no TikTok Shop
              </p>
            </div>
            <ExternalLink
              size={13}
              className="shrink-0 opacity-25 group-hover:opacity-70 transition-opacity"
              style={{ color: "#2DCCD3" }}
            />
          </a>

          {/* Cards de taxas — 2 colunas */}
          <div className="grid grid-cols-2 gap-3">
            {/* Comissão */}
            <div
              className="rounded-2xl p-4 flex flex-col gap-2"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 12px rgba(3,54,36,0.08)",
                borderTop: "3px solid #F1204A",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#fff0f2" }}
              >
                <Tag size={15} style={{ color: "#F1204A" }} />
              </div>
              <p className="font-body text-[10px] font-medium" style={{ color: "#4A0505", opacity: 0.6 }}>
                Comissão TikTok
              </p>
              <p className="font-display font-black text-lg leading-none" style={{ color: "#033624" }}>
                6%
              </p>
              <p className="font-body text-[10px]" style={{ color: "#4A0505", opacity: 0.7 }}>
                + R$ 4,00 por item vendido
              </p>
            </div>

            {/* Frete */}
            <div
              className="rounded-2xl p-4 flex flex-col gap-2"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 12px rgba(3,54,36,0.08)",
                borderTop: "3px solid #2DCCD3",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#e8fafa" }}
              >
                <Truck size={15} style={{ color: "#2DCCD3" }} />
              </div>
              <p className="font-body text-[10px] font-medium" style={{ color: "#4A0505", opacity: 0.6 }}>
                Taxa de Frete TikTok
              </p>
              <p className="font-display font-black text-lg leading-none" style={{ color: "#033624" }}>
                6%
              </p>
              <p className="font-body text-[10px]" style={{ color: "#4A0505", opacity: 0.7 }}>
                sobre o valor do pedido
              </p>
            </div>
          </div>

          {/* Nota de isenção */}
          <div
            className="rounded-2xl p-4 flex flex-col gap-3"
            style={{
              backgroundColor: "#fffde8",
              border: "1.5px dashed #FBEB35",
              boxShadow: "0 2px 12px rgba(3,54,36,0.06)",
            }}
          >
            <div className="flex items-start gap-2.5">
              <span style={{ fontSize: "1.25rem", lineHeight: 1, marginTop: "1px" }}>💡</span>
              <div className="flex flex-col gap-1">
                <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                  Isenção de comissão por 60 dias
                </p>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#4A0505", opacity: 0.75 }}>
                  Habilite a missão no Seller Center para participar e aproveite 0% de comissão nas primeiras semanas.
                </p>
              </div>
            </div>

            {/* Caminho de navegação */}
            <div
              className="flex items-center gap-1 flex-wrap rounded-xl px-3 py-2"
              style={{ backgroundColor: "rgba(3,54,36,0.06)" }}
            >
              <span className="font-body text-[10px] font-medium" style={{ color: "#033624" }}>
                Menu lateral
              </span>
              <ChevronRight size={10} style={{ color: "#033624", opacity: 0.5 }} />
              <span className="font-body text-[10px] font-medium" style={{ color: "#033624" }}>
                Crescimento
              </span>
              <ChevronRight size={10} style={{ color: "#033624", opacity: 0.5 }} />
              <span
                className="font-body text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "#F1204A", color: "#ffffff" }}
              >
                Missões
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
