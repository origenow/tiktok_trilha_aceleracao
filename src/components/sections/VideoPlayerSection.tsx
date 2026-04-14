"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, Music2 } from "lucide-react";

export function VideoPlayerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll animations - Seamless transition from Shrink to Release
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0.35, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0.31, 0.8], [0, -100]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const p = (video.currentTime / video.duration) * 100;
      setProgress(p);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full bg-[#e8e8e8]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.section
          style={{
            scale,
            borderRadius,
            opacity,
            y,
          }}


          className="relative w-full h-full bg-black overflow-hidden shadow-2xl origin-center"
        >
          {/* Logo TikTok no topo esquerdo para alinhar com a animação */}
          <div className="absolute top-8 left-6 z-50 pointer-events-none">
            <img src="/tiktok-icon.svg" alt="TikTok" className="w-16 h-16" />
          </div>

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-dancing-reggaeton-41221-large.mp4"
            loop
            muted={isMuted}
            playsInline
            onClick={togglePlay}
          />

          {/* Overlays */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">

            {/* Right Side Actions (TikTok Style) */}
            <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center pointer-events-auto">
              <motion.div whileTap={{ scale: 0.8 }} className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 transition-colors">
                  <Heart size={24} fill="white" />
                </div>
                <span className="text-[10px] text-white font-bold">24.5K</span>
              </motion.div>

              <motion.div whileTap={{ scale: 0.8 }} className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 transition-colors">
                  <MessageCircle size={24} fill="white" />
                </div>
                <span className="text-[10px] text-white font-bold">1.2K</span>
              </motion.div>

              <motion.div whileTap={{ scale: 0.8 }} className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 transition-colors">
                  <Share2 size={24} fill="white" />
                </div>
                <span className="text-[10px] text-white font-bold">Compartilhar</span>
              </motion.div>

              {/* Mute Toggle */}
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={toggleMute}
                className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </motion.button>
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col gap-3 max-w-[80%] pointer-events-auto">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-white text-lg tracking-tight">@tiktokshop_br</span>
                <span className="bg-[#F1204A] text-white text-[9px] font-black px-2 py-0.5 rounded-sm">OFICIAL</span>
              </div>

              <p className="text-white text-sm font-body leading-snug">
                Descubra como a Trilha de Aceleração pode transformar seu negócio hoje! 🚀 #TikTokShop #Moda #Ecommerce
              </p>

              <div className="flex items-center gap-2 text-white/80 overflow-hidden">
                <Music2 size={14} className="shrink-0" />
                <div className="text-[11px] whitespace-nowrap animate-marquee">
                  Som original - TikTok Shop Brasil - Cresça com a gente
                </div>
              </div>
            </div>

            {/* Play/Pause Large Overlay */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-20 h-20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-white">
                    <Play size={40} fill="white" className="ml-2" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 overflow-hidden">
              <motion.div
                className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.section>
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

