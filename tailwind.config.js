// const svgToDataUri = require("mini-svg-data-uri");
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

// module.exports = {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         background: 'hsl(var(--sidebar-background))',
//         foreground: 'hsl(var(--sidebar-foreground))',
//         primary: 'hsl(var(--sidebar-primary))',
//         'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
//         accent: 'hsl(var(--sidebar-accent))',
//         'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
//         border: 'hsl(var(--sidebar-border))',
//         ring: 'hsl(var(--sidebar-ring))',
//       },
//       boxShadow: {
//         glow: '0 0 10px 5px #ff',
//       },

      
//     },
//   },
//   plugins: [
//     addVariablesForColors,
//     function ({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           "bg-grid": (value) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//             )}")`,
//           }),
//           "bg-dot": (value) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.625"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
//       );
//     },
//   ],
// };

// function addVariablesForColors({ addBase, theme }) {
//   const allColors = flattenColorPalette(theme("colors"));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }




// const svgToDataUri = require("mini-svg-data-uri");
// const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(var(--sidebar-background))",
//         foreground: "hsl(var(--sidebar-foreground))",
//         primary: "hsl(var(--sidebar-primary))",
//         "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
//         accent: "hsl(var(--sidebar-accent))",
//         "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
//         border: "hsl(var(--sidebar-border))",
//         ring: "hsl(var(--sidebar-ring))",
//       },
//       boxShadow: {
//         glow: "0 0 10px 5px #ff",
//       },
//       animation: {
//         "radar-spin": "radar-spin 10s linear infinite", // Added radar-spin animation
//       },
//       keyframes: {
//         "radar-spin": { // Added radar-spin keyframes
//           from: { transform: "rotate(20deg)" },
//           to: { transform: "rotate(380deg)" },
//         },
//       },
//     },
//   },
//   plugins: [
//     addVariablesForColors,
//     function ({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           "bg-grid": (value) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//             )}")`,
//           }),
//           "bg-dot": (value) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.625"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
//       );
//     },
//   ],
// };

// function addVariablesForColors({ addBase, theme }) {
//   const allColors = flattenColorPalette(theme("colors"));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }




// const svgToDataUri = require("mini-svg-data-uri");
// const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(var(--sidebar-background))",
//         foreground: "hsl(var(--sidebar-foreground))",
//         primary: "hsl(var(--sidebar-primary))",
//         "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
//         accent: "hsl(var(--sidebar-accent))",
//         "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
//         border: "hsl(var(--sidebar-border))",
//         ring: "hsl(var(--sidebar-ring))",
//       },
//       boxShadow: {
//         glow: "0 0 10px 5px #ff",
//       },
//       animation: {
//         "radar-spin": "radar-spin 10s linear infinite", // Added radar-spin animation
//       },
//       keyframes: {
//         "radar-spin": {
//           from: { transform: "rotate(20deg)" },
//           to: { transform: "rotate(380deg)" },
//         },
//       },
//     },
//   },
//   plugins: [
//     addVariablesForColors,
//     function ({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           "bg-grid": (value) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//             )}")`,
//           }),
//           "bg-dot": (value) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.625"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
//       );
//     },
//   ],
// };

// function addVariablesForColors({ addBase, theme }) {
//   const allColors = flattenColorPalette(theme("colors"));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }


const svgToDataUri = require('mini-svg-data-uri');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--sidebar-background))",
        foreground: "hsl(var(--sidebar-foreground))",
        primary: "hsl(var(--sidebar-primary))",
        "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        accent: "hsl(var(--sidebar-accent))",
        "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        border: "hsl(var(--sidebar-border))",
        ring: "hsl(var(--sidebar-ring))",
      },
      boxShadow: {
        glow: "0 0 10px 5px #ff", // glow effect for elements
      },
      animation: {
        "radar-spin": "radar-spin 10s linear infinite", // Radar spin animation
        pulseBeam: "pulseBeam 1.5s ease-in-out infinite", // Custom pulse animation
      },
      keyframes: {
        "radar-spin": {
          from: { transform: "rotate(20deg)" },
          to: { transform: "rotate(380deg)" },
        },
        pulseBeam: {
          "0%": { opacity: 0.5, transform: "scale(0.95)" },
          "50%": { opacity: 1, transform: "scale(1)" },
          "100%": { opacity: 0.5, transform: "scale(0.95)" },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.625"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
