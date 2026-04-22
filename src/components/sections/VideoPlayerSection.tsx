"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Play, Volume2, VolumeX, Heart, MessageCircle, Share2, Music2, ChevronDown, TrendingUp, Users } from "lucide-react";

/* ── Floating Doodle component (Para o efeito Parallax 3D) ── */
const FloatingDoodle = ({
  src,
  size = 40,
  top,
  left,
  right,
  bottom,
  delay = 0,
  rotate = 0,
  opacity = 0.3,
  reverse = false,
  parallaxX,
  parallaxY
}: {
  src: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  rotate?: number;
  opacity?: number;
  reverse?: boolean;
  parallaxX?: any;
  parallaxY?: any;
}) => (
  <motion.div
    className={`absolute pointer-events-none ${reverse ? 'animate-float-reverse' : 'animate-float'}`}
    style={{
      top, left, right, bottom,
      width: size, height: size,
      animationDelay: `${delay}s`,
      opacity,
      x: parallaxX,
      y: parallaxY,
    }}
  >
    <img
      src={src}
      alt=""
      className="w-full h-full object-contain"
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  </motion.div>
);

export function VideoPlayerSection({ canPlay = false }: { canPlay?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animações baseadas no scroll
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0.35, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0.31, 0.8], [0, -100]);
  const iniciarOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Tipografia Gigante Background (Scroll)
  const bgTextX1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const bgTextX2 = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 0.1, 0]);

  // Cards Laterais Desktop (Scroll)
  const cardLeftX = useTransform(scrollYProgress, [0.1, 0.3], [-150, 0]);
  const cardRightX = useTransform(scrollYProgress, [0.1, 0.3], [150, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const smoothCardLeftX = useSpring(cardLeftX, { stiffness: 100, damping: 20 });
  const smoothCardRightX = useSpring(cardRightX, { stiffness: 100, damping: 20 });

  // ──────────────────────────────────────────────────────────
  // Parallax Tracking (Mouse)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 70, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 70, damping: 20 });

  const parallax1X = useTransform(mouseXSpring, [-0.5, 0.5], [-40, 40]);
  const parallax1Y = useTransform(mouseYSpring, [-0.5, 0.5], [-40, 40]);
  const parallax2X = useTransform(mouseXSpring, [-0.5, 0.5], [60, -60]);
  const parallax2Y = useTransform(mouseYSpring, [-0.5, 0.5], [60, -60]);
  const parallax3X = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const parallax3Y = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  // ──────────────────────────────────────────────────────────
  
  // Pausa o vídeo ao sair da visão
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Autoplay
  useEffect(() => {
    if (!canPlay) return;
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().then(() => setIsPlaying(true)).catch(() => { });
    };

    if (video.readyState >= 3) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
      return () => video.removeEventListener("canplay", tryPlay);
    }
  }, [canPlay]);

  // Progresso da barra
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const update = () => {
      const p = (video.currentTime / video.duration) * 100;
      setProgress(isNaN(p) ? 0 : p);
    };
    video.addEventListener("timeupdate", update);
    return () => video.removeEventListener("timeupdate", update);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.muted = false;
      setIsMuted(false);
      video.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative h-[150vh] w-full" 
      style={{ backgroundColor: "#111111" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Background Desktop Interativo */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Parallax Tipografia Gigante */}
        <motion.div 
          style={{ opacity: bgOpacity, x: bgTextX1, y: parallax3Y }}
          className="absolute top-[15%] left-0 whitespace-nowrap"
        >
          <h1 className="text-[14rem] font-black uppercase tracking-tighter text-[#F1204A]" style={{ fontFamily: 'TikTokSansDisplay, "Arial Black", Impact, sans-serif' }}>
            TIKTOK SHOP ACELERAÇÃO
          </h1>
        </motion.div>
        <motion.div 
          style={{ opacity: bgOpacity, x: bgTextX2, y: parallax3X }}
          className="absolute top-[65%] left-0 whitespace-nowrap"
        >
          <h1 className="text-[14rem] font-black uppercase tracking-tighter text-[#2DCCD3]" style={{ fontFamily: 'TikTokSansDisplay, "Arial Black", Impact, sans-serif' }}>
            VENDAS ENGAJAMENTO SUCESSO
          </h1>
        </motion.div>
        
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F1204A]/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

        {/* Floating Doodles (Dão vida ao background 3D) */}
        <FloatingDoodle src="/assets_new/manequim.svg" size={120} top="15%" left="10%" rotate={15} opacity={0.15} parallaxX={parallax1X} parallaxY={parallax1Y} />
        <FloatingDoodle src="/assets_new/cosmetics.svg" size={100} bottom="20%" right="15%" rotate={-20} opacity={0.15} parallaxX={parallax2X} parallaxY={parallax2Y} reverse />
        <FloatingDoodle src="/assets_new/2.svg" size={80} top="30%" right="8%" rotate={10} opacity={0.15} parallaxX={parallax3X} parallaxY={parallax3Y} />
        <FloatingDoodle src="/assets_new/5.svg" size={90} bottom="15%" left="15%" rotate={-10} opacity={0.15} parallaxX={parallax2X} parallaxY={parallax1Y} reverse />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Container Central (Vídeo + Cards Desktop) */}
        <motion.div style={{ opacity, y }} className="relative w-full h-full lg:w-[1200px] lg:h-[100%] flex items-center justify-center z-10 py-10 lg:py-16">
          
          {/* Card Flutuante Esquerdo (Desktop Only) */}
          <motion.div 
            style={{ x: smoothCardLeftX, opacity: cardOpacity }}
            className="hidden lg:flex absolute left-4 xl:-left-8 top-[35%] w-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 pointer-events-auto hover:bg-white/15 transition-colors cursor-default"
          >
            <div className="w-12 h-12 bg-[#2DCCD3] rounded-full flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-[#033624]" />
            </div>
            <h3 className="text-white font-display font-black text-xl mb-1">Crescimento</h3>
            <p className="text-white/70 text-sm font-body leading-snug">O vídeo é o formato que mais converte no TikTok Shop. Engaje seu público!</p>
          </motion.div>

          {/* Vídeo - PROPORÇÃO 9:16 PERFEITA */}
          <motion.section
            style={{ scale, borderRadius }}
            className="relative w-full h-full lg:w-auto lg:h-full lg:aspect-[9/16] lg:max-h-[85vh] bg-black overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] origin-center border border-white/10 rounded-none lg:rounded-[2.5rem]"
          >
            {/* Borda interna (Inner glow) p/ simular a tela do celular */}
            <div className="hidden lg:block absolute inset-0 rounded-[2.5rem] border-[4px] border-black pointer-events-none z-50 mix-blend-overlay"></div>

            {/* Logo TikTok */}
            <div className="absolute top-8 left-6 z-50 pointer-events-none drop-shadow-md">
              <img src="/tiktok-icon.svg" alt="TikTok" className="w-16 h-16" />
            </div>

            {/* Vídeo local */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              src="/assets/videos/videoteste.mp4"
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
            />

            {/* Overlay */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
              
              {/* Ações direita */}
              <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center pointer-events-auto">
                <motion.div whileTap={{ scale: 0.8 }} className="flex flex-col items-center gap-1 group cursor-pointer">
                  <div className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-[#F1204A] group-hover:border-[#F1204A] shadow-lg transition-all duration-300">
                    <Heart size={24} fill="white" className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] text-white font-bold drop-shadow-md">24.5K</span>
                </motion.div>

                <motion.div whileTap={{ scale: 0.8 }} className="flex flex-col items-center gap-1 group cursor-pointer">
                  <div className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white/30 shadow-lg transition-colors duration-300">
                    <MessageCircle size={24} fill="white" className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] text-white font-bold drop-shadow-md">1.2K</span>
                </motion.div>

                <motion.div whileTap={{ scale: 0.8 }} className="flex flex-col items-center gap-1 group cursor-pointer">
                  <div className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white/30 shadow-lg transition-colors duration-300">
                    <Share2 size={24} fill="white" className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] text-white font-bold drop-shadow-md">Compartilhar</span>
                </motion.div>

                <motion.button
                  whileTap={{ scale: 0.8 }}
                  animate={isMuted ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                  transition={isMuted ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" } : {}}
                  onClick={toggleMute}
                  className={`w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 shadow-lg ${isMuted ? "bg-[#F1204A]/90 shadow-[0_0_20px_rgba(241,32,74,0.6)]" : "bg-black/60"
                    }`}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </motion.button>
              </div>

              {/* Rodapé */}
              <div className="flex flex-col gap-3 max-w-[80%] pointer-events-auto">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-white text-lg tracking-tight drop-shadow-md">@tiktokshop_br</span>
                  <span className="bg-[#F1204A] text-white text-[9px] font-black px-2 py-0.5 rounded-sm shadow-md">OFICIAL</span>
                </div>
                <p className="text-white text-sm font-body leading-snug drop-shadow-md">
                  Descubra como a Trilha de Aceleração pode transformar seu negócio hoje! 🚀 #TikTokShop #Moda #Ecommerce
                </p>
                <div className="flex items-center gap-2 text-white/90 overflow-hidden">
                  <Music2 size={14} className="shrink-0" />
                  <div className="text-[11px] font-medium whitespace-nowrap animate-marquee">
                    Som original - TikTok Shop Brasil - Cresça com a gente
                  </div>
                </div>
              </div>

              {/* Play/Pause overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-white shadow-xl">
                      <Play size={40} fill="white" className="ml-2" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Barra de progresso */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/20 overflow-hidden">
                <div
                  className="h-full bg-[#F1204A] shadow-[0_0_15px_rgba(241,32,74,0.9)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.section>

          {/* Card Flutuante Direito (Desktop Only) */}
          <motion.div 
            style={{ x: smoothCardRightX, opacity: cardOpacity }}
            className="hidden lg:flex absolute right-4 xl:-right-8 top-[55%] w-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 pointer-events-auto hover:bg-white/15 transition-colors cursor-default"
          >
            <div className="w-12 h-12 bg-[#FBEB35] rounded-full flex items-center justify-center mb-4">
              <Users size={24} className="text-[#033624]" />
            </div>
            <h3 className="text-white font-display font-black text-xl mb-1">Comunidade</h3>
            <p className="text-white/70 text-sm font-body leading-snug">Acompanhe as tendências e interaja com os melhores criadores da plataforma.</p>
          </motion.div>

        </motion.div>

        {/* Botão "iniciar" + seta para próxima seção — some ao scrollar */}
        <motion.div
          style={{ opacity: iniciarOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
        >
          <button
            onClick={togglePlay}
            className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white text-sm font-display font-black tracking-widest uppercase shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/20 hover:scale-105 transition-all duration-300 pointer-events-auto"
            aria-label="Iniciar vídeo"
          >
            iniciar
          </button>
          <button
            onClick={() => {
              const next = document.querySelector<HTMLElement>("#hero");
              next?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/20 hover:scale-105 transition-all duration-300 pointer-events-auto"
            aria-label="Ir para próxima seção"
          >
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="flex"
            >
              <ChevronDown size={20} />
            </motion.span>
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
