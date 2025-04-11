'use client';

import { useState } from 'react';

// Translation dictionary
const translations = {
  fr: {
    contactTitle: 'Contactez-Nous',
    contactSubtitle: 'Prêt à démarrer votre projet ? Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.',
    tellUs: 'Parlez-nous de votre projet',
    fillOut: 'Remplissez le formulaire ci-dessous et nous vous répondrons bientôt',
    activityLabel: 'Quelle est votre activité commerciale ou institutionnelle ?',
    activityPlaceholder: 'Quelle est votre activité commerciale ou institutionnelle ?',
    websiteTypeLabel: 'Quel type de site web souhaitez-vous créer ?',
    websiteTypePlaceholder: 'Quel type de site web souhaitez-vous créer ?',
    websiteTypeOptions: {
      showcase: 'Site Vitrine',
      ecommerce: 'E-commerce / Boutique en ligne',
      blog: 'Blog / Plateforme de contenu',
      portfolio: 'Portfolio',
      landing: 'Page de Destination',
      custom: 'Application Personnalisée',
      other: 'Autre',
    },
    projectNameLabel: 'Quel est le nom de votre projet, entreprise ou magasin ?',
    projectNamePlaceholder: 'Quel est le nom de votre projet, entreprise ou magasin ?',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    phoneLabel: 'Numéro de téléphone',
    phonePlaceholder: 'Numéro de téléphone',
    websiteLanguageLabel: 'Quelle est la langue du site web ?',
    languages: {
      Arabic: 'Arabe',
      French: 'Français',
      English: 'Anglais',
    },
    logoQuestion: 'Avez-vous un logo ?',
    logoOptions: {
      yes: 'Oui, j\'ai un logo',
      no: 'Non, je n\'ai pas de logo',
      create: 'Je veux que vous en créiez un pour moi',
    },
    mimicLabel: 'Avez-vous un exemple de site web que vous souhaitez imiter ? (optionnel)',
    mimicPlaceholder: 'Avez-vous un exemple de site web que vous souhaitez imiter ? (optionnel)',
    submitButton: 'Soumettre',
  },
  en: {
    contactTitle: 'Contact Us',
    contactSubtitle: 'Ready to start your project? Fill out the form below and we\'ll get back to you as soon as possible.',
    tellUs: 'Tell us about your project',
    fillOut: 'Fill out the form below and we\'ll get back to you soon',
    activityLabel: 'What is your business or institutional activity?',
    activityPlaceholder: 'What is your business or institutional activity?',
    websiteTypeLabel: 'What type of website do you want to create?',
    websiteTypePlaceholder: 'What type of website do you want to create?',
    websiteTypeOptions: {
      showcase: 'Showcase Website',
      ecommerce: 'E-commerce / Online Store',
      blog: 'Blog / Content Platform',
      portfolio: 'Portfolio',
      landing: 'Landing Page',
      custom: 'Custom Application',
      other: 'Other',
    },
    projectNameLabel: 'What is the name of your project, company, or store?',
    projectNamePlaceholder: 'What is the name of your project, company, or store?',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    phoneLabel: 'Phone number',
    phonePlaceholder: 'Phone number',
    websiteLanguageLabel: 'What is the language of the website?',
    languages: {
      Arabic: 'Arabic',
      French: 'French',
      English: 'English',
    },
    logoQuestion: 'Do you have a logo?',
    logoOptions: {
      yes: 'Yes, I have a logo',
      no: 'No, I don\'t have a logo',
      create: 'I want you to create one for me',
    },
    mimicLabel: 'Do you have an example of a website you want to mimic? (optional)',
    mimicPlaceholder: 'Do you have an example of a website you want to mimic? (optional)',
    submitButton: 'Submit',
  },
  ar: {
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'هل أنت مستعد لبدء مشروعك؟ املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن.',
    tellUs: 'أخبرنا عن مشروعك',
    fillOut: 'املأ النموذج أدناه وسنرد عليك قريبًا',
    activityLabel: 'ما هو نشاطك التجاري أو المؤسسي؟',
    activityPlaceholder: 'ما هو نشاطك التجاري أو المؤسسي؟',
    websiteTypeLabel: 'ما نوع الموقع الذي تريد إنشاءه؟',
    websiteTypePlaceholder: 'ما نوع الموقع الذي تريد إنشاءه؟',
    websiteTypeOptions: {
      showcase: 'موقع عرض',
      ecommerce: 'تجارة إلكترونية / متجر إلكتروني',
      blog: 'مدونة / منصة محتوى',
      portfolio: 'ملف أعمال (بورتفوليو)',
      landing: 'صفحة هبوط',
      custom: 'تطبيق مخصص',
      other: 'أخرى',
    },
    projectNameLabel: 'ما هو اسم مشروعك أو شركتك أو متجرك؟',
    projectNamePlaceholder: 'ما هو اسم مشروعك أو شركتك أو متجرك؟',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'البريد الإلكتروني',
    phoneLabel: 'رقم الهاتف',
    phonePlaceholder: 'رقم الهاتف',
    websiteLanguageLabel: 'ما هي لغة الموقع؟',
    languages: {
      Arabic: 'العربية',
      French: 'الفرنسية',
      English: 'الإنجليزية',
    },
    logoQuestion: 'هل لديك شعار؟',
    logoOptions: {
      yes: 'نعم لدي شعار',
      no: 'لا، ليس لدي شعار',
      create: 'أريدك أن تنشئ لي واحدًا',
    },
    mimicLabel: 'هل لديك مثال لموقع ويب تريد تقليده؟ (اختياري)',
    mimicPlaceholder: 'هل لديك مثال لموقع ويب تريد تقليده؟ (اختياري)',
    submitButton: 'إرسال',
  },
};

