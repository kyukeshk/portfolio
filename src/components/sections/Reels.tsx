import React, { useRef } from 'react';
import { reelsData } from '../../data/projects';
import { ReelProject } from '../../types/portfolio';
import { Play, Eye } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { getAssetUrl } from '../../utils/assets';

interface ReelsProps {
  onSelectVideo: (videoUrl: string, title: string, category: string) => void;
}

const ReelCard: React.FC<{
  reel: ReelProject;
  idx: number;
  offsetClass: string;
  onSelectVideo: (videoUrl: string, title: string, category: string) => void;
}> = ({ reel, idx, offsetClass, onSelectVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setCursor, resetCursor } = useCursor();

  const handleMouseEnter = () => {
    setCursor('video', 'PLAY REEL');
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    resetCursor();
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={() => onSelectVideo(reel.videoUrl, reel.title, 'Social Media Reel')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col cursor-pointer transition-transform duration-500 hover:-translate-y-2 ${offsetClass}`}
    >
      {/* Vertical 9:16 Container (No thumbnail img - plays inline on hover like AiVideo) */}
      <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden border border-[#E5E5E0] bg-black shadow-xl">
        <video
          ref={videoRef}
          src={getAssetUrl(reel.videoUrl)}
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* Top stats */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white tracking-widest pointer-events-none z-10">
          <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded uppercase">
            {reel.tag}
          </span>
          {reel.views && (
            <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded">
              <Eye className="w-3 h-3 text-[#C65B5B]" />
              {reel.views}
            </span>
          )}
        </div>

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-[#C65B5B] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="w-6 h-6 ml-0.5 fill-white" />
          </div>
        </div>

        {/* Bottom Card Info */}
        <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none z-10">
          <div className="text-[10px] font-mono text-white/70 uppercase">
            REEL 0{idx + 1} — {reel.duration}
          </div>
          <h3 className="text-base font-display font-bold uppercase tracking-tight mt-1 text-white group-hover:text-[#C65B5B] transition-colors">
            {reel.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export const Reels: React.FC<ReelsProps> = ({ onSelectVideo }) => {
  // Asymmetric vertical offsets for cards to create editorial stagger
  const offsetClasses = [
    'md:translate-y-0',
    'md:translate-y-16',
    'md:-translate-y-8',
    'md:translate-y-12',
  ];

  return (
    <section id="reels" className="relative w-full py-28 md:py-48 px-6 md:px-12 bg-[#F7F7F5] editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">08 / 16</span>
            <span>VIRAL / SOCIAL MEDIA REELS</span>
          </div>
          <span>9:16 VERTICAL MASTERY</span>
        </div>

        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[#111111]">
            SOCIAL MEDIA REELS
          </h2>
          <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
            High-retention vertical edits engineered for viral reach
          </p>
        </div>

        {/* Asymmetric Staggered 9:16 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 pt-4 pb-16">
          {reelsData.map((reel, idx) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              idx={idx}
              offsetClass={offsetClasses[idx % offsetClasses.length]}
              onSelectVideo={onSelectVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
