import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O curso é discreto? Alguém vai saber que comprei?',
      answer: 'Totalmente discreto. O acesso é 100% online e sigiloso. Nada vai aparecer com o nome do produto na sua fatura ou email. Você recebe tudo de forma anônima e segura.'
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Muitos homens relatam mudanças já nas primeiras aplicações. Em 1-2 semanas você já percebe diferença clara no controle, na ereção e na performance. O curso é direto e aplicável.'
    },
    {
      question: 'Funciona para qualquer idade?',
      answer: 'Sim. O método funciona para homens de 18 a 70+ anos. Seja qual for sua idade, você vai aprender a controlar seu corpo, durar mais e fazer ela gozar.'
    },
    {
      question: 'Preciso de remédios ou suplementos?',
      answer: 'Não. O curso ensina técnicas naturais e práticas que você aplica sozinho. Nada de remédios, nada de equipamentos, nada de gastos extras. Só conhecimento aplicável.'
    },
    {
      question: 'E se eu não tiver parceira agora?',
      answer: 'Melhor ainda. Você vai estar preparado quando a oportunidade chegar. E vai poder praticar sozinho várias técnicas de controle e fortalecimento antes mesmo de estar com alguém.'
    },
    {
      question: 'O acesso é vitalício?',
      answer: 'Sim. Você paga uma única vez e tem acesso para sempre. Pode rever o conteúdo quantas vezes quiser, quando quiser.'
    },
    {
      question: 'Posso acessar pelo celular?',
      answer: 'Sim. Você pode acessar de qualquer dispositivo: celular, tablet, computador. O conteúdo está disponível 24/7.'
    },
    {
      question: 'Como funciona a garantia?',
      answer: 'Você tem 30 dias completos para testar. Se não gostar, basta enviar um email e devolvemos 100% do valor. Sem perguntas, sem burocracia.'
    },
    {
      question: 'Recebo o acesso imediatamente?',
      answer: 'Sim. Assim que o pagamento for confirmado, você recebe o acesso completo na hora por email. Pode começar em menos de 2 minutos.'
    },
    {
      question: 'O conteúdo é explicado de forma clara?',
      answer: 'Completamente. Tudo é explicado em vídeo, passo a passo, de forma direta e sem enrolação. Qualquer homem consegue entender e aplicar.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-[#F3F3F3] py-28 px-6 relative">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-16"></div>

        <div className="flex items-center justify-center gap-3 mb-16">
          <HelpCircle className="text-[#FFD700]" size={28} />
          <h2 className="font-['LogoFont'] font-extrabold text-4xl md:text-5xl text-center bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <HelpCircle className="text-[#FFD700]" size={28} />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-30 rounded-xl overflow-hidden hover:border-opacity-50 transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#0F0F0F] transition-colors"
              >
                <span className="font-['Montserrat'] font-bold text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#FFD700] flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-[#FFD700] flex-shrink-0" size={24} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 bg-gradient-to-b from-black to-[#0F0F0F] border-t border-[#FFD700] border-opacity-20">
                  <p className="font-['Inter'] text-base leading-relaxed text-[#D0D0D0]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
