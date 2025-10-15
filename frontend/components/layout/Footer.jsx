import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Icone social

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonna 1: Logo e Info */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/logo2.webp" // <-- ERRORE CORRETTO
                alt="Logo DR srls" 
                width={40} 
                height={40} 
                className="filter invert brightness-0" // Stile per rendere il logo bianco
              />
              <span className="ml-3 text-xl font-bold">DR srls</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Qualità e design per la tua casa.
            </p>
          </div>

          {/* Colonna 2: Link Utili */}
          <div>
            <h3 className="font-bold text-lg mb-4">Link Utili</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/chi-siamo" className="text-gray-300 hover:text-white transition-colors">Chi Siamo</Link></li>
              <li><Link href="/servizi" className="text-gray-300 hover:text-white transition-colors">Servizi</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contatti" className="text-gray-300 hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Colonna 3: Contatti */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Via Consortile Savone, 1<br/>81034 Mondragone (CE)</li>
              <li><a href="mailto:info@serramenti.it" className="hover:text-white">info@serramenti.it</a></li>
              <li><a href="tel:0823776453" className="hover:text-white">Tel. 0823.776453</a></li>
              <li><a href="tel:3938799433" className="hover:text-white">Cell. 393.8799433</a></li>
            </ul>
          </div>

          {/* Colonna 4: Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors"><FaFacebook size={24} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} D.R S.r.l.s. Tutti i diritti riservati. P.IVA </p>
        </div>
      </Container>
    </footer>
  );
}