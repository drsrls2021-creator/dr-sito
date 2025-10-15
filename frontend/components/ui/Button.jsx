import React from 'react';

export default function Button({ children, as: Component = 'button', className, ...props }) {
  // Junior Dev: Questo è un componente bottone riutilizzabile.
  // Puoi estenderlo con varianti (es. 'secondary', 'outline') modificando le classi.
  const baseClasses = "bg-secondary text-primary-dark font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50";

  return (
    <Component className={`${baseClasses} ${className}`} {...props}>
      {children}
    </Component>
  );
}