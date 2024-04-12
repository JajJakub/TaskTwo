/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/app/components/*.{ts,tsx}",
    "./src/app/learning/*.{ts,tsx}",
    "./src/app/*.{ts,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {},
  },
  plugins: [],
};
