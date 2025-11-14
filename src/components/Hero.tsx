import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { goToContact } from '../utils/navigation';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = t('hero.rotatingTexts');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t('hero.transformYour')}
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 h-20 flex items-center justify-center">
              <span
                key={currentTextIndex}
                className="text-white animate-text-rotate"
              >
                {rotatingTexts[currentTextIndex]}
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
              {t('hero.empoweringBusinesses')}
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-white max-w-3xl mx-auto mb-12">
              {t('hero.nextGenSolutions')}
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
            <button 
              onClick={() => goToContact({ source: 'hero' })}
              className="group relative overflow-hidden bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
                {t('common.getStarted')}
              </span>
              <div className="absolute right-2 top-2 bottom-2 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-black/15 group-hover:w-[calc(100%-1rem)]">
                <ChevronRight size={20} strokeWidth={2} className="text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
