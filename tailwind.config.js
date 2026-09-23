/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F7F7F5',
          secondary: '#FFFFFF',
          subtle: '#EFEFEA',
          dark: '#0D0D0D',
        },
        foreground: {
          DEFAULT: '#111111',
          secondary: '#666666',
          muted: '#8E8E8E',
          inverted: '#F7F7F5',
        },
        accent: {
          DEFAULT: '#C65B5B',
          hover: '#B34A4A',
          light: '#F5E8E8',
        },
        border: {
          DEFAULT: '#E5E5E0',
          dark: '#222222',
          subtle: '#EAEAE6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        serif: ['Cinzel', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        editorial: '0.15em',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring-custom': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
}
