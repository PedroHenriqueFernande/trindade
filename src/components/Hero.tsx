import { CheckCircle2, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-[#F3F3F3] py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FFD700]"></div>
          <Sparkles className="text-[#FFD700]" size={20} />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FFD700]"></div>
        </div>

        <h1 className="font-['LogoFont'] font-extrabold text-5xl md:text-7xl leading-tight mb-8 tracking-tight uppercase">
          SENTE VERGONHA POR NÃO CONSEGUIR SATISFAZER AS MULHERES NA CAMA? ISSO MUDA AGORA.
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#E6C35C] mx-auto mb-8"></div>

        <h2 className="font-['LogoFont'] font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent mb-8">
          Esse curso transforma qualquer homem comum em uma máquina do Prazer.
        </h2>

        <p className="font-['Inter'] text-lg md:text-xl leading-relaxed mb-12 text-[#E0E0E0] max-w-3xl mx-auto">
          Domine o prazer feminino, acabe com a ejaculação precoce e recupere uma ereção forte como ferro e tudo em um único curso rápido que resolve o que você tenta esconder até de você mesmo.
        </p>

        <div className="bg-gradient-to-b from-[#1A1A1A] to-black border-t border-[#FFD700] border-opacity-20 rounded-xl p-10 md:p-14 mb-14 max-w-3xl mx-auto backdrop-blur-sm">
          <p className="font-['Inter'] text-lg md:text-xl leading-relaxed mb-6">
            Você sabe como dói fingir ignorar esses problemas.<br />
            Sabe como é olhar para ela e perceber que não entregou nem metade do que prometeu.<br />
            E sabe como é se cobrar depois, sozinho, em silêncio.<br />
            <span className="text-[#FFD700] font-['Montserrat'] font-bold text-3xl">Chega.</span><br />
            Isso acaba AGORA.
          </p>
        </div>

        <div className="mb-14">
          <p className="text-[#A0A0A0] text-lg line-through mb-3">De R$ 229,90</p>
          <p className="bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent font-['Montserrat'] font-extrabold text-6xl mb-2">
            R$ 69,90
          </p>
          <p className="text-[#B0B0B0] font-['Inter']">Apenas hoje - Economia de mais de 80%</p>
        </div>

        <div className="bg-gradient-to-b from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-30 rounded-xl p-8 md:p-10 mb-14 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#FFD700] flex-shrink-0 mt-1" size={24} />
              <span className="font-['Inter'] text-base md:text-lg">Faça ela gozar como nenhuma outra já fez</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#FFD700] flex-shrink-0 mt-1" size={24} />
              <span className="font-['Inter'] text-base md:text-lg">Dure o tempo que quiser</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#FFD700] flex-shrink-0 mt-1" size={24} />
              <span className="font-['Inter'] text-base md:text-lg">Ereções fortes e estáveis</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#FFD700] flex-shrink-0 mt-1" size={24} />
              <span className="font-['Inter'] text-base md:text-lg">Controle total da excitação</span>
            </div>
            <div className="flex items-start gap-3 md:col-span-2 md:justify-center">
              <CheckCircle2 className="text-[#FFD700] flex-shrink-0 mt-1" size={24} />
              <span className="font-['Inter'] text-base md:text-lg">Confiança sexual instantânea</span>
            </div>
          </div>
        </div>

        <CTAButton text="QUERO ME TRANSFORMAR EM UMA MÁQUINA" />

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-[#B0B0B0] text-sm font-['Inter']">
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#FFD700]" /> Acesso imediato</span>
          <span className="text-[#FFD700]">•</span>
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#FFD700]" /> 100% sigiloso</span>
          <span className="text-[#FFD700]">•</span>
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#FFD700]" /> Garantia de 30 dias</span>
        </div>
      </div>
    </section>
  );
}
