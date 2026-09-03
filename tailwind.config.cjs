/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#6b21a8',
        'brand-indigo': '#6366f1',
        'brand-cyan': '#06b6d4',
        'bg-deep': '#050816',
        'muted-slate': '#94a3b8'
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft-glow': '0 10px 30px rgba(99,102,241,0.08)',
      }
      ,
      height: {
        '105': '26.25rem',
        '120': '30rem',
        '130': '32.5rem',
      },
      width: {
        '105': '26.25rem',
      }
    },
  },
  plugins: [],
};