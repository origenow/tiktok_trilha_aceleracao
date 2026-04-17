import { EntregaMaximaSection } from "@/components/sections/EntregaMaximaSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";

export const metadata = {
  title: "TikTok Shop · Entrega Máxima",
  description:
    "Guia completo da Entrega Máxima (Max Delivery) — como ativar, configurar orçamento e programação no GMV Max.",
  icons: {
    icon: "/tiktok-icon.svg",
  },
};

export default function EntregaMaximaPage() {
  return (
    <>
      <FloatingNavbar />

      <div
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: "#e8e8e8" }}
      />
      <main
        className="relative w-full mx-auto shadow-2xl pt-28"
        style={{ maxWidth: "430px", minHeight: "100vh", backgroundColor: "#BAF6F0" }}
      >
        <EntregaMaximaSection />
        <Footer />
      </main>
    </>
  );
}
