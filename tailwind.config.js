/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        light: "var(--color-theme-light)",
        dark: "var(--color-theme-dark)",
        primary: "var(--color-theme-primary)",
        secondary: "var(--color-theme-secondary)",
        accent: "var(--color-theme-accent)",
      },
    },
  },
  plugins: [],
};
