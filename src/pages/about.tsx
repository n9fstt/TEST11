'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Head from 'next/head';
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';

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
    <>
      <Head>
        <title>À propos - Webfern</title>
        <meta name="description" content="Découvrez l'histoire et la mission de Webfern" />
      </Head>
      <Navigation />
      <main>
        <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
          <div ref={textRef} className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">Notre Histoire</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Fondée en 2024, Webfern est née de la passion pour le design web et le développement de solutions numériques innovantes.
                </p>
                <p className="text-lg text-gray-600">
                  Notre mission est de créer des expériences web exceptionnelles qui allient esthétique et fonctionnalité.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/about-image.jpg"
                  alt="L'équipe Webfern"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section ref={whyChooseUsRef} className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Pourquoi Nous Choisir ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expertise Technique',
                  description: 'Notre équipe maîtrise les dernières technologies web.'
                },
                {
                  title: 'Design Créatif',
                  description: 'Nous créons des designs uniques et mémorables.'
                },
                {
                  title: 'Support Continu',
                  description: 'Nous accompagnons nos clients à chaque étape.'
                }
              ].map((reason, index) => (
                <div key={index} className="reason-item bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div ref={processRef} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Notre Processus</h2>
              <p className="text-lg text-gray-600 mt-4">Comment nous travaillons pour vous offrir le meilleur</p>
            </div>

            <div ref={processItemsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Découverte',
                  description: 'Comprendre vos besoins et objectifs'
                },
                {
                  step: '02',
                  title: 'Conception',
                  description: 'Création de maquettes et prototypes'
                },
                {
                  step: '03',
                  title: 'Développement',
                  description: 'Construction de votre solution'
                },
                {
                  step: '04',
                  title: 'Lancement',
                  description: 'Mise en ligne et support continu'
                }
              ].map((process, index) => (
                <div key={index} className="process-step text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
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