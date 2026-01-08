
import React, { useState } from 'react';
import { STILLS } from '../constants.tsx';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-20 text-center">Stills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {STILLS.map((still, idx) => (
            <div 
              key={idx} 
              className="relative group cursor-pointer overflow-hidden aspect-video bg-black"
              onClick={() => setSelectedImage(idx)}
            >
              <img 
                src={still.url} 
                alt={still.caption}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <p className="text-[10px] uppercase tracking-[0.4em] font-light">{still.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full relative">
            <button className="absolute -top-16 right-0 text-zinc-500 hover:text-white text-xs uppercase tracking-[0.5em] transition-colors">Close</button>
            <img src={STILLS[selectedImage].url} alt="Preview" className="w-full h-auto shadow-2xl border border-white/10" />
            <p className="text-center mt-12 text-[10px] uppercase tracking-[0.8em] text-zinc-500">
              {STILLS[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