export default function ContactForm() {
  const [language, setLanguage] = useState('fr'); // Default to French
  const [formData, setFormData] = useState({
    activity: '',
    websiteType: '',
    projectName: '',
    email: '',
    phone: '',
    websiteLanguages: [] as string[],
    logoOption: '',
    mimicWebsite: '',
  });

  const t = translations[language as keyof typeof translations]; // Get current language translations

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => {
      const currentLanguages = prev.websiteLanguages;
      if (checked) {
        return { ...prev, websiteLanguages: [...currentLanguages, name] };
      } else {
        return { ...prev, websiteLanguages: currentLanguages.filter(lang => lang !== name) };
      }
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, logoOption: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you would typically send the data to a backend API or email service
    alert('Form submitted! Check the console for data.');
  };

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-gray-900" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        
        {/* Language Switcher */}
        <div className={`flex ${language === 'ar' ? 'justify-start' : 'justify-end'} mb-6 space-x-2`}>
          <button 
            onClick={() => setLanguage('ar')}
            className={`px-4 py-1 rounded text-sm ${language === 'ar' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            العربية
          </button>
          <button 
            onClick={() => setLanguage('fr')}
            className={`px-4 py-1 rounded text-sm ${language === 'fr' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Français
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={`px-4 py-1 rounded text-sm ${language === 'en' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            English
          </button>
        </div>
          
        {/* Form Title/Subtitle Section */}
        <div className={`text-${language === 'ar' ? 'right' : 'left'} mb-10`}>
          <h2 className="text-3xl font-bold mb-2">{t.tellUs}</h2>
          <p className="text-gray-600">{t.fillOut}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Business Activity */}
          <div>
            <label htmlFor="activity" className={`block text-sm font-medium text-gray-700 mb-1 text-${language === 'ar' ? 'right' : 'left'}`}>
              {t.activityLabel}
            </label>
            <textarea
              id="activity"
              name="activity"
              rows={4}
              value={formData.activity}
              onChange={handleInputChange}
              placeholder={t.activityPlaceholder}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Website Type */}
          <div>
            <label htmlFor="websiteType" className={`block text-sm font-medium text-gray-700 mb-1 text-${language === 'ar' ? 'right' : 'left'}`}>
              {t.websiteTypeLabel}
            </label>
            <select
              id="websiteType"
              name="websiteType"
              value={formData.websiteType}
              onChange={handleInputChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
              required
            >
              <option value="" disabled>{t.websiteTypePlaceholder}</option>
              {Object.entries(t.websiteTypeOptions).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>

          {/* Project Name */}
          <div>
            <label htmlFor="projectName" className={`block text-sm font-medium text-gray-700 mb-1 text-${language === 'ar' ? 'right' : 'left'}`}>
              {t.projectNameLabel}
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              placeholder={t.projectNamePlaceholder}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-1 text-${language === 'ar' ? 'right' : 'left'}`}>
                {t.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.emailPlaceholder}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className={`block text-sm font-medium text-gray-700 mb-1 text-${language === 'ar' ? 'right' : 'left'}`}>
                {t.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t.phonePlaceholder}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Website Language */}
          <div>
            <label className={`block text-sm font-medium text-gray-700 mb-2 text-${language === 'ar' ? 'right' : 'left'}`}>
              {t.websiteLanguageLabel}
            </label>
            <div className="space-y-2">
              {Object.entries(t.languages).map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <input
                    id={`lang-${key}`}
                    name={key} // Using key for checkbox name
                    type="checkbox"
                    checked={formData.websiteLanguages.includes(key)}
                    onChange={handleCheckboxChange}
                    className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded ${language === 'ar' ? 'ml-2' : 'mr-2'}`}
                  />
                  <label htmlFor={`lang-${key}`} className={`block text-sm text-gray-900 ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
                    {value}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Option */}
          <div>
            <label className={`block text-sm font-medium text-gray-700 mb-2 text-${language === 'ar' ? 'right' : 'left'}`}>
              {t.logoQuestion}
            </label>
            <div className="space-y-2">
              {Object.entries(t.logoOptions).map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <input
                    id={`logo-${key}`}
                    name="logoOption"
                    type="radio"
                    value={key}
                    checked={formData.logoOption === key}
                    onChange={handleRadioChange}
                    className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 ${language === 'ar' ? 'ml-2' : 'mr-2'}`}
                  />
                  <label htmlFor={`logo-${key}`} className={`block text-sm text-gray-900 ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
                    {value}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Mimic Website */}
          <div>
            <label htmlFor="mimicWebsite" className={`block text-sm font-medium text-gray-700 mb-1 text-${language === 'ar' ? 'right' : 'left'}`}>
              {t.mimicLabel}
            </label>
            <input
              type="text"
              id="mimicWebsite"
              name="mimicWebsite"
              value={formData.mimicWebsite}
              onChange={handleInputChange}
              placeholder={t.mimicPlaceholder}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-5">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 