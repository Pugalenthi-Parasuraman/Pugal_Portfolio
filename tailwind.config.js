/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-800": "700px",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans - serif"],
      roboto: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
