/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Ini mencakup src/app
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ini mencakup src/components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-urbanist)"], // default sans
        script: ["var(--font-great-vibes)"], // untuk heading / aksen
      },
      colors: {
        primary: "#6366F1", // Indigo 500
        secondary: "#A855F7", // Purple 500
        accent: "#F97316", // Orange 500
        darkBg: "#0F172A", // Slate 900
        lightBg: "#F8FAFC", // Slate 50
        darkText: "#E2E8F0", // Slate 200
        lightText: "#1E293B", // Slate 800
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
