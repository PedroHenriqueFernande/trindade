import { useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = ['/4.png', '/1.png', '/2.png', '/3.png'];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black text-[#F3F3F3] py-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="text-[#D4AF37]" size={28} />
          <h2 className="font-['Bebas_Neue'] font-normal text-4xl md:text-5xl text-center leading-tight bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent tracking-wide">
            Homens estão mudando sua vida sexual, e você pode ser o próximo.
          </h2>
          <Award className="text-[#D4AF37]" size={28} />
        </div>

        <p className="font-['Inter'] text-base md:text-lg leading-snug md:leading-relaxed text-center mb-6 max-w-3xl mx-auto text-[#D0D0D0]">
          Aqui estão alguns depoimentos dos resultados reais em poucas semanas. Transformação que você pode sentir desde a primeira aula.
        </p>

        <div className="max-w-md mx-auto relative px-4 md:px-0">
          <div className="border border-[#D4AF37] border-opacity-30 transition-all duration-300">
            <img
              src={testimonials[currentIndex]}
              alt={`Depoimento ${currentIndex + 1}`}
              className="w-full h-auto block"
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 bg-black/50 p-2 rounded-full text-[#D4AF37] hover:bg-black/80 transition-colors border border-[#D4AF37]/30"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 bg-black/50 p-2 rounded-full text-[#D4AF37] hover:bg-black/80 transition-colors border border-[#D4AF37]/30"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/30'
                  }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
