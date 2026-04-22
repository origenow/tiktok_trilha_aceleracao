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
    <section id="acceleration-sliders" className="py-12 bg-white overflow-hidden relative z-10 w-full">
      <div className="w-full max-w-[430px] lg:max-w-screen-xl mx-auto">
      {/* ── Seller Academy + Abrindo sua loja ─────────────────────── */}
      <div className="px-4 mb-10 flex flex-col gap-4">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="flex flex-col gap-2">
          <span
            className="font-body text-xs font-semibold px-4 py-1.5 self-start"
            style={{
              backgroundColor: "#033624",
              color: "#BAF6F0",
              borderRadius: "999px",
              transform: "rotate(-2deg)",
              display: "inline-block",
            }}
          >
            🎓 Conteúdo oficial
          </span>
          <h2 className="font-display font-black leading-tight" style={{ fontSize: "clamp(1.6rem, 7vw, 2rem)", color: "#033624" }}>
            Seller Academy
          </h2>
          <p className="font-body text-sm leading-snug" style={{ color: "#4A0505", opacity: 0.7 }}>
            Saiba tudo sobre TikTok Shop — do cadastro à escala.
          </p>
        </motion.div>

        {/* CTA Seller Academy */}
        <motion.a
          {...fadeUp(0.08)}
          href="https://seller-br.tiktok.com/university/home"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #033624 0%, #055a3a 100%)",
            boxShadow: "0 6px 24px rgba(3,54,36,0.30)",
          }}
        >
          <div
            className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: "rgba(186,246,240,0.15)" }}
          >
            🎓
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-black text-sm" style={{ color: "#BAF6F0" }}>Acessar Seller Academy</p>
            <p className="font-body text-xs mt-0.5" style={{ color: "rgba(186,246,240,0.5)" }}>Treinamentos oficiais TikTok Shop</p>
          </div>
          <div
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
            style={{ backgroundColor: "rgba(186,246,240,0.15)" }}
          >
            <ExternalLink size={14} style={{ color: "#BAF6F0" }} />
          </div>
        </motion.a>

        {/* Divider */}
        <motion.div {...fadeUp(0.14)} className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(3,54,36,0.12)" }} />
          <span className="font-body text-[10px] font-bold uppercase tracking-widest" style={{ color: "#033624", opacity: 0.45 }}>Abrindo sua loja</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(3,54,36,0.12)" }} />
        </motion.div>

        {/* Container Desktop para Políticas + Taxas */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 w-full mt-2 lg:mt-4">
          {/* Políticas */}
          <motion.a
            {...fadeUp(0.18)}
            href="https://seller-br.tiktok.com/university/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 rounded-2xl px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:flex-1 h-full"
            style={{
              background: "linear-gradient(135deg, #e0fdfb 0%, #BAF6F0 100%)",
              border: "1.5px solid #2DCCD3",
              boxShadow: "0 4px 16px rgba(45,204,211,0.18)",
            }}
          >
          <div
            className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-lg"
            style={{ backgroundColor: "#2DCCD3", boxShadow: "0 3px 10px rgba(45,204,211,0.4)" }}
          >
            📋
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-black text-sm" style={{ color: "#033624" }}>Políticas da Plataforma</p>
            <p className="font-body text-xs mt-0.5" style={{ color: "#033624", opacity: 0.55 }}>Regras e termos para vender no TikTok Shop</p>
          </div>
          <div
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
            style={{ backgroundColor: "#2DCCD3" }}
          >
            <ExternalLink size={12} style={{ color: "#033624" }} />
          </div>
        </motion.a>

        {/* Taxas — 2 colunas */}
        <motion.div {...fadeUp(0.22)} className="grid grid-cols-2 gap-3 lg:gap-4 lg:flex-[2] h-full">
          {/* Comissão */}
          <div
            className="rounded-2xl p-4 flex flex-col gap-1.5 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #F1204A 0%, #c01038 100%)",
              boxShadow: "0 6px 22px rgba(241,32,74,0.38)",
            }}
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10 bg-white" />
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-0.5"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <Tag size={15} style={{ color: "#ffffff" }} />
            </div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.75)" }}>
              Comissão TikTok
            </p>
            <p className="font-display font-black leading-none" style={{ fontSize: "2.2rem", color: "#ffffff" }}>
              6%
            </p>
            <p className="font-body text-[10px]" style={{ color: "rgba(255,255,255,0.65)" }}>
              + R$ 4,00 por item
            </p>
          </div>
          {/* Frete */}
          <div
            className="rounded-2xl p-4 flex flex-col gap-1.5 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #033624 0%, #055a3a 100%)",
              boxShadow: "0 6px 22px rgba(3,54,36,0.35)",
            }}
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10" style={{ backgroundColor: "#2DCCD3" }} />
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-0.5"
              style={{ backgroundColor: "rgba(45,204,211,0.2)" }}
            >
              <Truck size={15} style={{ color: "#2DCCD3" }} />
            </div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-wide" style={{ color: "rgba(186,246,240,0.7)" }}>
              Taxa de Frete
            </p>
            <p className="font-display font-black leading-none" style={{ fontSize: "2.2rem", color: "#BAF6F0" }}>
              6%
            </p>
            <p className="font-body text-[10px]" style={{ color: "rgba(186,246,240,0.6)" }}>
              sobre o pedido
            </p>
          </div>
        </motion.div>
        </div>

        {/* Nota de isenção */}
        <motion.div
          {...fadeUp(0.28)}
          className="rounded-2xl p-5 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 relative overflow-hidden mt-2 lg:mt-4"
          style={{
            background: "linear-gradient(135deg, #FBEB35 0%, #f5e020 100%)",
            boxShadow: "0 6px 24px rgba(251,235,53,0.45)",
          }}
        >
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-10" style={{ backgroundColor: "#033624" }} />
          
          <div className="flex-1 flex flex-col gap-4 relative z-10">
            <div className="flex items-start gap-3">
              <span style={{ fontSize: "1.75rem", lineHeight: 1, marginTop: "2px" }}>💡</span>
              <div className="flex flex-col gap-1">
                <p className="font-display font-black text-sm lg:text-xl" style={{ color: "#033624" }}>Isenção de comissão por 60 dias</p>
                <p className="font-body text-xs lg:text-sm leading-relaxed" style={{ color: "#033624", opacity: 0.72 }}>
                  Ative a isenção de comissão antes da sua primeira venda.
                </p>
              </div>
            </div>
            
            <div
              className="flex items-center gap-1 flex-wrap rounded-xl px-3 py-2 w-fit mt-1 lg:mt-2"
              style={{ backgroundColor: "rgba(3,54,36,0.12)" }}
            >
              <span className="font-body text-[10px] lg:text-xs font-semibold" style={{ color: "#033624" }}>Central do vendedor</span>
              <ChevronRight size={12} style={{ color: "#033624", opacity: 0.6 }} />
              <span className="font-body text-[10px] lg:text-xs font-semibold" style={{ color: "#033624" }}>Crescimento</span>
              <ChevronRight size={12} style={{ color: "#033624", opacity: 0.6 }} />
              <span className="font-body text-[10px] lg:text-xs font-black px-2.5 py-0.5 rounded-full" style={{ backgroundColor: "#F1204A", color: "#ffffff" }}>Minhas Missões</span>
            </div>
          </div>
          
          <div className="lg:w-[45%] shrink-0 z-10 lg:-mr-4 mt-2 lg:mt-0 transition-transform duration-500 hover:scale-[1.02]">
            <ZoomableImage src="/assets/isencao.png" alt="Como ativar isenção de comissão"
              width={500} height={320} className="rounded-xl shadow-lg" />
          </div>
        </motion.div>


      </div>

        {/* Container de Tabs */}
        <motion.div {...fadeUp(0.1)} className="w-full px-4 mb-8 flex items-center justify-start gap-3 overflow-x-auto no-scrollbar lg:flex-wrap pb-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 border border-black/10 ${isActive
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-50"
                }`}
            >
              {tab}
            </button>
          );
        })}
      </motion.div>

      {/* Slider */}
      <motion.div {...fadeUp(0.15)} className="w-full px-4 relative lg:px-8">
        {/* Seta esquerda */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          aria-label="Card anterior"
          className="absolute left-0 lg:-left-4 top-[calc(50%-2.5rem)] lg:top-[calc(50%-1.5rem)] -translate-y-1/2 z-20 w-9 lg:w-12 h-9 lg:h-12 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 hover:scale-110"
          style={{ backgroundColor: "rgba(3,54,36,0.85)", color: "#BAF6F0" }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Seta direita */}
        <button
          onClick={() => swiperInstance?.slideNext()}
          aria-label="Próximo card"
          className="absolute right-0 lg:-right-4 top-[calc(50%-2.5rem)] lg:top-[calc(50%-1.5rem)] -translate-y-1/2 z-20 w-9 lg:w-12 h-9 lg:h-12 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 hover:scale-110"
          style={{ backgroundColor: "rgba(3,54,36,0.85)", color: "#BAF6F0" }}
        >
          <ChevronRightNav size={20} />
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
          className="mySwiper !pb-10 lg:!px-2"
        >
          {currentSlides.map((slide, i) => (
            <SwiperSlide key={`${activeTab}-${i}`} className="h-auto">
              <div
                className={`flex flex-col h-full rounded-2xl p-6 ${slide.dark ? "bg-black text-white" : "bg-[#f4f5f5] text-black"}`}
                style={{ minHeight: "520px" }}
                onPointerDown={pauseAutoplay}
              >
                {/* Tag Superior */}
                <h4 className={`font-bold text-sm mb-6 ${slide.dark ? "text-gray-300" : "text-gray-600"}`}>
                  {slide.tag}
                </h4>

                {/* Vídeo Vertical */}
                <div className="relative w-full aspect-[9/16] mb-6 rounded-xl overflow-hidden shadow-2xl bg-gray-900">
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
                <h3 className="font-bold text-xl leading-tight mb-3">
                  {slide.title}
                </h3>
                <p className={`text-sm leading-snug mb-8 ${slide.dark ? "text-gray-300" : "text-gray-700"}`}>
                  {slide.description}
                </p>

                {/* Link Assistir Agora */}
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1 hover:opacity-80 transition-opacity w-fit"
                  onClick={pauseAutoplay}
                >
                  <span className={`font-bold text-sm leading-none ${slide.dark ? "text-white" : "text-black"}`}>
                    Assistir agora
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`mt-[1px] ${slide.dark ? "text-white" : "text-black"}`}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

function TikTokEmbed({ src }: { src: string }) {
  const [activated, setActivated] = useState(false);
  const startX = useRef(0);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <iframe
        src={src}
        className="border-0 absolute"
        style={{ top: 0, left: 0, width: "calc(100% + 18px)", height: "100%", overflow: "hidden" }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
      />
      {!activated && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onPointerDown={(e) => { startX.current = e.clientX; }}
          onPointerUp={(e) => {
            if (Math.abs(e.clientX - startX.current) < 8) {
              setActivated(true);
            }
          }}
        />
      )}
    </div>
  );
}
