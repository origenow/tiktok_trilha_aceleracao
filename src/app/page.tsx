import { VideoPlayerSection } from "@/components/sections/VideoPlayerSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { FasesSection } from "@/components/sections/FasesSection";
import { ComoFuncionaSection } from "@/components/sections/ComoFuncionaSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";
import { Footer } from "@/components/sections/Footer";
import { TikTokIntro } from "@/components/ui/TikTokIntro";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <>
      {/* Splash screen de entrada — remove-se automaticamente após ~3.2s */}
      <TikTokIntro />

      {/* Menu flutuante interativo */}
      <FloatingNavbar />

      {/* Fundo cinza neutro fora do container em desktop */}
      <div
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: "#e8e8e8" }}
      />
      <main
        className="relative w-full mx-auto shadow-2xl"
        style={{ maxWidth: "430px", minHeight: "100vh" }}
      >
        <VideoPlayerSection />
        <HeroSection />
        <FasesSection />
        <ComoFuncionaSection />
        <CtaFinalSection />
        <Footer />
      </main>
    </>
  );
}


