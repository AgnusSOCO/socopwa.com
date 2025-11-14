import React, { useState, useEffect } from 'react';
import { X, Gift, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent, trackFormStart, trackFormComplete } from '../utils/analytics';

const ExitIntentPopup: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'ai-integration',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        trackEvent('exit_intent_popup_shown', { trigger: 'mouse_leave' });
      }
    };

    const timer = setTimeout(() => {
      if (!hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        trackEvent('exit_intent_popup_shown', { trigger: 'time_based' });
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    trackEvent('exit_intent_popup_closed', { converted: isSuccess });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackFormStart('exit_intent_lead_magnet');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          message: `Exit Intent Lead Magnet - Interest: ${formData.interest}`,
          source: 'exit_intent_popup',
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        trackFormComplete('exit_intent_lead_magnet');
        trackEvent('exit_intent_conversion', { interest: formData.interest });
        
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Exit intent form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mb-4">
                <Gift size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {t('exitIntentPopup.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('exitIntentPopup.subtitle')}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start space-x-2">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold text-sm">{t('exitIntentPopup.benefit1Title')}</p>
                  <p className="text-gray-400 text-xs">{t('exitIntentPopup.benefit1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold text-sm">{t('exitIntentPopup.benefit2Title')}</p>
                  <p className="text-gray-400 text-xs">{t('exitIntentPopup.benefit2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold text-sm">{t('exitIntentPopup.benefit3Title')}</p>
                  <p className="text-gray-400 text-xs">{t('exitIntentPopup.benefit3Desc')}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('exitIntentPopup.namePlaceholder')}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('exitIntentPopup.emailPlaceholder')}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
                />
              </div>
              
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                placeholder={t('exitIntentPopup.companyPlaceholder')}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
              />

              <select
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-white focus:outline-none"
              >
                <option value="ai-integration" className="bg-gray-900">{t('exitIntentPopup.interestAI')}</option>
                <option value="cybersecurity" className="bg-gray-900">{t('exitIntentPopup.interestSecurity')}</option>
                <option value="cloud-services" className="bg-gray-900">{t('exitIntentPopup.interestCloud')}</option>
                <option value="general" className="bg-gray-900">{t('exitIntentPopup.interestGeneral')}</option>
              </select>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? t('exitIntentPopup.claiming') : t('exitIntentPopup.claimOffer')}
              </button>
            </form>

            <p className="text-center text-gray-400 text-xs mt-4">
              {t('exitIntentPopup.noSpam')}
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4">
              <CheckCircle size={48} className="text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {t('exitIntentPopup.successTitle')}
            </h3>
            <p className="text-gray-300">
              {t('exitIntentPopup.successMessage')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
