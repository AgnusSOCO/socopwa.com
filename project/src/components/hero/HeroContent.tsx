import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

export function HeroContent() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative inline-block mb-12"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <h1 className="relative text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter max-w-[95vw] mx-auto">
              <motion.div
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block mb-6 leading-[1.1] py-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white animate-gradient"
              >
                Transform Your
              </motion.div>
              <motion.div
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block leading-[1.1] py-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-slow"
              >
                Digital Future
              </motion.div>
            </h1>
          </motion.div>

          {/* Enhanced Catchline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mx-auto mb-16 max-w-4xl px-4"
          >
            <div className="relative space-y-4">
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100/90 leading-relaxed">
                  <span className="block">Empowering businesses with{' '}</span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative inline-block font-semibold"
                  >
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
                      next-generation
                    </span>
                  </motion.span>
                </h2>
                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100/90 leading-relaxed">
                  technology solutions
                </h2>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"
                animate={{
                  scale: [1, 1.5],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative flex items-center gap-2 text-lg font-medium">
                Get Started
                <Zap className="w-5 h-5 animate-pulse" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}