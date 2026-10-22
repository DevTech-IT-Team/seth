/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CPG Brand Palette
        rose: '#B04564',
        champagne: '#F7E1D7',
        cream: '#FFF8F2',
        burgundy: '#6B2E3A',
        gold: '#D4AF7C',
        espresso: '#2E1E1E',
        body: '#4A4A4A',
        muted: '#7A7A7A',
        neutral: '#F5F5F5',
        white: '#FFFFFF',

        // Semantic aliases
        primary: '#6B2E3A',     // Deep Burgundy
        secondary: '#B04564',   // Rose
        accent: '#D4AF7C',      // Champagne Gold
        background: '#FFF8F2',  // Warm Cream
        surface: '#FFFFFF',
      },
      fontFamily: {
        headline: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(107, 46, 58, 0.06), 0 1px 4px -1px rgba(46, 30, 30, 0.04)',
        'warm': '0 8px 24px -4px rgba(107, 46, 58, 0.08), 0 4px 12px -2px rgba(46, 30, 30, 0.04)',
        'warm-lg': '0 16px 40px -6px rgba(107, 46, 58, 0.12), 0 8px 20px -3px rgba(46, 30, 30, 0.06)',
        'rose': '0 10px 25px -5px rgba(176, 69, 100, 0.35)',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '8rem',
      }
    },
  },
  plugins: [],
}
