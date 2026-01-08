
import React from 'react';
import { FILM_INFO } from '../constants.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=90&w=2560" 
            className="w-full h-full object-cover" 
            alt="Atmosphere" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl animate-fade-in">
        <span className="text-[10px] tracking-[0.8em] uppercase text-cyan-400 mb-8 block animate-slide-up font-bold">
          {FILM_INFO.genre}
        </span>
        <h1 className="text-5xl md:text-8xl font-cinzel tracking-[0.2em] mb-10 animate-slide-up [animation-delay:0.2s]">
          {FILM_INFO.title.toUpperCase()}
        </h1>
        <p className="text-sm md:text-base font-light tracking-[0.1em] text-zinc-300 mb-12 max-w-xl mx-auto leading-relaxed animate-slide-up [animation-delay:0.4s]">
          {FILM_INFO.tagline}
        </p>
        
        <div className="flex justify-center gap-12 animate-slide-up [animation-delay:0.6s]">
          <a href="#trailer" className="text-[10px] uppercase tracking-[0.5em] text-white hover:text-cyan-400 transition-colors">Play Trailer</a>
          <a href="#story" className="text-[10px] uppercase tracking-[0.5em] text-white hover:text-cyan-400 transition-colors">The Story</a>
        </div>
      </div>
    </section>
  );
};
