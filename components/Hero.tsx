
import React from 'react';
import { FILM_INFO } from '../constants.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[pulse_10s_infinite]"
        style={{ backgroundImage: `url('https://picsum.photos/seed/hero-cyberpunk/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
        <h2 className="text-sm tracking-[0.5em] uppercase mb-4 text-cyan-400 font-bold animate-slide-up [animation-delay:0.2s] drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]">
          {FILM_INFO.genre}
        </h2>
        <h1 className="text-6xl md:text-9xl font-cinzel mb-6 gradient-text animate-slide-up [animation-delay:0.4s]">
          {FILM_INFO.title.toUpperCase()}
        </h1>
        <p className="text-xl md:text-2xl font-light italic mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:0.6s]">
          "{FILM_INFO.tagline}"
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:0.8s]">
          <a href="#trailer" className="px-10 py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] transition-all duration-300 w-full sm:w-auto">
            Watch Trailer
          </a>
          <a href="#synopsis" className="px-10 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300 uppercase tracking-widest w-full sm:w-auto">
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </div>
    </section>
  );
};
