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
      '/portfolio/santa-maria-capua-vetere-1.webp', 
      '/portfolio/santa-maria-capua-vetere-2.webp', 
    ] 
  },
  { 
    id: 2, 
    title: 'Scuola Frignano (CE)', 
    category: 'Finestre PVC', 
    images: [
      '/portfolio/scuola-frignano-1.webp',
      '/portfolio/scuola-frignano-2.webp',
      '/portfolio/scuola-frignano-3.webp',
      '/portfolio/scuola-frignano-4.webp',
      '/portfolio/scuola-frignano-5.webp',
      '/portfolio/scuola-frignano-6.webp',
    ] 
  },
  { 
    id: 3, 
    title: 'Portoncini blindati', 
    category: 'Portoncini blindati', 
    images: [
      '/portfolio/portoncino-blindato-1.webp',
      '/portfolio/portoncino-blindato-2.webp',
      '/portfolio/portoncino-blindato-3.webp',
      '/portfolio/portoncino-blindato-4.webp',
    ] 
  },
  { 
    id: 4, 
    title: 'Persiane di varie abitazioni', 
    category: 'Persiane in alluminio', 
    images: [
      '/portfolio/persiane-1.webp',
      '/portfolio/persiane-2.webp',
    ] 
  },
  { 
    id: 5, 
    title: 'Capannone Industriale Parete (CE)', 
    category: 'Vetrate', 
    images: [
      '/portfolio/capannone-parete-1.webp',
    ]
  },   
  { 
    id: 6, 
    title: 'Condomini Residenziali', 
    category: 'Finestre PVC', 
    images: [
      '/portfolio/condominio-pvc-1.webp',
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