"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { HighlightedText } from "@/components/ui/highlighted-text";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/* ── WhatsApp SVG logo ───────────────────────────────────────── */
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

/* ── Doodles ─────────────────────────────────────────────────── */
const StarDoodle = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <path
      d="M40 6 L45 32 L72 28 L52 44 L62 70 L40 54 L18 70 L28 44 L8 28 L35 32 Z"
      stroke="#FBEB35" strokeWidth="2.5" strokeLinejoin="round" fill="none" opacity="0.7"
    />
  </svg>
);

const FlowerDoodle = () => (
  <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
    <circle cx="30" cy="30" r="5" stroke="#2DCCD3" strokeWidth="2" fill="none" opacity="0.8" />
    {[0, 72, 144, 216, 288].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const cx = (30 + 12 * Math.cos(rad)).toFixed(3);
      const cy = (30 + 12 * Math.sin(rad)).toFixed(3);
      return (
        <ellipse
          key={angle}
          cx={cx} cy={cy} rx="4.5" ry="7"
          transform={`rotate(${angle}, ${cx}, ${cy})`}
          stroke="#2DCCD3" strokeWidth="2" fill="none" opacity="0.6"
        />
      );
    })}
  </svg>
);

/* ── Dados grupos WhatsApp ───────────────────────────────────── */
const GRUPOS = [
  { regiao: "Birigui",         link: "https://chat.whatsapp.com/Fi4iERd1llnDjeORN0xwK2" },
  { regiao: "Brás",            link: "https://chat.whatsapp.com/LUOgiqEApUc8mXOeVbPxKO" },
  { regiao: "Franca",          link: "https://chat.whatsapp.com/I7FD7s2GK7N5Ld5XOTKPEa" },
  { regiao: "Goiânia",         link: "https://chat.whatsapp.com/H46KVUKVn0jLEmDM9uQDSv" },
  { regiao: "Mar de Espanha",  link: "https://chat.whatsapp.com/CtfLuI455TZ0sWCekVHb2I" },
  { regiao: "Nova Friburgo",   link: "https://chat.whatsapp.com/EBYYg34lh2q5mb5gzKKz6J" },
  { regiao: "Nova Serrana",    link: "https://chat.whatsapp.com/GgWOs3eNI4n9SWdA41Oabg" },
  { regiao: "Santa Catarina",  link: "https://chat.whatsapp.com/DKDpkAUKmZFLh9TuwHJpq4" },
];

