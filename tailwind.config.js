// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#3662E3',
          secondary: '#F59E0B',
          brand: {
            light: '#3ABFF8',
            DEFAULT: '#0EA5E9',
            dark: '#0284C7',
          },
        },
      },
    },
    plugins: [],
  }
  