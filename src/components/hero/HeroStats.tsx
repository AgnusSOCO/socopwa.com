import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: <Brain className="w-8 h-8" />,
    value: "500+",
    label: "AI Solutions Deployed",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "1000+",
    label: "Digital Transformations",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "15+",
    label: "Years of Innovation",
  },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          className="relative group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
          <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center">
            <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>
            <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              {stat.value}
            </div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}