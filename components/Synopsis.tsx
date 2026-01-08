
import React from 'react';
import { FILM_INFO, AWARDS } from '../constants.tsx';

export const Synopsis: React.FC = () => {
  return (
    <section id="synopsis" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-cinzel mb-8 border-l-4 border-cyan-500 pl-6 text-white">The Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {FILM_INFO.synopsis}
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-cyan-500/20">
            <div>
              <h4 className="text-cyan-500 uppercase text-xs tracking-widest mb-1 font-bold">Director</h4>
              <p className="font-semibold text-white">{FILM_INFO.director}</p>
            </div>
            <div>
              <h4 className="text-cyan-500 uppercase text-xs tracking-widest mb-1 font-bold">Runtime</h4>
              <p className="font-semibold text-white">{FILM_INFO.duration}</p>
            </div>
            <div>
              <h4 className="text-magenta-400 uppercase text-xs tracking-widest mb-1 font-bold">Release</h4>
              <p className="font-semibold text-white">{FILM_INFO.releaseDate}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-2xl font-cinzel text-center mb-4 text-white">Accolades</h3>
          {AWARDS.map((award, idx) => (
            <div key={idx} className="glass p-6 rounded-lg flex items-center gap-6 hover:translate-x-2 hover:border-magenta-500/40 transition-all cursor-default">
              <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{award.icon}</span>
              <div>
                <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider">{award.festival}</p>
                <h4 className="text-xl font-cinzel text-white">{award.name}</h4>
                <p className="text-magenta-300 text-sm font-light">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
