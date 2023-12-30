/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0090d4",

          secondary: "#007f00",

          accent: "#00ad66",

          neutral: "#1a1304",

          "base-100": "#fff4f3",

          info: "#008bec",

          success: "#38eb2d",

          warning: "#f78d00",

          error: "#c80032",
        },
      },
    ],
  },

  plugins: [require("daisyui"),'macros'],
};
