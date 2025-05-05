
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactTranslations, getTranslation } from '@/utils/translations';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title={getTranslation(contactTranslations, 'pageTitle', language)}
            center
          />
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-ftbeck-anthracite text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">
                {getTranslation(contactTranslations, 'contactInfo', language)}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">
                      {getTranslation(contactTranslations, 'emailLabel', language)}
                    </p>
                    <a href="mailto:info@ftbeck.com" className="text-gray-300 hover:text-white transition-colors">
                      info@ftbeck.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">
                      {getTranslation(contactTranslations, 'phoneLabel', language)}
                    </p>
                    <a href="tel:+491234567890" className="text-gray-300 hover:text-white transition-colors">
                      +49 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">
                      {getTranslation(contactTranslations, 'addressLabel', language)}
                    </p>
                    <p className="text-gray-300">
                      Steinbisstraße 3 <br />
                      73061 Ebersbach an der Fils
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-3 text-ftbeck-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">
                      {language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}
                    </p>
                    <p className="text-gray-300">
                      {getTranslation(contactTranslations, 'openingHours', language)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-6 text-ftbeck-anthracite">
                {getTranslation(contactTranslations, 'formTitle', language)}
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.9769704899145!2d9.514698776805576!3d48.7274343079273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799be4f25aba37d%3A0x90d77fd8c26f1dfa!2sSteinbisstra%C3%9Fe%203%2C%2073061%20Ebersbach%20an%20der%20Fils%2C%20Germany!5e0!3m2!1sen!2sus!4v1703180142227!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="F&T Beck GmbH location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
