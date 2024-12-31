import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export function HeroHeadline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none mb-6">
          <span className="inline-flex items-center gap-4">
            <Rocket className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Transform
            </span>
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400" />
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Your Future
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-blue-100/90 max-w-2xl mx-auto">
          Where Innovation Meets Excellence
        </p>
      </motion.div>
    </div>
  );
}