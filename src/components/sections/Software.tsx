import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { softwareData } from '../../data/software';
import { useCursor } from '../../context/CursorContext';
import { ArrowRight } from 'lucide-react';

export const Software: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="software" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-white editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">05 / 16</span>
            <span>TOOLS OF THE TRADE / SOFTWARE</span>
          </div>
          <span className="hidden sm:inline">PRODUCTION PIPELINE</span>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#111111]">
            SOFTWARE & TOOLKIT
          </h2>
          <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
            Industry-standard digital post-production suite
          </p>
        </div>

        {/* Software Rows */}
        <div className="divide-y divide-[#E5E5E0] border-y border-[#E5E5E0]">
          {softwareData.map((tool) => {
            const isHovered = hoveredTool === tool.id;

            return (
              <div
                key={tool.id}
                onMouseEnter={() => {
                  setHoveredTool(tool.id);
                  setCursor('default', tool.shortName);
                }}
                onMouseLeave={() => {
                  setHoveredTool(null);
                  resetCursor();
                }}
                className="group relative py-6 sm:py-8 transition-colors duration-300 hover:bg-[#F7F7F5]/60 px-4 sm:px-6 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Icon Badge & Name */}
                  <div className="flex items-center gap-5 sm:gap-8">
                    {/* Tool Badge */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-sm tracking-wider transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#111111] text-white scale-110 shadow-md'
                          : 'bg-[#F0F0EB] text-[#111111]'
                      }`}
                    >
                      {tool.shortName}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold uppercase tracking-tight text-[#111111] group-hover:text-[#C65B5B] transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#666666]">
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  {/* Middle / Right: Description slide-in */}
                  <div className="flex items-center md:justify-end gap-6">
                    <div className="max-w-md md:text-right">
                      <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                        {tool.description}
                      </p>
                      <span className="text-[11px] font-mono text-[#C65B5B] uppercase tracking-wider mt-1 block">
                        {tool.highlight}
                      </span>
                    </div>

                    <div
                      className={`hidden sm:flex w-8 h-8 rounded-full items-center justify-center transition-all duration-300 ${
                        isHovered ? 'translate-x-1 text-[#C65B5B]' : 'text-[#A0A09A]'
                      }`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Animated bottom line */}
                <motion.div
                  initial={false}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C65B5B] origin-left"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
