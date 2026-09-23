import React, { useState, useRef, useCallback } from 'react';
import { beforeAfterData } from '../../data/beforeAfter';
import { useCursor } from '../../context/CursorContext';
import { MoveHorizontal } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursor, resetCursor } = useCursor();

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-white editorial-border-t select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 text-xs font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#C65B5B]">11 / 16</span>
            <span>COLOR SCIENCE / RAW → FINAL</span>
          </div>
          <span>DRAGGABLE COMPARISON</span>
        </div>

        {/* Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[#111111]">
              BEFORE & AFTER
            </h2>
            <p className="text-sm font-mono text-[#666666] mt-2 uppercase tracking-wider">
              {beforeAfterData.category}
            </p>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
            {beforeAfterData.description}
          </p>
        </div>

        {/* Interactive Draggable Slider Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => setCursor('drag', 'DRAG')}
          onMouseLeave={() => {
            setIsDragging(false);
            resetCursor();
          }}
          className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#E5E5E0] shadow-2xl cursor-ew-resize bg-black"
        >
          {/* AFTER Image (Full Background) */}
          <img
            src={beforeAfterData.afterImage}
            alt={beforeAfterData.afterLabel}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* BEFORE Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeAfterData.beforeImage}
              alt={beforeAfterData.beforeLabel}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
              style={{
                width: containerRef.current
                  ? `${containerRef.current.clientWidth}px`
                  : '100%',
              }}
            />
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Draggable Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#111111] shadow-2xl flex items-center justify-center border border-[#E5E5E0]">
              <MoveHorizontal className="w-5 h-5 text-[#C65B5B]" />
            </div>
          </div>

          {/* Left / Right Editorial Badges */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[11px] font-mono tracking-widest text-white uppercase pointer-events-none">
            {beforeAfterData.beforeLabel}
          </div>
          <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[11px] font-mono tracking-widest text-white uppercase pointer-events-none">
            {beforeAfterData.afterLabel}
          </div>

          {/* Hint on bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-mono tracking-widest text-white/90 uppercase pointer-events-none">
            DRAG HORIZONTALLY TO COMPARE
          </div>
        </div>
      </div>
    </section>
  );
};
