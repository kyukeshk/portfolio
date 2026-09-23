import React from 'react';
import { selectedWorks } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight, Play } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

interface SelectedWorkProps {
  onOpenProject: (project: Project) => void;
  onPlayVideo: (videoUrl: string, title: string, category: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onOpenProject,
  onPlayVideo,
}) => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="selected-work" className="relative w-full py-28 md:py-48 px-6 md:px-12 bg-white editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">13 / 16</span>
            <span>CLIMAX / SELECTED WORK</span>
          </div>
          <span>PRIMARY PORTFOLIO REEL</span>
        </div>

        {/* Section Heading */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-display font-extrabold uppercase tracking-tight text-[#111111]">
            SELECTED WORK
          </h2>
          <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
            Signature projects defining visual pacing, grade & motion
          </p>
        </div>

        {/* Varied Editorial Projects Showcase */}
        <div className="space-y-24 md:space-y-36">
          {selectedWorks.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                onClick={() => onOpenProject(project)}
                onMouseEnter={() => setCursor('project', 'VIEW →')}
                onMouseLeave={resetCursor}
                className={`group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Media Container (Large & Dominant) */}
                <div
                  className={`relative ${
                    isEven ? 'lg:col-span-8' : 'lg:col-span-8 lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E5E5E0] bg-[#111111] shadow-2xl">
                    <img
                      src={getAssetUrl(project.thumbnail)}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity" />

                    {/* Quick Play Trigger overlay */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlayVideo(project.videoUrl, project.title, project.category);
                      }}
                      className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-white/90 hover:bg-[#C65B5B] hover:text-white text-[#111111] backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110"
                      aria-label="Play Project Video"
                    >
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </button>

                    {/* Corner Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono text-white tracking-widest uppercase">
                      {project.subCategory}
                    </div>
                  </div>
                </div>

                {/* Project Metadata & Typography */}
                <div
                  className={`flex flex-col justify-center ${
                    isEven ? 'lg:col-span-4' : 'lg:col-span-4 lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-mono text-[#666666] uppercase mb-2">
                    <span className="text-[#C65B5B] font-bold group-hover:translate-x-1 transition-transform duration-300">
                      0{index + 1}
                    </span>
                    <span>/</span>
                    <span>{project.year}</span>
                    {project.client && (
                      <>
                        <span>/</span>
                        <span>{project.client}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight text-[#111111] group-hover:text-[#C65B5B] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm text-[#555555] font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase text-[#C65B5B] tracking-wider group-hover:underline">
                    <span>EXPLORE ARCHIVE DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
