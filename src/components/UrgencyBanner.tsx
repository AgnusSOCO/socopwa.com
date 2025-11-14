import React, { useState, useEffect } from 'react';
import { Clock, X, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { goToContact } from '../utils/navigation';
import { trackEvent } from '../utils/analytics';

const UrgencyBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const dismissed = sessionStorage.getItem('urgencyBannerDismissed');
    if (dismissed) {
      setIsVisible(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('urgencyBannerDismissed', 'true');
    trackEvent('urgency_banner_dismissed');
  };

  const handleCTAClick = () => {
    trackEvent('urgency_banner_cta_click');
    goToContact('urgency_banner');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white shadow-lg animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="hidden md:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
              <Zap size={20} fill="currentColor" />
            </div>
            
            <div className="flex-1">
              <p className="font-bold text-sm md:text-base">
                {t('urgencyBanner.message')}
              </p>
              <p className="text-xs md:text-sm opacity-90">
                {t('urgencyBanner.submessage')}
              </p>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-2">
                <Clock size={18} />
                <div className="text-center">
                  <div className="font-bold text-lg md:text-xl">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs opacity-75">{t('urgencyBanner.timeLeft')}</div>
                </div>
              </div>

              <button
                onClick={handleCTAClick}
                className="hidden md:block bg-white text-red-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                {t('urgencyBanner.cta')}
              </button>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="ml-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-3">
          <button
            onClick={handleCTAClick}
            className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-2 px-4 rounded-lg transition-all duration-200"
          >
            {t('urgencyBanner.cta')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
