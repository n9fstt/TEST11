'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Développement Web',
    description: 'Création de sites web modernes et réactifs avec les dernières technologies.',
    icon: '🌐'
  },
  {
    title: 'Design UX/UI',
    description: 'Conception d\'interfaces intuitives et esthétiques centrées sur l\'utilisateur.',
    icon: '✨'
  },
  {
    title: 'E-commerce',
    description: 'Solutions de commerce électronique personnalisées et performantes.',
    icon: '🛍️'
  },
  {
    title: 'Applications Web',
    description: 'Développement d\'applications web complexes et évolutives.',
    icon: '💻'
  },
  {
    title: 'SEO',
    description: 'Optimisation pour les moteurs de recherche et visibilité en ligne.',
    icon: '📈'
  },
  {
    title: 'Maintenance',
    description: 'Support technique et maintenance continue de vos solutions web.',
    icon: '🔧'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const services = servicesRef.current?.children;
    if (!services) return;

    gsap.fromTo(
      services,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
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
      className="py-24 bg-white text-black px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions sur mesure pour répondre à vos besoins numériques
          </p>
        </div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 space-y-4"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}