import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-blue-600/30 border-t-blue-600"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      />
    </div>
  );
}