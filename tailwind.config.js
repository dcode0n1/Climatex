/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "variable-collection-background-white": "var(--variable-collection-background-white)",
        "variable-collection-main-emerald": "var(--variable-collection-main-emerald)",
        "variable-collection-main-lightgreen": "var(--variable-collection-main-lightgreen)",
        "variable-collection-main-subtext": "var(--variable-collection-main-subtext)",
        "variable-collection-main-teal": "var(--variable-collection-main-teal)",
        "variable-collection-stroke": "var(--variable-collection-stroke)",
        "variable-collection-stroke-input": "var(--variable-collection-stroke-input)",
      },
      boxShadow: {
        "drop-shadow": "var(--drop-shadow)",
      },
    },
  },
  plugins: [],
};
