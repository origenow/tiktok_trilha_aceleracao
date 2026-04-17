"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { HighlightedText } from "@/components/ui/highlighted-text";
import {
  Zap, ChevronDown, ChevronLeft, ChevronRight,
  AlertCircle, CheckCircle2, DollarSign, Clock,
  ToggleRight, Settings, Calendar, Info,
  ArrowUpRight, ExternalLink, BookOpen,
} from "lucide-react";

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

/* ── Accordion item ──────────────────────────────────────────────── */
function AccordionItem({
  icon: Icon,
  title,
  children,
  defaultOpen = false,
  accentColor = "#2DCCD3",
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ boxShadow: open ? "0 4px 20px rgba(3,54,36,0.12)" : "0 2px 8px rgba(3,54,36,0.06)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors duration-200"
        style={{ backgroundColor: open ? "#033624" : "#ffffff" }}>
        <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: open ? "rgba(186,246,240,0.15)" : accentColor + "22" }}>
          <Icon size={15} style={{ color: open ? "#BAF6F0" : accentColor }} />
        </div>
        <span className="flex-1 font-display font-black text-sm leading-snug"
          style={{ color: open ? "#BAF6F0" : "#033624" }}>
          {title}
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
            <div className="px-4 pb-4 pt-3" style={{ backgroundColor: "#f0fdfb" }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Info row ────────────────────────────────────────────────────── */
function InfoRow({ text, indent = false }: { text: string; indent?: boolean }) {
  return (
    <div className={`flex items-start gap-2 ${indent ? "pl-5" : ""}`}>
      <CheckCircle2 size={12} className="shrink-0 mt-0.5" style={{ color: "#2DCCD3" }} />
      <p className="font-body text-xs leading-relaxed" style={{ color: "#4A0505" }}>{text}</p>
    </div>
  );
}

/* ── Sub-bullet ──────────────────────────────────────────────────── */
function SubBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 pl-4">
      <div className="shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: "#2DCCD3" }} />
      <p className="font-body text-xs leading-relaxed" style={{ color: "#4A0505" }}>{text}</p>
    </div>
  );
}

