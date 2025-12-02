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
      className="relative group bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#E6C35C] hover:from-[#FFD700] hover:via-[#F7E49A] hover:to-[#FFD700] text-black font-['Montserrat'] font-bold text-lg md:text-xl py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full max-w-2xl mx-auto flex items-center justify-center gap-2 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse"></div>
      <span className="relative z-10">{text}</span>
      <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={22} />
    </button>
  );
}
