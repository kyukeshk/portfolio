import React, { useState } from 'react';
import { graphicDesignItems } from '../../data/graphicDesign';
import { GraphicDesignItem } from '../../types/portfolio';
import { useCursor } from '../../context/CursorContext';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../../utils/assets';

export const GraphicDesign: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GraphicDesignItem | null>(null);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="graphic-design" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#F7F7F5] editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">10 / 16</span>
            <span>PRINT & PIXELS / GRAPHIC DESIGN</span>
          </div>
          <span>EDITORIAL MOODBOARD</span>
        </div>

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[#111111]">
            GRAPHIC DESIGN & KEY ART
          </h2>
          <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
            Cinematic posters, Swiss typography systems & tactical campaign visuals
          </p>
        </div>

        {/* Editorial Moodboard Grid (Varied Aspect Ratios & Asymmetric Heights) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {graphicDesignItems.map((item) => {
            const isTall = item.aspect === 'tall';
            const isLandscape = item.aspect === 'landscape';

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                onMouseEnter={() => setCursor('image', 'VIEW ART')}
                onMouseLeave={resetCursor}
                className={`group relative flex flex-col bg-white border border-[#E5E5E0] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-[#EFEFEA] ${
                    isTall
                      ? 'aspect-[3/4]'
                      : isLandscape
                      ? 'aspect-[16/10]'
                      : 'aspect-square'
                  }`}
                >
                  <img
                    src={getAssetUrl(item.image)}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Caption Card */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#C65B5B] mb-1">
                    <span>{item.category}</span>
                    <span className="text-[#666666]">{item.year}</span>
                  </div>
                  <h3 className="text-base font-display font-bold uppercase tracking-tight text-[#111111] group-hover:text-[#C65B5B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#666666] font-light mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12"
            onClick={() => setActiveItem(null)}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center bg-[#F7F7F5] rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getAssetUrl(activeItem.image)}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
              <div className="w-full p-4 md:p-6 bg-white border-t border-[#E5E5E0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C65B5B]">
                    {activeItem.category} — {activeItem.year}
                  </span>
                  <h3 className="text-lg font-display font-bold uppercase text-[#111111] mt-0.5">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-[#666666] font-light mt-1">
                    {activeItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
