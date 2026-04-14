"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_ROUTES = [
  { label: "Trilha de Aceleração", href: "/" },
  { label: "Polos de Moda", href: "/polo-moda" },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[320px] px-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100, 
          x: "-50%", 
          opacity: visible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 flex items-center gap-1 p-1.5 rounded-full pointer-events-auto shadow-2xl"
        style={{
          background: "rgba(3, 54, 36, 0.15)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="relative flex items-center w-full gap-1">
          {NAV_ROUTES.map((route, index) => {
            const isActive = pathname === route.href;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={route.href}
                href={route.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative flex-1 px-4 py-2 text-[10px] font-display font-black transition-colors duration-300 rounded-full text-center whitespace-nowrap",
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {/* Background sliding highlight */}
                {(isActive || isHovered) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-full"
                    style={{
                      background: isActive 
                        ? "linear-gradient(90deg, #F1204A 0%, #ff4b6e 100%)" 
                        : "rgba(255, 255, 255, 0.1)",
                      border: isActive ? "none" : "1px solid rgba(255,255,255,0.15)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{route.label}</span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}


