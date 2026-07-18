/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        foreground: '#141414',
        muted: '#6B6B66',
        accent: '#223A70',
        seal: '#C7361F'
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      borderRadius: {
        lg: '8px'
      }
    }
  },
  plugins: []
}
