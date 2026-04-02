import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Título da Página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Contato
          </h1>
          <p className="text-slate-500 text-lg">
            Estamos prontos para ajudar o seu negócio a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card WhatsApp - Ocupa as duas colunas no desktop */}
          <a
            href="https://wa.me/5513996104848"
            target="_blank"
            className="md:col-span-2 flex items-center justify-between p-8 bg-white border border-emerald-100 rounded-3xl hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-6">
              <div className="bg-emerald-500 p-4 rounded-2xl text-white">
                <MessageCircle size={32} />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-xl">
                  WhatsApp Commercial
                </h3>
                <p className="text-emerald-600 font-medium">
                  Resposta em tempo real
                </p>
              </div>
            </div>
            <span className="text-slate-300 group-hover:text-emerald-500 transition-colors">
              →
            </span>
          </a>

          {/* Card de E-mails */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-blue-600" size={24} />
              <h3 className="text-slate-900 font-bold text-lg">E-mails</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  Sales
                </p>
                <p className="text-slate-800">sales@gts-software.com</p>
              </div>
              <div className="pt-4 border-t border-slate-50">
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  Finance
                </p>
                <p className="text-slate-800">financeiro@gts-software.com</p>
              </div>
            </div>
          </div>

          {/* Card Sede e Horário */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600" size={24} />
              <div>
                <h3 className="text-slate-900 font-bold italic">Sede Global</h3>
                <p className="text-slate-500 text-sm">
                  Empresa Internacional Atendimento Global Brasil / Portugal /
                  EUA
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 pt-4 border-t border-slate-50">
              <Clock className="text-blue-600" size={24} />
              <div>
                <h3 className="text-slate-900 font-bold italic">
                  Horário (Brasília)
                </h3>
                <p className="text-slate-500 text-sm">
                  Segunda a Sexta: 09h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
