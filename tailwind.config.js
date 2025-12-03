/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-light': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.9 },
        }
      },
      animation: {
        'pulse-light': 'pulse-light 2s infinite ease-in-out',
      }
    },
  },
  plugins: [],
};
