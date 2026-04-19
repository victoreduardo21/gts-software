"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-slate-800 border-b border-slate-100 sticky top-0 z-50">
      {/* Container centralizado com altura reduzida para ficar fino */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* Logo - Exatamente como na imagem 2 */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight flex items-center gap-1"
        >
          <span className="text-slate-900">GTS</span> 
          <span className="text-blue-500">Software</span>
        </Link>

        {/* Menu Hamburguer (Mobile) */}
        <button
          className="md:hidden block focus:outline-none text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}/>
          </svg>
        </button>

        {/* Links de Navegação - Compactos */}
        <div
          className={`
            ${isOpen ? "block" : "hidden"} 
            md:flex items-center absolute md:static bg-white w-full md:w-auto 
            left-0 top-[64px] md:top-0 p-6 md:p-0 
            shadow-lg md:shadow-none z-50 border-b md:border-none border-slate-100
          `}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="/" className="text-[13px] font-medium hover:text-blue-600 transition">Home</Link>
            <Link href="/services" className="text-[13px] font-medium hover:text-blue-600 transition">Serviços</Link>
            <Link href="/systems" className="text-[13px] font-medium hover:text-blue-600 transition">Sistemas</Link>
            <Link href="/portfolio" className="text-[13px] font-medium hover:text-blue-600 transition">Portfólio</Link>

            {/* Botão de Contact - Fino e Compacto */}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold px-5 py-1.5 rounded-full transition shadow-md shadow-blue-100"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}