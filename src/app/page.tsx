import { HeroSection } from "@/components/sections/HeroSection";
import { FasesSection } from "@/components/sections/FasesSection";
import { ComoFuncionaSection } from "@/components/sections/ComoFuncionaSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Fundo cinza neutro fora do container em desktop */}
      <div
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: "#e8e8e8" }}
      />
      <main
        className="relative w-full mx-auto shadow-2xl"
        style={{ maxWidth: "430px", minHeight: "100vh" }}
      >
        <HeroSection />
        <FasesSection />
        <ComoFuncionaSection />
        <CtaFinalSection />
        <Footer />
      </main>
    </>
  );
}
