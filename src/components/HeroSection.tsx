
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { homeTranslations, getTranslation } from '@/utils/translations';

interface HeroSectionProps {
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  imageUrl = "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80" 
}) => {
  const { language } = useLanguage();
  
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {getTranslation(homeTranslations, 'heroTitle', language)}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {getTranslation(homeTranslations, 'heroSubtitle', language)}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/about" 
              className="bg-ftbeck-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {getTranslation(homeTranslations, 'ctaDiscover', language)}
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-ftbeck-anthracite hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              {getTranslation(homeTranslations, 'ctaContact', language)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
