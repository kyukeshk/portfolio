import React from 'react';
import { showreelData } from '../../data/projects';
import { Play } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface ShowreelProps {
  onPlayShowreel: () => void;
}

export const Showreel: React.FC<ShowreelProps> = ({ onPlayShowreel }) => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="showreel" className="relative w-full py-28 md:py-48 px-6 md:px-12 bg-[#F7F7F5] editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">14 / 16</span>
            <span>CINEMATIC HIGHLIGHT / SHOWREEL</span>
          </div>
          <span>{showreelData.duration} — {showreelData.year}</span>
        </div>

        {/* Large Heading */}
        <div className="mb-14">
          <h2 className="text-5xl sm:text-8xl md:text-9xl font-display font-extrabold uppercase tracking-tighter text-[#111111] leading-none">
            WATCH <br />
            THE WORK.
          </h2>
        </div>

        {/* Large Cinematic Showreel Card */}
        <div
          onClick={onPlayShowreel}
          onMouseEnter={() => setCursor('video', 'PLAY SHOWREEL')}
          onMouseLeave={resetCursor}
          className="group relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E5E5E0] bg-black shadow-2xl cursor-pointer"
        >
          <img
            src={showreelData.poster}
            alt="Showreel preview"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-all duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

          {/* Huge Center Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#C65B5B] text-white flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
              <Play className="w-8 h-8 sm:w-12 sm:h-12 ml-1 fill-white" />
            </div>
            <span className="mt-6 text-xs font-mono tracking-[0.3em] uppercase text-white/90">
              CLICK TO WATCH FULL SHOWREEL ({showreelData.duration})
            </span>
          </div>

          {/* Bottom Corner Meta */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-2 pointer-events-none">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C65B5B]">
                OFFICIAL REEL
              </span>
              <p className="text-xs font-light text-white/70 max-w-sm mt-1">
                {showreelData.tagline}
              </p>
            </div>
            <div className="text-right font-mono text-xs text-white/80">
              4K CINEMA MASTER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
