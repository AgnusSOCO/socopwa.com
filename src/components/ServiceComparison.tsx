import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { goToContact } from '../utils/navigation';
import { trackEvent } from '../utils/analytics';

const ServiceComparison: React.FC = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      id: 'basic',
      name: t('serviceComparison.basicName'),
      price: t('serviceComparison.basicPrice'),
      description: t('serviceComparison.basicDesc'),
      badge: null,
      features: [
        { name: t('serviceComparison.feature1'), included: true },
        { name: t('serviceComparison.feature2'), included: true },
        { name: t('serviceComparison.feature3'), included: false },
        { name: t('serviceComparison.feature4'), included: false },
        { name: t('serviceComparison.feature5'), included: false },
        { name: t('serviceComparison.feature6'), included: false },
        { name: t('serviceComparison.feature7'), included: false },
        { name: t('serviceComparison.feature8'), included: false },
      ],
    },
    {
      id: 'professional',
      name: t('serviceComparison.professionalName'),
      price: t('serviceComparison.professionalPrice'),
      description: t('serviceComparison.professionalDesc'),
      badge: t('serviceComparison.mostPopular'),
      features: [
        { name: t('serviceComparison.feature1'), included: true },
        { name: t('serviceComparison.feature2'), included: true },
        { name: t('serviceComparison.feature3'), included: true },
        { name: t('serviceComparison.feature4'), included: true },
        { name: t('serviceComparison.feature5'), included: true },
        { name: t('serviceComparison.feature6'), included: false },
        { name: t('serviceComparison.feature7'), included: false },
        { name: t('serviceComparison.feature8'), included: false },
      ],
    },
    {
      id: 'enterprise',
      name: t('serviceComparison.enterpriseName'),
      price: t('serviceComparison.enterprisePrice'),
      description: t('serviceComparison.enterpriseDesc'),
      badge: t('serviceComparison.bestValue'),
      features: [
        { name: t('serviceComparison.feature1'), included: true },
        { name: t('serviceComparison.feature2'), included: true },
        { name: t('serviceComparison.feature3'), included: true },
        { name: t('serviceComparison.feature4'), included: true },
        { name: t('serviceComparison.feature5'), included: true },
        { name: t('serviceComparison.feature6'), included: true },
        { name: t('serviceComparison.feature7'), included: true },
        { name: t('serviceComparison.feature8'), included: true },
      ],
    },
  ];

  const handleSelectTier = (tierId: string) => {
    trackEvent('service_tier_selected', { tier: tierId });
    goToContact(`service_comparison_${tierId}`);
  };

  return (
    <section id="service-comparison" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t('serviceComparison.title')}</h2>
          <p className="text-xl text-gray-300">{t('serviceComparison.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                tier.badge
                  ? 'border-white/50 shadow-2xl shadow-white/10'
                  : 'border-gray-700/50'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star size={14} fill="currentColor" />
                    <span>{tier.badge}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                <div className="text-4xl font-bold text-white mb-1">{tier.price}</div>
                <p className="text-gray-400 text-sm">{t('serviceComparison.perMonth')}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {feature.included ? (
                      <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X size={20} className="text-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-white' : 'text-gray-600'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectTier(tier.id)}
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-200 ${
                  tier.badge
                    ? 'bg-white hover:bg-gray-200 text-black'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {t('serviceComparison.getStarted')}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">{t('serviceComparison.customMessage')}</p>
          <button
            onClick={() => {
              trackEvent('service_comparison_custom_click');
              goToContact('service_comparison_custom');
            }}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-8 rounded-lg font-semibold transition-all duration-200"
          >
            {t('serviceComparison.contactCustom')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
