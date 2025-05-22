import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users } from 'lucide-react';

const highlights = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Implementation",
    description: "Quick deployment with minimal disruption to your business operations"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Tailored Solutions",
    description: "Custom-built solutions that match your specific business needs"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Support",
    description: "24/7 dedicated support from our team of IT professionals"
  }
];

export function ServiceHighlights() {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-blue-100">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}