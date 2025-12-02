import { CheckCircle2, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Identification() {
  const painPoints = [
    'Medo constante de falhar',
    'Vergonha de gozar rápido',
    'Ereção caindo na hora H',
    'Não saber fazer ela gozar',
    'Se punir mentalmente depois',
    'Sentir que não é bom na cama'
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-28 px-6 relative">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-16"></div>

        <h2 className="font-['LogoFont'] font-extrabold text-4xl md:text-5xl text-center leading-tight mb-12">
          Você não está sozinho. Metade dos homens sofre com isso — e o que você sente é mais comum do que imagina.
        </h2>

        <p className="font-['Inter'] text-lg md:text-xl leading-relaxed text-center mb-14 max-w-3xl mx-auto text-[#D0D0D0]">
          Todo homem já passou por momentos de falhar, gozar rápido demais, perder a ereção, não saber como fazer ela gozar, sentir vergonha, medo, ansiedade, insegurança — e fingir que está tudo bem.
        </p>

        <div className="bg-gradient-to-br from-[#1A1A1A] via-black to-[#0F0F0F] border border-[#FFD700] border-opacity-30 rounded-2xl p-10 md:p-14 mb-14 max-w-3xl mx-auto backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#FFD700] to-[#E6C35C] rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-black" size={20} />
                </div>
                <span className="font-['Inter'] text-base md:text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-[#FFD700]" size={24} />
            <p className="font-['Montserrat'] font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
              Você não precisa continuar vivendo assim.
            </p>
            <Sparkles className="text-[#FFD700]" size={24} />
          </div>
        </div>

        <CTAButton text="QUERO COMEÇAR MINHA TRANSFORMAÇÃO" />
      </div>
    </section>
  );
}
