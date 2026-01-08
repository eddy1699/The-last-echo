
import React from 'react';
import { CAST } from '../constants';

export const Cast: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#050505] to-[#0a001a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cinzel mb-4 text-white">The Faces</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-magenta-500 mx-auto shadow-[0_0_10px_rgba(0,242,255,0.4)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CAST.map((member) => (
            <div key={member.id} className="group flex flex-col items-center text-center">
              <div className="relative mb-6 overflow-hidden rounded-sm w-full aspect-[4/5] border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover filter contrast-125 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 border-[10px] border-black/20 group-hover:border-cyan-500/10 transition-all"></div>
              </div>
              <h3 className="text-2xl font-cinzel mb-1 text-white group-hover:text-cyan-400 transition-colors">{member.name}</h3>
              <p className="text-magenta-400 uppercase tracking-widest text-sm mb-4 font-bold">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed px-4 group-hover:text-white transition-colors">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
