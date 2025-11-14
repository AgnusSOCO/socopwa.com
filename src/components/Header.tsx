import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { goToContact } from '../utils/navigation';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('header.services'), href: '#services' },
    { name: t('header.successStories'), href: '#success' },
    { name: t('header.partners'), href: '#partners' },
    { name: t('header.certifications'), href: '#certifications' },
    { name: t('header.contact'), href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
          : 'bg-black/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-40 h-20 flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dunndxabk/image/upload/v1752686851/logo-white_tkyh0d.png" 
                alt="SOCO PWA Logo" 
                className="w-full h-full object-contain filter brightness-100"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={(e) => {
                  e.currentTarget.style.display = 'block';
                }}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                  lang === 'es'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>
            
            <button 
              onClick={() => goToContact({ source: 'header' })}
              className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              {t('common.getStarted')}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50 mt-2 pt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-white py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Language Toggle */}
            <div className="flex items-center space-x-2 mt-4 mb-2">
              <Globe size={18} className="text-gray-400" />
              <button
                onClick={() => setLang('en')}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-gray-300'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  lang === 'es'
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-gray-300'
                }`}
              >
                Español
              </button>
            </div>
            
            <button 
              onClick={() => {
                goToContact({ source: 'header_mobile' });
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg font-medium mt-4 transition-all duration-200"
            >
              {t('common.getStarted')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
