import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo */}
        <div className="md:items-start">
          <Link href="/" className="flex items-start mb-4">
            <Image 
              src="/icon2fav.png" 
              alt="Logo Icon" 
              width={32} 
              height={32} 
              className="mr-2"
            />
            <span className="text-xl font-bold">Webfern</span>
          </Link>
          <p className="text-sm text-gray-400 text-left">L'ATELIER DU WEB ÉLÉGANT</p>
          <p className="text-xs text-gray-400 mt-2 text-left">
            Design sur mesure, <br /> 
            développement performant, <br /> 
            e-commerce professionnel.
          </p>
        </div>

        {/* Services */}
        <div className="md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-left">Nos Services</h3>
          <ul className="space-y-2 text-left">
            <li><Link href="/services#creation" className="text-gray-300 hover:text-white">Création de Site Web</Link></li>
            <li><Link href="/services#refonte" className="text-gray-300 hover:text-white">Refonte de Site</Link></li>
            <li><Link href="/services#seo" className="text-gray-300 hover:text-white">Optimisation SEO</Link></li>
            <li><Link href="/services#maintenance" className="text-gray-300 hover:text-white">Maintenance</Link></li>
            {/* Add more services links as needed */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-left">Contactez-Nous</h3>
          <ul className="space-y-2 text-left">
            <li>
              <a href="https://wa.me/213553398359" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.314-.844l-3.715.975.995-3.648c-.598-1.038-.911-2.218-.911-3.414.002-3.784 3.085-6.866 6.869-6.866 1.84.001 3.564.718 4.861 2.017 1.295 1.297 2.01 3.022 2.01 4.858-.003 3.785-3.087 6.867-6.869 6.866.001 0 .001 0 .001 0z"/>
                </svg>
                <span>WhatsApp: +213 553398359</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@webfern.com" className="text-gray-300 hover:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 1.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5zm5.5 7v-1.5h-11v1.5h11zm0 3v-1.5h-11v1.5h11zm-4 3v-1.5h-7v1.5h7z"/>
                </svg>
                <span>Email: info@webfern.com</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/webfern" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram: @webfern</span>
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white mt-2 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>Formulaire de contact →</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center md:text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Webfern. Tous droits réservés.
      </div>
    </footer>
  );
} 