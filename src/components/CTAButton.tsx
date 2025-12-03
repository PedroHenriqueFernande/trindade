import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
}

export default function CTAButton({ text }: CTAButtonProps) {
  const handleClick = () => {
    window.open('https://pay.kiwify.com.br/your-checkout-link', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="relative group w-full max-w-xl md:max-w-2xl mx-auto mt-6 flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] hover:from-[#D4AF37] hover:via-[#F4E5B0] hover:to-[#D4AF37] px-8 md:px-10 py-4 md:py-5 min-h-[56px] md:min-h-[64px] text-base md:text-lg leading-tight text-black font-['Montserrat'] font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse"></div>
      <span className="relative z-10">{text}</span>
      <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={22} />
    </button>
  );
}
