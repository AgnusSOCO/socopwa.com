import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-48 h-24 flex items-center justify-center">
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
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>{t('footer.email')}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.aiIntegration')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.fintech')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.cybersecurity')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.cloud')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#success" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.successStories')}</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.partners')}</a></li>
              <li><a href="#certifications" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.certifications')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
