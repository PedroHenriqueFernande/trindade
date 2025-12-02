import { Video, Gift, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Product() {
  const pillars = [
    'Técnica',
    'Controle',
    'Ereção',
    'Prazer',
    'Confiança',
    'Mentalidade'
  ];

  const mainModules = [
    'Módulo 1: Fazer ela gozar rápido',
    'Módulo 2: Orgasmos intensos',
    'Módulo 3: Orgasmos múltiplos'
  ];

  const specialModules = [
    'Módulo 4: Anti-ejaculação precoce',
    'Módulo 5: Anti-impotência'
  ];

  const bonuses = [
    'Guia Mental',
    'Dominância Silenciosa',
    'Comunicação de Alto Impacto',
    'Código da Confiança',
    'Arquétipo do Macho Alfa'
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-16"></div>

        <h2 className="font-['LogoFont'] font-extrabold text-4xl md:text-5xl text-center leading-tight mb-8">
          A Trindade do Sexo reúne tudo que um homem precisa para dominar o prazer feminino, durar mais e ter ereção de ferro.
        </h2>

        <p className="font-['Inter'] text-xl text-center mb-16 text-[#D0D0D0]">
          Simples. Direto. Aplicável. Conteúdo explícito com orientação clara.
        </p>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-30 rounded-2xl p-10 md:p-14 mb-14">
          <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent mb-10 text-center">
            6 PILARES FUNDAMENTAIS
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-20 rounded-xl p-6 text-center hover:border-opacity-50 transition-all">
                <p className="font-['Montserrat'] font-bold text-lg">{pillar}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-30 rounded-2xl p-10 md:p-14 mb-14">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Video className="text-[#FFD700]" size={28} />
            <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
              MÓDULOS PRINCIPAIS
            </h3>
            <Video className="text-[#FFD700]" size={28} />
          </div>
          <div className="space-y-4 mb-8">
            {mainModules.map((module, index) => (
              <div key={index} className="bg-gradient-to-r from-[#1A1A1A] via-black to-[#1A1A1A] border-l-4 border-[#FFD700] rounded-lg p-6 hover:border-opacity-100 transition-all">
                <p className="font-['Inter'] text-lg">{module}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {specialModules.map((module, index) => (
              <div key={index} className="bg-gradient-to-r from-[#FFD700] via-[#E6C35C] to-[#FFD700] bg-opacity-10 border-2 border-[#FFD700] border-opacity-50 rounded-lg p-6 hover:bg-opacity-15 transition-all">
                <p className="font-['Montserrat'] font-bold text-lg text-[#FFD700]">{module}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-30 rounded-2xl p-10 md:p-14 mb-14">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Gift className="text-[#FFD700]" size={28} />
            <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
              5 BÔNUS EXCLUSIVOS
            </h3>
            <Gift className="text-[#FFD700]" size={28} />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-20 rounded-xl p-6 text-center hover:border-opacity-50 transition-all flex items-center justify-center gap-2">
                <Sparkles className="text-[#FFD700]" size={18} />
                <p className="font-['Inter'] text-lg">{bonus}</p>
                <Sparkles className="text-[#FFD700]" size={18} />
              </div>
            ))}
          </div>
        </div>

        <CTAButton text="QUERO ACESSO AOS 9 MÓDULOS" />
      </div>
    </section>
  );
}
