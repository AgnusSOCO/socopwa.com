import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import Partners from './components/Partners';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CrispChat from './components/CrispChat';
import ExitIntentPopup from './components/ExitIntentPopup';
import TrustBadgeBar from './components/TrustBadgeBar';
import ROICalculator from './components/ROICalculator';
import CalendarEmbed from './components/CalendarEmbed';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white relative">
        {/* Global animated background */}
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        
        {/* Gradient overlay for better content readability */}
        <div className="fixed inset-0 z-10 bg-gradient-to-b from-black/60 via-black/80 to-black/90 pointer-events-none"></div>
        
        {/* All content with higher z-index */}
        <div className="relative z-20">
          <Header />
          <Hero />
          
          {/* Trust Badge Bar after Hero */}
          <TrustBadgeBar />
          
          <DemoSection />
          <Services />
          <SuccessStories />
          <Partners />
          <TechStack />
          <Certifications />
          
          {/* ROI Calculator */}
          <ROICalculator />
          
          <FAQ />
          
          {/* Calendar Embed */}
          <CalendarEmbed />
          
          <Contact />
          <Footer />
        </div>
        
        {/* Conversion Optimization Overlays */}
        <ExitIntentPopup />
        <CrispChat />
      </div>
    </LanguageProvider>
  );
}

export default App;
