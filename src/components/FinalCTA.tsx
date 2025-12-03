import { Flame, Lock } from 'lucide-react';
import CTAButton from './CTAButton';

export default function FinalCTA() {
  return (
    <section className="bg-black text-[#F3F3F3] py-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <Flame className="text-[#D4AF37]" size={28} />
          <h2 className="font-['Bebas_Neue'] font-normal text-4xl md:text-5xl leading-tight bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent tracking-wide">
            Essa é sua última chance de resolver de vez aquilo que te persegue.
          </h2>
          <Flame className="text-[#D4AF37]" size={28} />
        </div>

        <p className="font-['Inter'] text-xl md:text-2xl leading-relaxed mb-4 text-[#D0D0D0]">
          Não deixe pra depois, uma hora ou outra você terá que transar, então pelo menos aprenda a fazer direito.
        </p>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37] border-opacity-40 rounded-2xl p-10 md:p-14 mb-4">
          <div className="mb-6">
            <p className="font-['Montserrat'] font-bold text-lg text-[#D0D0D0] mb-4">
              Você tem duas opções agora:
            </p>

            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-[#C6C6C6] to-[#A0A0A0] border-l-4 border-[#808080] rounded-lg pl-6 pr-4 py-4">
                <p className="font-['Inter'] text-lg">
                  <span className="font-bold text-black">Opção 1:</span> <span className="text-[#1A1A1A] font-medium">Continuar como está. Fingir que está tudo bem. Sofrer em silêncio. Falhar de novo. Se cobrar depois.</span>
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] border-l-4 border-[#B8941E] rounded-lg pl-6 pr-4 py-4">
                <p className="font-['Inter'] text-lg">
                  <span className="font-bold text-black">Opção 2:</span> <span className="text-black font-medium">Investir menos de R$ 70 agora e transformar sua vida sexual para sempre. Ter controle real. Fazer ela gozar. Durar o quanto quiser. Sentir orgulho de si mesmo.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent">
              A escolha é sua. Mas só uma delas resolve o problema.
            </p>
          </div>
        </div>

        <CTAButton text="QUERO GARANTIR MEU ACESSO AGORA" />

        <p className="mt-10 text-[#A0A0A0] font-['Inter'] text-sm flex items-center justify-center gap-4">
          <span className="flex items-center gap-2"><Flame size={16} className="text-[#D4AF37]" /> Acesso imediato</span>
          <span>•</span>
          <span className="flex items-center gap-2"><Lock size={16} className="text-[#D4AF37]" /> Pagamento 100% seguro</span>
          <span>•</span>
          <span className="flex items-center gap-2">Garantia de 30 dias</span>
        </p>
      </div>
    </section>
  );
}
