/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'mobile': '562px',
      // => @media (min-width: 562px) { ... }

      'mobile-landscape': '732px',
      // => @media (min-width: 732px) { ... }

      'tablet': '1005px',
      // => @media (min-width: 987px) { ... }

      'laptop': '1112px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}