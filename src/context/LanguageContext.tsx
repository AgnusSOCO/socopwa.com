import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '../i18n/en';
import { es } from '../i18n/es';
import type { Lang } from '../i18n/types';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string | string[] | Record<string, unknown>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { en, es };

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    
    const storedLang = localStorage.getItem('lang') as Lang | null;
    if (storedLang && (storedLang === 'en' || storedLang === 'es')) {
      setLangState(storedLang);
      return;
    }

    const locationHint = (window as Record<string, unknown>).__LOCATION__ as string | undefined;
    if (locationHint === 'mexico-city') {
      setLangState('es');
      return;
    }
    if (locationHint === 'las-vegas') {
      setLangState('en');
      return;
    }

    const browserLang = navigator.language || (navigator as Record<string, unknown>).userLanguage as string | undefined;
    if (browserLang && browserLang.toLowerCase().startsWith('es')) {
      setLangState('es');
      return;
    }

    setLangState('en');
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (key: string): string | string[] | Record<string, unknown> => {
    const keys = key.split('.');
    let value: string | string[] | Record<string, unknown> = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k] as string | string[] | Record<string, unknown>;
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
