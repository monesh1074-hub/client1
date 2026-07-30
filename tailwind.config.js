/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF6E9',
          100: '#F3E9C7',
          200: '#E8D491',
          300: '#DCC05C',
          400: '#D4AF37', // Primary Luxury Gold
          500: '#B89226',
          600: '#94721B',
          700: '#705313',
          800: '#4D360B',
          900: '#2E1E04',
        },
        obsidian: {
          950: '#05070B', // Darkest Background
          900: '#0A0E17', // Base Background
          850: '#0F1624', // Card Background
          800: '#162034', // Secondary Card
          700: '#22304A', // Hover/Border
        },
        royal: {
          900: '#4A0404', // Rich Velvet Crimson
          800: '#6B0B0B',
          700: '#8B0000',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA7C11 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF3C4 50%, #D4AF37 100%)',
        'dark-radial': 'radial-gradient(ellipse at top, #141C2E 0%, #070A10 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
