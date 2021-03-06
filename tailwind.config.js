module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e5e5e5",
        secondary: "#0e121a",
        third: "#00b894",
        fourth: "#a1a1aa",
      },
    },
    fontFamily: {
      cairo: ["Cairo", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
