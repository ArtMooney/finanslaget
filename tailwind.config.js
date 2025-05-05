import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Merriweather Sans", "sans-serif"],
        body: ["Merriweather Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        body: {
          "@apply font-body": {},
        },
      });
    }),
  ],
  corePlugins: {
    preflight: true,
  },
};
