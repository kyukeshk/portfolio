import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface CategoryItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  anchor: string;
}

const categories: CategoryItem[] = [
  {
    number: "01",
    title: "PRESENTATION VIDEOS",
    subtitle: "Brand Keynotes & Product Launches",
    description: "High-definition wide-screen keynote presentations, corporate anthems, and cinematic launch reels.",
    image: "/assets/images/automotive_reel.jpg",
    tag: "16:9 4K MASTERS",
    anchor: "#presentation-videos"
  },
  {
    number: "02",
    title: "MOTION GRAPHICS",
    subtitle: "Kinetic Identity & 3D Sequences",
    description: "Refractive 3D animations, broadcast package title cards, and procedural motion typography.",
    image: "/assets/images/motion_graphics.jpg",
    tag: "2D / 3D COMPOSITING",
    anchor: "#motion-graphics"
  },
  {
    number: "03",
    title: "SOCIAL MEDIA REELS",
    subtitle: "High-Retention Vertical Storytelling",
    description: "Fast-paced 9:16 vertical edits with retention hooks, sound design hits, and kinetic subtitles.",
    image: "/assets/images/color_grade_after.jpg",
    tag: "9:16 VERTICAL",
    anchor: "#reels"
  },
  {
    number: "04",
    title: "GRAPHIC DESIGN",
    subtitle: "Editorial Posters & Brand Key Art",
    description: "Swiss-inspired typography, event collateral, social key art, and tactile photo manipulations.",
    image: "/assets/images/poster_design.jpg",
    tag: "KEY ART & POSTERS",
    anchor: "#graphic-design"
  }
];

export const ContentCategories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#F7F7F5] editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">06 / 16</span>
            <span>DISCOVERY / CONTENT I CREATE</span>
          </div>
          <span>CATEGORY SELECTOR</span>
        </div>

        {/* Section Main Title */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-[#111111]">
            CONTENT I CREATE
          </h2>
          <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
            Curated across four distinct creative disciplines
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Category Nav Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
            {categories.map((cat, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={cat.number}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-6 sm:p-8 rounded-lg border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#111111] shadow-lg translate-x-2'
                      : 'bg-white/60 border-[#E5E5E0] hover:bg-white hover:border-[#D0D0CA]'
                  }`}
                  onMouseEnter={() => setCursor('default', `DISC. ${cat.number}`)}
                  onMouseLeave={resetCursor}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-xs font-mono tracking-widest uppercase block mb-1 ${
                        isActive ? 'text-[#C65B5B]' : 'text-[#888888]'
                      }`}>
                        {cat.number} — {cat.tag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[#111111]">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-mono uppercase text-[#666666] mt-1">
                        {cat.subtitle}
                      </p>
                    </div>

                    <a
                      href={cat.anchor}
                      onClick={(e) => e.stopPropagation()}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#111111] text-white' : 'bg-[#EFEFEA] text-[#666666] hover:bg-[#C65B5B] hover:text-white'
                      }`}
                      aria-label={`Jump to ${cat.title}`}
                    >
                      <ArrowDownRight className="w-5 h-5" />
                    </a>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-[#E5E5E0]"
                    >
                      <p className="text-sm text-[#444444] font-light leading-relaxed">
                        {cat.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Visual Preview Card */}
          <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-full rounded-lg overflow-hidden border border-[#E5E5E0] bg-black shadow-xl">
            <motion.img
              key={activeIndex}
              src={categories[activeIndex].image}
              alt={categories[activeIndex].title}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C65B5B]">
                CATEGORY SPECIMEN {categories[activeIndex].number}
              </span>
              <h4 className="text-2xl sm:text-4xl font-display font-bold mt-1 uppercase">
                {categories[activeIndex].title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
