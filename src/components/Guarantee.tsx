import { Shield, Check } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-black text-[#F3F3F3] py-28 px-6 relative">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-16"></div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-40 rounded-2xl p-10 md:p-14 text-center">
          <div className="flex justify-center mb-10">
            <div className="bg-gradient-to-br from-[#FFD700] to-[#E6C35C] rounded-full p-8 shadow-2xl">
              <Shield size={80} className="text-black" />
            </div>
          </div>

          <h2 className="font-['LogoFont'] font-extrabold text-4xl md:text-5xl mb-10 leading-tight">
            Você tem 30 dias completos para testar — sem risco nenhum.
          </h2>

          <p className="font-['Inter'] text-lg leading-relaxed text-[#D0D0D0] max-w-2xl mx-auto mb-10">
            Se por qualquer motivo você não ficar satisfeito com o curso, basta enviar um único email dentro dos primeiros 30 dias e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia, sem complicação.
          </p>

          <div className="mt-12 bg-gradient-to-r from-[#FFD700] via-[#E6C35C] to-[#FFD700] bg-opacity-15 border-2 border-[#FFD700] border-opacity-60 rounded-xl p-8 mb-8">
            <p className="font-['Montserrat'] font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent mb-4">
              Garantia Incondicional de 30 Dias
            </p>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-[#FFD700]" size={24} />
              <p className="font-['Inter'] text-lg">
                Você não arrisca absolutamente nada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
