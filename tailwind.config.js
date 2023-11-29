/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Battle-ships': "url('/img/battleshipsscreen.png')",
        'classroom' : "url('https://gstatic.com/classroom/themes/img_bookclub.jpg')",
        'node' : "url('https://nodered.org/images/title-wave.png')",
      },
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
        'maingray' : "#222222",
        'tailwind' : "#0991cd",
      },
      screens: {
        'pc': '1024px',
      }

    },
  },
  plugins: [],
}

// run this everytime npx tailwindcss -o ./output.css --watch



