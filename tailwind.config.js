/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-app': "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')"
       
      },
      colors: theme =>({
        'brand-color': '#4c3398',
        'second-color' : '#7849f7',
        'primary-color' : '#5d3ebc',
        'border-color' : '#4d4d4d4d',
        'yellow-color': '#FFD300',
        'gray-dark-color': '#3e3e3e',
        'banner-bg-color': '#rgba (249,249,249)'
      }) 
  
    },  
    
  },
  variants: {
 extend: {
   
    },
  },
  plugins: [],
}