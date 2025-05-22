import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Trophy, Star } from 'lucide-react';

const awards = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Best IT Solutions Provider 2024",
    organization: "Tech Excellence Awards",
    year: "2024"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Top Cybersecurity Company",
    organization: "CyberSec Ratings",
    year: "2023"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Innovation Excellence",
    organization: "Business Technology Forum",
    year: "2023"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Best Cloud Services Provider",
    organization: "Cloud Computing Awards",
    year: "2023"
  }
];

export function Awards() {
  return (
    <div className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <div className="text-blue-400 mb-4">{award.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-400 text-sm mb-1">{award.organization}</p>
              <p className="text-gray-500 text-sm">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}