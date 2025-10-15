import React from 'react';
import PageHeader from '../../../components/shared/PageHeader';
import Container from '../../../components/ui/Container';

export default function PorteBlindatePage() {
  return (
    <>
      <PageHeader
        title="Porte Blindate"
        subtitle="La sicurezza incontra il design all'ingresso di casa tua."
      />
      <section className="py-16">
        <Container>
          <div className="prose max-w-none">
            {/* Junior Dev: Inserisci qui i dettagli sulle porte blindate */}
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Protezione Certificata</h2>
            <p>
              Le nostre porte blindate sono progettate per offrire la massima resistenza contro i tentativi di effrazione,
              certificate secondo le più recenti normative europee. Personalizza la tua porta con un'ampia gamma di pannelli e finiture.
            </p>
            <ul>
              <li>Classi antieffrazione 3 e 4</li>
              <li>Isolamento acustico e termico</li>
              <li>Serrature di alta sicurezza</li>
              <li>Design personalizzabile</li>
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