import PageHeader from '../../components/shared/PageHeader';
import Container from '../../components/ui/Container';
import PortfolioClient from './PortfolioClient'; // Importiamo il nuovo componente client

export const metadata = {
  title: 'Portfolio Lavori',
  description: 'Scopri i nostri migliori lavori realizzati: finestre, porte, persiane e vetrate installate per i nostri clienti a Caserta e in Campania.',
};

// I dati dei progetti ora vivono qui, nel Server Component
const projectsData = [
  { 
    id: 1, 
    title: 'Santa Maria Capua Vetere', 
    category: 'Finestre PVC', 
    images: [
      '/Santa_Maria_Capuavetere.webp', 
      '/santamariacapuavetere2.webp', 
      
    ] 
  },
  { 
    id: 2, 
    title: 'Scuola Frignano (CE)', 
    category: 'Finestre PVC', 
    images: [
      '/portfolio/scuola-frignano-1.webp',
      '/portfolio/scuola-frignano-2.webp',
    ] 
  },
  { 
    id: 3, 
    title: 'Ufficio Direzionale', 
    category: 'Porte Interne', 
    images: [
      'https://images.unsplash.com/photo-1529322359376-9f080b5c193a?q=80&w=800',
      'https://images.unsplash.com/photo-1618221014418-6366113a023c?q=80&w=800',
    ] 
  },
  { 
    id: 4, 
    title: 'Restauro Storico', 
    category: 'Persiane', 
    images: [
      'https://images.unsplash.com/photo-1617103998418-a6e4ac5a2517?q=80&w=800',
    ] 
  },
  { 
    id: 5, 
    title: 'Attico Panoramico', 
    category: 'Vetrate', 
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800',
    ] 
  },
  { 
    id: 6, 
    title: 'Condominio Residenziale', 
    category: 'Finestre PVC', 
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=800',
    ] 
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Scopri alcuni dei nostri migliori lavori realizzati."
      />
      <section className="py-16">
        <Container>
          {/* Passiamo i dati al componente client che gestirà i click */}
          <PortfolioClient projects={projectsData} />
        </Container>
      </section>
    </>
  );
}