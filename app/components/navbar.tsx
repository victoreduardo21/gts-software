"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-slate-800 p-4 shadow-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Nome da Empresa */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <span className="text-blue-600 font-mono text-2xl"></span>
          GTS <span className="text-blue-500">Software</span>
        </Link>

        {/* Menu Hamburguer (Mobile) - Cor ajustada para escuro */}
        <button
          className="md:hidden block focus:outline-none text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Links de Navegação - Fundo Branco no Mobile também */}
        <div
          className={`
          ${isOpen ? "block" : "hidden"} 
          md:flex items-center space-x-0 md:space-x-8 
          absolute md:static bg-white w-full md:w-auto 
          left-0 top-[60px] md:top-0 p-6 md:p-0 
          shadow-lg md:shadow-none z-50 border-b md:border-none border-slate-100
        `}
        >
          <Link
            href="/"
            className="block py-2 text-sm font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block py-2 text-sm font-medium hover:text-blue-600 transition"
          >
            Services
          </Link>
          <Link
            href="/systems"
            className="block py-2 text-sm font-medium hover:text-blue-600 transition"
          >
            Systems
          </Link>
          <Link
            href="/portfolio"
            className="block py-2 text-sm font-medium hover:text-blue-600 transition"
          >
            Portfólio
          </Link>

          {/* Botão de Destaque */}
          <Link
            href="/contact"
            className="block mt-4 md:mt-0 py-2 px-5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full text-center transition shadow-md shadow-blue-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
