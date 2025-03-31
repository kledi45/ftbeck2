import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { footerTranslations, getTranslation } from '@/utils/translations';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-ftbeck-anthracite text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {getTranslation(footerTranslations, 'companyInfo', language)}
            </h3>
            <p className="mb-2">
              {getTranslation(footerTranslations, 'address', language)}
            </p>
            <p className="mb-2">
              <span className="font-medium">Email:</span> info@ftbeck.de
            </p>
            <p>
              <span className="font-medium">
                {getTranslation(footerTranslations, 'phoneLabel', language)}:
              </span>{' '}
              +49 123 456 7890
            </p>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {getTranslation(footerTranslations, 'downloads', language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  {getTranslation(footerTranslations, 'careAndInstallation', language)}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  {getTranslation(footerTranslations, 'productPerformancePass', language)}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  {getTranslation(footerTranslations, 'catalog', language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {getTranslation(footerTranslations, 'legalInfo', language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  {getTranslation(footerTranslations, 'privacyPolicy', language)}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  {getTranslation(footerTranslations, 'imprint', language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {getTranslation(footerTranslations, 'newsletter', language)}
            </h3>
            <div className="flex">
              <Input
                type="email"
                placeholder={getTranslation(footerTranslations, 'newsletterPlaceholder', language)}
                className="bg-gray-700 text-white border-gray-600 rounded-r-none focus-visible:ring-ftbeck-blue"
              />
              <Button className="bg-ftbeck-blue hover:bg-blue-700 rounded-l-none">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            {getTranslation(footerTranslations, 'copyright', language)}
          </p>
          <p>
            Powered by{' '}
            <a
              id="powered-by"
              href="https://bytetech-kosovo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-blue-500"
            >
              ByteTech
            </a>  
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
