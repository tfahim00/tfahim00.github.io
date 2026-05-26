/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#fbfbfb',
          card: '#ffffff',
          text: '#0f172a',
          muted: '#6b7280',
          accent: '#0ea5a4',
          shadow: 'rgba(2,6,23,0.06)',
        },
        dark: {
          bg: '#071024',
          card: '#071a2a',
          text: '#e6eef8',
          muted: '#94a3b8',
          accent: '#2bd4c9',
          shadow: 'rgba(0,0,0,0.6)',
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
