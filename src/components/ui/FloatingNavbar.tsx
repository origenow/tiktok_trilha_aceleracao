"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const HOME_NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Fases", href: "#fases" },
  { label: "Destaques", href: "#downloads" },
  { label: "Polos", href: "/polo-moda", isExternal: true },
];

const POLO_NAV_ITEMS = [
  { label: "Voltar", href: "/", isExternal: true },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Polos", href: "#polos" },
  { label: "Ajuda", href: "https://chat.whatsapp.com/LUOgiqEApUc8mXOeVbPxKO", isExternal: true },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  const isPoloPage = pathname === "/polo-moda";
  const navItems = isPoloPage ? POLO_NAV_ITEMS : HOME_NAV_ITEMS;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  // Update active item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const sections = navItems
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => !item.isExternal);
      
      sections.forEach(({ item, index }) => {
        const element = document.querySelector(item.href);
        if (element instanceof HTMLElement) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveItem(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0], index: number) => {
    if (item.isExternal) return;
    
    e.preventDefault();
    const targetId = item.href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveItem(index);
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[380px] px-4 pointer-events-none">
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
          background: isPoloPage ? "rgba(3, 54, 36, 0.4)" : "rgba(3, 54, 36, 0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="relative flex items-center gap-0">
          {navItems.map((item, index) => {
            const isActive = activeItem === index && !item.isExternal;
            const isHovered = hoveredItem === index;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item, index)}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "relative px-3 py-1 text-[10px] font-display font-bold transition-colors duration-300 rounded-full flex items-center justify-center min-w-[65px]",
                  isActive ? "text-white" : "text-white/70 hover:text-white"
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

