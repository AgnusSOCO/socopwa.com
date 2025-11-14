import React from 'react';
import DemoWidget from './DemoWidget';
import { goToService, openExternalLink } from '../utils/navigation';
import { CALENDLY_URL } from '../config/constants';
import { useLanguage } from '../context/LanguageContext';

const DemoSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            {t('demoSection.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('demoSection.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('demoSection.description')}
          </p>
        </div>

        {/* Demo Widget Container */}
        <div className="flex justify-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <DemoWidget
              companyName="SOCO PWA"
              demoAudioUrl="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
              bookingUrl={CALENDLY_URL}
            />
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            {t('demoSection.cta.question')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => openExternalLink(CALENDLY_URL, 'demo_section_consultation')}
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('common.scheduleConsultation')}
            </button>
            <button 
              onClick={() => goToService('ai-integration', 'demo_section_learn_more')}
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300"
            >
              {t('demoSection.cta.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
