'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Handle video loading
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
        videoRef.current?.play();
      });
    }

    // Animate the content
    tl.fromTo(
      textRef.current?.children || [],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
    );

    // Cleanup
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {});
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative max-w-4xl mx-auto text-center space-y-8 px-4 sm:px-6 lg:px-8 mt-[-50px]"
      >
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mt-[-20px]">
            WebFern
          </h1>
          <p className="text-lg sm:text-xl mt-4 tracking-widest text-gray-300 text-center">
            L'ATELIER DU WEB ÉLÉGANT
          </p>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-2xl mx-auto">
          Nous créons des sites web modernes et minimalistes pour les entreprises qui veulent se démarquer.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 text-lg font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform"
          >
            Lancez votre projet
          </Link>
        </div>
      </div>
    </section>
  );
}