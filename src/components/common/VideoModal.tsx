import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  category?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  category,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
          onClick={onClose}
        >
          {/* Top Bar */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
            <div className="text-white">
              {category && (
                <p className="text-xs uppercase tracking-widest text-white/60 font-mono">
                  {category}
                </p>
              )}
              {title && (
                <h3 className="text-lg md:text-xl font-display font-semibold text-white tracking-wide">
                  {title}
                </h3>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={getAssetUrl(videoUrl)}
              controls
              autoPlay
              playsInline
              className="w-full h-auto max-h-[75vh] object-contain rounded-md"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
