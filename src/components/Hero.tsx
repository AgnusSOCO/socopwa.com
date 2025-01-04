// UPDATED THE HERO SECTION - ADDED FUNCTIONALITY FOR THE BUTTONS
import React from 'react';
import type { Language } from '../types';
import { Button } from './ui/Button';
import { GradientText } from './decorative/GradientText';
import { Section } from './ui/Section';
import { scrollToSection } from '../utils/scroll';

interface Props {
  language: Language;
}

export function Hero({ language }: Props) {
  return (
    <Section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="block mb-4 text-white opacity-90">
            {language === 'en' 
              ? 'Securing Tomorrow'
              : 'Asegurando el Mañana'}
          </span>
          <GradientText>
            {language === 'en' 
              ? 'Innovating Today'
              : 'Innovando Hoy'}
          </GradientText>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {language === 'en'
            ? 'Where cybersecurity meets innovation. Empowering businesses with next-generation security solutions and cutting-edge technology.'
            : 'Donde la ciberseguridad se encuentra con la innovación. Potenciando empresas con soluciones de seguridad de próxima generación y tecnología de vanguardia.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('services')}
            variant="primary"
            size="lg"
          >
            {language === 'en' ? 'Explore Our Services' : 'Explorar Servicios'}
          </Button>
          <Button
            onClick={() => scrollToSection('about')}
            variant="outline"
            size="lg"
          >
            {language === 'en' ? 'Learn More' : 'Más Información'}
          </Button>
        </div>
      </div>
    </Section>
  );
}
