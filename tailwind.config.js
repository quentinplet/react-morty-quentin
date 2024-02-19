/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyanLight: "#00B2CA",
        cyanDark: "#0090A3",
        cyanBackground: "#00B2CA",
        backgroundBlackLight: "#4F4F4F",
        backgroundBlackDark: "#363636",
      },
    },
  },
  plugins: [],
};
