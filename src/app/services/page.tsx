'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Design Web',
    description: 'Création de sites web modernes et responsifs',
    features: [
      'Design sur mesure',
      'Interface utilisateur intuitive',
      'Expérience mobile optimisée',
      'Animations élégantes'
    ]
  },
  {
    title: 'Développement',
    description: 'Solutions web robustes et performantes',
    features: [
      'Technologies modernes',
      'Performance optimisée',
      'Code propre et maintenable',
      'Intégration API'
    ]
  },
  {
    title: 'E-commerce',
    description: 'Boutiques en ligne professionnelles',
    features: [
      'Expérience d\'achat fluide',
      'Gestion des produits',
      'Paiement sécurisé',
      'Tableau de bord admin'
    ]
  }
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      }
    );

    // Services section animations
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Individual card animations
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Features list animations for each card
      const features = card.querySelectorAll('.feature-item');
      features.forEach((feature, featureIndex) => {
        gsap.fromTo(
          feature,
          {
            opacity: 0,
            x: -20
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top center+=100',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-12 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 ref={titleRef} className="text-5xl sm:text-6xl font-bold tracking-tight">
            Nos Services
          </h1>
          <p ref={subtitleRef} className="text-xl mt-4 max-w-2xl mx-auto">
            Des solutions web complètes pour votre succès digital
          </p>
        </div>
      </div>
      <section
        ref={sectionRef}
        className="min-h-screen py-24 bg-white text-black px-4 sm:px-6 lg:px-8"
      >
        <div
          ref={textRef}
          className="max-w-6xl mx-auto space-y-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) {
                    cardRefs.current[index] = el;
                  }
                }}
                className="service-card group relative overflow-hidden rounded-lg aspect-square bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              >
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="feature-item flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-black rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-gray-800 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 text-lg font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="flex items-center">Démarrer un Projet
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      <style jsx>{`
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 640px) {
          .service-card {
            transform: none;
          }
          
          .service-card:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </main>
  );
}