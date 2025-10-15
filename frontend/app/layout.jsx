import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer'; 

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: {
    template: '%s | DR srls - Serramenti di Qualità',
    default: 'DR srls - Serramenti & Infissi',
  },
  description: 'Soluzioni su misura per finestre in PVC, porte blindate e vetrate. Scopri la nostra gamma di prodotti di alta qualità.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${montserrat.variable} ${roboto.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}