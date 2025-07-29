/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        black: "#000000",
        purple: {
          DEFAULT: "#8B5CF6",
          dark: "#6D28D9",
        },
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(90deg, #8B5CF6 0%, #6D28D9 100%)",
      },
    },
  },
  plugins: [],
};
