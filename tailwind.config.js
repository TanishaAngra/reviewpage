/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi:["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
    backgroundImage: {
      'leaf-pattern': "url('/public/images/9387546_4166636.svg')",
    },
    
  },
  plugins: [],
};

