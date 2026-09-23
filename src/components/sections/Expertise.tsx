import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { skillsData } from '../../data/skills';
import { SkillItem } from '../../types/portfolio';
import { ArrowUpRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

export const Expertise: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for floating preview
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#F7F7F5] overflow-hidden editorial-border-t"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">04 / 16</span>
            <span>EXPERTISE / WHAT I DO</span>
          </div>
          <span className="hidden md:inline">HOVER TO REVEAL SPECIMEN</span>
        </div>

        {/* Large Typography List */}
        <div className="space-y-2">
          {skillsData.map((skill, index) => {
            const isHovered = activeSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
                className="group relative border-b border-[#E5E5E0] py-6 sm:py-8 cursor-pointer transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left Number & Title */}
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="text-xs font-mono text-[#666666] group-hover:text-[#C65B5B] transition-colors duration-300">
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight transition-all duration-300 ${
                        isHovered
                          ? 'text-[#111111] translate-x-4'
                          : 'text-[#333333]'
                      }`}
                    >
                      {skill.title}
                    </h3>
                  </div>

                  {/* Right Subtitle & Description */}
                  <div className="md:text-right flex items-center md:justify-end gap-6">
                    <div>
                      <span className="text-xs font-mono tracking-wider text-[#C65B5B] block uppercase">
                        {skill.subtitle}
                      </span>
                      <span className="text-sm text-[#666666] max-w-xs block font-light">
                        {skill.description}
                      </span>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full border border-[#E5E5E0] flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#C65B5B] border-[#C65B5B] text-white rotate-45'
                          : 'text-[#666666]'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Animated Accent Line */}
                <motion.div
                  initial={false}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C65B5B] origin-left"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Hover Preview Box tracking the cursor */}
      {activeSkill && (
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute z-40 hidden lg:block -translate-x-1/2 -translate-y-1/2 w-64 h-40 rounded-lg overflow-hidden shadow-2xl border-2 border-white bg-black"
        >
          <img
            src={getAssetUrl(activeSkill.previewMedia)}
            alt={activeSkill.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
            <span className="text-[10px] font-mono uppercase text-white tracking-widest">
              {activeSkill.title}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
};
