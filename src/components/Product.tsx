import { Video, Brain, Crown, MessageSquare, Shield, Zap } from 'lucide-react';
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
    { text: 'Guia Mental', icon: 'Brain' },
    { text: 'Dominância Silenciosa', icon: 'Crown' },
    { text: 'Comunicação de Alto Impacto', icon: 'MessageSquare' },
    { text: 'Código da Confiança', icon: 'Shield' },
    { text: 'Arquétipo do Macho Alfa', icon: 'Zap' }
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>

        <h2 className="font-['Bebas_Neue'] font-normal text-5xl md:text-6xl text-center leading-tight mb-4 tracking-wide animate-pulse-light">
          Esse curso reúne tudo que um homem precisa para dominar o prazer feminino, durar mais e ter ereção de ferro.
        </h2>

        <p className="font-['Inter'] text-base md:text-lg leading-snug md:leading-relaxed text-left md:text-center mb-6 max-w-3xl mx-auto text-[#D0D0D0]">
          Simples. Direto. Aplicável. Conteúdo explícito com orientação clara.
        </p>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37] border-opacity-30 rounded-2xl p-10 md:p-14 mb-4">
          <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent mb-6 text-center">
            6 PILARES FUNDAMENTAIS
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1A1A1A] via-black to-[#0F0F0F] border border-[#D4AF37] border-opacity-30 rounded-2xl p-6 backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 group text-center">
                <p className="font-['Montserrat'] font-bold text-lg">{pillar}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37] border-opacity-30 rounded-2xl p-10 md:p-14 mb-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Video className="text-[#D4AF37]" size={28} />
            <h3 className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent">
              MÓDULOS PRINCIPAIS
            </h3>
            <Video className="text-[#D4AF37]" size={28} />
          </div>
          <div className="space-y-4 mb-4">
            {mainModules.map((module, index) => (
              <div key={index} className="bg-gradient-to-r from-[#1A1A1A] via-black to-[#1A1A1A] border-l-4 border-[#D4AF37] rounded-lg p-6 hover:border-opacity-100 transition-all">
                <p className="font-['Inter'] text-lg">{module}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {specialModules.map((module, index) => (
              <div key={index} className="bg-gradient-to-r from-[#1A1A1A] via-black to-[#1A1A1A] border-l-4 border-[#D4AF37] rounded-lg p-6 hover:border-opacity-100 transition-all">
                <p className="font-['Inter'] text-lg">{module}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-white mb-6 text-center mt-20">
          Levando hoje o curso, você receberá 5 bonus <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">exclusivos</span>
        </p>

        <p className="font-['Inter'] text-base md:text-lg leading-snug md:leading-relaxed text-left md:text-center mb-6 max-w-3xl mx-auto text-[#D0D0D0]">
          Você já entendeu que a Trindade do Prazer Máximo, sozinha, já resolveria tudo que te trava na cama. Mas eu não quero que você apenas resolva. Quero que você <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">ultrapasse todos os homens comuns</span>. É por isso que eu fiz algo que, honestamente, eu nem precisava ter feito: incluí CINCO bônus <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">exclusivos</span> que transformam você em um homem completamente acima da média.
        </p>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37] border-opacity-30 rounded-2xl p-10 md:p-14 mb-4">
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon === 'Brain' ? Brain :
                bonus.icon === 'Crown' ? Crown :
                  bonus.icon === 'MessageSquare' ? MessageSquare :
                    bonus.icon === 'Shield' ? Shield : Zap;

              return (
                <div key={index} className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37] border-opacity-20 rounded-xl p-6 hover:border-opacity-50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] rounded-full p-3 flex-shrink-0">
                      <IconComponent className="text-black" size={24} />
                    </div>
                    <p className="font-['Inter'] text-lg">{bonus.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CTAButton text="QUERO ACESSO AOS 9 MÓDULOS" />
      </div>
    </section>
  );
}
