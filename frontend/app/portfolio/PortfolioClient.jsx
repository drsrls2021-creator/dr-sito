'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Componente per la card singola del progetto
function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-60">
        <Image 
          src={project.images[0]} // Mostra solo la prima immagine come anteprima
          alt={project.title} 
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-primary-dark">{project.title}</h3>
        <p className="text-gray-600">{project.category}</p>
      </div>
    </div>
  );
}

// Componente per la galleria a schermo intero (Lightbox)
function Lightbox({ images, onClose, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = (e) => {
    e.stopPropagation(); // Evita che il click si propaghi e chiuda la lightbox
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Pulsante Chiudi */}
      <button className="absolute top-4 right-4 text-white text-4xl" onClick={onClose}>
        <FiX />
      </button>

      {/* Pulsante Precedente */}
      {images.length > 1 && (
        <button 
          className="absolute left-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full" 
          onClick={handlePrev}
        >
          <FiChevronLeft />
        </button>
      )}

      {/* Immagine Principale */}
      <div className="relative w-11/12 h-5/6 md:w-3/4 md:h-3/4" onClick={(e) => e.stopPropagation()}>
        <Image 
          src={images[currentIndex]} 
          alt={`Immagine ${currentIndex + 1}`}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Pulsante Successivo */}
      {images.length > 1 && (
        <button 
          className="absolute right-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full" 
          onClick={handleNext}
        >
          <FiChevronRight />
        </button>
      )}
    </div>
  );
}

// Componente principale che gestisce lo stato
export default function PortfolioClient({ projects }) {
  const [lightboxImages, setLightboxImages] = useState(null);

  const openLightbox = (images) => {
    setLightboxImages(images);
  };

  const closeLightbox = () => {
    setLightboxImages(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => openLightbox(project.images)} 
          />
        ))}
      </div>

      {lightboxImages && (
        <Lightbox images={lightboxImages} onClose={closeLightbox} />
      )}
    </>
  );
}