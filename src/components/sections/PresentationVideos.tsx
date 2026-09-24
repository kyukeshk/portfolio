import React, { useRef } from 'react';
import { presentationVideos } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { Play } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { getAssetUrl } from '../../utils/assets';

interface PresentationVideosProps {
  onSelectVideo: (videoUrl: string, title: string, category: string) => void;
  onOpenProject: (project: Project) => void;
}

const PresentationCard: React.FC<{
  project: Project;
  index: number;
  onSelectVideo: (videoUrl: string, title: string, category: string) => void;
  onOpenProject: (project: Project) => void;
}> = ({ project, index, onSelectVideo, onOpenProject }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setCursor, resetCursor } = useCursor();

  const handleMouseEnter = () => {
    setCursor('video', 'PLAY');
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
      onClick={() => onSelectVideo(project.videoUrl, project.title, project.category)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer flex flex-col"
    >
      {/* Video Container (No thumbnail img - plays inline on hover like AiVideo) */}
      <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[#E5E5E0] bg-[#111111] shadow-md">
        <video
          ref={videoRef}
          src={getAssetUrl(project.videoUrl)}
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity pointer-events-none" />

        {/* Duration Badge */}
        {project.duration && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono text-white tracking-widest pointer-events-none">
            {project.duration}
          </div>
        )}

        {/* Play Icon Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C65B5B]">
            <Play className="w-5 h-5 ml-0.5 fill-white" />
          </div>
        </div>

        {/* Client / Tag on bottom */}
        {project.client && (
          <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase text-[#C65B5B] tracking-wider pointer-events-none">
            {project.client}
          </div>
        )}
      </div>

      {/* Card Meta */}
      <div className="mt-4 flex flex-col">
        <div className="flex items-center justify-between text-xs font-mono text-[#666666] uppercase mb-1">
          <span>0{index + 1} / PRESENTATION</span>
          <span>{project.year}</span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-display font-bold uppercase tracking-tight text-[#111111] group-hover:text-[#C65B5B] transition-colors">
            {project.title}
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenProject(project);
            }}
            className="text-[10px] font-mono uppercase tracking-wider text-[#C65B5B] hover:underline"
          >
            Details →
          </button>
        </div>
        <p className="text-xs text-[#666666] font-light line-clamp-2 mt-1">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export const PresentationVideos: React.FC<PresentationVideosProps> = ({
  onSelectVideo,
  onOpenProject,
}) => {
  return (
    <section id="presentation-videos" className="relative w-full py-28 md:py-10 px-6 md:px-12 bg-white editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">07 / 16</span>
            <span>SHOWCASE / PRESENTATION VIDEOS</span>
          </div>
          <span className="hidden sm:inline">16:9 4K MASTERS</span>
        </div>

        {/* Section Heading */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[#111111]">
              PRESENTATION VIDEOS
            </h2>
            <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
              Brand keynotes, product launches & cinematic anthems
            </p>
          </div>
          <span className="text-xs font-mono text-[#666666] uppercase">
            CLICK TO EXPAND / HOVER TO PREVIEW
          </span>
        </div>

        {/* Presentation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {presentationVideos.map((project, index) => (
            <PresentationCard
              key={project.id}
              project={project}
              index={index}
              onSelectVideo={onSelectVideo}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
