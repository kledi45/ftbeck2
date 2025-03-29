
import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { homeTranslations, getTranslation } from '@/utils/translations';
import { Check } from 'lucide-react';

const Home: React.FC = () => {
  const { language } = useLanguage();

  // Icons for product cards
  const windowIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M4 20H36" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M20 4V36" stroke="#1E88E5" strokeWidth="2"/>
    </svg>
  );

  const doorIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M26 20H30" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 4H36V36H4V4Z" stroke="#1E88E5" strokeWidth="2"/>
    </svg>
  );

  const slidingIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M15 4V36" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M25 4V36" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M4 20H36" stroke="#1E88E5" strokeWidth="2"/>
    </svg>
  );

  const shutterIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M4 8H36" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M4 16H36" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M4 24H36" stroke="#1E88E5" strokeWidth="2"/>
      <path d="M4 32H36" stroke="#1E88E5" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title={getTranslation(homeTranslations, 'aboutSectionTitle', language)} 
            center
          />
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center text-gray-600">
              {getTranslation(homeTranslations, 'aboutSectionContent', language)}
            </p>
          </div>
        </div>
      </section>

      {/* Product Worlds Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title={getTranslation(homeTranslations, 'productWorldsTitle', language)} 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ProductCard 
              title={getTranslation(homeTranslations, 'pvcWindowsTitle', language)}
              description={getTranslation(homeTranslations, 'pvcWindowsDesc', language)}
              icon={windowIcon}
            />
            <ProductCard 
              title={getTranslation(homeTranslations, 'aluWindowsTitle', language)}
              description={getTranslation(homeTranslations, 'aluWindowsDesc', language)}
              icon={doorIcon}
            />
            <ProductCard 
              title={getTranslation(homeTranslations, 'slidingSystemsTitle', language)}
              description={getTranslation(homeTranslations, 'slidingSystemsDesc', language)}
              icon={slidingIcon}
            />
            <ProductCard 
              title={getTranslation(homeTranslations, 'shuttersTitle', language)}
              description={getTranslation(homeTranslations, 'shuttersDesc', language)}
              icon={shutterIcon}
            />
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title={getTranslation(homeTranslations, 'efficiencyTitle', language)}
              />
              <p className="text-lg text-gray-600 mb-6">
                {getTranslation(homeTranslations, 'efficiencyDesc', language)}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="mr-2 text-ftbeck-blue flex-shrink-0 mt-1" />
                  <span>{getTranslation(homeTranslations, 'efficiencyPoint1', language)}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-ftbeck-blue flex-shrink-0 mt-1" />
                  <span>{getTranslation(homeTranslations, 'efficiencyPoint2', language)}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-ftbeck-blue flex-shrink-0 mt-1" />
                  <span>{getTranslation(homeTranslations, 'efficiencyPoint3', language)}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-ftbeck-blue flex-shrink-0 mt-1" />
                  <span>{getTranslation(homeTranslations, 'efficiencyPoint4', language)}</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                {getTranslation(homeTranslations, 'efficiencyFooter', language)}
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80" 
                alt="Energy efficient window" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 md:py-24 bg-ftbeck-anthracite text-white">
        <div className="container-custom">
          <SectionHeading 
            title={getTranslation(homeTranslations, 'qualityTitle', language)}
            center
            className="text-white"
          />
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
            {getTranslation(homeTranslations, 'qualityDesc', language)}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-ftbeck-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{getTranslation(homeTranslations, 'qualityPoint1', language)}</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-ftbeck-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{getTranslation(homeTranslations, 'qualityPoint2', language)}</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-ftbeck-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{getTranslation(homeTranslations, 'qualityPoint3', language)}</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-ftbeck-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V16.01M12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12ZM12 8V7.99M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{getTranslation(homeTranslations, 'qualityPoint4', language)}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
