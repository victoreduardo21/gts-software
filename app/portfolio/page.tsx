import { ExternalLink, MessageCircle, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Plataforma de Videoconferência",
    link: "https://videocalling.hostgator-builder.site/",
    category: "Comunicação",
    img: "https://digitalnetbr.com.br/wp-content/uploads/2020/07/7349meio.png",
  },
  {
    title: "BodyCar Automotiva",
    link: "https://bodycar.hostgator-builder.site/",
    category: "Automotivo",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
  },
  {
    title: "Corpio Business",
    link: "https://corpio.hostgator-builder.site/",
    category: "Corporativo",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
  {
    title: "CarWash New",
    link: "https://carwashnew.hostgator-builder.site/",
    category: "Serviços",
    img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800",
  },
  {
    title: "Gym Fit 2",
    link: "https://gym2.hostgator-builder.site/",
    category: "Fitness",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
  },
  {
    title: "CarParts Store",
    link: "https://carparts.hostgator-builder.site/",
    category: "E-commerce",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
  },
  {
    title: "Architekt Studio",
    link: "https://architekt.hostgator-builder.site/",
    category: "Arquitetura",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800",
  },
  {
    title: "Business Advisors",
    link: "https://advisors.hostgator-builder.site/",
    category: "Consultoria",
    img: "https://www.balaminut.com.br/img/paginas/g_capa%20setembro.jpg",
  },
  {
    title: "Snow Removal",
    link: "https://snowremoval.hostgator-builder.site/",
    category: "Serviços",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQa4jhDgr6on2QnqgA37qdM-c4WwiKAh0BvQ&s",
  },
  {
    title: "Launch Podcast",
    link: "https://lounchpodcast.hostgator-builder.site/",
    category: "Mídia",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800",
  },
  {
    title: "Barber Shop",
    link: "https://site-barbeiro.netlify.app/",
    category: "Estilo de Vida",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-4 font-sans">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header CENTRALIZADO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Nosso <span className="text-blue-600">Portfólio</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic font-medium">
            Construímos o motor que impulsiona o seu negócio digital para o futuro.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-64 relative overflow-hidden bg-slate-200">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-slate-600 uppercase tracking-widest border border-slate-100">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col grow text-left">
                <h3 className="text-slate-900 font-bold text-xl mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-4 transition-all uppercase tracking-tighter"
                  >
                    Ver Projeto Ao Vivo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Contato CENTRALIZADO */}
        <section className="relative overflow-hidden bg-blue-600 rounded-[2.5rem] p-8 md:p-14 text-white text-center shadow-xl shadow-blue-200 max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[80px] opacity-30"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
              <MessageCircle size={24} />
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight">
              Pronto para escalar?
            </h2>

            <p className="text-blue-50 text-base md:text-lg mb-10 leading-relaxed font-medium opacity-90">
              Não deixe seu projeto para amanhã. Vamos conversar sobre seus
              objetivos de negócio no WhatsApp agora mesmo.
            </p>

            <a
              href="https://wa.me/5513996104848"
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-base hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg shadow-blue-900/10"
            >
              Falar Conosco <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}