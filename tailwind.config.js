/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      main: '"Space Grotesk", system-ui, Roboto, sans-serif',
      sans: '"Inter", sans-serif',
      mono: '"IBM Plex Mono"'
    },
    extend: {
      colors: {
        'main-yellow': '#fbbf24',
        blue: {
          discord: '#807cfc',
          'discord-light': '#9b98fa'
        },
        amber: {
          450: '#F8AF18',
          550: '#E78B09'
        }
      },
      boxShadow: {
        blocks: '8px 8px'
      },
      screens: {
        xs: '375px'
      },
      fontSize: {
        mxs: '.85rem'
      }
    }
  },
  plugins: []
}
