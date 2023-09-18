/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // https://maketintsandshades.com/
    colors: {
      text: '#542D10',
      background: '#D9D8CE',
      primary: {
        default: '#B3BB6C',
        100: '#d1d6a7',
        200: '#cacf98',
        300: '#c2c989',
        400: '#bbc27b',
        500: '#B3BB6C',
        600: '#a1a861',
        700: '#8f9656',
        800: '#7d834c',
        900: '#6b7041',
      },
      secondary: {
        default: '#88A296',
        100: '#b8c7c0',
        200: '#acbeb6',
        300: '#a0b5ab',
        400: '#94aba1',
        500: '#88A296',
        600: '#7a9287',
        700: '#6d8278',
        800: '#5f7169',
        900: '#52615a',
      },
      accent: '#B14F47',
    },
    fontFamily: {
      'impact': ['Impact'],
      'bodonimt': ['Bodoni MT']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
        '156': '39rem',
        '160': '40rem',
        '164': '41rem',
        '168': '42rem',
        '172': '43rem',
        '176': '44rem',
        '180': '45rem',
        '184': '46rem',
        '188': '47rem',
        '192': '48rem',
      }
    },
  },
  plugins: [],
}

