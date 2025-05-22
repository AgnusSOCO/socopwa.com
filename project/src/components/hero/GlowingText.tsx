import React from 'react';
import { motion } from 'framer-motion';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingText({ children, className = '' }: GlowingTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ backgroundSize: '200% 100%' }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-relaxed">
        {children}
      </span>
    </motion.div>
  );
}