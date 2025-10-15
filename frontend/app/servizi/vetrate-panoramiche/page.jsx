import React from 'react';
import PageHeader from '../../../components/shared/PageHeader';
import Container from '../../../components/ui/Container';

export default function VetratePanoramichePage() {
  return (
    <>
      <PageHeader
        title="Vetrate Panoramiche"
        subtitle="Luce e spazio senza confini per i tuoi ambienti."
      />
      <section className="py-16">
        <Container>
          <div className="prose max-w-none">
            {/* Junior Dev: Inserisci qui i dettagli sulle vetrate panoramiche */}
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Design Minimale, Massima Luminosità</h2>
            <p>
              Le vetrate panoramiche sono la soluzione ideale per chi desidera ambienti luminosi e una continuità visiva
              tra interno ed esterno. Perfette per verande, balconi e terrazzi.
            </p>
            <ul>
              <li>Profili minimali per una vista ininterrotta</li>
              <li>Vetri di sicurezza ad alte prestazioni</li>
              <li>Sistema di apertura scorrevole o a pacchetto</li>
              <li>Integrazione perfetta con l'architettura</li>
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