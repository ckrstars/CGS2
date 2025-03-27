/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        gold: '#C6A97C',
        navy: '#1B2B44',
        beige: {
          light: '#F5F1EA',
          DEFAULT: '#E5DDD3',
          dark: '#D5CEC4',
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 15px 0 rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
      height: {
        '128': '32rem',
      },
      opacity: {
        '85': '0.85',
      },
    },
  },
  plugins: [],
};
