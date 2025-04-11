import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
    </main>
  );
}
