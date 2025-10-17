'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// ✅ Card singola del progetto
function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-60">
        <Image 
          src={project.images[0]} 
          alt={project.title} 
          fill
          loading="lazy"
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

// ✅ Lightbox a schermo intero
function Lightbox({ images, onClose, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Chiudi */}
      <button 
        className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <FiX />
      </button>

      {/* Contenitore immagine */}
      <div 
        className="relative w-11/12 h-[75vh] max-w-5xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image 
          src={images[currentIndex]} 
          alt={`Immagine ${currentIndex + 1}`}
          fill
          loading="lazy"
          style={{ objectFit: 'contain' }}
          className="rounded-lg transition-transform duration-500"
        />

        {/* Freccia sinistra */}
        {images.length > 1 && (
          <button 
            className="absolute left-4 md:left-8 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-primary transition"
            onClick={handlePrev}
          >
            <FiChevronLeft />
          </button>
        )}

        {/* Freccia destra */}
        {images.length > 1 && (
          <button 
            className="absolute right-4 md:right-8 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-primary transition"
            onClick={handleNext}
          >
            <FiChevronRight />
          </button>
        )}
      </div>

      {/* Indicatori sotto */}
      {images.length > 1 && (
        <div className="mt-4 flex space-x-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-primary' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

// ✅ Componente principale
export default function PortfolioClient({ projects }) {
  const [lightboxImages, setLightboxImages] = useState(null);

  const openLightbox = (images) => setLightboxImages(images);
  const closeLightbox = () => setLightboxImages(null);

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
