import Head from 'next/head';
import Hero from '../app/components/Hero';
import Services from '../app/components/Services';
import Portfolio from '../app/components/Portfolio';
import CTA from '../app/components/CTA';
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Webfern - Création de Sites Web Modernes</title>
        <meta name="description" content="Nous créons des sites web modernes et minimalistes pour les entreprises qui veulent se démarquer." />
        <link rel="icon" href="/la-toile.png" />
      </Head>
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}