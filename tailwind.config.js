/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        default: '0px 10px 50px 25px rgba(41,39,66,0.0374235)'
      },
      colors: {
        mainOne: '#1E2229',
        mainTwo: '#FFB300',
        mainThree: '#0D960D',
        mainFour: '#22272F',
        mainFive: '#2B313B',
        textOne: '#ffffff',
        textTwo: '#CCCCCC',
        textThree: '#F0F3F4',
        textFour: '#FC624C',
        whatsapp: '#25D366',
        instagram: '#C13584',
        linkedin: '#0077b5'
      },
      fontFamily: {
        quicksand: 'Quicksand',
        montserrat: 'Montserrat'
      }
    }
  },
  plugins: []
}
