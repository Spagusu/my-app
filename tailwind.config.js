module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
      fontFamily: {
        'sans': ['Helvetica', 'system-ui'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
     variants: {
       extend: {},
     },
     plugins: [],
   }