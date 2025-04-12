'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    ).fromTo(
      textRef.current?.children || [],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1 },
      '-=0.5'
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-white text-black px-4 sm:px-6 lg:px-8 
                 pt-24 md:pt-0 md:min-h-screen md:flex md:items-center md:justify-center"
    >
      <div
        ref={textRef}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight">
            Webfern
          </h1>
          <p className="text-lg sm:text-xl mt-2 tracking-widest text-gray-500">
            L'ATELIER DU WEB ÉLÉGANT
          </p>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-2xl mx-auto">
          Nous créons des sites web modernes et minimalistes pour les entreprises qui veulent se démarquer.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 text-lg font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Lancez votre projet
          </a>
        </div>
      </div>
    </section>
  );
}