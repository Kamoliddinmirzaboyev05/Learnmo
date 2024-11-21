/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'lg': "url('/src/img/lg-back.png')",
        'md': "url('/src/img/md-back.png')",
        'sm': "url('/src/img/sm-back.png')",
        'b1': "url('/src/img/st3.1.svg')",
        'b2': "url('/src/img/st3.2.png')",
        'b3': "url('/src/img/st3.3.png')",
        'b4': "url('/src/img/st3.4.png')",
        'b5': "url('/src/img/st3.5.png')",
        'b6': "url('/src/img/st3.6.png')",
        'b7': "url('/src/img/st3.7.png')",
        'b8': "url('/src/img/st3.8.png')",
        'b9': "url('/src/img/st3.9.png')",
        'b10': "url('/src/img/st3.10.png')",
        'b11': "url('/src/img/st3.11.png')",
        'b12': "url('/src/img/st3.12.png')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Shriftni qo'shamiz
      },
    },
  },
  plugins: [],
}