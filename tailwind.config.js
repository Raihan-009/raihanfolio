/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(1, 1, 1, 1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderWidth: {
        0.2: "0.2px",
        0.3: "0.3px",
        0.5: "0.5px",
      },
      colors: {
        contents: "#191919",
        button: "#3959c1",
        card: "#232323",
        borderline: "#8E8E8E",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".normal-page": {
          "@apply w-full bg-contents px-28 py-16 min-h-screen border-b-2 border-borderline":
            {},
        },
      });
    },
  ],
};
