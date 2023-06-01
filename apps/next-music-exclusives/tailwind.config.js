const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'me-text': '#ffffff',
        'me-background': '#191919',
        'me-primary': '#405bff',
        'me-secondary': '#212121',
        'me-accent': '#ebff38',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle .3s ease-in-out 2',
        'spin-slow': 'spin 1s linear',
        'pulse-fast': 'pulse .75s cubic-bezier(0.4, 0, 0.6, 1)',
      },
      fontFamily: { poppins: 'Poppins' },
      letterSpacing: {
        title: '.5em',
      },
    },
  },
  plugins: [],
};

// colors: {
//   'me-text': '#ededed',
//   'me-background': '#1c2435',
//   'me-primary': '#29658a',
//   'me-secondary': '#111827',
//   'me-accent': '#d1d2d6',
// },
