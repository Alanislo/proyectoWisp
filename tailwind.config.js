/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#000c4f",
        secondary:"#00acef",
        claro:"#f9fafb"
      }
    },
  },
  plugins: [],
}

