import { 
  Database, 
  Cpu, 
  BarChart, 
  Lock, 
  Layers, 
  Settings, 
  ArrowRight, 
  Server, 
  Zap, 
  ShieldCheck, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  ShieldAlert,
  Coins
} from 'lucide-react';
import Link from 'next/link';

// Array de dados com as capacidades centrais dos sistemas (Foco em Soluções)
const systems = [
  {
    title: "ERP & Gestão Empresarial",
    desc: "Controle total de estoque, finanças e vendas em uma única plataforma centralizada e nativa na nuvem.",
    icon: <Database size={24} />,
  },
  {
    title: "IA & Automação de Processos",
    desc: "Integração de Inteligência Artificial para automatizar tarefas repetitivas, reduzindo custos operacionais.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Dashboards Gerenciais",
    desc: "Monitore os indicadores de faturamento e desempenho da sua equipe com gráficos interativos de alta precisão.",
    icon: <BarChart size={24} />,
  },
  {
    title: "Segurança de Dados Corporativos",
    desc: "Sistemas criptografados de ponta a ponta em total conformidade com as regras rígidas da LGPD.",
    icon: <Lock size={24} />,
  },
  {
    title: "Infraestrutura Escalável",
    desc: "Arquiteturas robustas de servidores que acompanham perfeitamente o ritmo de crescimento da sua empresa.",
    icon: <Layers size={24} />,
  },
  {
    title: "Integração de Sistemas",
    desc: "Conecte seu novo software de forma transparente com as ferramentas e adquirentes de pagamento que você já utiliza.",
    icon: <Settings size={24} />,
  }
];

export default function SystemsPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4 font-sans">
      <div className="container mx-auto max-w-6xl">
        
        {/* 1. Hero Section (Apresentação Principal) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="text-left">
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              Software Corporativo
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mt-6 mb-6 leading-[1.1] tracking-tight">
              Sistemas feitos para <span className="text-blue-600">orquestrar</span> seu crescimento.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mb-8 leading-relaxed font-medium">
              Desenvolvemos softwares robustos para empresas que exigem eficiência máxima, segurança de alto nível e lucratividade.
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
                    <p className="text-slate-600 mb-8 leading-relaxed italic text-left font-medium">Nossa estrutura comercial permite entregar sistemas empresariais personalizados em tempo recorde, reduzindo o tempo de espera do seu negócio.</p>
                    <div className="space-y-4">
                        {[
                            { label: 'Segurança Centralizada de Dados', icon: <Lock size={16}/> },
                            { label: 'Processamento de Altíssima Velocidade', icon: <Zap size={16}/> },
                            { label: 'Painéis Prontos para Tomada de Decisão', icon: <BarChart size={16}/> }
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

        {/* 3. Seção Visual: Soluções Comerciais */}
        <section className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 text-left items-center px-2">
          <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" 
              alt="Gestão inteligente e centralização de processos" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-10 flex flex-col justify-end">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Controle Absoluto</span>
              <h4 className="text-white font-bold text-2xl tracking-tight mb-2">Processos Integrados</h4>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">Elimine planilhas paralelas e centralize a sua operação em um ecossistema blindado contra falhas humanas.</p>
            </div>
          </div>
          <div>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider block mb-4">Engenharia Focada em Negócios</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-6 leading-tight tracking-tighter">
              A tecnologia certa para gerar <span className="text-blue-600">mais lucro e eficiência.</span>
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-6">
              Sistemas antigos e lentos geram desperdício de tempo e dinheiro. Desenvolvemos softwares modernos pensados estrategicamente para simplificar o dia a dia da sua equipe e otimizar seus custos operacionais.
            </p>
            <ul className="space-y-3 font-bold text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> Redução drástica do trabalho manual através de automações de processos</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> Relatórios financeiros precisos gerados de forma automática em segundos</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> Sistema limpo, rápido e intuitivo para fácil adaptação dos colaboradores</li>
            </ul>
          </div>
        </section>

        {/* 4. Capabilities Grid */}
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

        {/* ALTERADO: 5. Nova Seção de Resultados Reais para a Operação (ROI) */}
        <section className="bg-slate-50 rounded-[3rem] p-12 md:p-16 mb-32 text-left">
          <div className="max-w-2xl mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider block mb-2">Retorno sobre o Investimento</span>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">O que sua empresa ganha com nossos sistemas</h3>
            <p className="text-slate-500 text-sm font-medium mt-2 leading-relaxed">Investir em tecnologia própria é criar um ativo valioso para o seu negócio. Veja os principais indicadores de melhoria dos nossos clientes:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-bold text-sm text-slate-800">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-blue-600 mb-3"><Coins size={20} /></div>
              <h4 className="text-slate-900 font-black text-xl mb-1">Redução de Custos</h4>
              <p className="text-slate-400 text-xs font-medium">Economia significativa na folha e eliminação de desperdícios de estoque.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-blue-600 mb-3"><Clock size={20} /></div>
              <h4 className="text-slate-900 font-black text-xl mb-1">Ganho de Tempo</h4>
              <p className="text-slate-400 text-xs font-medium">Processos que levavam dias passam a ser executados em poucos minutos.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-blue-600 mb-3"><TrendingUp size={20} /></div>
              <h4 className="text-slate-900 font-black text-xl mb-1">Decisões Seguras</h4>
              <p className="text-slate-400 text-xs font-medium">Gráficos comerciais em tempo real para direcionar as estratégias da empresa.</p>
            </div>
          </div>
        </section>

        {/* 6. SEÇÃO MANTIDA: Banner de Imagem Local (/6.png) */}
        <section className="w-full mb-32 px-1 text-left">
          <div className="mb-8">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.25em]">Tecnologia Comercial</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Sistemas que Eliminam Erros e Aceleram suas Vendas</h2>
          </div>
          <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
            <img 
              src="/7.jpg" 
              alt="Placa de circuito integrado e infraestrutura de alta escala global" 
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-10 flex flex-col justify-end">
              <p className="text-white font-medium text-sm md:text-base max-w-xl leading-relaxed">
                Criamos softwares totalmente seguros e fáceis de usar, feitos para organizar as finanças da sua empresa, automatizar seus processos diários e dar total controle sobre a sua operação.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Technical Assurance Section */}
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
                                <h4 className="font-bold text-lg">Qualidade e Estabilidade</h4>
                                <p className="text-slate-400 text-sm font-medium">Cada funcionalidade do sistema passa por testes preventivos rigorosos antes de ir para o ar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-blue-600/20 p-3 rounded-xl h-fit text-blue-400">
                                <Server size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Disponibilidade de 99.99%</h4>
                                <p className="text-slate-400 text-sm font-medium">Seu sistema fica disponível na nuvem 24 horas por dia para garantir o funcionamento da sua empresa.</p>
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