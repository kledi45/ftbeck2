
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-1">
      <Button 
        variant={language === 'de' ? 'default' : 'outline'} 
        size="sm" 
        className="px-2 h-8"
        onClick={() => setLanguage('de')}
      >
        DE
      </Button>
      <Button 
        variant={language === 'en' ? 'default' : 'outline'} 
        size="sm" 
        className="px-2 h-8"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
