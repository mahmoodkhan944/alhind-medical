import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: '#0EA5E9',
          green: '#10B981',
          cyan: '#06B6D4',
          navy: '#1E3A8A',
          teal: '#14B8A6',
          mint: '#D1FAE5',
          ice: '#E0F2FE',
          orange: '#F59E0B',
          success: '#22C55E',
        },
        bg: {
          main: '#F8FAFC',
          section: '#FFFFFF',
          dark: '#0F172A',
        },
        txt: {
          primary: '#0F172A',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
        'card-gradient': 'linear-gradient(180deg, #E0F2FE 0%, #FFFFFF 100%)',
        'cta-gradient': 'linear-gradient(90deg, #10B981 0%, #0EA5E9 100%)',
      },
    },
  },
  plugins: [],
}
export default config