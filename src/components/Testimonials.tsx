import { Award } from 'lucide-react';

export default function Testimonials() {


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

        <p className="font-['Inter'] text-xl text-center mb-6 text-[#D0D0D0] max-w-3xl mx-auto">
          Resultados reais em poucas semanas. Transformação que você pode sentir desde a primeira aplicação.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {['/1.png', '/2.png', '/3.png'].map((image, index) => (
            <div key={index} className="rounded-2xl overflow-hidden border border-[#D4AF37] border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105">
              <img
                src={image}
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
