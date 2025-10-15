import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import Container from '../../components/ui/Container';

export default function PortfolioPage() {
  // Junior Dev: Sostituisci questo array con i dati reali dei tuoi progetti
  const projects = [
    { id: 1, title: 'Santa Maria Capua Vetere', category: 'Finestre PVC', imageUrl: 'https://via.placeholder.com/400x300.png?text=Progetto+1' },
    { id: 2, title: 'Appartamento in Centro', category: 'Finestre PVC', imageUrl: 'https://via.placeholder.com/400x300.png?text=Progetto+2' },
    { id: 3, title: 'Ufficio Direzionale', category: 'Porte', imageUrl: 'https://via.placeholder.com/400x300.png?text=Progetto+3' },
    { id: 4, title: 'Restauro Storico', category: 'Persiane', imageUrl: 'https://via.placeholder.com/400x300.png?text=Progetto+4' },
    { id: 5, title: 'Attico Panoramico', category: 'Vetrate', imageUrl: 'https://via.placeholder.com/400x300.png?text=Progetto+5' },
    { id: 6, title: 'Condominio Residenziale', category: 'Finestre PVC', imageUrl: 'https://via.placeholder.com/400x300.png?text=Progetto+6' },
  ];

  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Scopri alcuni dei nostri migliori lavori realizzati."
      />
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-lg shadow-lg">
                <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-primary-dark">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}