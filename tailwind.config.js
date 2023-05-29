/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      primary: '#3056D3',
      light: '#F4F7FF',
      gray: '#E7E7E7',
      white: '#ffffff',
      black: '#212B36',
      base: '#637381',
      'form-stroke': '#E0E0E0',
      danger: '#DC3545'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
