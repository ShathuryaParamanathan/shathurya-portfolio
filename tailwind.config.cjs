module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark grey base (reference-like)
        ink: {
          950: "#0B0C0E",
          900: "#0F1114",
          850: "#12151A",
          800: "#161A20",
          700: "#1B2028",
          600: "#222936",
          500: "#2B3446",
        },
        // Accent red (reference-like)
        brand: {
          50: "#FFF1F1",
          100: "#FFDCDC",
          200: "#FFB9B9",
          300: "#FF8D8D",
          400: "#FF5E5E",
          500: "#FF2D2D",
          600: "#E41F1F",
          700: "#BF1414",
          800: "#981010",
          900: "#740C0C",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,45,45,.25), 0 0 40px rgba(255,45,45,.16)",
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
      backgroundImage: {
        "radial-ink":
          "radial-gradient(60% 60% at 50% 0%, rgba(255,45,45,.16) 0%, rgba(255,45,45,0) 55%), radial-gradient(60% 60% at 0% 30%, rgba(255,45,45,.10) 0%, rgba(255,45,45,0) 60%)",
      },
    },
  },
  plugins: [],
}