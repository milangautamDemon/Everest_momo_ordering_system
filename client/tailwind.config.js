/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // tailwind custom variable
      'primary': {
        light: '#e07030',
        DEFAULT: '#D95103',
        dark: '#b84503',
      },
      'secondary': {
        light: '#388482',
        DEFAULT: '#0c6967',
        dark: '#0a5958',
      },
      'black': {
        light : '#A6AEBB',
        DEFAULT: 'rgb(107 114 128)',
        dark: 'rgb(31 41 55)',
      },
      "danger": {
        light : 'rgb(248 113 113)',
        DEFAULT: 'rgb(239 68 68)',
        dark: 'rgb(220 38 38)',
      },
      "white": {
        light : '#F5EFE6',
        default : '#ffffff',
      },
      "blue": {
        light : '#4169E1',
        DEFAULT: '#23376C6',
        dark: '#0504AA',
      }

    },
    extend: {},
  },
  plugins: [],
}

