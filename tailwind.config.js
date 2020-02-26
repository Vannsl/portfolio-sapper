const _ = require("lodash");

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        double: "0 0 0 5px hsl(336.3, 78%, 42.8%)"
      },
      colors: {
        primary: "hsl(339.6, 82.2%, 51.6%)",
        secondary: "hsl(35.8, 100%, 50%)",
        tertiary: "hsl(336.3, 78%, 42.8%)",
        link: "hsl(250, 100%, 40%)",
        dark: "hsl(0, 0%, 12.9%)",
        "primary-opacity-200": "hsla(3339.6, 82.2%, 51.6%, 0.2)",
        "secondary-opacity-200": "hsla(35.8, 100%, 50%, 0.2)",
        "tertiary-opacity-200": "hsla(336.3, 78%, 42.8%, 0.2)",
        transparent: "hsla(0, 0%, 100%, 0.1)"
      },
      height: {
        "300-px": "300px"
      },
      inset: {
        "1/2": "50%"
      },
      maxWidth: {
        "300-px": "300px"
      },
      padding: {
        80: "20rem"
      },
      width: {
        "90vw": "90vw"
      }
    },
    gradientsTwoSteps: theme => ({
      "secondary-primary": [theme("colors.secondary"), theme("colors.primary")],
      "tertiary-primary": [theme("colors.tertiary"), theme("colors.primary")]
    }),
    gradientsFourSteps: theme => ({
      full: [
        theme("colors.tertiary"),
        theme("colors.primary"),
        theme("colors.secondary"),
        theme("colors.tertiary")
      ],
      flecked: [
        theme("colors.secondary"),
        theme("colors.primary"),
        theme("colors.tertiary"),
        theme("colors.primary")
      ]
    })
  },
  variants: {},
  plugins: [
    function({ addUtilities, e, theme }) {
      const gradients = theme("gradientsFourSteps", {});

      const utilities = _.map(
        gradients,
        ([start, betweenStart, betweenEnd, end], name) => ({
          [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(-135deg, ${start}, ${betweenStart}, ${betweenEnd}, ${end})`
          }
        })
      );

      addUtilities(utilities);
    },
    function({ addUtilities, e, theme }) {
      const gradients = theme("gradientsTwoSteps", {});

      const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
          backgroundImage: `linear-gradient(0deg, ${start}, ${end})`
        }
      }));

      addUtilities(utilities);
    }
  ]
};
