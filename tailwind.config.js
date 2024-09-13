/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'audiowide': ['Audiowide']
      },
      colors: {
        navy: '#000080',
        background: '#F4F5F9',
        primary: '#3b82f6',
        secondary: '#04132A'
      },
      backgroundImage: {
        'home-image': "url('/assets/images/bg.jpg')"
      }
    },
  },
  plugins: [],
}

