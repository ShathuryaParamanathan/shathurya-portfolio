/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // ==========================================
        // DARK BACKGROUND / SURFACE COLORS
        // ==========================================
        ink: {
          950: "#0B1120", // Main background
          900: "#111827", // Main surface
          850: "#141C2E", // Elevated surface
          800: "#172033", // Card background
          700: "#1E293B", // Hover / secondary card
          600: "#263244", // Borders / separators
          500: "#334155", // Strong borders
        },

        // ==========================================
        // PRIMARY BRAND — SKY BLUE
        // ==========================================
        brand: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },

        // ==========================================
        // CYAN — AI / TECHNOLOGY ACCENT
        // ==========================================
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },

        // ==========================================
        // PURPLE — AI / PREMIUM ACCENT
        // ==========================================
        purple: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },

        // ==========================================
        // GREEN — SUCCESS / VERIFIED
        // ==========================================
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },

        // ==========================================
        // YELLOW — WARNING
        // ==========================================
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },

        // ==========================================
        // PINK — SPECIAL / HIGHLIGHT
        // ==========================================
        pink: {
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#EC4899",
          600: "#DB2777",
          700: "#BE185D",
          800: "#9D174D",
          900: "#831843",
        },

        // ==========================================
        // RED — ERROR / DANGER
        // ==========================================
        danger: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
        },

        // ==========================================
        // TEXT COLORS
        // ==========================================
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
          disabled: "#475569",
        },
      },

      // ==========================================
      // SHADOWS
      // ==========================================
      boxShadow: {
        // Main blue glow
        glow:
          "0 0 0 1px rgba(56,189,248,.25), 0 0 40px rgba(56,189,248,.16)",

        // Strong blue glow
        "glow-lg":
          "0 0 0 1px rgba(56,189,248,.30), 0 0 60px rgba(56,189,248,.20)",

        // Cyan glow
        "glow-cyan":
          "0 0 0 1px rgba(34,211,238,.25), 0 0 40px rgba(34,211,238,.15)",

        // Purple glow
        "glow-purple":
          "0 0 0 1px rgba(167,139,250,.25), 0 0 40px rgba(167,139,250,.15)",

        // Normal card shadow
        soft: "0 10px 30px rgba(0,0,0,.35)",

        // Strong card shadow
        "soft-lg": "0 20px 50px rgba(0,0,0,.45)",
      },

      // ==========================================
      // BACKGROUND GRADIENTS
      // ==========================================
      backgroundImage: {
        // Main blue radial background
        "radial-ink":
          "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,.16) 0%, rgba(56,189,248,0) 55%), radial-gradient(60% 60% at 0% 30%, rgba(34,211,238,.10) 0%, rgba(34,211,238,0) 60%)",

        // Blue + purple AI-style background
        "radial-ai":
          "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,.14) 0%, rgba(56,189,248,0) 55%), radial-gradient(50% 50% at 100% 20%, rgba(167,139,250,.12) 0%, rgba(167,139,250,0) 60%)",

        // Blue/cyan gradient
        "brand-gradient":
          "linear-gradient(135deg, #38BDF8 0%, #22D3EE 100%)",

        // Blue/purple gradient
        "ai-gradient":
          "linear-gradient(135deg, #38BDF8 0%, #A78BFA 100%)",

        // Dark page gradient
        "dark-gradient":
          "linear-gradient(180deg, #0B1120 0%, #111827 100%)",
      },

      // ==========================================
      // BORDER RADIUS
      // ==========================================
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },

  plugins: [],
};