"use client";

import React, { useState } from "react";
import { ZoomableImage } from "@/components/ui/zoomable-image";
import { motion, AnimatePresence } from "motion/react";
import { HighlightedText } from "@/components/ui/highlighted-text";
import {
  ExternalLink, ChevronDown, ChevronRight,
  Zap, Target, TrendingUp, Video, Radio, ShoppingBag,
  AlertCircle, CheckCircle2, DollarSign, Users, BarChart2,
  Settings, BookOpen, Building2, Palette, HelpCircle,
  Play, Link2, Megaphone, Cpu, Store, RefreshCw,
  RotateCw, Gauge, Layers, ArrowUpRight, Flame,
  BadgeCheck, ListChecks, Clock, Wallet,
} from "lucide-react";

/* ── Design system colors ────────────────────────────────────── */
const DS = {
  shimmer: "#BAF6F0",
  muse:    "#EDD4B2",
  thrive:  "#033624",
  ember:   "#4A0505",
  blaze:   "#F1204A",
  glint:   "#2DCCD3",
  glow:    "#FBEB35",
  dawn:    "#EDBBE8",
  white:   "#FFFFFF",
};

/* ── Helpers ─────────────────────────────────────────────────────── */
function alpha(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 as const },
  transition: {
    duration: 0.48,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    delay,
  },
});

/* ── FAQ data ────────────────────────────────────────────────────── */
const FAQS = [
  {
    icon: AlertCircle,
    q: "Minha campanha não está performando/rodando, e agora?",
    a: [
      "Validar se o afiliado autorizou sua conta para receber Ads — sem autorização, os vídeos não entram na campanha",
      "Verificar se o estoque do produto que está no vídeo acabou — produto sem estoque paralisa o anúncio",
      "Confirmar se o orçamento diário está dentro do recomendado pela plataforma — orçamento muito baixo impede a ferramenta de performar adequadamente",
    ],
  },
  {
    icon: Users,
    q: "Meu afiliado não autorizou seu perfil para Ads, e agora?",
    a: [
      "Entre em contato com o afiliado e solicite que ele autorize a conta e gere o Código Spark",
      "Para autorizar a CONTA para Ads: TikTok Studio → Ferramentas → Configurações de anúncio → Ativar",
      "Para autorizar um VÍDEO específico: o criador seleciona o vídeo → ativa a opção de anúncio diretamente nele",
      "Para gerar o CÓDIGO SPARK: acessar o vídeo → tocar nos 3 pontinhos no canto direito → Configurações de anúncio → Ativar autorização de anúncio → Gerar código do vídeo → Gerar código → Compartilhar código",
    ],
    link: {
      label: "Passo a passo completo para o afiliado",
      href: "https://seller-br.tiktok.com/university/essay?knowledge_id=5957992314865425&role=1&course_type=1&from=search%7BcontentIdParams%7D&identity=1",
    },
  },
  {
    icon: Gauge,
    q: "Como a plataforma sugere ROI e orçamento diário?",
    a: [
      "O orçamento diário e ROI recomendados são calculados com base nas vendas orgânicas que o seller tem até aquele momento",
      "A quantidade de vídeos postados com link do produto também influencia diretamente a sugestão do sistema",
      "Por isso, quanto maior o histórico de vendas orgânicas e de conteúdo com link, mais precisa e adequada será a recomendação",
    ],
  },
  {
    icon: AlertCircle,
    q: "Minha conta de Ads foi suspensa. O que fazer?",
    a: [
      "Verifique se todas as informações da conta estão preenchidas e atualizadas: documento de identidade, dados do responsável, endereço e dados bancários",
      "Confirme se o método de pagamento está válido e com saldo disponível",
      "Acesse o link de suporte abaixo para mais detalhes e para abrir um chamado junto ao time do TikTok Ads",
    ],
    link: {
      label: "Como resolver conta suspensa",
      href: "https://ads.tiktok.com/help/article/how-to-troubleshoot-a-suspended-ad-account-on-tiktok?lang=pt",
    },
  },
  {
    icon: Wallet,
    q: "Quais são as formas de pagamento?",
    a: [
      "No momento apenas PIX ou cartão de crédito.",
      "O saldo é pré-carregado na conta de anúncios antes de rodar as campanhas",
    ],
  },
];

