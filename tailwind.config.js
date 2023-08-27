/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      bgMain: '#faeee7',
      bgButton: '#ff8ba7',
      bgForm: '#fffffe',
      textMain: '#33272a',
      textSecondary: '#594a4e',
      formInput: '#faeee7',
    },
    extend: {},
  },
  plugins: [],
}
