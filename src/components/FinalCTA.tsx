import { Flame, Lock } from 'lucide-react';
import CTAButton from './CTAButton';

export default function FinalCTA() {
  return (
    <section className="bg-black text-[#F3F3F3] py-28 px-6 relative">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute -top-40 left-1/2 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-16"></div>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Flame className="text-[#FFD700]" size={28} />
          <h2 className="font-['LogoFont'] font-extrabold text-4xl md:text-5xl leading-tight bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
            Essa é sua última chance de resolver de vez aquilo que te persegue.
          </h2>
          <Flame className="text-[#FFD700]" size={28} />
        </div>

        <p className="font-['Inter'] text-xl md:text-2xl leading-relaxed mb-14 text-[#D0D0D0]">
          Não deixe pra depois — uma hora ou outra você terá que transar, então pelo menos aprenda a fazer direito.
        </p>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-40 rounded-2xl p-10 md:p-14 mb-14">
          <div className="mb-10">
            <p className="font-['Montserrat'] font-bold text-lg text-[#D0D0D0] mb-8">
              Você tem duas opções agora:
            </p>

            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-[#C6C6C6] to-[#A0A0A0] bg-opacity-10 border-l-4 border-[#A0A0A0] rounded-lg pl-6 pr-4 py-4">
                <p className="font-['Inter'] text-lg">
                  <span className="font-bold text-[#C6C6C6]">Opção 1:</span> <span className="text-[#B0B0B0]">Continuar como está. Fingir que está tudo bem. Sofrer em silêncio. Falhar de novo. Se cobrar depois.</span>
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-opacity-15 border-l-4 border-[#FFD700] rounded-lg pl-6 pr-4 py-4">
                <p className="font-['Inter'] text-lg">
                  <span className="font-bold text-[#FFD700]">Opção 2:</span> <span className="text-[#F0F0F0]">Investir menos de R$ 70 agora e transformar sua vida sexual para sempre. Ter controle real. Fazer ela gozar. Durar o quanto quiser. Sentir orgulho de si mesmo.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <Lock className="text-[#FFD700]" size={24} />
            <p className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
              A escolha é sua. Mas só uma delas resolve o problema.
            </p>
            <Lock className="text-[#FFD700]" size={24} />
          </div>
        </div>

        <CTAButton text="QUERO GARANTIR MEU ACESSO AGORA" />

        <p className="mt-10 text-[#A0A0A0] font-['Inter'] text-sm flex items-center justify-center gap-4">
          <span className="flex items-center gap-2"><Flame size={16} className="text-[#FFD700]" /> Acesso imediato</span>
          <span>•</span>
          <span className="flex items-center gap-2"><Lock size={16} className="text-[#FFD700]" /> Pagamento 100% seguro</span>
          <span>•</span>
          <span className="flex items-center gap-2">Garantia de 30 dias</span>
        </p>
      </div>
    </section>
  );
}
