// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: 'Nunito Sans',
      },
      backgroundImage: {
        "hero-image": "url('/portfolioWebsite/assets/bg.jpg')",
        "contact-image": "url('/portfolioWebsite/assets/contact.jpg')",
      },
      colors: {
        designColor: '#00FFFF',
        textColor: '#aeaeae',
      },
      boxShadow: {
        cardShadow: '0px 0px 5px 10px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      borderColor: ['responsive', 'hover', 'focus', 'active'],
      textColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
};
