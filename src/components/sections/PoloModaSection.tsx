"use client";

import React from "react";
import { motion } from "motion/react";
import { Trophy, PhoneCall, Zap, Tag, Star, ArrowRight } from "lucide-react";

/* ── WhatsApp icon ───────────────────────────────────────────── */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Dados ───────────────────────────────────────────────────── */
const BENEFICIOS = [
  {
    icon: Trophy,
    title: "Até R$ 2.400 em cupons",
    desc: "de plataforma nas primeiras fases",
    bg: "#2DCCD3",
    color: "#033624",
    span: 1,
  },
  {
    icon: PhoneCall,
    title: "Sessões de suporte",
    desc: "com especialistas TikTok Shop",
    bg: "#ffffff",
    color: "#033624",
    span: 1,
  },
  {
    icon: Zap,
    title: "Incentivo de tráfego",
    desc: "para seus produtos em destaque",
    bg: "#FBEB35",
    color: "#033624",
    span: 1,
  },
  {
    icon: Tag,
    title: "Cupons até 30% off",
    desc: "para atrair mais compradores",
    bg: "#ffffff",
    color: "#033624",
    span: 1,
  },
  {
    icon: Star,
    title: "Matching com Top Criadores + Ads Credits",
    desc: "Conecte-se com os maiores criadores de conteúdo do TikTok",
    bg: "#F1204A",
    color: "#ffffff",
    span: 2,
    badge: "Fase 4",
  },
];

const REGIOES = [
  { nome: "Birigui",        whatsapp: "https://chat.whatsapp.com/Fi4iERd1llnDjeORN0xwK2" },
  { nome: "Brás",           whatsapp: "https://chat.whatsapp.com/LUOgiqEApUc8mXOeVbPxKO" },
  { nome: "Franca",         whatsapp: "https://chat.whatsapp.com/I7FD7s2GK7N5Ld5XOTKPEa" },
  { nome: "Goiânia",        whatsapp: "https://chat.whatsapp.com/H46KVUKVn0jLEmDM9uQDSv" },
  { nome: "Mar de Espanha", whatsapp: "https://chat.whatsapp.com/CtfLuI455TZ0sWCekVHb2I" },
  { nome: "Nova Friburgo",  whatsapp: "https://chat.whatsapp.com/EBYYg34lh2q5mb5gzKKz6J" },
  { nome: "Nova Serrana",   whatsapp: "https://chat.whatsapp.com/GgWOs3eNI4n9SWdA41Oabg" },
  { nome: "Santa Catarina", whatsapp: "https://chat.whatsapp.com/DKDpkAUKmZFLh9TuwHJpq4" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
});

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
      opacity,
      zIndex: 0
    }}
  >
    <img 
      src={src} 
      alt="" 
      className="w-full h-full object-contain brightness-125 saturate-150" 
      style={{ transform: `rotate(${rotate}deg)` }} 
    />
  </div>
);

