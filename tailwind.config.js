/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0b1733",
        ink: "#07162f",
        steel: "#162a4f",
        signal: "#38bdf8",
        ember: "#8b5cf6",
        navy: {
          900: "#0b1733",
          950: "#07162f",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(5, 15, 35, 0.35)",
        blue: "0 24px 80px rgba(56, 189, 248, 0.18)",
      },
    },
  },
  plugins: [],
};
