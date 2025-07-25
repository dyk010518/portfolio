/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

// Remove deprecated color aliases
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '76': '19rem',
        '200': '60rem',
      },
      flexBasis: {
        '30': '7.5rem',
      },
      fontSize: {
        xxxs: '0.5rem',
        xxs: '0.7rem',
        xs: '0.8rem',
        sm: '0.9rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '7xl': '4.2rem',
      },
    },
    colors: {
      ...colors,
      primary: colors.teal,
      secondary: colors.green,
      tertiary: colors.blue,
    },
  },
  plugins: [],
};
