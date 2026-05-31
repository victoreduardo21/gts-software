import { 
  Code, 
  Layout, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Lock, 
  Layers, 
  HelpCircle, 
  Sliders 
} from 'lucide-react';
import Link from 'next/link';

// Array de dados dos serviços principais da GTS
const services = [
  {
    title: "Sistemas Personalizados",
    description: "Soluções de software projetadas sob medida para automatizar e escalar seus processos internos.",
    icon: <Code size={24} />,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
    features: ["Sistemas ERP & CRM", "APIs de Integração", "Dashboards de Dados"]
  },
  {
    title: "Sites de Alta Performance",
    description: "Presença digital forte com foco total em conversão, usabilidade e design moderno.",
    icon: <Layout size={24} />,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    features: ["Landing Pages", "Portfólios", "Sites Institucionais"]
  },
  {
    title: "Otimização & SEO",
    description: "Colocamos seu negócio nas primeiras páginas do Google com técnicas avançadas de ranqueamento.",
    icon: <BarChart3 size={24} />,
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=600",
    features: ["Ranqueamento Google", "Otimização de Velocidade", "SEO Técnico"]
  },
  {
    title: "Segurança & Infraestrutura",
    description: "Proteção total para seus dados e disponibilidade garantida em servidores de alta escala.",
    icon: <ShieldCheck size={24} />,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600",
    features: ["Certificados SSL", "Backups Automáticos", "Hospedagem em Nuvem"]
  },
  {
    title: "Manutenção & Suporte",
    description: "Suporte contínuo para garantir que sua tecnologia nunca pare de trabalhar para você.",
    icon: <Zap size={24} />,
    img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600",
    features: ["Correções Críticas 24h", "Atualizações de Segurança", "Suporte Técnico Contínuo"]
  },
  {
    title: "Design UI/UX",
    description: "Interfaces intuitivas projetadas para oferecer a melhor experiência ao seu usuário final.",
    icon: <Globe size={24} />,
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600",
    features: ["Prototipagem Interativa", "Auditoria de Experiência", "Design Mobile-First"]
  }
];

