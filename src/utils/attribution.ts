/**
 * Attribution Tracking Utility
 * 
 * Captures and persists UTM parameters, gclid, fbclid for marketing attribution.
 */

interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  timestamp?: number;
}

const ATTRIBUTION_KEY = 'soco_attribution';
const ATTRIBUTION_EXPIRY_DAYS = 30;

/**
 * Capture attribution parameters from URL and store in localStorage
 */
export const captureAttributionFromUrl = (): void => {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const attribution: AttributionData = {};

  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');
  const utmTerm = params.get('utm_term');
  const utmContent = params.get('utm_content');
  const gclid = params.get('gclid');
  const fbclid = params.get('fbclid');

  if (utmSource || utmMedium || utmCampaign || utmTerm || utmContent || gclid || fbclid) {
    if (utmSource) attribution.utm_source = utmSource;
    if (utmMedium) attribution.utm_medium = utmMedium;
    if (utmCampaign) attribution.utm_campaign = utmCampaign;
    if (utmTerm) attribution.utm_term = utmTerm;
    if (utmContent) attribution.utm_content = utmContent;
    if (gclid) attribution.gclid = gclid;
    if (fbclid) attribution.fbclid = fbclid;
    attribution.timestamp = Date.now();

    try {
      localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
    } catch (error) {
      console.error('Failed to store attribution data:', error);
    }
  }
};

/**
 * Get stored attribution data
 */
export const getAttribution = (): AttributionData | null => {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(ATTRIBUTION_KEY);
    if (!stored) return null;

    const attribution: AttributionData = JSON.parse(stored);
    
    if (attribution.timestamp) {
      const expiryTime = attribution.timestamp + (ATTRIBUTION_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
      if (Date.now() > expiryTime) {
        localStorage.removeItem(ATTRIBUTION_KEY);
        return null;
      }
    }

    return attribution;
  } catch (error) {
    console.error('Failed to retrieve attribution data:', error);
    return null;
  }
};

/**
 * Clear stored attribution data
 */
export const clearAttribution = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(ATTRIBUTION_KEY);
  } catch (error) {
    console.error('Failed to clear attribution data:', error);
  }
};
