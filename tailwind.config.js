/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  prefix: '',
  mode: 'jit',
  content: ['./src/**/*.{html,ts,css,scss,sass,less,styl,md}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        brand: {
          1: 'var(--brand-1)',
          2: 'var(--brand-2)',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
