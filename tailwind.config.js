module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#00bcd4',
        secondary: '#ff9800',
        success: '#4caf50',
        danger: '#f44336',
        warning: '#ffeb3b',
        info: '#2196f3',
        light: '#f4f4f4',
        dark: '#212121',
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
