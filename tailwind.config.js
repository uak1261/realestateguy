/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#3b82f6',
        'brand-orange': '#f59e0b',
        'brand-green': '#10b981',
        'brand-purple': '#8b5cf6',
        'dark-bg': '#0f0f23',
        'dark-card': '#1a1a2e',
        'dark-surface': '#16213e',
        'dark-border': '#2a2a3e',
        'dark-text': '#e2e8f0',
        'dark-muted': '#94a3b8'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
