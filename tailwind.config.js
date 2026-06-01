/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-photos': {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-720px)' },
        },
      },
      animation: {
        marquee: 'marquee 12s linear infinite',
        'marquee-photos': 'marquee-photos 18s linear infinite',
      },
    },
  },
  plugins: [],
};
