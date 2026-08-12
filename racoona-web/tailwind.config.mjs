/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        primary: '#00f0ff',
        secondary: '#7000ff',
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['"Geist Sans"', 'sans-serif'],
        mono: ['"Geist Sans"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'marquee': 'marquee 18s linear infinite',
      }
    },
  },
  plugins: [],
};

