/**
 * Navigation Utilities
 * 
 * Centralized navigation functions for smooth scrolling, external links,
 * and contact form interactions.
 */

import { SCROLL_OFFSET } from '../config/constants';

export interface ContactOptions {
  service?: string;
  source?: string;
}

/**
 * Smooth scroll to a section by ID with offset for fixed header
 */
export const scrollToSection = (sectionId: string, offset: number = SCROLL_OFFSET): void => {
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Navigate to contact section with optional service and source tracking
 */
export const goToContact = (options?: ContactOptions): void => {
  const { service, source } = options || {};

  if (source) {
    trackEvent('cta_click', {
      source,
      destination: 'contact',
      service: service || 'none'
    });
  }

  if (service) {
    const url = new URL(window.location.href);
    url.searchParams.set('service', service);
    window.history.pushState({}, '', url.toString());
  }

  scrollToSection('contact');

  if (service) {
    window.dispatchEvent(new CustomEvent('prefillService', { detail: { service } }));
  }
};

/**
 * Open external link in new tab with security best practices
 */
export const openExternalLink = (url: string, trackingSource?: string): void => {
  if (!url) {
    console.warn('No URL provided to openExternalLink');
    return;
  }

  if (trackingSource) {
    trackEvent('external_link_click', {
      source: trackingSource,
      url
    });
  }

  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Navigate to services section and open specific service modal
 */
export const goToService = (serviceSlug: string, source?: string): void => {
  if (source) {
    trackEvent('service_navigation', {
      source,
      service: serviceSlug
    });
  }

  const url = new URL(window.location.href);
  url.searchParams.set('service', serviceSlug);
  window.history.pushState({}, '', url.toString());

  scrollToSection('services');
};

/**
 * Track analytics event via Google Tag Manager / GA4
 */
export const trackEvent = (eventName: string, properties?: Record<string, unknown>): void => {
  const analyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED !== 'false';
  
  if (!analyticsEnabled) {
    return;
  }

  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, properties);
  }

  interface WindowWithDataLayer extends Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: string, eventName: string, properties?: Record<string, unknown>) => void;
  }

  const win = window as unknown as WindowWithDataLayer;

  if (typeof window !== 'undefined' && win.dataLayer) {
    win.dataLayer.push({
      event: eventName,
      ...properties
    });
  }
  else if (typeof window !== 'undefined' && win.gtag) {
    win.gtag('event', eventName, properties);
  }
};

/**
 * Handle booking demo - opens Calendly or scrolls to contact
 */
export const handleBookDemo = (bookingUrl: string, source?: string): void => {
  if (source) {
    trackEvent('demo_book_click', {
      source,
      url: bookingUrl
    });
  }

  if (bookingUrl.startsWith('#')) {
    const sectionId = bookingUrl.substring(1);
    scrollToSection(sectionId);
  } else {
    openExternalLink(bookingUrl, source);
  }
};

/**
 * Open WhatsApp chat with pre-filled message
 */
export const goToWhatsApp = (options?: { service?: string; source?: string; message?: string }): void => {
  const { service, source, message } = options || {};
  
  if (source) {
    trackEvent('whatsapp_click', {
      source,
      service: service || 'none'
    });
  }

  import('../config/constants').then(({ WHATSAPP_PHONE }) => {
    const defaultMessage = service 
      ? `Hola, me interesa ${service}` 
      : 'Hola, me interesa conocer más sobre sus servicios';
    
    const finalMessage = message || defaultMessage;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(finalMessage)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
};
