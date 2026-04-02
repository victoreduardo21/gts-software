import { Database, Cpu, BarChart, Lock, Layers, Settings, ArrowRight, Server, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const systems = [
  {
    title: "ERP & Business Management",
    desc: "Full control of inventory, finance, and sales in a single centralized, cloud-native platform.",
    icon: <Database size={24} />,
  },
  {
    title: "AI & Automation",
    desc: "Integration of Artificial Intelligence and LLMs to automate repetitive and complex tasks.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Real-Time Dashboards",
    desc: "Monitor your KPIs with interactive, high-precision charts and real-time data streaming.",
    icon: <BarChart size={24} />,
  },
  {
    title: "Data Security",
    desc: "End-to-end encrypted systems compliant with international standards like GDPR and LGPD.",
    icon: <Lock size={24} />,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scalable architectures that grow seamlessly with your company's global demand.",
    icon: <Layers size={24} />,
  },
  {
    title: "API Integration",
    desc: "Connect your custom software with the tools you already use (Stripe, Salesforce, Hubspot).",
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
              Enterprise Software
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mt-6 mb-6 leading-[1.1] tracking-tight">
              Systems built to <span className="text-blue-600">orchestrate</span> your growth.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mb-8 leading-relaxed">
              We develop core-solid software for companies that demand efficiency, high-level security, and global scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                Request a Demo <ArrowRight size={18} />
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
                    <h3 className="text-slate-900 font-black text-3xl mb-4">GTS Core™</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed italic">Our proprietary foundation enables 3x faster development of custom enterprise systems without compromising quality.</p>
                    <div className="space-y-4">
                        {[
                            { label: 'Multi-tenant Architecture', icon: <Layers size={16}/> },
                            { label: 'Microservices Ready', icon: <Cpu size={16}/> },
                            { label: 'Ultra-Low Latency', icon: <Zap size={16}/> }
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
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Core Capabilities</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {systems.map((item, index) => (
            <div 
              key={index}
              className="p-10 border border-slate-100 rounded-[2rem] bg-white hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-500 group"
            >
              <div className="text-blue-600 mb-8 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-4 leading-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4. Technical Assurance Section */}
        <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Reliability at the <br/><span className="text-blue-500">Source Code</span> level.</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="bg-blue-600/20 p-3 rounded-xl h-fit text-blue-400">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">ISO-Standard Quality</h4>
                                <p className="text-slate-400 text-sm">Every line of code undergoes rigorous automated testing and peer review.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-blue-600/20 p-3 rounded-xl h-fit text-blue-400">
                                <Server size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">99.99% Uptime SLA</h4>
                                <p className="text-slate-400 text-sm">Our cloud architectures are designed for high availability and disaster recovery.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl">
                    <p className="text-blue-400 font-mono text-xs mb-4">{'// System_Architecture.config'}</p>
                    <pre className="text-xs md:text-sm font-mono text-slate-300 leading-relaxed">
                        <code>
                            {`{
  "protocol": "Secure-GTS-Core",
  "deployment": "Automated-CI/CD",
  "scalability": "Elastic-Horizontal",
  "monitoring": "24/7-RealTime",
  "status": "Ready_To_Deploy"
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