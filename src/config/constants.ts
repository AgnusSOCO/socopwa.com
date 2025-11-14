/**
 * Application Configuration Constants
 * 
 * Centralized configuration for URLs, feature flags, and environment variables.
 */

export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://cal.com/socopwa/soco-pwa-consultation-meeting';
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'juan@socopwa.com';
export const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '+525512345678'; // Placeholder - update with real number

export const GTM_ID = import.meta.env.VITE_GTM_ID || '';
export const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-XKE7FPJZBL';
export const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || 'u5owg3ayl1';

export const ANALYTICS_ENABLED = import.meta.env.VITE_ANALYTICS_ENABLED !== 'false';

export const PARTNER_URLS: Record<string, string> = {
  'Microsoft': 'https://www.microsoft.com',
  'Cisco': 'https://www.cisco.com',
  'Dell Technologies': 'https://www.dell.com',
  'VMware': 'https://www.vmware.com',
  'Palo Alto Networks': 'https://www.paloaltonetworks.com',
  'Fortinet': 'https://www.fortinet.com',
  'HPE': 'https://www.hpe.com',
  'Verkada': 'https://www.verkada.com'
};

export const HEADER_HEIGHT = 64;
export const SCROLL_OFFSET = 80;
