import React from 'react';
import { motion } from 'framer-motion';
import { textRevealVariants } from './animations';

export function Catchline() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textRevealVariants}
      className="relative mt-8 text-center"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative space-y-4">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: '200% auto',
          }}
        >
          Where Innovation Meets Excellence
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Transforming businesses through cutting-edge technology
          <br className="hidden sm:block" />
          and innovative solutions
        </motion.p>
      </div>
    </motion.div>
  );
}