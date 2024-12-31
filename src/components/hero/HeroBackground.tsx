import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10" />
      
      {/* Simplified gradient overlay */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      )}

      {/* Simplified grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: 'linear-gradient(90deg, transparent 99%, rgba(59, 130, 246, 0.3) 1%), linear-gradient(0deg, transparent 99%, rgba(59, 130, 246, 0.3) 1%)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}