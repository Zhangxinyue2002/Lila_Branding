/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mooon Premium Brand Palette
        mooon: {
          primary: '#D97456',      // Warm Orange-Red
          secondary: '#E8A87C',    // Soft Peach-Orange
          tertiary: '#8B6F47',     // Deep Brown
          light: '#F5F1ED',        // Off-white Cream
          dark: '#2D2416',         // Deep Brown-Black
          soft: '#F0E6DC',         // Warm Beige
          accent: '#C85A3A',       // Deep Rust
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
