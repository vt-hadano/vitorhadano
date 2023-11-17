const {fontFamily} = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-alternates': ['Montserrat Alternates', 'sans-serif']
      },
    },
    colors: {
      'white': {
        100: '#E6E6E6',
        75: '#B6B5B7',
        50: '#B6B5B7',
        25: '#57555A',
        12: '#3E3C41',
        5: '#312F34'
      },
      'black': {
        100: '#27252B',
        75: '#575559',
        50: '#868588',
        25: '#B6B6B7',
        12: '#CFCFD0',
        5: '#DCDCDD'
      },
      'cyan': '#1994FF',
      'pink': '#C91DA3',
      'purple': '#2A0A61',
      'yellow': '#FFBB0B'
    }
  },
  plugins: [],
}
