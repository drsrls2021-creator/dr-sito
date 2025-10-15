import React from 'react';
import PageHeader from '../../../components/shared/PageHeader';
import Container from '../../../components/ui/Container';

export default function FinestrePvcPage() {
  return (
    <>
      <PageHeader
        title="Finestre in PVC"
        subtitle="La scelta ideale per isolamento, durata e design."
      />
      <section className="py-16">
        <Container>
          <div className="prose max-w-none">
            {/* Junior Dev: Inserisci qui i dettagli sul servizio di finestre in PVC */}
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Caratteristiche Principali</h2>
            <p>
              Le nostre finestre in PVC offrono prestazioni eccellenti in termini di isolamento termico e acustico,
              contribuendo a ridurre i costi energetici e ad aumentare il comfort abitativo.
            </p>
            <ul>
              <li>Elevata efficienza energetica</li>
              <li>Manutenzione minima</li>
              <li>Ampia gamma di colori e finiture</li>
              <li>Resistenza agli agenti atmosferici</li>
            </ul>
            {/* Junior Dev: Aggiungi una galleria di immagini dei prodotti */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Spazio per galleria immagini</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}