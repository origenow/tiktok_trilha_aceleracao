import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trilha de Aceleração · TikTok Shop · Categoria Moda",
  description:
    "Siga as fases, complete missões e desbloqueie cupons, tráfego e suporte exclusivo para vendedores de moda no TikTok Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
