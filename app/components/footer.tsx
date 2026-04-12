import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-100">
      {/* Container centralizado para não espalhar em telas de notebook/monitor */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Coluna 1: Sobre a GTS */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h3 className="text-slate-900 font-black text-2xl tracking-tighter uppercase">
                GTS <span className="text-blue-600">Software</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500 font-medium">
              Innovative systems and engineering solutions designed to elevate
              your business with global cutting-edge technology.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:ml-auto">
            <h4 className="text-slate-900 font-bold mb-8 text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 transition">Services</Link></li>
              <li><Link href="/systems" className="hover:text-blue-600 transition">Systems</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato e Redes Sociais com SUAS IMAGENS */}
          <div className="md:ml-auto space-y-8">
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-xs uppercase tracking-widest">
                Contact
              </h4>
              <div className="space-y-3 font-medium">
                <p className="text-sm text-slate-900 font-bold">Sales@gts-software.com</p>
                <p className="text-sm">(13) 99610-4848</p>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">
                Follow us
              </span>
              <div className="flex space-x-3 mt-4">
                
                {/* FACEBOOK - Usando 2.png */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61572617272883" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-blue-600 transition-all shadow-sm overflow-hidden group"
                >
                  <img 
                    src="/2.png" 
                    alt="Facebook GTS" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </a>

                {/* INSTAGRAM - Usando 5.png */}
                <a 
                  href="https://www.instagram.com/global_tech_software/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-blue-600 transition-all shadow-sm overflow-hidden group p-1"
                >
                  <img 
                    src="/5.png" 
                    alt="Instagram GTS" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </a>

                {/* X (Twitter) - Usando 3.png */}
                <a 
                  href="https://x.com/GTSsoftware" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-blue-600 transition-all shadow-sm overflow-hidden group p-2"
                >
                  <img 
                    src="/3.png" 
                    alt="X GTS" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </a>

                {/* LINKEDIN - Usando 4.png */}
                <a 
                  href="https://www.linkedin.com/company/gts-globaltechsoftware/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-blue-600 transition-all shadow-sm overflow-hidden group p-2"
                >
                  <img 
                    src="/4.png" 
                    alt="LinkedIn GTS" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Copyright Centralizada */}
        <div className="mt-16 pt-8 border-t border-slate-50 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
          <p>&copy; {currentYear} GTS SOFTWARE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}