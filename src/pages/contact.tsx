import Head from 'next/head';
import ContactForm from '../app/components/ContactForm';
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Webfern</title>
        <meta name="description" content="Contactez Webfern pour vos projets web" />
      </Head>
      <Navigation />
      <main>
        {/* Header Section with Black Background */}
        <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contactez-Nous</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
          </p>
        </div>
        
        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}