import Image from 'next/image';
import PageHeader from "../../components/shared/PageHeader";
import Container from "../../components/ui/Container";

// Aggiungiamo metadata specifici per la SEO di questa pagina
export const metadata = {
  title: 'Chi Siamo',
  description: 'Scopri la storia di DR srls, un\'azienda nata dalla passione trentennale di Antonio Diomaiuto per i serramenti di qualità a Caserta e in Campania.',
};

const ChiSiamoPage = () => {
  return (
    <>
      <PageHeader 
        title="La Nostra Storia" 
        subtitle="Passione, esperienza e innovazione al servizio della tua casa."
      />
      
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Titolo principale del contenuto, ora è un H2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
              DR srls: Un'Esperienza Trentennale nata dal sogno di Antonio Diomaiuto.
            </h2>

            {/* Sezione 1: Le Origini */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">Le Origini – La Visione nata dall'Esperienza</h3>
              <p className="text-gray-700 leading-relaxed">
                La storia di DR srls affonda le radici nella passione e nell'esperienza trentennale di Antonio Diomaiuto. Molti anni fa, Antonio iniziò il suo percorso vendendo profili e porte in alluminio, acquisendo una conoscenza profonda del settore. Questa esperienza lo portò a diventare agente di commercio per grandi aziende in Campania, portando prodotti di qualità in tutta Italia. Per oltre tre decenni, ha lavorato instancabilmente, ma in lui covava un desiderio più grande: avere un contatto diretto e totale con la produzione, fino alla piena soddisfazione del cliente finale. È da questa visione che nel 2021, a Mondragone, è nata DR srls, il culmine di una vita dedicata a garantire sicurezza, comfort ed efficienza in ogni abitazione.
              </p>
            </div>

            {/* Sezione 2: Le Sfide (con immagine per spezzare il testo) */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary mb-4">Le Sfide – Trasformare l'Esperienza in Innovazione</h3>
                <p className="text-gray-700 leading-relaxed">
                  Il mercato dei serramenti è in costante evoluzione. L'efficienza energetica e materiali avanzati come il PVC hanno ridefinito gli standard, ma non ci hanno colto impreparati. La solida conoscenza del settore è diventata la nostra guida per integrare le migliori tecnologie, selezionare i materiali più performanti e affinare le tecniche di installazione, traducendo l'innovazione in valore concreto per i nostri clienti.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556742518-b8279acb0af3?q=80&w=800"
                  alt="Artigiano al lavoro su un serramento"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Sezione 3: L'Impatto */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">L'Impatto – La Tua Tranquillità, la Nostra Promessa</h3>
              <p className="text-gray-700 leading-relaxed">
                Oggi, DR srls è un punto di riferimento in provincia di Caserta e in tutta la Campania. Ogni serramento che installiamo è la concretizzazione della nostra missione: garantire sicurezza, comfort ed efficienza energetica. Ciò che ci distingue è l'attenzione personalizzata, dal preventivo all'assistenza post-vendita. Scegliere DR srls significa affidarsi a un'azienda dove ogni prodotto è costruito per durare e ogni installazione è eseguita con la massima cura, migliorando la qualità della tua vita.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ChiSiamoPage;