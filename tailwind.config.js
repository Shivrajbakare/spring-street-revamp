/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        script: ["Dancing Script", "cursive"],
      },
      colors: {
        brand: {
          bg: "#040814",       // Very deep midnight navy background
          dark: "#0b1226",     // Slightly lighter dark for cards/nav
          border: "#1e293b",   // Slate border
          primary: "#2e6db4",  // Spring Street Blue
          accent: "#22d3ee",   // Cyan/Teal glow
          success: "#10b981",  // Emerald Green for positive returns
          muted: "#94a3b8",    // Muted slate gray
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
