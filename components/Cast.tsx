
import React from 'react';
import { CAST } from '../constants.tsx';

export const Cast: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-20 text-center">Principals</h2>
        
        <div className="space-y-32">
          {CAST.map((member, idx) => (
            <div key={member.id} className={`flex flex-col md:flex-row items-center gap-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="w-full md:w-1/2 aspect-[4/5] bg-zinc-900 overflow-hidden border border-white/5">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="text-[9px] uppercase tracking-[0.5em] text-cyan-500 mb-4 block font-bold">{member.role}</span>
                <h3 className="text-4xl font-cinzel tracking-widest mb-6">{member.name.toUpperCase()}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed tracking-widest uppercase">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
