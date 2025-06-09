/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // untuk app directory (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}", // jika masih pakai pages/
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        swayReverse: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
      },
      animation: {
        sway: "sway 4s ease-in-out infinite",
        swayReverse: "swayReverse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
