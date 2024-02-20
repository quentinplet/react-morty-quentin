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
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0.6 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
        slideUp: "slideUp 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
