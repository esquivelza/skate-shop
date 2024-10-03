/**@type {import('tailwindcss').Config}*/ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Añade la ruta a tus archivos React
  ],
  theme: {
    extend: {
      colors: { // Define tonos personalizados para un color
      	'Black': '#141414', //negro
      	'Grenadine': '#DF3F32',		//tipo naranja
      	'Ultimate-Gray': '#939597',	//plomo
      	'Nimbus-Cloud': '#D5D5D8',	//plomo mas claro
      	'Illuminating': '#F5DF4D', 	//amarillo
      	'Babys-Breath': '#E9E2D1', //como cafe muy claro
      },
    },
  },
  plugins: [],
}

