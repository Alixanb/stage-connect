/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e7d1d5",
          200: "#cfa3ac",
          300: "#b67482",
          400: "#9e4659",
          500: "#86182f",
          600: "#6b1326",
          700: "#500e1c",
          800: "#360a13",
          900: "#1b0509",
        },
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
        "8xl": "6.25rem", // 100px
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "900px",
          lg: "1100px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
