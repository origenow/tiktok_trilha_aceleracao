"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function SliderSection() {
  // Traduzido para o contexto de "Trilha de Aceleração" ou podemos manter original da imagem. 
  // O usuário pediu "nesse formato da segunda imagem". Vou adaptar os textos levemente para fazer sentido com "Destaques da Trilha", mas mantendo a estrutura.
  const tabs = ["Vendas", "Engajamento", "Construção de Marca"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  interface SlideData {
    tag: string;
    image: string;
    title: string;
    description: string;
    dark: boolean;
  }

  const tabData: Record<string, SlideData[]> = {
    "Vendas": [
      {
        tag: "GMV Max",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
        title: "Maximize as vendas do TikTok Shop com anúncios",
        description: "Solução de publicidade baseada em IA que transforma cada conteúdo—afiliado, orgânico e pago—em vendas incrementais no TikTok Shop.",
        dark: true,
      },
      {
        tag: "Conversões Web",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop",
        title: "Gere ações no seu site",
        description: "Gere tráfego de alta intenção a custos menores e capture usuários mais propensos a agir em sua página.",
        dark: false,
      },
      {
        tag: "Venda de Produtos",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop",
        title: "Aumente a visibilidade de produtos específicos",
        description: "Destaque seus produtos principais diretamente no feed para gerar compras imediatas.",
        dark: true,
      }
    ],
    "Engajamento": [
      {
        tag: "Geração de Leads",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
        title: "Capture leads nativamente",
        description: "Colete informações de usuários sem que eles precisem sair do aplicativo.",
        dark: true,
      },
      {
        tag: "Otimização de Formulários",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
        title: "Otimize para preenchimentos",
        description: "Mostre seus anúncios para usuários com maior probabilidade de preencher seus formulários completamente.",
        dark: false,
      }
    ],
    "Construção de Marca": [
      {
        tag: "TopView",
        image: "https://images.unsplash.com/photo-1555529733-0e67056058e1?q=80&w=600&auto=format&fit=crop",
        title: "Domine a primeira impressão",
        description: "Seja o primeiro anúncio que os usuários veem ao abrir o app, garantindo visibilidade máxima.",
        dark: true,
      },
      {
        tag: "Missão da Marca",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
        title: "Conteúdo autêntico colaborativo",
        description: "Engaje criadores para desenvolver vídeos autênticos em torno da missão única da sua marca.",
        dark: false,
      }
    ]
  };

  const currentSlides = tabData[activeTab] || tabData["Vendas"];

  return (
    <section id="downloads" className="py-12 bg-white overflow-hidden relative z-10 w-full max-w-[430px] mx-auto">
      {/* Container de Tabs */}
      <div className="w-full px-4 mb-8 flex items-center justify-start gap-3 overflow-x-auto no-scrollbar pb-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 border border-black/10 ${
                isActive 
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
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={false}
          loop={false}
          className="mySwiper !pb-12"
        >
          {currentSlides.map((slide, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div 
                className={`flex flex-col h-full rounded-2xl p-6 ${slide.dark ? 'bg-black text-white' : 'bg-[#f4f5f5] text-black'}`}
                style={{ minHeight: "450px" }}
              >
                {/* Tag Superior */}
                <h4 className={`font-bold text-sm mb-6 ${slide.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {slide.tag}
                </h4>

                {/* Imagem Vertical */}
                <div className="relative w-full aspect-[3/4] mb-6 rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Pseudo Play Button (Decorativo) para a imagem */}
                  {!slide.dark && (
                    <div className="absolute bottom-4 left-4 bg-black/60 rounded-full px-3 py-1 flex items-center gap-1 backdrop-blur-sm">
                       <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent"></div>
                       <span className="text-white text-[10px] font-bold">0:09</span>
                    </div>
                  )}
                </div>

                {/* Textos Inferiores */}
                <h3 className="font-bold text-xl leading-tight mb-3">
                  {slide.title}
                </h3>
                <p className={`text-sm leading-snug mb-8 ${slide.dark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {slide.description}
                </p>

                {/* Link Saiba Mais */}
                <div className="mt-auto flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity w-fit">
                  <span className={`font-bold text-sm leading-none ${slide.dark ? 'text-white' : 'text-black'}`}>
                    Saiba mais
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`mt-[1px] ${slide.dark ? 'text-white' : 'text-black'}`}>
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
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
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        /* Customizando a paginação do Swiper se necessário, mas a imagem não mostra bullets. Se quiser esconder: */
        .mySwiper .swiper-pagination {
          display: none; 
        }
      `}</style>
    </section>
  );
}

