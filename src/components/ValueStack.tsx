import { Zap } from 'lucide-react';
import CTAButton from './CTAButton';

export default function ValueStack() {
  const items = [
    { name: 'Módulos 1, 2 e 3', value: 'R$ 100,00' },
    { name: 'Módulo 4 - Anti-ejaculação precoce', value: 'R$ 49,90' },
    { name: 'Módulo 5 - Anti-impotência', value: 'R$ 49,90' },
    { name: '5 Bônus Exclusivos', value: 'R$ 149,50' }
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-16"></div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-40 rounded-2xl p-10 md:p-14 mb-12">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Zap className="text-[#FFD700]" size={28} />
            <h2 className="font-['LogoFont'] font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
              VALOR TOTAL DO CURSO
            </h2>
            <Zap className="text-[#FFD700]" size={28} />
          </div>

          <div className="space-y-4 mb-10">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-gradient-to-r from-[#1A1A1A] to-black border-b-2 border-[#FFD700] border-opacity-20 pb-5">
                <span className="font-['Inter'] text-lg">{item.name}</span>
                <span className="font-['Montserrat'] font-bold text-lg bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-[#FFD700] border-opacity-40 pt-8 mb-10">
            <div className="flex justify-between items-center mb-6">
              <span className="font-['Montserrat'] font-extrabold text-2xl">VALOR REAL:</span>
              <span className="font-['Montserrat'] font-bold text-2xl text-[#A0A0A0] line-through">R$ 349,30</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFD700] via-[#E6C35C] to-[#FFD700] bg-opacity-15 border-2 border-[#FFD700] border-opacity-60 rounded-xl p-10 text-center mb-14">
            <p className="font-['Inter'] text-lg mb-3 text-[#D0D0D0]">INVESTIMENTO HOJE:</p>
            <p className="font-['Montserrat'] font-extrabold text-7xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent mb-4">R$ 69,90</p>
            <p className="font-['Montserrat'] font-bold text-xl text-[#FFD700] mt-2">
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
