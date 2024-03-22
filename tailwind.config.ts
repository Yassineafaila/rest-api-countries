import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "hsl(209, 23%, 22%)", // Dark Blue (Dark Mode Elements)
          background: "hsl(207, 26%, 17%)", // Very Dark Blue (Dark Mode Background)
          text: "hsl(0, 0%, 100%)", // White (Dark Mode Text & Light Mode Elements)
        },
        light: {
          primary: "hsl(0, 0%, 100%)", // White (Dark Mode Text & Light Mode Elements)
          secondary: "hsl(0, 0%, 100%)", // White (Dark Mode Text & Light Mode Elements)
          text: "hsl(200, 15%, 8%)", // Very Dark Blue (Light Mode Text)
          input: "hsl(0, 0%, 52%)", // Dark Gray (Light Mode Input)
          background: "hsl(0, 0%, 98%)", // Very Light Gray (Light Mode Background)
        },
      },
    },
  },
  plugins: [],
};
export default config;
