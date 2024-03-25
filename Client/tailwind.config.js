/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["night"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
