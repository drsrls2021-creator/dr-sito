import Image from 'next/image';
import PageHeader from "../../components/shared/PageHeader";
import Container from "../../components/ui/Container";

// ✅ Metadata aggiornati per SEO
export const metadata = {
  title: 'Chi Siamo | DR srls Serramenti in Italia e all’Estero',
  description: 'Scopri la storia di DR srls, azienda italiana con esperienza trentennale nei serramenti di qualità, attiva in tutta Italia e all’estero.',
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
            
            {/* Titolo principale */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
              DR srls: Un'Esperienza Trentennale nata dal sogno di Antonio Diomaiuto.
            </h2>

            {/* Sezione 1: Le Origini */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">Le Origini – La Visione nata dall'Esperienza</h3>
              <p className="text-gray-700 leading-relaxed">
                La storia di <strong>DR srls</strong> affonda le radici nella passione e
                nell’esperienza trentennale di <strong>Antonio Diomaiuto</strong>. 
                Molti anni fa, Antonio iniziò il suo percorso nel settore dei serramenti
                vendendo profili e porte in alluminio, costruendo nel tempo una conoscenza
                profonda dei materiali e delle esigenze del mercato. Questa competenza lo
                portò a collaborare come agente di commercio per importanti aziende del
                settore, portando <strong>prodotti di qualità in tutta Italia e all’estero</strong>. 
                Per oltre tre decenni ha lavorato con dedizione, ma in lui cresceva il
                desiderio di creare qualcosa di proprio — un’azienda capace di gestire ogni
                fase, dalla produzione all’installazione, con un unico obiettivo: la piena
                soddisfazione del cliente finale. Da questa visione, nel <strong>2021</strong>, a
                <strong> Mondragone</strong>, è nata DR srls, il risultato di una vita dedicata alla 
                sicurezza, al comfort e all’efficienza degli spazi abitativi.
              </p>
            </div>

            {/* Sezione 2: Le Sfide (testo senza immagine) */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">Le Sfide – Trasformare l'Esperienza in Innovazione</h3>
              <p className="text-gray-700 leading-relaxed">
                Il mercato dei serramenti è in continua evoluzione: l’efficienza energetica,
                la sostenibilità e l’introduzione di materiali innovativi come il <strong>PVC</strong> 
                hanno ridefinito gli standard del settore. La nostra esperienza è diventata la
                chiave per affrontare il cambiamento, guidandoci nell’integrazione delle 
                migliori tecnologie, nella selezione dei materiali più performanti e nel 
                perfezionamento delle tecniche di installazione. Oggi traduciamo 
                l’innovazione in <strong>valore concreto per i nostri clienti</strong>, con soluzioni che 
                uniscono estetica, durata e funzionalità.
              </p>
            </div>

            {/* Sezione 3: L'Impatto */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4">L'Impatto – La Tua Tranquillità, la Nostra Promessa</h3>
              <p className="text-gray-700 leading-relaxed">
                Oggi, <strong>DR srls</strong> è un <strong>punto di riferimento riconosciuto in tutta Italia e all’estero</strong>. 
                Ogni serramento che realizziamo rappresenta la nostra missione: garantire 
                sicurezza, comfort ed efficienza energetica in ogni ambiente. Ciò che ci distingue 
                è l’attenzione personalizzata che dedichiamo ad ogni progetto — dal primo 
                preventivo fino all’assistenza post-vendita. Scegliere <strong>DR srls</strong> significa affidarsi 
                a un’azienda in cui ogni prodotto è costruito per durare e ogni installazione è 
                eseguita con la massima cura, migliorando concretamente la qualità della tua vita.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

export default ChiSiamoPage;
