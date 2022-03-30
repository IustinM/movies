module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins','sans-serif']
    },
    extend: {
      gridTemplateColumns: {
       
        'auto': 'repeat(auto-fit, minmax(300px, 1fr))',

      }
    },
  },
  plugins: [],
}
