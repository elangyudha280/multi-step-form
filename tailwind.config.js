/** @type {import('tailwindcss').Config} */
 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu':['Ubuntu', 'Arial', 'sans-serif']
      },
      colors:{
        'primary':{
          'marine-blue':'hsl(213, 96%, 18%)',
          'purplish-blue':'hsl(243, 100%, 62%)',
          'pastel-blue':'hsl(228, 100%, 84%)',
          'light-blue':'hsl(206, 94%, 87%)',
          'strawbery-red':'hsl(354, 84%, 57%)',
        },
        'netral':{
          'cool-gray':'hsl(231, 11%, 63%)',
          'light-gray':'hsl(229, 24%, 87%)',
          'magnolia':'hsl(217, 100%, 97%)',
          'alabaster':'hsl(231, 100%, 99%)',
        }
      }
    },
  },
  plugins: [],
}

