import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TikTok Shop",
  description:
    "Siga as fases, complete missões e desbloqueie cupons, tráfego e suporte exclusivo para vendedores de moda no TikTok Shop.",
  icons: {
    icon: "/tiktok-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full" suppressHydrationWarning>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
