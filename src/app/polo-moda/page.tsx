import { PoloModaSection } from "@/components/sections/PoloModaSection";
import { SliderSection } from "@/components/sections/SliderSection";
import { MateriaisDeApoioSection } from "@/components/sections/MateriaisDeApoioSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";

export const metadata = {
  title: "TikTok Shop · Polos",
  description:
    "Programa exclusivo para vendedores de Polos de Moda credenciados. Desbloqueie benefícios, cupons e suporte dedicado no TikTok Shop.",
  icons: {
    icon: "/tiktok-icon.svg",
  },
};

export default function PoloModaPage() {
  return (
    <>
      <FloatingNavbar />

      <main
        className="relative w-full pt-28"
        style={{ minHeight: "100vh", backgroundColor: "#033624" }}
      >
        <PoloModaSection />
        <SliderSection />
        <MateriaisDeApoioSection />
        <Footer />
      </main>
    </>
  );
}
