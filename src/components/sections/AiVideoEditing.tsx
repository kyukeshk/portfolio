import React, { useRef } from 'react';
import { aiVideoItems } from '../../data/aiVideos';
import { AiVideoItem } from '../../types/portfolio';
import { useCursor } from '../../context/CursorContext';
import { Play, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

interface AiVideoEditingProps {
  onSelectVideo: (videoUrl: string, title: string, category: string) => void;
}

const AiVideoCard: React.FC<{
  item: AiVideoItem;
  onSelectVideo: (videoUrl: string, title: string, category: string) => void;
}> = ({ item, onSelectVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setCursor, resetCursor } = useCursor();

  const isTall = item.aspect === 'tall';
  const isLandscape = item.aspect === 'landscape';

  const handleMouseEnter = () => {
    setCursor('video', 'PLAY AI VIDEO');
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
      onClick={() => onSelectVideo(item.videoUrl, item.title, 'AI Video Editing')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col bg-white border border-[#E5E5E0] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
        isTall ? 'sm:row-span-2' : ''
      }`}
    >
      {/* Media Container (Exact GraphicDesign.tsx aspect ratios with video playback) */}
      <div
        className={`relative w-full overflow-hidden bg-black ${
          isTall
            ? 'aspect-[3/4]'
            : isLandscape
            ? 'aspect-[16/10]'
            : 'aspect-square'
        }`}
      >
        <video
          ref={videoRef}
          src={getAssetUrl(item.videoUrl)}
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* Ambient Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* Top Badges (like Reels.tsx) */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white tracking-widest z-10 pointer-events-none">
          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full uppercase text-white/90">
            <Sparkles className="w-3 h-3 text-[#C65B5B]" />
            <span>AI SYNTHESIS</span>
          </span>
          {item.duration && (
            <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded border border-white/10 text-white/80">
              {item.duration}
            </span>
          )}
        </div>

        {/* Center Play Button (exact reference from Reels.tsx) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-[#C65B5B] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="w-6 h-6 ml-0.5 fill-white" />
          </div>
        </div>
      </div>

      {/* Caption Card (exact layout from GraphicDesign.tsx) */}
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

        {item.tools && item.tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#F0F0EB]">
            {item.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#E5E5E0] text-[10px] font-mono text-[#666666]"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const AiVideoEditing: React.FC<AiVideoEditingProps> = ({ onSelectVideo }) => {
  return (
    <section
      id="ai-video-editing"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#F7F7F5] editorial-border-t"
    >
      {/* Anchor fallbacks for smooth scrolling */}
      <span id="graphic-design" className="absolute -top-24 left-0 pointer-events-none" />
      <span id="ai-videos" className="absolute -top-24 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">10 / 16</span>
            <span>NEURAL MOTION / AI VIDEO EDITING</span>
          </div>
          <span>EDITORIAL MOODBOARD</span>
        </div>

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[#111111]">
            AI VIDEO EDITING
          </h2>
          <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
            Prompt-engineered cinematic simulations, neural motion & next-gen visual storytelling
          </p>
        </div>

        {/* Editorial Moodboard Grid (Varied Aspect Ratios & Asymmetric Heights as in GraphicDesign.tsx) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {aiVideoItems.map((item) => (
            <AiVideoCard
              key={item.id}
              item={item}
              onSelectVideo={onSelectVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
