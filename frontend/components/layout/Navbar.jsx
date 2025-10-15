'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Container from '../ui/Container';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chi-siamo', label: 'Chi Siamo' },
    { href: '/servizi', label: 'Servizi' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contatti', label: 'Contatti' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 h-24">
      <Container className="flex items-center justify-between h-full py-2">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <Image 
              src="/logo2.webp"
              alt="Logo DR srls" 
              width={140}
              height={50}
              priority
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-primary">DR srls</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans font-medium text-gray-600 hover:text-primary transition-colors ${
                pathname === link.href ? 'text-primary border-b-2 border-primary' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Apri menu" className="text-primary">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden bg-white absolute top-24 left-0 w-full shadow-lg">
          <nav className="flex flex-col items-center p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium text-gray-700 hover:text-primary ${
                  pathname === link.href ? 'text-primary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}