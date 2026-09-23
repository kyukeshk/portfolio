import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { getAssetUrl } from '../../utils/assets';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPlayVideo: (videoUrl: string, title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onPlayVideo,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-12 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#F7F7F5] text-[#111111] rounded-xl overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-black transition-colors duration-200 shadow-sm"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Banner */}
            <div className="relative aspect-video w-full bg-black overflow-hidden group">
              <img
                src={getAssetUrl(project.thumbnail)}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play Video Button overlay */}
              <button
                onClick={() => onPlayVideo(project.videoUrl, project.title)}
                className="absolute inset-0 flex items-center justify-center group/btn"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C65B5B] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/btn:scale-110">
                  <Play className="w-7 h-7 ml-1 fill-white" />
                </div>
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C65B5B] bg-white/10 px-2.5 py-1 rounded backdrop-blur-sm">
                  {project.subCategory || project.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-display font-bold mt-2">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 md:p-10 space-y-8">
              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#E5E5E0]">
                {project.client && (
                  <div>
                    <span className="text-[11px] font-mono text-[#666666] uppercase tracking-wider block">
                      Client
                    </span>
                    <span className="text-sm font-semibold mt-0.5 block">
                      {project.client}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-[11px] font-mono text-[#666666] uppercase tracking-wider block">
                    Role
                  </span>
                  <span className="text-sm font-semibold mt-0.5 block">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#666666] uppercase tracking-wider block">
                    Year
                  </span>
                  <span className="text-sm font-semibold mt-0.5 block">
                    {project.year}
                  </span>
                </div>
                {project.duration && (
                  <div>
                    <span className="text-[11px] font-mono text-[#666666] uppercase tracking-wider block">
                      Duration
                    </span>
                    <span className="text-sm font-semibold mt-0.5 block">
                      {project.duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#666666] mb-2">
                  Project Overview
                </h4>
                <p className="text-base md:text-lg text-[#333333] leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Tools tags */}
              {project.tools && project.tools.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#666666] mb-3">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono px-3 py-1.5 rounded bg-white border border-[#E5E5E0] text-[#111111]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onPlayVideo(project.videoUrl, project.title)}
                  className="px-6 py-3 bg-[#111111] hover:bg-[#C65B5B] text-white text-xs font-mono uppercase tracking-widest rounded transition-colors duration-300 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Watch Video
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
