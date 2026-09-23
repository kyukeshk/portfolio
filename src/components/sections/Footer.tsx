import React from 'react';
import { profileData } from '../../data/profile';
import { ArrowUp } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export const Footer: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-[#F7F7F5] editorial-border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        {/* Left: Identity */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[#111111]">
            {profileData.name}
          </h3>
          <p className="text-xs font-mono uppercase tracking-widest text-[#666666] mt-1">
            VIDEO EDITOR & MOTION DESIGNER
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#666666]">
            {profileData.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#111111] transition-colors"
                onMouseEnter={() => setCursor('default', s.name)}
                onMouseLeave={resetCursor}
              >
                {s.name}
              </a>
            ))}
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-[#111111] transition-colors"
              onMouseEnter={() => setCursor('default', 'EMAIL')}
              onMouseLeave={resetCursor}
            >
              Email
            </a>
          </div>
        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
          <span className="text-xs font-mono text-[#888888]">
            © {new Date().getFullYear()} {profileData.name}. ALL RIGHTS RESERVED.
          </span>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursor('default', 'TOP')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#C65B5B] transition-colors p-2 rounded border border-[#E5E5E0] bg-white hover:border-[#111111]"
            aria-label="Scroll to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
