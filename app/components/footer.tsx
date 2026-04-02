import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-slate-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Coluna 1: Sobre */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-slate-900 font-bold text-lg">GTS Software</h3>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Innovative systems and design solutions to elevate your digital business with cutting-edge technology.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/systems" className="hover:text-blue-600 transition">
                Systems
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-blue-600 transition">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="space-y-4">
          <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <div className="space-y-2">
            <p className="text-sm flex items-center gap-2">
              Sales@gts-software.com
            </p>
            <p className="text-sm flex items-center gap-2">
              (13) 99610-4848
            </p>
          </div>
          <div className="pt-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">
              Follow us
            </span>
            <div className="flex space-x-4 mt-2">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61572617272883" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-50 cursor-pointer transition text-xs"
              >
                FB
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/global_tech_software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-50 cursor-pointer transition text-xs"
              >
                IN
              </a>
              {/* X (Twitter) */}
              <a 
                href="https://x.com/GTSsoftware" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-50 cursor-pointer transition text-xs"
              >
                X
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/gts-globaltechsoftware/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-50 cursor-pointer transition text-xs"
              >
                LI
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Linha de Copyright */}
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-50 text-center text-[10px] text-slate-400 uppercase tracking-widest">
        <p>&copy; {currentYear} GTS SOFTWARE. All rights reserved.</p>
      </div>
    </footer>
  );
}