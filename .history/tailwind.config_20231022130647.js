/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height:{
        'screen-1/2': '50vh',
        'screen-1/4': '25vh',
        'screen-3/4': '75vh',
        'screen-3/5': '60vh',
        'screen-2/3': '66vh',
        'screen-1/3': '33vh',
        '112': '28rem',
        '128': '32rem',
      },
      minHeight:{
        'screen-1/2': '50vh',
        'screen-1/4': '25vh',
        'screen-3/4': '75vh',
        'screen-2/3': '66vh',
        'screen-1/3': '33vh',
        '112': '28rem',
        '128': '32rem',
      },
      width:{
        '112': '28rem',
        '128': '32rem',
      },
      colors:{
        "emerald":{
          "50": "#b0fde8",
          "100": "#60FBD2",
          "200": "#24F9C1",
          "400": "#06EFB1",
          "500": "#06d6a0",
        }
      },
      minWidth:{
        'mobile': '360px',
        '54': '258px',
      },
      screens:{
        'xs': '580px',
        '850': '850px',
      },
    },
  },
  plugins: [],
}
