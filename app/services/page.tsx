import { Code, Layout, BarChart3, ShieldCheck, Zap, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Custom Systems",
    description: "Engineered software solutions tailored to automate and scale your internal processes.",
    icon: <Code size={32} />,
    features: ["ERP & CRM Systems", "Integration APIs", "Data Dashboards"]
  },
  {
    title: "High-Performance Websites",
    description: "Strong digital presence with a total focus on conversion, usability, and modern design.",
    icon: <Layout size={32} />,
    features: ["Landing Pages", "Portfolios", "Institutional Sites"]
  },
  {
    title: "Optimization & SEO",
    description: "We put your business on the first pages of search engines with advanced techniques.",
    icon: <BarChart3 size={32} />,
    features: ["Google Search Ranking", "Load Speed Optimization", "Technical SEO"]
  },
  {
    title: "Security & Infrastructure",
    description: "Total protection for your data and guaranteed availability on high-scale servers.",
    icon: <ShieldCheck size={32} />,
    features: ["SSL Certificates", "Automatic Backups", "Cloud Hosting"]
  },
  {
    title: "Maintenance & Support",
    description: "Continuous support to ensure your technology never stops working for you.",
    icon: <Zap size={32} />,
    features: ["24h Critical Fixes", "Security Updates", "Ongoing Technical Support"]
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces designed to offer the best experience to your end user.",
    icon: <Globe size={32} />,
    features: ["Interactive Prototyping", "User Experience Audit", "Mobile-First Design"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* 1. Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em]">Services & Solutions</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
            Specialized engineering to <span className="text-blue-500">scale</span> your business globally.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl">
            At GTS, we don't just build software. We build the engine that drives your business forward.
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
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12">
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

        {/* 3. NEW: The Process Section (Timeline) */}
        <section className="bg-slate-50 rounded-[3rem] p-12 md:p-20 mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">How we deliver value</h2>
                <p className="text-slate-500">A clear, transparent and results-driven workflow.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Linha conectora (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-10 z-0"></div>
                
                {[
                    { step: "01", title: "Strategy", desc: "Technical assessment and project mapping." },
                    { step: "02", title: "Execution", desc: "Agile development with bi-weekly updates." },
                    { step: "03", title: "Success", desc: "Launch, monitoring and continuous scaling." }
                ].map((item, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-blue-600 text-2xl font-black mb-6 shadow-xl shadow-slate-200">
                            {item.step}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. NEW: Global Commitment Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 rounded-[3rem] p-12 text-white">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">Ready to start your next global venture?</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Our team is ready to handle enterprise-level challenges. We guarantee 99.9% uptime and high-end code quality for all our customized solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-slate-800 px-4 py-2 rounded-full text-xs font-bold border border-slate-700">#HighPerformance</span>
                    <span className="bg-slate-800 px-4 py-2 rounded-full text-xs font-bold border border-slate-700">#ScaleReady</span>
                    <span className="bg-slate-800 px-4 py-2 rounded-full text-xs font-bold border border-slate-700">#SecurityFirst</span>
                </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                <Link 
                    href="/contact"
                    className="group bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 transition-all transform hover:scale-105"
                >
                    Get a Quote <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}