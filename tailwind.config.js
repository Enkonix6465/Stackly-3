module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        teal: '#26A0A2', // Teal Blue
        ice: '#EEF7F9', // Light Cyan / Ice Blue
        sky: '#8FC1C7', // Muted Cyan / Sky Blue
        charcoal: '#222836', // Charcoal / Navy Black
        taupe: '#7E6868', // Muted Brown / Warm Taupe
        powder: '#BDD8E2', // Powder Blue
        bronze: '#B98F6C', // Warm Tan / Bronze
        rose: '#C4A9A1', // Dusty Rose / Warm Nude
        beige: '#D4C0B4', // Pale Taupe / Beige
      },
    },
  },
  plugins: [],
}
