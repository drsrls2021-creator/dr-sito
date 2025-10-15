import PageHeader from '../../components/shared/PageHeader';
import Container from '../../components/ui/Container';
import PortfolioClient from './PortfolioClient'; // Importiamo il nuovo componente client

export const metadata = {
  title: 'Portfolio Lavori',
  description: 'Scopri i nostri migliori lavori realizzati: finestre, porte, persiane e vetrate installate per i nostri clienti in Campania.',
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
      '/scuolamedia1.webp',
      '/scuolamedia2.webp',
      '/scuolamedia3.webp',
      '/scuolamedia4.webp',
      '/scuolamedia5.webp',
      '/scuolamedia6.webp',
      
    ] 
  },
  { 
    id: 3, 
    title: 'Portoncini blindati', 
    category: 'Portoncini blindati', 
    images: [
      'portoncinoblindato1.webp',
      'portoncinoblindato2.webp',
      'portoncinoblindato3.webp',
      'portoncinoblindato4.webp'
      ,
    ] 
  },
  { 
    id: 4, 
    title: 'Persiane di varie abitazioni', 
    category: 'Persiane in alluminio', 
    images: [
      'persiane1.webp',
      'persiane2.webp',
    ] 
  },
  { 
    id: 5, 
    title: 'Capannone Industriale Parete (CE)', 
    category: 'Vetrate', 
    images: [
      '\parete1.webp',
    ]
  },   
  { 
    id: 6, 
    title: 'Condomini Residenziali', 
    category: 'Finestre PVC', 
    images: [
      'variepvc1.webp',
      
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