'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  // Sites web E-commerce
  {
    title: 'E-commerce Premium',
    description: 'Une expérience d\'achat fluide et moderne pour une marque de luxe',
    category: 'Sites web E-commerce',
    image: '/portfolio/project1.svg'
  },
  {
    title: 'E-commerce Basique',
    description: 'Une solution e-commerce simple et efficace pour les petites entreprises',
    category: 'Sites web E-commerce',
    image: '/portfolio/project7.svg'
  },
  // Sites web Informatique
  {
    title: 'Informatique Premium',
    description: 'Interface utilisateur intuitive pour une plateforme de gestion avancée',
    category: 'Sites web Informatique',
    image: '/portfolio/project2.svg'
  },
  {
    title: 'Informatique Basique',
    description: 'Solution SaaS simple pour les startups',
    category: 'Sites web Informatique',
    image: '/portfolio/project8.svg'
  },
  // Sites web Restaurant
  {
    title: 'Restaurant Premium',
    description: 'Design élégant et professionnel pour une entreprise internationale',
    category: 'Sites web Restaurant',
    image: '/portfolio/project3.svg'
  },
  {
    title: 'Restaurant Basique',
    description: 'Site vitrine simple pour les petites entreprises',
    category: 'Sites web Restaurant',
    image: '/portfolio/project9.svg'
  },
  // Sites web Portfolio
  {
    title: 'Portfolio Premium',
    description: 'Solution d\'apprentissage en ligne interactive et engageante',
    category: 'Sites web Portfolio',
    image: '/portfolio/project4.svg'
  },
  {
    title: 'Portfolio Basique',
    description: 'Plateforme éducative simple pour les écoles',
    category: 'Sites web Portfolio',
    image: '/portfolio/project10.svg'
  },
  // Landing Page
  {
    title: 'Landing Page Premium',
    description: 'Application native performante avec une expérience utilisateur optimale',
    category: 'Landing Page',
    image: '/portfolio/project5.svg'
  },
  {
    title: 'Landing Page Basique',
    description: 'Application mobile simple pour les petites entreprises',
    category: 'Landing Page',
    image: '/portfolio/project11.svg'
  }
];

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledProjects = shuffleArray([...projects]);

export default function ProjectsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = selectedCategory === 'All'
    ? shuffledProjects.slice(currentIndex, currentIndex + 3)
    : projects.filter(project => project.category === selectedCategory);

  const handleSeeMore = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 3;
      return newIndex >= projects.length ? 0 : newIndex;
    });
  };

  const handleReturn = () => {
    setCurrentIndex(prevIndex => (prevIndex - 3 + projects.length) % projects.length);
  };

  useEffect(() => {
    const projects = projectsRef.current?.children;
    if (!projects) return;

    gsap.fromTo(
      projects,
      {
        opacity: 0,
        y: 100
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
  }, [filteredProjects]);

  return (
    <main className="overflow-hidden">
      <section className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Nos Projets
          </h1>
          <p className="text-xl mt-2 max-w-2xl mx-auto">
            Découvrez notre portfolio de réalisations web exceptionnelles
          </p>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="min-h-screen py-12 bg-white text-black px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="py-4">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => {
                  const container = document.querySelector('.category-scroll');
                  if (container) {
                    container.scrollBy({ left: -100, behavior: 'smooth' });
                  }
                }}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md md:hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="mt-2 space-x-2 flex flex-nowrap overflow-x-auto scrollbar-hide justify-start category-scroll">
                {['All', 'Sites web E-commerce', 'Sites web Informatique', 'Sites web Restaurant', 'Sites web Portfolio', 'Landing Page'].map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 mb-2 rounded-full ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-200 text-black'} hover:bg-gray-300 whitespace-nowrap`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const container = document.querySelector('.category-scroll');
                  if (container) {
                    container.scrollBy({ left: 100, behavior: 'smooth' });
                  }
                }}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md md:hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project: Project, index: number) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white space-y-4">
                    <span className="text-sm uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <a
                      href="#"
                      className="inline-block mt-4 px-6 py-2 border border-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      Voir le Projet
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedCategory === 'All' && (
            <div className="text-center mt-8">
              <button
                onClick={handleSeeMore}
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                Voir plus
              </button>
              <button
                onClick={handleReturn}
                className="bg-white text-black px-6 py-2 ml-4 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Retour
              </button>
            </div>
          )}

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-block bg-black text-white px-12 py-4 text-lg font-medium rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span className="flex items-center">
                Démarrer un Projet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}