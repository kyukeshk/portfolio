import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { profileData } from '../../data/profile';
import { useCursor } from '../../context/CursorContext';

export const Hero: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const heroRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Different parallax depths
  const textX = useTransform(smoothMouseX, [-500, 500], [25, -25]);
  const textY = useTransform(smoothMouseY, [-500, 500], [15, -15]);

  const photoX = useTransform(smoothMouseX, [-500, 500], [-18, 18]);
  const photoY = useTransform(smoothMouseY, [-500, 500], [-12, 12]);

  const decorX = useTransform(smoothMouseX, [-500, 500], [-35, 35]);
  const decorY = useTransform(smoothMouseY, [-500, 500], [-25, 25]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 px-6 md:px-12 select-none"
    >
      {/* 1. Subdued Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto px-6 md:px-12 opacity-40">
        <div className="editorial-border-l h-full" />
        <div className="editorial-border-l h-full" />
        <div className="editorial-border-l h-full hidden md:block" />
        <div className="editorial-border-l editorial-border-r h-full hidden md:block" />
      </div>

      {/* 2. Top Header Sub-Info */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono text-[#666666] tracking-widest uppercase gap-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#C65B5B] animate-pulse" />
          <span>{profileData.location} — AVAILABLE FOR WORK</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-4 text-[11px]"
        >
          <span>VIDEO EDITING</span>
          <span>•</span>
          <span>STORY TELLING</span>
          <span>•</span>
          <span>COLOR GRADING</span>
        </motion.div>
      </div>

      {/* 3. Center Hero Composition */}
      <div className="relative z-10 my-auto py-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-center">

        {/* Large Typography Behind Portrait */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 0.6 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] md:text-[14vw] font-display font-extrabold text-[#ECECE7] leading-none tracking-tighter text-center uppercase whitespace-nowrap"
          >
            STORYTELLER
          </motion.h1>
        </motion.div>

        {/* Editor Photo with Mask Reveal & Parallax */}
        <motion.div
          style={{ x: photoX, y: photoY }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] aspect-[4/5] rounded-lg overflow-hidden shadow-2xl bg-white border border-[#E5E5E0] group"
            onMouseEnter={() => setCursor('image', 'YUKESH')}
            onMouseLeave={resetCursor}
          >
            <img
              src="/assets/images/hero_portrait.jpg"
              alt={profileData.name}
              className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

            {/* Corner Badges on Portrait */}
            <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-white/90 uppercase px-2 py-1 bg-black/40 backdrop-blur-sm rounded">
              DIRECTOR OF CUTS
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C65B5B] block">
                PORTFOLIO 2026
              </span>
              <p className="text-xs font-light text-white/80 line-clamp-1">
                "I turn ideas into visual stories."
              </p>
            </div>
          </motion.div>

          {/* Editor Name & Title sliding into position */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-center"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[#111111] uppercase">
              {profileData.name}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono tracking-widest text-[#666666] uppercase">
              VIDEO EDITOR
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative Editorial Floating Elements */}
        <motion.div
          style={{ x: decorX, y: decorY }}
          className="absolute right-4 md:right-16 top-1/3 hidden lg:block z-20 pointer-events-none"
        >
          <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#E5E5E0] rounded shadow-sm text-left max-w-xs">
            <span className="text-[10px] font-mono text-[#C65B5B] tracking-widest block uppercase">
              CORE MOTTO
            </span>
            <p className="text-xs text-[#333333] mt-1 font-light leading-snug">
              Every frame is intentional. Rhythm is the soul of cinematic editing.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4. Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="relative z-20 flex flex-col items-center justify-center text-center pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#666666] uppercase mb-2">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-12 bg-[#D0D0CA] relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-1/2 bg-[#C65B5B]"
          />
        </div>
      </motion.div>
    </section>
  );
};
