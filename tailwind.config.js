/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        // Container
        '1240': '1240px',
      },
      colors: {
        // Main colors
        'backround': '#F4F4F2',
        'backround-text': '#291E0F',
        'surface': '#FFFFFF',
        'surface-text': '#414141',
        'pimary': '#FF6633',
        'secondary': '#70C05B',
        // Grayscale
        'light-test': '#F3F2F1',
        'light': '#BFBFBF',
        'hard': '#8F8F8F',
        'hardest': '#606060',
        // Palette
        'succes': '#008C49',
        'info': '#1CB9FC',
        'warning': '#FCA21C',
        'error': '#D80000',
      },
      boxShadow: {
        'navbar':'2px 4px 8px 0px rgba(0, 0, 0, 0.1)',
        // Birinchi ustundagi 5-ta cardlarni shadowlari
        'one-box': '1px 2px 4px 0px rgba(0, 0, 0, 0.1)',
        'two-box': '2px 4px 8px 0px rgba(0, 0, 0, 0.1)',
        'three-box': '4px 8px 16px 0px rgba(0, 0, 0, 0.1)',
        'four-box': '8px 16px 32px 0px rgba(0, 0, 0, 0.1)',
        'five-box': '16px 32px 64px 0px rgba(0, 0, 0, 0.1)',
        // Ikkinchi ustundagi 5-ta cardlarni shadowlari
        'six-box': '1px 2px 4px 0px rgba(255, 102, 51, 0.2)',
        'seven-box': '2px 4px 8px 0px rgba(255, 102, 51, 0.2)',
        'eight-box': '4px 8px 16px 0px rgba(255, 102, 51, 0.2)',
        'nine-box': '8px 16px 32px 0px rgba(255, 102, 51, 0.2)',
        'ten-box': 'box-shadow: 16px 32px 64px 0px rgba(255, 102, 51, 0.2);',
        // Uchinchi ustundagi 5-ta cardlarni shadowlari
        'Eleven-box': '1px 2px 4px 0px rgba(112, 192, 91, 0.2)',
        'Twelve-box': '2px 4px 8px 0px rgba(112, 192, 91, 0.2)',
        'Thirteen-box': '4px 8px 16px 0px rgba(112, 192, 91, 0.2)',
        'Fourteenth-box':'8px 16px 32px 0px rgba(112, 192, 91, 0.2)',
        'Fifteen-box':'16px 32px 64px 0px rgba(112, 192, 91, 0.2)'
      },
      fontSize:{
        // Desktop px
        '12':'12px',
        '16':'16px',
        '18':'18px',
        '24':'24px',
        '36':'36px',
        // Mobile px
        '8':'8px',
        '12':'12px',
        '14':'14px',
        '20':'20px',
        '32':'32px',
      },
      backgroundImage: {
        'hero': "url('src/assets/images/BackroundImg.jpg')",
      },
    },
  },
  plugins: [],
}