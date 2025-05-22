import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Code } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "500+",
    label: "Global Clients",
    description: "Trusted by businesses worldwide"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise since 2009"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: "20+",
    label: "Countries",
    description: "International presence"
  },
  {
    icon: <Code className="w-8 h-8" />,
    value: "1000+",
    label: "Projects",
    description: "Successfully delivered"
  }
];

export function AboutStats() {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 text-center">
                <div className="mb-4 text-blue-300">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-blue-100">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}