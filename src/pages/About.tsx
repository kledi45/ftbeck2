
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { aboutTranslations, getTranslation } from '@/utils/translations';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title={getTranslation(aboutTranslations, 'pageTitle', language)}
            center
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                {getTranslation(aboutTranslations, 'mainText', language)}
              </p>
              
              <h3 className="text-2xl font-semibold mb-6 text-ftbeck-anthracite">
                {getTranslation(aboutTranslations, 'strengthsTitle', language)}
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">
                    {getTranslation(aboutTranslations, 'strength1', language)}
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">
                    {getTranslation(aboutTranslations, 'strength2', language)}
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">
                    {getTranslation(aboutTranslations, 'strength3', language)}
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">
                    {getTranslation(aboutTranslations, 'strength4', language)}
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">
                    {getTranslation(aboutTranslations, 'strength5', language)}
                  </span>
                </li>
              </ul>
              
              <p className="mt-8 text-xl font-semibold text-ftbeck-anthracite">
                {getTranslation(aboutTranslations, 'madeInGermany', language)}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80" 
                  alt="Modern window design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80" 
                  alt="Premium glass roof" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-ftbeck-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {language === 'de' ? 'Unsere Werte' : 'Our Values'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-600 bg-opacity-30 p-8 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 14.25V11.625C19.5 9.76104 18.7598 7.97468 17.4393 6.65418C16.1187 5.33368 14.3324 4.59349 12.4687 4.59349C10.6051 4.59349 8.81878 5.33368 7.49818 6.65418C6.17768 7.97468 5.4375 9.76104 5.4375 11.625V14.25M19.5 14.25C19.5 14.4489 19.421 14.6397 19.2803 14.7803C19.1397 14.921 18.9489 15 18.75 15H6.1875C5.98858 15 5.79782 14.921 5.65719 14.7803C5.51657 14.6397 5.4375 14.4489 5.4375 14.25M19.5 14.25V18.75C19.5 18.9489 19.421 19.1397 19.2803 19.2803C19.1397 19.421 18.9489 19.5 18.75 19.5H6.1875C5.98858 19.5 5.79782 19.421 5.65719 19.2803C5.51657 19.1397 5.4375 18.9489 5.4375 18.75V14.25" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 12.75C9.95711 12.75 10.125 12.5821 10.125 12.375C10.125 12.1679 9.95711 12 9.75 12C9.54289 12 9.375 12.1679 9.375 12.375C9.375 12.5821 9.54289 12.75 9.75 12.75Z" fill="#1E88E5" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.1875 12.75C15.3946 12.75 15.5625 12.5821 15.5625 12.375C15.5625 12.1679 15.3946 12 15.1875 12C14.9804 12 14.8125 12.1679 14.8125 12.375C14.8125 12.5821 14.9804 12.75 15.1875 12.75Z" fill="#1E88E5" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'de' ? 'Qualität' : 'Quality'}
              </h3>
              <p>
                {language === 'de' 
                  ? 'Wir setzen höchste Standards bei Materialien, Verarbeitung und Service.' 
                  : 'We set the highest standards for materials, workmanship and service.'}
              </p>
            </div>
            
            <div className="bg-blue-600 bg-opacity-30 p-8 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 14.5C21 17.3284 21 18.7426 20.1213 19.6213C19.2426 20.5 17.8284 20.5 15 20.5H9C6.17157 20.5 4.75736 20.5 3.87868 19.6213C3 18.7426 3 17.3284 3 14.5M16.5 8V5.5C16.5 4.09554 16.5 3.39331 16.1629 2.88886C15.9089 2.52643 15.4736 2.09114 15.1111 1.83706C14.6067 1.5 13.9045 1.5 12.5 1.5H11.5C10.0955 1.5 9.39331 1.5 8.88886 1.83706C8.52643 2.09114 8.09114 2.52643 7.83706 2.88886C7.5 3.39331 7.5 4.09554 7.5 5.5V8M7.5 14.5L10.682 11.3179M16.5 8.5V14.5M7.5 8.5V14.5" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'de' ? 'Innovation' : 'Innovation'}
              </h3>
              <p>
                {language === 'de' 
                  ? 'Wir entwickeln ständig neue Lösungen für mehr Effizienz und Komfort.' 
                  : 'We are constantly developing new solutions for more efficiency and comfort.'}
              </p>
            </div>
            
            <div className="bg-blue-600 bg-opacity-30 p-8 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6.75H13.5M9 12H15M9 17.25H15M9 3.75V20.25M3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V4.5C21 4.08579 20.6642 3.75 20.25 3.75H3.75C3.33579 3.75 3 4.08579 3 4.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25Z" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'de' ? 'Nachhaltigkeit' : 'Sustainability'}
              </h3>
              <p>
                {language === 'de' 
                  ? 'Umweltbewusstsein und Ressourcenschonung stehen im Zentrum unseres Handelns.' 
                  : 'Environmental awareness and resource conservation are at the center of our actions.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
