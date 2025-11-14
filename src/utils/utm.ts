/**
 * UTM Parameter Tracking and Personalization
 * 
 * Captures and stores UTM parameters from URL for Google Ads attribution
 * and personalization.
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_id?: string;
  timestamp?: number;
}

const UTM_STORAGE_KEY = 'socopwa_utm_params';
const UTM_EXPIRY_DAYS = 30;

/**
 * Parse UTM parameters from URL query string
 */
export const parseUTMParams = (url: string = window.location.href): UTMParams | null => {
  try {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    
    const utmParams: UTMParams = {};
    let hasUTM = false;
    
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'];
    utmKeys.forEach(key => {
      const value = params.get(key);
      if (value) {
        utmParams[key as keyof UTMParams] = value;
        hasUTM = true;
      }
    });
    
    if (hasUTM) {
      utmParams.timestamp = Date.now();
      return utmParams;
    }
    
    return null;
  } catch (error) {
    console.error('Error parsing UTM parameters:', error);
    return null;
  }
};

/**
 * Store UTM parameters in localStorage
 */
export const storeUTMParams = (params: UTMParams): void => {
  try {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params));
  } catch (error) {
    console.error('Error storing UTM parameters:', error);
  }
};

/**
 * Retrieve stored UTM parameters from localStorage
 */
export const getStoredUTMParams = (): UTMParams | null => {
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    if (!stored) return null;
    
    const params: UTMParams = JSON.parse(stored);
    
    if (params.timestamp) {
      const expiryTime = params.timestamp + (UTM_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
      if (Date.now() > expiryTime) {
        localStorage.removeItem(UTM_STORAGE_KEY);
        return null;
      }
    }
    
    return params;
  } catch (error) {
    console.error('Error retrieving UTM parameters:', error);
    return null;
  }
};

/**
 * Initialize UTM tracking on page load
 */
export const initUTMTracking = (): UTMParams | null => {
  const urlParams = parseUTMParams();
  if (urlParams) {
    storeUTMParams(urlParams);
    return urlParams;
  }
  
  return getStoredUTMParams();
};

/**
 * Get personalization data based on UTM parameters
 */
export const getPersonalization = (utmParams: UTMParams | null): {
  isGoogleAds: boolean;
  campaign?: string;
  source?: string;
  medium?: string;
} => {
  if (!utmParams) {
    return { isGoogleAds: false };
  }
  
  const isGoogleAds = 
    utmParams.utm_source === 'google' || 
    utmParams.utm_medium === 'cpc' ||
    utmParams.utm_source === 'google_ads';
  
  return {
    isGoogleAds,
    campaign: utmParams.utm_campaign,
    source: utmParams.utm_source,
    medium: utmParams.utm_medium,
  };
};

/**
 * Clear stored UTM parameters
 */
export const clearUTMParams = (): void => {
  try {
    localStorage.removeItem(UTM_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing UTM parameters:', error);
  }
};
