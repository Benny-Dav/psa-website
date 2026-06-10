/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#061B2D',
        deep: '#0C2F4B',
        night: '#080F11',
        gold: '#D4AF37',
        goldSoft: '#F3D27A',
        teal: '#00A8C6',
        ink: '#FFFFFF',
        muted: '#B8C4CF',
        dim: '#7A8793'
      },
      fontFamily: {
        display: ['Montserrat', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        gold: '0 0 28px rgba(212, 175, 55, 0.24)'
      }
    }
  },
  plugins: []
};
