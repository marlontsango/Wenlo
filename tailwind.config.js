/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#26283F",
        "custom-secondary": "#939393",
        "custom-tertiary": "#3949A1",
        "custom-pink-transparent": "rgba(224, 81, 99, 0.1)",
        "custom-pink": "#E05163",
        "custom-text": "#93949A",
        "custom-title-color": "rgba(38, 40, 63, 1)",
        "custom-circle-color-one": "rgba(57, 73, 161, 1)",
        "custom-circle-color-two": "rgba(57, 161, 145, 1)",
        "icon-background-color":"rgba(59, 81, 161, 0.1)",
        "custom-mix": "rgba(156, 186, 204, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter"), require("flowbite/plugin")],
};
