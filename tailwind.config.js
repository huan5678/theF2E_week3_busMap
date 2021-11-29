module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        7.5: "1.875rem",
      },
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
          fontFamily: {
            sans: [
              "Noto Sans TC",
              "ui-sans-serif",
              "system-ui",
              "-apple-system",
              "BlinkMacSystemFont",
              "Segoe UI",
              "Roboto",
              "Helvetica Neue",
              "Arial",
              "Noto Sans",
              "sans-serif",
              "Apple Color Emoji",
              "Segoe UI Emoji",
              "Segoe UI Symbol",
              "Noto Color Emoji",
            ],
          },
          fontSize: {
            h1: ["3rem", "4rem"],
            h2: ["2.25rem", "3.375rem"],
            h3: ["1.75rem", "2.25rem"],
            h4: ["1.25rem", "1.875rem"],
            h5: ["0.875rem", "1.25rem"],
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
      },
    },
  },
};
