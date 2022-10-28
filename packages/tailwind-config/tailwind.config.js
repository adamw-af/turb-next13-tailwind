/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: false,
    themes: false,
    base: false,
    utils: false,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
