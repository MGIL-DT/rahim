import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        'primary': '#2563eb',
        'primary-dark': '#1d4ed8',
        'secondary': '#64748b',
        'accent': '#f59e0b',
        'success': '#22c55e',
        'danger': '#ef4444',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
} satisfies Config