// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      fontFamily: {
        'nome-da-fonte': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      margin: ['responsive'],
    },
  },
  plugins: [],
};
