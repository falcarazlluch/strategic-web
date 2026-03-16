/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#05090f',
        navy: '#0d1424',
        'navy-light': '#111827',
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'pulse-slow':   'pulse 5s cubic-bezier(0.4,0,0.6,1) infinite',
        'gradient-x':   'gradientX 6s ease infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'typing':       'typing 1.2s steps(3) infinite',
      },
      keyframes: {
        fadeUp:     { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { '0%': { opacity: '0' },                                 '100%': { opacity: '1' } },
        gradientX:  { '0%,100%': { backgroundPosition: '0% 50%' },            '50%':  { backgroundPosition: '100% 50%' } },
        shimmer:    { '0%': { backgroundPosition: '-200% 0' },                '100%': { backgroundPosition: '200% 0' } },
        typing:     { '0%,100%': { content: '"."' }, '33%': { content: '".."' }, '66%': { content: '"..."' } },
      },
    },
  },
  plugins: [],
};
