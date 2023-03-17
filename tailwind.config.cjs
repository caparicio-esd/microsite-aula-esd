/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.sass", "./assets/**/*.scss",  "./app/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"]
    },
  extend: {
      maxWidth: {
        1080: '1080px',
      },
      margin: {
        small: '1.5rem',
        big: '2.5rem',
      },
      dropShadow: {
        btn: '0 2px 2px rgba(0, 0, 0, 0.33)',
      },
      colors: {
        primary: '#ffed00', // amarillo
        black: '#202124',     
        dark_gray: '#404040', // hover
        mid_gray: '#A3A3A3', 
        light_gray: '#E5E5E5',
        white: '#FFFFFF',
      },
      fontSize: {
        base: "1rem"
      },
      fontFamily: {
        source: "'Source Sans Pro'",
        neto: "'NettoOt'",
      },
    },
  },
  plugins: [],
};
