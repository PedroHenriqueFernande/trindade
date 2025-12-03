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
    <section className="bg-black text-[#F3F3F3] py-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5C558]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#E5C558] to-transparent mb-6"></div>

        <h2 className="font-['Bebas_Neue'] font-normal text-4xl md:text-5xl text-center leading-tight mb-6 tracking-wide">
          Você pode elevar seu desempenho sexual muito mais rápido do que imagina.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-6">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#E5C558] border-opacity-30 rounded-2xl p-10 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-[#E5C558]" size={24} />
              <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#E5C558] to-[#C9AD6A] bg-clip-text text-transparent">
                POR QUE FUNCIONA
              </h3>
              <Sparkles className="text-[#E5C558]" size={24} />
            </div>
            <div className="space-y-5">
              {methodology.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#E5C558] to-[#C9AD6A] rounded-full p-1 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-black" size={18} />
                  </div>
                  <span className="font-['Inter'] text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#E5C558] border-opacity-30 rounded-2xl p-10 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-[#E5C558]" size={24} />
              <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#E5C558] to-[#C9AD6A] bg-clip-text text-transparent">
                RESULTADOS
              </h3>
              <Sparkles className="text-[#E5C558]" size={24} />
            </div>
            <div className="space-y-5">
              {results.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#E5C558] to-[#C9AD6A] rounded-full p-1 flex-shrink-0 mt-0.5">
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
