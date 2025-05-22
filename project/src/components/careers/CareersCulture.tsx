import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Work-Life Balance",
    description: "We believe in maintaining a healthy balance between work and personal life."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Inclusive Environment",
    description: "Diversity and inclusion are at the core of our culture."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Growth Mindset",
    description: "Continuous learning and development opportunities."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "We encourage creative thinking and new ideas."
  }
];

export function CareersCulture() {
  return (
    <div id="culture" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a workplace that values creativity, growth, and well-being
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-blue-600">{value.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}