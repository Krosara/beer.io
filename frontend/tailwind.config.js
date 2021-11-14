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
        tbgreen: {
          default: '#639686',
          hover: '#568375',
          border: '#3A574E',
        },
      },
      fontFamily: {
        work: ['Work Sans'],
      },
      dropShadow: {
        // normal: '2.5rem -1rem 0.25rem rgba(0, 0, 0, 0.25)',
        normal: '1rem -0.5rem 0.5rem rgba(0, 0, 0, 0.25)',
      },
      screens: {
        small: { max: '687px' },
        xs: { max: '400px' },
        big: { min: '688px' },
      },
      spacing: {
        740: '46.25rem',
        592: '37rem',
        432: '27rem',
        424: '26.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
