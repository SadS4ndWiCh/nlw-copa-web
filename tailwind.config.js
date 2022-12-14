/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        app: 'url(/app-bg.png)',
      },

      colors: {
        gray: {
          200: '#E1E1E6',
          300: '#8D8D99',
          600: '#323238',
          700: '#202024',
          900: '#121214',
        },
        green: {
          500: '#129E57',
        },
        yellow: {
          500: '#F7DD43',
          600: '#CCB737',
        }
      }
    },
  },
  plugins: [],
}
