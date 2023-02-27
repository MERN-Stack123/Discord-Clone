/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      bluecolor:"#404EED",
      navcolor: "#FFFFFD",
      btncolor: "#6C77F4",
      background: "#F6F6F6",
      textcolor: "#A5A6A8",
      bgfoot: "#23272A",
    },
    extend: {
       fontFamily:{
        'ggBold':['ggsans-Bold'],
        'ggMedium':['ggsans-Medium'],
        'ggNormal':['ggsans-Normal'],
        'ggSemibold':['ggsans-Semibold'],
        'gintoNord':['gintoNord'],
      },
      colors: {
        'black': '#23272a',
      },
    
  },
  plugins: [],
}
}