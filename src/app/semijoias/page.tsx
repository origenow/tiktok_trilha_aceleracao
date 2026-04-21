import { SemiJoiasSection } from "@/components/sections/SemiJoiasSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";

export const metadata = {
  title: "TikTok Shop · Semi-Jóias",
  description:
    "Guia completo para habilitar e vender na categoria de Semi-Jóias no TikTok Shop.",
  icons: {
    icon: "/tiktok-icon.svg",
  },
};

export default function SemiJoiasPage() {
  return (
    <>
      <FloatingNavbar />

      <div className="fixed inset-0 -z-10 hidden lg:block" style={{ backgroundColor: "#e8e8e8" }} />
      <main
        className="relative w-full mx-auto shadow-2xl pt-28 lg:max-w-screen-xl"
        style={{ minHeight: "100vh", backgroundColor: "#EDD4B2" }}
      >
        <SemiJoiasSection />
        <Footer />
      </main>
    </>
  );
}
