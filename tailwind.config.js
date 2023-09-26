/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      main: ['var(--font-space-grotesk)'],
      sans: ['var(--font-inter)'],
      mono: ['var(--font-space-mono)'],
      serif: ['var(--font-ibm-plex-serif)'],
      pixel: ['var(--press-start)'],
      alegre: ['var(--font-alegreya)']
    },
    extend: {
      colors: {
        'main-yellow': '#fbbf24',
        blue: {
          discord: '#807cfc'
        },
        discord: {
          light: '#9b98fa',
          vibrant: '#5864f4',
          deselected: '#404675',
          'deselected-mention': '#c9cdfb'
        },
        yellow: {
          'discord-role': '#ffff88'
        },
        amber: {
          450: '#F8AF18',
          550: '#E78B09'
        },
        gray: {
          darker: '#0d0d0d',
          dark: '#1c1c1c',
          discord: '#383c3c',
          'discord-dark': '#303434',
          'discord-darker': '#282424'
        },
        gold: {
          discord: '#f1c40f'
        }
      },
      boxShadow: {
        blocks: '8px 8px',
        'blocks-sm': '4px 4px',
        'blocks-md': '6px 6px',
        email: '6px 6px',
        'footer-btn': '0px 6px',
        'email-btn': '2px 3px'
      },
      screens: {
        xs: '375px'
      },
      fontSize: {
        mxs: '.9rem',
        '15xl': '15rem'
      },
      top: {
        '100vw': '100vw'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '50%' },
          '100%': { opacity: '100%' }
        },
        'bg-flash': {
          '0%': { backgroundColor: '59, 235, 135' },
          '100%': { backgroundColor: 'rgb(3, 111, 252)' }
        }
      },
      animation: {
        'fade-in': 'fade-in .5s ease-in-out',
        'bg-flash': 'bg-flash 1s linear 0s infinite alternate'
      }
    }
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')]
};
