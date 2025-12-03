import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const ratio = video.duration ? video.currentTime / video.duration : 0;
      setProgress(Math.min(Math.max(ratio, 0), 1));
    };

    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const displayProgress = (() => {
    // Carrega 80% da barra um pouco mais devagar (até 25% do vídeo) e completa em 90%
    const fastEnd = 0.25;
    if (progress <= fastEnd) return 0.8 * (progress / fastEnd);
    if (progress < 0.9) return 0.8 + ((progress - fastEnd) / (0.9 - fastEnd)) * 0.2;
    return 1;
  })();

  return (
    <section className="min-h-screen bg-black text-[#F3F3F3] py-6 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
        </div>

        <h1 className="font-['Bebas_Neue'] font-normal text-5xl md:text-7xl leading-tight mb-4 tracking-wide uppercase">
          SENTE VERGONHA POR <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">NÃO CONSEGUIR</span> SATISFAZER AS MULHERES NA CAMA? ISSO MUDA <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">AGORA</span>.
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] mx-auto mb-4"></div>

        <h2 className="font-['Bebas_Neue'] font-normal text-3xl md:text-4xl mb-4 tracking-wide">
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent">Esse curso transforma qualquer homem comum em uma </span>
          <span className="bg-gradient-to-r from-[#5E0B0B] via-[#C41E1E] to-[#5E0B0B] bg-clip-text text-transparent">máquina do Prazer</span>
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] bg-clip-text text-transparent">.</span>
        </h2>

        <div className="mt-8 mb-6 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] p-[2px] rounded-full shadow-lg shadow-[#D4AF37]/30">
            <div className="bg-gradient-to-r from-[#B8941E] via-[#D4AF37] to-[#F4E5B0] rounded-full px-8 py-4">
              <p className="font-['Montserrat'] font-bold text-lg md:text-xl text-center text-black">
                Comece sua evolução assistindo o vídeo
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8 relative">
          <video
            ref={videoRef}
            className="custom-video w-full rounded-2xl border border-[#D4AF37]/40 shadow-2xl shadow-[#D4AF37]/20 bg-black"
            playsInline
            muted
            onClick={togglePlay}
            controls={false}
            controlsList="nodownload noremoteplayback nofullscreen noplaybackrate"
            disablePictureInPicture
            src="/vsl.mp4"
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="pointer-events-auto bg-black/70 text-[#D4AF37] border border-[#D4AF37]/60 rounded-full px-6 py-3 font-['Montserrat'] font-bold text-lg shadow-lg shadow-[#D4AF37]/30 hover:scale-105 transition-transform"
              >
                ▶ Despausar
              </button>
            )}
          </div>

          <div className="absolute left-4 right-4 bottom-3 h-1.5 bg-[#D4AF37]/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D4AF37]/60 transition-[width] duration-200 ease-linear"
              style={{ width: `${displayProgress * 100}%` }}
            />
          </div>
        </div>

        <CTAButton text="QUERO ME TRANSFORMAR EM UMA MÁQUINA" />

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-[#B0B0B0] text-sm font-['Inter']">
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#D4AF37]" /> Acesso imediato</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#D4AF37]" /> 100% sigiloso</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-[#D4AF37]" /> Garantia de 30 dias</span>
        </div>
      </div>
    </section>
  );
}
