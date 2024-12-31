import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FloatingIconProps {
  children: React.ReactNode;
}

export function FloatingIcon({ children }: FloatingIconProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}