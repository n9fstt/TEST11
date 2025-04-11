import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main>
      {/* Header Section with Black Background */}
      <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contactez-Nous</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Prêt à démarrer votre projet ? Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
        </p>
      </div>
      
      {/* Contact Form Section (will render on default white background) */}
      <ContactForm />
    </main>
  );
} 