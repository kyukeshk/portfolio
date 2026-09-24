import React from 'react';

interface SoftwareIconProps {
  toolId: string;
  name?: string;
  className?: string;
}

export const SoftwareIcon: React.FC<SoftwareIconProps> = ({
  toolId,
  name,
  className = 'w-full h-full',
}) => {
  const normalizedId = toolId.toLowerCase();

  switch (normalizedId) {
    case 'davinci':
    case 'davinci-resolve':
      // Official DaVinci Resolve color pinwheel (Red, Green, Blue curved blades)
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={name || 'DaVinci Resolve'}
        >
          <rect width="100" height="100" rx="22" fill="#18181B" />
          <rect
            width="98"
            height="98"
            x="1"
            y="1"
            rx="21"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />
          {/* Top Petal - Red */}
          <path
            d="M50 48 C50 33 60 20 71 23 C81 26 80 43 70 51 C61 58 52 52 50 48 Z"
            fill="url(#dvr-red)"
          />
          {/* Right Petal - Green */}
          <path
            d="M52 50 C65 52 76 63 72 74 C68 83 51 81 44 70 C38 60 46 52 52 50 Z"
            fill="url(#dvr-green)"
          />
          {/* Left Petal - Blue */}
          <path
            d="M48 52 C45 65 33 74 23 69 C15 64 19 47 30 42 C41 37 47 46 48 52 Z"
            fill="url(#dvr-blue)"
          />
          {/* Center Hub */}
          <circle cx="50" cy="50" r="4.5" fill="#18181B" />
          <defs>
            <linearGradient id="dvr-red" x1="50" y1="20" x2="80" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4B4B" />
              <stop offset="1" stopColor="#E50914" />
            </linearGradient>
            <linearGradient id="dvr-green" x1="50" y1="50" x2="75" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#30D158" />
              <stop offset="1" stopColor="#1E8238" />
            </linearGradient>
            <linearGradient id="dvr-blue" x1="48" y1="52" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A84FF" />
              <stop offset="1" stopColor="#0051C7" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'canva':
      // Official Canva gradient squircle with white calligraphic "C"
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={name || 'Canva'}
        >
          <rect width="100" height="100" rx="22" fill="url(#canva-bg)" />
          <rect
            width="98"
            height="98"
            x="1"
            y="1"
            rx="21"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
          />
          {/* Flowing Canva script "C" */}
          <path
            d="M69 35 C64 27 54 25 45 28 C33 32 27 45 29 60 C31 73 42 78 54 75 C63 73 68 67 70 62 C71 59 69 58 66 58 C64 58 63 59 61 61 C55 66 48 68 41 65 C34 62 33 54 34 46 C36 36 42 31 50 30 C56 29 62 31 65 36 C66 38 68 38 70 37 C71 36 70 35 69 35 Z"
            fill="white"
          />
          <defs>
            <linearGradient id="canva-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC" />
              <stop offset="45%" stopColor="#2E6BF6" />
              <stop offset="100%" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'capcut':
    case 'capcut-pro':
      // Official CapCut double chevron / scissors cut ribbon logo
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={name || 'CapCut'}
        >
          <rect width="100" height="100" rx="22" fill="#0C0C0E" />
          <rect
            width="98"
            height="98"
            x="1"
            y="1"
            rx="21"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          {/* Top Chevron */}
          <path
            d="M20 28 L50 44 L80 28 L80 40 L50 56 L20 40 Z"
            fill="white"
          />
          {/* Bottom Chevron */}
          <path
            d="M20 72 L50 56 L80 72 L80 60 L50 44 L20 60 Z"
            fill="white"
          />
        </svg>
      );

    case 'premiere':
    case 'premiere-pro':
      // Adobe Premiere Pro "Pr"
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={name || 'Adobe Premiere Pro'}
        >
          <rect width="100" height="100" rx="22" fill="#00005B" />
          <rect
            width="96"
            height="96"
            x="2"
            y="2"
            rx="20"
            stroke="#9999FF"
            strokeWidth="3.5"
          />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fill="#9999FF"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="700"
            fontSize="44"
            letterSpacing="-1.5"
          >
            Pr
          </text>
        </svg>
      );

    case 'after-effects':
    case 'aftereffects':
      // Adobe After Effects "Ae"
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={name || 'Adobe After Effects'}
        >
          <rect width="100" height="100" rx="22" fill="#00005B" />
          <rect
            width="96"
            height="96"
            x="2"
            y="2"
            rx="20"
            stroke="#9999FF"
            strokeWidth="3.5"
          />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fill="#9999FF"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="700"
            fontSize="44"
            letterSpacing="-1.5"
          >
            Ae
          </text>
        </svg>
      );

    case 'photoshop':
      // Adobe Photoshop "Ps"
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={name || 'Adobe Photoshop'}
        >
          <rect width="100" height="100" rx="22" fill="#001E36" />
          <rect
            width="96"
            height="96"
            x="2"
            y="2"
            rx="20"
            stroke="#31A8FF"
            strokeWidth="3.5"
          />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fill="#31A8FF"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="700"
            fontSize="44"
            letterSpacing="-1.5"
          >
            Ps
          </text>
        </svg>
      );

    case 'illustrator':
      // Adobe Illustrator "Ai"
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={name || 'Adobe Illustrator'}
        >
          <rect width="100" height="100" rx="22" fill="#330000" />
          <rect
            width="96"
            height="96"
            x="2"
            y="2"
            rx="20"
            stroke="#FF9A00"
            strokeWidth="3.5"
          />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fill="#FF9A00"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="700"
            fontSize="44"
            letterSpacing="-1.5"
          >
            Ai
          </text>
        </svg>
      );

    default:
      // Elegant minimalist fallback badge with initials
      const initials = (name || toolId).slice(0, 2).toUpperCase();
      return (
        <div
          className={`rounded-xl flex items-center justify-center font-display font-bold text-sm tracking-wider bg-[#111111] text-white shadow-sm ${className}`}
        >
          {initials}
        </div>
      );
  }
};
