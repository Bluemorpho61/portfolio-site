/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'background-web':'#282F44',
        'text-navbar':'#DE67A2',
        'exp-background':'#191D32'
      },
      fontFamily:{
        roboto: "'Roboto',sans-serif",
        sansserif:"'Source Sans Pro', sans-serif;",
        robslab:"'Roboto Slab', serif;",
        sofia:"'Sofia Sans Extra Condensed',sans-serif;"
      },
      animation:{
fade: 'fadeOut 2s ease-in-out',
      }
    },
    keyframes: theme=>({
      fadeOut:{
        '0%':{backgroundColor:theme('colors.red.700')},
        '100%':{backgroundColor:theme('colors.red.300')}
      }
    })
  },
  plugins: [],
}
