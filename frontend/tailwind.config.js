module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        offwhite: '#E9E9E9',
        btngreen: {
          lighter: '#77948B',
          light: '#5C7E73',
          default: '#4A7064',
          dark: '#396155',
          darker: '#235042',
        },
        bggreen: '#43655A',
      },
      fontFamily: {
        work: ['Work Sans, sans-serif'],
      },
      dropShadow: {
        // normal: '2.5rem -1rem 0.25rem rgba(0, 0, 0, 0.25)',
        normal: '1rem -0.5rem 0.5rem rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
