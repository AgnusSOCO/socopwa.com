import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function HeroFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-16 px-4 sm:px-0"
    >
      <div className="relative group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative bg-white/5 backdrop-blur-lg p-6 sm:p-8 rounded-lg border border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-blue-400 p-3 bg-white/5 rounded-lg flex-shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Global Technology Excellence
              </h3>
              <p className="text-sm sm:text-base text-blue-100/80">
                Delivering innovative AI solutions and digital transformation for enterprises worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
