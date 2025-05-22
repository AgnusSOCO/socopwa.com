import React from 'react';
import { HeroBackground3D } from './HeroBackground3D';
import { HeroContent } from './HeroContent';
import { HeroStats } from './HeroStats';
import { HeroFeatures } from './HeroFeatures';
import { HeroTrustedBy } from './HeroTrustedBy';
import { HeroScrollIndicator } from './HeroScrollIndicator';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <HeroBackground3D />
      
      <div className="relative flex flex-col min-h-screen">
        {/* Main content section with proper spacing from navbar */}
        <div className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 flex-1 flex flex-col">
            {/* Center content vertically with proper spacing */}
            <div className="flex-1 flex items-center justify-center pt-24 md:pt-20">
              <HeroContent />
            </div>

            {/* Bottom section */}
            <div className="pb-24">
              <HeroFeatures />
              <HeroStats />
              <HeroTrustedBy />
            </div>
          </div>
        </div>

        <HeroScrollIndicator />
      </div>
    </div>
  );
}