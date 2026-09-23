import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import { useCursor } from '../../context/CursorContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERTISE', href: '#expertise' },
    { label: 'WORK', href: '#selected-work' },
    { label: 'PROCESS', href: '#process' },
    { label: 'SHOWREEL', href: '#showreel' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F7F5]/85 backdrop-blur-md py-4 border-b border-[#E5E5E0]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2"
          onMouseEnter={() => setCursor('default')}
          onMouseLeave={resetCursor}
        >
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-[#111111]">
            {profileData.displayName}
          </span>
          <span className="text-[11px] font-mono text-[#666666] tracking-widest pl-1 border-l border-[#D0D0CA]">
            2026 PORTFOLIO
          </span>
        </a>

        {/* Center Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono tracking-widest text-[#666666] hover:text-[#111111] transition-colors relative group py-1"
              onMouseEnter={() => setCursor('default')}
              onMouseLeave={resetCursor}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C65B5B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onMouseEnter={() => setCursor('contact', "LET'S TALK")}
            onMouseLeave={resetCursor}
            className="px-4 py-2 rounded-full border border-[#111111] text-[11px] font-mono uppercase tracking-widest text-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-300"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </motion.header>
  );
};
