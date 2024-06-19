/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#ffffff',
      'secondary': '#ffffff',
      'danger': '#ffffff',
    },
    fontFamily: {
      'sans': ['Nunito', 'Helvetica', 'Arial', 'sans-serif']
    },
    colors:{
      'black': '#222222',
      'white': '#ffffff'
    },
    extend: {
    },
  },
  plugins: [],
}

