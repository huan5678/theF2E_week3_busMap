module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "1.875rem",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#6B00FF",
        },
        secondary: {
          DEFAULT: "#AB91F5",
        },
        blue: {
          DEFAULT: "#42EDF0",
          dark: "#00C2BA",
        },
        red: "#EB5757",
        yellow: "#FFCC00",
        black: "#5B4E6E",
        gray: {
          DEFAULT: "#E0E0E0",
          light: "#F2F2F2",
          dark: "#BDBDBD",
          tr: "rgba(242, 242, 242, 0.8)",
        },
      },
      boxShadow: {
        DEFAULT: "0px 5px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    variants: {
      extend: {
        opacity: ["group-focus"],
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("tailwind-scrollbar"),
      ({ addComponents }) => {
        addComponents({
          ".container": {
            maxWidth: "100%",
            "@screen sm": {
              maxWidth: "540px",
            },
            "@screen md": {
              maxWidth: "768px",
            },
            "@screen lg": {
              maxWidth: "960px",
            },
            "@screen xl": {
              maxWidth: "1200px",
            },
          },
        });
      },
    ],
  },
};