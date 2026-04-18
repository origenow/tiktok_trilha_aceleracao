"use client";

import { motion } from "motion/react";
import { AlertTriangle, FileText, Award, CheckCircle2 } from "lucide-react";
import { ZoomableImage } from "@/components/ui/zoomable-image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 as const },
  transition: {
    duration: 0.48,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    delay,
  },
});

/* ── Doodles ──────────────────────────────────────────────────────── */
function StarDoodle({ color, size = 20, style }: { color: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill={color} />
    </svg>
  );
}

function ArrowDoodle({ color, style }: { color: string; style?: React.CSSProperties }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={style} aria-hidden="true">
      <path d="M4 16 Q12 6 24 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M20 10 L24 14 L18 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* ── Componente principal ─────────────────────────────────────────── */
export function SemiJoiasSection() {
  return (
    <section className="relative pb-16 overflow-hidden" style={{ backgroundColor: "#EDD4B2" }}>

      {/* Doodles decorativos */}
      <StarDoodle color="#2DCCD3" size={18} style={{ position: "absolute", top: 72, right: 22, opacity: 0.55, animation: "float 4s ease-in-out infinite" }} />
      <ArrowDoodle color="#033624" style={{ position: "absolute", top: 200, left: 14, opacity: 0.25, animation: "float 5s ease-in-out infinite" }} />
      <StarDoodle color="#FBEB35" size={14} style={{ position: "absolute", top: 420, right: 36, opacity: 0.65, animation: "float 3.5s ease-in-out infinite reverse" }} />
      <StarDoodle color="#2DCCD3" size={16} style={{ position: "absolute", top: 850, left: 18, opacity: 0.45, animation: "float 4.5s ease-in-out infinite" }} />
      <ArrowDoodle color="#033624" style={{ position: "absolute", top: 1200, right: 16, opacity: 0.2, animation: "float 4s ease-in-out infinite reverse" }} />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <div className="px-5 pt-4 pb-10 relative">

        <motion.div {...fadeUp(0)}>
          <span
            className="font-body text-xs font-bold px-4 py-1.5 inline-block mb-4"
            style={{
              backgroundColor: "#EDBBE8",
              color: "#033624",
              borderRadius: "999px",
              transform: "rotate(-3deg)",
            }}
          >
            💎 Categoria exclusiva
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.06)}
          className="font-display font-black leading-[1.05] mb-4"
          style={{ fontSize: "clamp(2rem, 9vw, 2.6rem)", color: "#033624" }}
        >
          Semi-Jóias no{" "}
          <span style={{ color: "#F1204A" }}>TikTok Shop</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.12)}
          className="font-body text-sm leading-relaxed mb-6"
          style={{ color: "#033624", opacity: 0.7 }}
        >
          Guia completo para habilitar a categoria e certificar seus produtos na plataforma.
        </motion.p>

        {/* Alerta */}
        <motion.div
          {...fadeUp(0.16)}
          className="rounded-2xl p-4 flex gap-3"
          style={{
            backgroundColor: "#BAF6F0",
            border: "1.5px solid rgba(3,54,36,0.15)",
            boxShadow: "0 4px 16px rgba(3,54,36,0.08)",
          }}
        >
          <AlertTriangle size={18} className="shrink-0 mt-0.5" style={{ color: "#F1204A" }} />
          <div>
            <p className="font-display font-black text-sm mb-0.5" style={{ color: "#033624" }}>
              Atenção
            </p>
            <p className="font-body text-xs leading-relaxed" style={{ color: "#033624", opacity: 0.75 }}>
              Essa categoria{" "}
              <strong style={{ color: "#F1204A" }}>não está disponível para todos os vendedores</strong>
              {" "}— apenas para convidados.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Divisória */}
      <div className="mx-5 h-px mb-10" style={{ backgroundColor: "rgba(3,54,36,0.12)" }} />

      {/* ── ETAPA 1 ─────────────────────────────────────────────── */}
      <div className="px-5 mb-10">

        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
          <span
            className="font-display font-black text-xs px-3 py-1.5"
            style={{
              backgroundColor: "#2DCCD3",
              color: "#033624",
              borderRadius: "999px",
              transform: "rotate(2deg)",
            }}
          >
            Etapa 1
          </span>
          <h2 className="font-display font-black text-lg" style={{ color: "#033624" }}>
            Aprovação da Categoria
          </h2>
        </motion.div>

        {/* Passo 1 */}
        <motion.div {...fadeUp(0.04)} className="mb-4">
          <div className="rounded-2xl p-5 bg-white" style={{ boxShadow: "0 8px 32px rgba(3,54,36,0.10)" }}>
            <div className="flex items-start gap-3 mb-4">
              <span
                className="font-display font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#033624", color: "#BAF6F0" }}
              >
                1
              </span>
              <div>
                <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                  Acesse Configuração de Conta
                </p>
                <p className="font-body text-xs mt-1 leading-relaxed" style={{ color: "#033624", opacity: 0.55 }}>
                  Central do Vendedor → Perfil → Minha Conta → Configuração de conta
                </p>
              </div>
            </div>
            <ZoomableImage
              src="/assets/images/semijoias/conf.png"
              alt="Tela de Configuração de conta no Central do Vendedor"
            />
          </div>
        </motion.div>

        {/* Passo 2 */}
        <motion.div {...fadeUp(0.06)} className="mb-4">
          <div className="rounded-2xl p-5 bg-white" style={{ boxShadow: "0 8px 32px rgba(3,54,36,0.10)" }}>
            <div className="flex items-start gap-3 mb-4">
              <span
                className="font-display font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#033624", color: "#BAF6F0" }}
              >
                2
              </span>
              <div>
                <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                  Centro de Qualificação
                </p>
                <p className="font-body text-xs mt-1 leading-relaxed" style={{ color: "#033624", opacity: 0.55 }}>
                  Qualificação de categoria → selecione <strong>Jóias e Acessórios</strong>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {(["quali.png", "quali2.png", "quali3.png"] as const).map((img, i) => (
                <ZoomableImage
                  key={i}
                  src={`/assets/images/semijoias/${img}`}
                  alt={`Qualificação de categoria — passo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Passo 3 — Documentação */}
        <motion.div {...fadeUp(0.08)} className="mb-4">
          <div className="rounded-2xl p-5 bg-white" style={{ boxShadow: "0 8px 32px rgba(3,54,36,0.10)" }}>
            <div className="flex items-start gap-3 mb-4">
              <span
                className="font-display font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#033624", color: "#BAF6F0" }}
              >
                3
              </span>
              <p className="font-display font-black text-sm pt-0.5" style={{ color: "#033624" }}>
                Documentação Requisitada
              </p>
            </div>

            <ZoomableImage
              src="/assets/images/semijoias/quali4.png"
              alt="Lista de documentação requisitada"
            />

            {/* 3.1 */}
            <div className="mt-4 rounded-xl p-4" style={{ backgroundColor: "#BAF6F0" }}>
              <p className="font-display font-black text-xs mb-1" style={{ color: "#033624" }}>
                3.1 — Faturamento anual em outra plataforma
              </p>
              <p className="font-body text-[11px] mb-3" style={{ color: "#033624", opacity: 0.6 }}>
                Site próprio, Mercado Livre, Shopee, SHEIN, etc.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { file: "ml.png", label: "Mercado Livre" },
                  { file: "shopee.png", label: "Shopee" },
                ].map(({ file, label }) => (
                  <div key={file}>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#033624", opacity: 0.5 }}>
                      {label}
                    </p>
                    <ZoomableImage
                      src={`/assets/images/semijoias/${file}`}
                      alt={`Exemplo de print ${label}`}
                      width={200}
                      height={130}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 3.2 */}
            <div className="mt-3 rounded-xl p-4 flex items-start gap-3" style={{ backgroundColor: "#BAF6F0" }}>
              <FileText size={15} className="shrink-0 mt-0.5" style={{ color: "#033624", opacity: 0.7 }} />
              <div>
                <p className="font-display font-black text-xs mb-0.5" style={{ color: "#033624" }}>
                  3.2 — Link da loja
                </p>
                <p className="font-body text-[11px]" style={{ color: "#033624", opacity: 0.65 }}>
                  Link da sua loja no TikTok ou Instagram
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Passo 4 */}
        <motion.div {...fadeUp(0.10)}>
          <div
            className="rounded-2xl p-5 flex items-start gap-4"
            style={{
              backgroundColor: "#FBEB35",
              boxShadow: "0 6px 24px rgba(251,235,53,0.35)",
            }}
          >
            <CheckCircle2 size={24} className="shrink-0 mt-0.5" style={{ color: "#033624" }} />
            <div>
              <p className="font-display font-black text-sm mb-1" style={{ color: "#033624" }}>
                4 — Aprovação da Solicitação
              </p>
              <p className="font-body text-xs leading-relaxed" style={{ color: "#033624", opacity: 0.7 }}>
                Sua solicitação passará por validação de{" "}
                <strong>4 dias úteis</strong> até ser aprovada ou rejeitada.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divisória */}
      <div className="mx-5 h-px mb-10" style={{ backgroundColor: "rgba(3,54,36,0.12)" }} />

      {/* ── ETAPA 2 ─────────────────────────────────────────────── */}
      <div className="px-5 mb-10">

        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
          <span
            className="font-display font-black text-xs px-3 py-1.5"
            style={{
              backgroundColor: "#EDBBE8",
              color: "#033624",
              borderRadius: "999px",
              transform: "rotate(-2deg)",
            }}
          >
            Etapa 2
          </span>
          <h2 className="font-display font-black text-lg" style={{ color: "#033624" }}>
            Certificação dos Produtos
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.04)} className="mb-5 flex flex-col gap-2.5">
          {[
            "Depois da categoria aprovada, certifique cada produto individualmente.",
            "Você pode fazer as alterações por sistema/ERP ou diretamente na Central do Vendedor.",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-[10px] font-black"
                style={{ backgroundColor: "#033624", color: "#BAF6F0" }}
              >
                ✓
              </span>
              <p className="font-body text-sm leading-snug" style={{ color: "#033624", opacity: 0.75 }}>
                {text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Passo a passo */}
        <motion.div {...fadeUp(0.06)} className="mb-5">
          <div className="rounded-2xl p-5 bg-white" style={{ boxShadow: "0 8px 32px rgba(3,54,36,0.10)" }}>
            <p className="font-display font-black text-sm mb-4" style={{ color: "#033624" }}>
              Siga o processo:
            </p>
            {[
              "Edite a categoria dos seus produtos para Jóias",
              "Adicione o Laudo de Composição Técnica ou o Certificado de Autenticidade",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                <span
                  className="shrink-0 font-display font-black text-xs w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#BAF6F0", color: "#033624" }}
                >
                  {i + 1}
                </span>
                <p className="font-body text-sm leading-snug pt-0.5" style={{ color: "#033624", opacity: 0.75 }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Documentos */}
        <div className="flex flex-col gap-4">
          <motion.div {...fadeUp(0.08)}>
            <div className="rounded-2xl overflow-hidden bg-white" style={{ boxShadow: "0 8px 32px rgba(3,54,36,0.10)" }}>
              <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: "#033624" }}>
                <FileText size={16} style={{ color: "#BAF6F0" }} />
                <p className="font-display font-black text-sm" style={{ color: "#BAF6F0" }}>
                  Laudo de Composição Técnica
                </p>
              </div>
              <div className="p-3">
                <ZoomableImage
                  src="/assets/images/semijoias/laudo.png"
                  alt="Exemplo de Laudo de Composição Técnica"
                  width={400}
                  height={280}
                />
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.10)}>
            <div className="rounded-2xl overflow-hidden bg-white" style={{ boxShadow: "0 8px 32px rgba(3,54,36,0.10)" }}>
              <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: "#2DCCD3" }}>
                <Award size={16} style={{ color: "#033624" }} />
                <p className="font-display font-black text-sm" style={{ color: "#033624" }}>
                  Certificado de Autenticidade
                </p>
              </div>
              <div className="p-3">
                <ZoomableImage
                  src="/assets/images/semijoias/certificado.png"
                  alt="Exemplo de Certificado de Autenticidade"
                  width={400}
                  height={280}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
      `}</style>
    </section>
  );
}
