"use client";

import React from "react";
import { HeroSectionMobile } from "./HeroSectionMobile";
import { HeroSectionDesktop } from "./HeroSectionDesktop";

export function HeroSection() {
  return (
    <section id="hero" className="w-full">
      {/* Exibe apenas em telas menores que lg (1024px) */}
      <div className="block lg:hidden w-full">
        <HeroSectionMobile />
      </div>
      
      {/* Exibe apenas em telas lg ou maiores */}
      <div className="hidden lg:block w-full">
        <HeroSectionDesktop />
      </div>
    </section>
  );
}
