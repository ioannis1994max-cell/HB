/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#061328",
        ink: "#050608",
        steel: "#0c2342",
        signal: "#cf2438",
        ember: "#ff4157",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
