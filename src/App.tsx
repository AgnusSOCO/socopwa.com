import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import Partners from './components/Partners';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
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
        <DemoSection />
        <Services />
        <SuccessStories />
        <Partners />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;