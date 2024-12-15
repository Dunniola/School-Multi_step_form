/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        custom : ["Ubuntu, sans-serif"]
      },
      // backgroundImage :{
      //   bgImage:"bg-url('/src/assets/Images/Desktop bg/form bgMobile.jpg')",
      // } ,

      colors:{
        Primary : {
          veryDarkGray: "hsl(213, 96%, 18%)",
          blue: "hsl(243, 100%, 62%)",
          purplishBlue: "hsl(228, 100%, 84%)",
          lightBlue: "hsl(206, 94%, 87%)",
          red: "hsl(354, 84%, 57%)",
          darkBlue : "hsl(220, 100%, 15%)",
        },

      Neutral : {
        darkGray:"hsl(231, 11%, 63%)",
        veryLightGray: "hsl(229, 24%, 87%)",
        veryVeryLightGray: "hsl(217, 100%, 97%)",
        grayishWhite: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },


      }

    },
  },
  plugins: [],
}