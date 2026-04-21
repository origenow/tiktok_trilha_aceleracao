export function Footer() {
  return (
    <footer className="py-6" style={{ backgroundColor: "#EDD4B2" }}>
      <div className="w-full max-w-[430px] lg:max-w-screen-xl mx-auto px-5 lg:px-16 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-3">
        <img src="/tiktok-icon.svg" alt="TikTok" className="w-8 h-8 opacity-70" />

        <p className="font-body text-xs text-center" style={{ color: "#4A0505", opacity: 0.55 }}>
          © TikTok Shop · Programa Trilha de Aceleração · Categoria Moda
        </p>

        <div className="flex items-center gap-4">
          <a href="#hero" className="font-body text-xs hover:opacity-100 transition-opacity" style={{ color: "#4A0505", opacity: 0.5 }}>
            Início
          </a>
          <a href="#fases" className="font-body text-xs hover:opacity-100 transition-opacity" style={{ color: "#4A0505", opacity: 0.5 }}>
            Fases
          </a>
          <a href="https://seller-br.tiktok.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs hover:opacity-100 transition-opacity" style={{ color: "#4A0505", opacity: 0.5 }}>
            Seller Center
          </a>
        </div>
      </div>
    </footer>
  );
}
