'use client';

import { useState } from 'react';
import PageHeader from '../../components/shared/PageHeader';
import Container from '../../components/ui/Container';

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validazione (già corretta)
    if (!formData.name.trim()) { setStatus({ type: 'error', message: 'Il nome è obbligatorio.' }); return; }
    if (!formData.email.trim()) { setStatus({ type: 'error', message: 'L\'email è obbligatoria.' }); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setStatus({ type: 'error', message: 'Inserisci un\'email valida.' }); return; }
    if (!formData.phone.trim()) { setStatus({ type: 'error', message: 'Il numero di telefono è obbligatorio.' }); return; }
    if (!/^[0-9\s\+\-\(\)]{8,}$/.test(formData.phone)) { setStatus({ type: 'error', message: 'Inserisci un numero di telefono valido.' }); return; }
    if (!formData.message.trim()) { setStatus({ type: 'error', message: 'Il messaggio è obbligatorio.' }); return; }

    setIsLoading(true);

    try {
      // --- MODIFICA FONDAMENTALE ---
      // Sceglie l'URL giusto in base all'ambiente (sviluppo locale o produzione su Render)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Messaggio inviato con successo! Ti risponderemo al più presto.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.detail || 'Errore durante l\'invio del messaggio.' });
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setStatus({ type: 'error', message: 'Errore di connessione. Assicurati che il server backend sia attivo.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Contattaci"
        subtitle="Compila il modulo qui sotto e ti risponderemo al più presto."
      />
      
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Il tuo nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tua@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Telefono */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+39 123 456 7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Messaggio */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descrivi la tua richiesta..."
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Messaggio di stato */}
              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {status.message}
                </div>
              )}

              {/* Pulsante Invio */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Invio in corso...' : 'Invia messaggio'}
              </button>

              {/* Note */}
              <p className="text-sm text-gray-500 text-center">
                <span className="text-red-500">*</span> Tutti i campi sono obbligatori
              </p>
            </form>

            {/* Info Contatti */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-primary text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-gray-800 mb-2">Indirizzo</h3>
                <p className="text-gray-600 text-sm">
                  Via Consortile Savone, 1<br />
                  81034 Mondragone (CE)
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-primary text-3xl mb-3">✉️</div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <a 
                  href="mailto:drsrls2021@gmail.com" 
                  className="text-gray-600 text-sm hover:text-primary transition-colors"
                >
                  drsrls2021@gmail.com
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-primary text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-gray-800 mb-2">Contatti</h3>
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm">
                    <a href="tel:0823776453" className="hover:text-primary transition-colors">
                      Tel. 0823.776453
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:3938799433" className="hover:text-primary transition-colors">
                      Cell. 393.8799433
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}