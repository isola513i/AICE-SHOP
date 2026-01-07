/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFF500', // Electric Yellow
        secondary: '#FF00FF', // Hot Pink
        accent: '#00FFFF', // Cyan
        dark: '#18181b',
        light: '#f8f8f5',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        neo: '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
      },
      animation: {
        marquee: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