/* ── FaqItem ─────────────────────────────────────────────────────── */
function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: typeof FAQS[0];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div {...fadeUp(index * 0.05)} className="rounded-2xl overflow-hidden"
      style={{ boxShadow: open ? "0 4px 20px rgba(3,54,36,0.12)" : "0 2px 8px rgba(3,54,36,0.06)" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors duration-200"
        style={{ backgroundColor: open ? "#033624" : "#ffffff" }}
      >
        <div className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: open ? "rgba(186,246,240,0.15)" : "#BAF6F0" }}>
          <Icon size={14} style={{ color: open ? "#BAF6F0" : "#033624" }} />
        </div>
        <span className="flex-1 font-display font-black text-sm leading-snug"
          style={{ color: open ? "#BAF6F0" : "#033624" }}>
          {item.q}
        </span>
        <ChevronDown size={15} className="shrink-0 transition-transform duration-300"
          style={{ color: open ? "#2DCCD3" : "#033624", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            style={{ overflow: "hidden" }}>
            <div className="flex flex-col gap-2 px-4 pb-4 pt-2" style={{ backgroundColor: "#f0fdfb" }}>
              {item.a.map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5" style={{ color: "#2DCCD3" }} />
                  <p className="font-body text-xs leading-relaxed" style={{ color: "#4A0505" }}>{line}</p>
                </div>
              ))}
              {item.link && (
                <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 mt-1 font-body text-xs font-semibold"
                  style={{ color: "#F1204A" }}>
                  <ExternalLink size={11} />
                  {item.link.label}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Seção principal ─────────────────────────────────────────────── */
export function GmvMaxSection() {
  const [coldStartTab, setColdStartTab] = useState<"s1" | "s2">("s1");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: DS.shimmer }}>
        {/* Doodles */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
          style={{ background: `radial-gradient(circle at 10% 20%, ${alpha(DS.glint, 0.2)} 0%, transparent 40%), radial-gradient(circle at 90% 80%, ${alpha(DS.blaze, 0.1)} 0%, transparent 40%)` }} />
        <svg className="absolute top-6 right-4 opacity-30 pointer-events-none animate-float"
          width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M26 3L30.3 18.7L45 15L35.8 26L45 37L30.3 33.3L26 49L21.7 33.3L7 37L16.2 26L7 15L21.7 18.7Z"
            stroke={DS.thrive} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        <svg className="absolute bottom-10 left-3 opacity-20 pointer-events-none animate-float-reverse"
          width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="8" stroke={DS.blaze} strokeWidth="1.8" fill="none" />
          {[0, 72, 144, 216, 288].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = (20 + 10 * Math.cos(rad)).toFixed(2);
            const cy = (20 + 10 * Math.sin(rad)).toFixed(2);
            return (
              <ellipse key={angle} cx={cx} cy={cy} rx="3" ry="4.5"
                transform={`rotate(${angle}, ${cx}, ${cy})`}
                stroke={DS.blaze} strokeWidth="1.5" fill="none" opacity="0.6" />
            );
          })}
        </svg>

        <div className="relative z-10 w-full max-w-[430px] mx-auto px-5 pt-10 pb-14 flex flex-col gap-6">

          <motion.div {...fadeUp(0)} className="flex flex-col gap-3">
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 self-start"
              style={{ backgroundColor: DS.thrive, color: DS.shimmer, borderRadius: "999px", transform: "rotate(-3deg)" }}>
              <BarChart2 size={11} />
              Ads Inteligentes
            </span>

            <h1 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 9vw, 3rem)", color: DS.thrive }}>
              GMV{" "}
              <HighlightedText highlightColor={DS.blaze} from="bottom" inView delay={0.12}>
                Max
              </HighlightedText>
            </h1>

            <p className="font-body text-sm leading-relaxed" style={{ color: "#4A0505", opacity: 0.8 }}>
              Solução de automação de publicidade que otimiza o ROI total do seu canal no TikTok Shop — maximizando receita com inteligência artificial.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-3 gap-3">
            {[
              { icon: TrendingUp, value: "+30%", label: "mais vendas", color: "#F1204A" },
              { icon: Cpu, label: "IA otimizando", value: "24/7", color: "#2DCCD3" },
              { icon: Zap, label: "automático", value: "Auto", color: "#033624" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 rounded-2xl p-3"
                style={{ backgroundColor: "rgba(3,54,36,0.07)" }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: color }}>
                  <Icon size={14} style={{ color: color === DS.thrive ? DS.shimmer : color === DS.blaze ? DS.white : DS.thrive }} />
                </div>
                <span className="font-display font-black text-lg leading-none" style={{ color: DS.thrive }}>{value}</span>
                <span className="font-body text-[10px] text-center leading-tight" style={{ color: "#4A0505", opacity: 0.7 }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* O que é */}
          <motion.div {...fadeUp(0.14)} className="rounded-3xl p-5 flex flex-col gap-3"
            style={{ backgroundColor: "rgba(3,54,36,0.07)", border: "1px solid rgba(3,54,36,0.1)" }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: DS.thrive }}>
                <Store size={14} style={{ color: DS.shimmer }} />
              </div>
              <p className="font-display font-black text-sm" style={{ color: DS.thrive }}>O que é o GMV Max?</p>
            </div>
            <p className="font-body text-xs leading-relaxed" style={{ color: "#4A0505", opacity: 0.8 }}>
              O GMV Max é a nova solução de automação de publicidade do TikTok Shop que otimiza o ROI total do canal de um vendedor para maximizar a receita.
            </p>
            <div className="flex flex-col gap-1.5">
              {[
                { icon: TrendingUp, text: "Maximizar ROI — trazer mais receita" },
                { icon: Cpu, text: "IA que otimiza campanhas automaticamente, reduzindo erros e economizando tempo" },
                { icon: Zap, text: "Potencial de incremento de até 30% nas vendas vs. lojas sem anúncios" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2">
                  <Icon size={12} className="shrink-0 mt-0.5" style={{ color: "#2DCCD3" }} />
                  <p className="font-body text-xs leading-snug" style={{ color: "#033624" }}>{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA links */}
          <motion.div {...fadeUp(0.18)} className="flex flex-col gap-2.5">
            <a href="https://ads.tiktok.com/i18n/gmv-max/welcome?aadvid=7510325651095470096"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${DS.blaze} 0%, #c01038 100%)`, boxShadow: `0 6px 24px ${alpha(DS.blaze, 0.30)}` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                <ArrowUpRight size={18} style={{ color: "#ffffff" }} />
              </div>
              <div className="flex-1">
                <p className="font-display font-black text-sm" style={{ color: "#ffffff" }}>Acessar Ads Manager</p>
                <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>Criar sua campanha GMV Max</p>
              </div>
              <ExternalLink size={14} className="opacity-60 group-hover:opacity-100" style={{ color: "#ffffff" }} />
            </a>

            <a href="https://bytedance.sg.larkoffice.com/minutes/obsgaahwrem1hut18kqogot3"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "rgba(3,54,36,0.10)", border: "1.5px solid rgba(3,54,36,0.15)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#033624" }}>
                <Play size={14} style={{ color: "#BAF6F0" }} />
              </div>
              <div className="flex-1">
                <p className="font-display font-black text-sm" style={{ color: "#033624" }}>Webinar gravado</p>
                <p className="font-body text-xs" style={{ color: "#4A0505", opacity: 0.6 }}>Assista o treinamento completo</p>
              </div>
              <ExternalLink size={14} className="opacity-30 group-hover:opacity-70" style={{ color: "#033624" }} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PARA QUEM É
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-5">

          <motion.div {...fadeUp(0)}>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: "#033624" }}>
              Para quem{" "}
              <HighlightedText highlightColor="#FBEB35" from="bottom" inView delay={0.12}>é?</HighlightedText>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.08)} className="rounded-3xl p-5 flex items-start gap-4"
            style={{ backgroundColor: "#FFF9E6", border: `2px solid ${DS.glow}`, boxShadow: `0 4px 20px ${alpha(DS.glow, 0.2)}` }}>
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: DS.thrive }}>
              <Store size={16} style={{ color: DS.shimmer }} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                Lojas que já estão vendendo
              </p>
              <p className="font-body text-xs leading-relaxed" style={{ color: "#4A0505", opacity: 0.75 }}>
                Ideal para lojas com vídeos postados — seja de afiliados ou próprios. Sem histórico de venda orgânico, a plataforma não tem parâmetro para o algoritmo.
              </p>
            </div>
          </motion.div>

          {/* Onde usar */}
          <motion.div {...fadeUp(0.12)} className="flex flex-col gap-2.5">
            <p className="font-display font-black text-sm" style={{ color: "#033624" }}>Onde usar o GMV Max:</p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { icon: Video, label: "Vídeos próprios", color: "#2DCCD3", textColor: "#033624" },
                { icon: Users, label: "Vídeos de afiliados", color: "#F1204A", textColor: "#ffffff" },
                { icon: Radio, label: "Lives", color: "#033624", textColor: "#BAF6F0" },
                { icon: ShoppingBag, label: "Pág. produto", sub: "Em breve", color: "#EDBBE8", textColor: "#4A0505" },
              ].map(({ icon: Icon, label, color, textColor, sub }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-2xl px-3 py-3"
                  style={{ backgroundColor: color + "15", border: `1.5px solid ${color}40` }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: color }}>
                    <Icon size={14} style={{ color: textColor }} />
                  </div>
                  <div>
                    <p className="font-display font-black text-xs leading-tight" style={{ color: "#033624" }}>{label}</p>
                    {sub && <p className="font-body text-[10px]" style={{ color: "#4A0505", opacity: 0.5 }}>{sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tipos de anúncio */}
          <motion.div {...fadeUp(0.16)} className="flex flex-col gap-2.5">
            <p className="font-display font-black text-sm" style={{ color: "#033624" }}>Tipos de anúncio:</p>
            <div className="flex flex-col gap-2">
              {[
                { icon: Video, label: "Vídeo + tag de compra do produto", color: "#2DCCD3" },
                { icon: Radio, label: "Lives ao vivo", color: "#F1204A" },
                { icon: ShoppingBag, label: "Página de produto (em breve)", color: "#EDBBE8", textColor: "#4A0505" },
              ].map(({ icon: Icon, label, color, textColor = "#ffffff" }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl px-3.5 py-2.5"
                  style={{ backgroundColor: "#f5f5f5" }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: color }}>
                    <Icon size={12} style={{ color: textColor }} />
                  </div>
                  <p className="font-body text-xs" style={{ color: "#033624" }}>{label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-2 rounded-xl px-3.5 py-3"
              style={{ backgroundColor: "#f0fdfb", border: "1px solid #2DCCD340" }}>
              <CheckCircle2 size={12} className="shrink-0 mt-0.5" style={{ color: "#2DCCD3" }} />
              <p className="font-body text-xs leading-snug" style={{ color: "#4A0505", opacity: 0.75 }}>
                Independente do formato, todos levam à página de produto e ao checkout em 3 etapas — tudo dentro da plataforma, sem link externo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COMO FUNCIONA (4 STEPS)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: DS.muse }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
          style={{ background: `radial-gradient(circle at 10% 20%, ${alpha(DS.glint, 0.15)} 0%, transparent 40%), radial-gradient(circle at 90% 80%, ${alpha(DS.blaze, 0.1)} 0%, transparent 40%)` }} />
        <svg className="absolute top-8 right-5 opacity-20 pointer-events-none animate-float"
          width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M22 4C22 4 26 14 36 18C26 22 22 32 22 32C22 32 18 22 8 18C18 14 22 4 22 4Z"
            stroke="#033624" strokeWidth="2" strokeLinejoin="round" />
        </svg>

        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-6">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: DS.blaze, color: DS.white, borderRadius: "999px", transform: "rotate(2deg)" }}>
              <Settings size={11} />
              Configuração
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: DS.thrive }}>
              Como{" "}
              <HighlightedText highlightColor={DS.glint} from="bottom" inView delay={0.12}>funciona</HighlightedText>
              {" "}na prática
            </h2>
          </motion.div>

          {/* Step 1 — com imagem */}
          <motion.div {...fadeUp(0.06)} className="flex flex-col gap-3 p-5 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm">
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center font-display font-black text-base shadow-sm"
                style={{ background: `linear-gradient(135deg, ${DS.glint}, #1ab5bb)`, color: DS.white }}>
                01
              </div>
              <div className="flex-1">
                <p className="font-display font-black text-sm" style={{ color: DS.thrive }}>Conectar contas</p>
                <p className="font-body text-xs leading-relaxed mt-0.5" style={{ color: alpha(DS.thrive, 0.8) }}>
                  Central do Vendedor → Marketing → Anúncios da loja. Conecte sua Central de Negócios e conta de anúncios.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    { label: "Central de Negócios", href: "https://business.tiktok.com/" },
                    { label: "Ads Manager", href: "https://ads.tiktok.com/i18n/gmv-max/welcome?aadvid=7510325651095470096" },
                  ].map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 font-body text-[10px] font-bold px-2 py-1 rounded-lg bg-white/80 border border-black/5"
                      style={{ color: DS.blaze }}>
                      <ExternalLink size={10} />{l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Imagem business center */}
            <div className="rounded-2xl overflow-hidden border border-black/5 shadow-inner bg-black/5">
              <ZoomableImage src="/assets/images/gmv/business.png" alt="Business Center — conectar contas"
                width={400} height={220} />
            </div>
            <div className="flex items-start gap-2 rounded-xl px-3.5 py-3"
              style={{ backgroundColor: alpha(DS.thrive, 0.05) }}>
              <AlertCircle size={12} className="shrink-0 mt-0.5" style={{ color: DS.thrive }} />
              <p className="font-body text-[11px] leading-snug" style={{ color: DS.thrive }}>
                O email do Seller Center precisa ser admin no Business Center. Se não aparecer, acesse: Business Center → Usuários → Membros → Convidar membro
              </p>
            </div>
          </motion.div>

          {/* Step 2 — com imagem */}
          <motion.div {...fadeUp(0.10)} className="flex flex-col gap-3 p-5 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm">
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center font-display font-black text-base shadow-sm"
                style={{ background: `linear-gradient(135deg, ${DS.blaze}, #c01038)`, color: DS.white }}>
                02
              </div>
              <div className="flex-1">
                <p className="font-display font-black text-sm" style={{ color: DS.thrive }}>Criar campanha</p>
                <p className="font-body text-xs leading-relaxed mt-0.5" style={{ color: alpha(DS.thrive, 0.8) }}>
                  Visão geral → Criar GMV Max Ads → Promover produtos
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/5 shadow-inner bg-black/5">
              <ZoomableImage src="/assets/images/gmv/manager.png" alt="Ads Manager — criar campanha GMV Max"
                width={400} height={220} />
            </div>
            <div className="flex flex-col gap-2 rounded-2xl p-4 bg-white/40 border border-white/50 shadow-sm">
              {[
                "Escolha os produtos que deseja promover ou clique em Promover todos",
                "Defina a meta de ROI (pode seguir a recomendada ou sua própria)",
                "Defina o orçamento diário (pode seguir o recomendado ou o próprio)",
                "Escolha data e hora de início — a campanha roda continuamente",
                "Clique em Publicar",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-display font-black text-[10px]"
                    style={{ backgroundColor: DS.blaze, color: DS.white }}>{i + 1}</span>
                  <p className="font-body text-xs leading-snug" style={{ color: DS.thrive }}>{item}</p>
                </div>
              ))}
              <div className="flex items-start gap-2 mt-1 rounded-xl px-3 py-2"
                style={{ backgroundColor: alpha(DS.blaze, 0.08), border: `1px solid ${alpha(DS.blaze, 0.2)}` }}>
                <AlertCircle size={11} className="shrink-0 mt-0.5" style={{ color: DS.blaze }} />
                <p className="font-body text-[10px] leading-snug" style={{ color: alpha(DS.ember, 0.9) }}>
                  Se o botão Criar GMV Max Ads estiver desativado, verifique se você tem acesso de operador ou administrador à conta de anunciante.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3 — com imagem ads */}
          <motion.div {...fadeUp(0.14)} className="flex flex-col gap-3 p-5 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm">
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center font-display font-black text-base shadow-sm"
                style={{ background: `linear-gradient(135deg, ${DS.glow}, #e8d400)`, color: DS.thrive }}>
                03
              </div>
              <div className="flex-1">
                <p className="font-display font-black text-sm" style={{ color: DS.thrive }}>Selecionar criativos</p>
                <p className="font-body text-xs leading-relaxed mt-0.5" style={{ color: alpha(DS.thrive, 0.8) }}>
                  Mantenha seleção automática para escalar com facilidade.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/5 shadow-inner bg-black/5">
              <ZoomableImage src="/assets/images/gmv/ads.png" alt="Seleção de criativos no Ads Manager"
                width={400} height={220} />
            </div>
            <div className="flex flex-col gap-2">
              {[
                { icon: Cpu, text: "Seleção automática: todo vídeo novo de afiliado autorizado entra automaticamente na biblioteca de criativos", accent: DS.glint },
                { icon: ListChecks, text: "Seleção manual: lembre-se de aprovar novos vídeos individualmente para que entrem na campanha", accent: DS.blaze },
              ].map(({ icon: Icon, text, accent }) => (
                <div key={text} className="flex items-start gap-2.5 rounded-xl px-3.5 py-3"
                  style={{ backgroundColor: alpha(accent, 0.12), border: `1px solid ${alpha(accent, 0.3)}` }}>
                  <Icon size={13} className="shrink-0 mt-0.5" style={{ color: accent }} />
                  <p className="font-body text-[11px] leading-snug" style={{ color: alpha(DS.ember, 0.9) }}>{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div {...fadeUp(0.18)} className="flex gap-3 items-start p-5 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm">
            <div className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center font-display font-black text-base shadow-sm"
              style={{ background: `linear-gradient(135deg, ${DS.thrive}, #055a3a)`, color: DS.shimmer }}>
              04
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-display font-black text-sm" style={{ color: DS.thrive }}>Monitorar e ajustar</p>
              <p className="font-body text-xs leading-relaxed mt-0.5" style={{ color: alpha(DS.thrive, 0.8) }}>
                Deixe a campanha rodar por pelo menos <strong>1 semana</strong> antes de qualquer ajuste na meta de ROI. Alterações frequentes prejudicam a entrega e a performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CICLO DE VIDA DA CAMPANHA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-5">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: DS.glint, color: DS.thrive, borderRadius: "999px", transform: "rotate(-2deg)" }}>
              <RefreshCw size={11} />
              Ciclo de vida
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: DS.thrive }}>
              Ciclo de vida de{" "}
              <HighlightedText highlightColor={DS.glint} from="bottom" inView delay={0.12}>
                campanha
              </HighlightedText>
            </h2>
            <p className="font-body text-sm mt-2 leading-relaxed" style={{ color: alpha(DS.ember, 0.8), opacity: 0.9 }}>
              Entenda como a IA aprende e otimiza sua campanha ao longo do tempo.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.08)}>
            <ZoomableImage src="/assets/images/gmv/ciclo.png" alt="Ciclo de vida de campanha GMV Max"
              width={400} height={300} style={{ boxShadow: `0 6px 32px ${alpha(DS.thrive, 0.12)}`, border: `1.5px solid ${alpha(DS.glint, 0.4)}` }} />
          </motion.div>

          <motion.div {...fadeUp(0.12)} className="flex flex-col gap-2.5">
            {[
              { icon: Zap, label: "Fase de aprendizado", desc: "A IA coleta dados iniciais — evite alterar configurações neste período", color: DS.glow, textColor: DS.thrive },
              { icon: TrendingUp, label: "Fase de escala", desc: "Performance estabiliza e ROI converge para a meta definida", color: DS.glint, textColor: DS.thrive },
              { icon: Flame, label: "Fase de maturidade", desc: "Campanha rodando com eficiência máxima — mantenha criativos frescos", color: DS.blaze, textColor: DS.white },
            ].map(({ icon: Icon, label, desc, color, textColor }) => (
              <div key={label} className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
                style={{ backgroundColor: "#f8f8f8" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: color }}>
                  <Icon size={15} style={{ color: textColor }} />
                </div>
                <div>
                  <p className="font-display font-black text-sm" style={{ color: DS.thrive }}>{label}</p>
                  <p className="font-body text-xs leading-snug mt-0.5" style={{ color: alpha(DS.ember, 0.7) }}>{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COLD START GUIDE
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: DS.shimmer }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
          style={{ background: `radial-gradient(circle at 10% 80%, ${alpha(DS.glint, 0.2)} 0%, transparent 40%)` }} />
        <div className="relative z-10 w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-6">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: DS.ember, color: DS.muse, borderRadius: "999px", transform: "rotate(-2deg)" }}>
              <Zap size={11} />
              Início frio (Cold Start)
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: DS.thrive }}>
              Como{" "}
              <HighlightedText highlightColor={DS.blaze} from="bottom" inView delay={0.12}>iniciar</HighlightedText>
            </h2>
            <p className="font-body text-sm mt-2 leading-relaxed" style={{ color: "#4A0505", opacity: 0.75 }}>
              Se um produto tem menos de <strong>R$ 5.000</strong> em GMV nos últimos 7 dias (L7D), ele deve seguir este guia de cold start.
            </p>
          </motion.div>

          {/* Dois tipos de cold start */}
          <motion.div {...fadeUp(0.06)} className="flex flex-col gap-2.5">
            {[
              {
                icon: Store,
                tag: "Seção 1",
                tagBg: "#2DCCD3",
                tagText: "#033624",
                title: "Novo no TikTok Shop",
                desc: "Lojas que acabaram de chegar ao TikTok Shop e têm pouco ou nenhum GMV histórico (orgânico ou por anúncios). Começando do zero com anúncios.",
                tab: "s1" as const,
              },
              {
                icon: Megaphone,
                tag: "Seção 2",
                tagBg: "#F1204A",
                tagText: "#ffffff",
                title: "Novo em Anúncios",
                desc: "Lojas que cresceram organicamente (têm GMV histórico) mas nunca investiram em anúncios. Devem calcular manualmente as metas de ROI.",
                tab: "s2" as const,
              },
            ].map(({ icon: Icon, tag, tagBg, tagText, title, desc, tab }) => (
              <button key={tab} onClick={() => setColdStartTab(tab)}
                className="flex items-start gap-3 rounded-2xl px-4 py-4 text-left w-full transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: coldStartTab === tab ? DS.thrive : DS.white,
                  boxShadow: coldStartTab === tab
                    ? `0 6px 24px ${alpha(DS.thrive, 0.25)}`
                    : "0 2px 10px rgba(3,54,36,0.08)",
                  border: coldStartTab === tab ? "none" : "1.5px solid rgba(3,54,36,0.08)",
                }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: coldStartTab === tab ? alpha(DS.shimmer, 0.15) : tagBg }}>
                  <Icon size={15} style={{ color: coldStartTab === tab ? DS.shimmer : tagText }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-body text-[10px] font-black px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: tagBg, color: tagText }}>{tag}</span>
                    <p className="font-display font-black text-sm"
                      style={{ color: coldStartTab === tab ? DS.shimmer : DS.thrive }}>{title}</p>
                  </div>
                  <p className="font-body text-xs leading-snug"
                    style={{ color: coldStartTab === tab ? alpha(DS.shimmer, 0.75) : DS.ember, opacity: coldStartTab === tab ? 1 : 0.8 }}>
                    {desc}
                  </p>
                </div>
                <ChevronRight size={14} className="shrink-0 mt-1"
                  style={{ color: coldStartTab === tab ? "#2DCCD3" : "rgba(3,54,36,0.3)" }} />
              </button>
            ))}
          </motion.div>

          {/* Tabs */}
          <motion.div {...fadeUp(0.08)} className="flex rounded-2xl overflow-hidden"
            style={{ border: "2px solid rgba(3,54,36,0.18)" }}>
            {([
              { key: "s1", icon: Store, label: "Novo no TikTok Shop" },
              { key: "s2", icon: Megaphone, label: "Novo em Anúncios" },
            ] as const).map(({ key, icon: Icon, label }) => (
              <button key={key} onClick={() => setColdStartTab(key)}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 font-display font-black text-xs transition-all duration-200"
                style={{
                  backgroundColor: coldStartTab === key ? "#033624" : "transparent",
                  color: coldStartTab === key ? "#BAF6F0" : "#033624",
                }}>
                <Icon size={12} />
                {label}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {coldStartTab === "s1" ? (
              <motion.div key="s1"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-3">

                {/* Config inicial */}
                <div className="rounded-2xl p-1.5"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(3,54,36,0.08)" }}>
                  <div className="px-3.5 pt-3 pb-2">
                    <p className="font-display font-black text-xs" style={{ color: "#4A0505" }}>CONFIGURAÇÃO INICIAL</p>
                  </div>
                  {[
                    {
                      icon: Video,
                      label: "Conteúdo",
                      val: <>O uso de conteúdo em vídeo <strong>não é obrigatório</strong> para começar a utilizar o GMV Max, pois ele também cria formatos de product shopping ads.</>,
                      color: "#2DCCD3",
                    },
                    {
                      icon: Target,
                      label: "Produtos",
                      val: <>Promova de <strong>3 a 7</strong> dos seus produtos mais vendidos.</>,
                      color: "#2DCCD3",
                    },
                    {
                      icon: Cpu,
                      label: "Seleção de Criativos",
                      val: <>Use a <strong>seleção automática (Auto-select)</strong> e mantenha os posts de afiliados ativados.</>,
                      color: "#2DCCD3",
                    },
                    {
                      icon: Gauge,
                      label: "ROI Target",
                      val: <>No cold start, o ideal é utilizar a <strong>Entrega Máxima (Maximum Delivery)</strong>.</>,
                      color: "#F1204A",
                    },
                    {
                      icon: DollarSign,
                      label: "Investimento",
                      val: <>Siga os <strong>orçamentos recomendados</strong> na plataforma.</>,
                      color: "#F1204A",
                    },
                  ].map(({ icon: Icon, label, val, color }) => (
                    <div key={label} className="flex items-start gap-2.5 px-3.5 py-2.5 border-t"
                      style={{ borderColor: "rgba(3,54,36,0.06)" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: color + "15", border: `1px solid ${color}40` }}>
                        <Icon size={12} style={{ color }} />
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#4A0505", opacity: 0.45 }}>{label}</p>
                        <p className="font-body text-xs leading-relaxed" style={{ color: "#033624" }}>{val}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Entrega Máxima CTA */}
                <a href="/entrega-maxima"
                  className="group flex items-center gap-3.5 rounded-2xl px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #F1204A 0%, #c01038 100%)", boxShadow: "0 6px 24px rgba(241,32,74,0.30)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                    <Zap size={16} style={{ color: "#ffffff" }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-black text-sm" style={{ color: "#ffffff" }}>Entrega Máxima (Max Delivery)</p>
                    <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Como ativar e configurar — guia completo</p>
                  </div>
                  <ChevronRight size={15} className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: "#ffffff" }} />
                </a>

                {/* Semana 1 */}
                <div className="rounded-2xl p-1.5"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(3,54,36,0.08)" }}>
                  <div className="px-3.5 pt-3 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "#2DCCD3" }}>
                        <Clock size={11} style={{ color: "#033624" }} />
                      </div>
                      <p className="font-display font-black text-xs" style={{ color: "#2DCCD3" }}>SEMANA 1</p>
                    </div>
                  </div>
                  {[
                    { icon: Target, label: "Produtos", val: <>Top <strong>3-7</strong> best sellers</>, color: "#2DCCD3" },
                    { icon: Zap, label: "Lance", val: <>Ative a <strong>Entrega Máxima</strong> para cada produto.</>, color: "#2DCCD3" },
                    { icon: DollarSign, label: "Budget SMB", val: <>Mínimo semanal de <strong>R$ 400</strong>.</>, color: "#2DCCD3" },
                    { icon: DollarSign, label: "Budget KA", val: <>Mínimo diário de <strong>R$ 500</strong>.</>, color: "#2DCCD3" },
                    { icon: Video, label: "Criativos", val: <><strong>Soma automática</strong> à campanha.</>, color: "#2DCCD3" },
                  ].map(({ icon: Icon, label, val, color }) => (
                    <div key={label} className="flex items-start gap-2.5 px-3.5 py-2.5 border-t"
                      style={{ borderColor: "rgba(3,54,36,0.06)" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: color + "15", border: `1px solid ${color}40` }}>
                        <Icon size={12} style={{ color }} />
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#4A0505", opacity: 0.45 }}>{label}</p>
                        <p className="font-body text-xs leading-snug" style={{ color: "#033624" }}>{val}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Semanas 2-5 */}
                <div className="rounded-2xl p-1.5"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(3,54,36,0.08)" }}>
                  <div className="px-3.5 pt-3 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "#033624" }}>
                        <RotateCw size={11} style={{ color: "#BAF6F0" }} />
                      </div>
                      <p className="font-display font-black text-xs" style={{ color: "#033624" }}>SEMANAS 2–5</p>
                    </div>
                  </div>
                  {[
                    { icon: Layers, label: "Produtos", val: <>Mantenha pelo menos <strong>3 produtos ativos</strong>.</>, color: "#033624" },
                    { icon: Zap, label: "Lance", val: <>Mude para <strong>Meta de ROI</strong> após 7 dias se desejar controle.</>, color: "#033624" },
                    { icon: DollarSign, label: "Budget", val: <>Use <strong>10x o AOV</strong> como orçamento inicial.</>, color: "#033624" },
                    { icon: Video, label: "Criativos", val: <>Soma automática de <strong>novos afiliados</strong>.</>, color: "#033624" },
                  ].map(({ icon: Icon, label, val, color }) => (
                    <div key={label} className="flex items-start gap-2.5 px-3.5 py-2.5 border-t"
                      style={{ borderColor: "rgba(3,54,36,0.06)" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: color + "12", border: `1px solid ${color}30` }}>
                        <Icon size={12} style={{ color }} />
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#4A0505", opacity: 0.45 }}>{label}</p>
                        <p className="font-body text-xs leading-snug" style={{ color: "#033624" }}>{val}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Medindo Performance */}
                <div className="rounded-2xl p-4"
                  style={{ background: "linear-gradient(135deg, #033624, #055a3a)", boxShadow: "0 6px 24px rgba(3,54,36,0.25)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart2 size={14} style={{ color: "#BAF6F0" }} />
                    <p className="font-display font-black text-xs" style={{ color: "#BAF6F0" }}>Medindo Performance</p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {[
                      {
                        label: "Atingimento de ROI",
                        text: "Como seus produtos ainda são novos na plataforma, as vendas diárias podem ser esparsas e inconsistentes. Portanto, o ROI também será irregular — meça-o semanalmente, não diariamente. O ROI semanal deve ficar entre 80% e 120% da sua meta de ROI.",
                      },
                      {
                        label: "GMV Incremental",
                        text: "Utilize o gráfico de comparação \"Antes e Depois\" para medir o aumento do GMV (Valor Bruto de Mercadorias) dos seus produtos desde a adoção do GMV Max.",
                      },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <p className="font-body text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: alpha(DS.shimmer, 0.65) }}>{label}</p>
                        <p className="font-body text-xs leading-relaxed" style={{ color: DS.shimmer }}>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="s2"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-3">

                <div className="rounded-2xl p-4"
                  style={{ backgroundColor: "#fff9e6", border: "2px solid #FBEB3560" }}>
                  <div className="flex items-start gap-2.5">
                    <AlertCircle size={14} className="shrink-0 mt-0.5" style={{ color: "#4A0505" }} />
                    <p className="font-body text-xs leading-relaxed" style={{ color: "#4A0505" }}>
                      A meta de ROI sugerida pode ser muito alta para quem nunca anunciou. Ela é um valor padrão do sistema — ROI alto demais limita o gasto da campanha.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl p-1.5"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(3,54,36,0.08)" }}>
                  <div className="px-3.5 pt-3 pb-2 border-b" style={{ borderColor: "rgba(3,54,36,0.06)" }}>
                    <p className="font-display font-black text-xs" style={{ color: "#F1204A" }}>RECOMENDAÇÕES INICIAIS</p>
                  </div>
                  
                  {/* Conteúdo Detalhado */}
                  <div className="px-3.5 py-3 border-b" style={{ borderColor: "rgba(3,54,36,0.06)" }}>
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "#F1204A15", border: "1px solid #F1204A30" }}>
                        <Video size={12} style={{ color: "#F1204A" }} />
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#4A0505", opacity: 0.45 }}>Conteúdo</p>
                        <p className="font-body text-xs leading-snug" style={{ color: "#033624" }}>
                          Recomendamos começar com <strong>5 vídeos</strong> para obter melhores resultados, mas isso não é obrigatório. Os conteúdos podem ser obtidos através de:
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 pl-9 mt-1">
                      {[
                        { title: "Conteúdo de Afiliados", items: ["Vídeos autorizados por afiliados", "Spark Codes (códigos de divulgação)"] },
                        { title: "Posts Personalizados", items: ["Conteúdo orgânico da sua conta TikTok", "Anúncios Spark anteriores (TTAM)"] },
                        { title: "Conteúdo Próprio", items: ["Vídeos criados pela conta com links dos produtos"] },
                        { title: "Conteúdo Spark", items: ["Spark Codes de afiliados já vinculados"] },
                      ].map((group) => (
                        <div key={group.title} className="bg-[#F1204A08] p-2 rounded-lg border border-[#F1204A15]">
                          <p className="font-display font-bold text-[10px]" style={{ color: "#F1204A" }}>{group.title}</p>
                          <ul className="mt-1 space-y-0.5">
                            {group.items.map((item) => (
                              <li key={item} className="font-body text-[10px] flex items-center gap-1.5" style={{ color: "#033624" }}>
                                <div className="w-1 h-1 rounded-full bg-[#F1204A]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outros itens */}
                  {[
                    { icon: Target, label: "Produtos", val: <>Promova de <strong>2-7 produtos</strong> best sellers</> },
                    { icon: Cpu, label: "Seleção de criativos", val: <>Use <strong>seleção automática</strong></> },
                    { icon: Gauge, label: "ROI Target", val: <>Defina a ROI <strong>mais baixa</strong> que aceitar.</> },
                  ].map(({ icon: Icon, label, val }) => (
                    <div key={label} className="flex items-start gap-2.5 px-3.5 py-3 border-b last:border-0"
                      style={{ borderColor: "rgba(3,54,36,0.06)" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#F1204A15", border: "1px solid #F1204A30" }}>
                        <Icon size={12} style={{ color: "#F1204A" }} />
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#4A0505", opacity: 0.45 }}>{label}</p>
                        <p className="font-body text-xs leading-snug" style={{ color: "#033624" }}>{val}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Budget */}
                <div className="rounded-2xl p-4 flex flex-col gap-3"
                  style={{ background: "linear-gradient(135deg, #F1204A, #c01038)", boxShadow: "0 6px 24px rgba(241,32,74,0.28)" }}>
                  <div className="flex items-center gap-2">
                    <DollarSign size={14} style={{ color: "#ffffff" }} />
                    <p className="font-display font-black text-xs" style={{ color: "#ffffff" }}>Budget (Orçamento)</p>
                  </div>
                  <p className="font-body text-xs" style={{ color: alpha(DS.white, 0.95) }}>
                    Defina um orçamento maior que o GMV histórico dividido pelo ROI desejado.
                  </p>
                  <div className="rounded-xl px-4 py-3 font-display font-black text-xs text-center border-2 border-white/20"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}>
                    Orçamento &gt; GMV histórico ÷ ROI alvo
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                    <p className="font-display font-bold text-[10px] uppercase mb-2" style={{ color: "#BAF6F0" }}>Exemplo Prático:</p>
                    <div className="grid grid-cols-2 gap-2 font-body text-[10px]" style={{ color: "#ffffff" }}>
                      <div className="flex flex-col">
                        <span className="opacity-70">GMV histórico</span>
                        <span className="font-bold">$10.000</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="opacity-70">ROI alvo</span>
                        <span className="font-bold">3</span>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 flex justify-between items-center">
                      <span className="font-body text-[10px] text-white/70">Cálculo: $10.000 / 3</span>
                      <span className="font-display font-black text-xs text-[#BAF6F0]">Min: $3.333*</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: DS.muse }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
          style={{ background: `radial-gradient(circle at 90% 10%, ${alpha(DS.glint, 0.1)} 0%, transparent 40%)` }} />
        <svg className="absolute top-8 left-3 opacity-20 pointer-events-none animate-float-reverse"
          width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="11" stroke="#033624" strokeWidth="2" />
          <circle cx="24" cy="24" r="20" stroke="#033624" strokeWidth="1.2" strokeDasharray="4 3" />
        </svg>
        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-5">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: DS.ember, color: DS.muse, borderRadius: "999px", transform: "rotate(3deg)" }}>
              <HelpCircle size={11} />
              Dúvidas frequentes
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: DS.thrive }}>
              Principais{" "}
              <HighlightedText highlightColor={DS.dawn} from="bottom" inView delay={0.12}>
                dúvidas
              </HighlightedText>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-2">
            {FAQS.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                index={i}
                open={openFaqIndex === i}
                onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LINKS ÚTEIS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#BAF6F0" }}>
        <svg className="absolute bottom-8 right-4 opacity-25 pointer-events-none animate-float"
          width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M22 2 L25.6 15.4 L38 12 L29.2 22 L38 32 L25.6 28.6 L22 42 L18.4 28.6 L6 32 L14.8 22 L6 12 L18.4 15.4 Z"
            stroke="#033624" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-5">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: DS.thrive, color: DS.shimmer, borderRadius: "999px", transform: "rotate(-2deg)" }}>
              <Link2 size={11} />
              Recursos
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: DS.thrive }}>
              Links{" "}
              <HighlightedText highlightColor={DS.blaze} from="bottom" inView delay={0.12}>
                úteis
              </HighlightedText>
            </h2>
          </motion.div>

          {/* Destaques principais */}
          <div className="flex flex-col gap-3">
            {/* Entrega Máxima — interno */}
            <motion.a key="entrega-maxima" {...fadeUp(0)} href="/entrega-maxima"
              className="group flex items-center gap-3.5 rounded-2xl px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${DS.glint} 0%, #1ab5bb 100%)`, boxShadow: `0 6px 24px ${alpha(DS.glint, 0.30)}` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                <Zap size={16} style={{ color: DS.thrive }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-black text-sm" style={{ color: DS.thrive }}>Entrega Máxima</p>
                <p className="font-body text-xs" style={{ color: alpha(DS.thrive, 0.6) }}>Como ativar e configurar o Max Delivery</p>
              </div>
              <ChevronRight size={14} className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: DS.thrive }} />
            </motion.a>

            {/* Ads Manager */}
            <motion.a key="ads-manager" {...fadeUp(0.05)}
              href="https://ads.tiktok.com/i18n/gmv-max/welcome?aadvid=7510325651095470096"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3.5 rounded-2xl px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${DS.blaze} 0%, #c01038 100%)`, boxShadow: `0 6px 24px ${alpha(DS.blaze, 0.28)}` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                <ArrowUpRight size={16} style={{ color: DS.white }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-black text-sm" style={{ color: DS.white }}>Ads Manager — GMV Max</p>
                <p className="font-body text-xs" style={{ color: alpha(DS.white, 0.65) }}>Criar e gerenciar campanhas</p>
              </div>
              <ExternalLink size={13} className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: DS.white }} />
            </motion.a>

            {/* Central de Negócios */}
            <motion.a key="business" {...fadeUp(0.10)}
              href="https://business.tiktok.com/"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3.5 rounded-2xl px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${DS.thrive} 0%, #055a3a 100%)`, boxShadow: `0 6px 24px ${alpha(DS.thrive, 0.22)}` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: alpha(DS.shimmer, 0.15) }}>
                <Building2 size={16} style={{ color: DS.shimmer }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-black text-sm" style={{ color: DS.shimmer }}>Central de Negócios</p>
                <p className="font-body text-xs" style={{ color: alpha(DS.shimmer, 0.55) }}>Configurar business center</p>
              </div>
              <ExternalLink size={13} className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: DS.shimmer }} />
            </motion.a>
          </div>

          {/* Recursos secundários */}
          <div className="flex flex-col gap-2.5">
            <p className="font-body text-[11px] font-semibold uppercase tracking-widest px-1"
              style={{ color: DS.thrive, opacity: 0.55 }}>Recursos de apoio</p>
            {[
              {
                icon: Play,
                label: "Webinar gravado",
                sub: "Treinamento completo GMV Max",
                href: "https://bytedance.sg.larkoffice.com/minutes/obsgaahwrem1hut18kqogot3",
                iconBg: "#2DCCD3",
                iconColor: "#033624",
                accentBorder: "#2DCCD340",
              },
              {
                icon: Palette,
                label: "Referências de criativos",
                sub: "Inspirações para seus anúncios",
                href: "https://ads.tiktok.com/business/creativecenter/inspiration/popular/pc/pt",
                iconBg: "#FBEB35",
                iconColor: "#033624",
                accentBorder: "#FBEB3550",
              },
              {
                icon: BookOpen,
                label: "Guia oficial GMV Max",
                sub: "Documentação na Seller Academy",
                href: "https://seller-br.tiktok.com/university/essay?knowledge_id=792603294271249&role=1&course_type=1&from=search%7BcontentIdParams%7D&identity=1",
                iconBg: "#EDBBE8",
                iconColor: "#4A0505",
                accentBorder: "#EDBBE860",
              },
              {
                icon: BadgeCheck,
                label: "Como criar campanha (guia)",
                sub: "Passo a passo no TikTok Ads Help",
                href: "https://ads.tiktok.com/help/article/how-to-create-a-product-gmv-max-campaign-in-tiktok-ads-manager?lang=pt",
                iconBg: "#EDD4B2",
                iconColor: "#4A0505",
                accentBorder: "#EDD4B260",
              },
            ].map((item, i) => (
              <motion.a key={item.label} {...fadeUp(0.15 + i * 0.05)}
                href={item.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  backgroundColor: "#ffffff",
                  border: `2px solid ${item.accentBorder}`,
                  boxShadow: "0 2px 10px rgba(3,54,36,0.06)",
                }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: item.iconBg }}>
                  <item.icon size={15} style={{ color: item.iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-black text-sm" style={{ color: DS.thrive }}>{item.label}</p>
                  <p className="font-body text-xs" style={{ color: alpha(DS.ember, 0.65) }}>{item.sub}</p>
                </div>
                <ExternalLink size={12} className="shrink-0 opacity-25 group-hover:opacity-60 transition-opacity"
                  style={{ color: DS.thrive }} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
