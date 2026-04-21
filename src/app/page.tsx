import { VideoPlayerSection } from "@/components/sections/VideoPlayerSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { FasesSection } from "@/components/sections/FasesSection";
import { ComoFuncionaSection } from "@/components/sections/ComoFuncionaSection";
import { WebinarsSection } from "@/components/sections/WebinarsSection";
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

      <main
        className="relative w-full mx-auto"
        style={{ minHeight: "100vh" }}
      >
        <VideoPlayerSection />
        <HeroSection />
        <FasesSection />
        <ComoFuncionaSection />
        <WebinarsSection />
        <CtaFinalSection />
        <Footer />
      </main>
    </>
  );
}


