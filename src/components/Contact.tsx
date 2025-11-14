import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { openExternalLink } from '../utils/navigation';
import { CALENDLY_URL } from '../config/constants';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: prefilledService,
          source: new URLSearchParams(window.location.search).get('source') || 'direct',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setPrefilledService('');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handlePrefillService = (event: CustomEvent) => {
      const { service } = event.detail;
      setPrefilledService(service);
    };

    window.addEventListener('prefillService', handlePrefillService as EventListener);

    return () => {
      window.removeEventListener('prefillService', handlePrefillService as EventListener);
    };
  }, []);

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-2xl text-white font-semibold">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {prefilledService && (
              <div className="mb-6 p-4 bg-white/10 border border-white/20 rounded-lg">
                <p className="text-white text-sm">
                  <span className="font-semibold">{t('contact.interestedIn')}</span> {prefilledService}
                </p>
              </div>
            )}
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 text-sm font-semibold">
                  {t('contact.successMessage')}
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm font-semibold">
                  {t('contact.errorMessage')} {errorMessage}
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.firstName')} {t('contact.form.required')}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.placeholders.firstName')}
                    className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.lastName')} {t('contact.form.required')}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.placeholders.lastName')}
                    className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.email')} {t('contact.form.required')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.placeholders.email')}
                  className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.placeholders.phone')}
                  className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.company')} {t('contact.form.required')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.placeholders.company')}
                  className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.message')} {t('contact.form.required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.placeholders.message')}
                  className="w-full px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none resize-none transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>{t('contact.form.sending')}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('contact.form.sendMessage')}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{t('contact.info.visitUs')}</h4>
                    <p className="text-gray-300" style={{ whiteSpace: 'pre-line' }}>
                      {t('contact.info.address')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{t('contact.info.emailUs')}</h4>
                    <p className="text-gray-300">{t('contact.info.email')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h4 className="text-xl font-bold text-white mb-4">{t('contact.cta.title')}</h4>
              <p className="text-gray-300 mb-6">
                {t('contact.cta.description')}
              </p>
              <button 
                onClick={() => openExternalLink(CALENDLY_URL, 'contact_schedule')}
                className="bg-white hover:bg-gray-200 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                {t('common.scheduleConsultation')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
