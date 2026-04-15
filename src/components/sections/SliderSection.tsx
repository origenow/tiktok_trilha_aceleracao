"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ExternalLink, ChevronRight, Tag, Truck } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <section id="acceleration-sliders" className="py-12 bg-white overflow-hidden relative z-10 w-full max-w-[430px] mx-auto">

      {/* ── Seller Academy + Abrindo sua loja ─────────────────────── */}
      <div className="px-4 mb-10 flex flex-col gap-4">

        {/* Header */}
        <div className="flex flex-col gap-1">
          <span className="font-black text-[10px] uppercase tracking-widest text-gray-400">
            🎓 Conteúdo oficial
          </span>
          <h2 className="font-black text-2xl leading-tight">Seller Academy</h2>
          <p className="text-sm text-gray-500 leading-snug">
            Saiba tudo sobre TikTok Shop — do cadastro à escala.
          </p>
        </div>

        {/* CTA Seller Academy */}
        <a
          href="https://seller-br.tiktok.com/university/home"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)" }}
        >
          <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-2xl bg-white/10">
            🎓
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-black text-sm text-white">Acessar Seller Academy</p>
            <p className="text-[11px] text-white/50 mt-0.5">Treinamentos oficiais TikTok Shop</p>
          </div>
          <ExternalLink size={14} className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors" />
        </a>

        {/* Divider */}
        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-black/8" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Abrindo sua loja</span>
          <div className="flex-1 h-px bg-black/8" />
        </div>

        {/* Políticas */}
        <a
          href="https://seller-br.tiktok.com/university/home"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 bg-[#f4f5f5] hover:bg-gray-100 transition-colors duration-200"
          style={{ borderLeft: "4px solid #111111" }}
        >
          <div className="shrink-0 w-9 h-9 rounded-xl bg-black flex items-center justify-center">
            <span className="text-white text-sm">📋</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-black text-sm text-black">Políticas da Plataforma</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Regras e termos para vender no TikTok Shop</p>
          </div>
          <ExternalLink size={13} className="shrink-0 text-gray-300 group-hover:text-gray-600 transition-colors" />
        </a>

        {/* Taxas — 2 colunas */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl p-4 bg-[#f4f5f5] flex flex-col gap-2" style={{ borderTop: "3px solid #F1204A" }}>
            <div className="w-8 h-8 rounded-lg bg-[#F1204A]/10 flex items-center justify-center">
              <Tag size={14} className="text-[#F1204A]" />
            </div>
            <p className="text-[10px] text-gray-500 font-medium">Comissão TikTok</p>
            <p className="font-black text-xl leading-none text-black">6%</p>
            <p className="text-[10px] text-gray-500 leading-snug">+ R$ 4,00 por item vendido</p>
          </div>
          <div className="rounded-2xl p-4 bg-[#f4f5f5] flex flex-col gap-2" style={{ borderTop: "3px solid #111111" }}>
            <div className="w-8 h-8 rounded-lg bg-black/8 flex items-center justify-center">
              <Truck size={14} className="text-black" />
            </div>
            <p className="text-[10px] text-gray-500 font-medium">Taxa de Frete</p>
            <p className="font-black text-xl leading-none text-black">6%</p>
            <p className="text-[10px] text-gray-500 leading-snug">sobre o valor do pedido</p>
          </div>
        </div>

        {/* Nota de isenção */}
        <div className="rounded-2xl p-4 flex flex-col gap-3 border border-dashed border-black/15 bg-[#fffde8]">
          <div className="flex items-start gap-2.5">
            <span className="text-xl leading-none mt-0.5">💡</span>
            <div className="flex flex-col gap-1">
              <p className="font-black text-sm text-black">Isenção de comissão por 60 dias</p>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Habilite a missão no Seller Center para participar e aproveite 0% de comissão nas primeiras semanas.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-wrap bg-black/5 rounded-xl px-3 py-2">
            <span className="text-[10px] font-medium text-gray-700">Menu lateral</span>
            <ChevronRight size={10} className="text-gray-400" />
            <span className="text-[10px] font-medium text-gray-700">Crescimento</span>
            <ChevronRight size={10} className="text-gray-400" />
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F1204A] text-white">Missões</span>
          </div>
        </div>

      </div>

      {/* Container de Tabs */}
      <div className="w-full px-4 mb-8 flex items-center justify-start gap-3 overflow-x-auto no-scrollbar pb-2">
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
      </div>

      {/* Slider */}
      <div className="w-full px-4">
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.15}
          centeredSlides={false}
          loop={false}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="mySwiper !pb-12"
        >
          {currentSlides.map((slide, i) => (
            <SwiperSlide key={`${activeTab}-${i}`} className="h-auto">
              <div
                className={`flex flex-col h-full rounded-2xl p-6 ${slide.dark ? 'bg-black text-white' : 'bg-[#f4f5f5] text-black'}`}
                style={{ minHeight: "520px" }}
              >
                {/* Tag Superior */}
                <h4 className={`font-bold text-sm mb-6 ${slide.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {slide.tag}
                </h4>

                {/* Vídeo Vertical */}
                <div className="relative w-full aspect-[9/16] mb-6 rounded-xl overflow-hidden shadow-2xl bg-gray-900 border-0">
                  {slide.tiktok ? (
                    <iframe
                      src={slide.video}
                      className="w-full h-full border-0 overflow-hidden"
                      scrolling="no"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      onClick={pauseAutoplay}
                      onMouseEnter={pauseAutoplay}
                    />
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
                <p className={`text-sm leading-snug mb-8 ${slide.dark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {slide.description}
                </p>

                {/* Link Assistir Agora */}
                <a 
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity w-fit"
                  onClick={(e) => {
                    pauseAutoplay();
                  }}
                >
                  <span className={`font-bold text-sm leading-none ${slide.dark ? 'text-white' : 'text-black'}`}>
                    Assistir agora
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`mt-[1px] ${slide.dark ? 'text-white' : 'text-black'}`}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mySwiper .swiper-pagination {
          display: none; 
        }
      `}</style>
    </section>
  );
}
