/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#080b0e',
        surface: '#0f1318',
        raised: '#161c22',
        wire: '#1e2831',
        teal: '#00d4b4',
        ink: '#f0f4f8',
        smoke: '#7a8896',
        ash: '#4a5568',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
