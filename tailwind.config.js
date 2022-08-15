module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "tui-grey": "#9B9B9B",
        "tui-span-light": "#818181",
        "tui-background": "#f5f5f5",
        blue: {
          DEFAULT: "#092a5e",
          100: "#092a5e",
          500: "#092A5E",
        },
        red: {
          500: "#d40e14",
          700: "#b91c1c",
        },
      },
      fontFamily: {
        sans: ["TUITypeLt_LATN_W_Rg", "sans-serif"],
        serif: ["TUITypeLt_LATN_W_Rg", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
