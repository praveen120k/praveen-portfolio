/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#0A0F1C', mist: '#9AA7BF', amber: '#F5B841', teal: '#3DD6C4' },
    keyframes: {
      drift1: { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(60px,40px)' } },
      drift2: { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(-50px,-30px)' } },
      float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      ecg: { from: { strokeDashoffset: '0' }, to: { strokeDashoffset: '-1' } },
    },
    animation: { drift1: 'drift1 18s ease-in-out infinite', drift2: 'drift2 22s ease-in-out infinite', float: 'float 7s ease-in-out infinite', ecg: 'ecg 3.5s linear infinite' },
    fontFamily: { display: ['"Bricolage Grotesque"', 'sans-serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
}
