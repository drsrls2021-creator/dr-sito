import React from 'react';
import Link from 'next/link';

export default function ServiceCard({ title, description, href }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
      <h3 className="text-xl font-bold text-primary-dark mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <Link href={href} className="text-primary font-semibold mt-4 self-start hover:underline">
        Scopri di più &rarr;
      </Link>
    </div>
  );
}