"use client";

import React from "react";
import { HeroSectionMobile } from "./HeroSectionMobile";
import { HeroSectionDesktop } from "./HeroSectionDesktop";

export function HeroSection() {
  return (
    <section id="hero" className="w-full">
      {/* Exibe apenas em telas menores que md (768px) */}
      <div className="block md:hidden w-full">
        <HeroSectionMobile />
      </div>
      
      {/* Exibe apenas em telas md ou maiores */}
      <div className="hidden md:block w-full">
        <HeroSectionDesktop />
      </div>
    </section>
  );
}
