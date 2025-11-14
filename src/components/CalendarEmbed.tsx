import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CALENDLY_URL } from '../config/constants';
import { trackEvent } from '../utils/analytics';

const CalendarEmbed: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    trackEvent('calendar_embed_viewed');

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendar" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mb-4">
            <Calendar size={32} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{t('calendarEmbed.title')}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('calendarEmbed.subtitle')}
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-700/50">
          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            {t('calendarEmbed.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendarEmbed;
