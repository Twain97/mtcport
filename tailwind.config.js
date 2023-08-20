/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        white:'rgb(255, 255, 255)',
        silk:'rgb(255, 248, 220)',
        black:'rgb(0, 0, 0)',
        whiteSmoke:'rgb(245, 245, 245)',
        linkCol:'rgb(0, 0, 255)',
        purple:'rgb(186, 85, 211)',
      },
    }
  },
   plugins: [
 ],
}