/* ── Componente principal ─────────────────────────────────────── */
export function CtaFinalSection() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="cta"
      className="relative py-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #BAF6F0 0%, #EDD4B2 100%)" }}
    >
      {/* Doodles */}
      <svg className="absolute top-5 right-4 pointer-events-none animate-float" style={{ opacity: 0.55 }}
        width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M26 2 L30.2 18.8 L46 15 L35.4 26 L46 37 L30.2 33.2 L26 50 L21.8 33.2 L6 37 L16.6 26 L6 15 L21.8 18.8 Z"
          stroke="#2DCCD3" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
      <div className="absolute top-6 left-4 w-16 h-16 animate-float pointer-events-none"><StarDoodle /></div>
      <div className="absolute bottom-10 right-4 w-14 h-14 animate-float-reverse pointer-events-none"><FlowerDoodle /></div>
      <div className="absolute top-1/3 right-6 w-10 h-10 animate-float pointer-events-none" style={{ animationDelay: "2s" }}>
        <StarDoodle />
      </div>

      <div className="relative z-10 w-full max-w-[430px] lg:max-w-screen-xl mx-auto px-6 lg:px-16 lg:py-8">

        {/* Desktop: grid 2 colunas */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* ── Coluna esquerda: título + CTAs ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
            <h2
              className="font-display font-black leading-[0.92] tracking-tighter mb-4 lg:mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#033624" }}
            >
              Pronto para jogar{" "}<br className="hidden lg:block" />e vender{" "}
              <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.2}>muito?</HighlightedText>
            </h2>

            <p className="font-body text-sm lg:text-[1.1rem] font-medium mb-8 lg:mb-10 lg:max-w-md" style={{ color: "#4A0505", opacity: 0.85 }}>
              A Trilha de Aceleração do TikTok Shop é a oportunidade perfeita para transformar sua loja em uma máquina de vendas.
            </p>

            <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
              <a
                href="https://seller-br.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-black text-white text-base lg:text-lg px-8 py-4 w-full lg:w-auto text-center hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                style={{ backgroundColor: "#F1204A", borderRadius: "999px", boxShadow: "0 10px 30px rgba(241,32,74,0.4)" }}
              >
                <div className="absolute inset-0 bg-white/20 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <span className="relative z-10">Abrir Conta Vendedor</span> 
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://seller-br.tiktok.com/challenges/growth"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-black text-sm lg:text-base px-8 py-4 w-full lg:w-auto text-center hover:bg-white/40 transition-colors duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
                style={{ border: "2px solid #033624", borderRadius: "999px", color: "#033624" }}
              >
                Ver missões no painel
              </a>
            </div>
          </div>

          {/* ── Coluna direita: WhatsApp ── */}
          <div className="mt-12 lg:mt-0 relative group perspective-[1000px]">

            {/* Divisor — mobile only */}
            <div className="w-full mb-6 lg:hidden">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px" style={{ backgroundColor: "rgba(3,54,36,0.2)" }} />
                <span className="font-body text-xs font-semibold" style={{ color: "#033624", opacity: 0.5 }}>Comunidade</span>
                <div className="flex-1 h-px" style={{ backgroundColor: "rgba(3,54,36,0.2)" }} />
              </div>
            </div>

            {/* Fundo glow do Whatsapp no desktop */}
            <div className="hidden lg:block absolute -inset-4 bg-gradient-to-r from-[#25D366]/40 to-[#128C7E]/40 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

            {/* ── Bloco WhatsApp ── */}
            <motion.div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              className="w-full rounded-[2.5rem] relative z-10 lg:hover:z-50"
            >
              <div
                className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white transition-shadow duration-300"
                style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
              >

              {/* Header verde WhatsApp */}
              <div
                className="relative px-6 py-6 lg:py-8 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
              >
                {/* Círculos decorativos de fundo */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: "white" }} />
                <div className="absolute bottom-4 right-10 w-16 h-16 rounded-full opacity-[0.05]" style={{ backgroundColor: "white" }} />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: "white" }} />

                <div className="relative z-10 flex items-center gap-4 lg:gap-5">
                  {/* Ícone WhatsApp */}
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[1.25rem] flex items-center justify-center shrink-0 backdrop-blur-md shadow-inner"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)" }}>
                    <WhatsAppIcon size={32} className="text-white drop-shadow-md" />
                  </div>

                  {/* Texto */}
                  <div className="flex-1 text-left">
                    <p className="font-display font-black text-white text-[1.1rem] lg:text-[1.3rem] leading-tight drop-shadow-sm">
                      Comunidade Exclusiva
                    </p>
                    <p className="font-body text-white/80 text-xs lg:text-[0.8rem] font-medium mt-1">
                      Suporte diário · dicas · networking VIP
                    </p>
                  </div>

                  {/* Badge regiões */}
                  <div className="shrink-0 px-3 py-2 rounded-2xl text-center backdrop-blur-md shadow-sm"
                    style={{ backgroundColor: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)" }}>
                    <p className="font-display font-black text-white text-base lg:text-lg leading-none">8</p>
                    <p className="font-body text-white/80 text-[0.6rem] lg:text-xs font-bold uppercase tracking-widest mt-1">grupos</p>
                  </div>
                </div>

                {/* Pill subtítulo */}
                <div className="relative z-10 mt-5 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["#a8e6cf", "#7fdbba", "#56d1a6", "#2DC895"].map((c, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white/60 shadow-sm"
                        style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <p className="font-body text-white/90 text-xs lg:text-sm font-medium">
                    Vendedores de moda de todo o Brasil
                  </p>
                </div>
              </div>

              {/* ── Accordion trigger ── */}
              <button
                onClick={() => setAccordionOpen((v) => !v)}
                className="w-full flex items-center justify-between px-6 py-5 transition-all duration-300 hover:bg-gray-50"
                style={{ backgroundColor: accordionOpen ? "rgba(37,211,102,0.04)" : "rgba(255,255,255,1)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: accordionOpen ? "#25D366" : "rgba(37,211,102,0.15)", color: accordionOpen ? "white" : "#128C7E" }}>
                    <WhatsAppIcon size={16} />
                  </div>
                  <span className="font-display font-black text-sm lg:text-base" style={{ color: "#033624" }}>
                    Entrar no grupo da sua região
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  className="transition-transform duration-500"
                  style={{ transform: accordionOpen ? "rotate(180deg)" : "rotate(0deg)", color: "#128C7E" }}
                />
              </button>

              {/* ── Lista de grupos ── */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ backgroundColor: "#FCFDFD" }}
              >
                {GRUPOS.map((g, i) => (
                  <a
                    key={i}
                    href={g.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 lg:gap-4 px-6 py-4 transition-colors duration-200 border-t group/link"
                    style={{
                      borderColor: "rgba(37,211,102,0.08)",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    {/* Avatar inicial */}
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-display font-black text-[1.1rem] transition-transform duration-300 group-hover/link:scale-110"
                      style={{ backgroundColor: "rgba(37,211,102,0.12)", color: "#128C7E", border: "1px solid rgba(37,211,102,0.2)" }}>
                      {g.regiao.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-display font-black text-[0.95rem] transition-colors" style={{ color: "#033624" }}>
                        {g.regiao}
                      </p>
                      <p className="font-body text-[0.7rem] font-medium" style={{ color: "rgba(3,54,36,0.5)" }}>
                        Polo de Moda · TikTok Shop
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-[0.75rem] font-bold shadow-sm transition-all duration-300 group-hover/link:shadow-md group-hover/link:-translate-y-0.5"
                      style={{ backgroundColor: "#25D366", color: "white" }}>
                      <WhatsAppIcon size={12} />
                      Entrar
                    </div>
                  </a>
                ))}

                {/* Footer do accordion */}
                <div className="px-6 py-4.5 flex items-center gap-2 bg-gray-50" style={{ borderTop: "1px solid rgba(37,211,102,0.1)" }}>
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_#25D366]" style={{ backgroundColor: "#25D366" }} />
                  <p className="font-body text-[0.7rem] font-medium" style={{ color: "rgba(3,54,36,0.6)" }}>
                    Grupos oficiais do programa Trilha de Aceleração
                  </p>
                </div>
              </div>
              </div>
            </motion.div>
          </div>{/* fim bloco WhatsApp + coluna direita */}

        </div>{/* fim grid */}

      </div>
    </section>
  );
}
