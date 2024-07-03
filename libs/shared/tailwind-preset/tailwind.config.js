
/**
 * See https://github.com/tailwindlabs/tailwindcss/issues/1232#issuecomment-1111937404
 * to convert rem to px
 */
module.exports = {
  theme: {
    extend: {
      spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem'
      },
      fontSize: {
        h1: '48px',
        h2: '36px',
        h3: '30px',
        h4: '24px',
        h5: '20px',
        h6: '16px'
      },
      fontWeight: {
        h1: 500,
        h2: 500,
        h3: 700,
        h4: 700,
        h5: 700,
        h6: 700
      },
      colors: {

      },
      // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
