import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Code2, Globe, Laptop, Rocket, Users, Smartphone, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-32 pb-20 px-4 text-center bg-white">
      {/* 1. Hero Section */}
      <section className="max-w-4xl mb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Soluções Digitais para o sua{" "}
          <span className="text-blue-600">Empresa</span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Desenvolvemos sistemas personalizados, websites modernos e portfólios de alto impacto 
          para fazer sua empresa se destacar no mercado global.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-100 transform hover:-translate-y-1"
          >
            Descobrir Serviços
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 border border-slate-200 hover:border-slate-300 text-slate-900 font-bold rounded-lg transition-all hover:bg-slate-50"
          >
            Ver Portfólio
          </Link>
        </div>
      </section>

      {/* 2. Core Pillars Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl w-full mb-32">
        <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-600 font-bold mb-3 text-lg">Sistemas</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Gestão eficiente e tecnologia de ponta para expandir sua operação com segurança.
          </p>
        </div>

        <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-600 font-bold mb-3 text-lg">Sites</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Forte presença digital com foco total em conversão, usabilidade e
            design moderno.
          </p>
        </div>

        <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-600 font-bold mb-3 text-lg">Desempenho</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Sites extremamente rápidos otimizados para alcançar as primeiras páginas do
            Google.
          </p>
        </div>
      </section>

      {/* 3. Stats & Authority */}
      <section className="w-full max-w-6xl border-y border-slate-100 py-16 mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">50+</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Projetos Entregues</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">10+</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Países Atendidos</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">100%</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Qualidade do Código</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">24/7</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Suporte Global</p>
        </div>
      </section>

      {/* 4. Why Choose GTS? */}
      <section className="max-w-6xl w-full text-left mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Excelência em engenharia para a <span className="text-blue-600">era digital.</span>
          </h2>
          <ul className="space-y-4">
            {[
              "Desenvolvimento ágil para entrega rápida",
              "Arquiteturas escaláveis",
              "Foco em design centrado no usuário",
              "Protocolos de segurança de nível empresarial",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                <CheckCircle className="text-blue-600" size={20} /> {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3">
               <Rocket className="text-blue-600" />
               <span className="text-xs font-bold text-slate-400">VELOCIDADE</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3">
               <Code2 className="text-blue-600" />
               <span className="text-xs font-bold text-slate-400">CÓDIGO LIMPO</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3">
               <Users className="text-blue-600" />
               <span className="text-xs font-bold text-slate-400">EQUIPE</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3">
               <Laptop className="text-blue-600" />
               <span className="text-xs font-bold text-slate-400">UI MODERNA</span>
            </div>
        </div>
      </section>

{/* SEÇÃO: Software Engineering Highlight (DESIGN ATUALIZADO) */}
      <section className="max-w-6xl w-full mb-32 py-16 px-8 bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden relative mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left relative z-10">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4 uppercase tracking-[0.2em]">
              <Laptop size={20} /> Engenharia de Software Avançada
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 leading-tight tracking-tighter">
              Sistemas sob medida que <span className="text-blue-600">impulsionam resultados.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
             Mais do que apenas aplicativos, construímos ecossistemas digitais completos.
             De sistemas ERP complexos a plataformas web de alto desempenho,
             desenvolvemos a tecnologia essencial que impulsiona empresas globais..
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-slate-700">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider">
                <Code2 className="text-blue-600" size={18} /> Núcleo Empresarial
              </div>
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider">
                <Globe className="text-blue-600" size={18} /> Web Escalável
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              Comece seu projeto
            </Link>
          </div>

          <div className="relative group">
            {/* Moldura da Imagem 1.jpg */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-4 border-white transform group-hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="/1.jpg" 
                alt="Software Engineering Showcase" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Efeitos visuais de fundo */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      
      {/* 5. Final CTA Section */}
      <section className="w-full max-w-6xl bg-blue-600 rounded-3xl p-12 text-white flex flex-col items-center shadow-2xl shadow-blue-200">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para escalar seu negócio?</h2>
          <p className="text-blue-100 mb-10 text-lg max-w-xl">
            Vamos transformar sua visão em um produto digital de classe mundial. 
            Entre em contato com nossa equipe de engenharia hoje.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Comece seu projeto
          </Link>
      </section>
    </div>
  );
}