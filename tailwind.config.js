module.exports = {
  prefix: '',
  mode: 'jit',
  content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3f51b5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
