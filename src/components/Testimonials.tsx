import { Star, Award } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos M.',
      age: 32,
      text: 'Minha vida sexual mudou completamente. Consegui resolver problemas que me atormentavam há anos. Hoje tenho controle total e minha parceira está mais satisfeita do que nunca.',
      rating: 5
    },
    {
      name: 'Roberto S.',
      age: 28,
      text: 'Achei que nunca ia conseguir superar a ejaculação precoce. O método é simples e funciona de verdade. Em menos de 2 semanas já vi mudanças enormes.',
      rating: 5
    },
    {
      name: 'André L.',
      age: 35,
      text: 'A parte de fazer ela gozar foi revolucionária. Aprendi técnicas que nem sabia que existiam. Agora ela tem orgasmos múltiplos e eu me sinto um homem de verdade.',
      rating: 5
    }
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mb-16"></div>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Award className="text-[#FFD700]" size={28} />
          <h2 className="font-['LogoFont'] font-extrabold text-4xl md:text-5xl text-center leading-tight bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
            Homens estão mudando sua vida sexual, e você pode ser o próximo.
          </h2>
          <Award className="text-[#FFD700]" size={28} />
        </div>

        <p className="font-['Inter'] text-xl text-center mb-16 text-[#D0D0D0] max-w-3xl mx-auto">
          Resultados reais em poucas semanas. Transformação que você pode sentir desde a primeira aplicação.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1A1A1A] to-black border border-[#FFD700] border-opacity-30 rounded-2xl p-10 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFD700" className="text-[#FFD700]" />
                ))}
              </div>

              <p className="font-['Inter'] text-base leading-relaxed mb-8 text-[#D0D0D0]">
                "{testimonial.text}"
              </p>

              <div className="text-center border-t border-[#FFD700] border-opacity-20 pt-6">
                <p className="font-['Montserrat'] font-bold text-lg bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
                  {testimonial.name}
                </p>
                <p className="font-['Inter'] text-sm text-[#A0A0A0]">
                  {testimonial.age} anos
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
