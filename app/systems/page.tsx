import { Database, Cpu, BarChart, Lock, Layers, Settings, ArrowRight, Server, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const systems = [
  {
    title: "ERP & Gestão Empresarial",
    desc: "Controle total de estoque, finanças e vendas em uma única plataforma centralizada e nativa na nuvem.",
    icon: <Database size={24} />,
  },
  {
    title: "IA & Automação",
    desc: "Integração de Inteligência Artificial e LLMs para automatizar tarefas repetitivas e processos complexos.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Dashboards em Tempo Real",
    desc: "Monitore seus KPIs com gráficos interativos de alta precisão e streaming de dados em tempo real.",
    icon: <BarChart size={24} />,
  },
  {
    title: "Segurança de Dados",
    desc: "Sistemas criptografados de ponta a ponta em conformidade com padrões internacionais como GDPR e LGPD.",
    icon: <Lock size={24} />,
  },
  {
    title: "Infraestrutura em Nuvem",
    desc: "Arquiteturas escaláveis que crescem perfeitamente de acordo com a demanda global da sua empresa.",
    icon: <Layers size={24} />,
  },
  {
    title: "Integração via API",
    desc: "Conecte seu software personalizado com as ferramentas que você já usa (Stripe, Salesforce, Hubspot).",
    icon: <Settings size={24} />,
  }
];

export default function SystemsPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="text-left">
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              Software Corporativo
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mt-6 mb-6 leading-[1.1] tracking-tight">
              Sistemas feitos para <span className="text-blue-600">orquestrar</span> seu crescimento.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mb-8 leading-relaxed font-medium">
              Desenvolvemos softwares robustos para empresas que exigem eficiência, segurança de alto nível e escalabilidade global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                Solicitar Demonstração <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          {/* 2. GTS Core Highlight Box */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-slate-50 rounded-[2rem] p-10 border border-slate-100 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-slate-900">
                    <Database size={250} />
                </div>
                <div className="relative z-10">
                    <h3 className="text-slate-900 font-black text-3xl mb-4 text-left font-sans tracking-tighter">GTS Core™</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed italic text-left font-medium">Nossa base proprietária permite um desenvolvimento 3x mais rápido de sistemas empresariais personalizados sem comprometer a qualidade.</p>
                    <div className="space-y-4">
                        {[
                            { label: 'Arquitetura Multi-tenant', icon: <Layers size={16}/> },
                            { label: 'Pronto para Micro-serviços', icon: <Cpu size={16}/> },
                            { label: 'Latência Ultra-Baixa', icon: <Zap size={16}/> }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                <span className="text-blue-600">{item.icon}</span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* 3. Capabilities Grid */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Capacidades Centrais</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 text-left">
          {systems.map((item, index) => (
            <div 
              key={index}
              className="p-10 border border-slate-100 rounded-[2rem] bg-white hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-500 group"
            >
              <div className="text-blue-600 mb-8 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-4 leading-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4. Technical Assurance Section */}
        <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative mx-2">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Confiabilidade ao nível de <br/><span className="text-blue-500 text-italic">Código Fonte</span>.</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="bg-blue-600/20 p-3 rounded-xl h-fit text-blue-400">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Qualidade Padrão ISO</h4>
                                <p className="text-slate-400 text-sm font-medium">Cada linha de código passa por testes automatizados rigorosos e revisão por pares.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-blue-600/20 p-3 rounded-xl h-fit text-blue-400">
                                <Server size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">SLA de 99.99% de Uptime</h4>
                                <p className="text-slate-400 text-sm font-medium">Nossas arquiteturas em nuvem são projetadas para alta disponibilidade e recuperação de desastres.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl text-left">
                    <p className="text-blue-400 font-mono text-xs mb-4">{'// System_Architecture.config'}</p>
                    <pre className="text-xs md:text-sm font-mono text-slate-300 leading-relaxed">
                        <code>
                            {`{
  "protocolo": "Secure-GTS-Core",
  "implantacao": "Automated-CI/CD",
  "escalabilidade": "Elastic-Horizontal",
  "monitoramento": "24/7-RealTime",
  "status": "Pronto_Para_Deploy"
}`}
                        </code>
                    </pre>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}