import { Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-[#F3F3F3] py-6 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
        </div>

        <h1 className="font-['Bebas_Neue'] font-normal text-5xl md:text-7xl leading-tight mb-4 tracking-wide uppercase">
          SENTE VERGONHA POR <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">NÃO CONSEGUIR</span> SATISFAZER AS MULHERES NA CAMA? ISSO MUDA <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">AGORA</span>.
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] mx-auto mb-4"></div>

        <h2 className="font-['Bebas_Neue'] font-normal text-3xl md:text-4xl mb-4 tracking-wide">
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent">Esse curso transforma qualquer homem comum em uma </span>
          <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">máquina do Prazer</span>
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent">.</span>
        </h2>

        <div className="mt-8 mb-8 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] p-[2px] rounded-full shadow-lg shadow-[#D4AF37]/30">
            <div className="bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] rounded-full px-8 py-4">
              <p className="font-['Montserrat'] font-bold text-lg md:text-xl text-center text-black">
                Comece sua evolução assistindo o vídeo
              </p>
            </div>
          </div>
        </div>

        <CTAButton text="QUERO ME TRANSFORMAR EM UMA MÁQUINA" />

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-[#B0B0B0] text-sm font-['Inter']">
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#D4AF37]" /> Acesso imediato</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#D4AF37]" /> 100% sigiloso</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#D4AF37]" /> Garantia de 30 dias</span>
        </div>
      </div>
    </section>
  );
}
