import React from 'react';
import { profileData } from '../../data/profile';
import { MagneticButton } from '../common/MagneticButton';
import { ArrowUpRight, ArrowRight, Mail } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export const Contact: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="contact" className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-white editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">15 / 16</span>
            <span>GET IN TOUCH / CONTACT</span>
          </div>
          <span>WORLDWIDE COLLABORATION</span>
        </div>

        {/* Large Typography Callout */}
        <div className="mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C65B5B] block mb-4">
            HAVE A STORY TO TELL?
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold uppercase tracking-tight text-[#111111] leading-none">
            LET'S CREATE <br />
            <span className="italic font-serif font-normal text-[#C65B5B]">SOMETHING</span> EPIC.
          </h2>
        </div>

        {/* Magnetic CTA Button & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-8 border-t border-[#E5E5E0]">
          
          {/* Left: Magnetic Action Button */}
          <div className="lg:col-span-7">
            <MagneticButton
              href={`mailto:${profileData.email}`}
              cursorType="contact"
              cursorText="LET'S TALK"
              className="w-full sm:w-auto"
            >
              <div className="group relative inline-flex items-center justify-between sm:justify-start gap-6 px-8 sm:px-12 py-6 sm:py-8 rounded-full bg-[#111111] text-white hover:bg-[#C65B5B] transition-colors duration-500 shadow-2xl">
                <span className="text-lg sm:text-2xl font-display font-bold uppercase tracking-wider">
                  START A PROJECT
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </MagneticButton>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#666666]">
              <Mail className="w-4 h-4 text-[#C65B5B]" />
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-[#111111] transition-colors underline"
              >
                {profileData.email}
              </a>
            </div>
          </div>

          {/* Right: Social Directory */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-[#666666] uppercase tracking-widest block mb-4">
              CONNECT ACROSS THE WEB
            </span>
            <div className="grid grid-cols-2 gap-4">
              {profileData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setCursor('default', social.name)}
                  onMouseLeave={resetCursor}
                  className="p-4 rounded-lg border border-[#E5E5E0] hover:border-[#111111] bg-[#F7F7F5] hover:bg-white transition-all duration-300 group flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-display font-bold uppercase text-[#111111] group-hover:text-[#C65B5B] transition-colors">
                      {social.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#666666] block">
                      {social.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
