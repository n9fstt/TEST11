'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Head from 'next/head';
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';

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
      cardRefs.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Services - Webfern</title>
        <meta name="description" content="Découvrez nos services de création web" />
      </Head>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p ref={subtitleRef} className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des solutions web sur mesure pour répondre à vos besoins
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}