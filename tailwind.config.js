module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        scada: ['Scada', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')]
}
