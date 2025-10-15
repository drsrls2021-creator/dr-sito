import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import Container from '../../components/ui/Container';
import ServiceCard from '../../components/shared/ServiceCard';

export default function ServiziPage() {
  const services = [
    { title: 'Finestre in PVC', description: 'Massimo isolamento e design personalizzabile.', href: '/servizi/finestre-pvc' },
    { title: 'Porte Blindate', description: 'Sicurezza certificata senza rinunciare allo stile.', href: '/servizi/porte-blindate' },
    { title: 'Persiane e Tapparelle', description: 'Soluzioni per il controllo della luce e la privacy.', href: '/servizi/persiane-tapparelle' },
    { title: 'Vetrate Panoramiche', description: 'Amplia i tuoi spazi con luce e trasparenza.', href: '/servizi/vetrate-panoramiche' },
  ];

  return (
    <>
      <PageHeader
        title="I Nostri Servizi"
        subtitle="Offriamo una gamma completa di soluzioni per la tua casa e la tua azienda."
      />
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Junior Dev: Aggiungi qui altri servizi se necessario */}
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} href={service.href} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}