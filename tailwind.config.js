module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#050038",
        lightBlue: "#ECEEFA",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
