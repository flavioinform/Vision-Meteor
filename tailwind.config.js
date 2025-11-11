// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d7ff2",
        "background-light": "#f5f7f8",
        "background-dark": "#101922",
        accent: "#64FFDA",
        "page-dark": "#0A192F",
        "card-dark": "#112240",
        "text-soft": "#CCD6F6",
      },
    },
  },
  plugins: [],
};
