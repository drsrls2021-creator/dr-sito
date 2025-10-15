import PageHeader from '../../components/shared/PageHeader';
import Container from '../../components/ui/Container';
import PortfolioClient from './PortfolioClient';

export const metadata = {
  title: 'Portfolio Lavori',
  description: 'Scopri i nostri migliori lavori realizzati: finestre, porte, persiane e vetrate installate per i nostri clienti in Campania.',
};

const projectsData = [
  { 
    id: 1, 
    title: 'Santa Maria Capua Vetere', 
    category: 'Finestre PVC', 
    images: [
      '/portfolio/Santa_Maria_Capuavetere.webp', 
      '/portfolio/santamariacapuavetere2.webp', 
    ] 
  },
  { 
    id: 2, 
    title: 'Scuola Frignano (CE)', 
    category: 'Finestre PVC', 
    images: [
      '/portfolio/scuolamedia1.webp',
      '/portfolio/scuolamedia2.webp',
      '/portfolio/scuolamedia3.webp',
      '/portfolio/scuolamedia4.webp',
      '/portfolio/scuolamedia5.webp',
      '/portfolio/scuolamedia6.webp',
    ] 
  },
  { 
    id: 3, 
    title: 'Portoncini blindati', 
    category: 'Portoncini blindati', 
    images: [
      // CORREZIONE: Aggiunto /portfolio/ a tutti
      '/portfolio/portoncinoblindato1.webp',
      '/portfolio/portoncinoblindato2.webp',
      '/portfolio/portoncinoblindato3.webp',
      '/portfolio/portoncinoblindato4.webp',
    ] 
  },
  { 
    id: 4, 
    title: 'Persiane di varie abitazioni', 
    category: 'Persiane in alluminio', 
    images: [
      // CORREZIONE: Aggiunto /portfolio/ a tutti
      '/portfolio/persiane1.webp',
      '/portfolio/persiane2.webp',
    ] 
  },
  { 
    id: 5, 
    title: 'Capannone Industriale Parete (CE)', 
    category: 'Vetrate', 
    images: [
      // CORREZIONE: Corretto lo slash e aggiunto /portfolio/
      '/portfolio/parete1.webp',
    ]
  },   
  { 
    id: 6, 
    title: 'Condomini Residenziali', 
    category: 'Finestre PVC', 
    images: [
      // CORREZIONE: Aggiunto /portfolio/
      '/portfolio/variepvc1.webp',
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
          <PortfolioClient projects={projectsData} />
        </Container>
      </section>
    </>
  );
}