const _ = require("lodash");

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        double: "0 0 0 5px hsl(336.3, 78%, 42.8%)",
      },
      colors: {
        primary: "hsl(339.6, 82.2%, 51.6%)",
        secondary: "hsl(35.8, 100%, 50%)",
        tertiary: "hsl(336.3, 78%, 42.8%)",
        "tertiary-light": "hsl(335.9, 80.2%, 64.1%)",
        link: "hsl(250, 100%, 40%)",
        "link-light": "hsl(249.8, 100%, 81%)",
        dark: "hsl(0, 0%, 12.9%)",
        transparent: "hsla(0, 0%, 100%, 0.1)",
      },
      height: {
        "300-px": "300px",
      },
      inset: {
        "1/2": "50%",
      },
      maxWidth: {
        "300-px": "300px",
      },
      padding: {
        80: "20rem",
      },
      width: {
        "90vw": "90vw",
      },
    },
    gradientsFourSteps: (theme) => ({
      full: [
        theme("colors.tertiary"),
        theme("colors.primary"),
        theme("colors.secondary"),
        theme("colors.tertiary"),
      ],
    }),
  },
  variants: {
    backgroundColor: ["dark"],
    textColor: ["dark"],
  },
  plugins: [
    require("tailwindcss-dark-mode")(),
    require("tailwindcss-pseudo-elements"),
    function ({ addUtilities, e, theme }) {
      const gradients = theme("gradientsFourSteps", {});

      const utilities = _.map(
        gradients,
        ([start, betweenStart, betweenEnd, end], name) => ({
          [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(-135deg, ${start}, ${betweenStart}, ${betweenEnd}, ${end})`,
          },
        })
      );

      addUtilities(utilities);
      addUtilities(
        {
          ".body-border": {
            background: theme("colors.primary"),
            content: "''",
            left: "0",
            height: ".5rem",
            position: "absolute",
            top: "0",
            width: "100%",
            "z-index": "20",
          },
        },
        ["before"]
      );
    },
  ],
};
