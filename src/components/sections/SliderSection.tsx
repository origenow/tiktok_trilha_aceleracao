"use client";

import { useState, useRef, useEffect } from "react";
import { ZoomableImage } from "@/components/ui/zoomable-image";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ExternalLink, ChevronRight, Tag, Truck, ChevronLeft, ChevronRight as ChevronRightNav } from "lucide-react";
import "swiper/css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.48, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
});

export function SliderSection() {
  const tabs = [
    "Abrindo sua loja",
    "Operação para iniciantes",
    "Benefícios para novos vendedores",
    "Criadores de conteúdo/Afiliados",
    "Lives"
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  }, [activeTab, swiperInstance]);

  const pauseAutoplay = () => {
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  interface SlideData {
    tag: string;
    video: string; // URL do Embed
    link: string;  // URL original para o botão
    title: string;
    description: string;
    dark: boolean;
    tiktok?: boolean;
  }

  const tabData: Record<string, SlideData[]> = {
    "Abrindo sua loja": [
      {
        tag: "Primeiro Passo",
        video: "https://www.tiktok.com/embed/v2/7502083427978595591",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7502083427978595591",
        title: "Abrir o TikTok Shop",
        description: "Os primeiros passos fundamentais para configurar seu cadastro e entender a plataforma.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Integração",
        video: "https://www.tiktok.com/embed/v2/7502198137864408328",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7502198137864408328",
        title: "Central de Aplicativos - ERPs/Hubs",
        description: "Conecte seu sistema de gestão para automatizar estoque e pedidos.",
        dark: false,
        tiktok: true,
      },
      {
        tag: "Catálogo",
        video: "https://www.tiktok.com/embed/v2/7503681930177678610",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7503681930177678610",
        title: "Publique Produtos",
        description: "Crie anúncios atraentes que seguem as diretrizes do TikTok Shop.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Perfil",
        video: "https://www.tiktok.com/embed/v2/7507025733382950150",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7507025733382950150",
        title: "Conecte o perfil do TikTok à Loja",
        description: "Vincule sua conta oficial para começar a vender diretamente nos seus vídeos e lives.",
        dark: false,
        tiktok: true,
      }
    ],
    "Operação para iniciantes": [
      {
        tag: "Fluxo",
        video: "https://www.tiktok.com/embed/v2/7507026443164044550",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7507026443164044550",
        title: "Envio de Pedidos",
        description: "Como processar as vendas e garantir que cheguem rápido ao cliente.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Legalização",
        video: "https://www.tiktok.com/embed/v2/7510041702322097413",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7510041702322097413",
        title: "MEI",
        description: "Tudo o que você precisa saber para operar legalmente como microempreendedor.",
        dark: false,
        tiktok: true,
      },
      {
        tag: "Setup",
        video: "https://www.tiktok.com/embed/v2/7510042312878198072",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7510042312878198072",
        title: "Configurações Básicas",
        description: "Checklist de configurações vitais para o sucesso da sua loja.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Financeiro",
        video: "https://www.tiktok.com/embed/v2/7525672837965679928",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7525672837965679928",
        title: "Liquidação e Pagamentos",
        description: "Prazos, taxas e como gerenciar o fluxo de caixa da sua loja.",
        dark: false,
        tiktok: true,
      },
      {
        tag: "Escala",
        video: "https://www.tiktok.com/embed/v2/7525675494965005573",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7525675494965005573",
        title: "Limites de pedidos",
        description: "Entenda como funcionam as travas iniciais e como aumentar seu volume.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Segurança",
        video: "https://www.tiktok.com/embed/v2/7525677475213446406",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7525677475213446406",
        title: "Autorização de Marcas e produtos falsos",
        description: "Como garantir a autenticidade dos produtos e evitar problemas de IP.",
        dark: false,
        tiktok: true,
      },
      {
        tag: "Transporte",
        video: "https://www.tiktok.com/embed/v2/7510044886742125829",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7510044886742125829",
        title: "Políticas de Logística",
        description: "Normas de envio, tempo de postagem e cuidados com o pacote.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Sucesso",
        video: "https://www.tiktok.com/embed/v2/7502037029195107602",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7502037029195107602",
        title: "Como vender no TikTok: 3 Pontos Chave",
        description: "Os pilares fundamentais para converter vídeos em faturamento real.",
        dark: false,
        tiktok: true,
      }
    ],
    "Benefícios para novos vendedores": [
      {
        tag: "Performance",
        video: "https://www.tiktok.com/embed/v2/7507024331042458885",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7507024331042458885",
        title: "Crescimento",
        description: "Dicas de como usar os dados a seu favor para acelerar sua jornada.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Vantagem",
        video: "https://www.tiktok.com/embed/v2/7507022765770231046",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7507022765770231046",
        title: "Frete Grátis",
        description: "Aproveite os subsídios de frete do TikTok para atrair clientes de todo o país.",
        dark: false,
        tiktok: true,
      },
      {
        tag: "Expansão",
        video: "https://www.tiktok.com/embed/v2/7502529811932400914",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7502529811932400914",
        title: "Escalar o negócio",
        description: "De 10 a 1000 pedidos: o que muda na sua operação ao escalar.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Missão",
        video: "https://www.tiktok.com/embed/v2/7553759058801577224",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7553759058801577224",
        title: "Tarefas e missões",
        description: "Complete os desafios do lojista iniciante para desbloquear cupons e ads grátis.",
        dark: false,
        tiktok: true,
      }
    ],
    "Criadores de conteúdo/Afiliados": [
      {
        tag: "Colaboração",
        video: "https://www.tiktok.com/embed/v2/7504825891302771973",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7504825891302771973",
        title: "Colabore com criadores",
        description: "Como usar o Affiliate Center para encontrar talentos que combinam com seu produto.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Amostras",
        video: "https://www.tiktok.com/embed/v2/7506172476494286136",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7506172476494286136",
        title: "Amostras Grátis",
        description: "Gestão estratégica de brindes para garantir vídeos de unboxing e review.",
        dark: false,
        tiktok: true,
      },
      {
        tag: "Modelos",
        video: "https://www.tiktok.com/embed/v2/7524246485081361670",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7524246485081361670",
        title: "Tipos",
        description: "Diferenças entre planos de comissão abertos, focados e planos de loja.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Parceria",
        video: "https://www.tiktok.com/embed/v2/7551496735319772427",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7551496735319772427",
        title: "Convites",
        description: "Como abordar criadores com convites que geram parcerias de longo prazo.",
        dark: false,
        tiktok: true,
      },
      {
        tag: "Talentos",
        video: "https://www.tiktok.com/embed/v2/7524253383537003832",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7524253383537003832",
        title: "Como escolher criadores",
        description: "Análise de métricas e nicho para garantir que seu produto chegue ao público certo.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Agências",
        video: "https://www.tiktok.com/embed/v2/7524258287731133701",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7524258287731133701",
        title: "Agências",
        description: "Quando vale a pena contratar uma MCN ou agência para gerenciar seus afiliados.",
        dark: false,
        tiktok: true,
      }
    ],
    "Lives": [
      {
        tag: "Interface",
        video: "https://www.tiktok.com/embed/v2/7517954448451177734",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7517954448451177734",
        title: "Visual da Live",
        description: "Como configurar os elementos visuais e a disposição da sua transmissão para atrair cliques.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Conteúdo",
        video: "https://www.tiktok.com/embed/v2/7519784141882166534",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7519784141882166534",
        title: "Roteiro",
        description: "Estrutura de fala e ganchos de retenção para manter o público engajado do início ao fim.",
        dark: false,
        tiktok: true,
      },
      {
        tag: "Performance",
        video: "https://www.tiktok.com/embed/v2/7520527979399646470",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7520527979399646470",
        title: "Dados da Live",
        description: "Como interpretar as métricas em tempo real para tomar decisões estratégicas durante a venda.",
        dark: true,
        tiktok: true,
      },
      {
        tag: "Conversão",
        video: "https://www.tiktok.com/embed/v2/7551806897725181202",
        link: "https://www.tiktok.com/@sellwithtiktokshop_br/video/7551806897725181202",
        title: "Oferta Relâmpago",
        description: "Técnicas de escassez e cupons exclusivos para converter visualizações em vendas imediatas.",
        dark: false,
        tiktok: true,
      }
    ]
  };

  const currentSlides = tabData[activeTab] || tabData["Abrindo sua loja"];

  return (
    <section id="acceleration-sliders" className="py-24 bg-white overflow-hidden relative z-10 w-full">
      <div className="w-full max-w-[430px] md:max-w-screen-2xl mx-auto md:px-20">
        {/* ── Seller Academy + Abrindo sua loja ─────────────────────── */}
        <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:mb-8 px-4">
          <div className="flex flex-col gap-2">
            <span
              className="font-body text-xs font-semibold px-4 py-1.5 self-start"
              style={{
                backgroundColor: "#111111",
                color: "#BAF6F0",
                borderRadius: "999px",
                transform: "rotate(-2deg)",
                display: "inline-block",
              }}
            >
              🎓 Conteúdo oficial
            </span>
            <h2 className="font-display font-black leading-tight" style={{ fontSize: "clamp(1.6rem, 7vw, 2.5rem)", color: "#111111" }}>
              Seller Academy
            </h2>
            <p className="font-body text-sm md:text-base leading-snug" style={{ color: "#4A0505", opacity: 0.7 }}>
              Saiba tudo sobre TikTok Shop — do cadastro à escala.
            </p>
          </div>

          {/* CTA Seller Academy */}
          <motion.a
            {...fadeUp(0.08)}
            href="https://seller-br.tiktok.com/university/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl p-5 md:p-4 md:px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #111111 0%, #333333 100%)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.20)",
            }}
          >
            <div
              className="shrink-0 w-12 h-12 md:w-8 md:h-8 rounded-2xl md:rounded-lg flex items-center justify-center text-2xl md:text-sm"
              style={{ backgroundColor: "rgba(186,246,240,0.1)" }}
            >
              🎓
            </div>
            <div className="flex-1 md:flex-none">
              <p className="font-display font-black text-sm md:text-base" style={{ color: "#BAF6F0" }}>Acessar Academy</p>
              <p className="font-body text-xs mt-0.5 md:hidden" style={{ color: "rgba(186,246,240,0.5)" }}>Treinamentos oficiais</p>
            </div>
            <div
              className="shrink-0 w-8 h-8 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(186,246,240,0.1)" }}
            >
              <ExternalLink size={14} style={{ color: "#BAF6F0" }} />
            </div>
          </motion.a>
        </motion.div>

        {/* Grid de Informações - Cards Profissionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6 mb-12 px-4">
          {/* Políticas */}
          <motion.a
            {...fadeUp(0.18)}
            href="https://seller-br.tiktok.com/university/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl p-6 transition-all duration-300 md:hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #e0fdfb 0%, #BAF6F0 100%)",
              border: "1.5px solid #2DCCD3",
              boxShadow: "0 4px 16px rgba(45,204,211,0.18)",
            }}
          >
            <div
              className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
              style={{ backgroundColor: "#2DCCD3", boxShadow: "0 3px 10px rgba(45,204,211,0.4)" }}
            >
              📋
            </div>
            <div className="flex-1">
              <p className="font-display font-black text-sm md:text-base text-[#111111]">Políticas</p>
              <p className="font-body text-xs mt-0.5 text-[#111111]/60">Regras e termos da plataforma</p>
            </div>
            <div
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: "#2DCCD3" }}
            >
              <ExternalLink size={14} style={{ color: "#111111" }} />
            </div>
          </motion.a>

          {/* Comissão */}
          <motion.div
            {...fadeUp(0.22)}
            className="group relative rounded-3xl p-6 flex flex-col gap-1 overflow-hidden transition-all duration-300 md:hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "linear-gradient(145deg, #F1204A 0%, #c01038 100%)",
              boxShadow: "0 6px 22px rgba(241,32,74,0.38)",
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                <Tag size={16} style={{ color: "#ffffff" }} />
              </div>
              <p className="font-body text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">
                Comissão
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="font-display font-black text-4xl md:text-5xl text-white">6%</p>
              <p className="font-body text-[10px] font-bold text-white/50">+ R$ 4,00</p>
            </div>
            <p className="font-body text-[10px] mt-1 text-white/40">por item vendido</p>
          </motion.div>

          {/* Frete */}
          <motion.div
            {...fadeUp(0.26)}
            className="group relative rounded-3xl p-6 flex flex-col gap-1 overflow-hidden transition-all duration-300 md:hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "linear-gradient(145deg, #111111 0%, #333333 100%)",
              boxShadow: "0 6px 22px rgba(0,0,0,0.25)",
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#2DCCD3]/5 rounded-full -mr-8 -mt-8" />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(45,204,211,0.2)" }}>
                <Truck size={16} style={{ color: "#2DCCD3" }} />
              </div>
              <p className="font-body text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#2DCCD3]">
                Frete
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="font-display font-black text-4xl md:text-5xl text-white">6%</p>
            </div>
            <p className="font-body text-[10px] mt-1 text-white/40">sobre o valor total</p>
          </motion.div>
        </div>

        {/* Nota de isenção - Estilo Card Premium */}
        <motion.div
          {...fadeUp(0.28)}
          className="rounded-3xl p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 relative overflow-hidden mt-8 mb-28 transition-all duration-300 hover:shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #FBEB35 0%, #f5e020 100%)",
            boxShadow: "0 12px 40px rgba(251,235,53,0.3)",
          }}
        >
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full opacity-[0.05]" style={{ backgroundColor: "#111111" }} />

          <div className="flex-1 flex flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">💡</span>
                <p className="font-display font-black text-xl md:text-3xl text-[#111111]">Isenção de comissão por 60 dias</p>
              </div>
              <p className="font-body text-sm md:text-base leading-relaxed text-[#111111]/70">
                Ative a isenção antes da sua primeira venda e potencialize seu lucro inicial.
              </p>
            </div>

            <div
              className="flex items-center gap-2 flex-wrap rounded-2xl px-4 py-2.5 w-fit"
              style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
            >
              <span className="font-body text-xs md:text-sm font-semibold text-[#111111]">Central do vendedor</span>
              <ChevronRight size={14} className="text-[#111111]/40" />
              <span className="font-body text-xs md:text-sm font-semibold text-[#111111]">Crescimento</span>
              <ChevronRight size={14} className="text-[#111111]/40" />
              <span className="font-body text-xs md:text-sm font-black px-4 py-1 rounded-full bg-[#F1204A] text-white">Minhas Missões</span>
            </div>
          </div>

          <div className="md:w-[40%] shrink-0 z-10 transition-transform duration-500 hover:scale-[1.02]">
            <img src="/assets/isencao.png" alt="Como ativar isenção de comissão"
              width={600} height={380} className="rounded-2xl shadow-xl border-4 border-white/20 w-full h-auto" />
          </div>
        </motion.div>




        {/* Container de Tabs */}
        <motion.div {...fadeUp(0.1)} className="w-full px-4 mb-12 flex items-center justify-start md:justify-center gap-4 overflow-x-auto no-scrollbar md:flex-wrap pb-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 group"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabSlider"
                    className="absolute inset-0 rounded-full shadow-lg shadow-[#033624]/20"
                    style={{ backgroundColor: "#033624" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-[#BAF6F0]" : "text-[#033624] group-hover:text-[#033624]/70"
                  }`}>
                  {tab}
                </span>
                {!isActive && (
                  <div className="absolute inset-0 rounded-full border border-[#033624]/10 group-hover:border-[#033624]/30 transition-all duration-300 group-hover:bg-[#033624]/5" />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Slider */}
        <motion.div {...fadeUp(0.15)} className="w-full px-4 relative md:px-0">
          {/* Efeito de Blur + Fade nas bordas (Desktop) - Suavizado */}
          <div className="hidden md:block absolute -left-10 top-0 bottom-0 w-40 z-20 pointer-events-none bg-gradient-to-r from-white via-white/30 to-transparent" />
          <div className="hidden md:block absolute -right-10 top-0 bottom-0 w-40 z-20 pointer-events-none bg-gradient-to-l from-white via-white/30 to-transparent" />

          {/* Seta esquerda */}
          <button
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Card anterior"
            className="absolute left-0 md:-left-12 top-[calc(50%-2.5rem)] md:top-[calc(50%-1.5rem)] -translate-y-1/2 z-30 w-9 md:w-14 h-9 md:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 hover:scale-110 border border-white/10"
            style={{ backgroundColor: "rgba(3,54,36,0.98)", color: "#BAF6F0" }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Seta direita */}
          <button
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Próximo card"
            className="absolute right-0 md:-right-12 top-[calc(50%-2.5rem)] md:top-[calc(50%-1.5rem)] -translate-y-1/2 z-30 w-9 md:w-14 h-9 md:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 hover:scale-110 border border-white/10"
            style={{ backgroundColor: "rgba(3,54,36,0.98)", color: "#BAF6F0" }}
          >
            <ChevronRightNav size={24} />
          </button>

          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              }
            }}
            centeredSlides={false}
            loop={false}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="mySwiper !pb-10 md:!px-10"
          >
            {currentSlides.map((slide, i) => (
              <SwiperSlide key={`${activeTab}-${i}`} className="h-auto">
                <div
                  className={`flex flex-col h-full rounded-2xl p-6 transition-all duration-500 group min-h-[520px] md:bg-transparent md:p-0 md:min-h-0 ${slide.dark ? "bg-black text-white" : "bg-[#f4f5f5] text-black"}`}
                  onPointerDown={pauseAutoplay}
                >
                  {/* Tag Superior */}
                  <h4 className={`font-bold text-sm mb-6 md:mb-3 md:text-[#033624]/60 md:uppercase md:tracking-widest md:text-[10px] ${slide.dark ? "text-gray-300" : "text-gray-600"}`}>
                    {slide.tag}
                  </h4>

                  {/* Vídeo Vertical */}
                  <div className="relative w-full aspect-[9/16] mb-6 md:mb-5 rounded-xl md:rounded-[24px] overflow-hidden shadow-2xl md:shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:group-hover:-translate-y-2 transition-all duration-500 bg-gray-900">
                    {slide.tiktok ? (
                      <TikTokEmbed src={slide.video} />
                    ) : (
                      <video
                        src={slide.video}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        loop
                        muted
                        onPlay={pauseAutoplay}
                      />
                    )}
                  </div>

                  {/* Textos Inferiores */}
                  <h3 className="font-bold text-xl md:text-lg md:font-black leading-tight mb-3 md:mb-2 md:text-[#033624]">
                    {slide.title}
                  </h3>
                  <p className={`text-sm leading-snug mb-8 md:mb-6 md:text-[#033624]/70 md:leading-relaxed ${slide.dark ? "text-gray-300" : "text-gray-700"}`}>
                    {slide.description}
                  </p>

                  {/* Link Assistir Agora */}
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-1 hover:opacity-80 transition-all w-fit md:mt-0 md:group-hover:translate-x-1"
                    onClick={pauseAutoplay}
                  >
                    <span className={`font-bold text-sm leading-none md:text-[#033624] md:border-b-2 md:border-[#033624]/10 md:pb-1 md:group-hover:border-[#033624] ${slide.dark ? "text-white" : "text-black"}`}>
                      Assistir agora
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`mt-[1px] md:text-[#033624] ${slide.dark ? "text-white" : "text-black"}`}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      ` }} />
    </section>
  );
}

function TikTokEmbed({ src }: { src: string }) {
  const [activated, setActivated] = useState(false);
  const startX = useRef(0);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black group/video">
      {/* Mantemos o SRC para mostrar a capa original, mas controlamos o autoplay via permissões e KEY */}
      <iframe
        key={activated ? "active" : "inactive"}
        src={src}
        className={`border-0 absolute inset-0 w-full h-full transition-opacity duration-700 ${activated ? "opacity-100" : "opacity-80 md:opacity-90"}`}
        style={{ width: "calc(100% + 18px)", height: "100%", left: 0, top: 0 }}
        // Adicionamos permissões extras para garantir o funcionamento do áudio e outros recursos
        allow={activated ? "autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen; web-share" : "clipboard-write; encrypted-media; picture-in-picture"}
        allowFullScreen
      />

      {!activated && (
        <div
          className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/10"
          onPointerDown={(e) => { startX.current = e.clientX; }}
          onPointerUp={(e) => {
            if (Math.abs(e.clientX - startX.current) < 8) {
              setActivated(true);
            }
          }}
        >
          {/* Botão Play Central - Suave */}
          <div className="flex w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center scale-90 group-hover/video:scale-100 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#033624" className="ml-1">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
