import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  gradient: string;
}

export function GradientText({ text, gradient }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
      animate={{ opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {text}
    </motion.span>
  );
}