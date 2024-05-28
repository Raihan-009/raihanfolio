/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderWidth: {
        0.2: "0.2px",
        0.3: "0.3px",
        0.5: "0.5px",
      },
      backgroundColor: {
        contents: "#191919",
        button: "#3959c1",
      },
      borderColor: {
        borderline: "#8E8E8E",
      },
    },
  },
  plugins: [],
};
