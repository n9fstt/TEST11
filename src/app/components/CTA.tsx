'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current?.children || [],
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-black text-white px-4 sm:px-6 lg:px-8"
    >
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Prêt à concrétiser votre projet ?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Transformons ensemble vos idées en réalité numérique. Notre équipe est là pour vous accompagner à chaque étape.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Commencer votre projet
          </a>
        </div>
      </div>
    </section>
  );
}