interface EventParams {
  [key: string]: string | number | boolean;
}

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: EventParams | Record<string, string>) => void;
  }
}

export const trackEvent = (eventName: string, params?: EventParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics Event]', eventName, params);
  }
};

export const trackPageView = (path: string, title?: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
    });
  }
};

export const trackConversion = (conversionType: string, value?: number): void => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 0,
  });
};

export const trackFormStart = (formName: string): void => {
  trackEvent('form_start', { form_name: formName });
};

export const trackFormComplete = (formName: string): void => {
  trackEvent('form_complete', { form_name: formName });
};

export const trackButtonClick = (buttonName: string, location: string): void => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};

export const trackScrollDepth = (depth: number): void => {
  trackEvent('scroll_depth', { depth_percentage: depth });
};

export const trackTimeOnPage = (seconds: number): void => {
  trackEvent('time_on_page', { seconds: seconds });
};
