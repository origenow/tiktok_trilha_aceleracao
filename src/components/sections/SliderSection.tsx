"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ShoppingBag, Star, Zap, Gift } from "lucide-react";

export function SliderSection() {
  const slides = [
    {
      title: "Produtos em Alta",
      desc: "Veja os itens que estão bombando na categoria Moda.",
      icon: ShoppingBag,
      color: "#2DCCD3",
    },
    {
      title: "Ofertas Exclusivas",
      desc: "Desbloqueie cupons de até 30% off para seus clientes.",
      icon: Zap,
      color: "#F1204A",
    },
    {
      title: "Novidades da Trilha",
      desc: "Novas missões liberadas para acelerar suas vendas.",
      icon: Star,
      color: "#FBEB35",
    },
    {
      title: "Prêmios de Batida",
      desc: "Ao atingir as metas, resgate seus créditos em anúncios.",
      icon: Gift,
      color: "#EDBBE8",
    },
  ];

  return (
    <section id="downloads" className="py-12 bg-white overflow-hidden">
      <div className="w-full max-w-[430px] mx-auto px-6 mb-8 text-center">
        <h2 
          className="font-display font-black leading-tight mb-2"
          style={{ fontSize: "clamp(1.6rem, 7vw, 2.2rem)", color: "#033624" }}
        >
          Destaques da Trilha
        </h2>
        <p className="font-body text-sm opacity-70" style={{ color: "#4A0505" }}>
          Arraste para o lado e veja os benefícios reais da sua jornada
        </p>
      </div>

      <div className="w-full max-w-[430px] mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="mySwiper rounded-3xl overflow-hidden pb-12"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div 
                className="relative h-48 rounded-3xl p-6 flex flex-col justify-end overflow-hidden shadow-lg border-2"
                style={{ 
                  backgroundColor: "#ffffff",
                  borderColor: `${slide.color}20`
                }}
              >
                {/* Background Pattern */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10"
                  style={{ backgroundColor: slide.color }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: `${slide.color}20`, color: slide.color }}
                  >
                    <slide.icon size={28} />
                  </div>
                  <h3 className="font-display font-black text-lg mb-1" style={{ color: "#033624" }}>
                    {slide.title}
                  </h3>
                  <p className="font-body text-xs opacity-80 leading-relaxed" style={{ color: "#4A0505" }}>
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #033624 !important;
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          background: #F1204A !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
