/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: "rgba(255, 255, 255, 1)",
        "custom-primary": "#26283F",
        "custom-secondary": "#939393",
        "custom-tertiary": "#3949A1",
        "custom-pink-transparent": "rgba(224, 81, 99, 0.1)",
        "custom-pink": "#E05163",
        "custom-red": "#3949A1",
        "custom-text": "#93949A",
        "custom-title-color": "rgba(38, 40, 63, 1)",
        "custom-circle-color-one": "rgba(57, 73, 161, 1)",
        "custom-circle-color-two": "rgba(57, 161, 145, 1)",
        "custom-mix": "rgba(156, 186, 204, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter"), require("flowbite/plugin")],
};
