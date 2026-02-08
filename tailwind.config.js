/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0a0e1a',
        'space-navy': '#0f1419',
        'space-blue': '#1a1f2e',
        'cyan-glow': '#00d9ff',
        'purple-glow': '#a78bfa',
        'pink-critical': '#ff4d6d',
        'green-open': '#00ff88',
        'amber-warn': '#fbbf24',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
