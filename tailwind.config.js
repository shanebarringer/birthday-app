const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#FFF5F7',
          100: '#FFE3E9',
          200: '#FFC7D3',
          300: '#FFB7C5',
          400: '#FFA0B8',
          500: '#FF8FAB',
          600: '#E6809A',
          700: '#CC7189',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
