/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{ts,tsx}",
    "./src/learning/*.{ts,tsx}",
    "./src/*.{ts,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {},
  },
  plugins: [],
};
