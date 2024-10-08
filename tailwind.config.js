/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        repos:'#1D1B48',
        userStatus:'#111628',
        text:'#CED5E0',
        text2:'#97A3B7',
        Background:'#1F2939',

      }
    },
  },
  plugins: [],
}

