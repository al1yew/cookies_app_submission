import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        appRed: "#E50013",
        appGray: "#5B5B5B",
      },
      padding: {
        "15": "60px",
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
