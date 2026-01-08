
import React, { useState } from 'react';
import { STILLS } from '../constants.tsx';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black/60 border-y border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-cinzel mb-12 text-center text-white">Visual Echoes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STILLS.map((still, idx) => (
            <div 
              key={idx} 
              className="relative group cursor-pointer overflow-hidden aspect-video border border-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
              onClick={() => setSelectedImage(idx)}
            >
              <img 
                src={still.url} 
                alt={still.caption}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest shadow-black drop-shadow-lg">{still.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full relative">
            <button className="absolute -top-12 right-0 text-cyan-400 text-4xl font-light hover:text-white transition-colors">×</button>
            <img src={STILLS[selectedImage].url} alt="Preview" className="w-full h-auto rounded border border-cyan-500/30 shadow-[0_0_100px_rgba(0,242,255,0.1)]" />
            <p className="text-center mt-6 font-cinzel text-2xl text-cyan-400 tracking-widest">
              {STILLS[selectedImage].caption.toUpperCase()}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