/* ── Componente principal ─────────────────────────────────────── */
export function PoloModaSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#033624" }}>

      {/* Doodles decorativos - Aumentados e com mais opacidade para visibilidade no fundo escuro */}
      <FloatingDoodle src="/assets_new/7.svg" size={140} top="2%" right="-5%" rotate={-10} opacity={0.4} />
      <FloatingDoodle src="/assets_new/8.svg" size={120} bottom="5%" left="-5%" rotate={15} opacity={0.4} reverse />
      <FloatingDoodle src="/assets_new/10.svg" size={180} top="35%" left="-10%" rotate={0} opacity={0.25} />
      <FloatingDoodle src="/assets_new/1.svg" size={100} top="20%" right="-5%" rotate={45} opacity={0.3} />
      <FloatingDoodle src="/assets_new/2.svg" size={110} bottom="25%" right="-3%" rotate={-20} opacity={0.35} reverse />
      <FloatingDoodle src="/assets_new/4.svg" size={80} top="10%" left="2%" rotate={30} opacity={0.45} />
      <FloatingDoodle src="/assets_new/5.svg" size={95} bottom="2%" right="12%" rotate={-10} opacity={0.3} />

      <div className="relative z-10 w-full max-w-[430px] mx-auto px-6 py-16 flex flex-col gap-12">

        {/* ① Hero da seção */}
        <motion.div {...fadeUp(0)}>
          <span
            className="pill-tag text-white text-xs inline-block mb-5"
            style={{ backgroundColor: "#F1204A", transform: "rotate(-2deg)" }}
          >
            Exclusivo para Polos de Moda
          </span>

          <h2
            className="font-display font-black leading-[0.92] tracking-tighter"
            style={{ fontSize: "clamp(1.9rem, 8vw, 2.6rem)", color: "#ffffff" }}
          >
            Venda moda{" "}
            <span style={{ color: "#2DCCD3" }}>no TikTok Shop</span>
            <br />e desbloqueie benefícios exclusivos
          </h2>

          <p className="font-body mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Se sua loja está cadastrada com o CEP de um Polo de moda,
            você já faz parte automaticamente.
          </p>

          <a
            href="https://seller-br.tiktok.com/account/register?channel=BrunaSeller"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-display font-black text-white text-sm px-6 py-3 hover:scale-105 transition-transform"
            style={{ backgroundColor: "#F1204A", borderRadius: "999px" }}
          >
            Abrir conta agora <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* ② Grid de benefícios */}
        <motion.div {...fadeUp(0.1)} id="beneficios">
          <p className="font-body text-xs mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            O que você ganha entrando na Trilha
          </p>
          <div className="grid grid-cols-2 gap-3">
            {BENEFICIOS.map((b, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-5"
                style={{
                  backgroundColor: b.bg,
                  gridColumn: b.span === 2 ? "span 2" : undefined,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                }}
              >
                {b.badge && (
                  <span
                    className="absolute top-3 right-3 font-display font-black text-white text-xs px-2.5 py-1"
                    style={{ backgroundColor: "#4A0505", borderRadius: "999px" }}
                  >
                    {b.badge}
                  </span>
                )}
                <b.icon
                  size={b.span === 2 ? 28 : 24}
                  style={{ color: b.color, opacity: 0.85, marginBottom: "10px" }}
                />
                <p
                  className="font-display font-black text-sm leading-tight"
                  style={{ color: b.color }}
                >
                  {b.title}
                </p>
                <p
                  className="font-body text-xs mt-1 leading-snug"
                  style={{ color: b.color, opacity: 0.65 }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ③ Polos Participantes */}
        <motion.div {...fadeUp(0.2)} id="polos">
          <div className="rounded-3xl p-6" style={{ backgroundColor: "#BAF6F0" }}>
            <h3 className="font-display font-black text-xl mb-1" style={{ color: "#033624" }}>
              Polos Participantes
            </h3>
            <p className="font-body text-xs mb-5" style={{ color: "#4A0505", opacity: 0.6 }}>
              Clique na sua região para entrar na comunidade de suporte
            </p>

            <div className="grid grid-cols-2 gap-2">
              {REGIOES.map((r) => (
                <a
                  key={r.nome}
                  href={r.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl font-body text-sm font-medium transition-colors duration-200"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#033624",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#F1204A";
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
                    (e.currentTarget as HTMLElement).style.color = "#033624";
                  }}
                >
                  <span>{r.nome}</span>
                  <WhatsAppIcon className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ④ Banner abertura de conta */}
        <motion.div {...fadeUp(0.3)}>
          <div className="rounded-3xl p-6" style={{ backgroundColor: "#EDD4B2" }}>
            <h3 className="font-display font-black text-lg mb-1" style={{ color: "#033624" }}>
              Abrir conta no TikTok Shop
            </h3>
            <p className="font-body text-xs mb-5" style={{ color: "#4A0505", opacity: 0.6 }}>
              Escolha o link da sua região para criar sua conta
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://seller-br.tiktok.com/account/register?channel=BrunaSeller"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                    Brás · Franca · Birigui · Goiânia
                  </p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "#4A0505", opacity: 0.55 }}>
                    Acesso pelo link Bruna Seller
                  </p>
                </div>
                <span
                  className="font-display font-black text-white text-xs px-3 py-1.5 shrink-0 ml-3"
                  style={{ backgroundColor: "#F1204A", borderRadius: "999px" }}
                >
                  Abrir →
                </span>
              </a>

              <a
                href="https://seller-br.tiktok.com/account/register?channel=AnaCastro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                    Brás · Nova Friburgo · Nova Serrana · Mar de Espanha
                  </p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "#4A0505", opacity: 0.55 }}>
                    Acesso pelo link Ana Castro
                  </p>
                </div>
                <span
                  className="font-display font-black text-white text-xs px-3 py-1.5 shrink-0 ml-3"
                  style={{ backgroundColor: "#F1204A", borderRadius: "999px" }}
                >
                  Abrir →
                </span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
