// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{jsx,js,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Dark grey base (reference-like)
//         ink: {
//           950: "#0B0C0E",
//           900: "#0F1114",
//           850: "#12151A",
//           800: "#161A20",
//           700: "#1B2028",
//           600: "#222936",
//           500: "#2B3446",
//         },
//         // Accent red (reference-like)
//         brand: {
//           50: "#FFF1F1",
//           100: "#FFDCDC",
//           200: "#FFB9B9",
//           300: "#FF8D8D",
//           400: "#FF5E5E",
//           500: "#FF2D2D",
//           600: "#E41F1F",
//           700: "#BF1414",
//           800: "#981010",
//           900: "#740C0C",
//         },
//       },
//       boxShadow: {
//         glow: "0 0 0 1px rgba(255,45,45,.25), 0 0 40px rgba(255,45,45,.16)",
//         soft: "0 10px 30px rgba(0,0,0,.35)",
//       },
//       backgroundImage: {
//         "radial-ink":
//           "radial-gradient(60% 60% at 50% 0%, rgba(255,45,45,.16) 0%, rgba(255,45,45,0) 55%), radial-gradient(60% 60% at 0% 30%, rgba(255,45,45,.10) 0%, rgba(255,45,45,0) 60%)",
//       },
//     },
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Dark base
        ink: {
          950: "#091413", // main background
          900: "#10201E",
          800: "#16302C",
          700: "#1F4039",
          600: "#285A48",
        },

        // Primary brand palette
        brand: {
          50: "#F4FCF8",
          100: "#E4F6EE",
          200: "#D0F0E1",
          300: "#B0E4CC",
          400: "#7CC9A9",
          500: "#408A71",
          600: "#285A48",
          700: "#1E473A",
          800: "#16352B",
          900: "#091413",
        },
      },

      boxShadow: {
        glow: "0 0 0 1px rgba(64,138,113,.25), 0 0 40px rgba(64,138,113,.18)",
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },

      backgroundImage: {
        "radial-ink":
          "radial-gradient(60% 60% at 50% 0%, rgba(64,138,113,.18) 0%, rgba(64,138,113,0) 55%), radial-gradient(60% 60% at 0% 30%, rgba(176,228,204,.10) 0%, rgba(176,228,204,0) 60%)",
      },
    },
  },

  plugins: [],
};