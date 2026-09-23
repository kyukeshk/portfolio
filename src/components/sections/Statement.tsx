import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';

export const Statement: React.FC = () => {
  const words = [
    { text: 'I', highlight: false },
    { text: 'create', highlight: false },
    { text: 'visual', highlight: false },
    { text: 'experiences', highlight: true },
    { text: 'through', highlight: false },
    { text: 'editing,', highlight: true },
    { text: 'motion', highlight: false },
    { text: 'and', highlight: false },
    { text: 'design.', highlight: true },
  ];

  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-[#F7F7F5] overflow-hidden editorial-border-t">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 text-xs font-mono tracking-widest text-[#666666] uppercase"
        >
          <span className="text-[#C65B5B]">02 / 16</span>
          <span>INTRODUCTION</span>
        </motion.div>

        {/* Large Editorial Statement */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-[#111111] leading-[1.08] tracking-tight"
        >
          {words.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block mr-3 sm:mr-5 ${
                item.highlight ? 'text-[#C65B5B] italic font-serif' : 'text-[#111111]'
              }`}
            >
              {item.text}
            </motion.span>
          ))}
        </motion.h2>

        {/* Short bio paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 max-w-2xl ml-auto border-l-2 border-[#C65B5B] pl-6 md:pl-8"
        >
          <p className="text-lg sm:text-xl text-[#444444] font-light leading-relaxed">
            {profileData.statement.paragraph}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
