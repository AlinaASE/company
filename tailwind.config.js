/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // light theme
        primary: "#ffffff",
        text: "blue",
        customOrange: "#FFAA17",

        //dark theme
        primaryD: "#000000",
      },
      backgroundImage: {
        // light theme
        gradientCard: "linear-gradient(50deg,  white 30%, #ffffff 130%)",
        gradientClr: "linear-gradient(to right, #ffffff, #ffffff)",

        // dark theme
        gradientCardD: "linear-gradient(50deg, black 30%, #FFAB17 130%)",
        gradientClrD: "linear-gradient(to right, #4A4B4F, #000000)",
      },
    },
  },
  plugins: [],
};

export default config;
