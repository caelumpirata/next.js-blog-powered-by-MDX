/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'px-4': {
        'padding-left': '1rem',
        'padding-right': '1rem',
      }
    },
  },
  plugins: [],
}

