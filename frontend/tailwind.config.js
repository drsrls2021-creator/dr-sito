/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Junior Dev: Personalizza i colori del brand qui
        primary: {
          DEFAULT: '#0D47A1', // Un blu scuro ed elegante
          light: '#1976D2',
          dark: '#0D47A1',
        },
        secondary: {
          DEFAULT: '#FFC107', // Un giallo/oro per i CTA
        },
        light: '#F5F5F5', // Sfondo leggermente grigio
        dark: '#212121', // Testo scuro
      },
    },
  },
  plugins: [],
};