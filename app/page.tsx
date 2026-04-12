import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Code2, Globe, Laptop, Rocket, Users, Smartphone, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-32 pb-20 px-4 text-center bg-white">
      {/* 1. Hero Section */}
      <section className="max-w-4xl mb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Digital Solutions for your{" "}
          <span className="text-blue-600">Enterprise</span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          We develop customized systems, modern websites, and high-impact
          portfolios to make your business stand out in the global market.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-100 transform hover:-translate-y-1"
          >
            Discover Services
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 border border-slate-200 hover:border-slate-300 text-slate-900 font-bold rounded-lg transition-all hover:bg-slate-50"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* 2. Core Pillars Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl w-full mb-32">
        <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-600 font-bold mb-3 text-lg">Systems</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Efficient management and cutting-edge technology to safely scale
            your operation.
          </p>
        </div>

        <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-600 font-bold mb-3 text-lg">Websites</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Strong digital presence with a total focus on conversion, usability,
            and modern design.
          </p>
        </div>

        <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-600 font-bold mb-3 text-lg">Performance</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Extremely fast websites optimized to reach the first pages of
            Google.
          </p>
        </div>
      </section>

      {/* 3. Stats & Authority */}
      <section className="w-full max-w-6xl border-y border-slate-100 py-16 mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">50+</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Projects Delivered</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">10+</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Countries Served</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">100%</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Code Quality</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">24/7</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Global Support</p>
        </div>
      </section>

      {/* 4. Why Choose GTS? */}
      <section className="max-w-6xl w-full text-left mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Engineering excellence for the <span className="text-blue-600">digital age.</span>
          </h2>
          <ul className="space-y-4">
            {[
              "Agile development for rapid delivery",
              "Scalable architectures",
              "User-centric design focus",
              "Enterprise-grade security protocols",
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
               <span className="text-xs font-bold text-slate-400">SPEED</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3">
               <Code2 className="text-blue-600" />
               <span className="text-xs font-bold text-slate-400">CLEAN CODE</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3">
               <Users className="text-blue-600" />
               <span className="text-xs font-bold text-slate-400">TEAM</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center gap-3">
               <Laptop className="text-blue-600" />
               <span className="text-xs font-bold text-slate-400">MODERN UI</span>
            </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: App Development Highlight (COM IMAGEM 1.jpg) */}
      <section className="max-w-6xl w-full mb-32 py-16 px-8 bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left relative z-10">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4 uppercase tracking-widest">
              <Smartphone size={20} /> Next-Gen Mobile Development
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 leading-tight">
              We build apps that <span className="text-blue-600">define industries.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              From iOS to Android, we create seamless mobile experiences that combine stunning UI with powerful backend architecture. Your vision, engineered for the palm of their hand.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Zap className="text-blue-600" size={18} /> Ultra-Fast Performance
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Shield className="text-blue-600" size={18} /> Secure by Design
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
            >
              Start App Project
            </Link>
          </div>

          <div className="relative group">
            {/* Moldura da Imagem */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/1.jpg" 
                alt="App Development Showcase" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Elementos flutuantes decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="w-full max-w-6xl bg-blue-600 rounded-3xl p-12 text-white flex flex-col items-center shadow-2xl shadow-blue-200">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your business?</h2>
          <p className="text-blue-100 mb-10 text-lg max-w-xl">
            Let's transform your vision into a world-class digital product. 
            Contact our engineering team today.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Your Project Now
          </Link>
      </section>
    </div>
  );
}