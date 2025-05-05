
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { navTranslations, getTranslation } from '@/utils/translations';
import { Menu, X } from 'lucide-react';

// SVG logo component
const Logo: React.FC = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" rx="5" fill="white"/>
    <path d="M10 10H40V40H10V10Z" stroke="#333333" strokeWidth="2"/>
    <path d="M25 10V40" stroke="#333333" strokeWidth="2"/>
    <path d="M10 25H40" stroke="#333333" strokeWidth="2"/>
    <rect x="25" y="25" width="15" height="15" fill="#1E88E5" fillOpacity="0.5"/>
  </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();

  // Track scrolling to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: getTranslation(navTranslations, 'home', language), path: '/ftbeck2' },
    { label: getTranslation(navTranslations, 'about', language), path: '/about' },
    { label: getTranslation(navTranslations, 'contact', language), path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/ftbeck2/" className="flex items-center space-x-2">
          <Logo />
          <span className="font-bold text-xl text-ftbeck-anthracite">F&T Beck GmbH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-ftbeck-blue transition-colors ${
                  location.pathname === item.path ? 'text-ftbeck-blue font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-ftbeck-blue py-2 transition-colors ${
                  location.pathname === item.path ? 'text-ftbeck-blue font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
