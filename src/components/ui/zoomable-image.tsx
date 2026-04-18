"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X } from "lucide-react";

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(3,54,36,0.85)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(3,54,36,0.8)" }}
          >
            <X size={16} color="#BAF6F0" />
          </button>
          <Image src={src} alt={alt} width={800} height={600} className="w-full h-auto" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ZoomableImage({
  src,
  alt,
  width = 400,
  height = 260,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`relative rounded-xl overflow-hidden border border-black/5 cursor-zoom-in group ${className}`}
        style={style}
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: "rgba(3,54,36,0.25)" }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(3,54,36,0.7)" }}
          >
            <ZoomIn size={16} color="#BAF6F0" />
          </div>
        </div>
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
