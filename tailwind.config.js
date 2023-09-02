/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xlg: "1250px",
      xmd: "850px",
      mob: "450px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
