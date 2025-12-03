import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-[#A0A0A0] py-14 px-6 relative">
      <div className="absolute inset-0 opacity-2">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#D4AF37] to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="border-t border-[#D4AF37] border-opacity-40 pt-10">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="text-[#D4AF37]" size={24} />
              <p className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent">
                TRINDADE DO PRAZER MÁXIMO
              </p>
              <Sparkles className="text-[#D4AF37]" size={24} />
            </div>
            <p className="font-['Inter'] text-sm text-[#808080]">
              Conteúdo educativo e sigiloso.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <a href="#" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors font-['Inter']">
              Termos de Uso
            </a>
            <span className="text-[#D4AF37] opacity-40">|</span>
            <a href="#" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors font-['Inter']">
              Política de Privacidade
            </a>
            <span className="text-[#D4AF37] opacity-40">|</span>
            <a href="#" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors font-['Inter']">
              Reembolso
            </a>
          </div>

          <div className="text-center mb-4">
            <p className="font-['Inter'] text-sm">
              Suporte: <a href="mailto:contato@trindadedosexo.com" className="text-[#D4AF37] hover:text-[#F4E5B0] transition-colors font-semibold">contato@trindadedosexo.com</a>
            </p>
          </div>

          <div className="text-center text-xs text-[#808080]">
            <p className="font-['Inter']">
              © 2025 Trindade do Prazer Máximo - Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
