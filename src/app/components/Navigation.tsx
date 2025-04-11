'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-black bg-opacity-95 text-white py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="flex items-center">
            {/* Use the original icon2fav.png and adjust margin */}
            <Image 
              src="/icon2fav.png" 
              alt="Logo Icon" 
              width={40} 
              height={40} 
              className="mr-2"  // Adjusted margin for left alignment
              priority
            />
            <div className="flex flex-col">
              <span 
                className="text-2xl md:text-3xl font-serif font-light tracking-widest 
                           text-white transition-colors duration-300 ease-in-out"
              >
                WebFern
              </span>
              <span className="text-xs tracking-[0.2em] text-gray-300 mt-[-1px] font-sans">
                L'ATELIER DU WEB ÉLÉGANT
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300 transition-colors font-sans text-sm tracking-[0.15em]">
            ACCUEIL
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors font-sans text-sm tracking-[0.15em]">
            À PROPOS
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition-colors font-sans text-sm tracking-[0.15em]">
            SERVICES
          </Link>
          <Link href="/projets" className="hover:text-gray-300 transition-colors font-sans text-sm tracking-[0.15em]">
            PROJETS
          </Link>
          <Link 
            href="/contact"
            className="ml-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-sans text-sm tracking-[0.15em]"
          >
            LANCEZ VOTRE PROJET →
          </Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`
          md:hidden fixed top-0 right-0 h-full w-1/2 bg-black bg-opacity-95 py-4 shadow-lg 
          transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
        `}
      >
        <div className="flex justify-end px-4 mb-6">
          <button onClick={() => setIsOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6">
          <Link 
            href="/" 
            className="hover:text-gray-300 transition-colors font-sans text-sm tracking-[0.15em]"
            onClick={() => setIsOpen(false)}
          >
            ACCUEIL
          </Link>
          <Link 
            href="/about" 
            className="hover:text-gray-300 transition-colors font-sans text-sm tracking-[0.15em]"
            onClick={() => setIsOpen(false)}
          >
            À PROPOS
          </Link>
          <Link 
            href="/services" 
            className="hover:text-gray-300 transition-colors font-sans text-sm tracking-[0.15em]"
            onClick={() => setIsOpen(false)}
          >
            SERVICES
          </Link>
          <Link 
            href="/projets" 
            className="hover:text-gray-300 transition-colors font-sans text-sm tracking-[0.15em]"
            onClick={() => setIsOpen(false)}
          >
            PROJETS
          </Link>
          <Link 
            href="/contact"
            className="inline-block px-4 py-2 bg-white text-black text-center rounded-full hover:bg-gray-200 transition-colors text-sm tracking-[0.15em]"
            onClick={() => setIsOpen(false)}
          >
            LANCEZ VOTRE PROJET →
          </Link>
        </div>
      </div>
    </nav>
  );
}