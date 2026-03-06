import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#14B8A6",
        accent: "#8B5CF6",
        chatbg: "#F8FAFC",
        assistant: "#EEF2FF"
      }
    },
  },
  plugins: [],
};

export default config;