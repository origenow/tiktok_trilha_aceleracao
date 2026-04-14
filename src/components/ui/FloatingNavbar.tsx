"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Fases", href: "#fases" },
  { label: "Destaques", href: "#downloads" },
  { label: "Começar", href: "#cta" },
];

export function FloatingNavbar() {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  // Update active item on scroll (optional, but good for UX)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));
      
      sections.forEach((section, index) => {
        if (section instanceof HTMLElement) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveItem(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[340px] px-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100, 
          x: "-50%", 
          opacity: visible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 flex items-center gap-0.5 p-1 rounded-full pointer-events-auto shadow-2xl"
        style={{
          background: "rgba(3, 54, 36, 0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="relative flex items-center gap-0">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeItem === index;
            const isHovered = hoveredItem === index;

            return (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setActiveItem(index)}
                className={cn(
                  "relative px-2.5 py-1 text-[9px] font-display font-bold transition-colors duration-300 rounded-full",
                  isActive ? "text-white" : "text-thrive/70 hover:text-thrive"
                )}
              >
                {/* Sliding Highlight */}
                {(isHovered || isActive) && (
                  <motion.span
                    layoutId="nav-highlight"
                    className="absolute inset-0 z-[-1] rounded-full"
                    style={{
                      background: isActive 
                        ? "linear-gradient(90deg, #F1204A 0%, #ff4b6e 100%)" 
                        : "rgba(255, 255, 255, 0.15)",
                      border: isActive ? "none" : "1px solid rgba(255,255,255,0.2)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
