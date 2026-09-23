import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/process';
import { useCursor } from '../../context/CursorContext';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="process" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#F7F7F5] editorial-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">12 / 16</span>
            <span>METHODOLOGY / CREATIVE PROCESS</span>
          </div>
          <span>FROM IDEA TO FINAL CUT</span>
        </div>

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[#111111]">
            FROM IDEA <br className="hidden sm:inline" />
            TO FINAL CUT
          </h2>
          <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
            A disciplined six-phase post-production pipeline
          </p>
        </div>

        {/* Desktop / Tablet Timeline Grid */}
        <div className="relative">
          {/* Connecting Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#E5E5E0] -translate-y-8 z-0">
            <motion.div
              className="h-full bg-[#C65B5B]"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {processSteps.map((step, idx) => {
              const isCurrent = activeStep === idx;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setCursor('default', `PHASE ${step.number}`)}
                  onMouseLeave={resetCursor}
                  className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isCurrent
                      ? 'bg-white border-[#111111] shadow-xl -translate-y-2'
                      : 'bg-white/70 border-[#E5E5E0] hover:bg-white hover:border-[#D0D0CA]'
                  }`}
                >
                  <div>
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xl font-display font-bold ${
                        isCurrent ? 'text-[#C65B5B]' : 'text-[#888888]'
                      }`}>
                        {step.number}
                      </span>
                      <div className={`w-3 h-3 rounded-full ${
                        isCurrent ? 'bg-[#C65B5B]' : 'bg-[#E5E5E0]'
                      }`} />
                    </div>

                    <h3 className="text-lg font-display font-bold uppercase tracking-tight text-[#111111]">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#C65B5B] uppercase tracking-wider block mt-0.5">
                      {step.tagline}
                    </span>

                    <p className="text-xs text-[#555555] font-light mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#EAEAE6]">
                    <span className="text-[10px] font-mono uppercase text-[#888888] block">
                      Deliverable
                    </span>
                    <span className="text-xs font-medium text-[#111111] block mt-0.5">
                      {step.deliverable}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
