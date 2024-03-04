import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        appRed: "#E50013",
        appGray: "#5B5B5B",
      },
      zIndex: {
        1: "1",
      },
      fontSize: {
        md: "16px",
      },
      spacing: {
        "18": "72px",
      },
    },
  },
  plugins: [],
};
export default config;
