import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Trophy, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Growth & Development",
    description: "Continuous learning and career development opportunities"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options"
  }
];

export function CareersBenefits() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-blue-600">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}