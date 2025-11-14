import React from 'react';
import { Shield, Award, Lock, Clock, CheckCircle, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TrustBadgeBar: React.FC = () => {
  const { t } = useLanguage();

  const badges = [
    {
      icon: Shield,
      title: t('trustBadges.iso27001'),
      description: t('trustBadges.iso27001Desc'),
    },
    {
      icon: CheckCircle,
      title: t('trustBadges.satisfaction'),
      description: t('trustBadges.satisfactionDesc'),
    },
    {
      icon: Lock,
      title: t('trustBadges.gdpr'),
      description: t('trustBadges.gdprDesc'),
    },
    {
      icon: HeadphonesIcon,
      title: t('trustBadges.support'),
      description: t('trustBadges.supportDesc'),
    },
    {
      icon: Award,
      title: t('trustBadges.certified'),
      description: t('trustBadges.certifiedDesc'),
    },
    {
      icon: Clock,
      title: t('trustBadges.delivery'),
      description: t('trustBadges.deliveryDesc'),
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mb-3 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
                  <badge.icon size={28} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{badge.title}</h3>
                <p className="text-gray-400 text-xs">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeBar;
