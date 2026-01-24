/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'rgb(10, 10, 10)',
        'bg-terminal': 'rgb(15, 15, 15)',
        'text-primary': 'rgb(237, 237, 237)',
        'text-muted': 'rgb(96, 96, 104)',
        'orange': 'rgb(217, 145, 120)',
        'control-close': '#ff5f56',
        'control-minimize': '#ffbd2e',
        'control-maximize': '#22c55e',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
