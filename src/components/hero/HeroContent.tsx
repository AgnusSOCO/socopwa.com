import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { HeroHeadline } from './HeroHeadline';

export function HeroContent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Static gradient */}
          <div className="absolute -inset-x-20 -inset-y-32 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 rounded-[50%] blur-[100px] opacity-50" />
          
          {!shouldReduceMotion && (
            <motion.div
              className="absolute -inset-x-20 -inset-y-32 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 rounded-[50%] blur-[100px]"
              animate={{ 
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          <div className="relative z-10">
            <HeroHeadline />

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}