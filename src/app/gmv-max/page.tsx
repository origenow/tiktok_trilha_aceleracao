import { GmvMaxSection } from "@/components/sections/GmvMaxSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";

export const metadata = {
  title: "TikTok Shop · GMV Max",
  description:
    "Guia completo do GMV Max — automação de anúncios com IA para maximizar suas vendas no TikTok Shop.",
  icons: {
    icon: "/tiktok-icon.svg",
  },
};

export default function GmvMaxPage() {
  return (
    <>
      <FloatingNavbar />

      <div className="fixed inset-0 -z-10 hidden lg:block" style={{ backgroundColor: "#e8e8e8" }} />
      <main
        className="relative w-full mx-auto shadow-2xl pt-28 lg:max-w-screen-xl"
        style={{ minHeight: "100vh", backgroundColor: "#BAF6F0" }}
      >
        <GmvMaxSection />
        <Footer />
      </main>
    </>
  );
}
