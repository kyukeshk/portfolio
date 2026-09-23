import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { profileData } from '../../data/profile';
import { useCursor } from '../../context/CursorContext';
import { getAssetUrl } from '../../utils/assets';

interface CounterProps {
  target: number;
  suffix: string;
  label: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="p-6 bg-white border border-[#E5E5E0] rounded-lg">
      <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#111111] tracking-tight">
        {count}
        <span className="text-[#C65B5B] font-light">{suffix}</span>
      </div>
      <div className="mt-2 text-xs font-mono tracking-widest text-[#666666] uppercase">
        {label}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="about" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-white editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <span className="text-[#C65B5B]">03 / 16</span>
          <span>WHO IS HE? / BIOGRAPHY</span>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Secondary Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
            onMouseEnter={() => setCursor('image', 'AT WORK')}
            onMouseLeave={resetCursor}
          >
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-[#E5E5E0] bg-[#F7F7F5] shadow-lg group">
              <img
                src={getAssetUrl('/assets/images/hero_portrait.png')}
                alt="YK in the studio"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded text-white flex justify-between items-center text-[10px] font-mono tracking-wider uppercase">
                <span>STUDIO WORKSTATION</span>
                <span className="text-[#C65B5B]">EDITING SUITE</span>
              </div>
            </div>

            {/* Editorial stamp */}
            <div className="mt-4 flex justify-between text-[11px] font-mono text-[#666666]">
              <span>FIG. 03 — WORKSPACE ARCHIVE</span>
              <span>2026 EDITION</span>
            </div>
          </motion.div>

          {/* RIGHT: Content & Statistics */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C65B5B] block mb-2">
                HI, I'M {profileData.name}
              </span>
              <h3 className="text-3xl sm:text-5xl font-display font-bold text-[#111111] uppercase tracking-tight leading-tight">
                VIDEO EDITOR & <br />
                MOTION DESIGNER
              </h3>

              {/* Bio Paragraphs */}
              <div className="mt-8 space-y-4 text-base sm:text-lg text-[#444444] font-light leading-relaxed">
                {profileData.detailedBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Statistics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 grid grid-cols-2 gap-4"
            >
              {profileData.stats.map((stat, idx) => (
                <AnimatedCounter
                  key={idx}
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
