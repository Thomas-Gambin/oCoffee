/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssForms from "@tailwindcss/forms";

export default {
  content: ["./app/views/**/*.ejs", "./public/**/*.js"],
  theme: {
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1100px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "ocoffee-brown": "rgb(128, 75, 0)",
        "ocoffee-brown-dark": "rgb(123, 74, 2)",
        "ocoffee-gold": "rgb(148, 99, 24)",
        "ocoffee-amber": "rgb(145, 85, 0)",
        "ocoffee-price": "rgb(132, 77, 0)",
        "ocoffee-btn": "rgb(108, 63, 0)",
        "ocoffee-title": "#703607",
        "ocoffee-bg": "rgb(251, 243, 232)",
        "ocoffee-card": "rgb(252, 235, 219)",
        "ocoffee-presentation": "#dfbc9aba",
        "ocoffee-dropdown": "rgba(245, 211, 163, 0.766)",
        "ocoffee-dropdown-hover": "rgb(244, 206, 152)",
        "ocoffee-banner": "#d4a374",
        "ocoffee-banner-text": "rgb(255, 234, 216)",
        "ocoffee-btn-default": "rgb(255, 222, 177)",
        "ocoffee-btn-hover": "rgb(255, 199, 121)",
        "ocoffee-footer": "#6c4c47",
        "ocoffee-footer-sep": "#875e58",
        "ocoffee-text-muted": "#333",
        "ocoffee-date": "#666",
        "ocoffee-success": "#0a5d11",
        "ocoffee-error": "#b30000",
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "ocoffee-nav":
          "linear-gradient(90deg, rgba(255, 202, 127, 0.442), rgba(186, 98, 50, 0.594))",
      },
      boxShadow: {
        ocoffee: "0 14px 30px rgba(100, 35, 0, 0.1)",
        soft: "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        "soft-hover":
          "0 20px 40px -10px rgba(100,35,0,0.15)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssForms],
};
