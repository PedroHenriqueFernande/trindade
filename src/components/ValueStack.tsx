import { Zap } from 'lucide-react';
import CTAButton from './CTAButton';

export default function ValueStack() {
  const items = [
    { name: 'Aulas Práticas', value: 'R$ 100,00' },
    { name: 'Protocolo Contra Ejaculação Precoce', value: 'R$ 49,90' },
    { name: 'Método Ereção de Ferro', value: 'R$ 49,90' },
    { name: '5 Bônus Exclusivos', value: 'R$ 149,50' }
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37] border-opacity-40 rounded-2xl p-10 md:p-14 mb-12">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Zap className="text-[#D4AF37]" size={28} />
            <h2 className="font-['Bebas_Neue'] font-normal text-3xl md:text-4xl bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent tracking-wide">
              VALOR TOTAL DO CURSO
            </h2>
            <Zap className="text-[#D4AF37]" size={28} />
          </div>

          <div className="space-y-4 mb-8">
            {items.map((item, index) => {
              const hasName = Boolean(item.name);
              return (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 border-b-2 border-[#D4AF37] border-opacity-20 pb-5 px-2 bg-transparent"
                >
                  {hasName ? (
                    <span className="font-['Inter'] text-lg md:text-xl leading-snug text-left">
                      {item.name}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="price-line relative inline-flex justify-end items-center font-['Montserrat'] font-bold text-lg md:text-xl bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent text-right whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="border-t-2 border-[#D4AF37] border-opacity-40 pt-8 mb-8 px-2">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-['Montserrat'] font-extrabold text-2xl md:text-3xl">VALOR REAL:</span>
              <span className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-[#A0A0A0] line-through">R$ 349,30</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5B0] to-[#D4AF37] border-2 border-[#D4AF37] border-opacity-60 rounded-xl p-8 md:p-10 text-center mb-6">
            <p className="font-['Inter'] text-lg mb-3 text-black font-medium">INVESTIMENTO HOJE:</p>
            <p className="font-['Montserrat'] font-extrabold text-6xl md:text-7xl text-black mb-4">R$ 69,90</p>
            <p className="font-['Montserrat'] font-bold text-xl text-black mt-2">
              Economia de mais de 80%
            </p>
          </div>

          <CTAButton text="GARANTIR ACESSO POR R$ 69,90" />

          <p className="text-center text-[#A0A0A0] mt-8 font-['Inter'] text-sm">
            Oferta por tempo limitado. O preço pode aumentar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
}
