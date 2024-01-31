/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#476072", // Replace with your desired hex color code
        customColor1: "#276678",
      },
      backgroundImage: (theme) => ({
        "gradient-color": `linear-gradient(to right bottom, #476072 0%, #ffffff 100%)`,
      }),
    },
  },
  plugins: [],
};
