module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#f1f5f9',
        accent: '#0ea5e9',
        dark: '#1e293b',
        'gold-primary': '#d4af37',
        'gold-secondary': '#f7d794',
        'gold-light': '#fef7e0',
        'gold-dark': '#b8860b',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
