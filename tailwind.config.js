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
        'purple-primary': '#8b5cf6',
        'purple-secondary': '#a78bfa',
        'purple-light': '#f3e8ff',
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
