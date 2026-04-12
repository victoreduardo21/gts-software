import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importamos o componente de Analytics da Vercel
import { Analytics } from "@vercel/analytics/react";

import { SpeedInsights } from "@vercel/speed-insights/next"

// Importamos os seus componentes principais
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTS - Global Tech Software",
  description: "Soluções inteligentes em sistemas, websites e performance digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        
        {/* Navbar fixa no topo */}
        <Navbar />

        {/* A tag main com 'flex-grow' garante que o conteúdo ocupe o espaço 
            disponível e o Footer fique sempre no final da tela.
        */}
        <main className="flex-grow">
          {children}
        </main>

        {/* O Footer no final da estrutura */}
        <Footer />

        {/* Botão flutuante do WhatsApp e o componente de 
            Analytics para monitorar acessos na Vercel.
        */}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}