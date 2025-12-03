import {
  BookOpen, Activity, Zap, Heart, Shield, Brain,
  Clock, Flame, Target, Smile, ShieldCheck, ThumbsUp
} from 'lucide-react';
import CTAButton from './CTAButton';

export default function Promise() {
  const methodology = [
    { icon: BookOpen, text: 'Técnica real' },
    { icon: Activity, text: 'Controle da excitação' },
    { icon: Zap, text: 'Ereção firme' },
    { icon: Heart, text: 'Prazer feminino avançado' },
    { icon: Shield, text: 'Confiança sexual' },
    { icon: Brain, text: 'Mentalidade masculina' }
  ];

  const results = [
    { icon: Clock, text: 'Durar muito mais' },
    { icon: Zap, text: 'Ereção rígida' },
    { icon: Flame, text: 'Orgasmos nela' },
    { icon: Target, text: 'Controle da excitação' },
    { icon: Smile, text: 'Muito mais prazer' },
    { icon: ShieldCheck, text: 'Confiança real' },
    { icon: ThumbsUp, text: 'Fim da insegurança' }
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>

        <h2 className="font-['Bebas_Neue'] font-normal text-4xl md:text-5xl text-center leading-tight mb-6 tracking-wide">
          Você pode elevar seu desempenho sexual muito mais rápido do que imagina.
        </h2>
        <p className="font-['Inter'] text-base md:text-lg leading-snug md:leading-relaxed text-center mb-12 max-w-4xl mx-auto text-[#D0D0D0]">
          Você não precisa de meses de estudo, nem de truques aleatórios que nunca funcionam. Quando você recebe a orientação certa técnica, controle e estabilidade a evolução acontece rápido. Muito rápido. Porque a maioria dos seus problemas não vem de “defeitos”, mas de falta de método. Com o passo a passo correto, seu desempenho melhora de forma visível, consistente e imediata.
        </p>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <h3 className="font-['Montserrat'] font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent whitespace-nowrap">
              POR QUE FUNCIONA?
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] via-black to-[#0F0F0F] border border-[#D4AF37] border-opacity-30 rounded-2xl p-6 backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-gradient-to-br from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] rounded-full p-4 shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 border border-[#D4AF37] border-opacity-50">
                    <item.icon className="text-black" size={32} />
                  </div>
                  <span className="font-['Inter'] text-lg font-medium text-[#E0E0E0]">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <h3 className="font-['Montserrat'] font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent">
              RESULTADOS
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] via-black to-[#0F0F0F] border border-[#D4AF37] border-opacity-30 rounded-2xl p-6 backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-gradient-to-br from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] rounded-full p-4 shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 border border-[#D4AF37] border-opacity-50">
                    <item.icon className="text-black" size={32} />
                  </div>
                  <span className="font-['Inter'] text-lg font-medium text-[#E0E0E0]">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CTAButton text="QUERO EVOLUIR MINHA PERFORMANCE" />
      </div>
    </section>
  );
}
