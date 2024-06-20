/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors:{
        black: '#222222',
        white: '#ffffff',
        cinza: {
          letra: '#7c7c7c',
          fundo: '#f7f7f7'
        },
        blue: {
          forte: '#122ab2',
          fraco: '#2c70ff'
        },
        pink: '#f9265e',
        roxo: '#ae81ff',
        azul: '#66d9eb',
    },
    flex:{
      '2' : '1 1 160px',
      '300' : '2 1 300px',
    },
  }
  },
  plugins: [],
}
