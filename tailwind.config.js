module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    // tailwind.config.js
  darkMode: 'class', // This will enable dark mode based on class
  theme: {
    extend: {
      colors: {
        'dark-background': '#1a202c', // Custom dark background color
        'light-background': '#ffffff', // Light mode background color
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}