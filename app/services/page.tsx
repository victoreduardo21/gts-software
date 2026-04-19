import { Code, Layout, BarChart3, ShieldCheck, Zap, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Sistemas Personalizados",
    description: "Soluções de software projetadas sob medida para automatizar e escalar seus processos internos.",
    icon: <Code size={32} />,
    features: ["Sistemas ERP & CRM", "APIs de Integração", "Dashboards de Dados"]
  },
  {
    title: "Sites de Alta Performance",
    description: "Presença digital forte com foco total em conversão, usabilidade e design moderno.",
    icon: <Layout size={32} />,
    features: ["Landing Pages", "Portfólios", "Sites Institucionais"]
  },
  {
    title: "Otimização & SEO",
    description: "Colocamos seu negócio nas primeiras páginas do Google com técnicas avançadas de ranqueamento.",
    icon: <BarChart3 size={32} />,
    features: ["Ranqueamento Google", "Otimização de Velocidade", "SEO Técnico"]
  },
  {
    title: "Segurança & Infraestrutura",
    description: "Proteção total para seus dados e disponibilidade garantida em servidores de alta escala.",
    icon: <ShieldCheck size={32} />,
    features: ["Certificados SSL", "Backups Automáticos", "Hospedagem em Nuvem"]
  },
  {
    title: "Manutenção & Suporte",
    description: "Suporte contínuo para garantir que sua tecnologia nunca pare de trabalhar para você.",
    icon: <Zap size={32} />,
    features: ["Correções Críticas 24h", "Atualizações de Segurança", "Suporte Técnico Contínuo"]
  },
  {
    title: "Design UI/UX",
    description: "Interfaces intuitivas projetadas para oferecer a melhor experiência ao seu usuário final.",
    icon: <Globe size={32} />,
    features: ["Prototipagem Interativa", "Auditoria de Experiência", "Design Mobile-First"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* 1. Header Section */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em]">Serviços & Soluções</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
            Engenharia especializada para <span className="text-blue-500">escalar</span> seu negócio globalmente.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl">
            Na GTS, não apenas criamos software. Construímos o motor que impulsiona o crescimento da sua empresa.
          </p>
        </div>

        {/* 2. Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 border border-slate-100 rounded-3xl bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm shadow-blue-100">
                {service.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-2xl mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 min-h-[48px]">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. Nosso Processo (Timeline) */}
        <section className="bg-slate-50 rounded-[3rem] p-12 md:p-20 mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Como entregamos valor</h2>
                <p className="text-slate-500 font-medium">Um fluxo de trabalho claro, transparente e focado em resultados.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Linha conectora (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-10 z-0"></div>
                
                {[
                    { step: "01", title: "Estratégia", desc: "Avaliação técnica e mapeamento do projeto." },
                    { step: "02", title: "Execução", desc: "Desenvolvimento ágil com atualizações quinzenais." },
                    { step: "03", title: "Sucesso", desc: "Lançamento, monitoramento e escala contínua." }
                ].map((item, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-blue-600 text-2xl font-black mb-6 shadow-xl shadow-slate-200">
                            {item.step}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. Banner de Compromisso Global */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 rounded-[3rem] p-12 text-white">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-blue-400">Pronto para iniciar seu próximo projeto global?</h2>
                <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                    Nossa equipe está preparada para lidar com desafios de nível empresarial. Garantimos 99,9% de uptime e código de alta qualidade para todas as nossas soluções personalizadas.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-slate-800 px-4 py-2 rounded-full text-xs font-bold border border-slate-700">#AltaPerformance</span>
                    <span className="bg-slate-800 px-4 py-2 rounded-full text-xs font-bold border border-slate-700">#Escalabilidade</span>
                    <span className="bg-slate-800 px-4 py-2 rounded-full text-xs font-bold border border-slate-700">#Segurança</span>
                </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                <Link 
                    href="/contact"
                    className="group bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/20"
                >
                    Solicitar Orçamento <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}