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
        "32": "32px",
        "40": "40px",
        "44": "44px",
        "48": "48px",
        "52": "52px",
        "56": "56px",
        "64": "64px",
        "80": "80px",
      },
      spacing: {
        "18": "72px",
      },
      lineHeight: {
        "180": "180%",
      },
      letterSpacing: {
        "8": "6px",
      },
    },
  },
  plugins: [],
};
export default config;
