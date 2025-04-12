import Hero from './components/Hero';
import About from './about/page';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
