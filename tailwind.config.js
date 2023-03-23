/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'linked': '#0072b1',
        'insta' : '#fbad50',
        'twitter' : '#00acee',
        'java' : '#D0A384',
        'css' : '#133955',
        'html' : '#e34c26',
        'js' : '#f0db4f',
        'swift' : '#51a0d5',
        'git' : '#6e5494',
        'toxic' : 'rgb(22 163 74)',
        'premier' : '#D88EF1',
        'ps' : '#4FCCFE',
      }
    },
  },
  plugins: [],
}

// run this everytime npx tailwindcss -i ./src/style.css -o ./dist/output.css --watch




