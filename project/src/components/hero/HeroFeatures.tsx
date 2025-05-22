import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Zap, Shield } from 'lucide-react';

export function HeroFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-16 px-4 sm:px-0"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: <Brain className="w-6 h-6" />,
            title: "AI Integration",
            description: "Advanced machine learning and intelligent automation solutions"
          },
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "Cloud Innovation",
            description: "Scalable cloud infrastructure and digital transformation"
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Digital Solutions",
            description: "Custom software and digital workflow optimization"
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise Security",
            description: "Comprehensive cybersecurity and compliance solutions"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="relative group"
          >
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
                delay: index * 0.2,
              }}
            />
            <div className="relative bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-blue-400 p-3 bg-white/5 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blue-100/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}