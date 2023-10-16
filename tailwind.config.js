/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins']
      },
      colors:{
        primary:'#0076CE',
        secondory:'#9400D3'
      },
      backgroundImage:{
        "wantToJoinUs":"url('/bg3.png')",
        "heroBG":"url('/bg.png')",
        'gradient-custom': 'linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)',
      },
      blur:{
        'custom': '250px',
      }
    },
  },
  plugins: [],
}

