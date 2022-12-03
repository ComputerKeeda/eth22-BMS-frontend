/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
      },

      colors: {
        primary: {
          50: "#e7f0fc",
          100: "#cfe1fa",
          200: "#b6d2f7",
          300: "#9ec3f4",
          400: "#86b4f2",
          500: "#6ea5ef",
          600: "#5596ec",
          700: "#3d87ea",
          800: "#2578e7",
          900: "#186BD9",
        },
        success: {
          50: "#ecf8f5",
          100: "#e0f3ef",
          200: "#d9f1eb",
          300: "#c7eae2",
          400: "#b4e3d8",
          500: "#a1dbce",
          600: "#8ed4c4",
          700: "#7ccdba",
          800: "#69c6b1",
          900: "#56bfa7",
        },
        warning: {
          50: "#ffffea",
          100: "#fffed6",
          200: "#fffec1",
          300: "#fffead",
          400: "#fffe98",
          500: "#fffd83",
          600: "#fffd6f",
          700: "#fffd5a",
          800: "#fffc46",
          900: "#FFFC31",
        },

        destructive: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
      },
    },
  },
  plugins: [],
});
