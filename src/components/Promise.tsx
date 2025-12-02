import { CheckCircle2, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Promise() {
  const methodology = [
    'técnica real',
    'controle da excitação',
    'ereção firme',
    'prazer feminino avançado',
    'confiança sexual',
    'mentalidade masculina'
  ];

  const results = [
    'durar muito mais',
    'ereção rígida',
    'orgasmos nela',
    'controle da excitação',
    'muito mais prazer',
    'confiança real',
    'fim da insegurança'
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-28 px-6 relative">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-16"></div>

        <h2 className="font-['LogoFont'] font-extrabold text-4xl md:text-5xl text-center leading-tight mb-16">
          Você pode elevar seu desempenho sexual muito mais rápido do que imagina.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-30 rounded-2xl p-10 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="text-[#FFD700]" size={24} />
              <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
                POR QUE FUNCIONA
              </h3>
              <Sparkles className="text-[#FFD700]" size={24} />
            </div>
            <div className="space-y-5">
              {methodology.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#FFD700] to-[#E6C35C] rounded-full p-1 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-black" size={18} />
                  </div>
                  <span className="font-['Inter'] text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-30 rounded-2xl p-10 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="text-[#FFD700]" size={24} />
              <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
                RESULTADOS
              </h3>
              <Sparkles className="text-[#FFD700]" size={24} />
            </div>
            <div className="space-y-5">
              {results.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#FFD700] to-[#E6C35C] rounded-full p-1 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-black" size={18} />
                  </div>
                  <span className="font-['Inter'] text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTAButton text="QUERO EVOLUIR MINHA PERFORMANCE" />
      </div>
    </section>
  );
}
