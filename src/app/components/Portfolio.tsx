'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Site E-commerce Premium',
    description: 'Une expérience d\'achat fluide et moderne',
    image: '/portfolio/project1.svg',
    category: 'Sites web E-commerce'
  },
  {
    title: 'Application Web SaaS',
    description: 'Interface utilisateur intuitive et performante',
    image: '/portfolio/project2.svg',
    category: 'Applications Web'
  },
  {
    title: 'Site Vitrine Corporatif',
    description: 'Design élégant et professionnel',
    image: '/portfolio/project3.svg',
    category: 'Sites Vitrines'
  }
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white text-black px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous transformons des idées en expériences web exceptionnelles
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white space-y-4">
                  <span className="text-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}