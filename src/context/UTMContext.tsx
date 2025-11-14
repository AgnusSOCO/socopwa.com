import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { UTMParams, initUTMTracking, getPersonalization } from '../utils/utm';

interface UTMContextType {
  utmParams: UTMParams | null;
  isGoogleAds: boolean;
  campaign?: string;
  source?: string;
  medium?: string;
}

const UTMContext = createContext<UTMContextType | undefined>(undefined);

export const UTMProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [utmParams, setUtmParams] = useState<UTMParams | null>(null);
  const [personalization, setPersonalization] = useState({
    isGoogleAds: false,
    campaign: undefined,
    source: undefined,
    medium: undefined,
  });

  useEffect(() => {
    const params = initUTMTracking();
    setUtmParams(params);
    
    const personalData = getPersonalization(params);
    setPersonalization(personalData);
  }, []);

  return (
    <UTMContext.Provider value={{ utmParams, ...personalization }}>
      {children}
    </UTMContext.Provider>
  );
};

export const useUTM = (): UTMContextType => {
  const context = useContext(UTMContext);
  if (context === undefined) {
    throw new Error('useUTM must be used within a UTMProvider');
  }
  return context;
};
