/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // adjust to your file structure
  ],
  theme: {
    extend: {
      colors: {
        blockedu: {
          primary: '#1E88E5',
          success: '#4CAF50',
          softGray: '#899B8A',
          dark: '#132028',
          warning: '#F6A842',
          neutral: '#757575',
          light: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
}

