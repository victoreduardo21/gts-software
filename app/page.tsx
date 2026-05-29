import Link from "next/link";
import { 
  CheckCircle, 
  Code2, 
  Globe, 
  Laptop, 
  Rocket, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight, 
  Utensils, 
  Coffee, 
  Store, 
  Building2, 
  Activity, 
  Truck, 
  Car 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-32 pb-20 px-4 text-center bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="max-w-4xl mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Soluções Digitais para sua{" "}
          <span className="text-blue-600">Empresa</span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Desenvolvemos sistemas personalizados, websites modernos e portfólios de alto impacto 
          para fazer sua empresa se destacar no mercado de tecnologia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-100 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Descobrir Serviços <ArrowRight size={18} />
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 border border-slate-200 hover:border-slate-300 text-slate-900 font-bold rounded-xl transition-all hover:bg-slate-50 flex items-center justify-center"
          >
            Ver Portfólio
          </Link>
        </div>
      </section>

      {/* 2. Seção Dinâmica: Empresas que Confiam */}
      <section className="w-full max-w-6xl mb-32 px-4">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-12">
          Empresas que confiam em nossa tecnologia e sistemas
        </p>
        
        {/* Grid atualizado para comportar até 9 marcas sem esmagar o layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center opacity-75">
          
          {/* McDonald's */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Utensils className="text-slate-600 group-hover:text-amber-500 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-red-600 transition-colors">
              McDonald's
            </span>
          </div>

          {/* Subway */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Store className="text-slate-600 group-hover:text-green-600 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-green-600 transition-colors">
              Subway
            </span>
          </div>

          {/* Burger King */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Utensils className="text-slate-600 group-hover:text-amber-600 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-amber-700 transition-colors">
              Burger King
            </span>
          </div>

          {/* Starbucks */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Coffee className="text-slate-600 group-hover:text-emerald-700 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-emerald-700 transition-colors">
              Starbucks
            </span>
          </div>

          {/* Santander */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Building2 className="text-slate-600 group-hover:text-red-600 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-red-600 transition-colors">
              Santander
            </span>
          </div>

          {/* Bradesco */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Building2 className="text-slate-600 group-hover:text-red-700 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-red-700 transition-colors">
              Bradesco
            </span>
          </div>

          {/* Unimed */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Activity className="text-slate-600 group-hover:text-emerald-600 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-emerald-600 transition-colors">
              Unimed
            </span>
          </div>

          {/* DRB Logística */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Truck className="text-slate-600 group-hover:text-blue-600 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-blue-600 transition-colors">
              DRB Logistica
            </span>
          </div>

          {/* Localiza */}
          <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <Car className="text-slate-600 group-hover:text-green-500 transition-colors" size={22} />
            <span className="text-slate-700 font-black tracking-tighter text-lg uppercase group-hover:text-green-600 transition-colors">
              Localiza
            </span>
          </div>

        </div>
      </section>

      {/* 3. Core Pillars Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl w-full mb-32">
        <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
            <Code2 size={24} />
          </div>
          <h3 className="text-slate-900 font-bold mb-3 text-xl tracking-tight">Sistemas</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Gestão eficiente, automações inteligentes e tecnologia de ponta para expandir sua operação corporativa com segurança de dados absoluta.
          </p>
        </div>

        <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
            <Laptop size={24} />
          </div>
          <h3 className="text-slate-900 font-bold mb-3 text-xl tracking-tight">Sites</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Forte presença digital com foco estrutural total em conversão, usabilidade simplificada e design minimalista e moderno.
          </p>
        </div>

        <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
            <Zap size={24} />
          </div>
          <h3 className="text-slate-900 font-bold mb-3 text-xl tracking-tight">Desempenho</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Páginas leves, extremamente velozes e otimizadas em SEO técnico para alcançar com facilidade o topo dos motores de busca.
          </p>
        </div>
      </section>

      {/* 4. Stats & Authority */}
      <section className="w-full max-w-6xl border-y border-slate-100 py-16 mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">50+</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Projetos Entregues</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">10+</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Países Atendidos</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">100%</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Qualidade de Código</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">24/7</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Suporte Global</p>
        </div>
      </section>

      {/* 5. Grid de Imagens do Unsplash */}
{/* SEÇÃO ATUALIZADA: Apenas uma Imagem de Banner Única */}
<section className="max-w-6xl w-full mb-32 px-2">
  <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
    <img 
      src="https://blog.estudesemfronteiras.com/wp-content/uploads/2024/09/algoritmo-e-logica-de-programacao.webp" 
      alt="Algoritmo e Lógica de Programação" 
      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
    />
  </div>
</section>
      {/* 6. Why Choose GTS? */}
      <section className="max-w-6xl w-full text-left mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Excelência em engenharia para a <span className="text-blue-600">era digital.</span>
          </h2>
          <ul className="space-y-4">
            {[
              "Desenvolvimento ágil para entrega rápida e modular",
              "Arquiteturas de microsserviços altamente escaláveis",
              "Foco absoluto em design centrado na experiência do usuário (UX)",
              "Protocolos avançados de segurança e conformidade de dados",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                <CheckCircle className="text-blue-600 shrink-0" size={20} /> {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3 group hover:border-blue-400 border border-transparent transition">
               <Rocket className="text-blue-600 group-hover:scale-110 transition" />
               <span className="text-xs font-bold text-slate-400">VELOCIDADE</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3 group hover:border-blue-400 border border-transparent transition">
               <Code2 className="text-blue-600 group-hover:scale-110 transition" />
               <span className="text-xs font-bold text-slate-400">CÓDIGO LIMPO</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3 group hover:border-blue-400 border border-transparent transition">
               <Users className="text-blue-600 group-hover:scale-110 transition" />
               <span className="text-xs font-bold text-slate-400">EQUIPE</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3 group hover:border-blue-400 border border-transparent transition">
               <Laptop className="text-blue-600 group-hover:scale-110 transition" />
               <span className="text-xs font-bold text-slate-400">UI MODERNA</span>
            </div>
        </div>
      </section>

      {/* 7. Software Engineering Highlight */}
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
             desenvolvemos a tecnologia essencial que impulsiona empresas estáveis.
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
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-4 border-white transform group-hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="/1.jpg" 
                alt="Exibição de Engenharia de Software" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      
      {/* 8. Final CTA Section */}
      <section className="w-full max-w-6xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-[2.5rem] p-12 md:p-20 text-white flex flex-col items-center shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight max-w-2xl">Pronto para escalar seu negócio?</h2>
            <p className="text-slate-400 mb-10 text-base md:text-lg max-w-xl font-medium opacity-90">
              Vamos transformar sua visão em um produto digital de classe mundial. 
              Entre em contato com nossa equipe de engenharia hoje mesmo.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/30 transform hover:-translate-y-0.5"
            >
              Comece seu projeto
            </Link>
          </div>
      </section>
    </div>
  );
}