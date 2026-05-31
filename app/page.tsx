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
  Car,
  TrendingUp,
  ShieldCheck,
  Coins,
  HelpCircle,
  Briefcase,
  Settings,
  Layers
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-32 pb-20 px-4 text-center bg-white overflow-hidden">
      
      {/* Estilo CSS Injetado para o funcionamento do Carrossel Infinito */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-container:hover .animate-marquee-infinite {
          animation-play-state: paused;
        }
      `}} />

      {/* 1. SEÇÃO: Hero (Foco em Desenvolvimento Sob Medida) */}
      <section className="max-w-4xl mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Sistemas e Soluções Digitais <span className="text-blue-600">Sob Medida</span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Engenharia de software dedicada a criar sistemas exclusivos, plataformas web complexas e portfólios de alto impacto projetados especificamente para as necessidades do seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-100 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Nossos Serviços <ArrowRight size={18} />
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 border border-slate-200 hover:border-slate-300 text-slate-900 font-bold rounded-xl transition-all hover:bg-slate-50 flex items-center justify-center"
          >
            Ver Portfólio
          </Link>
        </div>
      </section>

      {/* 2. SEÇÃO: Carrossel Infinito de Empresas */}
      <section className="w-full max-w-7xl mb-32 px-4 overflow-hidden relative marquee-container">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-12 text-center">
          Marcas integradas com tecnologia e engenharia sob demanda
        </p>
        
        <div className="absolute left-0 top-16 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-16 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden select-none w-full">
          {/* ESTEIRA 1 */}
          <div className="animate-marquee-infinite gap-16 pr-16 items-center opacity-85">
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Utensils className="text-slate-400 group-hover:text-amber-500 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-red-600 transition-colors duration-300">McDonald's</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Store className="text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-green-600 transition-colors duration-300">Subway</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Utensils className="text-slate-400 group-hover:text-amber-600 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-amber-700 transition-colors duration-300">Burger King</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Coffee className="text-slate-400 group-hover:text-emerald-700 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-emerald-700 transition-colors duration-300">Starbucks</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Building2 className="text-slate-400 group-hover:text-red-600 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-red-600 transition-colors duration-300">Santander</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Building2 className="text-slate-400 group-hover:text-red-700 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-red-700 transition-colors duration-300">Bradesco</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Activity className="text-slate-400 group-hover:text-emerald-600 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-emerald-600 transition-colors duration-300">Unimed</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Truck className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-blue-600 transition-colors duration-300">DRB Logistica</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Car className="text-slate-400 group-hover:text-green-500 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-green-500 transition-colors duration-300">Localiza</span>
            </div>
          </div>

          {/* ESTEIRA 2 */}
          <div className="animate-marquee-infinite gap-16 pr-16 items-center opacity-85" aria-hidden="true">
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Utensils className="text-slate-400 group-hover:text-amber-500 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-red-600 transition-colors duration-300">McDonald's</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Store className="text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-green-600 transition-colors duration-300">Subway</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Utensils className="text-slate-400 group-hover:text-amber-600 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-amber-700 transition-colors duration-300">Burger King</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Coffee className="text-slate-400 group-hover:text-emerald-700 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-emerald-700 transition-colors duration-300">Starbucks</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Building2 className="text-slate-400 group-hover:text-red-600 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-red-600 transition-colors duration-300">Santander</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Building2 className="text-slate-400 group-hover:text-red-700 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-red-700 transition-colors duration-300">Bradesco</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Activity className="text-slate-400 group-hover:text-emerald-600 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-emerald-600 transition-colors duration-300">Unimed</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Truck className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-blue-600 transition-colors duration-300">DRB Logistica</span>
            </div>
            <div className="group flex items-center gap-2 cursor-pointer transition-all">
              <Car className="text-slate-400 group-hover:text-green-500 transition-colors duration-300" size={22} />
              <span className="text-slate-400 font-black tracking-tighter text-lg uppercase group-hover:text-green-500 transition-colors duration-300">Localiza</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO: Pilares do Escopo de Software House */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl w-full mb-32">
        <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
            <Settings size={24} />
          </div>
          <h3 className="text-slate-900 font-bold mb-3 text-xl tracking-tight">Sistemas Exclusivos</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Mapeamos as regras de negócio exclusivas da sua empresa para projetar e codificar um software proprietário moldado aos seus processos internos.
          </p>
        </div>

        <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
            <Layers size={24} />
          </div>
          <h3 className="text-slate-900 font-bold mb-3 text-xl tracking-tight">Plataformas Digitais</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Desenvolvemos aplicações corporativas integradas, portais de alto impacto e soluções web escaláveis focadas em alta performance.
          </p>
        </div>

        <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
            <Zap size={24} />
          </div>
          <h3 className="text-slate-900 font-bold mb-3 text-xl tracking-tight">Engenharia e SEO</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Garantimos códigos limpos, arquiteturas robustas de microsserviços e otimização total de velocidade estrutural para motores de busca.
          </p>
        </div>
      </section>

      {/* NOVA SEÇÃO 1 CORRIGIDA: Chamada para Criação e Desenvolvimento Sob Demanda */}
      <section className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 text-left items-center px-2">
        <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" 
            alt="Engenharia de software focada em escopo personalizado" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-10 flex flex-col justify-end">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Engenharia de Ponta</span>
            <h4 className="text-white font-bold text-2xl tracking-tight mb-2">Código Dono do seu Processo</h4>
            <p className="text-slate-300 text-sm font-medium leading-relaxed">Chega de adaptar seu negócio a softwares engessados de prateleira. Nós desenvolvemos o que a sua empresa precisa.</p>
          </div>
        </div>
        <div>
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider block mb-4">Desenvolvimento Dedicado</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-6 leading-tight tracking-tighter">
            Construa um software feito exatamente para a sua <span className="text-blue-600">operação.</span>
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-6">
            Muitas empresas perdem eficiência tentando empilhar planilhas e adaptar processos complexos a sistemas padronizados que não cobrem todas as suas pontas. Nós eliminamos esse problema desenhando e codificando uma infraestrutura tecnológica exclusiva para o seu modelo comercial, integrando com segurança as suas regras operacionais, faturamento e logística.
          </p>
          <ul className="space-y-3 font-bold text-sm text-slate-700">
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> Arquitetura de software desenhada do zero para as suas metas</li>
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> Automações de ponta que resolvem gargalos específicos da sua rotina</li>
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> Total controle, propriedade do código e independência operacional</li>
          </ul>
        </div>
      </section>

      {/* 4. SEÇÃO: Stats & Authority */}
      <section className="w-full max-w-6xl border-y border-slate-100 py-16 mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">50+</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Projetos Customizados</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">10+</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Países Atendidos</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">100%</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Propriedade do Código</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">24/7</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Suporte e Evolução</p>
        </div>
      </section>

      {/* NOVA SEÇÃO 2 CORRIGIDA: Diferenciais Comerciais como Software House */}
      <section className="bg-slate-50 rounded-[3rem] p-12 md:p-16 mb-32 text-left w-full max-w-6xl">
        <div className="max-w-2xl mb-12">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider block mb-2">Nossa Metodologia</span>
          <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Por que delegar seu projeto para a nossa engenharia?</h3>
          <p className="text-slate-500 text-sm font-medium mt-2 leading-relaxed">Não vendemos licenças de uso mensais. Nós criamos ativos digitais proprietários de alta performance para consolidar e valorizar o patrimônio tecnológico da sua marca.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-bold text-sm text-slate-800">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-blue-600 mb-3"><ShieldCheck size={24} /></div>
            <h4 className="text-slate-900 font-black text-xl mb-1">Escopo 100% Flexível</h4>
            <p className="text-slate-400 text-xs font-medium">O projeto se molda integralmente ao seu fluxo operacional, sem remendos ou limitações de telas.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-blue-600 mb-3"><Coins size={24} /></div>
            <h4 className="text-slate-900 font-black text-xl mb-1">Retorno Sobre Ativo</h4>
            <p className="text-slate-400 text-xs font-medium">Substitua custos contínuos de assinaturas internacionais por um software estável de propriedade da sua empresa.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-blue-600 mb-3"><Users size={24} /></div>
            <h4 className="text-slate-900 font-black text-xl mb-1">Evolução Contínua</h4>
            <p className="text-slate-400 text-xs font-medium">Equipe dedicada pronta para arquitetar novos módulos e recursos à medida que seu faturamento expande.</p>
          </div>
        </div>
      </section>

      {/* 6. Why Choose GTS? (Abordagem de Desenvolvimento Ágil) */}
      <section className="max-w-6xl w-full text-left mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Excelência em engenharia para a <span className="text-blue-600">era digital.</span>
          </h2>
          <ul className="space-y-4">
            {[
              "Desenvolvimento ágil com entregas incrementais frequentes",
              "Arquiteturas robustas prontas para crescimento escalável",
              "Foco absoluto em design centrado na experiência do usuário (UX)",
              "Protocolos avançados de segurança e conformidade técnica",
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
               <span className="text-xs font-bold text-slate-400">ESCALABILIDADE</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3 group hover:border-blue-400 border border-transparent transition">
               <Code2 className="text-blue-600 group-hover:scale-110 transition" />
               <span className="text-xs font-bold text-slate-400">CÓDIGO LIMPO</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3 group hover:border-blue-400 border border-transparent transition">
               <Users className="text-blue-600 group-hover:scale-110 transition" />
               <span className="text-xs font-bold text-slate-400">TIME EXPANSIVO</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3 group hover:border-blue-400 border border-transparent transition">
               <Laptop className="text-blue-600 group-hover:scale-110 transition" />
               <span className="text-xs font-bold text-slate-400">PROTÓTIPO EXCLUSIVO</span>
            </div>
        </div>
      </section>

      {/* 7. Software Engineering Highlight */}
      <section className="max-w-6xl w-full mb-32 py-16 px-8 bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden relative mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left relative z-10">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4 uppercase tracking-[0.2em]">
              <Laptop size={20} /> Squads de Desenvolvimento
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 leading-tight tracking-tighter">
              Transformamos sua visão em <span className="text-blue-600">ativos digitais proprietários.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
             Não criamos apenas sites institucionais simples. Construímos ecossistemas corporativos complexos, integrações via APIs seguras e aplicações web de altíssimo desempenho focadas no controle e gerenciamento inteligente de operações comerciais em expansão.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-slate-700">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider">
                <Code2 className="text-blue-600" size={18} /> Projetos Dedicados
              </div>
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider">
                <Globe className="text-blue-600" size={18} /> Arquitetura Escalável
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              Iniciar Levantamento de Escopo
            </Link>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-4 border-white transform group-hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="/1.jpg" 
                alt="Engenharia de Software Personalizada" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 3 CORRIGIDA: FAQ comercial focado em contratação de desenvolvimento */}
      <section className="max-w-4xl w-full text-left mb-32 px-2">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider justify-center md:justify-start">
          <HelpCircle size={18} /> Respostas Rápidas
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight text-center md:text-left">Como funciona o desenvolvimento do seu sistema?</h2>
        <div className="space-y-6">
          <div className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h4 className="text-slate-900 font-bold text-lg mb-2">O código-fonte do sistema será da minha empresa?</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">Sim. Após a conclusão e entrega do escopo contratado, a propriedade intelectual e o código-fonte passam a ser integralmente da sua empresa, garantindo total controle, independência operacional e valorização do seu ativo de mercado.</p>
          </div>
          <div className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h4 className="text-slate-900 font-bold text-lg mb-2">Como acompanho a criação do software?</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">Trabalhamos com metodologias ágeis de desenvolvimento. Dividimos o projeto em sprints semanais ou quinzenais. A cada encerramento de etapa, você recebe um link funcional para testar e validar os módulos criados em tempo real.</p>
          </div>
        </div>
      </section>
      
      {/* 8. Final CTA Section */}
      <section className="w-full max-w-6xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-[2.5rem] p-12 md:p-20 text-white flex flex-col items-center shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight max-w-2xl">Pronto para criar sua solução sob medida?</h2>
            <p className="text-slate-400 mb-10 text-base md:text-lg max-w-xl font-medium opacity-90">
              Mapeie seu escopo com nossa equipe de engenharia e passe a ter um ecossistema digital estável e de propriedade exclusiva do seu negócio.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/30 transform hover:-translate-y-0.5"
            >
              Solicitar Orçamento de Escopo
            </Link>
          </div>
      </section>
    </div>
  );
}