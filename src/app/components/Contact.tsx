'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="inline-flex justify-center items-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              Envoyer le message
            </button>
          </div>
          
          <div className="text-center mt-6">
            <Link href="/contact" className="text-gray-300 hover:text-white underline">
              Besoin de plus d'options? Utilisez notre formulaire complet →
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}