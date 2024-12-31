import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { ServicesDropdown } from './ServicesDropdown';
import { MobileNav } from './MobileNav';

const CALENDAR_URL = 'https://cal.com/juan-carlos-r-cordero-cflxoe/soco-pwa-consultation-meeting';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const getLinkStyles = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white hover:text-blue-200';
    }
    return 'text-gray-700 hover:text-blue-600';
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Logo variant={isHomePage && !isScrolled ? 'light' : 'dark'} />

            <div className="hidden md:flex items-center space-x-8">
              <ServicesDropdown isHomePage={isHomePage} isScrolled={isScrolled} />
              
              <Link to="/about" className={`font-medium transition-colors ${getLinkStyles()}`}>
                About
              </Link>
              
              <Link to="/careers" className={`font-medium transition-colors ${getLinkStyles()}`}>
                Careers
              </Link>
              
              <Link to="/blog" className={`font-medium transition-colors ${getLinkStyles()}`}>
                Blog
              </Link>
              
              <Link to="/contact" className={`font-medium transition-colors ${getLinkStyles()}`}>
                Contact
              </Link>

              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium px-4 py-2 rounded-lg transition-colors ${
                  isHomePage && !isScrolled
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Book a Consultation
              </a>
            </div>

            <button
              className={`md:hidden p-2 transition-colors rounded-lg ${
                isHomePage && !isScrolled ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}