/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "rgba(255, 255, 255, 1)",
      white50: "rgba(255, 255, 255, 0.5)",
      black: "rgba(0, 0, 0, 1)",
      black50: "rgba(0, 0, 0, 0.5)",
      primaryDefault: "rgba(0, 94, 189, 1)",
      primaryHover: "rgba(0, 84, 168, 1)",
      primaryActive: "rgba(0, 89, 179, 1)",
      primaryDisabled: "rgba(0, 84, 168, 0.5)",
      secondaryDefault: "rgba(110, 119, 145, 0.12)",
      secondaryHover: "rgba(110, 119, 145, 0.2)",
      secondaryActive: "rgba(110, 119, 145, 0.3)",
      secondaryDisabled: "rgba(110, 119, 145, 0.12)",
      risk100: "rgba(44, 105, 186, 1)",
      risk200: "rgba(90, 145, 216, 0.6)",
      risk300: "rgba(90, 145, 216, 0.4)",
      risk400: "rgba(90, 145, 216, 0.08)",
      riskHigh100: "rgba(184, 25, 65, 1)",
      riskMid100: "rgba(85, 85, 175, 1)",
      riskLow100: "rgba(101, 105, 114, 1)",
      error100: "rgba(173, 31, 31, 1)",
      success100: "rgba(0, 133, 88, 1)",
      orcaBlack100: "rgba(26, 28, 35, 1)",
      orcaBlack200: "rgba(31, 33, 41, 1)",
      orcaBlack300: "rgba(35, 38, 47, 1)",
      orcaBlack400: "rgba(39, 43, 52, 1)",
      orcaBlack500: "rgba(44, 47, 58, 1)",
      orcaBlack600: "rgba(48, 52, 64, 1)",
      orcaBlack700: "rgba(53, 57, 70, 1)",
      orcaBlack800: "rgba(57, 62, 76, 1)",
      orcaBlack900: "rgba(61, 66, 81, 1)",
      orcaWhite100: "rgba(252, 252, 253, 1)",
      orcaWhite200: "rgba(247, 246, 248, 1)",
      orcaWhite900: "rgba(206, 209, 218, 1)",
    },
  },
  plugins: [],
};
