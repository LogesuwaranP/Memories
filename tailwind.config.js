/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/Home.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto-Regular", "sans-serif"],
        robotoBold: ["Roboto-Bold", "sans-serif"],
        poppins: ["Poppins-Regular", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
