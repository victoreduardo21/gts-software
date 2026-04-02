import Link from "next/link";
import { CheckCircle, Code2, Globe, Laptop, Rocket, Users } from "lucide-react";

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

      {/* 3. New Section: Stats & Authority */}
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

      {/* 4. New Section: Why Choose GTS? */}
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