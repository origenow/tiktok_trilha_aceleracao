import { PoloModaSection } from "@/components/sections/PoloModaSection";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Polos de Moda · TikTok Shop",
  description:
    "Programa exclusivo para vendedores de Polos de Moda credenciados. Desbloqueie benefícios, cupons e suporte dedicado no TikTok Shop.",
};

export default function PoloModaPage() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: "#e8e8e8" }}
      />
      <main
        className="relative w-full mx-auto shadow-2xl"
        style={{ maxWidth: "430px", minHeight: "100vh" }}
      >
        <PoloModaSection />
        <Footer />
      </main>
    </>
  );
}
