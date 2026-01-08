
import React from 'react';
import { FILM_INFO, AWARDS } from '../constants.tsx';

export const Synopsis: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-16">The Premise</h2>
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-200 mb-20 font-cinzel">
          {FILM_INFO.synopsis}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/5">
          <div>
            <h4 className="text-zinc-600 uppercase text-[9px] tracking-[0.3em] mb-2">Director</h4>
            <p className="text-xs uppercase tracking-widest">{FILM_INFO.director}</p>
          </div>
          <div>
            <h4 className="text-zinc-600 uppercase text-[9px] tracking-[0.3em] mb-2">Length</h4>
            <p className="text-xs uppercase tracking-widest">{FILM_INFO.duration}</p>
          </div>
          <div>
            <h4 className="text-zinc-600 uppercase text-[9px] tracking-[0.3em] mb-2">Year</h4>
            <p className="text-xs uppercase tracking-widest">2025</p>
          </div>
          <div>
            <h4 className="text-zinc-600 uppercase text-[9px] tracking-[0.3em] mb-2">Status</h4>
            <p className="text-xs uppercase tracking-widest text-cyan-500">Post-Production</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
        {AWARDS.map((award, idx) => (
          <div key={idx} className="p-8 border border-white/5 flex flex-col items-center text-center">
            <span className="text-2xl mb-4 grayscale opacity-50">{award.icon}</span>
            <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 mb-1">{award.festival}</p>
            <h4 className="text-[11px] uppercase tracking-widest font-bold">{award.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
