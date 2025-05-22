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
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-none mb-6">
          <span className="inline-flex items-center gap-4">
            <Rocket className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white"
              animate={shouldReduceMotion ? {} : {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Transform
            </motion.span>
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400" />
          </span>
          <br />
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
            animate={shouldReduceMotion ? {} : {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5
            }}
            style={{ backgroundSize: '200% auto' }}
          >
            Your Future
          </motion.span>
        </h1>

        <motion.p 
          className="text-2xl sm:text-3xl text-blue-100/90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Where Innovation Meets Excellence
        </motion.p>
      </motion.div>
    </div>
  );
}