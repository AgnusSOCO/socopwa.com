import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Code } from 'lucide-react';

export function HeroTrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="mt-20"
    >
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% 100%' }}
          />
        </div>

        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform" />
                  <Brain className="w-12 h-12 text-blue-400 relative z-10" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">AI Innovation</h3>
                <p className="text-blue-200/80">Cutting-edge artificial intelligence solutions</p>
              </div>
            </motion.div>

            {/* Digital Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform" />
                  <Code className="w-12 h-12 text-purple-400 relative z-10" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Digital Transformation</h3>
                <p className="text-blue-200/80">End-to-end business modernization</p>
              </div>
            </motion.div>

            {/* Cloud Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform" />
                  <Cloud className="w-12 h-12 text-blue-400 relative z-10" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Cloud Solutions</h3>
                <p className="text-blue-200/80">Scalable cloud infrastructure and services</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}