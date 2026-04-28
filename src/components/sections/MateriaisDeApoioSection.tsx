"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink, BookOpen, Megaphone, Settings, Heart, Baby, ShieldAlert, RotateCcw, BarChart2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type MaterialItem = {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  href: string;
  accent: string;
  accentText: string;
  badge?: string;
  category: string;
};

const ITEMS: MaterialItem[] = [
  {
    id: "trilha",
    icon: BookOpen,
    label: "Trilha de Aceleração",
    description: "Guia completo da jornada de crescimento no TikTok Shop",
    href: "https://seller-br.tiktok.com/challenges/growth",
    accent: "#111111",
    accentText: "#BAF6F0",
    badge: "Início aqui",
    category: "📚 Leitura essencial",
  },
  {
    id: "pagamentos",
    icon: BarChart2,
    label: "Política de Pagamentos",
    description: "Entenda os ciclos, prazos e regras de repasse",
    href: "https://seller-br.tiktok.com/university/essay?knowledge_id=1442971112769281&role=1&course_type=1&from=search%7BcontentIdParams%7D&identity=1",
    accent: "#2DCCD3",
    accentText: "#111111",
    category: "📚 Leitura essencial",
  },
  {
    id: "campanhas",
    icon: Megaphone,
    label: "Campanhas",
    description: "Como participar e maximizar sua exposição nas campanhas",
    href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&content_id=3545348371269138&role=seller&keyword=saude&menu=feature",
    accent: "#F1204A",
    accentText: "#ffffff",
    category: "📚 Leitura essencial",
  },
  {
    id: "promocoes",
    icon: Settings,
    label: "Configurar Promoções",
    description: "Passo a passo para criar ofertas e cupons na plataforma",
    href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&content_id=354534837339905&role=seller&keyword=saude&menu=feature",
    accent: "#FBEB35",
    accentText: "#111111",
    category: "📚 Leitura essencial",
  },
  {
    id: "lingerie",
    icon: Heart,
    label: "Boas Práticas de Lingerie",
    description: "Políticas e recomendações para venda nesta categoria",
    href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&role=seller&menu=feature",
    accent: "#EDBBE8",
    accentText: "#4A0505",
    category: "📚 Leitura essencial",
  },
  {
    id: "bebe",
    icon: Baby,
    label: "Bebê & Maternidade",
    description: "Categoria exclusiva para Polos de Moda credenciados",
    href: "https://seller-br.tiktok.com/university/home?default_language=pt-BR&identity=1&role=seller&menu=feature",
    accent: "#EDBBE8",
    accentText: "#4A0505",
    category: "🏷️ Categoria especial",
  },
  {
    id: "saude",
    icon: ShieldAlert,
    label: "Saúde da Conta",
    description: "Violações, impactos e como manter sua conta em dia",
    href: "https://seller-br.tiktok.com/university/essay?knowledge_id=1444948508641040&role=1&course_type=1&from=search%7BcontentIdParams%7D&identity=1",
    accent: "#F1204A",
    accentText: "#ffffff",
    category: "🎬 Treinamento gravado",
  },
  {
    id: "devolucoes",
    icon: RotateCcw,
    label: "Reembolsos e Devoluções",
    description: "Fluxo completo de gestão de devoluções e reembolsos",
    href: "https://seller-br.tiktok.com/university/essay?knowledge_id=8943390731159218&default_language=pt-BR&identity=1",
    accent: "#111111",
    accentText: "#BAF6F0",
    category: "🎬 Treinamento gravado",
  },
  {
    id: "financeiro",
    icon: BarChart2,
    label: "Relatório Financeiro",
    description: "Como interpretar seus dados financeiros e crescimento",
    href: "https://seller-br.tiktok.com/university/essay?identity=1&role=1&knowledge_id=2494371300607761&from=course",
    accent: "#FBEB35",
    accentText: "#111111",
    category: "🎬 Treinamento gravado",
  },
];

export function MateriaisDeApoioSection() {
  return (
    <section id="materiais" className="relative overflow-hidden" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="relative z-10 w-full max-w-[430px] lg:max-w-screen-xl mx-auto px-5 lg:px-16 py-14 flex flex-col gap-10">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <span
            className="font-body text-xs font-medium px-4 py-1.5 self-start"
            style={{ backgroundColor: "#111111", color: "#ffffff", borderRadius: "999px", transform: "rotate(-2deg)", display: "inline-block" }}
          >
            📖 Central de conhecimento
          </span>

          <h2
            className="font-display font-black leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)", color: "#111111" }}
          >
            Materiais de Apoio
          </h2>

          <p className="font-body text-sm mt-1 leading-relaxed" style={{ color: "#666666" }}>
            Tudo o que você precisa para operar com confiança — {ITEMS.length} recursos selecionados.
          </p>
        </motion.div>

        {/* Accordion editorial — um item por link */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" defaultValue="trilha" collapsible className="w-full">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              const index = String(i + 1).padStart(2, "0");
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="last:border-b border-[#111111]/10"
                >
                  <AccordionTrigger
                    className={cn(
                      "text-left overflow-hidden duration-300 hover:no-underline cursor-pointer py-5",
                      "text-[#111111]/20 data-[state=open]:text-[#F1204A]",
                      "[&>svg]:hidden"
                    )}
                  >
                    <div className="flex flex-1 items-start gap-5">
                      {/* Número */}
                      <p className="font-body text-xs font-bold mt-1 tabular-nums shrink-0" style={{ color: "currentColor", opacity: 0.5 }}>
                        {index}
                      </p>

                      {/* Título + categoria */}
                      <div className="flex flex-col gap-1">
                        <h3
                          className="uppercase font-display font-black leading-[0.9] tracking-tight"
                          style={{ fontSize: "clamp(1.4rem, 5.5vw, 2.8rem)" }}
                        >
                          {item.label}
                        </h3>
                        <span className="font-body text-xs font-medium opacity-50 normal-case tracking-normal">
                          {item.category}
                          {item.badge && (
                            <span
                              className="ml-2 font-body text-[9px] font-medium px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: "#F1204A", color: "#ffffff", opacity: 1 }}
                            >
                              {item.badge}
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-7 pt-0">
                    <div className="pl-0 md:pl-14">
                      <a
                        href={item.href}
                        target={item.href.startsWith("/") ? "_self" : "_blank"}
                        rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
                        className="group flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 hover:shadow-md"
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid rgba(0,0,0,0.06)",
                        }}
                      >
                        <div
                          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                          style={{ backgroundColor: item.accent }}
                        >
                          <Icon size={16} style={{ color: item.accentText, strokeWidth: 2.2 }} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="font-display font-black text-sm leading-tight" style={{ color: "#111111" }}>
                            {item.label}
                          </p>
                          <p className="font-body text-xs mt-0.5 leading-snug" style={{ color: "#666666" }}>
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="font-body text-xs font-medium" style={{ color: "#F1204A" }}>
                            Acessar
                          </span>
                          <ExternalLink
                            size={12}
                            style={{ color: "#F1204A" }}
                          />
                        </div>
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}
