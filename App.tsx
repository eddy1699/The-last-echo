
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { Synopsis } from './components/Synopsis.tsx';
import { Cast } from './components/Cast.tsx';
import { Gallery } from './components/Gallery.tsx';
import { FILM_INFO } from './constants.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trailerYoutubeId = "6YV1V6C4o4E";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      {/* Minimal Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-6 flex justify-between items-center ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm py-4 border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="font-cinzel text-lg tracking-[0.3em] font-bold">
          {FILM_INFO.title.toUpperCase()}
        </div>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.4em] font-light">
          <a href="#story" className="hover:text-cyan-400 transition-colors">Story</a>
          <a href="#cast" className="hover:text-cyan-400 transition-colors">Cast</a>
          <a href="#gallery" className="hover:text-cyan-400 transition-colors">Stills</a>
        </div>
      </nav>

      <main>
        <Hero />
        
        <section id="trailer" className="bg-black py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video w-full relative bg-zinc-900 overflow-hidden group border border-white/5">
              {!isPlayingTrailer ? (
                <div 
                  className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center transition-opacity duration-1000"
                  onClick={() => setIsPlayingTrailer(true)}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&q=80&w=1920" 
                    alt="Still" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105" 
                  />
                  
                  <div className="relative z-20 flex flex-col items-center">
                     <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-500">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1 group-hover:border-l-cyan-400 transition-colors"></div>
                     </div>
                     <span className="mt-4 text-[10px] uppercase tracking-[0.5em] font-light drop-shadow-lg">Watch Trailer</span>
                  </div>
                </div>
              ) : (
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${trailerYoutubeId}?autoplay=1&rel=0&modestbranding=1`} 
                  frameBorder="0" 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                  className="w-full h-full animate-fade-in"
                ></iframe>
              )}
            </div>
          </div>
        </section>

        <section id="story">
          <Synopsis />
        </section>
        
        <section id="cast">
          <Cast />
        </section>

        <section id="gallery">
          <Gallery />
        </section>
      </main>

      <footer className="bg-black py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-xl font-cinzel tracking-[0.5em] mb-8">{FILM_INFO.title.toUpperCase()}</h2>
          <p className="text-[10px] text-zinc-500 tracking-[0.2em] leading-loose max-w-md uppercase">
            A Film by {FILM_INFO.director}. Luminaria Pictures &copy; 2025.
            <br />
            Coming soon to international festivals.
          </p>
          <div className="mt-12 flex gap-8">
             <a href="#" className="text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Instagram</a>
             <a href="#" className="text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest">IMDb</a>
             <a href="#" className="text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
