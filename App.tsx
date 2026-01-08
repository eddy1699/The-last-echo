
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
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Placeholder trailer ID (using a cinematic sci-fi atmosphere one)
  const trailerYoutubeId = "6YV1V6C4o4E";

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-4 flex justify-between items-center ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20 py-3' : 'bg-transparent'
      }`}>
        <div className="font-cinzel text-2xl tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-black shadow-[0_0_15px_rgba(6,182,212,0.6)]">LE</span>
          <span className={`${isScrolled ? 'opacity-100' : 'opacity-80'} ${isScrolled ? 'text-cyan-400' : 'text-white'} transition-colors`}>{FILM_INFO.title.toUpperCase()}</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#synopsis" className="hover:text-cyan-400 transition-colors">Story</a>
          <a href="#cast" className="hover:text-cyan-400 transition-colors">Cast</a>
          <a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
        </div>

        <button className="px-5 py-2 border border-cyan-500 text-cyan-400 text-[10px] uppercase font-bold tracking-widest hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
          EPK / Press
        </button>
      </nav>

      <main>
        <Hero />
        
        <section id="trailer" className="bg-[#050505] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video w-full glass rounded-xl overflow-hidden shadow-[0_0_60px_rgba(0,242,255,0.05)] group relative border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500 bg-black">
              
              {!isPlayingTrailer ? (
                <div 
                  className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center"
                  onClick={() => setIsPlayingTrailer(true)}
                >
                  <img 
                    src="https://picsum.photos/seed/trailer-sci/1280/720" 
                    alt="Trailer Thumbnail" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105" 
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="relative z-20 w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(0,242,255,0.6)] animate-pulse">
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-black border-b-[14px] border-b-transparent"></div>
                  </div>

                  <div className="absolute bottom-8 left-8 text-left z-20">
                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-400 mb-1">Official Trailer</p>
                    <h3 className="text-3xl font-cinzel text-white group-hover:text-cyan-400 transition-colors">Experience the Echo</h3>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${trailerYoutubeId}?autoplay=1&rel=0&modestbranding=1`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}

            </div>
          </div>
        </section>

        <Synopsis />
        
        <div id="cast">
          <Cast />
        </div>

        <div id="gallery">
          <Gallery />
        </div>
      </main>

      <footer className="bg-[#050505] py-20 px-4 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="col-span-2">
            <h2 className="text-3xl font-cinzel mb-6 gradient-text">{FILM_INFO.title.toUpperCase()}</h2>
            <p className="text-gray-500 max-w-lg mb-8">
              A Luminaria Pictures production. All rights reserved &copy; 2025. 
              Filmed on location in the Atacama Desert and Reykjavik.
            </p>
            <div className="flex gap-6 text-sm uppercase tracking-widest font-bold text-gray-400 mb-8">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            
            <div className="flex gap-5 items-center">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-end justify-center">
             <div className="text-right">
                <h4 className="text-xs uppercase tracking-widest text-cyan-500 font-bold mb-4">Newsletter</h4>
                <div className="flex">
                  <input type="email" placeholder="E-MAIL ADDRESS" className="bg-transparent border-b border-cyan-500/20 px-4 py-2 focus:outline-none focus:border-cyan-500 transition-colors text-xs w-full" />
                  <button className="ml-4 text-xs font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">Sign Up</button>
                </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
