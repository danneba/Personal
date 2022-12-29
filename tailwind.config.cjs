/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F9DDDD",
        circle: "#F26440",
        photo: "#286F6C",
        input: "#D9D9D9",
        contact: "#F47757",
        min: "#F2F6F6",
      },
    },
  },
  plugins: [],
};
