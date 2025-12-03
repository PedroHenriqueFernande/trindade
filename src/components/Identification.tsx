import { AlertTriangle, Timer, TrendingDown, HelpCircle, Brain, XCircle, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Identification() {
  const painPoints = [
    {
      icon: AlertTriangle,
      text: 'Medo constante de falhar'
    },
    {
      icon: Timer,
      text: 'Vergonha de gozar rápido'
    },
    {
      icon: TrendingDown,
      text: 'Ereção caindo na hora H'
    },
    {
      icon: HelpCircle,
      text: 'Não saber fazer ela gozar'
    },
    {
      icon: Brain,
      text: 'Se punir mentalmente depois'
    },
    {
      icon: XCircle,
      text: 'Sentir que não é bom na cama'
    }
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E5C558]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#E5C558] to-transparent mb-6"></div>

        <h2 className="font-['Bebas_Neue'] font-normal text-4xl md:text-5xl text-center leading-tight mb-12 tracking-wide">
          Você não está sozinho. Metade dos homens sofre com isso, e o que você sente é mais comum do que imagina.
        </h2>

        <p className="font-['Inter'] text-lg md:text-xl leading-relaxed text-center mb-4 max-w-3xl mx-auto text-[#D0D0D0]">
          Todo homem já passou por momentos de falhar, gozar rápido demais, perder a ereção, não saber como fazer ela gozar, sentir vergonha, medo, ansiedade, insegurança. E fingir que está tudo bem.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A1A1A] via-black to-[#0F0F0F] border border-[#E5C558] border-opacity-30 rounded-2xl p-6 backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-gradient-to-br from-[#AD9255] via-[#E5C558] to-[#AD9255] rounded-full p-4 shadow-[0_0_20px_rgba(229,197,88,0.3)] group-hover:shadow-[0_0_30px_rgba(229,197,88,0.5)] transition-all duration-300 border border-[#E5C558] border-opacity-50">
                  <item.icon className="text-black" size={32} />
                </div>
                <span className="font-['Inter'] text-lg font-medium text-[#E0E0E0]">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-[#E5C558]" size={24} />
            <p className="font-['Montserrat'] font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#E5C558] to-[#C9AD6A] bg-clip-text text-transparent">
              Você não precisa continuar vivendo assim.
            </p>
            <Sparkles className="text-[#E5C558]" size={24} />
          </div>
        </div>

        <CTAButton text="QUERO COMEÇAR MINHA TRANSFORMAÇÃO" />
      </div>
    </section>
  );
}
