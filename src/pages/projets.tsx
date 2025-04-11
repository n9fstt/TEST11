'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Head from 'next/head';
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';

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
  const [showReturn, setShowReturn] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? shuffledProjects.slice(currentIndex, currentIndex + 3)
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowReturn(true);
      } else {
        setShowReturn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      projectsRef.current?.children || [],
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      }
    );
  }, [selectedCategory, currentIndex]);

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const handleLoadMore = () => {
    setCurrentIndex(prevIndex => prevIndex + 3);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Projets - Webfern</title>
        <meta name="description" content="Découvrez nos réalisations et projets" />
      </Head>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Nos Projets</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos réalisations et laissez-vous inspirer
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentIndex(0);
                  }}
                  className={`px-6 py-2 rounded-full transition-colors duration-300 ${selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div
              ref={projectsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {selectedCategory === 'All' && currentIndex + 3 < shuffledProjects.length && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  Charger Plus
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Return to Top Button */}
        {showReturn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300"
            aria-label="Retour en haut"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}