/* ── Demo Step ───────────────────────────────────────────────────── */
function DemoStep({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full flex items-center justify-center font-display font-black text-xs shrink-0"
          style={{ background: "linear-gradient(135deg, #F1204A, #c01038)", color: "#ffffff" }}>
          {step}
        </div>
        <p className="font-display font-black text-sm" style={{ color: "#033624" }}>{title}</p>
      </div>
      {children}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export function EntregaMaximaSection() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#BAF6F0" }}>
        {/* Doodles */}
        <svg className="absolute top-6 right-4 opacity-30 pointer-events-none animate-float"
          width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M26 3L30.3 18.7L45 15L35.8 26L45 37L30.3 33.3L26 49L21.7 33.3L7 37L16.2 26L7 15L21.7 18.7Z"
            stroke="#033624" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        <svg className="absolute bottom-8 left-3 opacity-20 pointer-events-none animate-float-reverse"
          width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="8" stroke="#F1204A" strokeWidth="1.8" fill="none" />
          {[0, 72, 144, 216, 288].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = (20 + 10 * Math.cos(rad)).toFixed(2);
            const cy = (20 + 10 * Math.sin(rad)).toFixed(2);
            return (
              <ellipse key={angle} cx={cx} cy={cy} rx="3" ry="4.5"
                transform={`rotate(${angle}, ${cx}, ${cy})`}
                stroke="#F1204A" strokeWidth="1.5" fill="none" opacity="0.6" />
            );
          })}
        </svg>

        <div className="relative z-10 w-full max-w-[430px] mx-auto px-5 pt-10 pb-14 flex flex-col gap-5">

          {/* Back link */}
          <motion.a {...fadeUp(0)} href="/gmv-max"
            className="inline-flex items-center gap-1.5 font-body text-xs font-semibold w-fit"
            style={{ color: "#033624", opacity: 0.6 }}>
            <ChevronLeft size={13} />
            Voltar para GMV Max
          </motion.a>

          <motion.div {...fadeUp(0.06)} className="flex flex-col gap-3">
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 self-start"
              style={{ backgroundColor: "#033624", color: "#BAF6F0", borderRadius: "999px", transform: "rotate(-3deg)" }}>
              <Zap size={11} />
              Max Delivery
            </span>

            <h1 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2rem, 8vw, 2.8rem)", color: "#033624" }}>
              Entrega{" "}
              <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.12}>
                Máxima
              </HighlightedText>
            </h1>

            <p className="font-body text-sm leading-relaxed" style={{ color: "#4A0505", opacity: 0.8 }}>
              Modo de otimização que maximiza a receita bruta do produto selecionado — sem limite de ROI, com orçamento separado e programação flexível.
            </p>
          </motion.div>

          {/* Overview cards */}
          <motion.div {...fadeUp(0.12)} className="grid grid-cols-2 gap-2.5">
            {[
              { icon: ToggleRight, label: "Alternável a qualquer momento", color: "#2DCCD3" },
              { icon: DollarSign, label: "Orçamento adicional e separado", color: "#F1204A" },
              { icon: Calendar, label: "Programação com início e término", color: "#033624" },
              { icon: Zap, label: "Maximiza receita bruta", color: "#4A0505" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex flex-col gap-2 rounded-2xl p-3.5"
                style={{ backgroundColor: "rgba(3,54,36,0.07)" }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: color }}>
                  <Icon size={14} style={{ color: color === "#033624" || color === "#4A0505" ? "#BAF6F0" : color === "#F1204A" ? "#ffffff" : "#033624" }} />
                </div>
                <p className="font-body text-xs leading-snug" style={{ color: "#033624" }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          REGRAS GERAIS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-5">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: "#2DCCD3", color: "#033624", borderRadius: "999px", transform: "rotate(-2deg)" }}>
              <Info size={11} />
              Regras gerais
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: "#033624" }}>
              Como{" "}
              <HighlightedText highlightColor="#2DCCD3" from="bottom" inView delay={0.12}>
                funciona
              </HighlightedText>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.06)} className="flex flex-col gap-2">
            <AccordionItem icon={ToggleRight} title="Alternando entre Meta de ROI e Entrega Máxima" defaultOpen accentColor="#2DCCD3">
              <div className="flex flex-col gap-2">
                <p className="font-body text-xs leading-relaxed" style={{ color: "#4A0505" }}>
                  Por padrão, o modo <strong>Meta de ROI</strong> é aplicado a cada produto. Os vendedores podem alternar entre Meta de ROI e Entrega Máxima a qualquer momento.
                </p>
                <div className="flex flex-col gap-1.5 mt-1">
                  <InfoRow text="A troca é feita no nível do ID do produto (SPU ID)" />
                  <InfoRow text="A cada vez, é possível selecionar apenas UM produto por campanha GMV Max para ativar a Entrega Máxima" />
                  <InfoRow text="Se o agendamento terminar, o produto volta automaticamente para o modo Meta de ROI — mas o vendedor pode reativá-la" />
                </div>
              </div>
            </AccordionItem>

            <AccordionItem icon={DollarSign} title="Orçamento extra obrigatório" accentColor="#F1204A">
              <div className="flex flex-col gap-1.5">
                <InfoRow text="Ao ativar a Entrega Máxima, é necessário adicionar orçamento extra — que será totalmente utilizado para maximizar a receita bruta" />
                <InfoRow text="Os vendedores podem editar as configurações da Entrega Máxima durante o período agendado" />
              </div>
            </AccordionItem>

            <AccordionItem icon={Clock} title="Comportamento antes e depois do agendamento" accentColor="#033624">
              <div className="flex flex-col gap-1.5">
                <InfoRow text="Antes do início do agendamento, o modo permanece como Meta de ROI. O vendedor pode esperar o início ou editar/redefinir" />
                <InfoRow text="Se o agendamento terminar, é necessário criar um novo agendamento e ativar novamente para usar a Entrega Máxima" />
              </div>
            </AccordionItem>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PASSO A PASSO — DEMONSTRAÇÃO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#EDD4B2" }}>
        <svg className="absolute top-8 right-5 opacity-20 pointer-events-none animate-float"
          width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M22 4C22 4 26 14 36 18C26 22 22 32 22 32C22 32 18 22 8 18C18 14 22 4 22 4Z"
            stroke="#033624" strokeWidth="2" strokeLinejoin="round" />
        </svg>

        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-7">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: "#F1204A", color: "#ffffff", borderRadius: "999px", transform: "rotate(2deg)" }}>
              <Settings size={11} />
              Demonstração
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: "#033624" }}>
              Passo a{" "}
              <HighlightedText highlightColor="#F1204A" from="bottom" inView delay={0.12}>
                passo
              </HighlightedText>
            </h2>
          </motion.div>

          {/* Passo 1 */}
          <motion.div {...fadeUp(0.06)}>
            <DemoStep step={1} title="Acesse os detalhes da campanha ativa">
              <p className="font-body text-xs leading-relaxed pl-9" style={{ color: "#4A0505", opacity: 0.8 }}>
                Para ativar o modo Entrega Máxima, clique no botão <strong>"Exibir Detalhes"</strong> de uma campanha ativa no Ads Manager.
              </p>
              <div className="rounded-2xl overflow-hidden mt-2.5" style={{ boxShadow: "0 4px 16px rgba(3,54,36,0.12)" }}>
                <Image src="/assets/images/max_delivery/p1.png" alt="Lista de campanhas — clicar em Exibir Detalhes"
                  width={400} height={240} className="w-full h-auto object-cover" />
              </div>
            </DemoStep>
          </motion.div>

          {/* Passo 2 */}
          <motion.div {...fadeUp(0.10)}>
            <DemoStep step={2} title="Selecione o produto e alterne o modo">
              <p className="font-body text-xs leading-relaxed pl-9" style={{ color: "#4A0505", opacity: 0.8 }}>
                Selecione o produto para o qual deseja ativar a função e clique para alternar entre <strong>Meta de ROI</strong> e <strong>Entrega Máxima</strong>.
              </p>
              <div className="rounded-2xl overflow-hidden mt-2.5" style={{ boxShadow: "0 4px 16px rgba(3,54,36,0.12)" }}>
                <Image src="/assets/images/max_delivery/p2.png" alt="Relatório de produtos e criativos — alternar modo de otimização"
                  width={400} height={240} className="w-full h-auto object-cover" />
              </div>
            </DemoStep>
          </motion.div>

          {/* Passo 3 */}
          <motion.div {...fadeUp(0.14)}>
            <DemoStep step={3} title="Configure o orçamento e a programação">
              <p className="font-body text-xs leading-relaxed pl-9" style={{ color: "#4A0505", opacity: 0.8 }}>
                Defina o orçamento separado e o período de vigência da Entrega Máxima para o produto selecionado.
              </p>
              <div className="rounded-2xl overflow-hidden mt-2.5" style={{ boxShadow: "0 4px 16px rgba(3,54,36,0.12)" }}>
                <Image src="/assets/images/max_delivery/p3.png" alt="Gerenciar modo de otimização — orçamento e programação"
                  width={400} height={260} className="w-full h-auto object-cover" />
              </div>
            </DemoStep>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONFIGURAR ORÇAMENTO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#BAF6F0" }}>
        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-5">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: "#4A0505", color: "#EDD4B2", borderRadius: "999px", transform: "rotate(-2deg)" }}>
              <DollarSign size={11} />
              Orçamento
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: "#033624" }}>
              Configurar{" "}
              <HighlightedText highlightColor="#4A0505" from="bottom" inView delay={0.12}>
                orçamento
              </HighlightedText>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.06)} className="flex flex-col gap-3">

            {/* Card principal */}
            <div className="rounded-2xl p-1.5"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(3,54,36,0.08)" }}>

              <div className="px-3.5 pt-3.5 pb-2.5 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F1204A" }}>
                  <DollarSign size={14} style={{ color: "#ffffff" }} />
                </div>
                <div>
                  <p className="font-display font-black text-sm" style={{ color: "#033624" }}>Orçamento separado por produto</p>
                  <p className="font-body text-xs mt-0.5 leading-relaxed" style={{ color: "#4A0505", opacity: 0.7 }}>
                    Os vendedores precisam definir um orçamento separado para cada produto com Entrega Máxima ativada.
                  </p>
                </div>
              </div>

              <div className="border-t mx-3.5" style={{ borderColor: "rgba(3,54,36,0.06)" }} />

              <div className="flex flex-col gap-2 px-3.5 py-3">
                <p className="font-body text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#4A0505", opacity: 0.45 }}>Regras</p>
                <InfoRow text="O orçamento é diário" />
                <InfoRow text="É um valor adicional ao orçamento da campanha — não substitui" />
                <SubBullet text="Orçamento mínimo: US$ 10 (ou equivalente na moeda da conta)" />
                <InfoRow text="O orçamento pode ser editado enquanto o modo de Entrega Máxima estiver ativado" />
              </div>
            </div>

            {/* Aviso de redução */}
            <div className="flex items-start gap-3 rounded-2xl p-4"
              style={{ backgroundColor: "#FFF9E6", border: "2px solid #FBEB3560" }}>
              <AlertCircle size={14} className="shrink-0 mt-0.5" style={{ color: "#4A0505" }} />
              <div>
                <p className="font-display font-black text-xs" style={{ color: "#4A0505" }}>Ao reduzir o orçamento</p>
                <p className="font-body text-xs leading-relaxed mt-0.5" style={{ color: "#4A0505", opacity: 0.75 }}>
                  Recomenda-se que o novo valor não seja inferior a <strong>105% do custo do dia atual</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONFIGURAR PROGRAMAÇÃO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
        <svg className="absolute top-8 left-3 opacity-20 pointer-events-none animate-float-reverse"
          width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="11" stroke="#033624" strokeWidth="2" />
          <circle cx="24" cy="24" r="20" stroke="#033624" strokeWidth="1.2" strokeDasharray="4 3" />
        </svg>

        <div className="w-full max-w-[430px] mx-auto px-5 py-12 flex flex-col gap-5">

          <motion.div {...fadeUp(0)}>
            <span className="font-body text-xs font-semibold px-4 py-1.5 inline-flex items-center gap-1.5 mb-3"
              style={{ backgroundColor: "#033624", color: "#BAF6F0", borderRadius: "999px", transform: "rotate(2deg)" }}>
              <Calendar size={11} />
              Programação
            </span>
            <h2 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)", color: "#033624" }}>
              Configurar{" "}
              <HighlightedText highlightColor="#2DCCD3" from="bottom" inView delay={0.12}>
                programação
              </HighlightedText>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.06)} className="flex flex-col gap-3">

            {/* Padrão */}
            <div className="rounded-2xl p-4 flex flex-col gap-2"
              style={{ backgroundColor: "#f0fdfb", border: "1.5px solid #2DCCD340" }}>
              <div className="flex items-center gap-2">
                <Clock size={13} style={{ color: "#2DCCD3" }} />
                <p className="font-display font-black text-xs" style={{ color: "#033624" }}>Comportamento padrão</p>
              </div>
              <InfoRow text="O horário de início é o horário atual, e o término é preenchido automaticamente como 23:59 do mesmo dia" />
              <InfoRow text="O horário de término pode ser editado enquanto a Entrega Máxima estiver ativa — mas o horário de início não pode ser alterado" />
            </div>

            {/* Horário de início */}
            <div className="rounded-2xl p-1.5"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(3,54,36,0.08)" }}>
              <div className="px-3.5 pt-3 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#2DCCD3" }}>
                    <ArrowUpRight size={11} style={{ color: "#033624" }} />
                  </div>
                  <p className="font-display font-black text-xs" style={{ color: "#033624" }}>Horário de início</p>
                </div>
              </div>
              <div className="px-3.5 pb-3.5 border-t" style={{ borderColor: "rgba(3,54,36,0.06)" }}>
                <div className="pt-2.5">
                  <InfoRow text="Deve ser igual ou posterior ao horário de início da campanha" />
                </div>
              </div>
            </div>

            {/* Horário de término */}
            <div className="rounded-2xl p-1.5"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(3,54,36,0.08)" }}>
              <div className="px-3.5 pt-3 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#4A0505" }}>
                    <ChevronRight size={11} style={{ color: "#EDD4B2" }} />
                  </div>
                  <p className="font-display font-black text-xs" style={{ color: "#033624" }}>Horário de término</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-3.5 pb-3.5 border-t pt-2.5" style={{ borderColor: "rgba(3,54,36,0.06)" }}>
                <InfoRow text="É opcional — o vendedor pode cancelar o término para que a Entrega Máxima continue até o fim da campanha" />
                <InfoRow text="Se definido, deve ser igual ou anterior ao horário de término da campanha" />
                <InfoRow text="Quando o horário de término for atingido, o produto volta automaticamente para o modo Meta de ROI" />
              </div>
            </div>

            {/* Aviso final */}
            <div className="flex items-start gap-3 rounded-2xl p-4"
              style={{ background: "linear-gradient(135deg, #033624, #055a3a)", boxShadow: "0 6px 24px rgba(3,54,36,0.22)" }}>
              <AlertCircle size={14} className="shrink-0 mt-0.5" style={{ color: "#2DCCD3" }} />
              <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(186,246,240,0.85)" }}>
                Antes do início do agendamento, o modo permanece como Meta de ROI. Se o agendamento expirar, crie um novo para reativar a Entrega Máxima.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LINKS
      ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#EDD4B2" }}>
        <div className="w-full max-w-[430px] mx-auto px-5 py-10 flex flex-col gap-4">
          <motion.div {...fadeUp(0)}>
            <p className="font-display font-black text-sm" style={{ color: "#033624" }}>Recursos relacionados</p>
          </motion.div>
          <div className="flex flex-col gap-2.5">
            <motion.a {...fadeUp(0.05)}
              href="https://ads.tiktok.com/i18n/gmv-max/welcome?aadvid=7510325651095470096"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F1204A 0%, #c01038 100%)", boxShadow: "0 4px 16px rgba(241,32,74,0.25)" }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                <ArrowUpRight size={14} style={{ color: "#ffffff" }} />
              </div>
              <div className="flex-1">
                <p className="font-display font-black text-sm" style={{ color: "#ffffff" }}>Ads Manager — GMV Max</p>
                <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>Ativar a Entrega Máxima nas campanhas</p>
              </div>
              <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" style={{ color: "#ffffff" }} />
            </motion.a>

            <motion.a {...fadeUp(0.10)}
              href="/gmv-max"
              className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#ffffff", border: "2px solid rgba(3,54,36,0.12)", boxShadow: "0 2px 10px rgba(3,54,36,0.06)" }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#033624" }}>
                <BookOpen size={14} style={{ color: "#BAF6F0" }} />
              </div>
              <div className="flex-1">
                <p className="font-display font-black text-sm" style={{ color: "#033624" }}>Guia completo GMV Max</p>
                <p className="font-body text-xs" style={{ color: "rgba(74,5,5,0.5)" }}>Voltar para o guia principal</p>
              </div>
              <ChevronRight size={12} className="opacity-30 group-hover:opacity-70" style={{ color: "#033624" }} />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}
