module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".h-35": {
          height: "35rem"
        },
        ".h-28": {
          height: "28rem"
        },
        ".h-24": {
          height: "24rem"
        }
      };

      addUtilities(newUtilities, { variants: ["responsive", "hover"] });
    },

    require("tailwindcss"),
    require("autoprefixer")
  ]
};
