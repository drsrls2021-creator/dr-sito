import React from 'react';
import PageHeader from '../../../components/shared/PageHeader';
import Container from '../../../components/ui/Container';

export default function PersianeTapparellePage() {
  return (
    <>
      <PageHeader
        title="Persiane e Tapparelle"
        subtitle="Controllo, privacy e sicurezza per le tue finestre."
      />
      <section className="py-16">
        <Container>
          <div className="prose max-w-none">
            {/* Junior Dev: Inserisci qui i dettagli su persiane e tapparelle */}
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Soluzioni per Ogni Esigenza</h2>
            <p>
              Offriamo una vasta selezione di persiane e tapparelle, disponibili in diversi materiali come alluminio,
              PVC e acciaio, per adattarsi perfettamente allo stile della tua casa e garantire la massima funzionalità.
            </p>
            <ul>
              <li>Persiane a lamelle fisse o orientabili</li>
              <li>Tapparelle avvolgibili manuali o motorizzate</li>
              <li>Sistemi di sicurezza integrati</li>
              <li>Vasta scelta di colori</li>
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