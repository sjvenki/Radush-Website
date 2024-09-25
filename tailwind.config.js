/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: "#f97316",
      heading: "#ea580c",
      button: "#ea580c",
      white: "#FFFFFF",
      footer: "#f3f4f6",
      footer1: "#e2e8f0",
      copy: "#d1d5db",
      nav: "#f1f5f9",
      sec: "#fb923c",
      black: "#000000",
      about: "#f3f4f6",
      product: "#F4D8BD",
      gray: " #808080",
      textcolor: "#22D3EE",
      alert: "#EE4B2B",
    },
  },
  plugins: [],
});
