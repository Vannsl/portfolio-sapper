const _ = require("lodash");

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        double: "0 0 0 5px #983349"
      },
      colors: {
        primary: "#626894",
        secondary: "#334998",
        tertiary: "#983349",
        "primary-transparent": "hsla(232.7, 20.3%, 48.2%, 0.2)",
        "tertiary-transparent": "hsla(347, 49.7%, 39.8%, 0.2)"
      },
      height: {
        "300-px": "300px"
      },
      maxWidth: {
        "300-px": "300px"
      },
      padding: {
        80: "20rem"
      }
    },
    gradients: theme => ({
      "secondary-primary-secondary-tertiary": [
        theme("colors.secondary"),
        theme("colors.primary"),
        theme("colors.tertiary"),
        theme("colors.secondary")
      ]
    })
  },
  variants: {},
  plugins: [
    function({ addUtilities, e, theme }) {
      const gradients = theme("gradients", {});

      const utilities = _.map(
        gradients,
        ([start, betweenStart, betweenEnd, end], name) => ({
          [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(-135deg, ${start}, ${betweenStart}, ${betweenEnd}, ${end})`
          }
        })
      );

      addUtilities(utilities);
    }
  ]
};