// Base de dados para a nova seção de Perguntas Frequentes (FAQ)
const faqs = [
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Trabalhamos com metodologias ágeis (Scrum). O projeto é dividido em etapas quinzenais (sprints), onde você homologa e acompanha cada funcionalidade entregue em tempo real."
  },
  {
    question: "O código-fonte do sistema será da minha empresa?",
    answer: "Sim. Após a conclusão e quitação do projeto, a propriedade intelectual e todo o código-fonte desenvolvido são transferidos integralmente para a sua empresa."
  },
  {
    question: "Vocês realizam integrações com sistemas antigos?",
    answer: "Perfeitamente. Nossa equipe de engenharia é especializada no desenvolvimento de APIs de integração seguras para conectar novas soluções a bancos de dados ou ERPs legados."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4 font-sans">
      <div className="container mx-auto max-w-6xl">
        
        {/* 1. Seção de Cabeçalho (Header) */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em]">Serviços & Soluções</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight tracking-tight">
            Engenharia especializada para <span className="text-blue-600">escalar</span> seu negócio globalmente.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Na GTS, não apenas criamos software. Construímos o motor digital de alta performance que impulsiona o crescimento real da sua empresa.
          </p>
        </div>

        {/* 2. Grid Principal de Cartões de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group border border-slate-100 rounded-[2.5rem] bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col overflow-hidden h-full"
            >
              <div className="h-48 w-full relative overflow-hidden bg-slate-50 border-b border-slate-100">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-6 text-blue-600 bg-white w-12 h-12 flex items-center justify-center rounded-xl shadow-md border border-slate-100/50">
                  {service.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col grow text-left">
                <h3 className="text-slate-900 font-bold text-2xl mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ADICIONADO: 3. Nova Seção Teaser de Métricas de Performance */}
        <section className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mb-32 text-left">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100/80">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Cpu size={16} /> Latência de Resposta
            </div>
            <p className="text-2xl font-black text-slate-950">&lt; 120ms</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Sistemas otimizados e respostas em tempo real.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100/80">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Terminal size={16} /> Cobertura de Testes
            </div>
            <p className="text-2xl font-black text-slate-950">95% QA</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Testes automatizados preventivos contra bugs.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100/80">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Lock size={16} /> Criptografia de Ponta
            </div>
            <p className="text-2xl font-black text-slate-950">AES-256</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Segurança bancária de nível enterprise de dados.</p>
          </div>
        </section>

        {/* 4. SEÇÃO MANTIDA: Grande Banner Panorâmico (Com sua Imagem Local /6.png) */}
        <section className="w-full mb-32 px-1 text-left">
          <div className="mb-8">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.25em]">Qualidade Arquitetural</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Infraestrutura Global Computacional</h2>
          </div>
          <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
            <img 
              src="/6.png" 
              alt="Placa de circuito integrado e infraestrutura de alta escala global" 
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-10 flex flex-col justify-end">
              <p className="text-white font-medium text-sm md:text-base max-w-xl leading-relaxed">
                Desenvolvemos sob metodologias de microsserviços tolerantes a falhas e arquiteturas limpas com foco em disponibilidade ininterrupta.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Seção de Metodologia/Processo (Timeline) */}
        <section className="bg-slate-50 rounded-[3rem] p-12 md:p-20 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Como entregamos valor</h2>
            <p className="text-slate-500 font-medium">Um fluxo de trabalho claro, transparente e focado em resultados.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-slate-200 z-0"></div>
            
            {[
              { step: "01", title: "Estratégia", desc: "Avaliação técnica e mapeamento detalhado do escopo do projeto." },
              { step: "02", title: "Execução", desc: "Desenvolvimento ágil focado em sprints com atualizações regulares." },
              { step: "03", title: "Sucesso", desc: "Lançamento oficial em ambiente estável, monitoramento ativo e escala." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-blue-600 text-2xl font-black mb-6 shadow-xl shadow-slate-200/50">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADICIONADO: 6. Nova Seção de Nível de Serviço (SLA) e Garantias */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 text-left px-2">
          <div>
            <div className="text-blue-600 mb-4"><Sliders size={28} /></div>
            <h4 className="text-slate-900 font-bold text-xl mb-2 tracking-tight">Escalabilidade Plena</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Sistemas projetados para suportar picos massivos de acessos simultâneos sem lentidão ou quedas operacionais.</p>
          </div>
          <div>
            <div className="text-blue-600 mb-4"><ShieldCheck size={28} /></div>
            <h4 className="text-slate-900 font-bold text-xl mb-2 tracking-tight">Segurança Ativa</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Proteção contra ataques e vulnerabilidades da OWASP através de rotinas rígidas de higienização de código.</p>
          </div>
          <div>
            <div className="text-blue-600 mb-4"><Layers size={28} /></div>
            <h4 className="text-slate-900 font-bold text-xl mb-2 tracking-tight">Arquitetura Limpa</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Documentação de código estruturada que facilita manutenções futuras eficientes por qualquer equipe técnica.</p>
          </div>
        </section>

        {/* ADICIONADO: 7. Nova Seção de Perguntas Frequentes (FAQ) */}
        <section className="max-w-4xl mx-auto text-left mb-32 px-2">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider justify-center md:justify-start">
            <HelpCircle size={18} /> Dúvidas Frequentes
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight text-center md:text-left">Perguntas sobre nossos Serviços</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <h4 className="text-slate-900 font-bold text-lg mb-2">{faq.question}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Banner de Fechamento de Compromisso (Gradiente Escuro Premium) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-[3rem] p-12 md:p-16 text-white text-left shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>

          <div className="lg:col-span-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Pronto para iniciar seu próximo projeto global?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium max-w-2xl">
              Nossa equipe está preparada para lidar com desafios de alta complexidade empresarial. Garantimos conformidade técnica avançada, segurança robusta e código de alta performance para todas as nossas soluções.
            </p>
            <div className="flex flex-wrap gap-3 text-slate-400 font-bold text-[10px] tracking-widest uppercase">
              <span className="bg-slate-800/60 px-4 py-2 rounded-full border border-slate-800">#AltaPerformance</span>
              <span className="bg-slate-800/60 px-4 py-2 rounded-full border border-slate-800">#Escalabilidade</span>
              <span className="bg-slate-800/60 px-4 py-2 rounded-full border border-slate-800">#Segurança</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end relative z-10 w-full">
            <Link 
              href="/contact"
              className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/30 w-full lg:w-auto text-center"
            >
              Solicitar Orçamento <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}