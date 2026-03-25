import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "1.75rem",
        lg: "2rem"
      }
    },
    extend: {
      colors: {
        background: "#07110E",
        foreground: "#F4EDDE",
        card: "#10201A",
        border: "#30463D",
        muted: "#9DA893",
        accent: {
          DEFAULT: "#C5963E",
          deep: "#6E4D1D"
        },
        emerald: "#173E35",
        cream: "#F7F0E1",
        ink: "#081613"
      },
      fontFamily: {
        sans: ["Segoe UI Variable", "Segoe UI", "Trebuchet MS", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        halo: "0 0 0 1px rgba(197, 150, 62, 0.14), 0 18px 50px rgba(4, 11, 9, 0.42)",
        velvet: "0 20px 80px rgba(1, 10, 8, 0.48)"
      }
    }
  },
  plugins: []
};

export default config;
