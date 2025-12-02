import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-[#A0A0A0] py-14 px-6 relative">
      <div className="absolute inset-0 opacity-2">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFD700] to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="border-t border-[#FFD700] border-opacity-40 pt-10">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="text-[#FFD700]" size={24} />
              <p className="font-['Montserrat'] font-extrabold text-2xl bg-gradient-to-r from-[#FFD700] to-[#E6C35C] bg-clip-text text-transparent">
                TRINDADE DO SEXO
              </p>
              <Sparkles className="text-[#FFD700]" size={24} />
            </div>
            <p className="font-['Inter'] text-sm text-[#808080]">
              Conteúdo educativo e sigiloso.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-[#A0A0A0] hover:text-[#FFD700] transition-colors font-['Inter']">
              Termos de Uso
            </a>
            <span className="text-[#FFD700] opacity-40">|</span>
            <a href="#" className="text-[#A0A0A0] hover:text-[#FFD700] transition-colors font-['Inter']">
              Política de Privacidade
            </a>
            <span className="text-[#FFD700] opacity-40">|</span>
            <a href="#" className="text-[#A0A0A0] hover:text-[#FFD700] transition-colors font-['Inter']">
              Reembolso
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="font-['Inter'] text-sm">
              Suporte: <a href="mailto:contato@trindadedosexo.com" className="text-[#FFD700] hover:text-[#E6C35C] transition-colors font-semibold">contato@trindadedosexo.com</a>
            </p>
          </div>

          <div className="text-center text-xs text-[#808080]">
            <p className="font-['Inter']">
              © 2025 Trindade do Sexo — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
