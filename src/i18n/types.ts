export type Lang = 'en' | 'es';

export interface Translations {
  common: {
    getStarted: string;
    learnMore: string;
    contactUs: string;
    scheduleConsultation: string;
    getQuote: string;
    bookDemo: string;
    readMore: string;
    viewAll: string;
  };
  header: {
    services: string;
    successStories: string;
    partners: string;
    certifications: string;
    contact: string;
  };
  hero: {
    transformYour: string;
    rotatingTexts: string[];
    empoweringBusinesses: string;
    nextGenSolutions: string;
  };
  footer: {
    quickLinks: string;
    contactInfo: string;
    followUs: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
  };
}
