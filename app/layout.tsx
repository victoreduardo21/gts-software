import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importamos os componentes principais
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton"; // Novo botão adicionado

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
      {/* Adicionei 'bg-white' no body para garantir o estilo clean */}
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        
        {/* Navbar fixa no topo */}
        <Navbar />

        {/* A tag main com 'flex-grow' é o segredo para o Footer 
          nunca subir quando a página tem pouco conteúdo.
        */}
        <main className="flex-grow">
          {children}
        </main>

        {/* O Footer no final da estrutura */}
        <Footer />

        {/* O botão do WhatsApp fica aqui, no final, para 
          ficar flutuando sobre todo o conteúdo.
        */}
        <WhatsAppButton />

      </body>
    </html>
  );
}