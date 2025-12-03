/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        y2k: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          cyan: '#06B6D4',
          lime: '#84CC16',
          orange: '#F97316',
          blue: '#3B82F6',
          indigo: '#6366F1',
        },
      },
      backgroundImage: {
        'y2k-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'y2k-shine': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'y2k-metal': 'linear-gradient(135deg, #e0e7ff 0%, #cffafe 50%, #fae8ff 100%)',
        'y2k-chrome': 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
      },
      boxShadow: {
        'y2k': '0 4px 20px rgba(139, 92, 246, 0.4)',
        'y2k-glow': '0 0 30px rgba(236, 72, 153, 0.6)',
        'y2k-inset': 'inset 0 2px 4px rgba(255,255,255,0.3)',
      },
      fontFamily: {
        y2k: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
