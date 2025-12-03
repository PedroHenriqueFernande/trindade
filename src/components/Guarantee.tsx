import { Shield, Check } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-black text-[#F3F3F3] py-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-80 h-80 bg-[#E5C558]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#E5C558] to-transparent mb-6"></div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#E5C558] border-opacity-40 rounded-2xl p-10 md:p-14 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-[#E5C558] to-[#C9AD6A] rounded-full p-8 shadow-2xl">
              <Shield size={80} className="text-black" />
            </div>
          </div>

          <h2 className="font-['Bebas_Neue'] font-normal text-4xl md:text-5xl mb-6 leading-tight tracking-wide">
            Você tem 30 dias completos para testar. Sem risco nenhum.
          </h2>

          <p className="font-['Inter'] text-lg leading-relaxed text-[#D0D0D0] max-w-2xl mx-auto mb-6">
            Se por qualquer motivo você não ficar satisfeito com o curso, basta enviar um único email dentro dos primeiros 30 dias e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia, sem complicação.
          </p>

          <div className="mt-12 bg-gradient-to-r from-[#E5C558] via-[#C9AD6A] to-[#E5C558] border-2 border-[#E5C558] border-opacity-60 rounded-xl p-8 mb-4">
            <p className="font-['Montserrat'] font-extrabold text-2xl md:text-3xl text-black mb-4">
              Garantia Incondicional de 30 Dias
            </p>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-black" size={24} />
              <p className="font-['Inter'] text-lg text-black font-medium">
                Você não arrisca absolutamente nada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
