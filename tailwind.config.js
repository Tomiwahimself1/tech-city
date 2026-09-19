/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2545",
          50: "#F1F5FB",
          100: "#E2EAF6",
          200: "#C2D3EA",
          300: "#93AFD6",
          400: "#5B7FB8",
          500: "#2F5590",
          600: "#1B3C6E",
          700: "#122F58",
          800: "#0B2545",
          900: "#071831",
        },
        orange: {
          DEFAULT: "#FF6B00",
          50: "#FFF4EB",
          100: "#FFE5CE",
          200: "#FFC79C",
          300: "#FFA55F",
          400: "#FF8929",
          500: "#FF6B00",
          600: "#DB5700",
          700: "#AD4400",
          800: "#7D3100",
          900: "#4D1E00",
        },
        surface: "#FFFFFF",
        canvas: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 37, 69, 0.04), 0 8px 24px -12px rgba(11, 37, 69, 0.18)",
        lift: "0 10px 30px -12px rgba(11, 37, 69, 0.28)",
      },
      keyframes: {
        "slide-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: {
        "slide-in": "slide-in 220ms cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in": "fade-in 180ms ease-out",
      },
    },
  },
  plugins: [],
};
