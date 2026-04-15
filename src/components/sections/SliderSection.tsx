"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

  interface SlideData {
    tag: string;
    video: string;
    image: string; // fallback
    title: string;
    description: string;
    dark: boolean;
  }

  const tabData: Record<string, SlideData[]> = {
    "Abrindo sua loja": [
      {
        tag: "Primeiro Passo",
        video: "https://v1.bg.ot7.me/auth/login?redirect=https%3A%2F%2Fassets.mixkit.co%2Fvideos%2Fpreview%2Fmixkit-girl-in-neon-light-dancing-reggaeton-41221-large.mp4",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
        title: "Como criar sua conta no Seller Center",
        description: "Passo a passo completo para cadastrar sua loja e começar a vender em minutos.",
        dark: true,
      },
      {
        tag: "Configuração",
        video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-red-neon-lighting-and-makeup-41219-large.mp4",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop",
        title: "Dicas para o perfil da loja",
        description: "Como escolher o nome e a imagem ideal para atrair mais clientes e gerar confiança.",
        dark: false,
      }
    ],
    "Operação para iniciantes": [
      {
        tag: "Estoque",
        video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-girl-walking-down-a-street-in-london-4428-large.mp4",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
        title: "Gerenciando seus primeiros pedidos",
        description: "Tudo o que você precisa saber sobre empacotamento, envio e status de entrega.",
        dark: true,
      },
      {
        tag: "Produtos",
        video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-dancing-in-a-sunny-field-41211-large.mp4",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
        title: "Como cadastrar produtos que vendem",
        description: "Fotos, descrições e categorias que aumentam a conversão dos seus anúncios.",
        dark: false,
      }
    ],
    "Benefícios para novos vendedores": [
      {
        tag: "Incentivo",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-with-balloons-41224-large.mp4",
        image: "https://images.unsplash.com/photo-1555529733-0e67056058e1?q=80&w=600&auto=format&fit=crop",
        title: "Cupons de boas-vindas",
        description: "Como resgatar e utilizar os primeiros cupons de impulsionamento da plataforma.",
        dark: true,
      },
      {
        tag: "Comissão Zero",
        video: "https://assets.mixkit.co/videos/preview/mixkit-girl-walking-in-a-neon-tunnel-41216-large.mp4",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
        title: "Benefício de taxa zero",
        description: "Entenda como funciona o período de carência para novos lojistas e como aproveitar.",
        dark: false,
      }
    ],
    "Criadores de conteúdo/Afiliados": [
      {
        tag: "Colaboração",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-posing-in-neon-lights-41222-large.mp4",
        image: "https://images.unsplash.com/photo-1555529733-0e67056058e1?q=80&w=600&auto=format&fit=crop",
        title: "Encontrando os criadores certos",
        description: "Como usar o Affiliate Center para conectar sua marca com influenciadores.",
        dark: true,
      },
      {
        tag: "Amostras",
        video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-sunglasses-posing-in-neon-lights-41217-large.mp4",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
        title: "Gerenciamento de amostras",
        description: "A melhor estratégia para enviar produtos e garantir vídeos de alta qualidade.",
        dark: false,
      }
    ],
    "Lives": [
      {
        tag: "Live Commerce",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-in-front-of-a-mirror-with-neon-lights-41223-large.mp4",
        image: "https://images.unsplash.com/photo-1555529733-0e67056058e1?q=80&w=600&auto=format&fit=crop",
        title: "Sua primeira Live Shop",
        description: "Equipamentos, roteiro e técnicas para prender a atenção e vender ao vivo.",
        dark: true,
      },
      {
        tag: "Análise",
        video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-portrait-in-neon-red-light-41215-large.mp4",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
        title: "Métricas de engajamento",
        description: "Como ler os dados da sua live e melhorar os resultados para a próxima sessão.",
        dark: false,
      }
    ]
  };

  const currentSlides = tabData[activeTab] || tabData["Abrindo sua loja"];

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
          onSwiper={setSwiperInstance}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.15}
          centeredSlides={false}
          loop={false}
          autoplay={{
            delay: 10000, // Mais devagar (10 segundos)
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
                <div className="relative w-full aspect-[9/16] mb-6 rounded-xl overflow-hidden shadow-sm bg-gray-200">
                   <video 
                    src={slide.video}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    loop
                    muted
                  />
                  {/* Pseudo Play Button removido pois temos controles reais */}
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
                    Assistir agora
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
        .mySwiper .swiper-pagination {
          display: none; 
        }
      `}</style>
    </section>
  );
}
