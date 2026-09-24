import React, { useRef, useEffect, useState } from 'react';
import { motionGraphicsProjects } from '../../data/projects';
import { Play, Pause, Maximize2 } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

interface MotionGraphicsProps {
  onSelectVideo: (videoUrl: string, title: string, category: string) => void;
}

const MotionItem: React.FC<{
  project: typeof motionGraphicsProjects[0];
  index: number;
  onFullscreen: () => void;
}> = ({ project, index, onFullscreen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative flex flex-col bg-white border border-[#E5E5E0] rounded-xl overflow-hidden shadow-lg"
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={getAssetUrl(project.videoUrl)}
          poster={getAssetUrl(project.thumbnail)}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Floating Controls Overlay */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#C65B5B] transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={onFullscreen}
            className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#C65B5B] transition-colors"
            aria-label="View Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Project Tag */}
        <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white px-2.5 py-1 bg-black/50 backdrop-blur-md rounded">
            {project.subCategory}
          </span>
        </div>
      </div>

      {/* Meta Footer */}
      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-mono text-[#666666] uppercase mb-2">
          <span>0{index + 1} / MOTION</span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-display font-bold uppercase tracking-tight text-[#111111]">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#444444] font-light mt-2 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools?.map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#F7F7F5] border border-[#E5E5E0] text-[#666666]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const MotionGraphics: React.FC<MotionGraphicsProps> = ({ onSelectVideo }) => {
  return (
    <section id="motion-graphics" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-white editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">09 / 16</span>
            <span>EXPERIMENT / MOTION GRAPHICS</span>
          </div>
          <span className="hidden sm:inline">AUTOPLAY ON VIEWPORT ENTRY</span>
        </div>

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[#111111]">
            TRADITIONAL VIDEO EDITING
          </h2>
          <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
            Cinematic video editing, Color Grading & Color Correction
          </p>
        </div>

        {/* 2-column Motion Graphics grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {motionGraphicsProjects.map((project, idx) => (
            <MotionItem
              key={project.id}
              project={project}
              index={idx}
              onFullscreen={() => onSelectVideo(project.videoUrl, project.title, project.category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
