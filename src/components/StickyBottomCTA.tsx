import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { goToContact, openExternalLink } from '../utils/navigation';
import { CALENDLY_URL, WHATSAPP_PHONE } from '../config/constants';
import { trackEvent } from '../utils/analytics';

const StickyBottomCTA: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (window.innerWidth < 768) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    trackEvent('sticky_cta_whatsapp_click', { location: 'bottom_bar' });
    const message = encodeURIComponent(t('stickyBottomCTA.whatsappMessage'));
    const whatsappNumber = WHATSAPP_PHONE.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    trackEvent('sticky_cta_phone_click', { location: 'bottom_bar' });
    window.location.href = `tel:${WHATSAPP_PHONE}`;
  };

  const handleConsultationClick = () => {
    trackEvent('sticky_cta_consultation_click', { location: 'bottom_bar' });
    openExternalLink(CALENDLY_URL, 'sticky_bottom_cta');
  };

  const handleContactClick = () => {
    trackEvent('sticky_cta_contact_click', { location: 'bottom_bar' });
    goToContact('sticky_bottom_cta');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-white/20 shadow-2xl backdrop-blur-lg animate-slide-up">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="text-white">
            <p className="text-lg font-bold">{t('stickyBottomCTA.title')}</p>
            <p className="text-sm text-gray-300">{t('stickyBottomCTA.subtitle')}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePhoneClick}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 border border-white/20"
            aria-label={t('stickyBottomCTA.callNow')}
          >
            <Phone size={18} />
            <span className="text-sm font-medium">{t('stickyBottomCTA.callNow')}</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200"
            aria-label={t('stickyBottomCTA.whatsapp')}
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">{t('stickyBottomCTA.whatsapp')}</span>
          </button>

          <button
            onClick={handleConsultationClick}
            className="flex items-center space-x-2 px-6 py-2 bg-white hover:bg-gray-200 text-black rounded-lg transition-all duration-200 font-semibold shadow-lg"
            aria-label={t('stickyBottomCTA.freeConsultation')}
          >
            <Calendar size={18} />
            <span>{t('stickyBottomCTA.freeConsultation')}</span>
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <button
          onClick={handlePhoneClick}
          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 border border-white/20 mr-2"
          aria-label={t('stickyBottomCTA.call')}
        >
          <Phone size={18} />
          <span className="text-sm font-medium">{t('stickyBottomCTA.call')}</span>
        </button>

        <button
          onClick={handleWhatsAppClick}
          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 mr-2"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="text-sm font-medium">WhatsApp</span>
        </button>

        <button
          onClick={handleContactClick}
          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-white hover:bg-gray-200 text-black rounded-lg transition-all duration-200 font-semibold"
          aria-label={t('stickyBottomCTA.contact')}
        >
          <Calendar size={18} />
          <span className="text-sm font-medium">{t('stickyBottomCTA.contact')}</span>
        </button>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
