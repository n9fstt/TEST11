'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const processItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Main content animation
    gsap.fromTo(
      textRef.current?.children || [],
      {
        opacity: 0,
        y: 50
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
    
    // Why Choose Us section animation
    gsap.fromTo(
      whyChooseUsRef.current?.querySelectorAll('.reason-item') || [],
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: whyChooseUsRef.current,
          start: 'top center+=150',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Process title animation
    gsap.fromTo(
      processRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top center+=200',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Process items animation
    gsap.fromTo(
      processItemsRef.current?.querySelectorAll('.process-step') || [],
      {
        opacity: 0,
        y: 40,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: processItemsRef.current,
          start: 'top center+=150',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <main>
      <section
        ref={sectionRef}
        className="min-h-screen py-24 bg-white text-black px-4 sm:px-6 lg:px-8"
      >
        <div
          ref={textRef}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="space-y-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
              À Propos de Nous
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Découvrez notre passion pour la création d'expériences web exceptionnelles
            </p>
          </div>

          {/* Pourquoi Nous Choisir - Main Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Pourquoi Nous Choisir</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 reason-item">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Expertise Qui Livre</h3>
                  <p className="text-gray-700">
                    Notre équipe combine des années d'expérience avec les dernières connaissances de l'industrie pour créer des sites web qui se démarquent et performent.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 reason-item">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Solutions Sur Mesure</h3>
                  <p className="text-gray-700">
                    Nous ne croyons pas à l'approche universelle. Chaque projet est unique, et nous concevons des solutions personnalisées qui répondent à vos besoins spécifiques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 reason-item">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Approche Axée sur les Résultats</h3>
                  <p className="text-gray-700">
                    Nous nous concentrons sur la création de sites web qui non seulement sont esthétiquement agréables, mais qui génèrent aussi de vrais résultats commerciaux - plus de trafic, de leads et de conversions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 reason-item">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Support Continu</h3>
                  <p className="text-gray-700">
                    Notre relation ne se termine pas lorsque votre site web est lancé. Nous fournissons un support continu pour garantir que votre présence numérique prospère.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-700">
                Nous restons à la pointe des dernières technologies web pour offrir des solutions modernes et évolutives.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Qualité</h3>
              <p className="text-gray-700">
                Chaque détail compte. Nous nous engageons à livrer un travail d'excellence qui dépasse vos attentes.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Collaboration</h3>
              <p className="text-gray-700">
                Nous travaillons en étroite collaboration avec nos clients pour donner vie à leur vision unique.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={processRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Notre Processus</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nous suivons une approche structurée pour garantir que chaque projet est réalisé efficacement et répond aux normes de qualité les plus élevées.
            </p>
          </div>
          
          <div ref={processItemsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="process-step text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-gray-900">1</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Découverte</h3>
              <p className="text-gray-700">
                Nous commençons par comprendre votre entreprise, vos objectifs et votre public cible pour créer une base stratégique.
              </p>
            </div>
            
            <div className="process-step text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-gray-900">2</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Design</h3>
              <p className="text-gray-700">
                Nos designers créent des visuels attrayants et des expériences utilisateur qui s'alignent avec l'identité de votre marque.
              </p>
            </div>
            
            <div className="process-step text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-gray-900">3</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Développement</h3>
              <p className="text-gray-700">
                Nous construisons votre site web avec un code propre et des technologies de pointe pour une performance optimale.
              </p>
            </div>
            
            <div className="process-step text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-gray-900">4</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Livraison</h3>
              <p className="text-gray-700">
                Après des tests rigoureux, nous lançons votre site web et fournissons un support continu pour assurer un succès durable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}