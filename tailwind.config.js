/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

const customColors = {
  'dweller-gray': '#313131',
  'dweller-bg-gray': '#818181',
  'dweller-green': '#0E7A60',
  'dweller-blue': '#3A517F',
  'dweller-pink': '#B77580',
  'dweller-text': '#DAD5D5',
  'rose-500': '#F56565',
  'cyan-500': '#38B2AC',
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {       // This is merging colors from Tailwind with my own custom defined colors.
      ...colors,
      ...customColors,
    },
  },
  variants: {},
  plugins: [],
};


