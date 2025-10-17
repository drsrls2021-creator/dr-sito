import React from 'react';
import Link from 'next/link';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ServiceCard from '../components/shared/ServiceCard';

// Junior Dev: Questa è la homepage. È costruita a sezioni.
// Aggiungi o modifica sezioni per arricchire la pagina.

export default function HomePage() {
  const services = [
    { title: 'Finestre in PVC', description: 'Isolamento termico e acustico superiore per il massimo comfort.', href: '/servizi/finestre-pvc' },
    { title: 'Porte Blindate', description: 'Sicurezza e design si uniscono per proteggere la tua casa.', href: '/servizi/porte-blindate' },
    { title: 'Persiane e Tapparelle', description: 'Controllo della luce e della privacy con stile e funzionalità.', href: '/servizi/persiane-tapparelle' },
    { title: 'Vetrate Panoramiche', description: 'Spazi luminosi e aperti con le nostre vetrate di design.', href: '/servizi/vetrate-panoramiche' },
  ];

  return (
    <>
      {/* Sezione Hero */}
      <section className="bg-light py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-4">
              Serramenti che uniscono Design e Sicurezza
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Realizziamo soluzioni su misura per valorizzare e proteggere i tuoi spazi.
            </p>
            <Button as={Link} href="/contatti">
              Richiedi un Preventivo Gratuito
            </Button>
          </div>
        </Container>
      </section>

      {/* Sezione Servizi Principali */}
      <section id="servizi" className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark">I Nostri Servizi</h2>
            <p className="text-gray-600 mt-2">Scopri come possiamo migliorare la tua casa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} href={service.href} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}